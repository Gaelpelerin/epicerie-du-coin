const products = [
  {
    id: "quiche-lorraine",
    name: "Quiche lorraine",
    category: "quiches",
    description: "145 g - quiche individuelle généreuse et savoureuse.",
    price: 5.9,
    icon: "🥧",
    featured: true,
    images: ["assets/quiche-lorraine-1.png"],
    highlights: ["Recette gourmande", "Prête à savourer", "Ingrédients de qualité"],
    allergens: ["Gluten", "Œufs", "Lait"],
  },
  {
    id: "quiche-saumon",
    name: "Quiche saumon & brocoli",
    category: "quiches",
    description: "145 g - une recette complète, douce et savoureuse.",
    price: 5.9,
    icon: "🥧",
    allergens: ["Gluten", "Œufs", "Lait", "Poisson"],
  },
  {
    id: "quiche-epinards",
    name: "Quiche épinards, pignons de pin",
    category: "quiches",
    description: "145 g - recette végétarienne aux notes de fruits secs.",
    price: 5.9,
    icon: "🥧",
    allergens: ["Gluten", "Œufs", "Lait", "Fruits à coque"],
  },
  {
    id: "quiche-poulet",
    name: "Quiche poulet",
    category: "quiches",
    description: "145 g - quiche individuelle au poulet.",
    price: 5.9,
    icon: "🥧",
    allergens: ["Gluten", "Œufs", "Lait"],
  },
  {
    id: "quiche-dinde-halal",
    name: "Quiche dinde halal",
    category: "quiches",
    description: "145 g - quiche individuelle à la dinde halal.",
    price: 5.9,
    icon: "🥧",
    allergens: ["Gluten", "Œufs", "Lait"],
  },
  {
    id: "quiche-poireaux",
    name: "Quiche poireaux",
    category: "quiches",
    description: "145 g - recette végétarienne aux poireaux.",
    price: 5.9,
    icon: "🥧",
    allergens: ["Gluten", "Œufs", "Lait"],
  },
  {
    id: "quiche-mediterraneenne",
    name: "Quiche méditerranéenne",
    category: "quiches",
    description: "145 g - recette végétarienne aux saveurs du soleil.",
    price: 5.9,
    icon: "🥧",
    allergens: ["Gluten", "Œufs", "Lait"],
  },
  {
    id: "quiche-3-fromages",
    name: "Quiche 3 fromages",
    category: "quiches",
    description: "145 g - recette végétarienne fondante aux fromages.",
    price: 5.9,
    icon: "🥧",
    allergens: ["Gluten", "Œufs", "Lait"],
  },
  {
    id: "quiche-chevre-tomate",
    name: "Quiche chèvre tomate",
    category: "quiches",
    description: "145 g - recette végétarienne chèvre et tomate.",
    price: 5.9,
    icon: "🥧",
    allergens: ["Gluten", "Œufs", "Lait"],
  },
  {
    id: "croque",
    name: "Croque-monsieur premium",
    category: "snacking",
    description: "190 g - version végétarienne, pratique et gourmande.",
    price: 8.9,
    icon: "🥪",
    allergens: ["Gluten", "Œufs", "Lait"],
  },
  {
    id: "bretzel-nature",
    name: "Bretzel nature",
    category: "snacking",
    description: "110 g - classique salé à grignoter.",
    price: 3.9,
    icon: "🥨",
    allergens: ["Gluten"],
  },
  {
    id: "bretzel-gratine-lard",
    name: "Bretzel gratiné lard & emmental",
    category: "snacking",
    description: "130 g - gratiné au lard et emmental.",
    price: 5.9,
    icon: "🥨",
    allergens: ["Gluten", "Lait"],
  },
  {
    id: "pizza-napolitaine",
    name: "Pizza napolitaine",
    category: "pizzas",
    description: "450 g - pizza généreuse prête à savourer.",
    price: 8.9,
    icon: "🍕",
    allergens: ["Gluten", "Lait"],
  },
  {
    id: "pizza-jambon-fromage",
    name: "Pizza jambon fromage",
    category: "pizzas",
    description: "450 g - jambon fromage, simple et efficace.",
    price: 8.9,
    icon: "🍕",
    allergens: ["Gluten", "Lait"],
  },
  {
    id: "pizza-mozzarella-pesto",
    name: "Pizza mozzarella tomate pesto",
    category: "pizzas",
    description: "450 g - mozzarella, tomate et pesto.",
    price: 8.9,
    icon: "🍕",
    allergens: ["Gluten", "Lait", "Fruits à coque"],
  },
  {
    id: "pizza-chevre",
    name: "Pizza chèvre miel",
    category: "pizzas",
    description: "450 g - recette végétarienne chèvre et miel.",
    price: 8.9,
    icon: "🍕",
    allergens: ["Gluten", "Lait"],
  },
  {
    id: "pizza-saumon-aneth",
    name: "Pizza saumon aneth",
    category: "pizzas",
    description: "450 g - saumon et aneth.",
    price: 8.9,
    icon: "🍕",
    allergens: ["Gluten", "Lait", "Poisson"],
  },
  {
    id: "pizza-poulet-curry",
    name: "Pizza poulet curry",
    category: "pizzas",
    description: "450 g - poulet curry.",
    price: 8.9,
    icon: "🍕",
    allergens: ["Gluten", "Lait", "Moutarde"],
  },
  {
    id: "pizza-poulet",
    name: "Pizza poulet",
    category: "pizzas",
    description: "450 g - pizza au poulet.",
    price: 8.9,
    icon: "🍕",
    allergens: ["Gluten", "Lait"],
  },
  {
    id: "pizza-vegetarienne",
    name: "Pizza végétarienne",
    category: "pizzas",
    description: "450 g - légumes grillés, mozzarella et tomate.",
    price: 8.9,
    icon: "🍕",
    allergens: ["Gluten", "Lait"],
  },
  {
    id: "pizza-4-fromages",
    name: "Pizza 4 fromages",
    category: "pizzas",
    description: "450 g - recette végétarienne aux fromages.",
    price: 8.9,
    icon: "🍕",
    allergens: ["Gluten", "Lait"],
  },
  {
    id: "pizza-pincee-margherita",
    name: "Pizza pincée margherita",
    category: "pizza-pincees",
    description: "250 g - sandwich pizza végétarien.",
    price: 7.9,
    icon: "🥙",
    allergens: ["Gluten", "Lait"],
  },
  {
    id: "pizza-pincee-diavola",
    name: "Pizza pincée diavola",
    category: "pizza-pincees",
    description: "250 g - sandwich pizza au salami.",
    price: 7.9,
    icon: "🥙",
    allergens: ["Gluten", "Lait"],
  },
  {
    id: "pizza-pincee-jambon",
    name: "Pizza pincée jambon fromage",
    category: "pizza-pincees",
    description: "250 g - sandwich pizza jambon fromage.",
    price: 7.9,
    icon: "🥙",
    allergens: ["Gluten", "Lait"],
  },
  {
    id: "panwich-jambon-emmental",
    name: "Panwich jambon emmental",
    category: "panwichs",
    description: "220 g - panwich chaud jambon emmental.",
    price: 8.9,
    icon: "🥖",
    allergens: ["Gluten", "Lait"],
  },
  {
    id: "panwich-mozzarella-pesto",
    name: "Panwich mozzarella tomate pesto",
    category: "panwichs",
    description: "220 g - panwich végétarien mozzarella, tomate et pesto.",
    price: 8.9,
    icon: "🥖",
    allergens: ["Gluten", "Lait", "Fruits à coque"],
  },
  {
    id: "panwich-jambon-fromage",
    name: "Panwich jambon fromage emmental",
    category: "panwichs",
    description: "220 g - panwich jambon fromage emmental.",
    price: 8.9,
    icon: "🥖",
    allergens: ["Gluten", "Lait"],
  },
  {
    id: "donut-speculoos",
    name: "Donut Spéculoos",
    category: "douceurs",
    description: "90 g - douceur individuelle.",
    price: 4.9,
    icon: "🍩",
    allergens: ["Gluten", "Œufs", "Lait", "Soja"],
  },
  {
    id: "donut-lion",
    name: "Donut Lion",
    category: "douceurs",
    description: "90 g - douceur individuelle.",
    price: 4.9,
    icon: "🍩",
    allergens: ["Gluten", "Œufs", "Lait", "Soja"],
  },
  {
    id: "brioche-babka",
    name: "Brioche Babka",
    category: "douceurs",
    description: "450 g - pour 4 à 5 personnes.",
    price: 14.9,
    icon: "🍞",
    allergens: ["Gluten", "Œufs", "Lait", "Fruits à coque"],
  },
  {
    id: "cake-marbre-rocher",
    name: "Cake marbré rocher",
    category: "douceurs",
    description: "600 g - pour 6 à 8 personnes.",
    price: 24.9,
    icon: "🍰",
    allergens: ["Gluten", "Œufs", "Lait", "Fruits à coque"],
  },
  {
    id: "carrot-cake",
    name: "Carrot cake",
    category: "douceurs",
    description: "500 g - pour 6 à 8 personnes.",
    price: 19.9,
    icon: "🍰",
    allergens: ["Gluten", "Œufs", "Lait", "Fruits à coque"],
  },
  {
    id: "cake-citron",
    name: "Cake citron",
    category: "douceurs",
    description: "450 g - pour 4 à 5 personnes.",
    price: 18.9,
    icon: "🍰",
    allergens: ["Gluten", "Œufs", "Lait"],
  },
  {
    id: "cake-marbre",
    name: "Cake marbré",
    category: "douceurs",
    description: "450 g - pour 6 à 8 personnes.",
    price: 17.9,
    icon: "🍰",
    allergens: ["Gluten", "Œufs", "Lait"],
  },
  {
    id: "cake-pain-epices",
    name: "Cake pain d'épices",
    category: "douceurs",
    description: "450 g - pour 6 à 8 personnes.",
    price: 17.9,
    icon: "🍰",
    allergens: ["Gluten", "Œufs", "Lait"],
  },
  {
    id: "kouglof-sucre",
    name: "Kouglof sucré",
    category: "douceurs",
    description: "400 g - pour 4 à 5 personnes.",
    price: 14.9,
    icon: "🥮",
    allergens: ["Gluten", "Œufs", "Lait", "Fruits à coque"],
  },
  {
    id: "evian",
    name: "Evian 50 cl",
    category: "eaux",
    description: "Boisson fraîche à conserver au réfrigérateur.",
    price: 2.5,
    icon: "💧",
  },
  {
    id: "perrier-33",
    name: "Perrier 33 cl",
    category: "eaux",
    description: "Eau pétillante fraîche.",
    price: 3.5,
    icon: "💧",
  },
  {
    id: "san-pellegrino-50",
    name: "San Pellegrino 50 cl",
    category: "eaux",
    description: "Eau pétillante fraîche.",
    price: 3.9,
    icon: "💧",
  },
  {
    id: "coca",
    name: "Coca-Cola 33 cl",
    category: "softs",
    description: "Classique frais pour accompagner votre commande.",
    price: 3.5,
    icon: "🥤",
  },
  {
    id: "coca-zero",
    name: "Coca-Cola Zero 33 cl",
    category: "softs",
    description: "Classique sans sucres, servi frais.",
    price: 3.5,
    icon: "🥤",
  },
  {
    id: "ice-tea-peche",
    name: "Ice Tea pêche",
    category: "softs",
    description: "Thé glacé pêche servi frais.",
    price: 3.5,
    icon: "🥤",
  },
  {
    id: "oasis-tropical",
    name: "Oasis Tropical",
    category: "softs",
    description: "Boisson fruitée servie fraîche.",
    price: 3.5,
    icon: "🥤",
  },
  {
    id: "orangina",
    name: "Orangina",
    category: "softs",
    description: "Boisson pétillante à l'orange.",
    price: 3.9,
    icon: "🥤",
  },
  {
    id: "schweppes-agrumes",
    name: "Schweppes Agrumes",
    category: "softs",
    description: "Boisson pétillante aux agrumes.",
    price: 3.9,
    icon: "🥤",
  },
  {
    id: "lemonaid-citron",
    name: "Lemonaid citron bio",
    category: "softs",
    description: "Limonade bio au citron, servie fraîche.",
    price: 5.9,
    icon: "🥤",
  },
  {
    id: "lemonaid-passion",
    name: "Lemonaid passion bio",
    category: "softs",
    description: "Limonade bio passion, servie fraîche.",
    price: 5.9,
    icon: "🥤",
  },
  {
    id: "lemonaid-ginger",
    name: "Lemonaid ginger bio",
    category: "softs",
    description: "Limonade bio ginger, servie fraîche.",
    price: 5.9,
    icon: "🥤",
  },
  {
    id: "charitea-the-vert",
    name: "Charitea thé vert bio",
    category: "softs",
    description: "Thé vert bio servi frais.",
    price: 5.9,
    icon: "🥤",
  },
  {
    id: "jus-pomme-artisanal",
    name: "Jus de pomme artisanal 25 cl",
    category: "jus",
    description: "Jus premium artisanal.",
    price: 3.9,
    icon: "🧃",
  },
  {
    id: "jus-orange-presse",
    name: "Jus orange pressé premium 25 cl",
    category: "jus",
    description: "Jus premium pressé.",
    price: 3.9,
    icon: "🧃",
  },
  {
    id: "nectar-mirabelle",
    name: "Nectar mirabelle artisanal 25 cl",
    category: "jus",
    description: "Nectar artisanal de mirabelle.",
    price: 3.9,
    icon: "🧃",
  },
  {
    id: "jus-pomme-fruits-rouges",
    name: "Jus pomme - fruits rouges 25 cl",
    category: "jus",
    description: "Jus premium pomme et fruits rouges.",
    price: 3.9,
    icon: "🧃",
  },
  {
    id: "desperados",
    name: "Desperados 33 cl",
    category: "bieres",
    description: "Bière blonde - vendue avec nourriture uniquement.",
    price: 5.9,
    icon: "🍺",
    alcohol: true,
  },
  {
    id: "heineken",
    name: "Heineken 33 cl",
    category: "bieres",
    description: "Bière blonde, vendue avec nourriture uniquement.",
    price: 4.9,
    icon: "🍺",
    alcohol: true,
  },
  {
    id: "corona",
    name: "Corona 33 cl",
    category: "bieres",
    description: "Bière blonde - vendue avec nourriture uniquement.",
    price: 5.9,
    icon: "🍺",
    alcohol: true,
  },
  {
    id: "lorraine-peu-blond",
    name: "Lorraine Peu Blond",
    category: "bieres",
    description: "Bière locale - vendue avec nourriture uniquement.",
    price: 5.9,
    icon: "🍺",
    alcohol: true,
  },
  {
    id: "lorraine-duchasse",
    name: "Lorraine Duchasse",
    category: "bieres",
    description: "Bière locale - vendue avec nourriture uniquement.",
    price: 6.9,
    icon: "🍺",
    alcohol: true,
  },
  {
    id: "saint-nicolas",
    name: "Saint Nicolas",
    category: "bieres",
    description: "Bière locale - vendue avec nourriture uniquement.",
    price: 7.5,
    icon: "🍺",
    alcohol: true,
  },
  {
    id: "loroyse-triple",
    name: "Loroyse Triple",
    category: "bieres",
    description: "Bière locale triple - vendue avec nourriture uniquement.",
    price: 7.5,
    icon: "🍺",
    alcohol: true,
  },
  {
    id: "noiraude-blanche",
    name: "Noiraude Blanche",
    category: "bieres",
    description: "Bière blanche locale - vendue avec nourriture uniquement.",
    price: 7.9,
    icon: "🍺",
    alcohol: true,
  },
  {
    id: "riesling-alsace",
    name: "Riesling",
    category: "vins",
    description: "Vin blanc - vendu avec nourriture uniquement.",
    price: 6.9,
    icon: "🍷",
    alcohol: true,
  },
  {
    id: "chardonnay",
    name: "Chardonnay Pierres",
    category: "vins",
    description: "Vin blanc - vendu avec nourriture uniquement.",
    price: 19.9,
    icon: "🍷",
    alcohol: true,
  },
  {
    id: "pinot-noir",
    name: "Pinot noir",
    category: "vins",
    description: "Vin rouge - vendu avec nourriture uniquement.",
    price: 16.9,
    icon: "🍷",
    alcohol: true,
  },
  {
    id: "cotes-du-rhone",
    name: "Côtes-du-Rhône",
    category: "vins",
    description: "Vin rouge - vendu avec nourriture uniquement.",
    price: 19.9,
    icon: "🍷",
    alcohol: true,
  },
  {
    id: "coteaux-aix-rose",
    name: "Rosé Coteaux d'Aix",
    category: "vins",
    description: "Vin rosé - vendu avec nourriture uniquement.",
    price: 17.9,
    icon: "🍷",
    alcohol: true,
  },
  {
    id: "uby-3",
    name: "UBY n°3",
    category: "vins",
    description: "Vin blanc UBY - vendu avec nourriture uniquement.",
    price: 19.9,
    icon: "🍷",
    alcohol: true,
  },
  {
    id: "uby-4",
    name: "UBY n°4",
    category: "vins",
    description: "Vin UBY - vendu avec nourriture uniquement.",
    price: 16.9,
    icon: "🍷",
    alcohol: true,
  },
  {
    id: "prosecco",
    name: "Prosecco",
    category: "bulles",
    description: "Bulles - vendues avec nourriture uniquement.",
    price: 18.9,
    icon: "🍾",
    alcohol: true,
  },
  {
    id: "champagne-brut",
    name: "Champagne Veuve Pelletier",
    category: "bulles",
    description: "Champagne brut - vendu avec nourriture uniquement.",
    price: 39.9,
    icon: "🍾",
    alcohol: true,
  },
  {
    id: "gin-tonic",
    name: "Gin Tonic prêt à boire 25 cl",
    category: "apero",
    description: "Cocktail prêt à boire - vendu avec nourriture uniquement.",
    price: 5.9,
    icon: "🍸",
    alcohol: true,
  },
  {
    id: "spritz",
    name: "Spritz prêt à boire 25 cl",
    category: "apero",
    description: "Cocktail prêt à boire - vendu avec nourriture uniquement.",
    price: 5.9,
    icon: "🍹",
    alcohol: true,
  },
  {
    id: "mojito",
    name: "Mojito prêt à boire 25 cl",
    category: "apero",
    description: "Cocktail prêt à boire - vendu avec nourriture uniquement.",
    price: 5.9,
    icon: "🍹",
    alcohol: true,
  },
  {
    id: "pack-apero",
    name: "Pack Apéro Chalet",
    category: "pack",
    description: "Bières artisanales, bretzel gratiné, chips premium et fromage.",
    price: 24.9,
    icon: "🧺",
    alcohol: true,
  },
];

