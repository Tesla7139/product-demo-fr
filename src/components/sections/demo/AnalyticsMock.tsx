"use client";

import { useState } from "react";
import { CalendarDays, ChevronDown, Search } from "lucide-react";
import type { DemoStore, DemoProduct } from "@/lib/site";
import { useDict, useFormat, useLocaleMeta } from "@/i18n/I18nProvider";

const TEAL = "#0d9488";

/** Sample reporting period (June 2026) and the days labelled on the x-axis. */
const RANGE_FROM = "2026-06-01";
const RANGE_TO = "2026-07-01";
const X_DAYS = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28];

/** Deterministic 30-point series (SSR-safe: no Math.random / Date). */
function series(base: number, swing: number, seed: number) {
  return Array.from({ length: 30 }, (_, i) =>
    Math.max(0, Math.round(base + swing * Math.sin((i + seed) / 3.1) + (swing * 0.5) * Math.sin((i + seed) / 1.4) + i * (base * 0.012)))
  );
}

function LineChart({ data, prev }: { data: number[]; prev: number[] }) {
  const { date } = useFormat();
  const xLabels = X_DAYS.map((d) => date(`2026-06-${String(d).padStart(2, "0")}`, { day: "numeric", month: "short" }));
  const W = 720, H = 190, PADX = 6, PADT = 14, PADB = 24;
  const max = Math.max(...data, ...prev, 1);
  const x = (i: number) => PADX + (i / (data.length - 1)) * (W - 2 * PADX);
  const y = (v: number) => PADT + (1 - v / max) * (H - PADT - PADB);
  const path = data.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const prevPath = prev.map((v, i) => `${x(i)},${y(v)}`).join(" ");
  const area = `${x(0)},${H - PADB} ${path} ${x(data.length - 1)},${H - PADB}`;
  return (
    <div className="w-full">
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="none" style={{ height: 190 }}>
        <defs>
          <linearGradient id="an-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={TEAL} stopOpacity="0.18" />
            <stop offset="100%" stopColor={TEAL} stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 0.5, 1].map((t) => (
          <line key={t} x1={PADX} x2={W - PADX} y1={PADT + t * (H - PADT - PADB)} y2={PADT + t * (H - PADT - PADB)} stroke="#e5e7eb" strokeWidth="1" />
        ))}
        <polygon points={area} fill="url(#an-fill)" />
        <polyline points={prevPath} fill="none" stroke="#93c5fd" strokeWidth="2" strokeDasharray="2 4" />
        <polyline points={path} fill="none" stroke={TEAL} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
      <div className="mt-1 flex justify-between px-1 text-[10px] text-neutral-400">
        {xLabels.map((l) => <span key={l}>{l}</span>)}
      </div>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-xl border border-border p-4">
      <div className="text-[13px] text-neutral-500">{label}</div>
      <div className="mt-1 text-[22px] font-bold text-neutral-900">{value}</div>
      <div className="mt-1 text-[12px] text-neutral-400">{sub}</div>
    </div>
  );
}

type AnalyticsView = "overview" | "edits" | "upsell";
type AnalyticsTourRefs = {
  overview?: React.RefObject<HTMLDivElement | null>;
  edits?: React.RefObject<HTMLDivElement | null>;
  upsell?: React.RefObject<HTMLDivElement | null>;
};

