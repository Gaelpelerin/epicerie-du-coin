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
 * Regle : quantite > 0 -> in stock ; quantite = 0 -> out of stock ;
 * produit absent de la table -> etat du CSV inchange (on ne devine pas).
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
if (stock.size === 0) throw new Error("Table product_stock vide : synchro interrompue par securite.");

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

  const wanted = stock.get(id) > 0 ? "in stock" : "out of stock";
  const current = cells[AVAILABILITY].replace(/^"|"$/g, "");
  if (current === wanted) return line;

  changes.push(`${id} : ${current} -> ${wanted} (stock ${stock.get(id)})`);
  cells[AVAILABILITY] = `"${wanted}"`;
  return cells.join(",");
});

if (changes.length === 0) {
  console.log("Flux deja aligne sur le stock, aucune modification.");
  process.exit(0);
}

writeFileSync(CSV, updated.join(eol));
console.log(`${changes.length} disponibilite(s) mise(s) a jour :`);
for (const c of changes) console.log("  - " + c);
