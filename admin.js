// [id, name, price, category, alcohol] — synchronisé avec products[] de script.js.
// Le prix/catégorie/alcool servent à la saisie de commande manuelle (mode admin).
const productsForAdmin = [
  ["quiche-lorraine", "Quiche lorraine", 5.9, "quiches", false],
  ["quiche-saumon", "Quiche saumon & brocoli", 5.9, "quiches", false],
  ["quiche-epinards", "Quiche épinards, pignons de pin", 5.9, "quiches", false],
  ["quiche-poulet", "Quiche poulet", 5.9, "quiches", false],
  ["quiche-dinde-halal", "Quiche dinde halal", 5.9, "quiches", false],
  ["quiche-poireaux", "Quiche poireaux", 5.9, "quiches", false],
  ["quiche-mediterraneenne", "Quiche méditerranéenne", 5.9, "quiches", false],
  ["quiche-3-fromages", "Quiche 3 fromages", 5.9, "quiches", false],
  ["quiche-chevre-tomate", "Quiche chèvre tomate", 5.9, "quiches", false],
  ["croque", "Croque-monsieur premium", 8.9, "snacking", false],
  ["bretzel-nature", "Bretzel nature", 3.9, "snacking", false],
  ["bretzel-gratine-lard", "Bretzel gratiné lard & emmental", 5.9, "snacking", false],
  ["pizza-napolitaine", "Pizza napolitaine", 8.9, "pizzas", false],
  ["pizza-jambon-fromage", "Pizza jambon fromage", 8.9, "pizzas", false],
  ["pizza-mozzarella-pesto", "Pizza mozzarella tomate pesto", 8.9, "pizzas", false],
  ["pizza-chevre", "Pizza chèvre miel", 8.9, "pizzas", false],
  ["pizza-saumon-aneth", "Pizza saumon aneth", 8.9, "pizzas", false],
  ["pizza-poulet-curry", "Pizza poulet curry", 8.9, "pizzas", false],
  ["pizza-poulet", "Pizza poulet", 8.9, "pizzas", false],
  ["pizza-vegetarienne", "Pizza végétarienne", 8.9, "pizzas", false],
  ["pizza-4-fromages", "Pizza 4 fromages", 8.9, "pizzas", false],
  ["pizza-pincee-margherita", "Pizza pincée margherita", 7.9, "pizza-pincees", false],
  ["pizza-pincee-diavola", "Pizza pincée diavola", 7.9, "pizza-pincees", false],
  ["pizza-pincee-jambon", "Pizza pincée jambon fromage", 7.9, "pizza-pincees", false],
  ["panwich-jambon-emmental", "Panwich jambon emmental", 8.9, "panwichs", false],
  ["panwich-mozzarella-pesto", "Panwich mozzarella tomate pesto", 8.9, "panwichs", false],
  ["panwich-jambon-fromage", "Panwich jambon fromage emmental", 8.9, "panwichs", false],
  ["donut-speculoos", "Donut Spéculoos", 4.9, "douceurs", false],
  ["donut-lion", "Donut Lion", 4.9, "douceurs", false],
  ["brioche-babka", "Brioche Babka", 14.9, "douceurs", false],
  ["cake-marbre-rocher", "Cake marbré rocher", 24.9, "douceurs", false],
  ["carrot-cake", "Carrot cake", 19.9, "douceurs", false],
  ["cake-citron", "Cake citron", 18.9, "douceurs", false],
  ["cake-marbre", "Cake marbré", 17.9, "douceurs", false],
  ["cake-pain-epices", "Cake pain d'épices", 17.9, "douceurs", false],
  ["kouglof-sucre", "Kouglof sucré", 14.9, "douceurs", false],
  ["evian", "Evian 50 cl", 2.5, "eaux", false],
  ["perrier-33", "Perrier 33 cl", 3.5, "eaux", false],
  ["san-pellegrino-50", "San Pellegrino 50 cl", 3.9, "eaux", false],
  ["coca", "Coca-Cola 33 cl", 3.5, "softs", false],
  ["coca-zero", "Coca-Cola Zero 33 cl", 3.5, "softs", false],
  ["ice-tea-peche", "Ice Tea pêche", 3.5, "softs", false],
  ["oasis-tropical", "Oasis Tropical", 3.5, "softs", false],
  ["orangina", "Orangina", 3.9, "softs", false],
  ["schweppes-agrumes", "Schweppes Agrumes", 3.9, "softs", false],
  ["lemonaid-citron", "Lemonaid citron bio", 5.9, "softs", false],
  ["lemonaid-passion", "Lemonaid passion bio", 5.9, "softs", false],
  ["lemonaid-ginger", "Lemonaid ginger bio", 5.9, "softs", false],
  ["charitea-the-vert", "Charitea thé vert bio", 5.9, "softs", false],
  ["jus-pomme-artisanal", "Jus de pomme artisanal 25 cl", 3.9, "jus", false],
  ["jus-orange-presse", "Jus orange pressé premium 25 cl", 3.9, "jus", false],
  ["nectar-mirabelle", "Nectar mirabelle artisanal 25 cl", 3.9, "jus", false],
  ["jus-pomme-fruits-rouges", "Jus pomme - fruits rouges 25 cl", 3.9, "jus", false],
  ["desperados", "Desperados 33 cl", 5.9, "bieres", true],
  ["heineken", "Heineken 33 cl", 4.9, "bieres", true],
  ["corona", "Corona 33 cl", 5.9, "bieres", true],
  ["lorraine-peu-blond", "Lorraine Peu Blond", 5.9, "bieres", true],
  ["lorraine-duchasse", "Lorraine Duchasse", 6.9, "bieres", true],
  ["saint-nicolas", "Saint Nicolas", 7.5, "bieres", true],
  ["loroyse-triple", "Loroyse Triple", 7.5, "bieres", true],
  ["noiraude-blanche", "Noiraude Blanche", 7.9, "bieres", true],
  ["riesling-alsace", "Riesling", 6.9, "vins", true],
  ["chardonnay", "Chardonnay Pierres", 19.9, "vins", true],
  ["pinot-noir", "Pinot noir", 16.9, "vins", true],
  ["cotes-du-rhone", "Côtes-du-Rhône", 19.9, "vins", true],
  ["coteaux-aix-rose", "Rosé Coteaux d'Aix", 17.9, "vins", true],
  ["uby-3", "UBY n°3", 19.9, "vins", true],
  ["uby-4", "UBY n°4", 16.9, "vins", true],
  ["prosecco", "Prosecco", 18.9, "bulles", true],
  ["champagne-brut", "Champagne Veuve Pelletier", 39.9, "bulles", true],
  ["gin-tonic", "Gin Tonic prêt à boire 25 cl", 5.9, "apero", true],
  ["spritz", "Spritz prêt à boire 25 cl", 5.9, "apero", true],
  ["mojito", "Mojito prêt à boire 25 cl", 5.9, "apero", true],
  ["pack-apero", "Pack Apéro Chalet", 24.9, "pack", true],
];

