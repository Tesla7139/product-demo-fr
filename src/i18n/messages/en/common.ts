// Site-wide strings: page metadata, skip link, language switcher, and the label
// for each kind of address subdivision used by the demo's country list.
export const common = {
  meta: {
    title: "Clickpost — Self-Service Order Editing & Upsell for Shopify",
    description:
      "Let shoppers edit, cancel, and upgrade their own orders. Cut support tickets, validate addresses, and lift AOV with post-purchase upsells.",
    keywords: ["order editing", "Shopify", "post-purchase upsell", "address validation", "order cancellation", "ecommerce"],
    ogTitle: "Clickpost — Self-Service Order Editing & Upsell",
    ogDescription: "Let shoppers fix their own orders. Fewer tickets, fewer failed deliveries, higher AOV.",
    twitterDescription: "Let shoppers fix their own orders. Fewer tickets, higher AOV.",
  },
  skipToContent: "Skip to content",
  language: "Language",
  /** Address subdivision labels, keyed by the `regionKind` in src/lib/regions.ts. */
  regionKinds: {
    state: "State",
    province: "Province",
    region: "Region",
    canton: "Canton",
    county: "County",
    community: "Autonomous community",
    voivodeship: "Voivodeship",
    country: "Country",
  },
};
