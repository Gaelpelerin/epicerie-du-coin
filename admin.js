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
];

const loginPanel = document.querySelector("[data-admin-login]");
const stockPanel = document.querySelector("[data-admin-stock]");
const stockTable = document.querySelector("[data-stock-table]");
const salesDashboard = document.querySelector("[data-sales-dashboard]");
const qrStats = document.querySelector("[data-qr-stats]");
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
                          ${orderStatusBadge(sale.status)}
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
                        ${invoiceLink(sale)}
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

const ORDER_STATUS_LABELS = {
  pending: "En attente",
  confirmed: "Confirmée",
  delivered: "Livrée",
  cancelled: "Annulée",
};

function orderStatusBadge(status) {
  const key = ORDER_STATUS_LABELS[status] ? status : "pending";
  return `<span class="order-status order-status--${key}">${ORDER_STATUS_LABELS[key]}</span>`;
}

function invoiceLink(sale) {
  if (!sale.invoiceUrl) return "";
  return `<a class="ghost-btn invoice-btn" href="${sale.invoiceUrl}" target="_blank" rel="noopener">Facture Stripe (PDF)</a>`;
}

function orderStatusButton(sale) {
  if (!sale.orderId) return "";
  if (sale.status === "pending") {
    return `<button class="primary-btn order-status-btn" type="button" data-order-status="confirmed" data-order-id="${sale.orderId}">Confirmer la commande</button>`;
  }
  if (sale.status === "confirmed") {
    return `<button class="primary-btn order-status-btn" type="button" data-order-status="delivered" data-order-id="${sale.orderId}">Marquer comme livrée</button>`;
  }
  return "";
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
                ${orderStatusBadge(sale.status)}
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
                ${orderStatusButton(sale)}
                <button class="ghost-btn" type="button" data-recap-index="${index}">Télécharger le récapitulatif (PDF)</button>
                ${invoiceLink(sale)}
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

async function handleAdvanceStatus(statusButton) {
  const orderId = statusButton.dataset.orderId;
  const status = statusButton.dataset.orderStatus;
  if (!orderId || !status) return;

  statusButton.disabled = true;
  successMessage.textContent = "Mise à jour du statut...";
  errorMessage.textContent = "";

  try {
    await setRemoteOrderStatus(orderId, status, adminSessionPin);
    await loadRemoteSales(adminSessionPin);
    renderSalesDashboard();
    renderSalesHistory();
    successMessage.textContent = status === "confirmed" ? "Commande confirmée." : "Commande marquée comme livrée.";
  } catch (error) {
    statusButton.disabled = false;
    successMessage.textContent = "";
    errorMessage.textContent = "Impossible de changer le statut. Vérifie le code admin ou la connexion.";
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

async function renderQrStats() {
  if (!qrStats) return;
  qrStats.innerHTML = `<h2>Visites boutique</h2><p class="qr-stats-hint">Chargement…</p>`;
  try {
    const stats = await adminQrStats(adminSessionPin);
    qrStats.innerHTML = `
      <h2>Visites boutique</h2>
      <p class="qr-stats-hint">Arrivées sur la boutique (QR du flyer ou accès direct), une par session.</p>
      <div class="qr-stats-grid">
        <div class="qr-stat"><strong>${stats.total ?? 0}</strong><small>Total</small></div>
        <div class="qr-stat"><strong>${stats.today ?? 0}</strong><small>Aujourd'hui</small></div>
        <div class="qr-stat"><strong>${stats.last7 ?? 0}</strong><small>7 derniers jours</small></div>
        <div class="qr-stat"><strong>${stats.last30 ?? 0}</strong><small>30 derniers jours</small></div>
      </div>`;
  } catch (error) {
    console.warn(error);
    qrStats.innerHTML = `<h2>Visites boutique</h2><p class="qr-stats-hint is-error">Impossible de charger les visites.</p>`;
  }
}

document.querySelectorAll("[data-admin-view]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-admin-view]").forEach((tab) => tab.classList.remove("active"));
    document.querySelectorAll("[data-admin-panel]").forEach((panel) => panel.classList.add("hidden"));
    button.classList.add("active");
    document.querySelector(`[data-admin-panel="${button.dataset.adminView}"]`).classList.remove("hidden");
    salesFilterOpenButton.classList.toggle("hidden", button.dataset.adminView !== "sales");
    if (button.dataset.adminView === "sales") {
      renderSalesDashboard();
      renderQrStats();
    }
    if (button.dataset.adminView === "history") renderSalesHistory();
    if (button.dataset.adminView === "manual") renderManualPanel();
    if (button.dataset.adminView === "packs") openPackPanel();
    if (button.dataset.adminView === "closures") openClosuresPanel();
  });
});

