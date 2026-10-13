import type { Dict } from "../en";

export const demo: Dict["demo"] = {
  persona: {
    first: "Giulia",
    last: "Rossi",
    email: "giulia.rossi@gmail.com",
    phone: "+39 347 123 4567",
    line1: "Via Torino 21",
    city: "Milano",
    state: "Lombardia",
    zip: "20123",
    country: "IT",
  },
  cityLine: "{zip} {city}",
  validation: {
    flaggedLine1: "V. Torino 21",
    verifiedLine1: "Via Torino, 21",
    verifiedZip: "20123",
  },
  addressCheck: {
    first: "Giulia",
    last: "Rossi",
    enteredLine1: "V. Torino 21",
    enteredZip: "2012",
    correctedLine1: "Via Torino, 21",
    correctedZip: "20123",
    city: "Milano",
    state: "Lombardia",
    country: "IT",
  },
  tourAddress: { line1: "Corso Buenos Aires 54", city: "Milano", zip: "20124" },
  store: {
    brandName: "Bottega Aurora",
    domain: "iltuonegozio.it",
    products: [
      { title: "Set trucco Luminosità quotidiana", variant: "Kit completo" },
      { title: "Abito da sera fluido", variant: "Rosso · M" },
      { title: "Siero viso alla vitamina C", variant: "30 ml" },
      { title: "Borsa strutturata in pelle", variant: "Corallo" },
      { title: "Crema corpo nutriente", variant: "200 ml" },
      { title: "Occhiali da sole rotondi in metallo", variant: "Oro" },
    ],
  },
  globeEvents: [
    { label: "Indirizzo corretto", city: "Milano" },
    { label: "Ordine modificato", city: "Roma" },
    { label: "Upsell accettato", city: "Torino" },
    { label: "Annullamento evitato", city: "Napoli" },
    { label: "Variante cambiata", city: "Zurigo" },
    { label: "Indirizzo corretto", city: "Bologna" },
  ],
};
