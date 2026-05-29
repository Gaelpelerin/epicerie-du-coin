const productsForAdmin = [
  ["quiche-lorraine", "Quiche lorraine"],
  ["quiche-saumon", "Quiche saumon & brocoli"],
  ["quiche-epinards", "Quiche épinards, pignons de pin"],
  ["quiche-poulet", "Quiche poulet"],
  ["quiche-dinde-halal", "Quiche dinde halal"],
  ["quiche-poireaux", "Quiche poireaux"],
  ["quiche-mediterraneenne", "Quiche méditerranéenne"],
  ["quiche-3-fromages", "Quiche 3 fromages"],
  ["quiche-chevre-tomate", "Quiche chèvre tomate"],
  ["croque", "Croque-monsieur premium"],
  ["bretzel-nature", "Bretzel nature"],
  ["bretzel-gratine-lard", "Bretzel gratiné lard & emmental"],
  ["pizza-napolitaine", "Pizza napolitaine"],
  ["pizza-jambon-fromage", "Pizza jambon fromage"],
  ["pizza-mozzarella-pesto", "Pizza mozzarella tomate pesto"],
  ["pizza-chevre", "Pizza chèvre miel"],
  ["pizza-saumon-aneth", "Pizza saumon aneth"],
  ["pizza-poulet-curry", "Pizza poulet curry"],
  ["pizza-poulet", "Pizza poulet"],
  ["pizza-vegetarienne", "Pizza végétarienne"],
  ["pizza-4-fromages", "Pizza 4 fromages"],
  ["pizza-pincee-margherita", "Pizza pincée margherita"],
  ["pizza-pincee-diavola", "Pizza pincée diavola"],
  ["pizza-pincee-jambon", "Pizza pincée jambon fromage"],
  ["panwich-jambon-emmental", "Panwich jambon emmental"],
  ["panwich-mozzarella-pesto", "Panwich mozzarella tomate pesto"],
  ["panwich-jambon-fromage", "Panwich jambon fromage emmental"],
  ["donut-speculoos", "Donut Spéculoos"],
  ["donut-lion", "Donut Lion"],
  ["brioche-babka", "Brioche Babka"],
  ["cake-marbre-rocher", "Cake marbré rocher"],
  ["carrot-cake", "Carrot cake"],
  ["cake-citron", "Cake citron"],
  ["cake-marbre", "Cake marbré"],
  ["cake-pain-epices", "Cake pain d'épices"],
  ["kouglof-sucre", "Kouglof sucré"],
  ["evian", "Evian 50 cl"],
  ["perrier-33", "Perrier 33 cl"],
  ["san-pellegrino-50", "San Pellegrino 50 cl"],
  ["coca", "Coca-Cola 33 cl"],
  ["coca-zero", "Coca-Cola Zero 33 cl"],
  ["ice-tea-peche", "Ice Tea pêche 33 cl"],
  ["oasis-tropical", "Oasis tropical 33 cl"],
  ["orangina", "Orangina 33 cl"],
  ["schweppes-agrumes", "Schweppes Agrumes 33 cl"],
  ["lemonaid-citron", "Lemonaid citron bio"],
  ["lemonaid-passion", "Lemonaid passion bio"],
  ["lemonaid-ginger", "Lemonaid ginger bio"],
  ["charitea-the-vert", "Charitea thé vert bio"],
  ["jus-pomme-artisanal", "Jus de pomme artisanal 25 cl"],
  ["jus-orange-presse", "Jus orange pressé premium 25 cl"],
  ["nectar-mirabelle", "Nectar mirabelle artisanal 25 cl"],
  ["jus-pomme-fruits-rouges", "Jus pomme - fruits rouges 25 cl"],
  ["desperados", "Desperados 33 cl"],
  ["heineken", "Heineken 33 cl"],
  ["corona", "Corona 33 cl"],
  ["lorraine-peu-blond", "Lorraine Peu Blond"],
  ["lorraine-duchasse", "Lorraine Duchasse"],
  ["saint-nicolas", "Saint Nicolas"],
  ["loroyse-triple", "Loroyse Triple"],
  ["noiraude-blanche", "Noiraude Blanche"],
  ["riesling-alsace", "Riesling"],
  ["chardonnay", "Chardonnay Pierres"],
  ["pinot-noir", "Pinot noir"],
  ["cotes-du-rhone", "Côtes-du-Rhône"],
  ["coteaux-aix-rose", "Rosé Coteaux d'Aix"],
  ["uby-3", "UBY n°3"],
  ["uby-4", "UBY n°4"],
  ["prosecco", "Prosecco"],
  ["champagne-brut", "Champagne Veuve Pelletier"],
  ["gin-tonic", "Gin Tonic prêt à boire 25 cl"],
  ["spritz", "Spritz prêt à boire 25 cl"],
  ["mojito", "Mojito prêt à boire 25 cl"],
  ["pack-apero", "Pack Apéro Chalet"],
];

const loginPanel = document.querySelector("[data-admin-login]");
const stockPanel = document.querySelector("[data-admin-stock]");
const stockTable = document.querySelector("[data-stock-table]");
const salesDashboard = document.querySelector("[data-sales-dashboard]");
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
                    <div class="sales-row">
                      <span>
                        ${new Date(sale.createdAt).toLocaleString("fr-FR", { dateStyle: "short", timeStyle: "short" })}
                        ${sale.customer?.name ? `<small>${sale.customer.name} · ${sale.customer.address || "adresse à confirmer"}</small>` : ""}
                      </span>
                      <strong>${formatPrice(sale.total)} · ${sale.items.length} ligne(s)</strong>
                    </div>
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
  });
});

document.querySelector("[data-sales-reset]").addEventListener("click", () => {
  saveSales([]);
  saveProductAnalytics({});
  successMessage.textContent = "Suivi CA réinitialisé.";
  renderSalesDashboard();
});

window.addEventListener(SALES_EVENT, renderSalesDashboard);
window.addEventListener(ANALYTICS_EVENT, renderSalesDashboard);

salesDashboard.addEventListener("click", (event) => {
  const openButton = event.target.closest("[data-sales-chart-open]");
  if (openButton) {
    openSalesModal();
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