const ALCOHOL_SALES_ENABLED = false;
const FIRST_DELIVERY_DATE = "2026-05-31";
const WHATSAPP_ORDER_NUMBER = "33675748449";
const grid = document.querySelector("[data-product-grid]");
const tabs = document.querySelectorAll("[data-filter]");
const cartPanel = document.querySelector("[data-cart-panel]");
const cartItems = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");
const cartTotal = document.querySelector("[data-cart-total]");
const cartMessage = document.querySelector("[data-cart-message]");
const checkoutForm = document.querySelector("[data-checkout-form]");
const deliveryDateInput = checkoutForm.querySelector('input[name="date"]');
const deliveryHint = document.querySelector("[data-delivery-hint]");
const alcoholConfirm = document.querySelector("[data-alcohol-confirm]");
const productModal = document.querySelector("[data-product-modal]");
const productModalContent = document.querySelector("[data-product-modal-content]");
const scrim = document.querySelector(".scrim");
const cartToast = document.querySelector("[data-cart-toast]");
const checkoutButton = document.querySelector("[data-checkout]");
const cart = new Map();
const featuredState = {
  quantity: 1,
  activeImage: "assets/quiche-lorraine-1.png",
  productId: null,
};
let checkoutFormVisible = false;

const formatPrice = (price) =>
  new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(price);

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function setupDeliveryDateInput() {
  const today = formatDateInput(new Date());
  const minDate = today > FIRST_DELIVERY_DATE ? today : FIRST_DELIVERY_DATE;
  deliveryDateInput.min = minDate;
  if (deliveryDateInput.value && deliveryDateInput.value < minDate) deliveryDateInput.value = minDate;
  deliveryHint.textContent =
    minDate === FIRST_DELIVERY_DATE
      ? "Premiers créneaux disponibles à partir du dimanche 31 mai."
      : "Choisissez un créneau à partir d'aujourd'hui.";
}

