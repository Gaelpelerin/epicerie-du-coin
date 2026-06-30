const PRODUCT_IMAGE_VERSION = "drinks-4";

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
    images: ["products/evian.jpeg"],
  },
  {
    id: "perrier-33",
    name: "Perrier 33 cl",
    category: "eaux",
    description: "Eau pétillante fraîche.",
    price: 3.5,
    icon: "💧",
    images: ["products/perrier-33.jpeg"],
  },
  {
    id: "san-pellegrino-50",
    name: "San Pellegrino 50 cl",
    category: "eaux",
    description: "Eau pétillante fraîche.",
    price: 3.9,
    icon: "💧",
    images: ["products/san-pellegrino-50.jpeg"],
  },
  {
    id: "coca",
    name: "Coca-Cola 33 cl",
    category: "softs",
    description: "Classique frais pour accompagner votre commande.",
    price: 3.5,
    icon: "🥤",
    images: ["products/coca.jpeg"],
  },
  {
    id: "coca-zero",
    name: "Coca-Cola Zero 33 cl",
    category: "softs",
    description: "Classique sans sucres, servi frais.",
    price: 3.5,
    icon: "🥤",
    images: ["products/coca-zero.jpeg"],
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
    images: ["products/orangina.jpeg"],
  },
  {
    id: "schweppes-agrumes",
    name: "Schweppes Agrumes",
    category: "softs",
    description: "Boisson pétillante aux agrumes.",
    price: 3.9,
    icon: "🥤",
    images: ["products/schweppes-agrumes.jpeg"],
  },
  {
    id: "lemonaid-citron",
    name: "Lemonaid citron bio",
    category: "softs",
    description: "Limonade bio au citron, servie fraîche.",
    price: 5.9,
    icon: "🥤",
    images: ["products/lemonaid-citron.jpeg"],
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
    images: ["products/desperados.jpeg"],
    alcohol: true,
  },
  {
    id: "heineken",
    name: "Heineken 33 cl",
    category: "bieres",
    description: "Bière blonde, vendue avec nourriture uniquement.",
    price: 4.9,
    icon: "🍺",
    images: ["products/heineken.jpeg"],
    alcohol: true,
  },
  {
    id: "corona",
    name: "Corona 33 cl",
    category: "bieres",
    description: "Bière blonde - vendue avec nourriture uniquement.",
    price: 5.9,
    icon: "🍺",
    images: ["products/corona.jpeg"],
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
    images: ["products/lorraine-duchasse.jpeg"],
    alcohol: true,
  },
  {
    id: "saint-nicolas",
    name: "Saint Nicolas",
    category: "bieres",
    description: "Bière locale - vendue avec nourriture uniquement.",
    price: 7.5,
    icon: "🍺",
    images: ["products/saint-nicolas.jpeg"],
    alcohol: true,
  },
  {
    id: "loroyse-triple",
    name: "Loroyse Triple",
    category: "bieres",
    description: "Bière locale triple - vendue avec nourriture uniquement.",
    price: 7.5,
    icon: "🍺",
    images: ["products/loroyse-triple.jpeg"],
    alcohol: true,
  },
  {
    id: "noiraude-blanche",
    name: "Noiraude Blanche",
    category: "bieres",
    description: "Bière blanche locale - vendue avec nourriture uniquement.",
    price: 7.9,
    icon: "🍺",
    images: ["products/noiraude-blanche.jpeg"],
    alcohol: true,
  },
  {
    id: "riesling-alsace",
    name: "Riesling",
    category: "vins",
    description: "Vin blanc - vendu avec nourriture uniquement.",
    price: 6.9,
    icon: "🍷",
    images: ["products/riesling-alsace.jpeg"],
    alcohol: true,
  },
  {
    id: "chardonnay",
    name: "Chardonnay Pierres",
    category: "vins",
    description: "Vin blanc - vendu avec nourriture uniquement.",
    price: 19.9,
    icon: "🍷",
    images: ["products/chardonnay.jpeg"],
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
    images: ["products/cotes-du-rhone.jpeg"],
    alcohol: true,
  },
  {
    id: "coteaux-aix-rose",
    name: "Rosé Coteaux d'Aix",
    category: "vins",
    description: "Vin rosé - vendu avec nourriture uniquement.",
    price: 17.9,
    icon: "🍷",
    images: ["products/coteaux-aix-rose.jpeg"],
    alcohol: true,
  },
  {
    id: "uby-3",
    name: "UBY n°3",
    category: "vins",
    description: "Vin blanc UBY - vendu avec nourriture uniquement.",
    price: 19.9,
    icon: "🍷",
    images: ["products/uby-3.jpeg"],
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
    images: ["products/prosecco.jpeg"],
    alcohol: true,
  },
  {
    id: "champagne-brut",
    name: "Champagne Veuve Pelletier",
    category: "bulles",
    description: "Champagne brut - vendu avec nourriture uniquement.",
    price: 39.9,
    icon: "🍾",
    images: ["products/champagne-brut.jpeg"],
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
];