const loginPanel = document.querySelector("[data-admin-login]");
const stockPanel = document.querySelector("[data-admin-stock]");
const stockTable = document.querySelector("[data-stock-table]");
const salesDashboard = document.querySelector("[data-sales-dashboard]");
const salesHistory = document.querySelector("[data-sales-history]");
const salesFilterOpenButton = document.querySelector("[data-sales-filter-open]");
const salesModal = document.querySelector("[data-sales-modal]");
const salesChartModal = document.querySelector("[data-sales-chart-modal]");
const salesFilterModal = document.querySelector("[data-sales-filter-modal]");
const salesFilterModalContent = document.querySelector("[data-sales-filter-modal-content]");
const errorMessage = document.querySelector("[data-admin-error]");
const successMessage = document.querySelector("[data-admin-success]");
let salesChartRange = "today";
let salesFilterPeriod = "this-week";
let salesFilterMonth = new Date().toISOString().slice(0, 7);
let salesFilterYear = new Date().getFullYear();
let adminSessionPin = "";
let historySales = [];

const formatPrice = (price) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(price);

function renderStockTable() {
  const stock = loadStock();
  stockTable.innerHTML = productsForAdmin
    .map(
      ([id, name]) => {
        const quantity = stock[id] ?? 0;
        const status = quantity <= 0 ? "Victime de son succès" : quantity <= 3 ? "Stock faible" : "Disponible";

        return `
        <label class="stock-row">
          <span>
            <strong>${name}</strong>
            <small>${status}</small>
          </span>
          <input type="number" min="0" step="1" value="${quantity}" data-stock-input="${id}" />
        </label>
      `;
      }
    )
    .join("");
}

function startOfDay(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function startOfWeek(date = new Date()) {
  const start = startOfDay(date);
  const day = start.getDay() || 7;
  start.setDate(start.getDate() - day + 1);
  return start;
}

function startOfMonth(date = new Date()) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date, offset) {
  return new Date(date.getFullYear(), date.getMonth() + offset, 1);
}

function startOfYear(date = new Date()) {
  return new Date(date.getFullYear(), 0, 1);
}

function salesSince(sales, startDate) {
  return sales.filter((sale) => new Date(sale.createdAt) >= startDate);
}

function sumSales(sales) {
  return sales.reduce((sum, sale) => sum + sale.total, 0);
}

function salesBetween(sales, startDate, endDate) {
  return sales.filter((sale) => {
    const createdAt = new Date(sale.createdAt);
    return createdAt >= startDate && createdAt < endDate;
  });
}

function getFilteredSales(sales) {
  const now = new Date();
  const thisWeek = startOfWeek(now);
  const thisMonth = startOfMonth(now);
  const thisYear = startOfYear(now);

  if (salesFilterPeriod === "all") return { sales, label: "Toutes les ventes" };
  if (salesFilterPeriod === "today") return { sales: salesSince(sales, startOfDay(now)), label: "Aujourd'hui" };
  if (salesFilterPeriod === "this-week") return { sales: salesSince(sales, thisWeek), label: "Cette semaine" };
  if (salesFilterPeriod === "last-week") {
    const previousWeek = new Date(thisWeek);
    previousWeek.setDate(previousWeek.getDate() - 7);
    return { sales: salesBetween(sales, previousWeek, thisWeek), label: "Semaine dernière" };
  }
  if (salesFilterPeriod === "this-month") return { sales: salesSince(sales, thisMonth), label: "Ce mois-ci" };
  if (salesFilterPeriod === "last-month") {
    const previousMonth = addMonths(thisMonth, -1);
    return { sales: salesBetween(sales, previousMonth, thisMonth), label: "Mois dernier" };
  }
  if (salesFilterPeriod === "this-year") return { sales: salesSince(sales, thisYear), label: "Cette année" };
  if (salesFilterPeriod === "last-year") {
    const previousYear = new Date(thisYear.getFullYear() - 1, 0, 1);
    return { sales: salesBetween(sales, previousYear, thisYear), label: "Année dernière" };
  }
  if (salesFilterPeriod === "custom-year") {
    const selectedYear = new Date(Number(salesFilterYear), 0, 1);
    const nextYear = new Date(Number(salesFilterYear) + 1, 0, 1);
    return { sales: salesBetween(sales, selectedYear, nextYear), label: String(salesFilterYear) };
  }

  const [year, month] = salesFilterMonth.split("-").map(Number);
  const selectedMonth = new Date(year, month - 1, 1);
  const nextMonth = addMonths(selectedMonth, 1);
  const monthLabel = selectedMonth.toLocaleDateString("fr-FR", { month: "long", year: "numeric" });
  return { sales: salesBetween(sales, selectedMonth, nextMonth), label: monthLabel };
}

