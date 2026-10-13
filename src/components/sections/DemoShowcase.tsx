"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/primitives/Container";
import { HeroPhone } from "./HeroPhone";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useDict } from "@/i18n/I18nProvider";

export function DemoShowcase() {
  const t = useDict().sections.demoShowcase;
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT — context */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.p variants={fadeUp} className="text-eyebrow mb-4 text-primary">
              {t.eyebrow}
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-h2 max-w-md text-balance text-foreground">
              {t.title}
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-md text-muted-foreground">
              {t.body}
            </motion.p>
          </motion.div>

          {/* RIGHT — browser-window demo */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <HeroPhone />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
