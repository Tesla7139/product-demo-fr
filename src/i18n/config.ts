// Supported site languages and how each one formats money, numbers and the demo.
// Pure data — safe to import from the proxy, server and client code alike.

export const locales = ["en", "fr", "de", "es", "it", "nl", "sv", "pl"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** Cookie set by the language switcher; beats IP / browser detection. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const hasLocale = (s: string | undefined | null): s is Locale =>
  !!s && (locales as readonly string[]).includes(s);

export type LocaleMeta = {
  /** Native name for the language switcher. */
  label: string;
  /** BCP 47 tag for Intl number / date formatting. */
  intl: string;
  /** OpenGraph locale. */
  og: string;
  /** Currency for the sample store and any store whose currency we can't read. */
  currency: string;
  /** Sample-catalog prices are authored in EUR/USD units; scale for SEK/PLN. */
  priceScale: number;
  /** ISO country the demo address form starts on. */
  country: string;
};

export const LOCALE_META: Record<Locale, LocaleMeta> = {
  en: { label: "English", intl: "en-US", og: "en_US", currency: "USD", priceScale: 1, country: "US" },
  fr: { label: "Français", intl: "fr-FR", og: "fr_FR", currency: "EUR", priceScale: 1, country: "FR" },
  de: { label: "Deutsch", intl: "de-DE", og: "de_DE", currency: "EUR", priceScale: 1, country: "DE" },
  es: { label: "Español", intl: "es-ES", og: "es_ES", currency: "EUR", priceScale: 1, country: "ES" },
  it: { label: "Italiano", intl: "it-IT", og: "it_IT", currency: "EUR", priceScale: 1, country: "IT" },
  nl: { label: "Nederlands", intl: "nl-NL", og: "nl_NL", currency: "EUR", priceScale: 1, country: "NL" },
  sv: { label: "Svenska", intl: "sv-SE", og: "sv_SE", currency: "SEK", priceScale: 10, country: "SE" },
  pl: { label: "Polski", intl: "pl-PL", og: "pl_PL", currency: "PLN", priceScale: 4, country: "PL" },
};

/**
 * Visitor country (Vercel's x-vercel-ip-country) → candidate languages, best first.
 * Multilingual countries list every option; the browser's Accept-Language picks
 * between them, falling back to the first.
 */
export const COUNTRY_LOCALES: Record<string, Locale[]> = {
  // French
  FR: ["fr"], MC: ["fr"], LU: ["fr", "de"], BE: ["nl", "fr", "de"],
  // German
  DE: ["de"], AT: ["de"], LI: ["de"], CH: ["de", "fr", "it"],
  // Spanish (Spain + Latin America)
  ES: ["es"], AD: ["es"], MX: ["es"], AR: ["es"], CO: ["es"], CL: ["es"], PE: ["es"],
  VE: ["es"], EC: ["es"], GT: ["es"], CU: ["es"], BO: ["es"], DO: ["es"], HN: ["es"],
  PY: ["es"], SV: ["es"], NI: ["es"], CR: ["es"], PA: ["es"], UY: ["es"],
  // Italian
  IT: ["it"], SM: ["it"], VA: ["it"],
  // Dutch
  NL: ["nl"], SR: ["nl"],
  // Swedish
  SE: ["sv"], AX: ["sv"],
  // Polish
  PL: ["pl"],
  // English-first, but French Canadians get French
  CA: ["en", "fr"],
};