export function AnalyticsMock({ store, viewTab, tourRefs }: { store: DemoStore; viewTab?: AnalyticsView; tourRefs?: AnalyticsTourRefs }) {
  const [innerTab, setInnerTab] = useState<AnalyticsView>("overview");
  const tab = viewTab ?? innerTab;
  const setTab = setInnerTab;
  const t = useDict().mocks.analytics;
  const { money, money2, num, date, fill } = useFormat();
  const meta = useLocaleMeta();
  const currency = store.currency || meta.currency;
  const pct = (n: number) => num(n, { style: "percent", maximumFractionDigits: 0 });
  const rangeDate = (d: string) => date(d, { day: "2-digit", month: "2-digit", year: "numeric" });
  const products: DemoProduct[] = store.products.filter((p) => (p.price ?? 0) > 0);

  // --- edits ---
  const editsSeries = series(14, 6, 0);
  const totalEdits = editsSeries.reduce((a, b) => a + b, 0);
  const totalOrders = Math.round(totalEdits / 0.41);
  const editPct = Math.round((totalEdits / totalOrders) * 100);
  const avgSaved = currency === "INR" ? 150 : currency === "GBP" || currency === "EUR" ? 4 : 5;
  const supportSavings = totalEdits * avgSaved;
  const editsPrev = editsSeries.map((v) => Math.round(v * 0.82));

  const breakdown = (
    [
      { key: "addressChanged", pct: 0.33 },
      { key: "contactUpdated", pct: 0.18 },
      { key: "quantityChanged", pct: 0.24 },
      { key: "itemsAdded", pct: 0.15 },
      { key: "orderCancelled", pct: 0.05 },
      { key: "discountApplied", pct: 0.05 },
    ] as const
  ).map((b) => ({ ...b, label: t.breakdown[b.key], value: Math.round(totalEdits * b.pct) }));

  const cancellations = (
    [
      { key: "changedMind", count: 11 },
      { key: "mistake", count: 7 },
      { key: "cheaper", count: 5 },
      { key: "slow", count: 3 },
    ] as const
  ).map((c) => ({ ...c, reason: t.reasons[c.key] }));
  const cancelTotal = cancellations.reduce((a, c) => a + c.count, 0);

  // --- upsell (product-based) ---
  const topProducts = products
    .map((p, i) => {
      const units = Math.max(8, 92 - i * 11 - (i % 2) * 5);
      return { title: p.title, image: p.image, units, revenue: units * Math.max(1, Math.round(p.price * 0.9)) };
    })
    .sort((a, b) => b.revenue - a.revenue)
    .slice(0, 10);
  const upsellCount = topProducts.reduce((a, p) => a + p.units, 0);
  const upsellRevenue = topProducts.reduce((a, p) => a + p.revenue, 0) || 18400;
  const avgPerUpsell = upsellCount ? Math.round(upsellRevenue / upsellCount) : 0;
  const upsellConversion = 26;
  const revBase = upsellRevenue / 30;
  const upsellSeries = series(revBase, revBase * 0.5, 3);
  const upsellPrev = upsellSeries.map((v) => Math.round(v * 0.78));

  const TABS = [
    { key: "overview", label: t.tabs.overview },
    { key: "edits", label: t.tabs.edits },
    { key: "upsell", label: t.tabs.upsell },
  ] as const;

  return (
    <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-white shadow-soft-xl">
      <div className="max-h-[560px] overflow-y-auto no-scrollbar p-5">
        {/* header */}
        <div className="flex items-center justify-between">
          <h3 className="text-[20px] font-extrabold tracking-tight text-neutral-900">{t.title}</h3>
          <div className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-1.5 text-[12px] font-medium text-neutral-600">
            <CalendarDays className="size-3.5 text-neutral-400" />
            {fill(t.dateRange, { from: rangeDate(RANGE_FROM), to: rangeDate(RANGE_TO) })}
            <ChevronDown className="size-3.5 text-neutral-400" />
          </div>
        </div>

        {/* sub-tabs */}
        <div className="mt-4 grid grid-cols-3 gap-1 rounded-xl bg-neutral-100 p-1">
          {TABS.map((tb) => (
            <button
              key={tb.key}
              onClick={() => setTab(tb.key)}
              className={`truncate rounded-lg px-1 py-2 text-[13px] font-semibold transition-colors ${tab === tb.key ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500 hover:text-neutral-700"}`}
            >
              {tb.label}
            </button>
          ))}
        </div>

        {/* ---- OVERVIEW ---- */}
        {tab === "overview" && (
          <div ref={tourRefs?.overview} className="mt-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <Stat label={t.totalEdits} value={num(totalEdits)} sub={fill(t.ofTotalOrders, { pct: pct(editPct / 100) })} />
              <Stat label={t.supportSavings} value={money2(supportSavings, currency)} sub={fill(t.avgSaved, { amount: money(avgSaved, currency) })} />
              <Stat label={t.upsellRevenueAdded} value={money2(upsellRevenue, currency)} sub={fill(t.fromUpsells, { count: num(upsellCount) })} />
            </div>
            <div className="mt-4 rounded-xl border border-border p-4">
              <LineChart data={editsSeries} prev={editsPrev} />
              <div className="mt-2 flex justify-center gap-5 text-[11px] text-neutral-500">
                <span className="inline-flex items-center gap-1.5"><span className="h-0.5 w-4 rounded" style={{ background: TEAL }} /> {t.totalEdits}</span>
                <span className="inline-flex items-center gap-1.5"><span className="h-0.5 w-4 rounded border-b-2 border-dashed border-blue-300" /> {t.previousPeriod}</span>
              </div>
            </div>
          </div>
        )}

        {/* ---- EDIT ACTIVITY ---- */}
        {tab === "edits" && (
          <div ref={tourRefs?.edits} className="mt-4">
            <div className="rounded-xl border border-border px-4 py-3 text-[14px] text-neutral-700">
              {t.editsSummary.before}<span className="font-bold text-neutral-900">{fill(t.editsSummary.edits, { count: num(totalEdits) })}</span>{t.editsSummary.middle}<span className="font-bold text-neutral-900">{fill(t.editsSummary.orders, { count: num(totalOrders) })}</span>{t.editsSummary.after}
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              {breakdown.map((b) => (
                <div key={b.key} className="rounded-xl border border-border p-4">
                  <div className="text-[13px] text-neutral-500">{b.label}</div>
                  <div className="mt-1 text-[20px] font-bold text-neutral-900">{num(b.value)}</div>
                  <div className="mt-1 text-[12px] text-neutral-400">{fill(t.ofEdits, { pct: pct(b.pct) })}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div className="rounded-xl border border-border p-4">
                <div className="mb-3 text-[14px] font-bold text-neutral-900">{t.distribution}</div>
                <div className="space-y-2.5">
                  {breakdown.map((b) => (
                    <div key={b.key}>
                      <div className="flex justify-between gap-2 text-[12px] text-neutral-600">
                        <span>{b.label}</span>
                        <span className="font-semibold text-neutral-900">{pct(b.pct)}</span>
                      </div>
                      <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
                        <div className="h-full rounded-full" style={{ width: `${Math.round(b.pct * 100)}%`, background: TEAL }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-border p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-[14px] font-bold text-neutral-900">{t.cancellationReasons}</div>
                  <div className="flex gap-1 rounded-lg bg-neutral-100 p-0.5 text-[11px] font-medium">
                    {[t.filters.all, t.filters.prepaid, t.filters.cod].map((f, i) => (
                      <span key={i} className={`rounded px-2 py-0.5 ${i === 0 ? "bg-white text-neutral-900 shadow-sm" : "text-neutral-500"}`}>{fill(t.filterCount, { label: f, count: num(i === 0 ? cancelTotal : i === 1 ? Math.round(cancelTotal * 0.6) : Math.round(cancelTotal * 0.4)) })}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  {cancellations.map((c) => (
                    <div key={c.key} className="flex items-center justify-between text-[12.5px]">
                      <span className="text-neutral-600">{c.reason}</span>
                      <span className="font-semibold text-neutral-900">{c.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ---- UPSELL ---- */}
        {tab === "upsell" && (
          <div ref={tourRefs?.upsell} className="mt-4">
            <div className="grid gap-3 sm:grid-cols-3">
              <Stat label={t.upsellRevenue} value={money2(upsellRevenue, currency)} sub={fill(t.fromUpsells, { count: num(upsellCount) })} />
              <Stat label={t.upsellConversion} value={pct(upsellConversion / 100)} sub={t.ofEligible} />
              <Stat label={t.avgPerUpsell} value={money2(avgPerUpsell, currency)} sub={fill(t.itemsAdded, { count: num(upsellCount) })} />
            </div>
            <div className="mt-4 rounded-xl border border-border p-4">
              <div className="mb-2 text-[14px] font-bold text-neutral-900">{t.revenueOverTime}</div>
              <LineChart data={upsellSeries} prev={upsellPrev} />
            </div>
            <div className="mt-4 rounded-xl border border-border p-4">
              <div className="mb-3 text-[14px] font-bold text-neutral-900">{fill(t.topProducts, { count: topProducts.length })}</div>
              {topProducts.length ? (
                <div className="divide-y divide-border">
                  {topProducts.map((p, i) => (
                    <div key={i} className="flex items-center gap-3 py-2.5">
                      <span className="w-4 text-[12px] font-bold text-neutral-400">{i + 1}</span>
                      <div className="size-9 shrink-0 overflow-hidden rounded-lg border border-border bg-neutral-50">
                        {p.image ? (
                          // eslint-disable-next-line @next/next/no-img-element -- remote product image
                          <img src={p.image} alt="" className="size-full object-cover" onError={(e) => (e.currentTarget.style.visibility = "hidden")} />
                        ) : null}
                      </div>
                      <div className="min-w-0 flex-1 truncate text-[13px] font-medium text-neutral-800">{p.title}</div>
                      <div className="text-right">
                        <div className="text-[13px] font-semibold text-neutral-900">{money(p.revenue, currency)}</div>
                        <div className="text-[11px] text-neutral-400">{fill(t.sold, { count: num(p.units) })}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center py-10 text-center">
                  <Search className="size-8 text-neutral-300" />
                  <div className="mt-3 text-[15px] font-bold text-neutral-900">{t.emptyTitle}</div>
                  <div className="text-[12px] text-neutral-500">{t.emptySub}</div>

                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
