/**
 * Central site configuration: nav, footer, integrations, and the MOCK demo data.
 * All copy here is original (written for CP: Order Editing & Upsell) — nothing
 * is lifted from the reference site or the Shopify listing verbatim.
 */
import type { LucideIcon } from "lucide-react";
import {
  Pencil,
  MapPin,
  XCircle,
  TrendingUp,
  RefreshCw,
  SlidersHorizontal,
  Store,
  Boxes,
  Truck,
  Users,
  GitBranch,
  Mail,
  Package,
} from "lucide-react";
import { reviews } from "./reviews";

/** Exact review text from the Shopify App Store export (reviews.ts), by store name. */
function reviewText(storeName: string): string | null {
  const r = reviews.find((rv) => rv.name === storeName);
  return r ? r.content.replace(/\s*\n\s*/g, " ").trim() : null;
}

export const site = {
  name: "Clickpost", // brand wordmark (logo slot left intentionally empty in UI)
  product: "Order Editing & Upsell",
  tagline: "Vos clients corrigent eux-mêmes leurs commandes.",
  phone: "+1 (000) 000-0000", // TODO: replace with real number
  email: "hello@clickpost.ai", // TODO: confirm
};

// ---- Navigation. Flat links with a single dropdown (matches reference). ----
export type NavLink = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; items?: NavLink[] };

export const mainNav: NavItem[] = [
  { label: "Visite produit", href: "/#demo" },
  {
    label: "Avis clients",
    href: "/reviews",
    items: [
      { label: "Avis", href: "/reviews", desc: "70+ avis marchands 5 étoiles" },
    ],
  },
];

// ---- Integrations (shown on the dedicated /integrations page) ----
export type Integration = {
  name: string;
  icon: LucideIcon;
  category: string;
  desc: string;
};

export const integrations: Integration[] = [
  {
    name: "Klaviyo",
    icon: Mail,
    category: "Tech",
    desc: "Klaviyo et Order Editing synchronisent les événements clients pour des e-mails automatisés et personnalisés.",
  },
  {
    name: "Gorgias",
    icon: Users,
    category: "Tech",
    desc: "L'intégration Gorgias affiche les modifications de commande directement dans vos tickets support.",
  },
  {
    name: "Zendesk",
    icon: Users,
    category: "Tech",
    desc: "L'intégration Zendesk apporte le contexte de la commande dans votre outil de support.",
  },
  {
    name: "AfterSell",
    icon: TrendingUp,
    category: "Tech",
    desc: "AfterSell et Order Editing combinent upsells post-achat et modifications de commande.",
  },
  {
    name: "AfterShip",
    icon: Truck,
    category: "Tech",
    desc: "AfterShip synchronise le suivi des colis et signale les livraisons à problème.",
  },
  {
    name: "Loop Returns",
    icon: RefreshCw,
    category: "Tech",
    desc: "L'intégration Loop Returns permet aux clients d'échanger un article en direct.",
  },
  {
    name: "Rebuy",
    icon: Store,
    category: "Tech",
    desc: "Rebuy alimente des recommandations produits intelligentes dans l'éditeur post-achat.",
  },
  {
    name: "Recharge",
    icon: SlidersHorizontal,
    category: "Tech",
    desc: "Recharge permet aux clients de modifier leurs commandes d'abonnement en toute simplicité.",
  },
  {
    name: "SAP ERP",
    icon: SlidersHorizontal,
    category: "ERP",
    desc: "L'intégration SAP envoie les corrections de commande vers votre ERP.",
  },
  {
    name: "ShipStation",
    icon: Truck,
    category: "Shipping",
    desc: "ShipStation synchronise les statuts de préparation et les ajustements d'étiquettes d'expédition.",
  },
  {
    name: "Shopify Flow",
    icon: GitBranch,
    category: "iPaaS",
    desc: "Déclenchez des workflows automatiquement dès qu'une commande est modifiée ou annulée.",
  },
  {
    name: "Unicommerce",
    icon: Truck,
    category: "WMS",
    desc: "Gardez l'entrepôt synchronisé : il expédie toujours la commande corrigée.",
  },
  {
    name: "Easycom",
    icon: Package,
    category: "3PL",
    desc: "Envoyez les commandes modifiées directement dans votre chaîne logistique.",
  },
];

