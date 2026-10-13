import type { Dict } from "../en";

export const layout: Dict["layout"] = {
  navbar: {
    ariaLabel: "Huvudmeny",
    cta: "Kom igång gratis",
    mobileTour: "Produktvisning",
  },
  logo: {
    homeLabel: "Clickpost — startsida",
  },
  footer: {
    tagline: "Självservice för orderändring, adressvalidering och upsells efter köpet för modern e-handel.",
    securityTitle: "Säkerhet och regelefterlevnad",
    badges: [
      { label: "AICPA SOC 2", alt: "Uppfyller AICPA SOC 2" },
      { label: "GDPR", alt: "Uppfyller GDPR" },
      { label: "ISO 27001", alt: "ISO 27001-certifierad" },
      { label: "ISO 27701", alt: "ISO 27701-certifierad" },
    ],
    copyright: "© 2026 ClickPost — Felurian Technology Private Limited. Alla rättigheter förbehållna.",
  },
  announcementBanner: {
    text: "Nyhet: upsells efter köpet finns nu i CP: Order Editing",
    cta: "Testa demon",
    dismiss: "Stäng meddelandet",
  },
  announcementBar: {
    text: "Följ EU:s direktiv med Clickpost Order Editing",
    cta: "Se appen på Shopify",
  },
};
