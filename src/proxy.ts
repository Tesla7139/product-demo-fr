import { NextResponse, type NextRequest } from "next/server";
import { COUNTRY_LOCALES, LOCALE_COOKIE, defaultLocale, hasLocale, locales, type Locale } from "@/i18n/config";

/** Accept-Language → supported base languages, highest q first. */
function browserLocales(header: string | null): Locale[] {
  if (!header) return [];
  return header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { base: tag.split("-")[0].toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q)
    .map((l) => l.base)
    .filter(hasLocale);
}

/** Saved choice → visitor country → browser language → English. */
function detectLocale(request: NextRequest): Locale {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (hasLocale(saved)) return saved;

  const browser = browserLocales(request.headers.get("accept-language"));
  const country = request.headers.get("x-vercel-ip-country")?.toUpperCase();
  const candidates = country ? COUNTRY_LOCALES[country] : undefined;
  if (candidates) return candidates.find((l) => browser.includes(l)) ?? candidates[0];

  return browser[0] ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasPrefix = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasPrefix) return;

  // Unprefixed URL (/, /reviews, /product-demo/<store>, old shared links):
  // send the visitor to the same page in their language.
  const url = request.nextUrl.clone();
  url.pathname = `/${detectLocale(request)}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  // Language depends on IP / headers, so caches must not share this redirect.
  res.headers.set("Cache-Control", "private, no-store");
  res.headers.set("Vary", "Cookie, Accept-Language, X-Vercel-IP-Country");
  return res;
}

export const config = {
  // Everything except API routes, Next internals and static files (images, favicon,
  // robots.txt, sitemap.xml). Only real file extensions are skipped, so store
  // deep links like /product-demo/allbirds.com still get a language.
  matcher: ["/((?!api|_next|.*\\.(?:ico|png|jpe?g|gif|svg|webp|avif|txt|xml|json|webmanifest|js|css|map|woff2?)$).*)"],
};
