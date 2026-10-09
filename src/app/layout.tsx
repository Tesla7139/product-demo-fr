import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

const SITE_URL = "https://clickpost.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Clickpost — Modification de commande et upsell en libre-service pour Shopify",
    template: "%s · Clickpost",
  },
  description:
    "Vos clients modifient, annulent et complètent eux-mêmes leurs commandes. Moins de tickets support, des adresses validées et un panier moyen en hausse grâce aux upsells post-achat.",
  keywords: [
    "modification de commande",
    "Shopify",
    "upsell post-achat",
    "validation d'adresse",
    "annulation de commande",
    "droit de rétractation",
    "RGPD",
    "e-commerce",
  ],
  other: { "deploy-check": "2026-10-01-mohit" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: "Clickpost — Modification de commande et upsell en libre-service",
    description:
      "Vos clients corrigent eux-mêmes leurs commandes. Moins de tickets, moins d'échecs de livraison, un panier moyen plus élevé.",
    siteName: "Clickpost",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clickpost — Modification de commande et upsell en libre-service",
    description: "Vos clients corrigent eux-mêmes leurs commandes. Moins de tickets, un panier moyen plus élevé.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="relative min-h-screen antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Aller au contenu
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
