// Country + subdivision data for the demo address form, plus the Zippopotam
// country code used for free live postal-code validation (api.zippopotam.us/<zip>).
// Countries are keyed by ISO code; their display name comes from Intl.DisplayNames
// in the visitor's language. Region names are the local/official ones, which is
// also what Zippopotam returns.
export type RegionKind =
  | "state" | "province" | "region" | "canton" | "county" | "community" | "voivodeship" | "country";

export type CountryData = {
  code: string; // ISO 3166-1 alpha-2
  zip: string; // zippopotam country code
  regionKind: RegionKind; // label comes from dict.common.regionKinds
  zipLen: number; // digits/chars that make a "complete" postal code → trigger auto-detect
  regions: string[];
};

export const COUNTRIES: CountryData[] = [
  {
    code: "US", zip: "us", regionKind: "state", zipLen: 5,
    regions: [
      "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
      "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia",
      "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
      "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
      "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
      "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
      "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island",
      "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
      "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming",
    ],
  },
  {
    code: "GB", zip: "gb", regionKind: "country", zipLen: 3,
    regions: ["England", "Scotland", "Wales", "Northern Ireland"],
  },
  {
    code: "CA", zip: "ca", regionKind: "province", zipLen: 3,
    regions: [
      "Alberta", "British Columbia", "Manitoba", "New Brunswick",
      "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia",
      "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan",
      "Yukon",
    ],
  },
  {
    code: "IN", zip: "in", regionKind: "state", zipLen: 6,
    regions: [
      "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
      "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
      "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
      "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
      "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
      "Andaman and Nicobar Islands", "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir",
      "Ladakh", "Lakshadweep", "Puducherry",
    ],
  },
  {
    code: "FR", zip: "fr", regionKind: "region", zipLen: 5,
    regions: [
      "Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Bretagne",
      "Centre-Val de Loire", "Corse", "Grand Est", "Hauts-de-France",
      "Île-de-France", "Normandie", "Nouvelle-Aquitaine", "Occitanie",
      "Pays de la Loire", "Provence-Alpes-Côte d'Azur",
      "Guadeloupe", "Martinique", "Guyane", "La Réunion", "Mayotte",
    ],
  },
  {
    code: "BE", zip: "be", regionKind: "province", zipLen: 4,
    regions: [
      "Bruxelles / Brussel", "Antwerpen", "Limburg", "Oost-Vlaanderen",
      "Vlaams-Brabant", "West-Vlaanderen", "Brabant wallon", "Hainaut", "Liège",
      "Luxembourg", "Namur",
    ],
  },
  {
    code: "LU", zip: "lu", regionKind: "canton", zipLen: 4,
    regions: [
      "Luxembourg", "Esch-sur-Alzette", "Capellen", "Mersch", "Diekirch",
      "Clervaux", "Wiltz", "Vianden", "Redange", "Echternach", "Grevenmacher",
      "Remich",
    ],
  },
  {
    code: "CH", zip: "ch", regionKind: "canton", zipLen: 4,
    regions: [
      "Zürich", "Bern / Berne", "Luzern", "Uri", "Schwyz", "Obwalden", "Nidwalden",
      "Glarus", "Zug", "Fribourg / Freiburg", "Solothurn", "Basel-Stadt",
      "Basel-Landschaft", "Schaffhausen", "Appenzell Ausserrhoden",
      "Appenzell Innerrhoden", "St. Gallen", "Graubünden", "Aargau", "Thurgau",
      "Ticino", "Vaud", "Valais / Wallis", "Neuchâtel", "Genève", "Jura",
    ],
  },
  {
    code: "DE", zip: "de", regionKind: "state", zipLen: 5,
    regions: [
      "Baden-Württemberg", "Bayern", "Berlin", "Brandenburg", "Bremen",
      "Hamburg", "Hessen", "Mecklenburg-Vorpommern", "Niedersachsen",
      "Nordrhein-Westfalen", "Rheinland-Pfalz", "Saarland", "Sachsen",
      "Sachsen-Anhalt", "Schleswig-Holstein", "Thüringen",
    ],
  },
  {
    code: "AT", zip: "at", regionKind: "state", zipLen: 4,
    regions: [
      "Wien", "Niederösterreich", "Oberösterreich", "Steiermark", "Tirol",
      "Kärnten", "Salzburg", "Vorarlberg", "Burgenland",
    ],
  },
  {
    code: "ES", zip: "es", regionKind: "community", zipLen: 5,
    regions: [
      "Andalucía", "Aragón", "Principado de Asturias", "Illes Balears",
      "Canarias", "Cantabria", "Castilla y León", "Castilla-La Mancha",
      "Cataluña", "Comunidad de Madrid", "Comunitat Valenciana", "Extremadura",
      "Galicia", "La Rioja", "Región de Murcia", "Comunidad Foral de Navarra",
      "País Vasco", "Ceuta", "Melilla",
    ],
  },
  {
    code: "IT", zip: "it", regionKind: "region", zipLen: 5,
    regions: [
      "Abruzzo", "Basilicata", "Calabria", "Campania", "Emilia-Romagna",
      "Friuli-Venezia Giulia", "Lazio", "Liguria", "Lombardia", "Marche",
      "Molise", "Piemonte", "Puglia", "Sardegna", "Sicilia", "Toscana",
      "Trentino-Alto Adige", "Umbria", "Valle d'Aosta", "Veneto",
    ],
  },
  {
    code: "NL", zip: "nl", regionKind: "province", zipLen: 4,
    regions: [
      "Drenthe", "Flevoland", "Friesland", "Gelderland", "Groningen", "Limburg",
      "Noord-Brabant", "Noord-Holland", "Overijssel", "Utrecht", "Zeeland",
      "Zuid-Holland",
    ],
  },
  {
    code: "SE", zip: "se", regionKind: "county", zipLen: 5,
    regions: [
      "Blekinge län", "Dalarnas län", "Gotlands län", "Gävleborgs län",
      "Hallands län", "Jämtlands län", "Jönköpings län", "Kalmar län",
      "Kronobergs län", "Norrbottens län", "Skåne län", "Stockholms län",
      "Södermanlands län", "Uppsala län", "Värmlands län", "Västerbottens län",
      "Västernorrlands län", "Västmanlands län", "Västra Götalands län",
      "Örebro län", "Östergötlands län",
    ],
  },
  {
    code: "PL", zip: "pl", regionKind: "voivodeship", zipLen: 6,
    regions: [
      "dolnośląskie", "kujawsko-pomorskie", "lubelskie", "lubuskie", "łódzkie",
      "małopolskie", "mazowieckie", "opolskie", "podkarpackie", "podlaskie",
      "pomorskie", "śląskie", "świętokrzyskie", "warmińsko-mazurskie",
      "wielkopolskie", "zachodniopomorskie",
    ],
  },
];

