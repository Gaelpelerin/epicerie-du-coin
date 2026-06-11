const STOCK_KEY = "epicerie-stock";
const SALES_KEY = "epicerie-sales";
const ANALYTICS_KEY = "epicerie-product-analytics";
const STOCK_EVENT = "epicerie-stock-updated";
const SALES_EVENT = "epicerie-sales-updated";
const ANALYTICS_EVENT = "epicerie-product-analytics-updated";
const SUPABASE_URL = "https://uqlqgfmlvyejenxbxjnx.supabase.co";
const SUPABASE_KEY = "sb_publishable_IeCEj5v9LP9GQ-3DZVw_sg__IBZtvxg";

const supabaseHeaders = {
  apikey: SUPABASE_KEY,
  Authorization: `Bearer ${SUPABASE_KEY}`,
  "Content-Type": "application/json",
};

const stockDefaults = {
  "quiche-lorraine": 8,
  "quiche-saumon": 5,
  "quiche-epinards": 5,
  "quiche-poulet": 5,
  "quiche-dinde-halal": 5,
  "quiche-poireaux": 5,
  "quiche-mediterraneenne": 5,
  "quiche-3-fromages": 5,
  "quiche-chevre-tomate": 5,
  croque: 7,
  "bretzel-nature": 12,
  "bretzel-gratine-lard": 8,
  "pizza-napolitaine": 6,
  "pizza-jambon-fromage": 6,
  "pizza-mozzarella-pesto": 6,
  "pizza-chevre": 6,
  "pizza-saumon-aneth": 6,
  "pizza-poulet-curry": 6,
  "pizza-poulet": 6,
  "pizza-vegetarienne": 6,
  "pizza-4-fromages": 6,
  "pizza-pincee-margherita": 6,
  "pizza-pincee-diavola": 6,
  "pizza-pincee-jambon": 6,
  "panwich-jambon-emmental": 6,
  "panwich-mozzarella-pesto": 6,
  "panwich-jambon-fromage": 6,
  "donut-speculoos": 10,
  "donut-lion": 10,
  "brioche-babka": 3,
  "cake-marbre-rocher": 3,
  "carrot-cake": 3,
  "cake-citron": 3,
  "cake-marbre": 3,
  "cake-pain-epices": 3,
  "kouglof-sucre": 3,
  evian: 24,
  "perrier-33": 18,
  "san-pellegrino-50": 18,
  coca: 18,
  "coca-zero": 18,
  "ice-tea-peche": 18,
  "oasis-tropical": 18,
  orangina: 18,
  "schweppes-agrumes": 18,
  "lemonaid-citron": 8,
  "lemonaid-passion": 8,
  "lemonaid-ginger": 8,
  "charitea-the-vert": 8,
  "jus-pomme-artisanal": 10,
  "jus-orange-presse": 10,
  "nectar-mirabelle": 10,
  "jus-pomme-fruits-rouges": 10,
  desperados: 12,
  heineken: 12,
  corona: 12,
  "lorraine-peu-blond": 8,
  "lorraine-duchasse": 8,
  "saint-nicolas": 8,
  "loroyse-triple": 8,
  "noiraude-blanche": 8,
  "riesling-alsace": 4,
  chardonnay: 4,
  "pinot-noir": 4,
  "cotes-du-rhone": 4,
  "coteaux-aix-rose": 4,
  "uby-3": 4,
  "uby-4": 4,
  prosecco: 4,
  "champagne-brut": 2,
  "gin-tonic": 8,
  spritz: 8,
  mojito: 8,
  "pack-apero": 4,
};

function loadStock() {
  const storedStock = localStorage.getItem(STOCK_KEY);
  if (!storedStock) return { ...stockDefaults };

  try {
    return { ...stockDefaults, ...JSON.parse(storedStock) };
  } catch {
    return { ...stockDefaults };
  }
}

function saveStock(stock) {
  localStorage.setItem(STOCK_KEY, JSON.stringify(stock));
  window.dispatchEvent(new CustomEvent(STOCK_EVENT, { detail: stock }));

  if ("BroadcastChannel" in window) {
    const channel = new BroadcastChannel(STOCK_EVENT);
    channel.postMessage(stock);
    channel.close();
  }
}

