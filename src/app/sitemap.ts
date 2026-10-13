import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";

const BASE = "https://clickpost.ai";
const PAGES = ["", "/reviews", "/integrations", "/analytics"];

// One entry per page per language, each listing its translations.
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((page) =>
    locales.map((lang) => ({
      url: `${BASE}/${lang}${page}`,
      lastModified: new Date("2026-10-14"),
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.7,
      alternates: { languages: Object.fromEntries(locales.map((l) => [l, `${BASE}/${l}${page}`])) },
    }))
  );
}
