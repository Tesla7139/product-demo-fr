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
import type { Dict } from "@/i18n/messages/en";
import { LOCALE_META, type Locale } from "@/i18n/config";

/** Exact review text from the Shopify App Store export (reviews.ts), by store name. */
function reviewText(storeName: string): string | null {
  const r = reviews.find((rv) => rv.name === storeName);
  return r ? r.content.replace(/\s*\n\s*/g, " ").trim() : null;
}

export const site = {
  name: "Clickpost", // brand wordmark (logo slot left intentionally empty in UI)
  product: "Order Editing & Upsell",
  phone: "+1 (000) 000-0000", // TODO: replace with real number
  email: "hello@clickpost.ai", // TODO: confirm
};

// ---- Navigation. Flat links with a single dropdown (matches reference). ----
export type NavLink = { label: string; href: string; desc?: string };
export type NavItem = { label: string; href: string; items?: NavLink[] };

export function mainNavFor(t: Dict["site"]): NavItem[] {
  return [
    { label: t.nav.productTour, href: "/#demo" },
    {
      label: t.nav.customerLove,
      href: "/reviews",
      items: [{ label: t.nav.reviews, href: "/reviews", desc: t.nav.reviewsDesc }],
    },
  ];
}

// ---- Integrations (shown on the dedicated /integrations page) ----
export type Integration = {
  name: string;
  icon: LucideIcon;
  category: string;
  desc: string;
};

const INTEGRATIONS: Omit<Integration, "desc">[] = [
  {
    name: "Klaviyo",
    icon: Mail,
    category: "Tech",
  },
  {
    name: "Gorgias",
    icon: Users,
    category: "Tech",
  },
  {
    name: "Zendesk",
    icon: Users,
    category: "Tech",
  },
  {
    name: "AfterSell",
    icon: TrendingUp,
    category: "Tech",
  },
  {
    name: "AfterShip",
    icon: Truck,
    category: "Tech",
  },
  {
    name: "Loop Returns",
    icon: RefreshCw,
    category: "Tech",
  },
  {
    name: "Rebuy",
    icon: Store,
    category: "Tech",
  },
  {
    name: "Recharge",
    icon: SlidersHorizontal,
    category: "Tech",
  },
  {
    name: "SAP ERP",
    icon: SlidersHorizontal,
    category: "ERP",
  },
  {
    name: "ShipStation",
    icon: Truck,
    category: "Shipping",
  },
  {
    name: "Shopify Flow",
    icon: GitBranch,
    category: "iPaaS",
  },
  {
    name: "Unicommerce",
    icon: Truck,
    category: "WMS",
  },
  {
    name: "Easycom",
    icon: Package,
    category: "3PL",
  },
];

/** Integrations with their blurb in the current language. */
export const integrationsFor = (t: Dict["site"]): Integration[] =>
  INTEGRATIONS.map((i) => ({ ...i, desc: t.integrations[i.name] ?? "" }));

// Names only, for any compact contexts
export const integrationNames: string[] = INTEGRATIONS.map((i) => i.name);

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
// Text lives in dict.site.brandInfo (translated per language).

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

const FEATURE_ICONS: LucideIcon[] = [Pencil, MapPin, XCircle, TrendingUp, RefreshCw, SlidersHorizontal];
export const featuresFor = (t: Dict["site"]): Feature[] =>
  t.features.map((f, i) => ({ ...f, icon: FEATURE_ICONS[i] }));

// ---- "Who we serve" segments ----
const SEGMENT_ICONS: LucideIcon[] = [Store, Boxes, Truck];
export const segmentsFor = (t: Dict["site"]) =>
  t.segments.map((s, i) => ({ ...s, icon: SEGMENT_ICONS[i] }));

// ---- Footer (labels in dict.site.footer, same order) ----
const FOOTER_HREFS: string[][] = [
  [
    "https://www.clickpost.ai/privacy-policy",
    "https://www.clickpost.ai/cookie-policy",
    "https://www.clickpost.ai/gdpr-compliance-statement",
    "https://www.clickpost.ai/terms-and-conditions",
    "https://app.sprinto.com/trust-center/view/88f7aa29-f137-4d49-b596-69c89d260e85",
  ],
  ["https://www.clickpost.ai/about-us", "https://trust.clickpost.ai/", "https://www.clickpost.ai/careers"],
];
export const footerColumnsFor = (t: Dict["site"]) =>
  t.footer.map((col, c) => ({
    title: col.title,
    links: col.links.map((label, i) => ({ label, href: FOOTER_HREFS[c][i] })),
  }));

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
// and prices so the demo always looks like a live storefront, titled in the
// visitor's language and priced in their currency (a real store keeps its own).
const UNSPLASH = (id: string) => `https://images.unsplash.com/photo-${id}?w=600&q=80&auto=format&fit=crop`;
// Base prices (EUR/USD units), scaled per language for SEK/PLN.
const MOCK_CATALOG = [
  { id: "p1", price: 29, image: UNSPLASH("1596462502278-27bfdc403348") },
  { id: "p2", price: 54, image: UNSPLASH("1595777457583-95e059d581b8") },
  { id: "p3", price: 19, image: UNSPLASH("1631730359585-38a4935cbec4") },
  { id: "p4", price: 69, image: UNSPLASH("1584917865442-de89df76afd3") },
  { id: "p5", price: 14, image: UNSPLASH("1620916566398-39f1143ab7be") },
  { id: "p6", price: 24, image: UNSPLASH("1511499767150-a48a237f0083") },
];

/** The sample store in the visitor's language and currency. */
export function mockStoreFor(locale: Locale, t: Dict["demo"]): DemoStore {
  const meta = LOCALE_META[locale];
  return {
    brandName: t.store.brandName,
    brandColor: "#1f7a5a",
    currency: meta.currency,
    products: MOCK_CATALOG.map((p, i) => ({
      ...p,
      price: Math.round(p.price * meta.priceScale),
      qty: 1,
      title: t.store.products[i].title,
      variant: t.store.products[i].variant,
    })),
  };
}
