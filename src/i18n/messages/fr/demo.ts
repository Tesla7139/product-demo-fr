import type { Dict } from "../en";

export const demo: Dict["demo"] = {
  persona: {
    first: "Camille",
    last: "Dubois",
    email: "camille.dubois@gmail.com",
    phone: "+33 6 12 34 56 78",
    line1: "18 rue des Lilas",
    city: "Lyon",
    state: "Auvergne-Rhône-Alpes",
    zip: "69003",
    country: "FR",
  },
  cityLine: "{zip} {city}",
  validation: {
    flaggedLine1: "18 r des Lilas",
    verifiedLine1: "18 Rue des Lilas",
    verifiedZip: "69003",
  },
  addressCheck: {
    first: "Camille",
    last: "Dubois",
    enteredLine1: "18 r des Lilas",
    enteredZip: "6903",
    correctedLine1: "18 Rue des Lilas",
    correctedZip: "69003",
    city: "Lyon",
    state: "Auvergne-Rhône-Alpes",
    country: "FR",
  },
  tourAddress: { line1: "42 Cours Émile Zola", city: "Villeurbanne", zip: "69100" },
  store: {
    brandName: "Maison Lumière",
    domain: "votreboutique.fr",
    products: [
      { title: "Coffret maquillage Éclat du quotidien", variant: "Kit complet" },
      { title: "Robe de soirée fluide", variant: "Rouge · M" },
      { title: "Sérum visage à la vitamine C", variant: "30 ml" },
      { title: "Sac à main structuré en cuir", variant: "Corail" },
      { title: "Lait corps nourrissant", variant: "200 ml" },
      { title: "Lunettes de soleil rondes en métal", variant: "Doré" },
    ],
  },
  globeEvents: [
    { label: "Adresse corrigée", city: "Paris" },
    { label: "Commande modifiée", city: "Lyon" },
    { label: "Upsell accepté", city: "Bruxelles" },
    { label: "Annulation évitée", city: "Genève" },
    { label: "Variante échangée", city: "Montréal" },
    { label: "Adresse corrigée", city: "Marseille" },
  ],
};