// Names only, for any compact contexts
export const integrationNames: string[] = integrations.map((i) => i.name);

// ---- Customer logos (social proof, shown in the hero marquee) ----
// HOW TO ADD REAL LOGOS:
//   1. Drop each logo file into  public/customers/  (SVG preferred; PNG ok).
//   2. Add an entry below: { src: "/customers/<filename>", name: "<Brand>" }.
// Until at least one entry exists, blank placeholder marks are shown instead.
export type CustomerLogo = {
  src?: string; // logo image; when omitted the brand renders as a styled wordmark
  name: string;
  reviewer: string;
  role: string;
  review: string | null; // tap-to-open review (null until the real one is supplied)
  date?: string; // when the review was left (Shopify App Store export)
  badge?: string; // optional pill under the logo, e.g. "9-figure brand"
};

// International brands featured in the hero ribbon — each with a real review
// from the Shopify App Store export (reviews.csv).
export const customerLogos: CustomerLogo[] = [
  {
    src: "/customers/curlwarehouse.png",
    name: "Curl Warehouse",
    reviewer: "Curl Warehouse Team",
    role: "E-commerce",
    review:
      "This has reduced the number of emails we receive to update orders. It's easy to use and set up, and the developers have been very receptive to changes.",
    date: "Nov 21, 2023",
  },
  {
    src: "/customers/mateina.png",
    name: "Mateina",
    reviewer: "Mateina Team",
    role: "E-commerce",
    review:
      "One of the best order editing apps available that actually works! I've tested about a dozen, and this was by far one of the best. Amazing team and support.",
    date: "Mar 12, 2024",
  },
  {
    src: "/customers/renuebyscience.svg",
    name: "Renue By Science",
    reviewer: "Renue By Science Team",
    role: "E-commerce",
    review:
      "The team at Clickpost are exceptional developers and great people. They listen to feedback and have built genuinely useful tools for Shopify stores.",
    date: "Jan 8, 2024",
  },
  {
    src: "/customers/doonails.svg",
    name: "Doonails",
    reviewer: "Doonails Team",
    role: "E-commerce",
    review: "Really helped us quickly to fix all issues.",
    date: "Feb 3, 2024",
  },
  {
    src: "/customers/modomu.png",
    name: "Modomu",
    reviewer: "Modomu Team",
    role: "E-commerce",
    review:
      "Really happy with Clickpost so far. We added it mainly for order edits but ended up using the upsell part too, which brought in a bit of extra revenue.",
    date: "Apr 5, 2024",
  },
  {
    src: "/customers/hautesauce.png",
    name: "Haute Sauce",
    reviewer: "Haute Sauce Team",
    role: "E-commerce",
    review:
      "Installed Clickpost recently and it works great. Customers can edit their orders and even add extra items, which is a nice bonus.",
    date: "May 17, 2024",
  },
  // More brands from the Shopify App Store export. Real brand logos (transparent
  // PNGs pulled from each store; V-Guard's black-bg logo was keyed to a
  // transparent silhouette) render like the others. Review text is the EXACT
  // content from reviews.ts (pulled by store name, no rewording).
  {
    src: "/customers/westside.png",
    name: "Westside Global",
    reviewer: "Westside Global Team",
    role: "E-commerce",
    review: reviewText("Westside Global"),
    date: "Feb 13, 2026",
  },
  {
    src: "/customers/myborosil.png",
    name: "MyBorosil",
    reviewer: "MyBorosil Team",
    role: "E-commerce",
    review: reviewText("MyBorosil"),
    date: "Oct 14, 2025",
  },
  {
    src: "/customers/wellbeingnutrition.png",
    name: "Wellbeing Nutrition",
    reviewer: "Wellbeing Nutrition Team",
    role: "E-commerce",
    review: reviewText("Wellbeing Nutrition"),
    date: "Sep 17, 2025",
  },
  {
    src: "/customers/marsbyghc.png",
    name: "Mars By GHC",
    reviewer: "Mars By GHC Team",
    role: "E-commerce",
    review: reviewText("Mars By GHC"),
    date: "Jan 8, 2026",
  },
  {
    src: "/customers/vanillapura.png",
    name: "VanillaPura",
    reviewer: "VanillaPura Team",
    role: "E-commerce",
    review: reviewText("VanillaPura"),
    date: "Aug 27, 2025",
  },
  {
    src: "/customers/gharsoaps.png",
    name: "GHAR SOAPS",
    reviewer: "GHAR SOAPS Team",
    role: "E-commerce",
    review: reviewText("GHAR SOAPS"),
    date: "Feb 14, 2026",
  },
];