function isAlcoholLocked(product) {
  return Boolean(product.alcohol) && !ALCOHOL_SALES_ENABLED;
}

function isPurchasable(product) {
  return getProductStock(product.id) > 0 && !isAlcoholLocked(product);
}

function renderProducts(filter = "all") {
  const visibleProducts = filter === "all" ? products : products.filter((product) => product.category === filter);
  const featuredProduct = visibleProducts.find((product) => product.featured);
  const standardProducts = visibleProducts.filter((product) => !product.featured);

  grid.innerHTML = `
    ${featuredProduct ? renderFeaturedProduct(featuredProduct) : ""}
    ${standardProducts
    .map(
      (product) => `
        <article class="product-card ${getProductStock(product.id) <= 0 ? "is-sold-out" : ""}" data-product-card="${product.id}">
          ${getProductStock(product.id) <= 0 ? '<div class="sold-out-ribbon product-ribbon"><span>Victime de son succès</span></div>' : ""}
          <div class="product-image" aria-hidden="true">${product.icon}</div>
          <div class="product-body">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            ${renderStockBadge(product)}
            ${renderAllergens(product)}
            <div class="product-meta">
              <span class="price">${formatPrice(product.price)}</span>
              <button class="add-btn" type="button" data-add="${product.id}" aria-label="Ajouter ${product.name}" ${!isPurchasable(product) ? "disabled" : ""}>${renderCartQuantityLabel(product.id)}</button>
            </div>
          </div>
        </article>
      `
    )
    .join("")}
  `;
}