function makeProductStats(sales) {
  const stats = new Map(productsForAdmin.map(([id, name]) => [id, { id, name, quantity: 0, total: 0, clicks: 0, adds: 0 }]));
  const analytics = loadProductAnalytics();

  Object.values(analytics).forEach((item) => {
    const current = stats.get(item.id) || { id: item.id, name: item.name, quantity: 0, total: 0, clicks: 0, adds: 0 };
    current.name = item.name || current.name;
    current.clicks = item.clicks || 0;
    current.adds = item.adds || 0;
    current.lastClickAt = item.lastClickAt;
    stats.set(item.id, current);
  });

  sales.forEach((sale) => {
    sale.items.forEach((item) => {
      const current = stats.get(item.id) || { id: item.id, name: item.name, quantity: 0, total: 0, clicks: 0, adds: 0 };
      current.name = item.name || current.name;
      current.quantity += item.quantity;
      current.total += item.total;
      stats.set(item.id, current);
    });
  });

  return [...stats.values()];
}

function renderBarRows(items, maxValue, valueSelector, detailsRenderer) {
  if (!items.length) return '<p class="empty-cart">Aucune donnée pour le moment.</p>';

  return items
    .map((item, index) => {
      const value = valueSelector(item);
      const width = maxValue ? Math.max(5, Math.round((value / maxValue) * 100)) : 0;

      return `
        <div class="chart-row">
          <div class="chart-row-heading">
            <span>${index + 1}. ${item.name}</span>
            <strong>${detailsRenderer(item)}</strong>
          </div>
          <div class="chart-track" aria-hidden="true"><span style="width: ${width}%"></span></div>
        </div>
      `;
    })
    .join("");
}

