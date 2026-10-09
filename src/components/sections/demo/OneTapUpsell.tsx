"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { DemoStore } from "@/lib/site";
import { DemoImg } from "./DemoImg";
import { money2 } from "@/lib/format";

const ACCENT = "#155FFF";
const money = (n: number) => money2(n);

/** One-tap post-purchase upsell shown right after confirmation (no re-payment). */
export function OneTapUpsell({
  store,
  name,
  onAdd,
  onSkip,
}: {
  store: DemoStore;
  name: string;
  onAdd: () => void;
  onSkip: () => void;
}) {
  const offer = store.products[1] ?? store.products[0];
  const full = offer?.price || 12;
  const deal = Math.max(1, Math.round(full * 0.5 * 100) / 100);

  const [left, setLeft] = useState(9 * 60 + 54);
  useEffect(() => {
    const id = setInterval(() => setLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, []);
  const timer = `${Math.floor(left / 60)}:${(left % 60).toString().padStart(2, "0")}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      className="min-h-screen px-5 py-12"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[3fr_7fr] lg:gap-10">
        {/* LEFT — explanation */}
        <div>
          <div className="text-eyebrow" style={{ color: ACCENT }}>
            Upsell en un clic · {name}
          </div>
          <h2
            className="mt-2 font-serif font-normal tracking-tight text-foreground"
            style={{ fontSize: "clamp(1.5rem,2.4vw,2.1rem)", lineHeight: 1.1 }}
          >
            Faites de votre page de remerciement votre meilleure offre
          </h2>
          <p className="mt-3 text-muted-foreground">
            Juste après le paiement, proposez une offre exclusive que vos clients ajoutent en un clic,
            débitée sur la carte qu’ils viennent d’utiliser. Pas de nouveau paiement, rien à ressaisir.
          </p>
          <ul className="mt-5 flex flex-col gap-2.5">
            {[
              "Un clic : ni nouveau paiement, ni nouveau tunnel de commande",
              "Un compte à rebours crée une vraie urgence",
              "Choisissez la remise et les règles qui vous conviennent",
            ].map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-sm text-foreground/90">
                <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — the live offer */}
        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft-xl">
          {/* chrome */}
          <div className="flex items-center gap-3 border-b border-border bg-neutral-50 px-4 py-2.5">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-[#ff5f57]" />
              <span className="size-2.5 rounded-full bg-[#febc2e]" />
              <span className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="mx-auto rounded-md bg-white px-3 py-1 text-[11px] text-neutral-500 ring-1 ring-neutral-200">
              {(name || "votreboutique").toLowerCase().replace(/\s+/g, "")}.fr/commande
            </div>
          </div>

          <div className="p-5">
            {/* confirmation header */}
            <div className="flex items-center gap-2 text-sm">
              <span
                className="flex size-6 items-center justify-center rounded-full border-2"
                style={{ borderColor: ACCENT, color: ACCENT }}
              >
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              <span className="font-semibold text-neutral-900">Confirmation #0WPS9KCW8</span>
              <span className="text-neutral-500">· Votre commande est payée</span>
            </div>

            {/* before you go */}
            <div className="my-4 flex items-center gap-4">
              <span className="h-px flex-1 bg-border" />
              <span className="text-base font-semibold text-neutral-900">{name}, avant de partir !</span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <div className="rounded-lg bg-neutral-50 py-2 text-center text-[13px] text-neutral-600">
              Ajoutez-le pour une durée limitée{" "}
              <span className="font-semibold tabular-nums text-red-500">{timer}</span>
            </div>

            {/* offer */}
            <div className="mt-4 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-neutral-50">
                <DemoImg src={offer?.image} alt={offer?.title ?? ""} className="size-full object-contain p-6" />
              </div>

              <div className="flex flex-col">
                <div className="text-xs font-medium uppercase tracking-wide text-neutral-400">
                  Offre 1 sur 1
                </div>
                <h3 className="mt-1 text-xl font-semibold text-neutral-900">
                  {offer?.title ?? "Produit complémentaire"}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-neutral-400 line-through">{money(full)}</span>
                  <span className="text-lg font-bold text-red-500">{money(deal)}</span>
                </div>

                <div className="mt-3 space-y-1.5 border-t border-border pt-3 text-sm">
                  <div className="flex justify-between text-neutral-600">
                    <span>Livraison</span>
                    <span className="font-medium text-neutral-900">Offerte</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>TVA</span>
                    <span className="font-medium text-neutral-900">Incluse</span>
                  </div>
                </div>

                <div className="relative mt-auto pt-4">
                  <button
                    onClick={onAdd}
                    className="w-full rounded-lg py-3 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-[0.99]"
                    style={{ background: ACCENT }}
                  >
                    Ajouter à la commande · {money(deal)}
                  </button>
                  {/* finger-tap hint */}
                  <div className="pointer-events-none absolute -bottom-3 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center">
                    <motion.span
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
                      className="text-xl"
                      role="img"
                      aria-label="appuyer"
                    >
                      👆
                    </motion.span>
                  </div>
                  <button
                    onClick={onSkip}
                    className="mt-6 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors hover:bg-neutral-50"
                    style={{ color: ACCENT }}
                  >
                    Passer l’offre
                  </button>
                  <p className="mt-2 text-center text-xs text-neutral-400">
                    Un clic suffit : pas de carte à ressaisir, pas de nouveau paiement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
