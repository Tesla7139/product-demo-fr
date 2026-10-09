"use client";

import { useRef, useState } from "react";
import { Check } from "lucide-react";
import Link from "next/link";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Container } from "@/components/primitives/Container";
import { RevealGroup, RevealChild } from "@/components/primitives/AnimatedReveal";
import { cn } from "@/lib/utils";

type Plan = {
  volume: string;
  price: string; // monthly price ("0" = free)
  yearlyPrice: string; // per-month price billed annually (same for now)
  sub: string;
  features: string[];
  trial: string;
};

const GROWTH_FEATURES = [
  "Accès à toutes les fonctionnalités",
  "Modification de commande en libre-service illimitée",
  "Upsell post-achat (panier moyen en hausse)",
  "Validation d’adresse (via Google)",
  "Délai de modification personnalisable",
  "Ajout / remplacement d’articles",
  "Codes promo + remboursements automatiques",
  "Support chat 24h/24, 7j/7",
  "Support prioritaire — chat + Slack",
  "Intégrations WMS / 3PL",
  "Onboarding personnalisé",
];

const plans: Plan[] = [
  {
    volume: "0–500 commandes/mois",
    price: "0",
    yearlyPrice: "0",
    sub: "25 modifications/upsells offerts chaque mois",
    features: [
      "Accès à toutes les fonctionnalités",
      "Modification de commande en libre-service",
      "Upsell post-achat (panier moyen en hausse)",
      "Validation d’adresse (via Google)",
      "Délai de modification personnalisable",
      "Ajout / remplacement d’articles",
      "Codes promo + remboursements automatiques",
      "Support chat 24h/24, 7j/7",
    ],
    trial: "14 jours d’essai gratuit",
  },
  {
    volume: "500–5 000 commandes/mois",
    price: "49",
    yearlyPrice: "49",
    sub: "modifications et upsells illimités",
    features: GROWTH_FEATURES,
    trial: "14 jours d’essai gratuit",
  },
  {
    volume: "5 000–15 000 commandes/mois",
    price: "129",
    yearlyPrice: "129",
    sub: "modifications et upsells illimités",
    features: [...GROWTH_FEATURES, "Support téléphonique", "Customer Success Manager dédié"],
    trial: "14 jours d’essai gratuit",
  },
];

export function Pricing() {
  const [isMonthly, setIsMonthly] = useState(true);
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
        colors: ["#155FFF", "#2f5bff", "#7aa2ff", "#cdd9ff"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <section id="pricing" className="py-20 md:py-28">
      <Container>
        <div className="mb-10 space-y-3 text-center">
          <h2 className="text-h2">Des tarifs simples et transparents</h2>
          <p className="mx-auto max-w-xl text-muted-foreground md:text-lg">
            Choisissez le plan adapté à votre volume de commandes. Commencez gratuitement, évoluez quand vous voulez.
          </p>
        </div>

        {/* billing toggle */}
        <div className="mb-12 flex items-center justify-center gap-2.5">
          <span className={cn("text-sm font-medium", isMonthly ? "text-foreground" : "text-muted-foreground")}>
            Mensuel
          </span>
          <Label className="relative inline-flex cursor-pointer items-center">
            <Switch ref={switchRef} checked={!isMonthly} onCheckedChange={handleToggle} />
          </Label>
          <span className={cn("text-sm font-medium", !isMonthly ? "text-foreground" : "text-muted-foreground")}>
            Annuel
          </span>
        </div>

        <RevealGroup className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3" stagger={0.1}>
          {plans.map((plan) => {
            const value = isMonthly ? Number(plan.price) : Number(plan.yearlyPrice);
            return (
              <RevealChild key={plan.volume} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 text-left shadow-soft-sm">
                  {/* big order-volume heading */}
                  <h3 className="text-2xl font-bold tracking-tight text-primary md:text-[1.7rem]">
                    {plan.volume}
                  </h3>

                  {/* price */}
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-4xl font-bold tracking-tight text-foreground tabular-nums">
                      <NumberFlow
                        value={value}
                        locales="fr-FR"
                        format={{ style: "currency", currency: "USD", maximumFractionDigits: 0 }}
                        transformTiming={{ duration: 500, easing: "ease-out" }}
                        willChange
                      />
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">/mois</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{plan.sub}</p>

                  <hr className="my-5 border-border" />

                  {/* features */}
                  <ul className="flex flex-col gap-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-sm text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA pinned to the bottom */}
                  <div className="mt-auto pt-8">
                    <Link
                      href="/#contact"
                      className="block w-full rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-900 py-3 text-center text-sm font-semibold text-white shadow-soft-md transition-all hover:brightness-125 active:scale-[0.99]"
                    >
                      Essayer gratuitement
                    </Link>
                    <p className="mt-3 text-center text-sm text-muted-foreground">{plan.trial}</p>
                  </div>
                </div>
              </RevealChild>
            );
          })}
        </RevealGroup>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Tous les montants sont facturés en dollars US (USD) par Shopify. Les frais récurrents et à l’usage sont facturés tous les 30 jours.
        </p>
      </Container>
    </section>
  );
}