// Credibility info for featured brands — a revenue-tier pill + a country shown
// alongside the date. Rendered on the brand strip, review carousel, and Wall of
// Love. Keyed by exact brand name.
export type BrandInfo = { tier?: string; country?: string };
export const brandInfo: Record<string, BrandInfo> = {
  "Doonails": { tier: "Marque à 100 M$+", country: "Allemagne" },
  "Curl Warehouse": { tier: "CA à 7 chiffres", country: "Canada" },
  "VanillaPura": { tier: "CA à 7 chiffres", country: "Utah, États-Unis" },
  "GHAR SOAPS": { tier: "CA à 8 chiffres", country: "Émirats arabes unis" },
  "MIRAGGIO": { tier: "CA à 8 chiffres" },
  "Mateina": { tier: "La préférée d'Andrew Huberman", country: "Canada" },
  "Mars By GHC": { tier: "CA à 7 chiffres" },
  "Renue By Science": { country: "États-Unis" },
};

// number of blank placeholder marks to show while `customerLogos` is empty
export const customerLogoCount = 8;

// Extra brand logos for the /reviews "Wall of love" cards ONLY (kept out of the
// brand strip so it stays curated). Keyed by the exact store name in reviews.ts;
// each was fetched from that brand's own site and verified.
export const extraReviewLogos: Record<string, string> = {
  "V-Guard Industries Limited": "/customers/vguard.png",
  "PairieTales": "/customers/pairietales.png",
  "litemed": "/customers/litemed.png",
  "Muffynn": "/customers/muffynn.png",
  "lovelang": "/customers/lovelang.png",
  "buysohi": "/customers/buysohi.png",
  "GHAR SOAPS": "/customers/gharsoaps.png",
  "Bacca Bucci": "/customers/baccabucci.png",
  "World of Asaya": "/customers/worldofasaya.png",
  "Miniwesst": "/customers/miniwesst.png",
  "Bonhomie": "/customers/bonhomie.png",
  "French Accent": "/customers/frenchaccent.png",
  "Tuco Kids": "/customers/tucokids.png",
  "Starquik": "/customers/starquik.png",
  "VanillaPura": "/customers/vanillapura.png",
  "Recode Studios": "/customers/recodestudios.png",
  "URturms": "/customers/urturms.png",
  "RIJAC": "/customers/rijac.png",
  "Sammvaad": "/customers/sammvaad.png",
  "Italian Colony": "/customers/italiancolony.png",
  "Sudathi": "/customers/sudathi.png",
};

// ---- Feature showcase rows (mapped to the product's own screenshots) ----
export type Feature = {
  eyebrow: string;
  title: string;
  blurb: string;
  bullets: string[];
  icon: LucideIcon;
};

