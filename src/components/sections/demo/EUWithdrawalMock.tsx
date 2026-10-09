"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, ChevronDown, HelpCircle, Truck } from "lucide-react";
import type { DemoStore } from "@/lib/site";
import { DEFAULT_ADDR, DEFAULT_EMAIL, DEFAULT_PHONE, DEFAULT_COUNTRY } from "./DemoMock";
import { DemoImg } from "./DemoImg";
import { money, DEFAULT_CURRENCY } from "@/lib/format";

// same customer/order details as the main order-editing window
const CUSTOMER = `${DEFAULT_ADDR.first} ${DEFAULT_ADDR.last}`;
const ADDR_LINES = [CUSTOMER, DEFAULT_ADDR.line1, `${DEFAULT_ADDR.zip} ${DEFAULT_ADDR.city}`, DEFAULT_COUNTRY];
const TRACKING = "JAM8470GB72670273201";

function Thumb({ src, alt }: { src?: string | null; alt: string }) {
  return <DemoImg src={src} alt={alt} className="size-12 shrink-0 rounded-lg border border-border object-cover" />;
}

function InfoBlock({ label, lines }: { label: string; lines: string[] }) {
  return (
    <div>
      <div className="text-sm font-bold text-neutral-900">{label}</div>
      <div className="mt-1 space-y-0.5 text-xs leading-relaxed text-neutral-500">
        {lines.map((l) => <div key={l}>{l}</div>)}
      </div>
    </div>
  );
}

// Field styling shared with the order-editing windows (see DemoMock's Field/SelectField).
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="relative rounded-md border border-border px-3 pt-5 pb-1.5">
      <span className="pointer-events-none absolute left-3 top-1.5 text-[10px] font-medium uppercase tracking-wide text-neutral-400">{label}</span>
      <div className="text-sm text-neutral-800">{value}</div>
    </div>
  );
}

const WITHDRAWAL_REASONS = [
  "J'ai changé d'avis",
  "Commande passée par erreur",
  "J'ai trouvé moins cher ailleurs",
  "Je n'en ai plus besoin",
  "Le délai de livraison est trop long",
  "Mauvais article ou mauvaise taille",
];

