// Text for the shared site data in src/lib/site.ts (nav, integrations, features,
// segments, FAQ, footer, brand credentials). Arrays line up index-for-index with
// the icon/href lists there.
export const site = {
  tagline: "Let shoppers fix their own orders.",
  nav: {
    productTour: "Product Tour",
    customerLove: "Customer Love",
    reviews: "Reviews",
    reviewsDesc: "70+ five-star merchant reviews",
  },
  /** Integration blurbs, keyed by integration name. */
  integrations: {
    Klaviyo: "Klaviyo and Order Editing sync customer events for personalized email automation.",
    Gorgias: "Gorgias integration displays order editing info directly in your support tickets.",
    Zendesk: "Zendesk integration provides order context within your support platform.",
    AfterSell: "AfterSell and Order Editing combine post-purchase upsells with order modifications.",
    AfterShip: "AfterShip syncs tracking updates and flags deliveries with issues.",
    "Loop Returns": "Loop Returns integration lets customers exchange items directly.",
    Rebuy: "Rebuy powers smart product recommendations in the post-purchase editor.",
    Recharge: "Recharge allows customers to edit subscription orders seamlessly.",
    "SAP ERP": "SAP integration pushes order corrections to your enterprise resource planning system.",
    ShipStation: "ShipStation syncs fulfillment statuses and shipping label adjustments.",
    "Shopify Flow": "Trigger workflows automatically when an order is edited or cancelled.",
    Unicommerce: "Keep the warehouse in sync so it always ships the corrected order.",
    Easycom: "Push edited orders straight into your fulfillment pipeline.",
  } as Record<string, string>,
  /** Revenue-tier pill + country for featured brands, keyed by brand name. */
  brandInfo: {
    Doonails: { tier: "$100M+ brand", country: "Germany" },
    "Curl Warehouse": { tier: "7-figure brand", country: "Canada" },
    VanillaPura: { tier: "7-figure brand", country: "Utah, USA" },
    "GHAR SOAPS": { tier: "8-figure brand", country: "UAE" },
    MIRAGGIO: { tier: "8-figure brand" },
    Mateina: { tier: "Andrew Huberman's favourite", country: "Canada" },
    "Mars By GHC": { tier: "7-figure brand" },
    "Renue By Science": { country: "USA" },
  } as Record<string, { tier?: string; country?: string }>,
  features: [
    {
      eyebrow: "Editing",
      title: "Self-service order edits",
      blurb: "Shoppers fix orders on the thank-you and order-status page — no ticket needed.",
      bullets: ["Swap items & variants", "Adjust quantities", "Update contact details"],
    },
    {
      eyebrow: "Address",
      title: "Address validation, built in",
      blurb: "Catch undeliverable addresses before fulfillment with Maps-powered checks.",
      bullets: ["Live address suggestions", "Flag risky deliveries", "Fewer failed shipments"],
    },
    {
      eyebrow: "Cancellations",
      title: "Instant cancellations & refunds",
      blurb: "Let customers cancel within your window — refunds and store credit run automatically.",
      bullets: ["Automated refunds", "Store-credit option", "Configurable windows"],
    },
    {
      eyebrow: "Upsell",
      title: "Post-purchase upsells",
      blurb: "Recommend the right add-on right after checkout and lift average order value.",
      bullets: ["One-tap add-on", "Smart recommendations", "No re-checkout friction"],
    },
    {
      eyebrow: "Sync",
      title: "Stays in sync with fulfillment",
      blurb: "Every edit syncs to your 3PL / WMS so the warehouse always ships the right thing.",
      bullets: ["3PL / WMS sync", "Real-time updates", "No double handling"],
    },
    {
      eyebrow: "Control",
      title: "Full control & audit trail",
      blurb: "Set editing windows, bulk-manage orders, and review a complete log of every change.",
      bullets: ["Editing windows", "Bulk editing", "Complete edit log"],
    },
  ],
  segments: [
    { title: "D2C & Shopify brands", blurb: "Give shoppers control and cut your support load from day one." },
    { title: "High-volume merchants", blurb: "Automate thousands of edits a month without growing the support team." },
    { title: "Brands using 3PL / WMS", blurb: "Edits flow straight to fulfillment, so the warehouse ships what was ordered." },
  ],
  faqs: [
    {
      q: "How fast can I go live?",
      a: "Install from the Shopify App Store, enable the app embed, and set your editing window. Most stores are live in minutes — no developer required.",
    },
    {
      q: "What can shoppers edit themselves?",
      a: "Items, variants, quantities, shipping address, and contact details — plus self-service cancellations with automated refunds or store credit, all within the window you define.",
    },
    {
      q: "Does it work with my 3PL or WMS?",
      a: "Yes. Edits sync to your fulfillment stack in real time so the warehouse always ships the correct, updated order.",
    },
    {
      q: "Is it GDPR-compliant and ready for the EU right of withdrawal?",
      a: "Yes. Clickpost is GDPR-compliant and certified ISO 27001 / 27701 and SOC 2. The app also includes a withdrawal form so your EU customers can exercise their right in a few clicks.",
    },
    {
      q: "How do post-purchase upsells work?",
      a: "After checkout, the app surfaces a relevant add-on that the shopper can accept in one tap — no re-entering payment — which lifts average order value.",
    },
    {
      q: "How much does it cost?",
      a: "Start free for up to 500 orders/month. Paid plans begin at $49/month with a 14-day free trial. See the pricing section above for details.",
    },
  ],
  /** Footer columns; link labels line up with the hrefs in site.ts. */
  footer: [
    {
      title: "Legal",
      links: ["Privacy Policy", "Cookie Policy", "Compliance Statement", "Terms & Conditions", "Security Profile"],
    },
    { title: "Company", links: ["About Us", "Infosec", "Careers"] },
  ],
};
