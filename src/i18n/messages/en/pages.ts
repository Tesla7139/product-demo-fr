// Standalone pages under src/app/[lang]/ (analytics, integrations, reviews).
export const pages = {
  analytics: {
    metaTitle: "Analytics & reporting",
    metaDescription:
      "See exactly how self-serve order editing pays off: support-cost savings, edit-type breakdowns, cancellation reasons, and upsell revenue across any date range.",
    eyebrow: "Analytics & reporting",
    title: "Every edit, saving and upsell, measured",
    intro:
      "A live merchant dashboard that turns self-serve order editing into numbers you can report on: tickets deflected, revenue recovered, and AOV lifted.",
    sampleNote: "Sample data shown. Your dashboard reflects your own orders, products, and currency.",
    /** In order: support savings, edit-type breakdown, upsell performance. */
    highlights: [
      {
        title: "Support-cost savings",
        body: "Every self-serve edit is a ticket your team never touches. We turn edit volume into the support hours and cost you saved.",
      },
      {
        title: "Edit-type breakdown",
        body: "See what customers actually change — address, contact, quantity, add-ons, cancellations — plus the reasons behind every cancel.",
      },
      {
        title: "Upsell performance",
        body: "Track upsell conversion, revenue per upsell, and your top-performing add-ons over any date range.",
      },
    ],
    ctaTitle: "Put your order editing on the record",
    ctaBody: "Install CP: Order Editing and start measuring saved tickets and recovered revenue from day one.",
    install: "Get it on Shopify",
    bookDemo: "Book a demo",
  },
  integrations: {
    metaTitle: "Integrations",
    metaDescription:
      "Connect Clickpost Order Editing with Shopify Checkout, Customer Accounts, Flow, Klaviyo, Judge.me, Easycom, and Unicommerce.",
    eyebrow: "Integrations",
    title: "Works with the tools you already run",
    intro: "Order editing slots into your existing checkout, fulfillment, and marketing stack — no rip-and-replace.",
    ctaTitle: "Don’t see your tool?",
    ctaBody: "Tell us what you use — we’re always expanding our integrations.",
    ctaButton: "Request an integration",
  },
  reviews: {
    back: "Back",
    title: "Trusted by Shopify Merchants",
    intro:
      "See what real store owners are saying about using Clickpost Order Editing to streamline their post-purchase experience. 70+ reviews from the Shopify App Store.",
    /** {rating} is the formatted average, e.g. "5.0". */
    rating: "{rating} on Shopify App Store",
    wallTitle: "Customer Reviews",
    wallSubtitle: "70+ five-star merchant reviews — synced from our public App Store listing.",
    /** Extra note after the subtitle; empty when the site language is English (reviews are in English). */
    languageNote: "",
    showMore: "Show more reviews",
  },
};