export const features: Feature[] = [
  {
    eyebrow: "Modification",
    title: "Modifications de commande en libre-service",
    blurb: "Vos clients corrigent leur commande sur la page de remerciement et de suivi — sans ouvrir de ticket.",
    bullets: ["Changer d'article ou de variante", "Ajuster les quantités", "Mettre à jour les coordonnées"],
    icon: Pencil,
  },
  {
    eyebrow: "Adresse",
    title: "Validation d'adresse intégrée",
    blurb: "Repérez les adresses non livrables avant l'expédition grâce aux vérifications Google Maps.",
    bullets: ["Suggestions d'adresse en direct", "Alerte sur les livraisons à risque", "Moins d'échecs de livraison"],
    icon: MapPin,
  },
  {
    eyebrow: "Annulations",
    title: "Annulations et remboursements instantanés",
    blurb: "Vos clients annulent dans le délai que vous fixez — remboursement ou avoir générés automatiquement.",
    bullets: ["Remboursements automatiques", "Option avoir boutique", "Délais configurables"],
    icon: XCircle,
  },
  {
    eyebrow: "Upsell",
    title: "Upsells post-achat",
    blurb: "Proposez le bon complément juste après le paiement et augmentez le panier moyen.",
    bullets: ["Ajout en un clic", "Recommandations intelligentes", "Sans repasser par le paiement"],
    icon: TrendingUp,
  },
  {
    eyebrow: "Synchronisation",
    title: "Toujours synchronisé avec la logistique",
    blurb: "Chaque modification est envoyée à votre 3PL / WMS : l'entrepôt expédie toujours le bon colis.",
    bullets: ["Synchro 3PL / WMS", "Mises à jour en temps réel", "Aucune double saisie"],
    icon: RefreshCw,
  },
  {
    eyebrow: "Contrôle",
    title: "Contrôle total et historique complet",
    blurb: "Définissez les délais de modification, gérez les commandes en masse et consultez l'historique de chaque changement.",
    bullets: ["Délais de modification", "Modification en masse", "Journal complet des modifications"],
    icon: SlidersHorizontal,
  },
];

// ---- "Who we serve" segments ----
export const segments = [
  {
    icon: Store,
    title: "Marques D2C et Shopify",
    blurb: "Donnez la main à vos clients et allégez votre support dès le premier jour.",
  },
  {
    icon: Boxes,
    title: "Marchands à fort volume",
    blurb: "Automatisez des milliers de modifications par mois sans agrandir l'équipe support.",
  },
  {
    icon: Truck,
    title: "Marques avec 3PL / WMS",
    blurb: "Les modifications partent directement en logistique : l'entrepôt expédie ce qui a été commandé.",
  },
];

// ---- Metrics (placeholder/illustrative figures) ----
export const metrics = [
  { value: 42, suffix: " %", label: "De tickets support en moins", prefix: "−" },
  { value: 18, suffix: " %", label: "De panier moyen en plus", prefix: "+" },
  { value: 5.0, suffix: " ★", label: "Note sur Shopify (70+ avis)", prefix: "", decimals: 1 },
];

// ---- Pricing tiers ----
// Shopify bills app subscriptions in USD, so plan prices stay in dollars.
export const pricing = [
  {
    name: "Starter",
    price: "Gratuit",
    detail: "0 à 500 commandes/mois",
    features: ["25 modifications offertes / mois", "Puis 1 $ / modification", "Modifications et annulations"],
    cta: "Commencer gratuitement",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "49 $",
    detail: "par mois · 500 à 5 000 commandes/mois",
    features: ["Modifications illimitées", "Upsells post-achat", "Validation d'adresse"],
    cta: "Essai gratuit de 14 jours",
    highlighted: true,
  },
  {
    name: "Scale",
    price: "129 $",
    detail: "par mois · 5 000 à 20 000 commandes/mois",
    features: ["Tout le plan Growth", "Account manager dédié", "Support prioritaire"],
    cta: "Essai gratuit de 14 jours",
    highlighted: false,
  },
];

// ---- FAQ (original copy) ----
export const faqs = [
  {
    q: "En combien de temps puis-je être opérationnel ?",
    a: "Installez l'app depuis le Shopify App Store, activez l'app embed et fixez votre délai de modification. La plupart des boutiques sont en ligne en quelques minutes, sans développeur.",
  },
  {
    q: "Que peuvent modifier mes clients eux-mêmes ?",
    a: "Articles, variantes, quantités, adresse de livraison et coordonnées — ainsi que l'annulation en libre-service avec remboursement automatique ou avoir, dans le délai que vous définissez.",
  },
  {
    q: "Est-ce compatible avec mon 3PL ou mon WMS ?",
    a: "Oui. Les modifications sont synchronisées en temps réel avec votre logistique : l'entrepôt expédie toujours la commande à jour.",
  },
  {
    q: "Est-ce conforme au RGPD et au droit de rétractation européen ?",
    a: "Oui. Clickpost est conforme au RGPD, certifié ISO 27001 / 27701 et SOC 2. L'app propose aussi un formulaire de rétractation pour que vos clients européens exercent leur droit en quelques clics.",
  },
  {
    q: "Comment fonctionnent les upsells post-achat ?",
    a: "Après le paiement, l'app propose un complément pertinent que le client accepte en un clic — sans ressaisir ses informations de paiement — ce qui fait grimper le panier moyen.",
  },
  {
    q: "Combien ça coûte ?",
    a: "C'est gratuit jusqu'à 500 commandes par mois. Les plans payants démarrent à 49 $/mois (facturés en dollars par Shopify), avec 14 jours d'essai gratuit. Détails dans la section tarifs ci-dessus.",
  },
];

