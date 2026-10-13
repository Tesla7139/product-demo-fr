import type { Dict } from "../en";

export const demo: Dict["demo"] = {
  persona: {
    first: "Emma",
    last: "Lindqvist",
    email: "emma.lindqvist@gmail.com",
    phone: "+46 70 123 45 67",
    line1: "Drottninggatan 45",
    city: "Stockholm",
    state: "Stockholms län",
    zip: "111 21",
    country: "SE",
  },
  cityLine: "{zip} {city}",
  validation: {
    flaggedLine1: "Drottningg. 45",
    verifiedLine1: "Drottninggatan 45",
    verifiedZip: "111 21",
  },
  addressCheck: {
    first: "Emma",
    last: "Lindqvist",
    enteredLine1: "Drotninggatan 45",
    enteredZip: "1112",
    correctedLine1: "Drottninggatan 45",
    correctedZip: "111 21",
    city: "Stockholm",
    state: "Stockholms län",
    country: "SE",
  },
  tourAddress: { line1: "Götgatan 32", city: "Stockholm", zip: "118 46" },
  store: {
    brandName: "Nordljus",
    domain: "dinbutik.se",
    products: [
      { title: "Sminkset Vardagsglow", variant: "Komplett kit" },
      { title: "Fladdrig aftonklänning", variant: "Röd · M" },
      { title: "Ansiktsserum med C-vitamin", variant: "30 ml" },
      { title: "Strukturerad handväska i läder", variant: "Korall" },
      { title: "Närande body lotion", variant: "200 ml" },
      { title: "Runda solglasögon i metall", variant: "Guld" },
    ],
  },
  globeEvents: [
    { label: "Adress rättad", city: "Stockholm" },
    { label: "Order ändrad", city: "Göteborg" },
    { label: "Upsell accepterad", city: "Malmö" },
    { label: "Avbokning undviken", city: "Oslo" },
    { label: "Variant bytt", city: "Uppsala" },
    { label: "Adress rättad", city: "Köpenhamn" },
  ],
};
