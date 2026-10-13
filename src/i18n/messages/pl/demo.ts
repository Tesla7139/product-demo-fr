import type { Dict } from "../en";

export const demo: Dict["demo"] = {
  persona: {
    first: "Zofia",
    last: "Kowalska",
    email: "zofia.kowalska@gmail.com",
    phone: "+48 512 345 678",
    line1: "ul. Marszałkowska 10",
    city: "Warszawa",
    state: "mazowieckie",
    zip: "00-590",
    country: "PL",
  },
  cityLine: "{zip} {city}",
  validation: {
    flaggedLine1: "Marszalkowska 10",
    verifiedLine1: "ul. Marszałkowska 10",
    verifiedZip: "00-590",
  },
  addressCheck: {
    first: "Zofia",
    last: "Kowalska",
    enteredLine1: "Marszalkowska 10",
    enteredZip: "00590",
    correctedLine1: "ul. Marszałkowska 10",
    correctedZip: "00-590",
    city: "Warszawa",
    state: "mazowieckie",
    country: "PL",
  },
  tourAddress: { line1: "ul. Puławska 24", city: "Warszawa", zip: "02-512" },
  store: {
    brandName: "Atelier Bursztyn",
    domain: "twojsklep.pl",
    products: [
      { title: "Zestaw do makijażu Codzienny Blask", variant: "Pełny zestaw" },
      { title: "Zwiewna suknia wieczorowa", variant: "Czerwona · M" },
      { title: "Serum do twarzy z witaminą C", variant: "30 ml" },
      { title: "Skórzana torebka o sztywnym kroju", variant: "Koralowa" },
      { title: "Odżywczy balsam do ciała", variant: "200 ml" },
      { title: "Okrągłe okulary przeciwsłoneczne w metalowej oprawie", variant: "Złote" },
    ],
  },
  globeEvents: [
    { label: "Adres poprawiony", city: "Warszawa" },
    { label: "Zamówienie zmienione", city: "Kraków" },
    { label: "Upsell przyjęty", city: "Wrocław" },
    { label: "Uniknięto anulowania", city: "Gdańsk" },
    { label: "Wariant wymieniony", city: "Praga" },
    { label: "Adres poprawiony", city: "Poznań" },
  ],
};
