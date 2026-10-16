/**
 * Ecrit dans index.html un catalogue de secours, lisible sans JavaScript.
 *
 * Pourquoi : tout le catalogue est construit par script.js. La page envoyee par
 * le serveur ne contenait aucun nom de produit — « bretzel » n'y apparaissait
 * pas une seule fois. Un controle automatique qui n'execute pas les scripts
 * ouvrait donc ?p=bretzel-gratine-lard sur une page ne mentionnant nulle part
 * le produit annonce. Meta a refuse l'annonce du bretzel le 16 octobre a 2h03
 * avant de la retablir a 5h44.
 *
 * Le bloc est encadre par CATALOGUE-STATIQUE:DEBUT / :FIN et reecrit a chaque
 * passage : une seule source de verite, script.js et la base, jamais une liste
 * recopiee a la main qui finirait par mentir sur les prix.
 *
 * Les produits de l'admin (extra_products) sont lus par la meme RPC que le
 * site, list_extra_products : la table est protegee par RLS et la cle publique
 * n'y a pas acces en lecture directe.
 */
import { readFileSync, writeFileSync } from "node:fs";

const HTML = "index.html";
const DEBUT = "<!-- CATALOGUE-STATIQUE:DEBUT -->";
const FIN = "<!-- CATALOGUE-STATIQUE:FIN -->";

const script = readFileSync("script.js", "utf8");

/** Echappe le texte insere dans la page. */
function proteger(texte) {
  return String(texte)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function prixFr(valeur) {
  return Number(valeur).toFixed(2).replace(".", ",") + " €";
}

// Les produits du catalogue, lus dans script.js — la source de verite du site.
const produits = [];
const bloc = /\{\s*id:\s*"([a-z0-9-]+)"[\s\S]{0,600}?\}/g;
let m;
while ((m = bloc.exec(script))) {
  const texte = m[0];
  const nom = texte.match(/name:\s*"((?:[^"\\]|\\.)*)"/);
  const prix = texte.match(/price:\s*([0-9.]+)/);
  if (nom && prix) produits.push({ id: m[1], nom: nom[1].replace(/\\"/g, '"'), prix: prix[1] });
}
if (produits.length < 20) {
  throw new Error(`Seulement ${produits.length} produits lus dans script.js : generation interrompue.`);
}

// Les produits crees depuis l'admin, par la RPC publique.
const pick = (nom) => {
  const trouve = readFileSync("stock.js", "utf8").match(new RegExp(`${nom}\\s*=\\s*"([^"]+)"`));
  if (!trouve) throw new Error(`${nom} introuvable dans stock.js`);
  return trouve[1];
};
const url = pick("SUPABASE_URL");
const cle = pick("SUPABASE_KEY");

let extras = [];
try {
  const reponse = await fetch(`${url}/rest/v1/rpc/list_extra_products`, {
    method: "POST",
    headers: { apikey: cle, Authorization: `Bearer ${cle}`, "Content-Type": "application/json" },
    body: "{}",
  });
  if (reponse.ok) {
    extras = (await reponse.json())
      .filter((p) => p && p.id && p.name)
      .map((p) => ({ id: p.id, nom: p.name, prix: p.price }));
  } else {
    console.warn(`list_extra_products : ${reponse.status}, produits de l'admin ignores.`);
  }
} catch (error) {
  console.warn(`list_extra_products injoignable, produits de l'admin ignores : ${error.message}`);
}

const tous = [...produits, ...extras];
const lignes = tous
  .map(
    (p) =>
      `              <li><a href="?p=${proteger(p.id)}">${proteger(p.nom)}</a> — ${prixFr(p.prix)}</li>`
  )
  .join("\n");

const contenu = `${DEBUT}
          <noscript>
            <section class="catalogue-secours" aria-label="Catalogue">
              <h3>Notre catalogue</h3>
              <p>
                Livraison 7j/7 au Thillot et 30 km alentour, même tard le soir.
                Pour commander en ligne, activez JavaScript, ou appelez le
                <a href="tel:+33675748449">06 75 74 84 49</a>.
              </p>
              <ul>
${lignes}
              </ul>
            </section>
          </noscript>
          ${FIN}`;

const html = readFileSync(HTML, "utf8");
const i = html.indexOf(DEBUT);
const j = html.indexOf(FIN);
if (i === -1 || j === -1 || j < i) {
  throw new Error("Reperes CATALOGUE-STATIQUE introuvables dans index.html.");
}
const nouveau = html.slice(0, i) + contenu + html.slice(j + FIN.length);
if (nouveau === html) {
  console.log("Catalogue de secours deja a jour.");
  process.exit(0);
}
writeFileSync(HTML, nouveau);
console.log(
  `Catalogue de secours ecrit : ${produits.length} produits du site + ${extras.length} de l'admin.`
);
