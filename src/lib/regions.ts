// Country + subdivision data for the demo address form, plus the Zippopotam
// country code used for free live postal-code validation (api.zippopotam.us/<zip>).
export type CountryData = {
  name: string;
  zip: string; // zippopotam country code
  regionLabel: string; // "Région" / "Province" / "Canton"
  zipLen: number; // digits/chars that make a "complete" postal code → trigger auto-detect
  regions: string[];
};

export const COUNTRIES: CountryData[] = [
  {
    name: "France",
    zip: "fr",
    regionLabel: "Région",
    zipLen: 5,
    regions: [
      "Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Bretagne",
      "Centre-Val de Loire", "Corse", "Grand Est", "Hauts-de-France",
      "Île-de-France", "Normandie", "Nouvelle-Aquitaine", "Occitanie",
      "Pays de la Loire", "Provence-Alpes-Côte d'Azur",
      "Guadeloupe", "Martinique", "Guyane", "La Réunion", "Mayotte",
    ],
  },
  {
    name: "Belgique",
    zip: "be",
    regionLabel: "Province",
    zipLen: 4,
    regions: [
      "Bruxelles-Capitale", "Brabant wallon", "Hainaut", "Liège", "Luxembourg",
      "Namur", "Anvers", "Brabant flamand", "Flandre-Occidentale",
      "Flandre-Orientale", "Limbourg",
    ],
  },
  {
    name: "Suisse",
    zip: "ch",
    regionLabel: "Canton",
    zipLen: 4,
    regions: [
      "Genève", "Vaud", "Valais", "Neuchâtel", "Fribourg", "Jura", "Berne",
      "Bâle-Ville", "Bâle-Campagne", "Zurich", "Lucerne", "Tessin", "Argovie",
      "Saint-Gall", "Grisons", "Soleure", "Thurgovie", "Schwytz", "Zoug",
      "Schaffhouse", "Appenzell Rhodes-Extérieures", "Appenzell Rhodes-Intérieures",
      "Glaris", "Nidwald", "Obwald", "Uri",
    ],
  },
  {
    name: "Allemagne",
    zip: "de",
    regionLabel: "Land",
    zipLen: 5,
    regions: [
      "Bade-Wurtemberg", "Bavière", "Berlin", "Brandebourg", "Brême",
      "Hambourg", "Hesse", "Basse-Saxe", "Mecklembourg-Poméranie-Occidentale",
      "Rhénanie-du-Nord-Westphalie", "Rhénanie-Palatinat", "Sarre", "Saxe",
      "Saxe-Anhalt", "Schleswig-Holstein", "Thuringe",
    ],
  },
  {
    name: "Espagne",
    zip: "es",
    regionLabel: "Communauté autonome",
    zipLen: 5,
    regions: [
      "Andalousie", "Aragon", "Asturies", "Îles Baléares", "Canaries",
      "Cantabrie", "Castille-et-León", "Castille-La Manche", "Catalogne",
      "Communauté de Madrid", "Communauté valencienne", "Estrémadure", "Galice",
      "La Rioja", "Murcie", "Navarre", "Pays basque", "Ceuta", "Melilla",
    ],
  },
  {
    name: "Italie",
    zip: "it",
    regionLabel: "Région",
    zipLen: 5,
    regions: [
      "Abruzzes", "Basilicate", "Calabre", "Campanie", "Émilie-Romagne",
      "Frioul-Vénétie Julienne", "Latium", "Ligurie", "Lombardie", "Marches",
      "Molise", "Piémont", "Pouilles", "Sardaigne", "Sicile", "Toscane",
      "Trentin-Haut-Adige", "Ombrie", "Vallée d'Aoste", "Vénétie",
    ],
  },
  {
    name: "Canada",
    zip: "ca",
    regionLabel: "Province",
    zipLen: 3,
    regions: [
      "Québec", "Alberta", "Colombie-Britannique", "Île-du-Prince-Édouard",
      "Manitoba", "Nouveau-Brunswick", "Nouvelle-Écosse", "Nunavut", "Ontario",
      "Saskatchewan", "Terre-Neuve-et-Labrador", "Territoires du Nord-Ouest",
      "Yukon",
    ],
  },
];

export const countryByName = (name: string): CountryData =>
  COUNTRIES.find((c) => c.name === name) ?? COUNTRIES[0];

/**
 * Free, key-less live postal-code validation via Zippopotam (pure fetch — no
 * child_process, so it runs anywhere incl. HubSpot). Returns the real city +
 * region for a postal code, or null if the code isn't found / the call fails.
 */
export async function lookupPostal(
  countryName: string,
  postal: string
): Promise<{ city: string; region: string } | null> {
  const c = countryByName(countryName);
  const raw = postal.trim().toUpperCase();
  // Canada validates on the 3-char FSA (e.g. "M5V"); others use the code up to a "-"/space.
  const code = c.zip === "ca" ? raw.replace(/\s/g, "").slice(0, 3) : raw.split(/[-\s]/)[0];
  if (!code) return null;
  try {
    const res = await fetch(`https://api.zippopotam.us/${c.zip}/${encodeURIComponent(code)}`);
    if (!res.ok) return null;
    const data = (await res.json()) as { places?: Array<Record<string, string>> };
    const place = data.places?.[0];
    if (!place) return null;
    return { city: place["place name"] ?? "", region: place["state"] ?? "" };
  } catch {
    return null;
  }
}