const ALCOHOL_SALES_ENABLED = true;
const FIRST_DELIVERY_DATE = "2026-05-31";
const MIN_DELIVERY_LEAD_MINUTES = 60;
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
const deliveryTimeInput = checkoutForm.querySelector('input[name="time"]');
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
  new Intl.NumberFormat(typeof i18nLocale === "function" ? i18nLocale() : "fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(price);

function formatDateInput(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

const pad2 = (value) => String(value).padStart(2, "0");

// Met à jour l'heure minimale sélectionnable selon le délai de préparation.
// Livraison 24h/24, mais au moins MIN_DELIVERY_LEAD_MINUTES après la commande.
function updateDeliveryTimeConstraints() {
  const today = formatDateInput(new Date());
  const earliest = new Date(Date.now() + MIN_DELIVERY_LEAD_MINUTES * 60000);

  if (deliveryDateInput.value === today) {
    if (formatDateInput(earliest) === today) {
      const minTime = `${pad2(earliest.getHours())}:${pad2(earliest.getMinutes())}`;
      deliveryTimeInput.min = minTime;
      if (deliveryTimeInput.value && deliveryTimeInput.value < minTime) {
        deliveryTimeInput.value = minTime;
      }
    } else {
      // Le 1er créneau possible tombe demain : on bascule la date.
      deliveryDateInput.value = formatDateInput(earliest);
      deliveryTimeInput.removeAttribute("min");
    }
  } else {
    deliveryTimeInput.removeAttribute("min");
  }
}

function setupDeliveryDateInput() {
  const today = formatDateInput(new Date());
  const minDate = today > FIRST_DELIVERY_DATE ? today : FIRST_DELIVERY_DATE;
  deliveryDateInput.min = minDate;
  if (deliveryDateInput.value && deliveryDateInput.value < minDate) deliveryDateInput.value = minDate;
  deliveryHint.textContent = t("delivery_hint_base");
  deliveryDateInput.addEventListener("change", updateDeliveryTimeConstraints);
  deliveryTimeInput.addEventListener("change", updateDeliveryTimeConstraints);
  updateDeliveryTimeConstraints();
}

// Fermetures de livraison : créneaux où le client ne peut pas se faire livrer
// (ex : pas de livreur ce soir). Chargées depuis Supabase au boot, re-vérifiées
// à la commande. Chaque entrée : { startsAt:Date, endsAt:Date, reason:string }.
let deliveryClosures = [];

function formatClosureLabel(closure) {
  const dayOpts = { weekday: "long", day: "numeric", month: "long" };
  const loc = typeof i18nLocale === "function" ? i18nLocale() : "fr-FR";
  const hm = (d) => (d.getMinutes() ? `${pad2(d.getHours())}h${pad2(d.getMinutes())}` : `${pad2(d.getHours())}h`);
  const day1 = closure.startsAt.toLocaleDateString(loc, dayOpts);
  if (closure.startsAt.toDateString() === closure.endsAt.toDateString()) {
    return t("closure_same_day", { day: day1, from: hm(closure.startsAt), to: hm(closure.endsAt) });
  }
  const day2 = closure.endsAt.toLocaleDateString(loc, dayOpts);
  return t("closure_range", { day1, from: hm(closure.startsAt), day2, to: hm(closure.endsAt) });
}

function closureForDate(deliveryAt) {
  return deliveryClosures.find((closure) => deliveryAt >= closure.startsAt && deliveryAt < closure.endsAt) || null;
}

function renderDeliveryClosuresHint() {
  if (!deliveryHint) return;
  const base = t("delivery_hint_base");
  if (!deliveryClosures.length) {
    deliveryHint.textContent = base;
    return;
  }
  const list = deliveryClosures.slice(0, 4).map(formatClosureLabel).join(" · ");
  deliveryHint.innerHTML = `${base}<br><span class="delivery-closed-note">${t("delivery_closed_prefix", { list })}</span>`;
}

async function loadDeliveryClosures() {
  try {
    const rows = await listClosures();
    deliveryClosures = (Array.isArray(rows) ? rows : [])
      .map((closure) => ({
        startsAt: new Date(closure.starts_at),
        endsAt: new Date(closure.ends_at),
        reason: closure.reason || "",
      }))
      .filter((closure) => !Number.isNaN(closure.startsAt.getTime()) && !Number.isNaN(closure.endsAt.getTime()));
    renderDeliveryClosuresHint();
  } catch (error) {
    console.warn(error);
  }
}

function isAlcoholLocked(product) {
  return Boolean(product.alcohol) && !ALCOHOL_SALES_ENABLED;
}

function isPurchasable(product) {
  return getProductStock(product.id) > 0 && !isAlcoholLocked(product);
}

function renderProducts(filter = "all") {
  const visibleProducts = filter === "all" ? products : products.filter((product) => product.category === filter);

  grid.innerHTML = `
    ${visibleProducts
    .map((product) =>
      product.scalable
        ? renderScalablePackCard(product)
        : `
        <article class="product-card ${getProductStock(product.id) <= 0 ? "is-sold-out" : ""}" data-product-card="${product.id}">
          ${getProductStock(product.id) <= 0 ? `<div class="sold-out-ribbon product-ribbon"><span>${t("ribbon_soldout")}</span></div>` : ""}
          ${renderProductCardImage(product)}
          <div class="product-body">
            <h3>${pName(product)}</h3>
            <p>${pDesc(product)}</p>
            ${renderStockBadge(product)}
            ${renderAllergens(product)}
            <div class="product-meta">
              <span class="price">${formatPrice(product.price)}</span>
              ${renderProductCardControl(product)}
            </div>
          </div>
        </article>
      `
    )
    .join("")}
  `;
}

// Packs adaptables au nombre de personnes : le client choisit 1..10 personnes,
// le contenu et le prix sont multipliés. La dispo (getProductStock) = nombre max
// de personnes assemblable (calculé par list_packs). État UI : packPersons[id].
const packPersons = {};

function packComponentName(productId) {
  const found = products.find((item) => item.id === productId);
  return found ? found.name : productId;
}

function clampPackPersons(product, value) {
  const stockMax = getProductStock(product.id);
  const max = Math.max(0, Math.min(10, stockMax));
  if (max <= 0) return 0;
  return Math.min(max, Math.max(1, Math.round(value) || 1));
}

function getPackPersons(product) {
  const stored = packPersons[product.id];
  const base = stored !== undefined ? stored : product.defaultPersons || 2;
  const persons = clampPackPersons(product, base);
  packPersons[product.id] = persons;
  return persons;
}

function renderScalablePackCard(product) {
  const stockMax = getProductStock(product.id);
  const soldOut = stockMax <= 0;
  const persons = getPackPersons(product);
  const total = product.price * Math.max(1, persons);
  const contents = (product.components || [])
    .map((component) => `<li>${component.quantity * Math.max(1, persons)} × ${packComponentName(component.product_id)}</li>`)
    .join("");
  const inCart = getCartQuantity(product.id) > 0;

  return `
    <article class="product-card pack-card ${soldOut ? "is-sold-out" : ""}" data-product-card="${product.id}">
      ${soldOut ? `<div class="sold-out-ribbon product-ribbon"><span>${t("ribbon_soldout")}</span></div>` : ""}
      ${renderProductCardImage(product)}
      <div class="product-body">
        <h3>${pName(product)}</h3>
        <p>${pDesc(product)}</p>
        ${renderStockBadge(product)}
        ${
          soldOut
            ? ""
            : `
        <div class="pack-persons">
          <span class="pack-persons-label">${t("pack_persons_label")}</span>
          <div class="pack-persons-stepper" data-pack-persons="${product.id}">
            <button type="button" data-pack-person="${product.id}" data-pack-person-delta="-1" aria-label="${t("pack_less_aria")}" ${persons <= 1 ? "disabled" : ""}>−</button>
            <strong>${persons}</strong>
            <button type="button" data-pack-person="${product.id}" data-pack-person-delta="1" aria-label="${t("pack_more_aria")}" ${persons >= Math.min(10, stockMax) ? "disabled" : ""}>+</button>
          </div>
        </div>
        ${contents ? `<ul class="pack-contents">${contents}</ul>` : ""}`
        }
        <div class="product-meta">
          <span class="price">${soldOut ? formatPrice(product.price) : formatPrice(total)}${!soldOut ? `<small class="pack-price-unit">${formatPrice(product.price)}${t("pack_per_person")}</small>` : ""}</span>
          <button class="add-btn pack-add-btn" type="button" data-pack-add="${product.id}" ${soldOut ? "disabled" : ""}>${inCart ? t("pack_update") : t("pack_add")}</button>
        </div>
      </div>
    </article>
  `;
}

// Ajoute / met à jour un pack adaptable dans le panier : la quantité de ligne
// = le nombre de personnes (sémantique « remplacer », pas « +1 »). La commande
// décrémente recette(par personne) × personnes côté serveur.
function setPackPersonsInCart(packId) {
  const product = products.find((item) => item.id === packId);
  if (!product) return;

  if (isAlcoholLocked(product)) {
    cartMessage.textContent = t("msg_alcohol_pending", { name: pName(product) });
    showCartToast(t("toast_alcohol_pending"));
    openCart();
    return;
  }

  const persons = clampPackPersons(product, getPackPersons(product));
  if (persons <= 0) {
    cartMessage.textContent = t("msg_unavailable", { name: pName(product) });
    showCartToast(t("toast_unavailable"));
    openCart();
    return;
  }

  packPersons[packId] = persons;
  cart.set(packId, { product, quantity: persons });
  recordProductAdd(product, 1);
  cartMessage.textContent = "";
  renderCart();
  refreshAddButtons();
  rerenderPackCard(product);
  showCartToast(t("toast_pack_added", { name: pName(product), n: persons }));
}

function rerenderPackCard(product) {
  const card = grid.querySelector(`[data-product-card="${product.id}"]`);
  if (card) card.outerHTML = renderScalablePackCard(product);
}

function renderStockBadge(product) {
  if (isAlcoholLocked(product)) return `<span class="stock-badge hold">${t("badge_hold")}</span>`;
  const stock = getProductStock(product.id);
  if (stock <= 0) return `<span class="stock-badge out">${t("badge_out")}</span>`;
  if (stock <= 3) return `<span class="stock-badge low">${t("badge_low", { n: stock })}</span>`;
  return `<span class="stock-badge">${t("badge_instock")}</span>`;
}

function renderAllergens(product) {
  if (!product.allergens?.length) return "";

  return `
    <div class="allergen-tags" aria-label="${t("allergens_aria", { name: pName(product) })}">
      ${product.allergens.map((allergen) => `<span>${tAllergen(allergen)}</span>`).join("")}
    </div>
  `;
}

function getProductCardImage(product) {
  const image = product.images?.[0] || `products/${product.id}.jpeg`;

  if (image.startsWith("products/") && !image.includes("?")) {
    return `${image}?v=${PRODUCT_IMAGE_VERSION}`;
  }

  return image;
}

function renderProductCardImage(product) {
  const image = getProductCardImage(product);
  const isUploadedPhoto = image.startsWith("products/");
  const uploadedImageClass = isUploadedPhoto ? " product-image--uploaded" : "";
  const uploadedPhotoClass = isUploadedPhoto ? " product-card-photo--uploaded" : "";

  return `
    <div class="product-image has-photo${uploadedImageClass}" aria-hidden="true">
      <img class="product-card-photo${uploadedPhotoClass}" src="${image}" alt="" loading="lazy" onerror="this.closest('.product-image').classList.remove('has-photo'); this.closest('.product-image').classList.add('has-icon'); this.remove();" />
      <span class="product-icon-fallback">${product.icon}</span>
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
      ${stock <= 0 ? `<div class="sold-out-ribbon product-ribbon"><span>${t("ribbon_soldout")}</span></div>` : ""}
      <div class="featured-gallery">
        <img class="featured-main-image" src="${activeImage}" alt="${pName(product)}" />
      </div>
      <div class="featured-details product-body">
        <h3>${pName(product)}</h3>
        <p class="featured-description">${pDesc(product)}</p>
        ${renderStockBadge(product)}
        ${renderAllergens(product)}
        <div class="product-meta">
          <span class="price">${formatPrice(product.price)}</span>
          <button class="add-btn" type="button" data-add="${product.id}" aria-label="${t("add_aria", { name: pName(product) })}" ${!isPurchasable(product) ? "disabled" : ""}>${renderCartQuantityLabel(product.id)}</button>
        </div>
      </div>
    </article>
  `;
}

function renderProductModal(product) {
  const stock = getProductStock(product.id);
  const productImages = product.images || [];
  const activeImage = productImages.includes(featuredState.activeImage) ? featuredState.activeImage : productImages[0];
  const highlights = pHigh(product);
  const selectedQuantity = Math.min(featuredState.quantity, Math.max(1, stock));
  featuredState.quantity = selectedQuantity;

  return `
    <article class="modal-product-detail ${stock <= 0 ? "is-sold-out" : ""}">
      <div class="modal-gallery">
        ${
          activeImage
            ? `<img class="modal-main-image" src="${activeImage}" alt="${pName(product)}" />`
            : `<div class="modal-main-image modal-icon-image" aria-hidden="true">${product.icon}</div>`
        }
        ${stock <= 0 ? `<div class="sold-out-ribbon modal-ribbon"><span>${t("ribbon_soldout")}</span></div>` : ""}
        ${
          productImages.length > 1
            ? `<div class="featured-thumbs" aria-label="${t("modal_photos_aria", { name: pName(product) })}">
                ${productImages
                  .map(
                    (image, index) => `
                      <button class="${image === activeImage ? "active" : ""}" type="button" data-featured-image="${image}" aria-label="${t("modal_photo_view_aria", { n: index + 1, name: pName(product) })}">
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
        <h3>${pName(product)}</h3>
        <p class="featured-description">${pDesc(product)}</p>
        ${renderStockBadge(product)}
        ${renderAllergens(product)}
        <ul class="featured-highlights">
          ${highlights.map((highlight) => `<li><span aria-hidden="true">✦</span>${highlight}</li>`).join("")}
        </ul>
        <div class="featured-buy">
          <strong class="featured-price">${formatPrice(product.price)}</strong>
          <div class="featured-quantity" aria-label="${t("modal_qty_aria")}">
            <button type="button" data-featured-delta="-1" aria-label="${t("modal_qty_less")}">−</button>
            <span data-featured-quantity>${featuredState.quantity}</span>
            <button type="button" data-featured-delta="1" aria-label="${t("modal_qty_more")}">+</button>
          </div>
        </div>
        <button class="primary-btn featured-cart-btn" type="button" data-featured-add="${product.id}" ${!isPurchasable(product) ? "disabled" : ""}>
          ${isAlcoholLocked(product) ? t("badge_hold") : stock <= 0 ? t("badge_out") : t("modal_add_cart")}
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

function renderProductCardControl(product) {
  const quantity = getCartQuantity(product.id);

  if (quantity > 0) {
    return `
      <div class="card-qty" data-card-control="${product.id}">
        <button type="button" data-qty="${product.id}" data-delta="-1" aria-label="${t("remove_aria", { name: pName(product) })}">−</button>
        <strong>${quantity}</strong>
        <button type="button" data-qty="${product.id}" data-delta="1" aria-label="${t("addone_aria", { name: pName(product) })}">+</button>
      </div>`;
  }

  return `
    <div class="card-qty" data-card-control="${product.id}">
      <button class="add-btn" type="button" data-add="${product.id}" aria-label="${t("add_aria", { name: pName(product) })}" ${!isPurchasable(product) ? "disabled" : ""}>+</button>
    </div>`;
}

function refreshAddButtons() {
  document.querySelectorAll("[data-card-control]").forEach((control) => {
    const product = products.find((item) => item.id === control.dataset.cardControl);
    if (product) control.outerHTML = renderProductCardControl(product);
  });
  grid.querySelectorAll(".pack-card[data-product-card]").forEach((card) => {
    const product = products.find((item) => item.id === card.dataset.productCard);
    if (product && product.scalable) card.outerHTML = renderScalablePackCard(product);
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
    cartMessage.textContent = t("msg_alcohol_pending", { name: pName(product) });
    showCartToast(t("toast_alcohol_pending"));
    openCart();
    return;
  }

  if (stock <= 0 || allowedQuantity <= 0) {
    cartMessage.textContent = t("msg_unavailable", { name: pName(product) });
    showCartToast(t("toast_unavailable"));
    openCart();
    return;
  }

  cart.set(productId, { product, quantity: allowedQuantity });
  recordProductAdd(product, quantity);
  cartMessage.textContent =
    requestedQuantity > stock ? t("msg_stock_limited", { n: stock, name: pName(product) }) : "";
  renderCart();
  refreshAddButtons();
  if (productModal.classList.contains("open")) closeProductModal();
  showCartToast(t("toast_added", { name: pName(product) }));
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
  checkoutButton.textContent = checkoutFormVisible ? t("checkout_send") : t("checkout_btn");
  if (checkoutFormVisible) cartMessage.textContent = t("checkout_fill");
}

async function checkoutCart() {
  const items = [...cart.values()];

  if (!items.length) {
    cartMessage.textContent = t("cart_empty");
    return;
  }

  if (!checkoutFormVisible) {
    setCheckoutFormVisible(true);
    return;
  }

  const formData = new FormData(checkoutForm);
  const street = String(formData.get("address") || "").trim();
  const postalCode = String(formData.get("postalCode") || "").trim();
  const city = String(formData.get("city") || "").trim();
  const fullAddress = [street, [postalCode, city].filter(Boolean).join(" ")]
    .filter(Boolean)
    .join(", ");
  const customer = {
    name: String(formData.get("name") || "").trim(),
    phone: String(formData.get("phone") || "").trim(),
    address: fullAddress,
    email: String(formData.get("email") || "").trim(),
    date: String(formData.get("date") || "").trim(),
    time: String(formData.get("time") || "").trim(),
    notes: String(formData.get("notes") || "").trim(),
  };
  const hasAlcohol = items.some((item) => item.product.alcohol);

  if (!customer.name || !customer.phone || !street || !postalCode || !city || !customer.date || !customer.time) {
    cartMessage.textContent = t("msg_fill_fields");
    return;
  }

  const deliveryAt = new Date(`${customer.date}T${customer.time}`);
  const earliestDelivery = new Date(Date.now() + MIN_DELIVERY_LEAD_MINUTES * 60000);
  if (Number.isNaN(deliveryAt.getTime()) || deliveryAt < earliestDelivery) {
    cartMessage.textContent = t("msg_slot_too_soon");
    return;
  }

  // Re-vérifie les fermetures (au cas où une nouvelle serait ajoutée pendant
  // que la page est ouverte), puis bloque si le créneau choisi tombe dedans.
  await loadDeliveryClosures();
  const closure = closureForDate(deliveryAt);
  if (closure) {
    const windowLabel = `${formatClosureLabel(closure)}${closure.reason ? ` (${closure.reason})` : ""}`;
    cartMessage.textContent = t("msg_no_delivery", { window: windowLabel });
    return;
  }
  customer.deliveryAt = deliveryAt.toISOString();

  if (hasAlcohol && formData.get("alcoholAge") !== "on") {
    cartMessage.textContent = t("msg_confirm_age");
    return;
  }

  const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const lines = items.map((item) => `- ${item.quantity} x ${item.product.name} (${formatPrice(item.product.price)})`);
  const orderReference = `EDC-${Date.now().toString().slice(-6)}`;

  // Mémorise la commande : la page "Merci" en aura besoin pour le message
  // WhatsApp après paiement, et le panier sera restauré si le paiement est annulé.
  try {
    localStorage.setItem(
      "epicerie-last-order",
      JSON.stringify({ reference: orderReference, total: totalPrice, lines, customer })
    );
    localStorage.setItem(
      "epicerie-pending-cart",
      JSON.stringify(items.map((item) => ({ id: item.product.id, quantity: item.quantity })))
    );
  } catch (error) {
    console.warn(error);
  }

  cartMessage.textContent = t("msg_redirect_payment");

  try {
    const session = await createCheckoutSession(items, customer, orderReference);
    if (!session?.url) throw new Error("URL de paiement manquante.");
    window.location.href = session.url;
  } catch (error) {
    console.warn(error);
    cartMessage.textContent = t("msg_payment_failed");
  }
}

function refreshShopFromStock() {
  renderProducts(document.querySelector("[data-filter].active")?.dataset.filter || "all");
  renderCart();
}

async function refreshStockThenShop() {
  await refreshRemoteStock();
  refreshShopFromStock();
}

// Traduction automatique des packs via MyMemory (fr→en/de).
// Résultats mis en cache dans localStorage ; re-traduit si le contenu change.
async function translatePackText(text, targetLang) {
  if (!text) return "";
  try {
    const res = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=fr|${targetLang}&de=contact@epicerieducoin.fr`
    );
    if (!res.ok) return text;
    const data = await res.json();
    return data.responseData?.translatedText || text;
  } catch {
    return text;
  }
}

function packI18nCacheKey(pack) {
  let h = 0;
  const s = (pack.name || "") + "|" + (pack.description || "");
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return `epicerie-pack-i18n-${pack.id}-${h.toString(36)}`;
}

async function translateAndRegisterPacks(packs) {
  await Promise.all(
    packs.map(async (pack) => {
      const cacheKey = packI18nCacheKey(pack);
      let cached = null;
      try {
        cached = JSON.parse(localStorage.getItem(cacheKey));
      } catch {}
      if (cached && cached.en && cached.de) {
        if (typeof registerPackI18n === "function") registerPackI18n(pack.id, cached.en, cached.de);
        return;
      }
      const [nameEn, descEn, nameDe, descDe] = await Promise.all([
        pack.name ? translatePackText(pack.name, "en") : Promise.resolve(""),
        pack.description ? translatePackText(pack.description, "en") : Promise.resolve(""),
        pack.name ? translatePackText(pack.name, "de") : Promise.resolve(""),
        pack.description ? translatePackText(pack.description, "de") : Promise.resolve(""),
      ]);
      const en = { name: nameEn || pack.name, description: descEn || pack.description };
      const de = { name: nameDe || pack.name, description: descDe || pack.description };
      try {
        localStorage.setItem(cacheKey, JSON.stringify({ en, de }));
      } catch {}
      if (typeof registerPackI18n === "function") registerPackI18n(pack.id, en, de);
    })
  );
  if (typeof getLang === "function" && getLang() !== "fr" && typeof window.onI18nChange === "function") {
    window.onI18nChange();
  }
}

// Packs personnalisés créés depuis l'admin : on les charge depuis Supabase
// et on les fusionne dans le catalogue (filtre « Packs »). Tout le reste
// (rendu, panier, paiement) fonctionne ensuite via products[] sans changement.
const customPackIds = new Set();

async function loadCustomPacks() {
  if (typeof listRemotePacks !== "function") return;
  let remotePacks;
  try {
    remotePacks = await listRemotePacks();
  } catch (error) {
    console.error("Chargement des packs impossible :", error);
    return;
  }
  if (!Array.isArray(remotePacks)) return;

  // Retire les anciens packs persos avant de réinjecter la liste fraîche.
  for (let i = products.length - 1; i >= 0; i -= 1) {
    if (customPackIds.has(products[i].id)) products.splice(i, 1);
  }
  customPackIds.clear();

  remotePacks.forEach((pack) => {
    if (!pack || !pack.id) return;
    customPackIds.add(pack.id);
    products.push({
      id: pack.id,
      name: pack.name,
      category: "pack",
      description: pack.description || "",
      price: Number(pack.price) || 0,
      icon: pack.icon || "🧺",
      images: pack.image ? [pack.image] : undefined,
      alcohol: Boolean(pack.alcohol),
      scalable: Boolean(pack.scalable),
      defaultPersons: Math.min(10, Math.max(1, Number(pack.default_persons) || 2)),
      components: Array.isArray(pack.components) ? pack.components : [],
    });
    // Pack-formule : sa dispo est calculée par list_packs à partir du stock
    // des ingrédients (plus petit floor(stock ÷ quantité_recette)). On la
    // pousse dans le cache de stock pour que la boutique l'affiche/épuise.
    setProductStock(pack.id, Math.max(0, Number(pack.stock) || 0));
  });

  refreshShopFromStock();
  // Lancement asynchrone sans bloquer l'affichage ; re-render auto si lang ≠ fr.
  translateAndRegisterPacks(remotePacks.filter((p) => p && p.id));
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
    cartItems.innerHTML = `<p class="empty-cart">${t("cart_empty")}</p>`;
    setCheckoutFormVisible(false);
    return;
  }

  cartItems.innerHTML = items
    .map(
      ({ product, quantity }) => `
        <div class="cart-line">
          <div>
            <strong>${pName(product)}</strong>
            <span>${product.scalable ? `${formatPrice(product.price)} ${t("price_per_person")} · ${quantity}${t("pack_per_person")}` : `${formatPrice(product.price)} ${t("price_per_unit")}`}</span>
          </div>
          <div class="qty-controls">
            <button type="button" data-qty="${product.id}" data-delta="-1" aria-label="${t("remove_aria", { name: pName(product) })}">−</button>
            <strong>${quantity}</strong>
            <button type="button" data-qty="${product.id}" data-delta="1" aria-label="${t("addone_aria", { name: pName(product) })}">+</button>
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
  const packPersonButton = event.target.closest("[data-pack-person]");
  const packAddButton = event.target.closest("[data-pack-add]");

  if (packPersonButton) {
    event.preventDefault();
    event.stopPropagation();
    const product = products.find((item) => item.id === packPersonButton.dataset.packPerson);
    if (product) {
      packPersons[product.id] = clampPackPersons(product, getPackPersons(product) + Number(packPersonButton.dataset.packPersonDelta));
      rerenderPackCard(product);
    }
    return;
  }

  if (packAddButton) {
    event.preventDefault();
    event.stopPropagation();
    setPackPersonsInCart(packAddButton.dataset.packAdd);
    return;
  }

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
    if (product && product.scalable) return;
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
document.querySelector("[data-checkout]").addEventListener("click", checkoutCart);

document.querySelectorAll('[href="#packs"]').forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const packTab = document.querySelector('[data-filter="pack"]');
    if (packTab) {
      tabs.forEach((b) => b.classList.remove("active"));
      packTab.classList.add("active");
      renderProducts("pack");
    }
    document.getElementById("catalogue")?.scrollIntoView({ behavior: "smooth" });
  });
});

// Inscription newsletter (double opt-in côté Supabase).
const newsletterForm = document.querySelector("[data-newsletter-form]");
if (newsletterForm) {
  const newsletterMessage = newsletterForm.querySelector("[data-newsletter-message]");
  newsletterForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = newsletterForm.email.value.trim();
    const consent = newsletterForm.consent.checked;
    const submitButton = newsletterForm.querySelector("button[type='submit']");

    newsletterMessage.classList.remove("is-error", "is-success");

    if (!email) {
      newsletterMessage.textContent = t("news_need_email");
      newsletterMessage.classList.add("is-error");
      return;
    }
    if (!consent) {
      newsletterMessage.textContent = t("news_need_consent");
      newsletterMessage.classList.add("is-error");
      return;
    }

    submitButton.disabled = true;
    try {
      const result = await window.subscribeNewsletter(email, consent, "shop_footer");
      if (result && result.ok) {
        if (result.status === "already_confirmed") {
          newsletterMessage.textContent = t("news_already");
        } else {
          newsletterMessage.textContent = t("news_almost");
        }
        newsletterMessage.classList.add("is-success");
        newsletterForm.reset();
      } else {
        const reason = result && result.error === "invalid_email"
          ? t("news_invalid")
          : t("news_fail");
        newsletterMessage.textContent = reason;
        newsletterMessage.classList.add("is-error");
      }
    } catch (error) {
      console.warn(error);
      newsletterMessage.textContent = t("news_error");
      newsletterMessage.classList.add("is-error");
    } finally {
      submitButton.disabled = false;
    }
  });
}

window.addEventListener("focus", refreshStockThenShop);
window.addEventListener(STOCK_EVENT, refreshShopFromStock);
window.addEventListener("pageshow", refreshStockThenShop);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) refreshStockThenShop();
});

// Retour depuis Stripe avec paiement annulé : on restaure le panier conservé
// dans localStorage avant la redirection, pour que le client puisse réessayer.
function restoreCartIfPaymentCancelled() {
  if (!new URLSearchParams(window.location.search).has("paiement")) return;

  let pending = null;
  try {
    pending = JSON.parse(localStorage.getItem("epicerie-pending-cart") || "null");
  } catch (error) {
    console.warn(error);
  }

  if (Array.isArray(pending) && pending.length) {
    cart.clear();
    pending.forEach((entry) => {
      const product = products.find((item) => item.id === entry.id);
      if (product) cart.set(product.id, { product, quantity: entry.quantity });
    });
    renderCart();
    refreshAddButtons();
    openCart();
    cartMessage.textContent = t("msg_payment_cancelled");
  }

  localStorage.removeItem("epicerie-pending-cart");
  history.replaceState(null, "", window.location.pathname);
}

// Visites boutique : on compte chaque arrivée (QR du flyer ou accès direct),
// une fois par session (dédupe sessionStorage). Si l'URL contient ?src=qr on
// tague la source 'qr', sinon 'direct', puis on nettoie l'URL.
function trackVisit() {
  const params = new URLSearchParams(window.location.search);
  const source = params.get("src") === "qr" ? "qr" : "direct";

  if (!sessionStorage.getItem("epicerie-visit-counted")) {
    sessionStorage.setItem("epicerie-visit-counted", "1");
    logQrScan(source).catch((error) => console.warn(error));
  }

  if (params.has("src")) {
    params.delete("src");
    const query = params.toString();
    history.replaceState(null, "", window.location.pathname + (query ? `?${query}` : ""));
  }
}

// Appelé par i18n.js quand la langue change : on re-rend tout le contenu
// dynamique (cartes produits, panier, indice de livraison) dans la langue active.
window.onI18nChange = function () {
  renderProducts(document.querySelector("[data-filter].active")?.dataset.filter || "all");
  renderCart();
  renderDeliveryClosuresHint();
};

renderProducts();
renderCart();
setupDeliveryDateInput();
// On charge d'abord le stock central (réécrit tout le cache), PUIS les packs
// (qui injectent leur dispo calculée) pour éviter que le refresh ne l'écrase.
refreshStockThenShop().then(loadCustomPacks);
loadDeliveryClosures();
trackVisit();
restoreCartIfPaymentCancelled();