function makeSalesChart(sales, range) {
  const now = new Date();
  const buckets = [];

  if (range === "today") {
    for (let hour = 0; hour < 24; hour += 1) {
      buckets.push({ label: `${String(hour).padStart(2, "0")}h`, total: 0 });
    }

    salesSince(sales, startOfDay(now)).forEach((sale) => {
      const saleDate = new Date(sale.createdAt);
      buckets[saleDate.getHours()].total += sale.total;
    });
  }

  if (range === "week") {
    const labels = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
    labels.forEach((label) => buckets.push({ label, total: 0 }));

    salesSince(sales, startOfWeek(now)).forEach((sale) => {
      const saleDate = new Date(sale.createdAt);
      const dayIndex = (saleDate.getDay() || 7) - 1;
      buckets[dayIndex].total += sale.total;
    });
  }

  if (range === "month") {
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day += 1) {
      buckets.push({ label: String(day), total: 0 });
    }

    salesSince(sales, startOfMonth(now)).forEach((sale) => {
      const saleDate = new Date(sale.createdAt);
      buckets[saleDate.getDate() - 1].total += sale.total;
    });
  }

  const maxTotal = Math.max(...buckets.map((bucket) => bucket.total), 0);
  const rangeLabel = range === "today" ? "Aujourd'hui" : range === "week" ? "Cette semaine" : "Ce mois-ci";
  const peak = buckets.reduce((best, bucket) => (bucket.total > best.total ? bucket : best), { label: "-", total: 0 });

  return `
    <section class="sales-chart-card">
      <div class="sales-chart-heading">
        <div>
          <h2>Évolution du CA</h2>
          <p>${rangeLabel} · ${formatPrice(buckets.reduce((sum, bucket) => sum + bucket.total, 0))}</p>
        </div>
        <div class="sales-range-tabs" aria-label="Période du graphique">
          <button class="${range === "today" ? "active" : ""}" type="button" data-sales-range="today">Aujourd'hui</button>
          <button class="${range === "week" ? "active" : ""}" type="button" data-sales-range="week">Semaine</button>
          <button class="${range === "month" ? "active" : ""}" type="button" data-sales-range="month">Mois</button>
        </div>
      </div>
      <div class="sales-chart-summary">
        <span>Pic</span>
        <strong>${peak.total ? `${peak.label} · ${formatPrice(peak.total)}` : "Aucune vente"}</strong>
      </div>
      <div class="sales-chart-viewport">
        <div class="sales-chart sales-chart-${range}" aria-label="Graphique CA ${rangeLabel}">
          ${buckets
            .map((bucket, index) => {
              const height = maxTotal ? Math.max(8, Math.round((bucket.total / maxTotal) * 100)) : 0;
              const hasNeighborValue = Boolean(buckets[index - 1]?.total || buckets[index + 1]?.total);
              const showMonthMarker = [0, 9, 19, 29].includes(index) && !hasNeighborValue;
              const showLabel = range === "week" || bucket.total > 0 || (range === "today" ? index % 3 === 0 : showMonthMarker);
              return `
                <div class="sales-chart-bar ${bucket.total ? "has-value" : ""}">
                  <span class="sales-chart-value">${bucket.total ? formatPrice(bucket.total) : ""}</span>
                  <i style="height: ${height}%"></i>
                  <small>${showLabel ? bucket.label : ""}</small>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSalesFilterModal() {
  const filtered = getFilteredSales(loadSales());
  const now = new Date();
  const monthChoices = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(now.getFullYear(), index, 1);
    const value = date.toISOString().slice(0, 7);
    const label = date.toLocaleDateString("fr-FR", { month: "short" }).replace(".", "");
    return { value, label };
  });
  const yearChoices = [2026];

  salesFilterModalContent.innerHTML = `
    <section class="sales-filter-modal-card">
      <p class="eyebrow">Suivi CA</p>
      <h2>Filtrer les ventes</h2>
      <p class="sales-filter-current">Période active : <strong>${filtered.label}</strong></p>
      <div class="sales-filter-actions" aria-label="Filtre des ventes">
        <button class="${salesFilterPeriod === "today" ? "active" : ""}" type="button" data-sales-filter="today">Aujourd'hui</button>
        <button class="${salesFilterPeriod === "this-week" ? "active" : ""}" type="button" data-sales-filter="this-week">Cette semaine</button>
        <button class="${salesFilterPeriod === "last-week" ? "active" : ""}" type="button" data-sales-filter="last-week">Semaine dernière</button>
        <button class="${salesFilterPeriod === "this-month" ? "active" : ""}" type="button" data-sales-filter="this-month">Ce mois-ci</button>
        <button class="${salesFilterPeriod === "last-month" ? "active" : ""}" type="button" data-sales-filter="last-month">Mois dernier</button>
        <button class="${salesFilterPeriod === "this-year" ? "active" : ""}" type="button" data-sales-filter="this-year">Cette année</button>
        <button class="${salesFilterPeriod === "last-year" ? "active" : ""}" type="button" data-sales-filter="last-year">Année dernière</button>
        <button class="${salesFilterPeriod === "all" ? "active" : ""}" type="button" data-sales-filter="all">Tout</button>
      </div>
      <div class="month-picker" aria-label="Choisir un mois précis">
        <span>Mois précis</span>
        <div>
          ${monthChoices
            .map(
              (month) => `
                <button class="${salesFilterPeriod === "custom-month" && salesFilterMonth === month.value ? "active" : ""}" type="button" data-sales-month="${month.value}">
                  ${month.label}
                </button>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="month-picker" aria-label="Choisir une année précise">
        <span>Année précise</span>
        <div class="year-picker-grid">
          ${yearChoices
            .map(
              (year) => `
                <button class="${salesFilterPeriod === "custom-year" && Number(salesFilterYear) === year ? "active" : ""}" type="button" data-sales-year="${year}">
                  ${year}
                </button>
              `
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSalesDashboard() {
  const sales = loadSales();
  const todaySales = salesSince(sales, startOfDay());
  const weekSales = salesSince(sales, startOfWeek());
  const monthSales = salesSince(sales, startOfMonth());
  const averageBasket = sales.length ? sumSales(sales) / sales.length : 0;
  const filtered = getFilteredSales(sales);
  const filteredSales = filtered.sales;
  const filteredTotal = sumSales(filteredSales);
  const filteredItemsCount = filteredSales.reduce((sum, sale) => sum + sale.items.reduce((itemSum, item) => itemSum + item.quantity, 0), 0);
  const productStats = makeProductStats(filteredSales);
  const topProducts = productStats.filter((product) => product.quantity > 0).sort((a, b) => b.quantity - a.quantity || b.total - a.total).slice(0, 10);
  const maxTopQuantity = Math.max(...topProducts.map((product) => product.quantity), 0);
  const clickedProducts = makeProductStats(sales).filter((product) => product.clicks > 0);
  const maxClicks = Math.max(...clickedProducts.map((product) => product.clicks), 0);
  const lowConversionProducts = clickedProducts
    .map((product) => ({
      ...product,
      conversion: product.clicks ? product.quantity / product.clicks : 0,
      missed: Math.max(0, product.clicks - product.quantity),
    }))
    .filter((product) => product.missed > 0)
    .sort((a, b) => b.missed - a.missed || a.conversion - b.conversion)
    .slice(0, 10);

  salesDashboard.innerHTML = `
    <div class="sales-kpis">
      <article><span>CA jour</span><strong>${formatPrice(sumSales(todaySales))}</strong></article>
      <article><span>CA semaine</span><strong>${formatPrice(sumSales(weekSales))}</strong></article>
      <article><span>CA mois</span><strong>${formatPrice(sumSales(monthSales))}</strong></article>
      <article><span>Commandes</span><strong>${sales.length}</strong></article>
      <article><span>Panier moyen</span><strong>${formatPrice(averageBasket)}</strong></article>
      <article><span>Clics produit</span><strong>${clickedProducts.reduce((sum, product) => sum + product.clicks, 0)}</strong></article>
    </div>

    <button class="primary-btn sales-chart-open" type="button" data-sales-chart-open>Voir l'évolution du CA</button>

    <div class="sales-period-summary">
      <article><span>CA filtré</span><strong>${formatPrice(filteredTotal)}</strong></article>
      <article><span>Commandes filtrées</span><strong>${filteredSales.length}</strong></article>
      <article><span>Panier moyen filtré</span><strong>${formatPrice(filteredSales.length ? filteredTotal / filteredSales.length : 0)}</strong></article>
      <article><span>Articles vendus</span><strong>${filteredItemsCount}</strong></article>
    </div>

    <div class="sales-columns">
      <section>
        <h2>Top 10 ventes · ${filtered.label}</h2>
        ${renderBarRows(
          topProducts,
          maxTopQuantity,
          (product) => product.quantity,
          (product) => `${product.quantity} vendu(s) · ${formatPrice(product.total)}`
        )}
      </section>

      <section>
        <h2>Clics boutique</h2>
        ${renderBarRows(
          clickedProducts.sort((a, b) => b.clicks - a.clicks).slice(0, 10),
          maxClicks,
          (product) => product.clicks,
          (product) => `${product.clicks} clic(s) · ${product.adds} ajout(s)`
        )}
      </section>

      <section>
        <h2>À surveiller</h2>
        ${renderBarRows(
          lowConversionProducts,
          Math.max(...lowConversionProducts.map((product) => product.missed), 0),
          (product) => product.missed,
          (product) => `${product.clicks} clic(s) · ${product.quantity} vendu(s)`
        )}
      </section>

      <section>
        <h2>Dernières commandes · ${filtered.label}</h2>
        ${
          filteredSales.length
            ? filteredSales
                .slice(0, 6)
                .map(
                  (sale) => `
                    <details class="sales-order">
                      <summary class="sales-row">
                        <span>
                          ${new Date(sale.createdAt).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" })}
                          ${sale.customer?.name ? `<small>${sale.customer.name} · ${sale.customer.address || "adresse à confirmer"}</small>` : ""}
                          ${sale.customer?.phone ? `<small>${sale.customer.phone}</small>` : ""}
                        </span>
                        <strong>${formatPrice(sale.total)} · ${sale.items.length} ligne(s)</strong>
                      </summary>
                      <div class="sales-order-detail">
                        <ul class="sales-order-items">
                          ${sale.items
                            .map(
                              (item) => `<li><span>${item.quantity}× ${item.name}</span><strong>${formatPrice(item.total)}</strong></li>`
                            )
                            .join("")}
                        </ul>
                        ${sale.customer?.notes ? `<p class="sales-order-notes">Note : ${sale.customer.notes}</p>` : ""}
                        ${sale.orderId ? `<button class="cancel-order-btn" type="button" data-cancel-order="${sale.orderId}">Annuler / Restaurer le stock</button>` : ""}
                      </div>
                    </details>
                  `
                )
                .join("")
            : '<p class="empty-cart">Aucune commande sur cette période.</p>'
        }
      </section>
    </div>
  `;

  salesFilterOpenButton.textContent = `Filtrer · ${filtered.label}`;
}

function renderSalesHistory() {
  const sales = [...loadSales()].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  historySales = sales;

  if (!sales.length) {
    salesHistory.innerHTML = `
      <div class="sales-history-head">
        <h2>Historique de ventes</h2>
        <p>Toutes les commandes confirmées apparaissent ici.</p>
      </div>
      <p class="empty-cart">Aucune commande pour le moment.</p>
    `;
    return;
  }

  salesHistory.innerHTML = `
    <div class="sales-history-head">
      <h2>Historique de ventes</h2>
      <p>${sales.length} commande(s) · ${formatPrice(sumSales(sales))} au total</p>
    </div>
    ${sales
      .map(
        (sale, index) => `
          <details class="sales-order">
            <summary class="sales-row">
              <span>
                ${sale.id ? `<strong class="sales-order-ref">${sale.id}</strong>` : ""}
                ${new Date(sale.createdAt).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" })}
                ${sale.customer?.name ? `<small>${sale.customer.name} · ${sale.customer.address || "adresse à confirmer"}</small>` : ""}
                ${sale.customer?.phone ? `<small>${sale.customer.phone}</small>` : ""}
              </span>
              <strong>${formatPrice(sale.total)} · ${sale.items.length} ligne(s)</strong>
            </summary>
            <div class="sales-order-detail">
              <ul class="sales-order-items">
                ${sale.items
                  .map(
                    (item) => `<li><span>${item.quantity}× ${item.name}</span><strong>${formatPrice(item.total)}</strong></li>`
                  )
                  .join("")}
              </ul>
              ${sale.customer?.notes ? `<p class="sales-order-notes">Note : ${sale.customer.notes}</p>` : ""}
              <div class="sales-order-actions">
                <button class="ghost-btn" type="button" data-recap-index="${index}">Télécharger le récapitulatif (PDF)</button>
                ${sale.orderId ? `<button class="cancel-order-btn" type="button" data-cancel-order="${sale.orderId}">Annuler / Restaurer le stock</button>` : ""}
              </div>
            </div>
          </details>
        `
      )
      .join("")}
  `;
}

function downloadOrderRecap(sale) {
  const created = new Date(sale.createdAt).toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short" });
  const customer = sale.customer || {};
  const delivery = [customer.date, customer.time].filter(Boolean).join(" · ");
  const rows = sale.items
    .map(
      (item) => `
        <tr>
          <td>${item.quantity}</td>
          <td>${item.name}</td>
          <td class="num">${formatPrice(item.price)}</td>
          <td class="num">${formatPrice(item.total)}</td>
        </tr>
      `
    )
    .join("");

  const recap = `
    <!doctype html>
    <html lang="fr">
    <head>
      <meta charset="UTF-8" />
      <title>Récapitulatif ${sale.id || ""}</title>
      <style>
        * { font-family: Arial, Helvetica, sans-serif; color: #1a1a1a; }
        body { margin: 32px; }
        h1 { margin: 0 0 4px; font-size: 22px; }
        .brand { font-size: 13px; color: #555; margin: 0 0 24px; }
        .meta { margin: 0 0 20px; font-size: 13px; line-height: 1.6; }
        .meta strong { display: inline-block; min-width: 110px; }
        table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 13px; }
        th, td { text-align: left; padding: 8px 6px; border-bottom: 1px solid #ddd; }
        .num { text-align: right; }
        tfoot td { font-weight: bold; border-top: 2px solid #333; border-bottom: none; font-size: 15px; }
        .note { font-size: 11px; color: #888; margin-top: 28px; line-height: 1.5; }
      </style>
    </head>
    <body>
      <h1>L'Épicerie du Coin</h1>
      <p class="brand">contact@epicerieducoin.fr · epicerieducoin.fr</p>
      <p class="meta">
        <strong>Récapitulatif</strong> ${sale.id || ""}<br />
        <strong>Date</strong> ${created}<br />
        ${customer.name ? `<strong>Client</strong> ${customer.name}<br />` : ""}
        ${customer.phone ? `<strong>Téléphone</strong> ${customer.phone}<br />` : ""}
        ${customer.email ? `<strong>Email</strong> ${customer.email}<br />` : ""}
        ${customer.address ? `<strong>Adresse</strong> ${customer.address}<br />` : ""}
        ${delivery ? `<strong>Livraison</strong> ${delivery}<br />` : ""}
        ${customer.notes ? `<strong>Note</strong> ${customer.notes}<br />` : ""}
      </p>
      <table>
        <thead>
          <tr><th>Qté</th><th>Article</th><th class="num">Prix unit.</th><th class="num">Total</th></tr>
        </thead>
        <tbody>${rows}</tbody>
        <tfoot>
          <tr><td colspan="3">Total</td><td class="num">${formatPrice(sale.total)}</td></tr>
        </tfoot>
      </table>
      <p class="note">
        Ce document est un récapitulatif de commande et ne constitue pas une facture.
        La facture conforme est émise au moment du paiement.
      </p>
      <script>window.onload = function () { window.print(); };<\/script>
    </body>
    </html>
  `;

  const win = window.open("", "_blank");
  if (!win) {
    errorMessage.textContent = "Autorise les fenêtres pop-up pour télécharger le récapitulatif.";
    return;
  }
  win.document.open();
  win.document.write(recap);
  win.document.close();
}

async function handleCancelOrder(cancelButton) {
  const orderId = cancelButton.dataset.cancelOrder;
  if (!window.confirm("Annuler cette commande et remettre les articles en stock ?")) return;

  cancelButton.disabled = true;
  successMessage.textContent = "Annulation de la commande...";
  errorMessage.textContent = "";

  try {
    await cancelRemoteOrderRequest(orderId, adminSessionPin);
    await loadRemoteSales(adminSessionPin);
    await refreshRemoteStock();
    renderSalesDashboard();
    renderSalesHistory();
    renderStockTable();
    successMessage.textContent = "Commande annulée : le stock a été restauré.";
  } catch (error) {
    cancelButton.disabled = false;
    successMessage.textContent = "";
    errorMessage.textContent = "Impossible d'annuler la commande. Vérifie le code admin ou la connexion.";
    console.error(error);
  }
}

function renderSalesChartModal() {
  salesChartModal.innerHTML = makeSalesChart(loadSales(), salesChartRange);
}

function openSalesModal() {
  renderSalesChartModal();
  salesModal.classList.remove("hidden");
  salesModal.classList.add("open");
}

function closeSalesModal() {
  salesModal.classList.add("hidden");
  salesModal.classList.remove("open");
}

function openSalesFilterModal() {
  renderSalesFilterModal();
  salesFilterModal.classList.remove("hidden");
  salesFilterModal.classList.add("open");
}

function closeSalesFilterModal() {
  salesFilterModal.classList.add("hidden");
  salesFilterModal.classList.remove("open");
}

async function saveStockInputs(message = "Stock enregistré sur téléphone et ordinateur.") {
  const inputs = [...document.querySelectorAll("[data-stock-input]")];
  successMessage.textContent = "Enregistrement du stock central...";

  try {
    await Promise.all(
      inputs.map((input) => updateRemoteProductStock(input.dataset.stockInput, input.value, adminSessionPin))
    );
    await refreshRemoteStock();
    successMessage.textContent = message;
  } catch (error) {
    successMessage.textContent = "";
    errorMessage.textContent = "Impossible d'enregistrer le stock central. Vérifie le code admin ou la connexion.";
    console.error(error);
  }
}

async function unlockAdmin() {
  const pin = document.querySelector("[data-admin-pin]").value.trim();
  if (!pin) {
    errorMessage.textContent = "Entre le code admin.";
    return;
  }

  adminSessionPin = pin;
  errorMessage.textContent = "Connexion au stock central...";

  try {
    await verifyRemoteAdminPin(pin);
    try {
      await loadRemoteSales(pin);
    } catch (ordersError) {
      console.warn(ordersError);
    }
    errorMessage.textContent = "";
    loginPanel.classList.add("hidden");
    stockPanel.classList.remove("hidden");
    renderStockTable();
    renderSalesDashboard();
    renderSalesHistory();
    successMessage.textContent = "Stock et commandes centrales chargés.";
  } catch (error) {
    adminSessionPin = "";
    errorMessage.textContent = "Code incorrect ou connexion au stock impossible.";
    console.error(error);
  }
}

document.querySelector("[data-admin-unlock]").addEventListener("click", unlockAdmin);
document.querySelector("[data-admin-pin]").addEventListener("keydown", (event) => {
  if (event.key === "Enter") unlockAdmin();
});

document.querySelector("[data-stock-save]").addEventListener("click", () => {
  saveStockInputs();
  renderStockTable();
});

stockTable.addEventListener("input", (event) => {
  const input = event.target.closest("[data-stock-input]");
  if (!input) return;

  setProductStock(input.dataset.stockInput, input.value);
  successMessage.textContent = "Modification prête à enregistrer.";
  const status = input.closest(".stock-row").querySelector("small");
  const quantity = Number(input.value) || 0;
  status.textContent = quantity <= 0 ? "Victime de son succès" : quantity <= 3 ? "Stock faible" : "Disponible";
});

document.querySelector("[data-stock-reset]").addEventListener("click", () => {
  const confirmPin = window.prompt("⚠️ Réinitialiser TOUT le stock aux valeurs par défaut. Retape ton code admin pour confirmer :");
  if (confirmPin === null) return;
  if (confirmPin.trim() !== adminSessionPin) {
    errorMessage.textContent = "Code incorrect : réinitialisation annulée.";
    return;
  }

  errorMessage.textContent = "";
  saveStock(stockDefaults);
  document.querySelectorAll("[data-stock-input]").forEach((input) => {
    input.value = stockDefaults[input.dataset.stockInput] ?? 0;
  });
  saveStockInputs("Stock central réinitialisé.");
  renderStockTable();
});

document.querySelectorAll("[data-admin-view]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-admin-view]").forEach((tab) => tab.classList.remove("active"));
    document.querySelectorAll("[data-admin-panel]").forEach((panel) => panel.classList.add("hidden"));
    button.classList.add("active");
    document.querySelector(`[data-admin-panel="${button.dataset.adminView}"]`).classList.remove("hidden");
    salesFilterOpenButton.classList.toggle("hidden", button.dataset.adminView !== "sales");
    if (button.dataset.adminView === "sales") renderSalesDashboard();
    if (button.dataset.adminView === "history") renderSalesHistory();
    if (button.dataset.adminView === "manual") renderManualPanel();
  });
});