function renderStockBadge(product) {
  if (isAlcoholLocked(product)) return '<span class="stock-badge hold">Licence en validation</span>';
  const stock = getProductStock(product.id);
  if (stock <= 0) return '<span class="stock-badge out">Épuisé</span>';
  if (stock <= 3) return `<span class="stock-badge low">Plus que ${stock}</span>`;
  return `<span class="stock-badge">En stock</span>`;
}

function renderAllergens(product) {
  if (!product.allergens?.length) return "";

  return `
    <div class="allergen-tags" aria-label="Allergènes ${product.name}">
      ${product.allergens.map((allergen) => `<span>${allergen}</span>`).join("")}
    </div>
  `;
}

function renderFeaturedProduct(product) {
  const activeImage = product.images.includes(featuredState.activeImage) ? featuredState.activeImage : product.images[0];
  const stock = getProductStock(product.id);
  const selectedQuantity = Math.min(featuredState.quantity, Math.max(1, stock));
  featuredState.quantity = selectedQuantity;

  return `
    <article class="featured-product ${stock <= 0 ? "is-sold-out" : ""}" data-featured-card="${product.id}">
      <div class="featured-gallery">
        <img class="featured-main-image" src="${activeImage}" alt="${product.name}" />
        ${stock <= 0 ? '<div class="sold-out-ribbon"><span>Victime de son succès</span></div>' : ""}
      </div>
      <div class="featured-details product-body">
        <h3>${product.name}</h3>
        <p class="featured-description">${product.description}</p>
        ${renderStockBadge(product)}
        ${renderAllergens(product)}
        <div class="product-meta">
          <span class="price">${formatPrice(product.price)}</span>
          <button class="add-btn" type="button" data-add="${product.id}" aria-label="Ajouter ${product.name}" ${!isPurchasable(product) ? "disabled" : ""}>${renderCartQuantityLabel(product.id)}</button>
        </div>
      </div>
    </article>
  `;
}