// ---- Footer ----
export const footerColumns = [
  {
    title: "Mentions légales",
    links: [
      { label: "Politique de confidentialité", href: "https://www.clickpost.ai/privacy-policy" },
      { label: "Politique cookies", href: "https://www.clickpost.ai/cookie-policy" },
      { label: "Conformité RGPD", href: "https://www.clickpost.ai/gdpr-compliance-statement" },
      { label: "Conditions générales", href: "https://www.clickpost.ai/terms-and-conditions" },
      { label: "Profil de sécurité", href: "https://app.sprinto.com/trust-center/view/88f7aa29-f137-4d49-b596-69c89d260e85" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "https://www.clickpost.ai/about-us" },
      { label: "Sécurité de l'information", href: "https://trust.clickpost.ai/" },
      { label: "Carrières", href: "https://www.clickpost.ai/careers" },
    ],
  },
];

// ============================================================
//  MOCK DEMO DATA  — used by LiveDemoGenerator (build mode: mock)
//  Single data seam: useDemoData() currently returns this; a real
//  /api/demo (Shopify products.json + OG branding) drops in later.
// ============================================================
export type DemoProduct = {
  id: string;
  title: string;
  variant: string;
  price: number;
  qty: number;
  image?: string | null;
  variants?: { title: string; price: number }[];
};

export type DemoStore = {
  brandName: string;
  brandColor: string;
  logo?: string | null; // absolute URL to the store's logo/favicon (when personalized)
  currency?: string | null; // ISO 4217 code, e.g. "INR", "USD", "GBP"
  products: DemoProduct[];
};

// Sample catalog — used when a store's real products can't be read (non-Shopify
// sites, blocked endpoints). A realistic beauty + fashion mix with product images
// and prices so the demo always looks like a live storefront (INR-priced, since
// EUR-priced for the French/European site; the currency follows store.currency).
const UNSPLASH = (id: string) => `https://images.unsplash.com/photo-${id}?w=600&q=80&auto=format&fit=crop`;
export const mockStore: DemoStore = {
  brandName: "Maison Lumière",
  brandColor: "#1f7a5a",
  currency: "EUR",
  products: [
    { id: "p1", title: "Coffret maquillage Éclat du quotidien", variant: "Kit complet", price: 29, qty: 1, image: UNSPLASH("1596462502278-27bfdc403348") },
    { id: "p2", title: "Robe de soirée fluide", variant: "Rouge · M", price: 54, qty: 1, image: UNSPLASH("1595777457583-95e059d581b8") },
    { id: "p3", title: "Sérum visage à la vitamine C", variant: "30 ml", price: 19, qty: 1, image: UNSPLASH("1631730359585-38a4935cbec4") },
    { id: "p4", title: "Sac à main structuré en cuir", variant: "Corail", price: 69, qty: 1, image: UNSPLASH("1584917865442-de89df76afd3") },
    { id: "p5", title: "Lait corps nourrissant", variant: "200 ml", price: 14, qty: 1, image: UNSPLASH("1620916566398-39f1143ab7be") },
    { id: "p6", title: "Lunettes de soleil rondes en métal", variant: "Doré", price: 24, qty: 1, image: UNSPLASH("1511499767150-a48a237f0083") },
  ],
};

// Globe arc events ("orders saved" narrative) — placeholder data
export const globeEvents = [
  { label: "Adresse corrigée", city: "Paris" },
  { label: "Commande modifiée", city: "Lyon" },
  { label: "Upsell accepté", city: "Bruxelles" },
  { label: "Annulation évitée", city: "Genève" },
  { label: "Variante échangée", city: "Montréal" },
  { label: "Adresse corrigée", city: "Marseille" },
];
