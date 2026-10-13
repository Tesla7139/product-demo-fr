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
import { useDict, useFormat, useHref, useLocaleMeta } from "@/i18n/I18nProvider";
import type { Dict } from "@/i18n/messages/en";

type FeatureKey = keyof Dict["sections"]["pricing"]["features"];
type Plan = {
  id: string;
  from: number;
  to: number;
  price: number; // monthly price in USD (0 = free)
  yearlyPrice: number; // per-month price billed annually (same for now)
  sub: "freeSub" | "unlimitedSub";
  features: FeatureKey[];
};

const GROWTH_FEATURES: FeatureKey[] = [
  "allFeatures",
  "selfServeUnlimited",
  "upsell",
  "addressValidation",
  "editingWindow",
  "addReplace",
  "discountsRefunds",
  "chatSupport",
  "prioritySupport",
  "wms",
  "onboarding",
];

// Shopify bills plans in USD in every market.
const plans: Plan[] = [
  {
    id: "free",
    from: 0,
    to: 500,
    price: 0,
    yearlyPrice: 0,
    sub: "freeSub",
    features: [
      "allFeatures",
      "selfServe",
      "upsell",
      "addressValidation",
      "editingWindow",
      "addReplace",
      "discountsRefunds",
      "chatSupport",
    ],
  },
  { id: "growth", from: 500, to: 5000, price: 49, yearlyPrice: 49, sub: "unlimitedSub", features: GROWTH_FEATURES },
  {
    id: "scale",
    from: 5000,
    to: 15000,
    price: 129,
    yearlyPrice: 129,
    sub: "unlimitedSub",
    features: [...GROWTH_FEATURES, "phoneSupport", "successManager"],
  },
];

export function Pricing() {
  const p = useDict().sections.pricing;
  const meta = useLocaleMeta();
  const { num, fill } = useFormat();
  const href = useHref();
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
          <h2 className="text-h2">{p.title}</h2>
          <p className="mx-auto max-w-xl text-muted-foreground md:text-lg">
            {p.subtitle}
          </p>
        </div>

        {/* billing toggle */}
        <div className="mb-12 flex items-center justify-center gap-2.5">
          <span className={cn("text-sm font-medium", isMonthly ? "text-foreground" : "text-muted-foreground")}>
            {p.monthly}
          </span>
          <Label className="relative inline-flex cursor-pointer items-center">
            <Switch ref={switchRef} checked={!isMonthly} onCheckedChange={handleToggle} />
          </Label>
          <span className={cn("text-sm font-medium", !isMonthly ? "text-foreground" : "text-muted-foreground")}>
            {p.annual}
          </span>
        </div>

        <RevealGroup className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3" stagger={0.1}>
          {plans.map((plan) => {
            const value = isMonthly ? plan.price : plan.yearlyPrice;
            return (
              <RevealChild key={plan.id} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 text-left shadow-soft-sm">
                  {/* big order-volume heading */}
                  <h3 className="text-2xl font-bold tracking-tight text-primary md:text-[1.7rem]">
                    {fill(p.volume, { from: num(plan.from), to: num(plan.to) })}
                  </h3>

                  {/* price */}
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-4xl font-bold tracking-tight text-foreground tabular-nums">
                      <NumberFlow
                        value={value}
                        locales={meta.intl}
                        format={{ style: "currency", currency: "USD", maximumFractionDigits: 0 }}
                        transformTiming={{ duration: 500, easing: "ease-out" }}
                        willChange
                      />
                    </span>
                    <span className="text-sm font-medium text-muted-foreground">{p.perMonth}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{p[plan.sub]}</p>

                  <hr className="my-5 border-border" />

                  {/* features */}
                  <ul className="flex flex-col gap-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span className="text-sm text-foreground/90">{p.features[feature]}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA pinned to the bottom */}
                  <div className="mt-auto pt-8">
                    <Link
                      href={href("/#contact")}
                      className="block w-full rounded-lg bg-gradient-to-b from-neutral-800 to-neutral-900 py-3 text-center text-sm font-semibold text-white shadow-soft-md transition-all hover:brightness-125 active:scale-[0.99]"
                    >
                      {p.cta}
                    </Link>
                    <p className="mt-3 text-center text-sm text-muted-foreground">{p.trial}</p>
                  </div>
                </div>
              </RevealChild>
            );
          })}
        </RevealGroup>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          {p.billingNote}
        </p>
      </Container>
    </section>
  );
}