document.querySelector("[data-sales-reset]").addEventListener("click", () => {
  saveSales([]);
  saveProductAnalytics({});
  successMessage.textContent = "Suivi CA réinitialisé.";
  renderSalesDashboard();
});

window.addEventListener(SALES_EVENT, renderSalesDashboard);
window.addEventListener(SALES_EVENT, renderSalesHistory);
window.addEventListener(ANALYTICS_EVENT, renderSalesDashboard);

salesHistory.addEventListener("click", async (event) => {
  const recapButton = event.target.closest("[data-recap-index]");
  if (recapButton) {
    const sale = historySales[Number(recapButton.dataset.recapIndex)];
    if (sale) downloadOrderRecap(sale);
    return;
  }

  const cancelButton = event.target.closest("[data-cancel-order]");
  if (cancelButton) await handleCancelOrder(cancelButton);
});

salesDashboard.addEventListener("click", async (event) => {
  const openButton = event.target.closest("[data-sales-chart-open]");
  if (openButton) {
    openSalesModal();
    return;
  }

  const cancelButton = event.target.closest("[data-cancel-order]");
  if (cancelButton) {
    await handleCancelOrder(cancelButton);
    return;
  }

  const rangeButton = event.target.closest("[data-sales-range]");
  if (!rangeButton) return;

  salesChartRange = rangeButton.dataset.salesRange;
  renderSalesDashboard();
});

