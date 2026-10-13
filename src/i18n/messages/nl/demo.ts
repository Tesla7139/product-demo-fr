import type { Dict } from "../en";

export const demo: Dict["demo"] = {
  persona: {
    first: "Sanne",
    last: "de Vries",
    email: "sanne.devries@gmail.com",
    phone: "+31 6 12345678",
    line1: "Prinsengracht 120",
    city: "Amsterdam",
    state: "Noord-Holland",
    zip: "1015 EA",
    country: "NL",
  },
  cityLine: "{zip} {city}",
  validation: {
    flaggedLine1: "Prinsengr. 120",
    verifiedLine1: "Prinsengracht 120",
    verifiedZip: "1015 EA",
  },
  addressCheck: {
    first: "Sanne",
    last: "de Vries",
    enteredLine1: "Prinsengr. 120",
    enteredZip: "1015",
    correctedLine1: "Prinsengracht 120",
    correctedZip: "1015 EA",
    city: "Amsterdam",
    state: "Noord-Holland",
    country: "NL",
  },
  tourAddress: { line1: "Ceintuurbaan 210", city: "Amsterdam", zip: "1072 GE" },
  store: {
    brandName: "Huis van Licht",
    domain: "jouwwinkel.nl",
    products: [
      { title: "Make-upset Everyday Glow", variant: "Complete set" },
      { title: "Soepelvallende avondjurk", variant: "Rood · M" },
      { title: "Gezichtsserum met vitamine C", variant: "30 ml" },
      { title: "Gestructureerde leren handtas", variant: "Koraal" },
      { title: "Voedende bodylotion", variant: "200 ml" },
      { title: "Ronde metalen zonnebril", variant: "Goud" },
    ],
  },
  globeEvents: [
    { label: "Adres gecorrigeerd", city: "Amsterdam" },
    { label: "Bestelling aangepast", city: "Rotterdam" },
    { label: "Upsell geaccepteerd", city: "Antwerpen" },
    { label: "Annulering voorkomen", city: "Utrecht" },
    { label: "Variant gewisseld", city: "Gent" },
    { label: "Adres gecorrigeerd", city: "Eindhoven" },
  ],
};