function renderProductModal(product) {
  const stock = getProductStock(product.id);
  const productImages = product.images || [];
  const activeImage = productImages.includes(featuredState.activeImage) ? featuredState.activeImage : productImages[0];
  const highlights = product.highlights || ["Produit sélectionné avec soin", "Prêt à savourer", "Livraison à votre adresse"];
  const selectedQuantity = Math.min(featuredState.quantity, Math.max(1, stock));
  featuredState.quantity = selectedQuantity;

  return `
    <article class="modal-product-detail ${stock <= 0 ? "is-sold-out" : ""}">
      <div class="modal-gallery">
        ${
          activeImage
            ? `<img class="modal-main-image" src="${activeImage}" alt="${product.name}" />`
            : `<div class="modal-main-image modal-icon-image" aria-hidden="true">${product.icon}</div>`
        }
        ${stock <= 0 ? '<div class="sold-out-ribbon modal-ribbon"><span>Victime de son succès</span></div>' : ""}
        ${
          productImages.length > 1
            ? `<div class="featured-thumbs" aria-label="Photos ${product.name}">
                ${productImages
                  .map(
                    (image, index) => `
                      <button class="${image === activeImage ? "active" : ""}" type="button" data-featured-image="${image}" aria-label="Voir la photo ${index + 1} de ${product.name}">
                        <img src="${image}" alt="" />
                      </button>
                    `
                  )
                  .join("")}
              </div>`
            : ""
        }
      </div>
      <div class="modal-product-info">
        <div class="featured-icon" aria-hidden="true">${product.icon}</div>
        <h3>${product.name}</h3>
        <p class="featured-description">${product.description}</p>
        ${renderStockBadge(product)}
        ${renderAllergens(product)}
        <ul class="featured-highlights">
          ${highlights.map((highlight) => `<li><span aria-hidden="true">✦</span>${highlight}</li>`).join("")}
        </ul>
        <div class="featured-buy">
          <strong class="featured-price">${formatPrice(product.price)}</strong>
          <div class="featured-quantity" aria-label="Quantité">
            <button type="button" data-featured-delta="-1" aria-label="Réduire la quantité">−</button>
            <span data-featured-quantity>${featuredState.quantity}</span>
            <button type="button" data-featured-delta="1" aria-label="Augmenter la quantité">+</button>
          </div>
        </div>
        <button class="primary-btn featured-cart-btn" type="button" data-featured-add="${product.id}" ${!isPurchasable(product) ? "disabled" : ""}>
          ${isAlcoholLocked(product) ? "Licence en validation" : stock <= 0 ? "Épuisé" : "Ajouter au panier"}
        </button>
      </div>
    </article>
  `;
}

