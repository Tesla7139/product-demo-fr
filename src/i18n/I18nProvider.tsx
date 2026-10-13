"use client";

import { createContext, useContext, useMemo } from "react";
import { LOCALE_META, type Locale, type LocaleMeta } from "./config";
import type { Dict } from "./messages/en";
import * as f from "@/lib/format";

type I18n = { locale: Locale; meta: LocaleMeta; dict: Dict };

const I18nContext = createContext<I18n | null>(null);

/** Mounted once in app/[lang]/layout.tsx with the server-loaded dictionary. */
export function I18nProvider({ locale, dict, children }: { locale: Locale; dict: Dict; children: React.ReactNode }) {
  const value = useMemo(() => ({ locale, meta: LOCALE_META[locale], dict }), [locale, dict]);
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

function useI18n(): I18n {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>");
  return ctx;
}

/** The current language, e.g. "fr". */
export const useLocale = () => useI18n().locale;

/** Per-language settings (Intl tag, default currency, demo country…). */
export const useLocaleMeta = () => useI18n().meta;

/** The whole dictionary for the current language: `const t = useDict(); t.sections.hero.title`. */
export const useDict = () => useI18n().dict;

/**
 * Formatters bound to the current language. `currency` defaults to the
 * language's own (EUR, USD, SEK, PLN) — pass the store's currency when known.
 */
export function useFormat() {
  const { meta } = useI18n();
  return useMemo(
    () => ({
      money: (n: number, currency: string = meta.currency) => f.money(meta.intl, n, currency),
      money2: (n: number, currency: string = meta.currency) => f.money2(meta.intl, n, currency),
      num: (n: number, opts?: Intl.NumberFormatOptions) => f.num(meta.intl, n, opts),
      date: (d: Date | string, opts?: Intl.DateTimeFormatOptions) => f.date(meta.intl, d, opts),
      fill: f.fill,
    }),
    [meta]
  );
}

/** Prefix an internal path with the current language: href("/reviews") → "/fr/reviews". */
export function useHref() {
  const locale = useLocale();
  return (path: string) => {
    if (/^(https?:|mailto:|tel:)/.test(path)) return path;
    if (path.startsWith("#")) return path;
    const p = path.startsWith("/") ? path : `/${path}`;
    // "/#demo" → "/fr#demo", "/" → "/fr"
    if (p === "/") return `/${locale}`;
    if (p.startsWith("/#")) return `/${locale}${p.slice(1)}`;
    return `/${locale}${p}`;
  };
}
