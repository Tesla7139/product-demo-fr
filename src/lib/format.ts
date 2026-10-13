// Locale-aware formatting. Components get these pre-bound to the visitor's
// language via useFormat() (src/i18n/I18nProvider.tsx); server code can call
// them directly with a locale's `intl` tag.

/** Whole-unit price, e.g. 49 € · $49 · 490 kr. */
export const money = (intl: string, n: number, currency: string) =>
  new Intl.NumberFormat(intl, { style: "currency", currency, maximumFractionDigits: 0 }).format(n);

/** Price with cents, e.g. 1 234,50 € · $1,234.50. */
export const money2 = (intl: string, n: number, currency: string) =>
  new Intl.NumberFormat(intl, { style: "currency", currency, minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

/** Plain number with local grouping, e.g. 742 900 · 742,900. */
export const num = (intl: string, n: number, opts?: Intl.NumberFormatOptions) =>
  new Intl.NumberFormat(intl, opts).format(n);

/** Date, e.g. 9 juin 2026 · June 9, 2026. Pinned to UTC so server and client agree. */
export const date = (intl: string, d: Date | string, opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }) => {
  const v = typeof d === "string" ? new Date(d) : d;
  return Number.isNaN(v.getTime()) ? String(d) : new Intl.DateTimeFormat(intl, { timeZone: "UTC", ...opts }).format(v);
};

/** Fill {placeholders} in a dictionary string: fill("Hi {name}", { name: "Ana" }). */
export const fill = (s: string, vars: Record<string, string | number>) =>
  s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