salesFilterOpenButton.addEventListener("click", openSalesFilterModal);

salesModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-sales-modal-close]") || event.target === salesModal) {
    closeSalesModal();
    return;
  }

  const rangeButton = event.target.closest("[data-sales-range]");
  if (!rangeButton) return;

  salesChartRange = rangeButton.dataset.salesRange;
  renderSalesChartModal();
});

salesFilterModal.addEventListener("click", (event) => {
  if (event.target.closest("[data-sales-filter-close]") || event.target === salesFilterModal) {
    closeSalesFilterModal();
    return;
  }

  const monthButton = event.target.closest("[data-sales-month]");
  if (monthButton) {
    salesFilterMonth = monthButton.dataset.salesMonth;
    salesFilterPeriod = "custom-month";
    renderSalesDashboard();
    renderSalesFilterModal();
    return;
  }

  const yearButton = event.target.closest("[data-sales-year]");
  if (yearButton) {
    salesFilterYear = Number(yearButton.dataset.salesYear);
    salesFilterPeriod = "custom-year";
    renderSalesDashboard();
    renderSalesFilterModal();
    return;
  }

  const filterButton = event.target.closest("[data-sales-filter]");
  if (!filterButton) return;

  salesFilterPeriod = filterButton.dataset.salesFilter;
  renderSalesDashboard();
  renderSalesFilterModal();
});