function getProductStock(productId) {
  return loadStock()[productId] ?? 0;
}

function setProductStock(productId, quantity) {
  const stock = loadStock();
  stock[productId] = Math.max(0, Number(quantity) || 0);
  saveStock(stock);
}

async function refreshRemoteStock() {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/product_stock?select=product_id,quantity`, {
      headers: supabaseHeaders,
    });

    if (!response.ok) throw new Error("Stock central indisponible.");

    const rows = await response.json();
    const remoteStock = rows.reduce(
      (stock, row) => ({
        ...stock,
        [row.product_id]: Number(row.quantity) || 0,
      }),
      { ...stockDefaults }
    );

    saveStock(remoteStock);
    return remoteStock;
  } catch (error) {
    console.warn(error);
    return loadStock();
  }
}

async function updateRemoteProductStock(productId, quantity, pin) {
  const cleanQuantity = Math.max(0, Number(quantity) || 0);
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/update_product_stock`, {
    method: "POST",
    headers: supabaseHeaders,
    body: JSON.stringify({
      p_product_id: productId,
      p_quantity: cleanQuantity,
      p_pin: pin,
    }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Impossible d'enregistrer le stock central.");
  }

  const updatedRow = await response.json();
  setProductStock(productId, cleanQuantity);
  return updatedRow;
}

async function createRemoteOrderRequest(cartItems, customer, reference) {
  const payload = {
    p_reference: reference,
    p_customer: {
      name: customer.name,
      phone: customer.phone,
      address: customer.address,
      email: customer.email || "",
      delivery_date: customer.date,
      delivery_time: customer.time,
      notes: customer.notes || "",
    },
    p_items: cartItems.map((item) => ({
      product_id: item.product.id,
      name: item.product.name,
      category: item.product.category,
      price: item.product.price,
      quantity: item.quantity,
      total: item.product.price * item.quantity,
      alcohol: Boolean(item.product.alcohol),
    })),
  };

  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/create_order_request`, {
    method: "POST",
    headers: supabaseHeaders,
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const message = await response.text();
    const error = new Error(message || "Impossible d'enregistrer la commande.");
    error.status = response.status;
    throw error;
  }

  return response.json();
}

async function loadRemoteSales(pin) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/admin_get_order_requests`, {
    method: "POST",
    headers: supabaseHeaders,
    body: JSON.stringify({ p_pin: pin }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Impossible de charger les commandes centrales.");
  }

  const rows = await response.json();
  const sales = rows.map((order) => ({
    id: order.reference,
    orderId: order.id,
    createdAt: order.createdAt,
    total: Number(order.total) || 0,
    customer: order.customer || {},
    items: (order.items || []).map((item) => ({
      id: item.id,
      name: item.name,
      category: item.category,
      price: Number(item.price) || 0,
      quantity: Number(item.quantity) || 0,
      total: Number(item.total) || 0,
      alcohol: Boolean(item.alcohol),
    })),
  }));

  saveSales(sales);
  return sales;
}

async function cancelRemoteOrderRequest(orderId, pin) {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/admin_cancel_order_request`, {
    method: "POST",
    headers: supabaseHeaders,
    body: JSON.stringify({ p_pin: pin, p_order_id: orderId }),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(message || "Impossible d'annuler la commande.");
  }

  return response.json();
}

async function verifyRemoteAdminPin(pin) {
  const currentStock = await refreshRemoteStock();
  const checkQuantity = currentStock["quiche-lorraine"] ?? stockDefaults["quiche-lorraine"] ?? 0;
  await updateRemoteProductStock("quiche-lorraine", checkQuantity, pin);
  return true;
}

function subtractStock(cartItems) {
  const stock = loadStock();
  const unavailableItem = cartItems.find((item) => (stock[item.product.id] ?? 0) < item.quantity);

  if (unavailableItem) {
    return {
      ok: false,
      message: `${unavailableItem.product.name} n'a plus assez de stock disponible.`,
    };
  }

  cartItems.forEach((item) => {
    stock[item.product.id] = Math.max(0, (stock[item.product.id] ?? 0) - item.quantity);
  });
  saveStock(stock);

  return {
    ok: true,
    message: "Commande validée : le stock a été mis à jour.",
  };
}

