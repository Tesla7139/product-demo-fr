"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { useDict, useFormat } from "@/i18n/I18nProvider";

const REVIEW =
  "We've been using Clickpost and it's genuinely been super helpful. Customers can handle order edits themselves, and the post-purchase upsells have been a solid bonus for incremental revenue. Setup was straightforward, everything's been running smoothly, and support has been great too.";

export function MarsSpotlight() {
  const m = useDict().sections.marsSpotlight;
  const { num, money, date, fill } = useFormat();
  // real Mars By GHC figures (USD), labels from the dictionary
  const figures = [num(6644), money(11713, "USD"), fill(m.figurePlus, { n: num(200000) })];
  const stats = m.stats.map((st, i) => ({ ...st, figure: figures[i] }));
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "linear-gradient(160deg, #080d1c 0%, #0e1a42 100%)" }}
    >
      {/* ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #2f5bff 0%, transparent 70%)" }}
      />

      <Container>
        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          {/* Badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/50">
              {m.badge}
            </span>
            <span className="rounded-full bg-amber-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-amber-300">
              {m.tierBadge}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={fadeUp}
            className="mt-6 font-serif font-bold text-white"
            style={{
              fontSize: "clamp(2.1rem, 3.8vw, 3.5rem)",
              lineHeight: 1.03,
              letterSpacing: "-0.025em",
            }}
          >
            {m.titleLine1}
            <br />
            <span style={{ color: "rgba(255,255,255,0.35)" }}>
              {m.titleLine2}
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 max-w-lg text-[16px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)" }}
          >
            {m.intro}
          </motion.p>

          {/* Stats — horizontal data rows, not pedestals */}
          <motion.div
            variants={fadeUp}
            className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 md:grid-cols-3"
          >
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 bg-white/[0.03] px-8 py-7 md:px-8"
                style={i === 1 ? { borderLeft: "1px solid rgba(255,255,255,0.08)", borderRight: "1px solid rgba(255,255,255,0.08)" } : undefined}
              >
                <div
                  className="font-serif font-bold text-white"
                  style={{ fontSize: "2rem", letterSpacing: "-0.025em", lineHeight: 1 }}
                >
                  {s.figure}
                </div>
                <div className="text-[14px] font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>
                  {s.label}
                </div>
                <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                  {s.detail}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Quote card + CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-5 flex flex-col gap-8 rounded-2xl border border-white/10 bg-white/[0.04] px-8 py-8 md:flex-row md:items-center md:px-10 md:py-9"
          >
            <div className="flex-1">
              <div className="mb-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote
                className="text-[15.5px] leading-relaxed"
                style={{ color: "rgba(255,255,255,0.72)" }}
              >
                &ldquo;{REVIEW}&rdquo;
              </blockquote>
              <footer className="mt-3 text-[12px] font-semibold" style={{ color: "rgba(255,255,255,0.32)" }}>
                {fill(m.reviewSource, { date: date(new Date(Date.UTC(2026, 0, 1)), { month: "long", year: "numeric" }) })}
              </footer>
            </div>

            <div className="shrink-0">
              <a
                href="https://apps.shopify.com/clickpost-order-edit-cancel#reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-neutral-900 shadow-lg transition-opacity hover:opacity-90"
              >
                {m.readReview}
                <ExternalLink className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
