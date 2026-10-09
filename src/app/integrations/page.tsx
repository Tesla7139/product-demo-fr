import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { IntegrationsGrid } from "@/components/sections/IntegrationsGrid";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Intégrations",
  description:
    "Connectez Clickpost Order Editing à Shopify Checkout, Customer Accounts, Flow, Klaviyo, Judge.me, Easycom et Unicommerce.",
};

export default function IntegrationsPage() {
  return (
    <div className="bg-[#121314] text-white min-h-screen pt-12 pb-6">
      <section className="relative overflow-hidden pb-8 pt-20 md:pt-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-eyebrow text-primary">Intégrations</span>
            <h1 className="text-display mt-4 text-balance text-white" style={{ fontSize: "clamp(2.25rem,5vw,3.5rem)" }}>
              Compatible avec les outils que vous utilisez déjà
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              La modification de commande s’intègre à votre tunnel de commande, votre logistique et
              vos outils marketing existants — sans rien remplacer.
            </p>
          </div>
        </Container>
      </section>

      <IntegrationsGrid withHeading={false} />

      <Container>
        <div className="my-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/15 bg-white/5 p-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-h3 text-white">Votre outil n’apparaît pas&nbsp;?</h2>
            <p className="mt-1 text-sm text-white/60">
              Dites-nous ce que vous utilisez — nous ajoutons régulièrement de nouvelles intégrations.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full">
            <Link href="/#contact">
              Demander une intégration <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
