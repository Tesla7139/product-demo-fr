import type { Dict } from "../en";

export const demo: Dict["demo"] = {
  persona: {
    first: "Lena",
    last: "Schmidt",
    email: "lena.schmidt@gmail.com",
    phone: "+49 151 23456789",
    line1: "Bergmannstraße 12",
    city: "Berlin",
    state: "Berlin",
    zip: "10961",
    country: "DE",
  },
  cityLine: "{zip} {city}",
  validation: {
    flaggedLine1: "Bergmannstr. 12",
    verifiedLine1: "Bergmannstraße 12",
    verifiedZip: "10961",
  },
  addressCheck: {
    first: "Lena",
    last: "Schmidt",
    enteredLine1: "Bergmanstr 12",
    enteredZip: "1096",
    correctedLine1: "Bergmannstraße 12",
    correctedZip: "10961",
    city: "Berlin",
    state: "Berlin",
    country: "DE",
  },
  tourAddress: { line1: "Kastanienallee 34", city: "Berlin", zip: "10435" },
  store: {
    brandName: "Nordlicht Studio",
    domain: "deinshop.de",
    products: [
      { title: "Make-up-Set Everyday Glow", variant: "Komplettset" },
      { title: "Fließendes Abendkleid", variant: "Rot · M" },
      { title: "Vitamin-C-Gesichtsserum", variant: "30 ml" },
      { title: "Strukturierte Lederhandtasche", variant: "Koralle" },
      { title: "Pflegende Körperlotion", variant: "200 ml" },
      { title: "Runde Metall-Sonnenbrille", variant: "Gold" },
    ],
  },
  globeEvents: [
    { label: "Adresse korrigiert", city: "Berlin" },
    { label: "Bestellung geändert", city: "München" },
    { label: "Upsell angenommen", city: "Hamburg" },
    { label: "Stornierung verhindert", city: "Wien" },
    { label: "Variante getauscht", city: "Zürich" },
    { label: "Adresse korrigiert", city: "Köln" },
  ],
};
