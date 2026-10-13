import type { Dict } from "../en";

export const layout: Dict["layout"] = {
  navbar: {
    ariaLabel: "Navigation principale",
    cta: "Commencer gratuitement",
    mobileTour: "Visite produit",
  },
  logo: {
    homeLabel: "Clickpost — accueil",
  },
  footer: {
    tagline: "Modification de commande en libre-service, validation d’adresse et upsells post-achat pour l’e-commerce d’aujourd’hui.",
    securityTitle: "Sécurité et conformité",
    badges: [
      { label: "AICPA SOC 2", alt: "Conforme AICPA SOC 2" },
      { label: "RGPD", alt: "Conforme RGPD" },
      { label: "ISO 27001", alt: "Certifié ISO 27001" },
      { label: "ISO 27701", alt: "Certifié ISO 27701" },
    ],
    copyright: "© 2026 ClickPost — Felurian Technology Private Limited. Tous droits réservés.",
  },
  announcementBanner: {
    text: "Nouveau : les upsells post-achat sont disponibles dans CP: Order Editing",
    cta: "Essayer la démo",
    dismiss: "Fermer l’annonce",
  },
  announcementBar: {
    text: "Respectez les directives européennes avec Clickpost Order Editing",
    cta: "Voir la fiche Shopify",
  },
};
