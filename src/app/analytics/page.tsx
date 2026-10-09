import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, LineChart, PiggyBank, PackageCheck, ExternalLink } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/ui/button";
import { AnalyticsMock } from "@/components/sections/demo/AnalyticsMock";
import { mockStore } from "@/lib/site";

const APP_URL = "https://apps.shopify.com/clickpost-order-edit-cancel";

export const metadata: Metadata = {
  title: "Statistiques et reporting",
  description:
    "Mesurez précisément ce que vous rapporte la modification de commande en libre-service : économies sur le support, répartition des modifications, motifs d'annulation et revenus d'upsell, sur la période de votre choix.",
};

const HIGHLIGHTS = [
  {
    icon: PiggyBank,
    title: "Économies sur le support",
    body: "Chaque modification en libre-service, c'est un ticket que votre équipe n'a jamais à traiter. Nous traduisons ce volume en heures de support et en euros économisés.",
  },
  {
    icon: LineChart,
    title: "Répartition des modifications",
    body: "Voyez ce que vos clients modifient vraiment — adresse, coordonnées, quantités, ajouts, annulations — et le motif derrière chaque annulation.",
  },
  {
    icon: PackageCheck,
    title: "Performance des upsells",
    body: "Suivez le taux de conversion de vos upsells, le revenu par upsell et vos produits additionnels les plus performants, sur la période de votre choix.",
  },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-[#121314] pb-6 pt-12 text-white">
      <section className="relative overflow-hidden pb-8 pt-20 md:pt-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-eyebrow text-primary">Statistiques et reporting</span>
            <h1
              className="text-display mt-4 text-balance text-white"
              style={{ fontSize: "clamp(2.25rem,5vw,3.5rem)" }}
            >
              Chaque modification, chaque économie, chaque upsell : mesurés
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Un tableau de bord en temps réel qui transforme la modification de commande en
              libre-service en chiffres concrets&nbsp;: tickets évités, chiffre d’affaires récupéré et
              panier moyen en hausse.
            </p>
          </div>
        </Container>
      </section>

      {/* dashboard preview */}
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-[#1c3b34] via-[#14524a] to-[#0d9488] p-3 shadow-2xl sm:p-5">
            <AnalyticsMock store={mockStore} />
          </div>
          <p className="mt-3 text-center text-xs text-white/40">
            Données d’exemple. Votre tableau de bord affiche vos propres commandes, produits et devise.
          </p>
        </div>
      </Container>

      {/* what you can track */}
      <Container>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {HIGHLIGHTS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-white/12 bg-white/5 p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#0d9488]/20 text-[#5eead4]">
                <Icon className="size-5" />
              </span>
              <h2 className="text-h3 mt-4 text-white">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* CTA */}
      <Container>
        <div className="my-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/15 bg-white/5 p-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-h3 text-white">Des résultats que vous pouvez chiffrer</h2>
            <p className="mt-1 text-sm text-white/60">
              Installez CP: Order Editing et mesurez dès le premier jour les tickets évités et le chiffre d’affaires récupéré.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href={APP_URL} target="_blank" rel="noreferrer">
                Installer sur Shopify <ExternalLink className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/25 bg-transparent text-white hover:bg-white/10">
              <Link href="/#contact">
                Réserver une démo <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