function loadSales() {
  const storedSales = localStorage.getItem(SALES_KEY);
  if (!storedSales) return [];

  try {
    return JSON.parse(storedSales);
  } catch {
    return [];
  }
}

function saveSales(sales) {
  localStorage.setItem(SALES_KEY, JSON.stringify(sales));
  window.dispatchEvent(new CustomEvent(SALES_EVENT, { detail: sales }));

  if ("BroadcastChannel" in window) {
    const channel = new BroadcastChannel(SALES_EVENT);
    channel.postMessage(sales);
    channel.close();
  }
}

function recordSale(cartItems, customer = {}) {
  const sale = {
    id: `CMD-${Date.now()}`,
    createdAt: new Date().toISOString(),
    total: cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
    customer,
    items: cartItems.map((item) => ({
      id: item.product.id,
      name: item.product.name,
      category: item.product.category,
      price: item.product.price,
      quantity: item.quantity,
      total: item.product.price * item.quantity,
      alcohol: Boolean(item.product.alcohol),
    })),
  };

  const sales = loadSales();
  sales.unshift(sale);
  saveSales(sales);
  return sale;
}

function loadProductAnalytics() {
  const storedAnalytics = localStorage.getItem(ANALYTICS_KEY);
  if (!storedAnalytics) return {};

  try {
    return JSON.parse(storedAnalytics);
  } catch {
    return {};
  }
}

function saveProductAnalytics(analytics) {
  localStorage.setItem(ANALYTICS_KEY, JSON.stringify(analytics));
  window.dispatchEvent(new CustomEvent(ANALYTICS_EVENT, { detail: analytics }));

  if ("BroadcastChannel" in window) {
    const channel = new BroadcastChannel(ANALYTICS_EVENT);
    channel.postMessage(analytics);
    channel.close();
  }
}

function recordProductClick(product) {
  if (!product?.id) return;

  const analytics = loadProductAnalytics();
  const current = analytics[product.id] || {
    id: product.id,
    name: product.name,
    category: product.category,
    clicks: 0,
    adds: 0,
    lastClickAt: null,
  };

  current.name = product.name;
  current.category = product.category;
  current.clicks += 1;
  current.lastClickAt = new Date().toISOString();
  analytics[product.id] = current;
  saveProductAnalytics(analytics);
}

function recordProductAdd(product, quantity = 1) {
  if (!product?.id) return;

  const analytics = loadProductAnalytics();
  const current = analytics[product.id] || {
    id: product.id,
    name: product.name,
    category: product.category,
    clicks: 0,
    adds: 0,
    lastClickAt: null,
  };

  current.name = product.name;
  current.category = product.category;
  current.adds += Number(quantity) || 1;
  current.lastAddAt = new Date().toISOString();
  analytics[product.id] = current;
  saveProductAnalytics(analytics);
}

window.stockDefaults = stockDefaults;
window.loadStock = loadStock;
window.saveStock = saveStock;
window.getProductStock = getProductStock;
window.setProductStock = setProductStock;
window.refreshRemoteStock = refreshRemoteStock;
window.updateRemoteProductStock = updateRemoteProductStock;
window.createRemoteOrderRequest = createRemoteOrderRequest;
window.loadRemoteSales = loadRemoteSales;
window.cancelRemoteOrderRequest = cancelRemoteOrderRequest;
window.verifyRemoteAdminPin = verifyRemoteAdminPin;
window.subtractStock = subtractStock;
window.loadSales = loadSales;
window.saveSales = saveSales;
window.recordSale = recordSale;
window.loadProductAnalytics = loadProductAnalytics;
window.saveProductAnalytics = saveProductAnalytics;
window.recordProductClick = recordProductClick;
window.recordProductAdd = recordProductAdd;
window.STOCK_EVENT = STOCK_EVENT;
window.SALES_EVENT = SALES_EVENT;
window.ANALYTICS_EVENT = ANALYTICS_EVENT;