export const countryByCode = (code: string): CountryData =>
  COUNTRIES.find((c) => c.code === code) ?? COUNTRIES[0];

/** Country name in the visitor's language, e.g. countryName("DE", "fr-FR") → "Allemagne". */
export function countryName(code: string, intl: string): string {
  try {
    return new Intl.DisplayNames([intl], { type: "region" }).of(code) ?? code;
  } catch {
    return code;
  }
}

/** All countries, with the visitor's home market first. */
export const orderedCountries = (first: string): CountryData[] => [
  countryByCode(first),
  ...COUNTRIES.filter((c) => c.code !== first),
];

/**
 * Free, key-less live postal-code validation via Zippopotam (pure fetch — no
 * child_process, so it runs anywhere incl. HubSpot). Returns the real city +
 * region for a postal code, or null if the code isn't found / the call fails.
 */
export async function lookupPostal(
  countryCode: string,
  postal: string
): Promise<{ city: string; region: string } | null> {
  const c = countryByCode(countryCode);
  const raw = postal.trim().toUpperCase();
  // Canada/UK validate on the outward code (e.g. "M5V", "SW1"); others use the code up to a "-"/space.
  const code =
    c.zip === "ca" ? raw.replace(/\s/g, "").slice(0, 3)
    : c.zip === "gb" ? raw.split(/\s/)[0]
    : c.zip === "pl" ? raw // Polish codes keep their dash ("00-590")
    : c.zip === "se" ? raw.replace(/\s/g, "") // "111 21" → "11121"
    : raw.split(/[-\s]/)[0];
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