function openProductModal(productId) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  featuredState.productId = product.id;
  featuredState.activeImage = product.images?.[0] || "";
  featuredState.quantity = 1;
  productModalContent.innerHTML = renderProductModal(product);
  productModal.classList.add("open");
  scrim.classList.add("open");
}

function closeProductModal() {
  productModal.classList.remove("open");
  productModalContent.innerHTML = "";
  if (!cartPanel.classList.contains("open")) scrim.classList.remove("open");
}

function getCartQuantity(productId) {
  return cart.get(productId)?.quantity || 0;
}

function renderCartQuantityLabel(productId) {
  const quantity = getCartQuantity(productId);
  return quantity > 0 ? quantity : "+";
}

function refreshAddButtons() {
  document.querySelectorAll("[data-add]").forEach((button) => {
    button.textContent = renderCartQuantityLabel(button.dataset.add);
  });
}

function showCartToast(message) {
  cartToast.textContent = message;
  cartToast.classList.add("show");
  clearTimeout(showCartToast.timeout);
  showCartToast.timeout = window.setTimeout(() => {
    cartToast.classList.remove("show");
  }, 2200);
}

function addToCart(productId, quantity = 1) {
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existing = cart.get(productId);
  const stock = getProductStock(productId);
  const requestedQuantity = existing ? existing.quantity + quantity : quantity;
  const allowedQuantity = Math.min(stock, requestedQuantity);

  if (isAlcoholLocked(product)) {
    cartMessage.textContent = `${product.name} sera disponible après validation de la licence alcool.`;
    showCartToast("Licence alcool en validation");
    openCart();
    return;
  }

  if (stock <= 0 || allowedQuantity <= 0) {
    cartMessage.textContent = `${product.name} est indisponible.`;
    showCartToast("Produit indisponible");
    openCart();
    return;
  }

  cart.set(productId, { product, quantity: allowedQuantity });
  recordProductAdd(product, quantity);
  cartMessage.textContent =
    requestedQuantity > stock ? `Stock limité : ${stock} disponible pour ${product.name}.` : "";
  renderCart();
  refreshAddButtons();
  if (productModal.classList.contains("open")) closeProductModal();
  showCartToast(`${product.name} ajouté au panier`);
}

