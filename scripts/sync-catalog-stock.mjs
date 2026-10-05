/**
 * Aligne la disponibilite du flux catalogue Meta sur le stock reel.
 *
 * Le flux (catalog.csv) est recharge chaque jour par Meta a 14h37 (Europe/Paris).
 * Sans cette synchro, un produit en rupture reste annonce "in stock" : la pub
 * envoie le client vers un bouton d'ajout desactive.
 *
 * Seule la colonne "availability" est touchee. Les prix, titres, images et
 * liens restent la propriete du CSV, qui n'est pas regenere.
 *
 * Regle : "in stock" exige DEUX conditions, une quantite > 0 ET une fiche
 * produit sur le site. Certains articles ont du stock physique sans figurer
 * au catalogue web (pas encore de photo) : ils sont invendables en ligne et
 * doivent rester en rupture cote Meta, sans quoi la pub envoie le client
 * vers une page ou le produit n'existe pas.
 * Produit absent de la table de stock -> etat du CSV inchange (on ne devine pas).
 */
import { readFileSync, writeFileSync } from "node:fs";

const CSV = "catalog.csv";
const AVAILABILITY = 3; // "id","title","description","availability",...

// Une seule source pour l'URL et la cle publique : celles que le site utilise deja.
const stockJs = readFileSync("stock.js", "utf8");
const pick = (name) => {
  const m = stockJs.match(new RegExp(`${name}\\s*=\\s*"([^"]+)"`));
  if (!m) throw new Error(`${name} introuvable dans stock.js`);
  return m[1];
};
const url = pick("SUPABASE_URL");
const key = pick("SUPABASE_KEY");

const res = await fetch(`${url}/rest/v1/product_stock?select=product_id,quantity`, {
  headers: { apikey: key, Authorization: `Bearer ${key}` },
});
if (!res.ok) throw new Error(`Supabase a repondu ${res.status} : ${await res.text()}`);

const stock = new Map(
  (await res.json()).map((r) => [String(r.product_id), Number(r.quantity) || 0])
);

// Produits crees depuis l'admin (table extra_products). Ils ne figurent pas
// dans script.js, donc le CSV ne les connaissait pas : les 8 pizzas 26 cm
// etaient invisibles pour Google et Meta. On genere leur ligne ici.
// Seules celles qui ont une vraie URL d'image sont retenues : une photo encore
// stockee en data URI n'a pas d'adresse et serait rejetee par le flux.
// On passe par la RPC list_extra_products, pas par la table : extra_products
// est protegee par RLS et la cle publique n'y a pas acces en lecture directe.
// La RPC ne renvoie que les produits actifs.
const extraRes = await fetch(`${url}/rest/v1/rpc/list_extra_products`, {
  method: "POST",
  headers: { apikey: key, Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
  body: "{}",
});
if (!extraRes.ok) throw new Error(`list_extra_products : ${extraRes.status} ${await extraRes.text()}`);
const extras = (await extraRes.json()).filter(
  (p) => !p.alcohol && /^https?:\/\//i.test(String(p.image || "")),
);
if (stock.size === 0) throw new Error("Table product_stock vide : synchro interrompue par securite.");

// Les produits reellement proposes a la vente, tels que le site les declare.
const sellable = new Set(
  [...readFileSync("script.js", "utf8").matchAll(/\bid:\s*"([a-z0-9-]+)"/g)].map((m) => m[1])
);
if (sellable.size === 0) throw new Error("Aucun produit lu dans script.js : synchro interrompue par securite.");

/** Protege un champ pour l'ecriture CSV : guillemets doubles a l'interieur. */
function toCsvField(value) {
  return '"' + String(value).replace(/"/g, '""') + '"';
}

/** Decoupe une ligne CSV en respectant les guillemets. */
function splitCsvLine(line) {
  const out = [];
  let field = "", inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      if (inQuotes && line[i + 1] === '"') { field += '"'; i++; }
      else inQuotes = !inQuotes;
    } else if (c === "," && !inQuotes) { out.push(field); field = ""; }
    else field += c;
  }
  out.push(field);
  return out;
}

const raw = readFileSync(CSV, "utf8");
const eol = raw.includes("\r\n") ? "\r\n" : "\n";
const lines = raw.split(/\r?\n/);
const changes = [];

const updated = lines.map((line, i) => {
  if (i === 0 || line.trim() === "") return line;
  const cells = splitCsvLine(line);
  const id = cells[0].replace(/^"|"$/g, "");
  if (!stock.has(id)) return line;

  const wanted = stock.get(id) > 0 && sellable.has(id) ? "in stock" : "out of stock";
  const current = cells[AVAILABILITY].replace(/^"|"$/g, "");
  if (current === wanted) return line;

  const why = stock.get(id) === 0
    ? "rupture"
    : sellable.has(id) ? `stock ${stock.get(id)}` : "absent du catalogue du site";
  changes.push(`${id} : ${current} -> ${wanted} (${why})`);
  cells[AVAILABILITY] = wanted;
  // splitCsvLine retire les guillemets : il faut les remettre sur TOUS les
  // champs, pas seulement sur celui qu'on modifie. Sinon un champ contenant
  // une virgule — « Food, Beverages & Tobacco > Food Items », ou une
  // description — eclate en deux colonnes et Google rejette la ligne.
  // C'est ce qui etait arrive a quiche-lorraine, la seule ligne dont le stock
  // avait change depuis la mise en service du script.
  return cells.map(toCsvField).join(",");
});

// Les produits de l'admin absents du flux y sont ajoutes ; ceux qui y figurent
// deja gardent leur ligne, dont la disponibilite vient d'etre alignee plus haut.
const presents = new Set(
  updated.slice(1).filter((l) => l.trim()).map((l) => splitCsvLine(l)[0]),
);
const ajouts = [];
for (const p of extras) {
  if (presents.has(p.id)) continue;
  const dispo = (stock.get(p.id) ?? 0) > 0 ? "in stock" : "out of stock";
  ajouts.push([
    p.id,
    p.name,
    p.description || p.name,
    dispo,
    "new",
    `${Number(p.price).toFixed(2)} EUR`,
    `https://epicerieducoin.fr/?p=${p.id}#catalogue`,
    p.image,
    "L'Épicerie du Coin",
    "Food, Beverages & Tobacco > Food Items",
  ].map(toCsvField).join(","));
  changes.push(`${p.id} : ajoute au flux (${dispo})`);
}
if (ajouts.length) {
  // on insere avant l'eventuelle ligne vide finale
  const fin = updated.length && updated[updated.length - 1].trim() === "" ? updated.length - 1 : updated.length;
  updated.splice(fin, 0, ...ajouts);
}

if (changes.length === 0) {
  console.log("Flux deja aligne sur le stock, aucune modification.");
  process.exit(0);
}

writeFileSync(CSV, updated.join(eol));
console.log(`${changes.length} disponibilite(s) mise(s) a jour :`);
for (const c of changes) console.log("  - " + c);
