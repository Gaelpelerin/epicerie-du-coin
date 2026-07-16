// Moteur i18n FR / EN / DE pour la boutique.
// Détection auto selon la langue du téléphone (navigator.language).
// Repli anglais OBLIGATOIRE : toute langue non FR/DE bascule en anglais.
// Le switcher du header n'est qu'une option de remplacement manuelle.
(function () {
  "use strict";

  const SUPPORTED = ["fr", "en", "de"];
  const STORAGE_KEY = "epicerie-lang";
  const LOCALES = { fr: "fr-FR", en: "en-GB", de: "de-DE" };

  function detectLang() {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      /* localStorage indisponible : on retombe sur la détection */
    }
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    const nav = (navigator.languages && navigator.languages[0]) || navigator.language || "en";
    const code = String(nav).toLowerCase().slice(0, 2);
    if (code === "fr") return "fr";
    if (code === "de") return "de";
    return "en"; // repli anglais pour toute autre langue
  }

  let currentLang = detectLang();

  // ---- Dictionnaire interface -------------------------------------------
  const UI = {
    fr: {
      title: "L'Épicerie du Coin - Livraison gourmande",
      nav_catalogue: "Catalogue",
      nav_delivery: "Livraison",
      nav_cart: "Panier",
      hero_note:
        "Nos produits ont été sélectionnés avec soin et pensés pour faciliter le confort de votre séjour par notre service de livraison.",
      svc_order_title: "Commander<br />à l'avance",
      svc_order_text:
        "Pour être sûr que vos produits soient disponibles et livrés dans les meilleures conditions !",
      svc_delivery_title: "Livraison à votre adresse<br />7 jours sur 7",
      svc_delivery_text: "Profitez, on s'occupe du reste !",
      svc_treat_title: "Une envie gourmande après votre journée ?",
      svc_treat_text: "On est là pour vous régaler !",
      cta_shop: "Voir notre boutique",
      cta_packs: "Voir nos packs",
      cat_eyebrow: "Catalogue",
      cat_title: "Vos essentiels gourmands",
      allergen_eyebrow: "Allergènes",
      allergen_title: "Légende à valider avant publication",
      allergen_note:
        "Les allergènes affichés sont une base de travail issue du flyer. Avant toute mise en ligne publique, ils doivent être confirmés avec les fiches produits ou fournisseurs.",
      notice_title: "Vente d'alcool réglementée",
      notice_text:
        "Les boissons alcoolisées sont désactivées tant que la licence de vente à emporter n'est pas confirmée. L'abus d'alcool est dangereux pour la santé.",
      news_eyebrow: "Restons en contact",
      news_title: "Nos nouveautés &amp; offres gourmandes",
      news_lead:
        "Recevez en avant-première nos nouveaux produits, packs de saison et petites attentions. Pas de spam, désinscription en un clic.",
      news_email_ph: "vous@exemple.fr",
      news_email_aria: "Votre email",
      news_submit: "Je m'inscris",
      news_consent:
        "J'accepte de recevoir la newsletter de L'Épicerie du Coin et que mon email soit utilisé à cette fin. <a href=\"confidentialite.html\">En savoir plus</a>.",
      footer_legal: "Mentions légales",
      footer_cgv: "CGV",
      footer_privacy: "Confidentialité",
      cart_eyebrow: "Commande",
      cart_title: "Votre panier",
      cart_close_aria: "Fermer le panier",
      cart_empty: "Votre panier est vide.",
      f_name: "Nom",
      f_name_ph: "Votre nom",
      f_phone: "Téléphone",
      f_address: "Adresse de livraison",
      f_address_ph: "N° et rue, ville, résidence, chambre...",
      f_postal: "Code postal",
      f_city: "Ville",
      f_email: "Email (facultatif, pour recevoir votre reçu)",
      f_date: "Jour souhaité",
      f_time: "Heure souhaitée",
      f_notes: "Notes",
      f_notes_ph: "Digicode, précision de livraison, allergie à signaler...",
      f_alcohol_confirm: "Je confirme avoir 18 ans ou plus pour les boissons alcoolisées.",
      checkout_reheat_note:
        "Produits livrés froids, prêts à réchauffer. Pensez à préchauffer votre four 10 à 15 minutes avant dégustation.",
      cart_total: "Total estimé",
      checkout_btn: "Finaliser ma commande",
      checkout_send: "Envoyer la demande",
      checkout_fill: "Complétez vos informations pour envoyer la demande.",
      product_modal_close_aria: "Fermer le détail produit",
      lang_aria: "Choisir la langue",
      ribbon_soldout: "Victime de son succès",
      badge_hold: "Licence en validation",
      badge_out: "Épuisé",
      badge_low: "Plus que {n}",
      badge_instock: "En stock",
      badge_promo: "Promo",
      price_was: "Prix habituel",
      promo_eyebrow: "Promotions",
      promo_title: "Offres du moment",
      upsell_eyebrow: "Petit plaisir",
      upsell_title: "Envie d'un dessert ?",
      upsell_lead: "Complétez votre commande avec une douceur avant de valider.",
      upsell_add: "Ajouter",
      upsell_continue: "Continuer sans dessert",
      upsell_close_aria: "Fermer la suggestion",
      pack_persons_label: "Nombre de personnes",
      pack_less_aria: "Moins une personne",
      pack_more_aria: "Plus une personne",
      pack_update: "Mettre à jour",
      pack_add: "Ajouter",
      pack_per_person: "/pers.",
      price_per_unit: "/ unité",
      price_per_person: "/ pers.",
      add_aria: "Ajouter {name}",
      remove_aria: "Retirer un {name}",
      addone_aria: "Ajouter un {name}",
      modal_add_cart: "Ajouter au panier",
      modal_qty_aria: "Quantité",
      modal_qty_less: "Réduire la quantité",
      modal_qty_more: "Augmenter la quantité",
      modal_photos_aria: "Photos {name}",
      modal_photo_view_aria: "Voir la photo {n} de {name}",
      allergens_aria: "Allergènes {name}",
      highlights_default: ["Produit sélectionné avec soin", "Prêt à savourer", "Livraison à votre adresse"],
      toast_added: "{name} ajouté au panier",
      doors_title: "Par où commencer ?",
      doors_sub: "Composez un menu, choisissez un pack ou piochez à la carte.",
      door_menu_badge: "Le + malin",
      door_menu_title: "Un menu",
      door_menu_desc: "1 plat + 1 boisson + 1 donut à prix doux.",
      door_menu_cta: "Composer mon menu",
      door_pack_title: "Un pack",
      door_pack_desc: "Des sélections prêtes pour plusieurs personnes.",
      door_pack_cta: "Voir les packs",
      door_product_title: "À la carte",
      door_product_desc: "Choisissez vos produits un à un.",
      door_product_cta: "Voir la boutique",
      menu_modal_title: "Composez votre menu",
      menu_modal_sub: "1 plat + 1 boisson (sans alcool) + 1 donut.",
      menu_pick_formula: "1. Votre formule",
      menu_pick_plat: "2. Votre plat",
      menu_pick_boisson: "3. Votre boisson",
      menu_pick_donut: "4. Votre donut",
      menu_total_lbl: "Prix du menu",
      menu_separate_lbl: "Séparément",
      menu_close_aria: "Fermer le composeur de menu",
      menu_save: "soit {amount} d'économie",
      menu_add_btn: "Ajouter le menu · {price}",
      menu_add_pending: "Choisissez plat, boisson et donut",
      menu_added: "{name} ajouté au panier",
      toast_pack_added: "{name} ({n} pers.) au panier",
      toast_unavailable: "Produit indisponible",
      toast_alcohol_pending: "Licence alcool en validation",
      msg_alcohol_pending: "{name} sera disponible après validation de la licence alcool.",
      msg_unavailable: "{name} est indisponible.",
      msg_stock_limited: "Stock limité : {n} disponible pour {name}.",
      msg_fill_fields:
        "Merci de compléter nom, téléphone, adresse, jour et heure de livraison.",
      msg_slot_too_soon:
        "Choisissez un créneau au moins 1 heure après votre commande, le temps de préparer et livrer.",
      msg_no_delivery: "Pas de livraison possible {window}. Merci de choisir un autre créneau.",
      msg_confirm_age: "Merci de confirmer votre majorité pour les boissons alcoolisées.",
      msg_redirect_payment: "Redirection vers le paiement sécurisé...",
      msg_payment_failed: "Le paiement n'a pas pu démarrer. Merci de réessayer dans un instant.",
      msg_payment_cancelled: "Paiement annulé : votre panier a été conservé.",
      msg_saving_order: "Enregistrement de votre commande...",
      msg_order_failed: "La commande n'a pas pu être enregistrée. Merci de réessayer dans un instant.",
      pay_method: "Mode de paiement",
      pay_card: "Payer maintenant par carte",
      pay_cash: "En espèces à la livraison",
      delivery_hint_base: "Livraison 7j/7, 24h/24 — commandez au moins 1 heure à l'avance.",
      delivery_closed_prefix: "Pas de livraison : {list}.",
      closure_same_day: "{day} de {from} à {to}",
      closure_range: "du {day1} {from} au {day2} {to}",
      news_need_email: "Merci d'indiquer votre email.",
      news_need_consent: "Merci de cocher la case de consentement.",
      news_already: "Vous êtes déjà inscrit, merci !",
      news_almost: "Presque fini : un email de confirmation vous a été envoyé.",
      news_invalid: "Cet email ne semble pas valide.",
      news_fail: "Inscription impossible pour le moment.",
      news_error: "Une erreur est survenue, réessayez plus tard.",
    },
    en: {
      title: "L'Épicerie du Coin - Gourmet delivery",
      nav_catalogue: "Catalogue",
      nav_delivery: "Delivery",
      nav_cart: "Cart",
      hero_note:
        "Our products are carefully selected and designed to make your stay more comfortable, delivered straight to you.",
      svc_order_title: "Order<br />ahead",
      svc_order_text:
        "To make sure your products are available and delivered in the best conditions!",
      svc_delivery_title: "Delivery to your door<br />7 days a week",
      svc_delivery_text: "Relax, we take care of the rest!",
      svc_treat_title: "Craving something tasty after your day?",
      svc_treat_text: "We're here to treat you!",
      cta_shop: "See our shop",
      cta_packs: "See our packs",
      cat_eyebrow: "Catalogue",
      cat_title: "Your gourmet essentials",
      allergen_eyebrow: "Allergens",
      allergen_title: "Legend to be confirmed before publication",
      allergen_note:
        "The allergens shown are a working draft taken from the flyer. Before any public release, they must be confirmed against the product sheets or suppliers.",
      notice_title: "Regulated alcohol sales",
      notice_text:
        "Alcoholic drinks are disabled until the takeaway licence is confirmed. Excessive alcohol consumption is dangerous for your health.",
      news_eyebrow: "Let's stay in touch",
      news_title: "Our new products &amp; gourmet offers",
      news_lead:
        "Be the first to discover our new products, seasonal packs and little extras. No spam, unsubscribe in one click.",
      news_email_ph: "you@example.com",
      news_email_aria: "Your email",
      news_submit: "Subscribe",
      news_consent:
        "I agree to receive the L'Épicerie du Coin newsletter and for my email to be used for this purpose. <a href=\"confidentialite.html\">Learn more</a>.",
      footer_legal: "Legal notice",
      footer_cgv: "Terms",
      footer_privacy: "Privacy",
      cart_eyebrow: "Order",
      cart_title: "Your cart",
      cart_close_aria: "Close cart",
      cart_empty: "Your cart is empty.",
      f_name: "Name",
      f_name_ph: "Your name",
      f_phone: "Phone",
      f_address: "Delivery address",
      f_address_ph: "Number and street, city, residence, room...",
      f_postal: "Postal code",
      f_city: "City",
      f_email: "Email (optional, to receive your receipt)",
      f_date: "Preferred day",
      f_time: "Preferred time",
      f_notes: "Notes",
      f_notes_ph: "Door code, delivery details, allergy to report...",
      f_alcohol_confirm: "I confirm I am 18 or older for alcoholic drinks.",
      checkout_reheat_note:
        "Products delivered cold, ready to reheat. Remember to preheat your oven 10 to 15 minutes before eating.",
      cart_total: "Estimated total",
      checkout_btn: "Complete my order",
      checkout_send: "Send request",
      checkout_fill: "Fill in your details to send the request.",
      product_modal_close_aria: "Close product details",
      lang_aria: "Choose language",
      ribbon_soldout: "Victim of its success",
      badge_hold: "Licence pending",
      badge_out: "Sold out",
      badge_low: "Only {n} left",
      badge_instock: "In stock",
      badge_promo: "Promo",
      price_was: "Usual price",
      promo_eyebrow: "Promotions",
      promo_title: "Current deals",
      upsell_eyebrow: "Little treat",
      upsell_title: "Fancy a dessert?",
      upsell_lead: "Add a sweet treat to your order before checking out.",
      upsell_add: "Add",
      upsell_continue: "Continue without dessert",
      upsell_close_aria: "Close suggestion",
      pack_persons_label: "Number of people",
      pack_less_aria: "One fewer person",
      pack_more_aria: "One more person",
      pack_update: "Update",
      pack_add: "Add",
      pack_per_person: "/person",
      price_per_unit: "/ unit",
      price_per_person: "/ person",
      add_aria: "Add {name}",
      remove_aria: "Remove one {name}",
      addone_aria: "Add one {name}",
      modal_add_cart: "Add to cart",
      modal_qty_aria: "Quantity",
      modal_qty_less: "Decrease quantity",
      modal_qty_more: "Increase quantity",
      modal_photos_aria: "{name} photos",
      modal_photo_view_aria: "View photo {n} of {name}",
      allergens_aria: "{name} allergens",
      highlights_default: ["Carefully selected product", "Ready to enjoy", "Delivery to your door"],
      toast_added: "{name} added to cart",
      doors_title: "Where to start?",
      doors_sub: "Build a menu, pick a pack, or shop à la carte.",
      door_menu_badge: "Smartest",
      door_menu_title: "A menu",
      door_menu_desc: "1 dish + 1 drink + 1 donut at a friendly price.",
      door_menu_cta: "Build my menu",
      door_pack_title: "A pack",
      door_pack_desc: "Ready-made selections for several people.",
      door_pack_cta: "See the packs",
      door_product_title: "À la carte",
      door_product_desc: "Pick your products one by one.",
      door_product_cta: "See the shop",
      menu_modal_title: "Build your menu",
      menu_modal_sub: "1 dish + 1 drink (non-alcoholic) + 1 donut.",
      menu_pick_formula: "1. Your formula",
      menu_pick_plat: "2. Your dish",
      menu_pick_boisson: "3. Your drink",
      menu_pick_donut: "4. Your donut",
      menu_total_lbl: "Menu price",
      menu_separate_lbl: "Separately",
      menu_close_aria: "Close the menu builder",
      menu_save: "you save {amount}",
      menu_add_btn: "Add the menu · {price}",
      menu_add_pending: "Pick a dish, a drink and a donut",
      menu_added: "{name} added to cart",
      toast_pack_added: "{name} ({n} people) added to cart",
      toast_unavailable: "Product unavailable",
      toast_alcohol_pending: "Alcohol licence pending",
      msg_alcohol_pending: "{name} will be available once the alcohol licence is confirmed.",
      msg_unavailable: "{name} is unavailable.",
      msg_stock_limited: "Limited stock: {n} available for {name}.",
      msg_fill_fields:
        "Please fill in name, phone, address, delivery day and time.",
      msg_slot_too_soon:
        "Choose a slot at least 1 hour after your order, to allow time to prepare and deliver.",
      msg_no_delivery: "No delivery available {window}. Please choose another slot.",
      msg_confirm_age: "Please confirm you are of legal age for alcoholic drinks.",
      msg_redirect_payment: "Redirecting to secure payment...",
      msg_payment_failed: "Payment could not start. Please try again in a moment.",
      msg_payment_cancelled: "Payment cancelled: your cart has been saved.",
      msg_saving_order: "Saving your order...",
      msg_order_failed: "Your order could not be saved. Please try again in a moment.",
      pay_method: "Payment method",
      pay_card: "Pay now by card",
      pay_cash: "Cash on delivery",
      delivery_hint_base: "Delivery 7 days a week, 24/7 — order at least 1 hour ahead.",
      delivery_closed_prefix: "No delivery: {list}.",
      closure_same_day: "{day} from {from} to {to}",
      closure_range: "from {day1} {from} to {day2} {to}",
      news_need_email: "Please enter your email.",
      news_need_consent: "Please tick the consent box.",
      news_already: "You're already subscribed, thank you!",
      news_almost: "Almost done: a confirmation email has been sent to you.",
      news_invalid: "This email does not seem valid.",
      news_fail: "Subscription not possible at the moment.",
      news_error: "An error occurred, please try again later.",
    },
    de: {
      title: "L'Épicerie du Coin - Feinkost-Lieferung",
      nav_catalogue: "Katalog",
      nav_delivery: "Lieferung",
      nav_cart: "Warenkorb",
      hero_note:
        "Unsere Produkte sind sorgfältig ausgewählt und darauf ausgelegt, Ihren Aufenthalt angenehmer zu machen — direkt zu Ihnen geliefert.",
      svc_order_title: "Im Voraus<br />bestellen",
      svc_order_text:
        "Damit Ihre Produkte verfügbar sind und unter besten Bedingungen geliefert werden!",
      svc_delivery_title: "Lieferung an Ihre Adresse<br />7 Tage die Woche",
      svc_delivery_text: "Genießen Sie, wir kümmern uns um den Rest!",
      svc_treat_title: "Lust auf etwas Leckeres nach Ihrem Tag?",
      svc_treat_text: "Wir sind da, um Sie zu verwöhnen!",
      cta_shop: "Unseren Shop ansehen",
      cta_packs: "Unsere Pakete ansehen",
      cat_eyebrow: "Katalog",
      cat_title: "Ihre Feinkost-Essentials",
      allergen_eyebrow: "Allergene",
      allergen_title: "Legende vor Veröffentlichung zu bestätigen",
      allergen_note:
        "Die angezeigten Allergene sind eine Arbeitsgrundlage aus dem Flyer. Vor jeder öffentlichen Veröffentlichung müssen sie anhand der Produktblätter oder Lieferanten bestätigt werden.",
      notice_title: "Reglementierter Alkoholverkauf",
      notice_text:
        "Alkoholische Getränke sind deaktiviert, solange die Lizenz für den Außer-Haus-Verkauf nicht bestätigt ist. Übermäßiger Alkoholkonsum ist gesundheitsschädlich.",
      news_eyebrow: "Bleiben wir in Kontakt",
      news_title: "Unsere Neuheiten &amp; Feinkost-Angebote",
      news_lead:
        "Entdecken Sie als Erste unsere neuen Produkte, Saisonpakete und kleinen Aufmerksamkeiten. Kein Spam, Abmeldung mit einem Klick.",
      news_email_ph: "sie@beispiel.de",
      news_email_aria: "Ihre E-Mail",
      news_submit: "Abonnieren",
      news_consent:
        "Ich stimme zu, den Newsletter von L'Épicerie du Coin zu erhalten und dass meine E-Mail zu diesem Zweck verwendet wird. <a href=\"confidentialite.html\">Mehr erfahren</a>.",
      footer_legal: "Impressum",
      footer_cgv: "AGB",
      footer_privacy: "Datenschutz",
      cart_eyebrow: "Bestellung",
      cart_title: "Ihr Warenkorb",
      cart_close_aria: "Warenkorb schließen",
      cart_empty: "Ihr Warenkorb ist leer.",
      f_name: "Name",
      f_name_ph: "Ihr Name",
      f_phone: "Telefon",
      f_address: "Lieferadresse",
      f_address_ph: "Nr. und Straße, Stadt, Residenz, Zimmer...",
      f_postal: "Postleitzahl",
      f_city: "Stadt",
      f_email: "E-Mail (optional, für Ihre Quittung)",
      f_date: "Gewünschter Tag",
      f_time: "Gewünschte Uhrzeit",
      f_notes: "Anmerkungen",
      f_notes_ph: "Türcode, Lieferdetails, zu meldende Allergie...",
      f_alcohol_confirm: "Ich bestätige, dass ich für alkoholische Getränke 18 Jahre oder älter bin.",
      checkout_reheat_note:
        "Produkte werden kalt geliefert, fertig zum Aufwärmen. Heizen Sie Ihren Ofen 10 bis 15 Minuten vor dem Verzehr vor.",
      cart_total: "Geschätzte Summe",
      checkout_btn: "Bestellung abschließen",
      checkout_send: "Anfrage senden",
      checkout_fill: "Füllen Sie Ihre Angaben aus, um die Anfrage zu senden.",
      product_modal_close_aria: "Produktdetails schließen",
      lang_aria: "Sprache wählen",
      ribbon_soldout: "Opfer des eigenen Erfolgs",
      badge_hold: "Lizenz in Prüfung",
      badge_out: "Ausverkauft",
      badge_low: "Nur noch {n}",
      badge_instock: "Auf Lager",
      badge_promo: "Angebot",
      price_was: "Normalpreis",
      promo_eyebrow: "Aktionen",
      promo_title: "Aktuelle Angebote",
      upsell_eyebrow: "Kleine Freude",
      upsell_title: "Lust auf ein Dessert?",
      upsell_lead: "Ergänzen Sie Ihre Bestellung vor dem Bezahlen mit einer Süßigkeit.",
      upsell_add: "Hinzufügen",
      upsell_continue: "Ohne Dessert fortfahren",
      upsell_close_aria: "Vorschlag schließen",
      pack_persons_label: "Anzahl Personen",
      pack_less_aria: "Eine Person weniger",
      pack_more_aria: "Eine Person mehr",
      pack_update: "Aktualisieren",
      pack_add: "Hinzufügen",
      pack_per_person: "/Pers.",
      price_per_unit: "/ Stück",
      price_per_person: "/ Pers.",
      add_aria: "{name} hinzufügen",
      remove_aria: "Ein {name} entfernen",
      addone_aria: "Ein {name} hinzufügen",
      modal_add_cart: "In den Warenkorb",
      modal_qty_aria: "Menge",
      modal_qty_less: "Menge verringern",
      modal_qty_more: "Menge erhöhen",
      modal_photos_aria: "Fotos {name}",
      modal_photo_view_aria: "Foto {n} von {name} ansehen",
      allergens_aria: "Allergene {name}",
      highlights_default: ["Sorgfältig ausgewähltes Produkt", "Genussfertig", "Lieferung an Ihre Adresse"],
      toast_added: "{name} in den Warenkorb gelegt",
      doors_title: "Wo möchten Sie starten?",
      doors_sub: "Stellen Sie ein Menü zusammen, wählen Sie ein Paket oder à la carte.",
      door_menu_badge: "Am cleversten",
      door_menu_title: "Ein Menü",
      door_menu_desc: "1 Gericht + 1 Getränk + 1 Donut zum günstigen Preis.",
      door_menu_cta: "Mein Menü zusammenstellen",
      door_pack_title: "Ein Paket",
      door_pack_desc: "Fertige Auswahl für mehrere Personen.",
      door_pack_cta: "Pakete ansehen",
      door_product_title: "À la carte",
      door_product_desc: "Wählen Sie Ihre Produkte einzeln.",
      door_product_cta: "Zum Shop",
      menu_modal_title: "Stellen Sie Ihr Menü zusammen",
      menu_modal_sub: "1 Gericht + 1 Getränk (alkoholfrei) + 1 Donut.",
      menu_pick_formula: "1. Ihre Formel",
      menu_pick_plat: "2. Ihr Gericht",
      menu_pick_boisson: "3. Ihr Getränk",
      menu_pick_donut: "4. Ihr Donut",
      menu_total_lbl: "Menüpreis",
      menu_separate_lbl: "Einzeln",
      menu_close_aria: "Menü-Konfigurator schließen",
      menu_save: "Sie sparen {amount}",
      menu_add_btn: "Menü hinzufügen · {price}",
      menu_add_pending: "Gericht, Getränk und Donut wählen",
      menu_added: "{name} in den Warenkorb gelegt",
      toast_pack_added: "{name} ({n} Pers.) im Warenkorb",
      toast_unavailable: "Produkt nicht verfügbar",
      toast_alcohol_pending: "Alkohollizenz in Prüfung",
      msg_alcohol_pending: "{name} ist nach Bestätigung der Alkohollizenz verfügbar.",
      msg_unavailable: "{name} ist nicht verfügbar.",
      msg_stock_limited: "Begrenzter Bestand: {n} verfügbar für {name}.",
      msg_fill_fields:
        "Bitte Name, Telefon, Adresse, Liefertag und -uhrzeit angeben.",
      msg_slot_too_soon:
        "Wählen Sie einen Zeitpunkt mindestens 1 Stunde nach Ihrer Bestellung, für Zubereitung und Lieferung.",
      msg_no_delivery: "Keine Lieferung möglich {window}. Bitte wählen Sie einen anderen Zeitpunkt.",
      msg_confirm_age: "Bitte bestätigen Sie, dass Sie für alkoholische Getränke volljährig sind.",
      msg_redirect_payment: "Weiterleitung zur sicheren Zahlung...",
      msg_payment_failed: "Die Zahlung konnte nicht gestartet werden. Bitte versuchen Sie es gleich erneut.",
      msg_payment_cancelled: "Zahlung abgebrochen: Ihr Warenkorb wurde gespeichert.",
      msg_saving_order: "Ihre Bestellung wird gespeichert...",
      msg_order_failed: "Ihre Bestellung konnte nicht gespeichert werden. Bitte versuchen Sie es gleich erneut.",
      pay_method: "Zahlungsart",
      pay_card: "Jetzt per Karte bezahlen",
      pay_cash: "Barzahlung bei Lieferung",
      delivery_hint_base: "Lieferung 7 Tage die Woche, rund um die Uhr — mindestens 1 Stunde im Voraus bestellen.",
      delivery_closed_prefix: "Keine Lieferung: {list}.",
      closure_same_day: "{day} von {from} bis {to}",
      closure_range: "vom {day1} {from} bis {day2} {to}",
      news_need_email: "Bitte geben Sie Ihre E-Mail an.",
      news_need_consent: "Bitte das Einwilligungskästchen ankreuzen.",
      news_already: "Sie sind bereits angemeldet, danke!",
      news_almost: "Fast fertig: Eine Bestätigungs-E-Mail wurde an Sie gesendet.",
      news_invalid: "Diese E-Mail scheint ungültig zu sein.",
      news_fail: "Anmeldung derzeit nicht möglich.",
      news_error: "Ein Fehler ist aufgetreten, bitte später erneut versuchen.",
    },
  };

  // ---- Catégories --------------------------------------------------------
  const CATEGORIES = {
    all: { fr: "Tout", en: "All", de: "Alle" },
    quiches: { fr: "Quiches", en: "Quiches", de: "Quiches" },
    snacking: { fr: "Snacking", en: "Snacking", de: "Snacks" },
    pizzas: { fr: "Pizzas", en: "Pizzas", de: "Pizzas" },
    "pizza-pincees": { fr: "Pizzas pincées", en: "Pinched pizzas", de: "Pizzataschen" },
    panwichs: { fr: "Panwichs", en: "Panwichs", de: "Panwichs" },
    douceurs: { fr: "Douceurs", en: "Sweets", de: "Süßes" },
    softs: { fr: "Softs", en: "Soft drinks", de: "Softdrinks" },
    eaux: { fr: "Eaux", en: "Water", de: "Wasser" },
    jus: { fr: "Jus premium", en: "Premium juices", de: "Premium-Säfte" },
    bieres: { fr: "Bières", en: "Beers", de: "Biere" },
    vins: { fr: "Vins", en: "Wines", de: "Weine" },
    bulles: { fr: "Bulles", en: "Sparkling", de: "Schaumweine" },
    apero: { fr: "Apéro", en: "Aperitifs", de: "Aperitif" },
    pack: { fr: "Packs", en: "Packs", de: "Pakete" },
  };

  // ---- Allergènes --------------------------------------------------------
  const ALLERGENS = {
    Gluten: { fr: "Gluten", en: "Gluten", de: "Gluten" },
    "Œufs": { fr: "Œufs", en: "Eggs", de: "Eier" },
    Lait: { fr: "Lait", en: "Milk", de: "Milch" },
    "Fruits à coque": { fr: "Fruits à coque", en: "Nuts", de: "Schalenfrüchte" },
    Soja: { fr: "Soja", en: "Soy", de: "Soja" },
    "Sésame": { fr: "Sésame", en: "Sesame", de: "Sesam" },
    Moutarde: { fr: "Moutarde", en: "Mustard", de: "Senf" },
    "Céleri": { fr: "Céleri", en: "Celery", de: "Sellerie" },
    Sulfites: { fr: "Sulfites", en: "Sulphites", de: "Sulfite" },
    Poisson: { fr: "Poisson", en: "Fish", de: "Fisch" },
    Lupin: { fr: "Lupin", en: "Lupin", de: "Lupine" },
    Arachides: { fr: "Arachides", en: "Peanuts", de: "Erdnüsse" },
    Mollusques: { fr: "Mollusques", en: "Molluscs", de: "Weichtiere" },
  };

  // ---- Produits (FR = source dans script.js, ici EN + DE) ----------------
  const PRODUCT_I18N = {
    "quiche-lorraine": {
      en: {
        name: "Lorraine quiche",
        description: "145 g - generous and tasty individual quiche.",
        highlights: ["Gourmet recipe", "Ready to enjoy", "Quality ingredients"],
      },
      de: {
        name: "Lothringer Quiche",
        description: "145 g - großzügige und schmackhafte Einzelquiche.",
        highlights: ["Feinschmecker-Rezept", "Genussfertig", "Hochwertige Zutaten"],
      },
    },
    "quiche-saumon": {
      en: { name: "Salmon & broccoli quiche", description: "145 g - a complete, mild and tasty recipe." },
      de: { name: "Lachs-Brokkoli-Quiche", description: "145 g - ein vollständiges, mildes und schmackhaftes Rezept." },
    },
    "quiche-epinards": {
      en: { name: "Spinach & pine nut quiche", description: "145 g - vegetarian recipe with nutty notes." },
      de: { name: "Spinat-Pinienkern-Quiche", description: "145 g - vegetarisches Rezept mit nussigen Noten." },
    },
    "quiche-poulet": {
      en: { name: "Chicken quiche", description: "145 g - individual chicken quiche." },
      de: { name: "Hähnchen-Quiche", description: "145 g - Einzelquiche mit Hähnchen." },
    },
    "quiche-dinde-halal": {
      en: { name: "Halal turkey quiche", description: "145 g - individual halal turkey quiche." },
      de: { name: "Halal-Puten-Quiche", description: "145 g - Einzelquiche mit Halal-Pute." },
    },
    "quiche-poireaux": {
      en: { name: "Leek quiche", description: "145 g - vegetarian leek recipe." },
      de: { name: "Lauch-Quiche", description: "145 g - vegetarisches Lauch-Rezept." },
    },
    "quiche-mediterraneenne": {
      en: { name: "Mediterranean quiche", description: "145 g - vegetarian recipe with sunny flavours." },
      de: { name: "Mediterrane Quiche", description: "145 g - vegetarisches Rezept mit sonnigen Aromen." },
    },
    "quiche-3-fromages": {
      en: { name: "3-cheese quiche", description: "145 g - melting vegetarian cheese recipe." },
      de: { name: "3-Käse-Quiche", description: "145 g - schmelzendes vegetarisches Käse-Rezept." },
    },
    "quiche-chevre-tomate": {
      en: { name: "Goat cheese & tomato quiche", description: "145 g - vegetarian goat cheese and tomato recipe." },
      de: { name: "Ziegenkäse-Tomaten-Quiche", description: "145 g - vegetarisches Ziegenkäse-Tomaten-Rezept." },
    },
    croque: {
      en: { name: "Premium croque-monsieur", description: "190 g - vegetarian version, handy and tasty." },
      de: { name: "Premium Croque Monsieur", description: "190 g - vegetarische Variante, praktisch und lecker." },
    },
    "bretzel-nature": {
      en: { name: "Plain pretzel", description: "110 g - classic savoury snack." },
      de: { name: "Brezel natur", description: "110 g - klassischer herzhafter Snack." },
    },
    "bretzel-gratine-lard": {
      en: { name: "Pretzel gratin with bacon & emmental", description: "130 g - gratin with bacon and emmental." },
      de: { name: "Überbackene Brezel mit Speck & Emmentaler", description: "130 g - überbacken mit Speck und Emmentaler." },
    },
    "pizza-napolitaine": {
      en: { name: "Neapolitan pizza", description: "450 g - generous pizza ready to enjoy." },
      de: { name: "Pizza Napoletana", description: "450 g - großzügige Pizza, genussfertig." },
    },
    "pizza-jambon-fromage": {
      en: { name: "Ham & cheese pizza", description: "450 g - ham and cheese, simple and effective." },
      de: { name: "Schinken-Käse-Pizza", description: "450 g - Schinken und Käse, einfach und gut." },
    },
    "pizza-mozzarella-pesto": {
      en: { name: "Mozzarella, tomato & pesto pizza", description: "450 g - mozzarella, tomato and pesto." },
      de: { name: "Mozzarella-Tomaten-Pesto-Pizza", description: "450 g - Mozzarella, Tomate und Pesto." },
    },
    "pizza-chevre": {
      en: { name: "Goat cheese & honey pizza", description: "450 g - vegetarian goat cheese and honey recipe." },
      de: { name: "Ziegenkäse-Honig-Pizza", description: "450 g - vegetarisches Ziegenkäse-Honig-Rezept." },
    },
    "pizza-saumon-aneth": {
      en: { name: "Salmon & dill pizza", description: "450 g - salmon and dill." },
      de: { name: "Lachs-Dill-Pizza", description: "450 g - Lachs und Dill." },
    },
    "pizza-poulet-curry": {
      en: { name: "Chicken curry pizza", description: "450 g - chicken curry." },
      de: { name: "Hähnchen-Curry-Pizza", description: "450 g - Hähnchen-Curry." },
    },
    "pizza-poulet": {
      en: { name: "Chicken pizza", description: "450 g - chicken pizza." },
      de: { name: "Hähnchen-Pizza", description: "450 g - Pizza mit Hähnchen." },
    },
    "pizza-vegetarienne": {
      en: { name: "Vegetarian pizza", description: "450 g - grilled vegetables, mozzarella and tomato." },
      de: { name: "Vegetarische Pizza", description: "450 g - gegrilltes Gemüse, Mozzarella und Tomate." },
    },
    "pizza-4-fromages": {
      en: { name: "4-cheese pizza", description: "450 g - vegetarian cheese recipe." },
      de: { name: "4-Käse-Pizza", description: "450 g - vegetarisches Käse-Rezept." },
    },
    "pizza-pincee-margherita": {
      en: { name: "Pinched pizza margherita", description: "250 g - vegetarian pizza pocket." },
      de: { name: "Pizzatasche Margherita", description: "250 g - vegetarische Pizzatasche." },
    },
    "pizza-pincee-diavola": {
      en: { name: "Pinched pizza diavola", description: "250 g - salami pizza pocket." },
      de: { name: "Pizzatasche Diavola", description: "250 g - Pizzatasche mit Salami." },
    },
    "pizza-pincee-jambon": {
      en: { name: "Pinched pizza ham & cheese", description: "250 g - ham and cheese pizza pocket." },
      de: { name: "Pizzatasche Schinken-Käse", description: "250 g - Pizzatasche mit Schinken und Käse." },
    },
    "panwich-jambon-emmental": {
      en: { name: "Ham & emmental panwich", description: "220 g - hot ham and emmental panwich." },
      de: { name: "Panwich Schinken-Emmentaler", description: "220 g - warmer Panwich mit Schinken und Emmentaler." },
    },
    "panwich-mozzarella-pesto": {
      en: { name: "Mozzarella, tomato & pesto panwich", description: "220 g - vegetarian panwich with mozzarella, tomato and pesto." },
      de: { name: "Panwich Mozzarella-Tomate-Pesto", description: "220 g - vegetarischer Panwich mit Mozzarella, Tomate und Pesto." },
    },
    "panwich-jambon-fromage": {
      en: { name: "Ham, cheese & emmental panwich", description: "220 g - ham, cheese and emmental panwich." },
      de: { name: "Panwich Schinken-Käse-Emmentaler", description: "220 g - Panwich mit Schinken, Käse und Emmentaler." },
    },
    "donut-speculoos": {
      en: { name: "Speculoos donut", description: "90 g - individual treat." },
      de: { name: "Spekulatius-Donut", description: "90 g - einzelne Süßigkeit." },
    },
    "donut-lion": {
      en: { name: "Lion donut", description: "90 g - individual treat." },
      de: { name: "Lion-Donut", description: "90 g - einzelne Süßigkeit." },
    },
    "brioche-babka": {
      en: { name: "Babka brioche", description: "450 g - serves 4 to 5." },
      de: { name: "Babka-Brioche", description: "450 g - für 4 bis 5 Personen." },
    },
    "cake-marbre-rocher": {
      en: { name: "Rocher marble cake", description: "600 g - serves 6 to 8." },
      de: { name: "Rocher-Marmorkuchen", description: "600 g - für 6 bis 8 Personen." },
    },
    "carrot-cake": {
      en: { name: "Carrot cake", description: "500 g - serves 6 to 8." },
      de: { name: "Karottenkuchen", description: "500 g - für 6 bis 8 Personen." },
    },
    "cake-citron": {
      en: { name: "Lemon cake", description: "450 g - serves 4 to 5." },
      de: { name: "Zitronenkuchen", description: "450 g - für 4 bis 5 Personen." },
    },
    "cake-marbre": {
      en: { name: "Marble cake", description: "450 g - serves 6 to 8." },
      de: { name: "Marmorkuchen", description: "450 g - für 6 bis 8 Personen." },
    },
    "cake-pain-epices": {
      en: { name: "Gingerbread cake", description: "450 g - serves 6 to 8." },
      de: { name: "Lebkuchen", description: "450 g - für 6 bis 8 Personen." },
    },
    "kouglof-sucre": {
      en: { name: "Sweet kouglof", description: "400 g - serves 4 to 5." },
      de: { name: "Süßer Gugelhupf", description: "400 g - für 4 bis 5 Personen." },
    },
    evian: {
      en: { description: "Chilled drink, keep refrigerated." },
      de: { description: "Kaltes Getränk, gekühlt aufbewahren." },
    },
    "perrier-33": {
      en: { description: "Chilled sparkling water." },
      de: { description: "Kaltes Sprudelwasser." },
    },
    "san-pellegrino-50": {
      en: { description: "Chilled sparkling water." },
      de: { description: "Kaltes Sprudelwasser." },
    },
    coca: {
      en: { description: "A chilled classic to go with your order." },
      de: { description: "Ein kühler Klassiker zu Ihrer Bestellung." },
    },
    "coca-zero": {
      en: { description: "Sugar-free classic, served chilled." },
      de: { description: "Zuckerfreier Klassiker, kühl serviert." },
    },
    "ice-tea-peche": {
      en: { name: "Peach iced tea", description: "Peach iced tea served chilled." },
      de: { name: "Pfirsich-Eistee", description: "Pfirsich-Eistee, kühl serviert." },
    },
    "oasis-tropical": {
      en: { description: "Fruity drink served chilled." },
      de: { description: "Fruchtiges Getränk, kühl serviert." },
    },
    orangina: {
      en: { description: "Sparkling orange drink." },
      de: { description: "Spritziges Orangengetränk." },
    },
    "schweppes-agrumes": {
      en: { name: "Schweppes Citrus", description: "Sparkling citrus drink." },
      de: { name: "Schweppes Zitrus", description: "Spritziges Zitrusgetränk." },
    },
    "lemonaid-citron": {
      en: { name: "Lemonaid lemon organic", description: "Organic lemon lemonade, served chilled." },
      de: { name: "Lemonaid Zitrone bio", description: "Bio-Zitronenlimonade, kühl serviert." },
    },
    "lemonaid-passion": {
      en: { name: "Lemonaid passion fruit organic", description: "Organic passion fruit lemonade, served chilled." },
      de: { name: "Lemonaid Maracuja bio", description: "Bio-Maracuja-Limonade, kühl serviert." },
    },
    "lemonaid-ginger": {
      en: { name: "Lemonaid ginger organic", description: "Organic ginger lemonade, served chilled." },
      de: { name: "Lemonaid Ingwer bio", description: "Bio-Ingwerlimonade, kühl serviert." },
    },
    "charitea-the-vert": {
      en: { name: "Charitea green tea organic", description: "Organic green tea served chilled." },
      de: { name: "Charitea grüner Tee bio", description: "Bio-Grüntee, kühl serviert." },
    },
    "jus-pomme-artisanal": {
      en: { name: "Artisanal apple juice 25 cl", description: "Premium artisanal juice." },
      de: { name: "Handwerklicher Apfelsaft 25 cl", description: "Handwerklicher Premium-Saft." },
    },
    "jus-orange-presse": {
      en: { name: "Premium fresh orange juice 25 cl", description: "Premium fresh-pressed juice." },
      de: { name: "Premium-Orangensaft frisch gepresst 25 cl", description: "Frisch gepresster Premium-Saft." },
    },
    "nectar-mirabelle": {
      en: { name: "Artisanal mirabelle nectar 25 cl", description: "Artisanal mirabelle nectar." },
      de: { name: "Handwerklicher Mirabellen-Nektar 25 cl", description: "Handwerklicher Mirabellen-Nektar." },
    },
    "jus-pomme-fruits-rouges": {
      en: { name: "Apple & red berry juice 25 cl", description: "Premium apple and red berry juice." },
      de: { name: "Apfel-Rotbeeren-Saft 25 cl", description: "Premium-Apfel-Rotbeeren-Saft." },
    },
    desperados: {
      en: { description: "Lager - sold with food only." },
      de: { description: "Helles Bier - nur mit Speisen erhältlich." },
    },
    heineken: {
      en: { description: "Lager - sold with food only." },
      de: { description: "Helles Bier - nur mit Speisen erhältlich." },
    },
    corona: {
      en: { description: "Lager - sold with food only." },
      de: { description: "Helles Bier - nur mit Speisen erhältlich." },
    },
    "lorraine-peu-blond": {
      en: { description: "Local beer - sold with food only." },
      de: { description: "Lokales Bier - nur mit Speisen erhältlich." },
    },
    "lorraine-duchasse": {
      en: { description: "Local beer - sold with food only." },
      de: { description: "Lokales Bier - nur mit Speisen erhältlich." },
    },
    "saint-nicolas": {
      en: { description: "Local beer - sold with food only." },
      de: { description: "Lokales Bier - nur mit Speisen erhältlich." },
    },
    "loroyse-triple": {
      en: { description: "Local triple beer - sold with food only." },
      de: { description: "Lokales Triple-Bier - nur mit Speisen erhältlich." },
    },
    "noiraude-blanche": {
      en: { description: "Local wheat beer - sold with food only." },
      de: { description: "Lokales Weißbier - nur mit Speisen erhältlich." },
    },
    "riesling-alsace": {
      en: { description: "White wine - sold with food only." },
      de: { description: "Weißwein - nur mit Speisen erhältlich." },
    },
    chardonnay: {
      en: { description: "White wine - sold with food only." },
      de: { description: "Weißwein - nur mit Speisen erhältlich." },
    },
    "pinot-noir": {
      en: { description: "Red wine - sold with food only." },
      de: { description: "Rotwein - nur mit Speisen erhältlich." },
    },
    "cotes-du-rhone": {
      en: { description: "Red wine - sold with food only." },
      de: { description: "Rotwein - nur mit Speisen erhältlich." },
    },
    "coteaux-aix-rose": {
      en: { name: "Coteaux d'Aix rosé", description: "Rosé wine - sold with food only." },
      de: { name: "Coteaux d'Aix Rosé", description: "Roséwein - nur mit Speisen erhältlich." },
    },
    "uby-3": {
      en: { description: "UBY white wine - sold with food only." },
      de: { description: "UBY Weißwein - nur mit Speisen erhältlich." },
    },
    "uby-4": {
      en: { description: "UBY wine - sold with food only." },
      de: { description: "UBY Wein - nur mit Speisen erhältlich." },
    },
    prosecco: {
      en: { description: "Sparkling wine - sold with food only." },
      de: { description: "Schaumwein - nur mit Speisen erhältlich." },
    },
    "champagne-brut": {
      en: { description: "Brut champagne - sold with food only." },
      de: { description: "Brut-Champagner - nur mit Speisen erhältlich." },
    },
    "gin-tonic": {
      en: { name: "Ready-to-drink gin tonic 25 cl", description: "Ready-to-drink cocktail - sold with food only." },
      de: { name: "Trinkfertiger Gin Tonic 25 cl", description: "Trinkfertiger Cocktail - nur mit Speisen erhältlich." },
    },
    spritz: {
      en: { name: "Ready-to-drink spritz 25 cl", description: "Ready-to-drink cocktail - sold with food only." },
      de: { name: "Trinkfertiger Spritz 25 cl", description: "Trinkfertiger Cocktail - nur mit Speisen erhältlich." },
    },
    mojito: {
      en: { name: "Ready-to-drink mojito 25 cl", description: "Ready-to-drink cocktail - sold with food only." },
      de: { name: "Trinkfertiger Mojito 25 cl", description: "Trinkfertiger Cocktail - nur mit Speisen erhältlich." },
    },
  };

  // ---- Moteur ------------------------------------------------------------
  function t(key, vars) {
    let str = UI[currentLang] && UI[currentLang][key];
    if (str === undefined) str = UI.en[key];
    if (str === undefined) str = UI.fr[key];
    if (str === undefined) return key;
    if (vars) {
      Object.keys(vars).forEach((k) => {
        str = str.split("{" + k + "}").join(String(vars[k]));
      });
    }
    return str;
  }

  function tList(key) {
    const value = (UI[currentLang] && UI[currentLang][key]) || UI.en[key] || UI.fr[key] || [];
    return Array.isArray(value) ? value.slice() : [];
  }

  function pEntry(product) {
    const map = product && PRODUCT_I18N[product.id];
    return (map && map[currentLang]) || null;
  }

  function pName(product) {
    const entry = pEntry(product);
    return (entry && entry.name) || (product && product.name) || "";
  }

  function pDesc(product) {
    const entry = pEntry(product);
    if (entry && entry.description !== undefined) return entry.description;
    return (product && product.description) || "";
  }

  function pHigh(product) {
    const entry = pEntry(product);
    if (entry && Array.isArray(entry.highlights) && entry.highlights.length) return entry.highlights.slice();
    if (product && Array.isArray(product.highlights) && product.highlights.length) return product.highlights.slice();
    return tList("highlights_default");
  }

  function tAllergen(frLabel) {
    const map = ALLERGENS[frLabel];
    return (map && map[currentLang]) || frLabel;
  }

  function tCategory(key) {
    const map = CATEGORIES[key];
    return (map && map[currentLang]) || key;
  }

  function locale() {
    return LOCALES[currentLang] || "fr-FR";
  }

  function updateSwitcher() {
    const buttons = document.querySelectorAll("[data-lang-set]");
    buttons.forEach((btn) => {
      const isActive = btn.dataset.langSet === currentLang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });
  }

  function applyStaticI18n() {
    document.documentElement.lang = currentLang;
    document.title = t("title");
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.dataset.i18nHtml);
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      el.setAttribute("placeholder", t(el.dataset.i18nPh));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.dataset.i18nAria));
    });
    document.querySelectorAll("[data-i18n-cat]").forEach((el) => {
      el.textContent = tCategory(el.dataset.i18nCat);
    });
    document.querySelectorAll("[data-i18n-allergen]").forEach((el) => {
      el.textContent = tAllergen(el.dataset.i18nAllergen);
    });
    updateSwitcher();
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = "en";
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (error) {
      /* ignore */
    }
    applyStaticI18n();
    if (typeof window.onI18nChange === "function") window.onI18nChange();
  }

  function initSwitcher() {
    document.querySelectorAll("[data-lang-set]").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.langSet));
    });
  }

  // Exposition globale (utilisée par script.js)
  window.t = t;
  window.tList = tList;
  window.pName = pName;
  window.pDesc = pDesc;
  window.pHigh = pHigh;
  window.tAllergen = tAllergen;
  window.tCategory = tCategory;
  window.i18nLocale = locale;
  window.getLang = function () {
    return currentLang;
  };
  window.setLang = setLang;
  window.applyStaticI18n = applyStaticI18n;
  window.registerPackI18n = function (id, en, de) {
    PRODUCT_I18N[id] = { en: en || {}, de: de || {} };
  };

  document.documentElement.lang = currentLang;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      applyStaticI18n();
      initSwitcher();
    });
  } else {
    applyStaticI18n();
    initSwitcher();
  }
})();
