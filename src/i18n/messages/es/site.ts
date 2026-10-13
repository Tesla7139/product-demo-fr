import type { Dict } from "../en";

export const site: Dict["site"] = {
  tagline: "Que tus clientes corrijan sus propios pedidos.",
  nav: {
    productTour: "Tour del producto",
    customerLove: "Opiniones",
    reviews: "Reseñas",
    reviewsDesc: "70+ reseñas de 5 estrellas de comerciantes",
  },
  integrations: {
    Klaviyo: "Klaviyo y Order Editing sincronizan los eventos de cliente para automatizar emails personalizados.",
    Gorgias: "La integración con Gorgias muestra los cambios del pedido directamente en tus tickets de soporte.",
    Zendesk: "La integración con Zendesk aporta el contexto del pedido dentro de tu herramienta de soporte.",
    AfterSell: "AfterSell y Order Editing combinan upsells post-compra con la edición de pedidos.",
    AfterShip: "AfterShip sincroniza el seguimiento de envíos y señala las entregas con incidencias.",
    "Loop Returns": "La integración con Loop Returns permite a los clientes cambiar artículos directamente.",
    Rebuy: "Rebuy impulsa recomendaciones de producto inteligentes en el editor post-compra.",
    Recharge: "Recharge permite a los clientes editar sus pedidos de suscripción sin complicaciones.",
    "SAP ERP": "La integración con SAP envía las correcciones de pedidos a tu ERP.",
    ShipStation: "ShipStation sincroniza los estados de preparación y los ajustes de etiquetas de envío.",
    "Shopify Flow": "Lanza flujos de trabajo automáticamente cuando se edita o cancela un pedido.",
    Unicommerce: "Mantén el almacén sincronizado para que siempre envíe el pedido corregido.",
    Easycom: "Envía los pedidos editados directamente a tu circuito logístico.",
  },
  brandInfo: {
    Doonails: { tier: "Marca de +100 M$", country: "Alemania" },
    "Curl Warehouse": { tier: "Facturación de 7 cifras", country: "Canadá" },
    VanillaPura: { tier: "Facturación de 7 cifras", country: "Utah, EE. UU." },
    "GHAR SOAPS": { tier: "Facturación de 8 cifras", country: "Emiratos Árabes Unidos" },
    MIRAGGIO: { tier: "Facturación de 8 cifras" },
    Mateina: { tier: "La favorita de Andrew Huberman", country: "Canadá" },
    "Mars By GHC": { tier: "Facturación de 7 cifras" },
    "Renue By Science": { country: "EE. UU." },
  },
  features: [
    {
      eyebrow: "Edición",
      title: "Edición de pedidos en autoservicio",
      blurb: "Tus clientes corrigen su pedido en la página de agradecimiento y de estado del pedido, sin abrir un ticket.",
      bullets: ["Cambiar artículos y variantes", "Ajustar cantidades", "Actualizar datos de contacto"],
    },
    {
      eyebrow: "Dirección",
      title: "Validación de direcciones integrada",
      blurb: "Detecta direcciones imposibles de entregar antes del envío con verificaciones de Google Maps.",
      bullets: ["Sugerencias de dirección en directo", "Aviso de entregas de riesgo", "Menos envíos fallidos"],
    },
    {
      eyebrow: "Cancelaciones",
      title: "Cancelaciones y reembolsos al instante",
      blurb: "Tus clientes cancelan dentro del plazo que tú fijes; reembolsos y saldo en tienda, en automático.",
      bullets: ["Reembolsos automáticos", "Opción de saldo en tienda", "Plazos configurables"],
    },
    {
      eyebrow: "Upsell",
      title: "Upsells post-compra",
      blurb: "Recomienda el complemento perfecto justo después del pago y sube el ticket medio.",
      bullets: ["Añadir con un toque", "Recomendaciones inteligentes", "Sin volver a pagar"],
    },
    {
      eyebrow: "Sincronización",
      title: "Siempre sincronizado con la logística",
      blurb: "Cada cambio llega a tu 3PL / WMS, así el almacén siempre envía lo correcto.",
      bullets: ["Sincronización 3PL / WMS", "Actualizaciones en tiempo real", "Sin doble gestión"],
    },
    {
      eyebrow: "Control",
      title: "Control total e historial completo",
      blurb: "Define plazos de edición, gestiona pedidos en bloque y revisa el registro de cada cambio.",
      bullets: ["Plazos de edición", "Edición en bloque", "Registro completo de cambios"],
    },
  ],
  segments: [
    { title: "Marcas D2C y Shopify", blurb: "Da el control a tus clientes y reduce la carga de soporte desde el primer día." },
    { title: "Tiendas de gran volumen", blurb: "Automatiza miles de ediciones al mes sin ampliar el equipo de soporte." },
    { title: "Marcas con 3PL / WMS", blurb: "Los cambios van directos a logística: el almacén envía exactamente lo que se pidió." },
  ],
  faqs: [
    {
      q: "¿Cuánto tardo en ponerlo en marcha?",
      a: "Instala la app desde la Shopify App Store, activa el app embed y define tu plazo de edición. La mayoría de tiendas lo tienen funcionando en minutos, sin desarrolladores.",
    },
    {
      q: "¿Qué pueden editar mis clientes por su cuenta?",
      a: "Artículos, variantes, cantidades, dirección de envío y datos de contacto, además de cancelaciones en autoservicio con reembolso automático o saldo en tienda, siempre dentro del plazo que tú definas.",
    },
    {
      q: "¿Funciona con mi 3PL o WMS?",
      a: "Sí. Los cambios se sincronizan en tiempo real con tu logística, así el almacén siempre envía el pedido correcto y actualizado.",
    },
    {
      q: "¿Cumple el RGPD y está preparado para el derecho de desistimiento de la UE?",
      a: "Sí. Clickpost cumple el RGPD y cuenta con las certificaciones ISO 27001 / 27701 y SOC 2. La app incluye además un formulario de desistimiento para que tus clientes de la UE ejerzan su derecho en pocos clics.",
    },
    {
      q: "¿Cómo funcionan los upsells post-compra?",
      a: "Tras el pago, la app muestra un complemento relevante que el cliente acepta con un toque, sin volver a introducir sus datos de pago, y así sube el ticket medio.",
    },
    {
      q: "¿Cuánto cuesta?",
      a: "Es gratis hasta 500 pedidos al mes. Los planes de pago empiezan en 49 USD/mes (Shopify factura en dólares), con 14 días de prueba gratis. Tienes todos los detalles en la sección de precios.",
    },
  ],
  footer: [
    {
      title: "Legal",
      links: ["Política de privacidad", "Política de cookies", "Declaración de cumplimiento", "Términos y condiciones", "Perfil de seguridad"],
    },
    { title: "Empresa", links: ["Sobre nosotros", "Seguridad de la información", "Empleo"] },
  ],
};
