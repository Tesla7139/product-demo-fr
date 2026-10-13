import type { Dict } from "../en";

export const demo: Dict["demo"] = {
  persona: {
    first: "Lucía",
    last: "García",
    email: "lucia.garcia@gmail.com",
    phone: "+34 612 345 678",
    line1: "Calle de Alcalá, 48",
    city: "Madrid",
    state: "Comunidad de Madrid",
    zip: "28014",
    country: "ES",
  },
  cityLine: "{zip} {city}",
  validation: {
    flaggedLine1: "C/ Alcalá 48",
    verifiedLine1: "Calle de Alcalá, 48",
    verifiedZip: "28014",
  },
  addressCheck: {
    first: "Lucía",
    last: "García",
    enteredLine1: "C/ Alcala 48",
    enteredZip: "2814",
    correctedLine1: "Calle de Alcalá, 48",
    correctedZip: "28014",
    city: "Madrid",
    state: "Comunidad de Madrid",
    country: "ES",
  },
  tourAddress: { line1: "Calle de Fuencarral, 120", city: "Madrid", zip: "28010" },
  store: {
    brandName: "Casa Olivo",
    domain: "tutienda.es",
    products: [
      { title: "Set de maquillaje Brillo Diario", variant: "Kit completo" },
      { title: "Vestido de noche fluido", variant: "Rojo · M" },
      { title: "Sérum facial con vitamina C", variant: "30 ml" },
      { title: "Bolso de piel estructurado", variant: "Coral" },
      { title: "Loción corporal nutritiva", variant: "200 ml" },
      { title: "Gafas de sol redondas de metal", variant: "Dorado" },
    ],
  },
  globeEvents: [
    { label: "Dirección corregida", city: "Madrid" },
    { label: "Pedido editado", city: "Barcelona" },
    { label: "Upsell aceptado", city: "Valencia" },
    { label: "Cancelación evitada", city: "Sevilla" },
    { label: "Variante cambiada", city: "Lisboa" },
    { label: "Dirección corregida", city: "Ciudad de México" },
  ],
};