/* --- Commande manuelle (commande passée au téléphone) --- */
const manualCart = new Map(); // id -> quantité
let manualSearch = "";

function findProduct(id) {
  return productsForAdmin.find((product) => product[0] === id);
}

function manualStep(id, delta) {
  const stock = loadStock();
  const available = stock[id] ?? 0;
  const current = manualCart.get(id) || 0;
  let next = current + delta;
  if (next < 0) next = 0;
  if (next <= 0) manualCart.delete(id);
  else manualCart.set(id, next);
  // La vente a déjà eu lieu au téléphone : on autorise la survente (stock négatif),
  // on informe simplement quand la quantité dépasse le stock connu.
  if (next > available) {
    errorMessage.textContent = `Survente : ${next} commandé(s) pour ${available} en stock — le stock passera en négatif.`;
  } else {
    errorMessage.textContent = "";
  }
  renderManualPanel();
}

function renderManualList() {
  const list = document.querySelector("[data-manual-list]");
  if (!list) return;
  const stock = loadStock();
  const term = manualSearch.trim().toLowerCase();
  const filtered = productsForAdmin.filter(([, name]) => name.toLowerCase().includes(term));

  if (!filtered.length) {
    list.innerHTML = '<p class="empty-cart">Aucun produit trouvé.</p>';
    return;
  }

  list.innerHTML = filtered
    .map(([id, name, price]) => {
      const qty = manualCart.get(id) || 0;
      const available = stock[id] ?? 0;
      return `
        <div class="manual-item ${qty ? "active" : ""}">
          <div class="manual-item-info">
            <strong>${name}</strong>
            <small>${formatPrice(price)} · stock ${available}</small>
          </div>
          <div class="manual-stepper">
            <button type="button" data-manual-step="-1" data-manual-id="${id}" aria-label="Retirer">−</button>
            <span>${qty}</span>
            <button type="button" data-manual-step="1" data-manual-id="${id}" aria-label="Ajouter">+</button>
          </div>
        </div>`;
    })
    .join("");
}