/** Interactive reason dropdown, styled like the order-editing fields. */
function ReasonSelect({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="relative w-full rounded-md border px-3 pt-5 pb-1.5 text-left transition-colors"
        style={{ borderColor: open ? "#111827" : "var(--border, #e5e7eb)" }}
      >
        <span className="pointer-events-none absolute left-3 top-1.5 text-[10px] font-medium uppercase tracking-wide text-neutral-400">{label}</span>
        <span className="flex items-center justify-between text-sm text-neutral-800">
          {value}
          <ChevronDown className={`size-4 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`} />
        </span>
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full z-20 mt-1 overflow-hidden rounded-md border border-neutral-200 bg-white shadow-lg">
          {WITHDRAWAL_REASONS.map((r) => (
            <button
              key={r}
              onClick={() => { onChange(r); setOpen(false); }}
              className={`flex w-full items-center justify-between px-3 py-2 text-left text-sm transition-colors hover:bg-neutral-50 ${r === value ? "font-semibold text-neutral-900" : "text-neutral-600"}`}
            >
              {r}
              {r === value && <Check className="size-3.5 text-neutral-900" strokeWidth={3} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

type EUTourRefs = {
  euCard?: React.RefObject<HTMLDivElement | null>;
  withdrawRow?: React.RefObject<HTMLDivElement | null>;
  withdrawBtn?: React.RefObject<HTMLButtonElement | null>;
};

/** Shopify-style order status page with the EU Withdrawal Function + a two-step withdrawal request. */
const WITHDRAWAL_MESSAGE = "Je vous notifie par la présente ma rétractation du contrat portant sur la vente du bien ci-dessous.";

export function EUWithdrawalMock({ store, tourRefs, autoFill = 0, manualFill = false, onWithdrawOpened, onWithdrawn }: { store: DemoStore; tourRefs?: EUTourRefs; autoFill?: number; manualFill?: boolean; onWithdrawOpened?: () => void; onWithdrawn?: () => void }) {
  const currency = store.currency || DEFAULT_CURRENCY;
  const fmt = (n: number) => money(n, currency);
  const product = store.products.find((p) => (p.price ?? 0) > 0) ?? store.products[0];
  const price = product?.price ?? 95;
  const shipping = 7;
  const total = price + shipping;

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<"form" | "done">("form");
  const [agreed, setAgreed] = useState(false);
  // start EMPTY — the tour types these in on the "fill" step
  const [reason, setReason] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  // free-play fills automatically when the form opens; during the tour the fill
  // is driven by the `autoFill` prop on the dedicated "fill" step (manualFill).
  const [internalFill, setInternalFill] = useState(0);
  const fillTrigger = autoFill + internalFill;

  // typewriter fill, triggered by `autoFill` (tour) or opening the form (free-play)
  useEffect(() => {
    if (!fillTrigger) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => { if (!cancelled) setReason(WITHDRAWAL_REASONS[0]); }, 250));
    timers.push(setTimeout(() => { if (!cancelled) setEmail(DEFAULT_EMAIL); }, 650));
    timers.push(setTimeout(() => { if (!cancelled) setPhone(DEFAULT_PHONE); }, 1000));
    for (let i = 1; i <= WITHDRAWAL_MESSAGE.length; i++) {
      timers.push(setTimeout(() => { if (!cancelled) setMessage(WITHDRAWAL_MESSAGE.slice(0, i)); }, 1350 + i * 16));
    }
    timers.push(setTimeout(() => { if (!cancelled) setAgreed(true); }, 1350 + WITHDRAWAL_MESSAGE.length * 16 + 250));
    return () => { cancelled = true; timers.forEach(clearTimeout); };
  }, [fillTrigger]);

  const toggle = () => {
    const next = !open;
    setOpen(next);
    if (next) {
      onWithdrawOpened?.();
      // free-play: fill the form once it's open (the tour drives this itself)
      if (!manualFill) setInternalFill((k) => k + 1);
    }
  };

  const submit = () => {
    setStep("done");
    onWithdrawn?.();
  };

  return (
    <div className="w-full bg-white">
      <div className="p-6 lg:h-[560px] lg:overflow-y-auto lg:no-scrollbar">
        {/* header */}
        <div className="flex items-start gap-3">
          <div className="flex items-start gap-2">
            <ArrowLeft className="mt-1 size-4 text-neutral-500" />
            <div>
              <div className="text-lg font-bold tracking-tight text-neutral-900">Commande n°&nbsp;133792</div>
              <div className="text-xs text-neutral-500">Confirmée le 18 juin</div>
            </div>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-[1.5fr_1fr]">
          {/* ---- left column ---- */}
          <div className="space-y-4">
            {/* EU Withdrawal Function card */}
            <div ref={tourRefs?.euCard} className="rounded-xl border border-border p-4">
              <h3 className="text-base font-bold text-neutral-900">Droit de rétractation (UE)</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-neutral-500">
                Les clients de l&apos;UE peuvent modifier une commande éligible pendant le délai de modification, ou
                utiliser le formulaire de rétractation pour une annulation, un remboursement ou un retour.
              </p>

              <div ref={tourRefs?.withdrawRow} className="mt-3 overflow-hidden rounded-lg border border-border">
                <button
                  onClick={toggle}
                  className="flex w-full items-center gap-3 px-3.5 py-2.5 text-left transition-colors hover:bg-neutral-50"
                  aria-expanded={open}
                >
                  <HelpCircle className="size-4 shrink-0 text-neutral-600" />
                  <span className="flex-1 text-sm font-semibold text-neutral-900">Formulaire de rétractation</span>
                  <ChevronDown className={`size-4 text-neutral-400 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      {step === "form" ? (
                        <div className="flex flex-col gap-2.5 px-3.5 pb-4 pt-1">
                          <ReasonSelect label="Motif de la rétractation" value={reason || "Choisir un motif"} onChange={setReason} />
                          <Field label="E-mail" value={email} />
                          <Field label="Téléphone" value={phone} />
                          <label className="relative block rounded-md border border-border px-3 pt-5 pb-2">
                            <span className="pointer-events-none absolute left-3 top-1.5 text-[10px] font-medium uppercase tracking-wide text-neutral-400">Message (facultatif)</span>
                            <span className="block min-h-[1.2em] text-sm leading-snug text-neutral-600">
                              {message}
                            </span>
                          </label>
                          <button
                            onClick={() => setAgreed((v) => !v)}
                            className="flex items-start gap-2.5 text-left"
                          >
                            <span
                              className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded border-2 transition-colors"
                              style={{ borderColor: agreed ? "#111827" : "#cbd5e1", background: agreed ? "#111827" : "transparent" }}
                            >
                              {agreed && <Check className="size-3 text-white" strokeWidth={3} />}
                            </span>
                            <span className="text-sm leading-snug text-neutral-600">
                              J&apos;exerce mon droit de rétractation pour ce contrat, conformément au droit européen.
                            </span>
                          </button>
                          <button
                            ref={tourRefs?.withdrawBtn}
                            onClick={submit}
                            className="w-full rounded-xl py-3.5 text-[14px] font-semibold text-white shadow-md transition-all hover:brightness-125 active:scale-[0.99]"
                            style={{ background: "#111827" }}
                          >
                            Confirmer la rétractation
                          </button>
                        </div>
                      ) : (
                        <div className="px-3.5 pb-4 pt-2">
                          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-3.5">
                            <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
                              <span className="flex size-5 items-center justify-center rounded-full bg-emerald-500 text-white">
                                <Check className="size-3" strokeWidth={3} />
                              </span>
                              Demande de rétractation reçue
                            </div>
                            <p className="mt-2 text-xs leading-relaxed text-emerald-800/80">
                              Un accusé de réception vient d&apos;être envoyé à <span className="font-semibold">{DEFAULT_EMAIL}</span>. La commande
                              est bloquée avant de partir vers votre WMS / logisticien, le temps de traiter la demande.
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* tracking */}
            <div className="rounded-xl border border-border p-4">
              <div className="text-sm text-neutral-700">
                FedEx FIC <span className="font-medium underline">{TRACKING}</span>
              </div>
              <div className="mt-3 space-y-3">
                <div className="flex items-start gap-3">
                  <Truck className="mt-0.5 size-4 text-neutral-700" />
                  <div>
                    <div className="text-sm font-bold text-neutral-900">En cours de livraison</div>
                    <div className="text-xs text-neutral-400">18 juin</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 pl-[3px]">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-neutral-400" />
                  <div className="pl-[7px]">
                    <div className="text-sm font-bold text-neutral-900">Confirmée</div>
                    <div className="text-xs text-neutral-400">18 juin</div>
                  </div>
                </div>
              </div>
            </div>

            {/* info grid */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-4 rounded-xl border border-border p-4">
              <InfoBlock label="Coordonnées" lines={[DEFAULT_EMAIL, DEFAULT_PHONE]} />
              <InfoBlock label="Paiement" lines={["Shop Pay · Visa", `${fmt(total)} · 18 juin`]} />
              <InfoBlock label="Adresse de livraison" lines={ADDR_LINES} />
              <InfoBlock label="Adresse de facturation" lines={ADDR_LINES} />
            </div>
          </div>

          {/* ---- right column: order summary ---- */}
          <div className="rounded-xl border border-border p-4">
            <div className="flex items-start gap-3">
              <div className="relative">
                <Thumb src={product?.image} alt={product?.title ?? "Produit"} />
                <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-neutral-900 text-xs font-semibold text-white">1</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium leading-snug text-neutral-800">{product?.title ?? "Chemise en lin Casey"}</div>
                <div className="text-xs text-neutral-500">{product?.variant ?? "Jaune / L"}</div>
              </div>
              <div className="text-sm font-semibold text-neutral-900">{fmt(price)}</div>
            </div>

            <div className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm">
              <div className="flex justify-between text-neutral-600"><span>Sous-total</span><span className="font-medium text-neutral-900">{fmt(price)}</span></div>
              <div className="flex justify-between text-neutral-600"><span>Livraison</span><span className="font-medium text-neutral-900">{fmt(shipping)}</span></div>
            </div>
            <div className="mt-3 flex items-baseline justify-between border-t border-border pt-3">
              <span className="text-base font-bold text-neutral-900">Total</span>
              <span className="text-base font-bold text-neutral-900">
                <span className="mr-1 text-xs font-medium text-neutral-400">{currency}</span>{fmt(total)}
              </span>
            </div>
            <div className="mt-1 text-xs text-neutral-400">Dont {fmt(0)} de TVA</div>
          </div>
        </div>
      </div>
    </div>
  );
}
