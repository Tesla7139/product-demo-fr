"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/primitives/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { useDict, useFormat } from "@/i18n/I18nProvider";

export function MetricsStrip() {
  const results = useDict().sections.metricsStrip.results;
  const { num, fill } = useFormat();
  const values = [
    num(0.42, { style: "percent" }),
    num(0.18, { style: "percent", signDisplay: "always" }),
    num(5, { minimumFractionDigits: 1 }),
  ];
  const RESULTS = results.map((r, i) => ({ ...r, stat: fill(r.stat, { n: values[i] }) }));
  return (
    <section id="metrics" className="py-20 md:py-24">
      <Container>
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid gap-0 divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {RESULTS.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`flex flex-col gap-3 py-8 md:py-0 ${
                i === 0 ? "md:pr-10" : i === 1 ? "md:px-10" : "md:pl-10"
              }`}
            >
              <div
                className="font-serif text-[2rem] font-bold leading-none tracking-tight text-foreground"
                style={{ letterSpacing: "-0.025em" }}
              >
                {r.stat}
              </div>
              <div className="text-[0.9rem] font-semibold text-foreground">{r.heading}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
