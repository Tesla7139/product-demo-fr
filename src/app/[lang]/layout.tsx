import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Fraunces } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { I18nProvider } from "@/i18n/I18nProvider";
import { getDictionary } from "@/i18n/dictionaries";
import { LOCALE_META, hasLocale, locales } from "@/i18n/config";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const SITE_URL = "https://clickpost.ai";

// Every language is prerendered; unknown ones 404 via hasLocale() below.
export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).common.meta;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: t.title, template: "%s · Clickpost" },
    description: t.description,
    keywords: t.keywords,
    other: { "deploy-check": "2026-10-01-mohit" },
    alternates: {
      canonical: `/${lang}`,
      languages: { ...Object.fromEntries(locales.map((l) => [l, `/${l}`])), "x-default": "/" },
    },
    openGraph: {
      type: "website",
      locale: LOCALE_META[lang].og,
      url: `${SITE_URL}/${lang}`,
      title: t.ogTitle,
      description: t.ogDescription,
      siteName: "Clickpost",
    },
    twitter: { card: "summary_large_image", title: t.ogTitle, description: t.twitterDescription },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${fraunces.variable}`}>
      <body className="relative min-h-screen antialiased">
        <I18nProvider locale={lang} dict={dict}>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
          >
            {dict.common.skipToContent}
          </a>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
