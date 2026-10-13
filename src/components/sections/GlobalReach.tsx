"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { useDict, useFormat } from "@/i18n/I18nProvider";

/** Live-ticking counters that read as the product working across the globe. */
function LiveCounter({
  base,
  format,
  label,
  rate,
}: {
  base: number;
  format: (n: number) => string;
  label: string;
  rate: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(base);

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setN((v) => v + Math.ceil(Math.random() * rate)), 1800);
    return () => clearInterval(id);
  }, [inView, rate]);

  return (
    <div ref={ref} className="flex flex-col gap-1">
      <span className="text-h2 tabular-nums" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
        {format(n)}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}

function EventTicker() {
  const globeEvents = useDict().demo.globeEvents;
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % globeEvents.length), 2400);
    return () => clearInterval(id);
  }, []);
  const e = globeEvents[i];
  return (
    <div className="flex h-7 items-center gap-2 text-sm">
      <span className="relative flex size-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
        <span className="relative inline-flex size-2 rounded-full bg-primary" />
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="flex items-center gap-1.5 text-muted-foreground"
        >
          <span className="font-medium text-foreground">{e.label}</span>
          <MapPin className="size-3.5" />
          {e.city}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

export function GlobalReach() {
  const s = useDict().sections.globalReach;
  const { num, money } = useFormat();
  const plain = (n: number) => num(n);
  return (
    <section className="relative py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center text-scrim rounded-3xl p-4">
          <SectionHeading
            eyebrow={s.eyebrow}
            title={s.title}
            subtitle={s.subtitle}
          />
          <div className="mt-6 flex justify-center">
            <EventTicker />
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-10 sm:grid-cols-3">
          <LiveCounter base={128430} format={plain} label={s.editsHandled} rate={4} />
          <LiveCounter base={742900} format={(n) => money(n)} label={s.upsellRevenue} rate={120} />
          <LiveCounter base={31280} format={plain} label={s.cancellationsRecovered} rate={2} />
        </div>
      </Container>
    </section>
  );
}