function renderManualSummary() {
  const summary = document.querySelector("[data-manual-summary]");
  if (!summary) return;

  if (manualCart.size === 0) {
    summary.innerHTML = '<p class="empty-cart">Aucun article sélectionné.</p>';
    return;
  }

  let total = 0;
  const rows = [...manualCart.entries()]
    .map(([id, qty]) => {
      const [, name, price] = findProduct(id);
      const lineTotal = price * qty;
      total += lineTotal;
      return `<li><span>${qty}× ${name}</span><strong>${formatPrice(lineTotal)}</strong></li>`;
    })
    .join("");

  summary.innerHTML = `
    <h2>Récapitulatif</h2>
    <ul class="manual-summary-list">${rows}</ul>
    <p class="manual-total"><span>Total</span><strong>${formatPrice(total)}</strong></p>`;
}

function renderManualPanel() {
  renderManualList();
  renderManualSummary();
}

async function submitManualOrder() {
  const get = (key) => (document.querySelector(`[data-manual="${key}"]`)?.value || "").trim();
  const customer = {
    name: get("name"),
    phone: get("phone"),
    address: get("address"),
    email: get("email"),
    date: get("date"),
    time: get("time"),
    notes: get("notes"),
  };

  if (!customer.name || !customer.phone || !customer.address || !customer.date || !customer.time) {
    successMessage.textContent = "";
    errorMessage.textContent = "Renseigne au moins le nom, le téléphone, l'adresse, la date et l'heure.";
    return;
  }
  if (manualCart.size === 0) {
    successMessage.textContent = "";
    errorMessage.textContent = "Ajoute au moins un produit à la commande.";
    return;
  }

  customer.notes = `[Téléphone] ${customer.notes}`.trim();

  const cartItems = [...manualCart.entries()].map(([id, quantity]) => {
    const [pid, name, price, category, alcohol] = findProduct(id);
    return { product: { id: pid, name, price, category, alcohol }, quantity };
  });

  const reference = `EDC-${Date.now().toString().slice(-6)}`;
  const submitButton = document.querySelector("[data-manual-submit]");
  submitButton.disabled = true;
  errorMessage.textContent = "";
  successMessage.textContent = "Enregistrement de la commande…";

  try {
    await createRemoteManualOrder(cartItems, customer, reference);
    await loadRemoteSales(adminSessionPin);
    await refreshRemoteStock();

    manualCart.clear();
    manualSearch = "";
    document.querySelectorAll("[data-manual]").forEach((field) => {
      field.value = "";
    });
    const searchInput = document.querySelector("[data-manual-search]");
    if (searchInput) searchInput.value = "";

    renderManualPanel();
    renderStockTable();
    renderSalesDashboard();
    renderSalesHistory();
    successMessage.textContent = `Commande ${reference} enregistrée : stock à jour, emails envoyés.`;
    submitButton.disabled = false;
    const historyTab = document.querySelector('[data-admin-view="history"]');
    if (historyTab) historyTab.click();
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    submitButton.disabled = false;
    successMessage.textContent = "";
    const message = String(error?.message || "");
    if (message.includes("stock_insufficient")) {
      const name = message.split("stock_insufficient:")[1]?.split('"')[0]?.trim() || "un produit";
      errorMessage.textContent = `Stock insuffisant pour ${name}. Ajuste la quantité ou le stock.`;
    } else if (message.includes("product_not_available")) {
      errorMessage.textContent = "Un produit n'est plus disponible. Vérifie le catalogue.";
    } else {
      errorMessage.textContent = "Impossible d'enregistrer la commande. Vérifie la connexion.";
    }
    console.error(error);
  }
}

const manualListEl = document.querySelector("[data-manual-list]");
const manualSearchEl = document.querySelector("[data-manual-search]");
const manualSubmitEl = document.querySelector("[data-manual-submit]");
const manualClearEl = document.querySelector("[data-manual-clear]");

if (manualListEl) {
  manualListEl.addEventListener("click", (event) => {
    const step = event.target.closest("[data-manual-step]");
    if (!step) return;
    manualStep(step.dataset.manualId, Number(step.dataset.manualStep));
  });
}

if (manualSearchEl) {
  manualSearchEl.addEventListener("input", (event) => {
    manualSearch = event.target.value;
    renderManualList();
  });
}

if (manualSubmitEl) manualSubmitEl.addEventListener("click", submitManualOrder);

if (manualClearEl) {
  manualClearEl.addEventListener("click", () => {
    manualCart.clear();
    manualSearch = "";
    if (manualSearchEl) manualSearchEl.value = "";
    document.querySelectorAll("[data-manual]").forEach((field) => {
      field.value = "";
    });
    errorMessage.textContent = "";
    renderManualPanel();
  });
}
