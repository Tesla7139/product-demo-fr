import type { Dict } from "../en";

export const layout: Dict["layout"] = {
  navbar: {
    ariaLabel: "Navegación principal",
    cta: "Empieza gratis",
    mobileTour: "Tour del producto",
  },
  logo: {
    homeLabel: "Clickpost — inicio",
  },
  footer: {
    tagline: "Edición de pedidos en autoservicio, validación de direcciones y upsells post-compra para el comercio de hoy.",
    securityTitle: "Seguridad y cumplimiento",
    badges: [
      { label: "AICPA SOC 2", alt: "Cumple AICPA SOC 2" },
      { label: "RGPD", alt: "Cumple el RGPD" },
      { label: "ISO 27001", alt: "Certificación ISO 27001" },
      { label: "ISO 27701", alt: "Certificación ISO 27701" },
    ],
    copyright: "© 2026 ClickPost — Felurian Technology Private Limited. Todos los derechos reservados.",
  },
  announcementBanner: {
    text: "Novedad: los upsells post-compra ya están disponibles en CP: Order Editing",
    cta: "Probar la demo",
    dismiss: "Cerrar aviso",
  },
  announcementBar: {
    text: "Cumple las directivas europeas con Clickpost Order Editing",
    cta: "Ver en Shopify",
  },
};
