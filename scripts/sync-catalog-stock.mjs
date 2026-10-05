/**
 * Aligne la disponibilite du flux catalogue Meta sur le stock reel.
 *
 * Le flux (catalog.csv) est recharge chaque jour par Meta a 14h37 (Europe/Paris).
 * Sans cette synchro, un produit en rupture reste annonce "in stock" : la pub
 * envoie le client vers un bouton d'ajout desactive.
 *
 * Pour les produits du catalogue du site (script.js), seule la colonne
 * "availability" est touchee : prix, titres, images et liens restent la
 * propriete du CSV.
 *
 * Pour les produits crees depuis l'admin (extra_products), c'est la base qui
 * fait foi : titre, description, prix, lien et photo sont realignes a chaque
 * passage. Sans cela, renommer une pizza dans l'admin ne changeait rien dans
 * le flux Google, sans le moindre avertissement.
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
  return '"' + String(value ?? "").replace(/"/g, '""') + '"';
}

/**
 * Decoupe le CSV en enregistrements, champ par champ.
 *
 * Un champ entre guillemets peut contenir des virgules ET des retours a la
 * ligne. Decouper d'abord par lignes, comme on le faisait, coupait en deux
 * les trois pizzas dont la description venait de l'admin sur plusieurs
 * lignes : la colonne "availability" devenait introuvable et le script
 * plantait au passage suivant.
 */
function parseCsv(text) {
  const records = [];
  let record = [];
  let field = "";
  let inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; }
        else inQuotes = false;
      } else if (c !== "\r") field += c;
      continue;
    }
    if (c === '"') { inQuotes = true; continue; }
    if (c === ",") { record.push(field); field = ""; continue; }
    if (c === "\r") continue;
    if (c === "\n") {
      record.push(field);
      if (record.length > 1 || record[0] !== "") records.push(record);
      record = [];
      field = "";
      continue;
    }
    field += c;
  }
  if (field !== "" || record.length) { record.push(field); records.push(record); }
  return records;
}

/** Texte sur une seule ligne : une description coupee casse la colonne suivante. */
function uneSeuleLigne(value) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

/** La ligne de flux telle qu'elle doit etre pour un produit de l'admin. */
function ligneExtra(p, dispo) {
  return [
    p.id,
    uneSeuleLigne(p.name),
    uneSeuleLigne(p.description || p.name),
    dispo,
    "new",
    `${Number(p.price).toFixed(2)} EUR`,
    `https://epicerieducoin.fr/?p=${p.id}#catalogue`,
    p.image,
    "L'Épicerie du Coin",
    "Food, Beverages & Tobacco > Food Items",
  ];
}

const COLONNES = ["id", "titre", "description", "disponibilite", "etat",
  "prix", "lien", "photo", "marque", "categorie"];

const raw = readFileSync(CSV, "utf8");
const eol = raw.includes("\r\n") ? "\r\n" : "\n";
const records = parseCsv(raw);
const extrasParId = new Map(extras.map((p) => [p.id, p]));
const presents = new Set();
const changes = [];

const updated = records.map((cells, i) => {
  if (i === 0) return cells;
  const id = cells[0];
  if (!id) return cells;
  presents.add(id);

  // Produit de l'admin : la base fait foi sur toute la ligne.
  const extra = extrasParId.get(id);
  if (extra) {
    const dispo = (stock.get(id) ?? 0) > 0 ? "in stock" : "out of stock";
    const voulue = ligneExtra(extra, dispo);
    const ecarts = COLONNES.filter((_, c) => cells[c] !== voulue[c]);
    if (ecarts.length === 0) return cells;
    changes.push(`${id} : ${ecarts.join(", ")} realigne(s) sur l'admin`);
    return voulue;
  }

  // Produit du catalogue du site : on ne touche que la disponibilite.
  if (!stock.has(id)) return cells;
  const wanted = stock.get(id) > 0 && sellable.has(id) ? "in stock" : "out of stock";
  if (cells[AVAILABILITY] === wanted) return cells;

  const why = stock.get(id) === 0
    ? "rupture"
    : sellable.has(id) ? `stock ${stock.get(id)}` : "absent du catalogue du site";
  changes.push(`${id} : ${cells[AVAILABILITY]} -> ${wanted} (${why})`);
  const copie = cells.slice();
  copie[AVAILABILITY] = wanted;
  return copie;
});

// Les produits de l'admin absents du flux y sont ajoutes.
for (const p of extras) {
  if (presents.has(p.id)) continue;
  const dispo = (stock.get(p.id) ?? 0) > 0 ? "in stock" : "out of stock";
  updated.push(ligneExtra(p, dispo));
  changes.push(`${p.id} : ajoute au flux (${dispo})`);
}

if (changes.length === 0) {
  console.log("Flux deja aligne sur le stock, aucune modification.");
  process.exit(0);
}

writeFileSync(CSV, updated.map((r) => r.map(toCsvField).join(",")).join(eol) + eol);
console.log(`${changes.length} modification(s) :`);
for (const c of changes) console.log("  - " + c);
