// Site chrome: navbar, footer, announcement bars, logo.
export const layout = {
  navbar: {
    ariaLabel: "Primary",
    cta: "Get started for free",
    mobileTour: "Product Tour",
  },
  logo: {
    homeLabel: "Clickpost — home",
  },
  footer: {
    tagline: "Self-service order editing, address validation, and post-purchase upsells for modern commerce.",
    securityTitle: "Security & compliance",
    /** Compliance badges, in order: SOC 2, GDPR, ISO 27001, ISO 27701. */
    badges: [
      { label: "AICPA SOC 2", alt: "AICPA SOC 2 compliant" },
      { label: "GDPR", alt: "GDPR compliant" },
      { label: "ISO 27001", alt: "ISO 27001 certified" },
      { label: "ISO 27701", alt: "ISO 27701 certified" },
    ],
    copyright: "©2026 Copyright ClickPost — Felurian Technology Private Limited",
  },
  announcementBanner: {
    text: "New: post-purchase upsells now live in CP: Order Editing",
    cta: "Try a demo",
    dismiss: "Dismiss announcement",
  },
  announcementBar: {
    text: "Comply with the EU directives with Clickpost Order Editing",
    cta: "See Shopify app listing",
  },
};