function updateQuantity(productId, delta) {
  const item = cart.get(productId);
  if (!item) return;

  const nextQuantity = item.quantity + delta;
  if (nextQuantity <= 0) {
    cart.delete(productId);
  } else {
    cart.set(productId, { ...item, quantity: Math.min(nextQuantity, getProductStock(productId)) });
  }

  renderCart();
  refreshAddButtons();
}

function setCheckoutFormVisible(isVisible) {
  checkoutFormVisible = isVisible;
  checkoutForm.classList.toggle("hidden", !checkoutFormVisible);
  checkoutButton.textContent = checkoutFormVisible ? "Envoyer la demande" : "Finaliser ma commande";
  if (checkoutFormVisible) cartMessage.textContent = "Complétez vos informations pour envoyer la demande.";
}

async function checkoutCart() {
  const items = [...cart.values()];

  if (!items.length) {
    cartMessage.textContent = "Votre panier est vide.";
    return;
  }

  if (!checkoutFormVisible) {
    setCheckoutFormVisible(true);
    return;
  }

  const formData = new FormData(checkoutForm);
  const customer = {
    name: String(formData.get("name") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    address: String(formData.get("address") || "").trim(),
    date: String(formData.get("date") || "").trim(),
    time: String(formData.get("time") || "").trim(),
    notes: String(formData.get("notes") || "").trim(),
  };
  const hasAlcohol = items.some((item) => item.product.alcohol);

  if (!customer.name || !customer.phone || !customer.address || !customer.date || !customer.time) {
    cartMessage.textContent = "Merci de compléter nom, téléphone, adresse, jour et heure de livraison.";
    return;
  }

  if (hasAlcohol && formData.get("alcoholAge") !== "on") {
    cartMessage.textContent = "Merci de confirmer votre majorité pour les boissons alcoolisées.";
    return;
  }

  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const lines = items.map((item) => `- ${item.quantity} x ${item.product.name} (${formatPrice(item.product.price)})`);
  const orderReference = `EDC-${Date.now().toString().slice(-6)}`;
  let finalReference = orderReference;

  cartMessage.textContent = "Préparation de votre demande...";

  try {
    const remoteOrder = await createRemoteOrderRequest(items, customer, orderReference);
    finalReference = remoteOrder.reference || orderReference;
    recordSale(items, { ...customer, reference: finalReference, remote: true });
    await refreshRemoteStock();
  } catch (error) {
    const message = String(error.message || "");

    if (message.includes("stock_insufficient") || message.includes("product_not_available")) {
      cartMessage.textContent = "Un produit vient d'être épuisé. Le stock a été mis à jour, merci de vérifier votre panier.";
      await refreshStockThenShop();
      return;
    }

    console.warn(error);
    recordSale(items, { ...customer, reference: finalReference, remote: false });
  }

  const message = [
    "Bonjour, je souhaite passer une commande L'Épicerie du Coin :",
    "",
    `Référence demande : ${finalReference}`,
    "",
    ...lines,
    "",
    `Total estimé : ${formatPrice(totalPrice)}`,
    "",
    `Nom : ${customer.name}`,
    `Téléphone : ${customer.phone}`,
    `Adresse/logement : ${customer.address}`,
    `Créneau souhaité : ${customer.date} à ${customer.time}`,
    "",
    "Information dégustation : les produits sont livrés froids, prêts à réchauffer.",
    "Merci de penser à préchauffer votre four 10 à 15 minutes avant dégustation.",
    "",
    "La commande sera confirmée après validation de la disponibilité et du créneau.",
    customer.notes ? `Notes : ${customer.notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  window.open(`https://wa.me/${WHATSAPP_ORDER_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
  cartMessage.textContent = "Votre demande va s'ouvrir dans WhatsApp. La commande sera confirmée après échange.";
}

function refreshShopFromStock() {
  renderProducts(document.querySelector("[data-filter].active")?.dataset.filter || "all");
  renderCart();
}

async function refreshStockThenShop() {
  await refreshRemoteStock();
  refreshShopFromStock();
}

if ("BroadcastChannel" in window) {
  const stockChannel = new BroadcastChannel(STOCK_EVENT);
  stockChannel.addEventListener("message", refreshShopFromStock);
}

function renderCart() {
  const items = [...cart.values()];
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const hasAlcohol = items.some((item) => item.product.alcohol);

  cartCount.textContent = totalQuantity;
  cartTotal.textContent = formatPrice(totalPrice);
  alcoholConfirm.classList.toggle("hidden", !hasAlcohol);

  if (!items.length) {
    cartItems.innerHTML = '<p class="empty-cart">Votre panier est vide.</p>';
    setCheckoutFormVisible(false);
    return;
  }

  cartItems.innerHTML = items
    .map(
      ({ product, quantity }) => `
        <div class="cart-line">
          <div>
            <strong>${product.name}</strong>
            <span>${formatPrice(product.price)} / unité</span>
          </div>
          <div class="qty-controls">
            <button type="button" data-qty="${product.id}" data-delta="-1" aria-label="Retirer un ${product.name}">−</button>
            <strong>${quantity}</strong>
            <button type="button" data-qty="${product.id}" data-delta="1" aria-label="Ajouter un ${product.name}">+</button>
          </div>
        </div>
      `
    )
    .join("");
}

function openCart() {
  closeProductModal();
  if (!cart.size) setCheckoutFormVisible(false);
  cartPanel.classList.add("open");
  scrim.classList.add("open");
}

function closeCart() {
  cartPanel.classList.remove("open");
  if (!productModal.classList.contains("open")) scrim.classList.remove("open");
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((button) => button.classList.remove("active"));
    tab.classList.add("active");
    renderProducts(tab.dataset.filter);
  });
});

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const quantityButton = event.target.closest("[data-qty]");
  const featuredImageButton = event.target.closest("[data-featured-image]");
  const featuredDeltaButton = event.target.closest("[data-featured-delta]");
  const featuredAddButton = event.target.closest("[data-featured-add]");
  const featuredCard = event.target.closest("[data-featured-card]");
  const productCard = event.target.closest("[data-product-card]");

  if (addButton) {
    event.preventDefault();
    event.stopPropagation();
    addToCart(addButton.dataset.add);
    return;
  }

  if (featuredAddButton) {
    event.preventDefault();
    event.stopPropagation();
    addToCart(featuredAddButton.dataset.featuredAdd, featuredState.quantity);
    return;
  }

  if (productCard && !event.target.closest("button")) {
    const product = products.find((item) => item.id === productCard.dataset.productCard);
    recordProductClick(product);
    openProductModal(productCard.dataset.productCard);
  }
  if (quantityButton) updateQuantity(quantityButton.dataset.qty, Number(quantityButton.dataset.delta));
  if (featuredImageButton) {
    featuredState.activeImage = featuredImageButton.dataset.featuredImage;
    if (productModal.classList.contains("open")) {
      const modalProduct = products.find((product) => product.id === featuredState.productId);
      productModalContent.innerHTML = renderProductModal(modalProduct);
    } else {
      renderProducts(document.querySelector("[data-filter].active")?.dataset.filter || "all");
    }
  }
  if (featuredDeltaButton) {
    const modalProduct = products.find((product) => product.id === featuredState.productId);
    const maxQuantity = modalProduct ? Math.max(1, getProductStock(modalProduct.id)) : 1;
    featuredState.quantity = Math.min(maxQuantity, Math.max(1, featuredState.quantity + Number(featuredDeltaButton.dataset.featuredDelta)));
    document.querySelector("[data-featured-quantity]").textContent = featuredState.quantity;
  }
  if (featuredCard && !event.target.closest("button")) {
    const product = products.find((item) => item.id === featuredCard.dataset.featuredCard);
    recordProductClick(product);
    openProductModal(featuredCard.dataset.featuredCard);
  }
});

document.querySelectorAll("[data-cart-open]").forEach((button) => button.addEventListener("click", openCart));
document.querySelectorAll("[data-cart-close]").forEach((button) => button.addEventListener("click", closeCart));
document.querySelectorAll("[data-product-modal-close]").forEach((button) => button.addEventListener("click", closeProductModal));
document.querySelector("[data-add-pack]").addEventListener("click", () => addToCart("pack-apero"));
document.querySelector("[data-checkout]").addEventListener("click", checkoutCart);
window.addEventListener("focus", refreshStockThenShop);
window.addEventListener(STOCK_EVENT, refreshShopFromStock);
window.addEventListener("pageshow", refreshStockThenShop);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) refreshStockThenShop();
});

renderProducts();
renderCart();
setupDeliveryDateInput();
refreshStockThenShop();