document.querySelector("[data-sales-reset]").addEventListener("click", () => {
  const confirmPin = window.prompt("⚠️ Réinitialiser le suivi CA effacera l'historique local des ventes et les statistiques produits. Retape ton code admin pour confirmer :");
  if (confirmPin === null) return;
  if (confirmPin.trim() !== adminSessionPin) {
    errorMessage.textContent = "Code incorrect : réinitialisation annulée.";
    return;
  }

  errorMessage.textContent = "";
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

  const statusButton = event.target.closest("[data-order-status]");
  if (statusButton) {
    await handleAdvanceStatus(statusButton);
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

  const statusButton = event.target.closest("[data-order-status]");
  if (statusButton) {
    await handleAdvanceStatus(statusButton);
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

/* --- Packs (création + recette éditable + assemblage) --- */
const packManager = document.querySelector("[data-pack-manager]");
const packProducts = productsForAdmin.filter((product) => product[3] === "pack");
let customPacksData = []; // depuis admin_list_packs : packs persos créés par l'admin
let currentPackId = packProducts.length ? packProducts[0][0] : null;
let packRecipe = []; // [{ product_id, quantity }]
let packRecipeDirty = false;
let packTagSearch = ""; // filtre des étiquettes produits de la recette
let newPackImage = null; // photo (data URI) du pack en cours de création
let editPackImage; // undefined = inchangé ; null/string = nouvelle photo du pack édité
let packMessage = ""; // message inline du panneau Packs (les zones globales sont hors écran)
let packMessageError = false;

// Affiche un retour DANS le panneau Packs (data-admin-error est caché après login,
// data-admin-success est en bas de page → invisibles ici). Persiste au re-render.
function notifyPack(text, isError = false) {
  packMessage = text || "";
  packMessageError = Boolean(isError);
  const el = packManager && packManager.querySelector("[data-pack-msg]");
  if (el) {
    el.textContent = packMessage;
    el.classList.toggle("is-error", packMessageError);
  }
}

function packEscape(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function productName(id) {
  const product = findProduct(id);
  return product ? product[1] : id;
}

function productPrice(id) {
  const product = findProduct(id);
  return product ? Number(product[2]) || 0 : 0;
}

function allPacksList() {
  const hard = packProducts.map((product) => ({ id: product[0], name: product[1], custom: false }));
  const custom = customPacksData.map((pack) => ({ id: pack.id, name: pack.name, custom: true, data: pack }));
  return [...hard, ...custom];
}

function currentPackMeta() {
  return allPacksList().find((pack) => pack.id === currentPackId) || null;
}

function maxAssemblable(stock) {
  if (!packRecipe.length) return null;
  return packRecipe.reduce((min, component) => {
    const available = stock[component.product_id] ?? 0;
    return Math.min(min, Math.floor(available / component.quantity));
  }, Infinity);
}

// Redimensionne une photo dans le navigateur → data URI JPEG (~800px) stockée en base.
function resizePackImage(file, maxSize = 800) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width >= height && width > maxSize) {
          height = Math.round((height * maxSize) / width);
          width = maxSize;
        } else if (height > width && height > maxSize) {
          width = Math.round((width * maxSize) / height);
          height = maxSize;
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", 0.82));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function renderPackCreateForm() {
  return `
    <section class="pack-create">
      <h3>Créer un pack</h3>
      <p class="pack-hint">Pack vendable en boutique (saisonnier, événement…). Donne juste un nom, crée-le, puis ajoute sa recette : le prix se calcule automatiquement depuis les ingrédients (tu pourras l'ajuster).</p>
      <div class="pack-form-grid">
        <label>Nom *<input type="text" data-pack-new="name" placeholder="Pack Noël" /></label>
        <label>Prix (€)<input type="number" min="0" step="0.1" data-pack-new="price" placeholder="auto depuis la recette" /></label>
        <label class="pack-form-wide">Description<textarea data-pack-new="description" rows="2" placeholder="Ce que contient le pack…"></textarea></label>
        <label class="pack-form-wide">Photo<input type="file" accept="image/*" data-pack-photo="new" /></label>
      </div>
      <div class="pack-photo-preview" data-pack-photo-preview="new">${
        newPackImage ? `<img src="${newPackImage}" alt="" />` : "<span>Aucune photo</span>"
      }</div>
      <div class="admin-actions">
        <button type="button" class="primary-btn" data-pack-create>Créer le pack</button>
      </div>
    </section>`;
}

function renderPackEditForm(meta) {
  if (!meta.custom) {
    return `<section class="pack-edit"><p class="pack-hint">« ${packEscape(meta.name)} » est un pack intégré au site : sa fiche se modifie dans le code. Gère sa recette ci-dessous.</p></section>`;
  }
  const data = meta.data;
  const image = editPackImage !== undefined ? editPackImage : data.image;
  return `
    <section class="pack-edit">
      <h3>Fiche du pack</h3>
      <div class="pack-form-grid">
        <label>Nom<input type="text" data-pack-edit="name" value="${packEscape(data.name)}" /></label>
        <label>Prix (€)<input type="number" min="0" step="0.1" data-pack-edit="price" value="${data.price}" /></label>
        <label class="pack-form-wide">Description<textarea data-pack-edit="description" rows="2">${packEscape(data.description || "")}</textarea></label>
        <label class="pack-form-wide">Photo<input type="file" accept="image/*" data-pack-photo="edit" /></label>
        <label class="pack-check"><input type="checkbox" data-pack-edit="active" ${data.active ? "checked" : ""} /> Visible en boutique</label>
        <label class="pack-check"><input type="checkbox" data-pack-edit="scalable" ${data.scalable ? "checked" : ""} /> Adaptable au nombre de personnes</label>
        <label>Personnes par défaut<input type="number" min="1" max="10" step="1" data-pack-edit="default_persons" value="${Number(data.default_persons) || 2}" /></label>
      </div>
      <p class="pack-hint">Si « adaptable » est coché : le <strong>prix</strong> et les <strong>quantités de la recette</strong> sont <strong>par personne</strong>. En boutique, le client choisit le nombre de personnes (1 à 10) et tout est multiplié.</p>
      <div class="pack-photo-preview" data-pack-photo-preview="edit">${
        image ? `<img src="${image}" alt="" />` : "<span>Aucune photo</span>"
      }</div>
      <div class="admin-actions">
        <button type="button" class="primary-btn" data-pack-update>Enregistrer la fiche</button>
        <button type="button" class="ghost-btn pack-delete" data-pack-delete>Supprimer le pack</button>
      </div>
    </section>`;
}

function renderPackManager() {
  if (!packManager) return;

  const packs = allPacksList();
  const createForm = renderPackCreateForm();
  const msgBlock = `<p class="pack-msg${packMessageError ? " is-error" : ""}" data-pack-msg>${packEscape(packMessage)}</p>`;

  if (!packs.length) {
    packManager.innerHTML = msgBlock + createForm;
    return;
  }

  const selector = `
    <section class="pack-select-row">
      <label>Pack à gérer
        <select data-pack-select>
          ${packs
            .map(
              (pack) =>
                `<option value="${pack.id}" ${pack.id === currentPackId ? "selected" : ""}>${packEscape(pack.name)}${pack.custom ? "" : " (intégré)"}</option>`,
            )
            .join("")}
        </select>
      </label>
    </section>`;

  const meta = currentPackMeta();
  if (!meta) {
    packManager.innerHTML = msgBlock + createForm + selector;
    return;
  }

  const stock = loadStock();
  const editForm = renderPackEditForm(meta);
  const packScalable = Boolean(meta.custom && meta.data && meta.data.scalable);
  const qtyUnitLabel = packScalable ? "par personne" : "par pack";

  const outOfStock = packRecipe.filter((component) => (stock[component.product_id] ?? 0) <= 0);
  const recipeRows = packRecipe.length
    ? packRecipe
        .map((component) => {
          const available = stock[component.product_id] ?? 0;
          const isOut = available <= 0;
          return `
        <div class="pack-recipe-row${isOut ? " is-out" : ""}">
          <div class="pack-recipe-info">
            <strong>${productName(component.product_id)}</strong>
            <small>stock ${available}${isOut ? " · rupture" : ""}</small>
          </div>
          <label class="pack-recipe-qty">
            <span>${qtyUnitLabel}</span>
            <input type="number" min="1" step="1" value="${component.quantity}" data-pack-qty="${component.product_id}" />
          </label>
          <button type="button" class="pack-recipe-remove" data-pack-remove="${component.product_id}" aria-label="Retirer">×</button>
        </div>`;
        })
        .join("")
    : '<p class="empty-cart">Aucun composant. Ajoute les produits qui composent ce pack.</p>';

  const removeOutRow = outOfStock.length
    ? `<button type="button" class="ghost-btn pack-remove-out" data-pack-remove-out>Retirer les ${outOfStock.length} ingrédient${outOfStock.length > 1 ? "s" : ""} en rupture</button>`
    : "";

  const recipeByProduct = new Map(packRecipe.map((component) => [component.product_id, component.quantity]));
  const term = packTagSearch.trim().toLowerCase();
  const tagChips = productsForAdmin
    .filter((product) => product[0] !== currentPackId && product[3] !== "pack")
    .map((product) => {
      const [id, name, price] = product;
      const inRecipe = recipeByProduct.get(id);
      const hidden = term && !name.toLowerCase().includes(term) ? ' style="display:none"' : "";
      return `<button type="button" class="pack-tag${inRecipe ? " is-in" : ""}" data-pack-tag="${id}" data-pack-tag-name="${packEscape(name.toLowerCase())}"${hidden}>
            <span class="pack-tag-label">${packEscape(name)}</span>
            <span class="pack-tag-price">${formatPrice(price)}</span>
            ${inRecipe ? `<span class="pack-tag-qty">×${inRecipe}</span>` : ""}
          </button>`;
    })
    .join("");

  const autofillRow = meta.custom
    ? `
      <div class="pack-autofill-row">
        <button type="button" class="ghost-btn" data-pack-autofill>Pré-remplir prix &amp; description depuis la recette</button>
        <span class="pack-hint">Prix = somme des produits · description = liste. Ajustable avant « Enregistrer la fiche ».</span>
      </div>`
    : "";

  const max = maxAssemblable(stock);
  const maxLabel = max === null ? "—" : max;

  packManager.innerHTML = `
    ${msgBlock}
    ${createForm}
    ${selector}
    ${editForm}

    <section class="pack-recipe">
      <h3>Recette — composants consommés ${packScalable ? "par personne" : "par pack monté"}</h3>
      <div class="pack-recipe-list">${recipeRows}</div>
      ${removeOutRow}
      <div class="pack-tags-head">
        <p class="pack-hint">Clique une étiquette pour l'ajouter à la recette (re-clic = +1).</p>
        <input type="search" class="pack-tag-search" data-pack-tag-search value="${packEscape(packTagSearch)}" placeholder="Filtrer les produits…" />
      </div>
      <div class="pack-tags" data-pack-tags>${tagChips}</div>
      ${autofillRow}
      <div class="admin-actions">
        <button type="button" class="primary-btn" data-pack-save>Enregistrer la recette</button>
        ${packRecipeDirty ? '<span class="pack-dirty">Recette modifiée — enregistre avant d\'assembler.</span>' : ""}
      </div>
    </section>

    <section class="pack-assemble">
      <h3>Disponibilité</h3>
      <p class="pack-max">Vendable selon le stock des ingrédients : <strong>${maxLabel}</strong></p>
      <p class="pack-hint">Ce pack n'a pas de stock propre : il est composé à la commande. Chaque vente retire automatiquement ses ingrédients du stock. La dispo = le plus petit « stock ingrédient ÷ quantité par pack ».</p>
    </section>`;
}

async function reloadPackRecipe() {
  if (!currentPackId) {
    packRecipe = [];
    packRecipeDirty = false;
    return;
  }
  try {
    const recipe = await getRemotePackRecipe(currentPackId, adminSessionPin);
    packRecipe = (Array.isArray(recipe) ? recipe : []).map((component) => ({
      product_id: component.product_id,
      quantity: Math.max(1, Math.floor(Number(component.quantity) || 1)),
    }));
    packRecipeDirty = false;
  } catch (error) {
    console.error(error);
    errorMessage.textContent = "Impossible de charger la recette du pack.";
  }
}

async function openPackPanel() {
  try {
    const list = await adminListPacks(adminSessionPin);
    customPacksData = Array.isArray(list) ? list : [];
  } catch (error) {
    console.error(error);
    customPacksData = [];
  }
  const ids = allPacksList().map((pack) => pack.id);
  if (!currentPackId || !ids.includes(currentPackId)) {
    currentPackId = ids[0] || null;
  }
  await reloadPackRecipe();
  renderPackManager();
}

async function handlePackPhoto(kind, file) {
  if (!file) return;
  try {
    const dataUrl = await resizePackImage(file);
    if (kind === "new") newPackImage = dataUrl;
    else editPackImage = dataUrl;
    const preview = packManager.querySelector(`[data-pack-photo-preview="${kind}"]`);
    if (preview) preview.innerHTML = `<img src="${dataUrl}" alt="" />`;
  } catch (error) {
    console.error(error);
    errorMessage.textContent = "Photo illisible, réessaie avec une autre image.";
  }
}

async function createPack() {
  const name = (packManager.querySelector('[data-pack-new="name"]').value || "").trim();
  const price = Number(packManager.querySelector('[data-pack-new="price"]').value) || 0;
  const description = (packManager.querySelector('[data-pack-new="description"]').value || "").trim();
  if (!name) {
    notifyPack("Donne un nom au pack.", true);
    return;
  }
  notifyPack("Création du pack…");
  try {
    const result = await createRemotePack(
      { name, price, description, image: newPackImage || "" },
      adminSessionPin,
    );
    newPackImage = null;
    currentPackId = result.id;
    await refreshRemoteStock();
    renderStockTable();
    packMessage = `Pack « ${name} » créé. Ajoute sa recette ci-dessous : le prix se calcule depuis les ingrédients.`;
    packMessageError = false;
    await openPackPanel();
  } catch (error) {
    console.error(error);
    notifyPack("Impossible de créer le pack. Vérifie le code admin ou la connexion.", true);
  }
}

async function updatePack() {
  const meta = currentPackMeta();
  if (!meta || !meta.custom) return;
  const name = (packManager.querySelector('[data-pack-edit="name"]').value || "").trim();
  const price = Number(packManager.querySelector('[data-pack-edit="price"]').value);
  const description = (packManager.querySelector('[data-pack-edit="description"]').value || "").trim();
  const active = packManager.querySelector('[data-pack-edit="active"]').checked;
  const scalable = packManager.querySelector('[data-pack-edit="scalable"]').checked;
  const defaultPersons = Math.min(10, Math.max(1, Number(packManager.querySelector('[data-pack-edit="default_persons"]').value) || 2));
  notifyPack("Enregistrement…");
  try {
    const payload = { id: currentPackId, name, price, description, active, scalable, default_persons: defaultPersons };
    if (editPackImage !== undefined) payload.image = editPackImage || "";
    await updateRemotePack(payload, adminSessionPin);
    editPackImage = undefined;
    await refreshRemoteStock();
    renderStockTable();
    packMessage = "Fiche du pack enregistrée.";
    packMessageError = false;
    await openPackPanel();
  } catch (error) {
    console.error(error);
    notifyPack("Impossible d'enregistrer la fiche.", true);
  }
}

async function deletePack() {
  const meta = currentPackMeta();
  if (!meta || !meta.custom) return;
  if (!window.confirm(`Supprimer définitivement le pack « ${meta.name} » ? Il disparaîtra de la boutique.`)) return;
  try {
    await deleteRemotePack(currentPackId, adminSessionPin);
    currentPackId = null;
    editPackImage = undefined;
    await refreshRemoteStock();
    renderStockTable();
    packMessage = "Pack supprimé.";
    packMessageError = false;
    await openPackPanel();
  } catch (error) {
    console.error(error);
    notifyPack("Impossible de supprimer le pack.", true);
  }
}

async function savePackRecipe() {
  try {
    await saveRemotePackRecipe(currentPackId, packRecipe, adminSessionPin);
    packRecipeDirty = false;
    packMessage = "Recette du pack enregistrée.";
    packMessageError = false;
    renderPackManager();
  } catch (error) {
    console.error(error);
    notifyPack("Impossible d'enregistrer la recette du pack.", true);
  }
}

function autofillPackFiche() {
  const meta = currentPackMeta();
  if (!meta || !meta.custom) return;
  if (!packRecipe.length) {
    notifyPack("Ajoute des produits à la recette d'abord.", true);
    return;
  }
  const total = packRecipe.reduce((sum, component) => sum + productPrice(component.product_id) * component.quantity, 0);
  const description = packRecipe
    .map((component) => `${component.quantity} × ${productName(component.product_id)}`)
    .join(", ");
  const priceInput = packManager.querySelector('[data-pack-edit="price"]');
  const descInput = packManager.querySelector('[data-pack-edit="description"]');
  if (priceInput) priceInput.value = (Math.round(total * 100) / 100).toFixed(2);
  if (descInput) descInput.value = description;
  notifyPack("Prix et description pré-remplis depuis la recette. Vérifie puis « Enregistrer la fiche ».");
}

// Met le prix de la fiche à jour en direct quand la recette change (somme des
// ingrédients × quantité). Silencieux : pas de message, ne touche pas la
// description. Le prix reste éditable après (dernière action gagne).
function syncPackPriceFromRecipe() {
  const meta = currentPackMeta();
  if (!meta || !meta.custom) return;
  const priceInput = packManager.querySelector('[data-pack-edit="price"]');
  if (!priceInput) return;
  const total = packRecipe.reduce((sum, component) => sum + productPrice(component.product_id) * component.quantity, 0);
  priceInput.value = (Math.round(total * 100) / 100).toFixed(2);
}

if (packManager) {
  packManager.addEventListener("click", (event) => {
    if (event.target.closest("[data-pack-create]")) {
      createPack();
      return;
    }
    if (event.target.closest("[data-pack-update]")) {
      updatePack();
      return;
    }
    if (event.target.closest("[data-pack-delete]")) {
      deletePack();
      return;
    }
    const tag = event.target.closest("[data-pack-tag]");
    if (tag) {
      const id = tag.dataset.packTag;
      const entry = packRecipe.find((component) => component.product_id === id);
      if (entry) entry.quantity += 1;
      else packRecipe.push({ product_id: id, quantity: 1 });
      packRecipeDirty = true;
      renderPackManager();
      syncPackPriceFromRecipe();
      return;
    }
    if (event.target.closest("[data-pack-autofill]")) {
      autofillPackFiche();
      return;
    }
    if (event.target.closest("[data-pack-remove-out]")) {
      const stock = loadStock();
      const before = packRecipe.length;
      packRecipe = packRecipe.filter((component) => (stock[component.product_id] ?? 0) > 0);
      if (packRecipe.length !== before) {
        packRecipeDirty = true;
        renderPackManager();
        syncPackPriceFromRecipe();
        notifyPack("Ingrédients en rupture retirés. Pense à « Enregistrer la recette ».");
      }
      return;
    }
    const remove = event.target.closest("[data-pack-remove]");
    if (remove) {
      packRecipe = packRecipe.filter((component) => component.product_id !== remove.dataset.packRemove);
      packRecipeDirty = true;
      renderPackManager();
      syncPackPriceFromRecipe();
      return;
    }
    if (event.target.closest("[data-pack-save]")) {
      savePackRecipe();
    }
  });

  packManager.addEventListener("change", (event) => {
    const select = event.target.closest("[data-pack-select]");
    if (select) {
      currentPackId = select.value;
      editPackImage = undefined;
      reloadPackRecipe().then(renderPackManager);
      return;
    }
    const photo = event.target.closest("[data-pack-photo]");
    if (photo) {
      handlePackPhoto(photo.dataset.packPhoto, photo.files && photo.files[0]);
    }
  });

  packManager.addEventListener("input", (event) => {
    const tagSearch = event.target.closest("[data-pack-tag-search]");
    if (tagSearch) {
      packTagSearch = tagSearch.value;
      const term = packTagSearch.trim().toLowerCase();
      packManager.querySelectorAll("[data-pack-tag]").forEach((chip) => {
        const match = !term || chip.dataset.packTagName.includes(term);
        chip.style.display = match ? "" : "none";
      });
      return;
    }
    const qtyField = event.target.closest("[data-pack-qty]");
    if (!qtyField) return;
    const entry = packRecipe.find((component) => component.product_id === qtyField.dataset.packQty);
    if (entry) {
      entry.quantity = Math.max(1, Math.floor(Number(qtyField.value) || 1));
      packRecipeDirty = true;
      syncPackPriceFromRecipe();
    }
  });
}

// ───────────────────────────── Fermetures ─────────────────────────────
// Créneaux où la livraison est bloquée côté boutique (ex : pas de livreur).
const closuresManager = document.querySelector("[data-closures-manager]");
let closuresData = [];
let closuresMessage = "";
let closuresMessageError = false;

function notifyClosures(text, isError = false) {
  closuresMessage = text || "";
  closuresMessageError = Boolean(isError);
  const el = closuresManager && closuresManager.querySelector("[data-closures-msg]");
  if (el) {
    el.textContent = closuresMessage;
    el.classList.toggle("is-error", closuresMessageError);
  }
}

function closurePad2(value) {
  return String(value).padStart(2, "0");
}

function formatClosureRange(startsAt, endsAt) {
  const start = new Date(startsAt);
  const end = new Date(endsAt);
  const dayOpts = { weekday: "long", day: "numeric", month: "long" };
  const t = (d) => (d.getMinutes() ? `${closurePad2(d.getHours())}h${closurePad2(d.getMinutes())}` : `${closurePad2(d.getHours())}h`);
  if (start.toDateString() === end.toDateString()) {
    return `${start.toLocaleDateString("fr-FR", dayOpts)} de ${t(start)} à ${t(end)}`;
  }
  return `du ${start.toLocaleDateString("fr-FR", dayOpts)} ${t(start)} au ${end.toLocaleDateString("fr-FR", dayOpts)} ${t(end)}`;
}

function renderClosuresPanel() {
  if (!closuresManager) return;
  const todayValue = new Date().toISOString().slice(0, 10);
  const now = Date.now();

  const rows = closuresData.length
    ? closuresData
        .map((closure) => {
          const past = new Date(closure.ends_at).getTime() <= now;
          return `
        <div class="closure-row${past ? " is-past" : ""}">
          <div class="closure-info">
            <strong>${packEscape(formatClosureRange(closure.starts_at, closure.ends_at))}</strong>
            ${closure.reason ? `<small>${packEscape(closure.reason)}</small>` : ""}
            ${past ? '<small class="closure-past-tag">passée</small>' : ""}
          </div>
          <button type="button" class="closure-remove" data-closure-delete="${closure.id}" aria-label="Supprimer">×</button>
        </div>`;
        })
        .join("")
    : '<p class="empty-cart">Aucune fermeture enregistrée. La livraison est ouverte en continu.</p>';

  closuresManager.innerHTML = `
    <p class="closures-msg${closuresMessageError ? " is-error" : ""}" data-closures-msg>${packEscape(closuresMessage)}</p>
    <section class="closures-add">
      <h2>Ajouter une fermeture</h2>
      <p class="closures-hint">Le client ne pourra pas réserver une livraison dans ce créneau. Ex : pas de livreur ce soir → début aujourd'hui 18:00, fin aujourd'hui 23:00.</p>
      <div class="closures-fields">
        <label>Début — jour *<input type="date" data-closure="start-date" value="${todayValue}" /></label>
        <label>Début — heure *<input type="time" data-closure="start-time" /></label>
        <label>Fin — jour *<input type="date" data-closure="end-date" value="${todayValue}" /></label>
        <label>Fin — heure *<input type="time" data-closure="end-time" /></label>
        <label class="closures-wide">Motif (optionnel)<input type="text" data-closure="reason" placeholder="ex : pas de livreur" /></label>
      </div>
      <div class="admin-actions">
        <button type="button" class="primary-btn" data-closure-add>Ajouter la fermeture</button>
      </div>
    </section>
    <section class="closures-list">
      <h2>Fermetures enregistrées</h2>
      <div class="closures-rows">${rows}</div>
    </section>`;
}

async function openClosuresPanel() {
  try {
    const list = await adminListClosures(adminSessionPin);
    closuresData = Array.isArray(list) ? list : [];
  } catch (error) {
    console.error(error);
    closuresData = [];
    closuresMessage = "Impossible de charger les fermetures.";
    closuresMessageError = true;
  }
  renderClosuresPanel();
}

async function addClosure() {
  const get = (key) => {
    const field = closuresManager.querySelector(`[data-closure="${key}"]`);
    return field ? field.value : "";
  };
  const startDate = get("start-date");
  const startTime = get("start-time");
  const endDate = get("end-date");
  const endTime = get("end-time");
  const reason = get("reason").trim();

  if (!startDate || !startTime || !endDate || !endTime) {
    notifyClosures("Renseigne le jour et l'heure de début et de fin.", true);
    return;
  }

  const starts = new Date(`${startDate}T${startTime}`);
  const ends = new Date(`${endDate}T${endTime}`);
  if (Number.isNaN(starts.getTime()) || Number.isNaN(ends.getTime()) || ends <= starts) {
    notifyClosures("La fin doit être après le début.", true);
    return;
  }

  try {
    await adminAddClosure(starts.toISOString(), ends.toISOString(), reason, adminSessionPin);
    closuresMessage = "Fermeture ajoutée. Les clients ne pourront pas réserver ce créneau.";
    closuresMessageError = false;
    await openClosuresPanel();
  } catch (error) {
    console.error(error);
    notifyClosures("Impossible d'ajouter la fermeture (PIN ou créneau invalide).", true);
  }
}

async function deleteClosure(id) {
  try {
    await adminDeleteClosure(id, adminSessionPin);
    closuresMessage = "Fermeture supprimée.";
    closuresMessageError = false;
    await openClosuresPanel();
  } catch (error) {
    console.error(error);
    notifyClosures("Impossible de supprimer la fermeture.", true);
  }
}

if (closuresManager) {
  closuresManager.addEventListener("click", (event) => {
    if (event.target.closest("[data-closure-add]")) {
      addClosure();
      return;
    }
    const del = event.target.closest("[data-closure-delete]");
    if (del) {
      deleteClosure(del.dataset.closureDelete);
    }
  });
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
