// Locale-aware formatting for the French / European site. Every price, count and
// date shown on the page goes through here so it reads natively (1 234,56 €).
export const LOCALE = "fr-FR";
export const DEFAULT_CURRENCY = "EUR";

/** Whole-unit price, e.g. 49 € · 1 299 $ US. */
export const money = (n: number, currency = DEFAULT_CURRENCY) =>
  new Intl.NumberFormat(LOCALE, { style: "currency", currency, maximumFractionDigits: 0 }).format(n);

/** Price with cents, e.g. 1 234,50 €. */
export const money2 = (n: number, currency = DEFAULT_CURRENCY) =>
  new Intl.NumberFormat(LOCALE, { style: "currency", currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

/** Plain number with French grouping, e.g. 742 900. */
export const num = (n: number, opts?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat(LOCALE, opts).format(n);
