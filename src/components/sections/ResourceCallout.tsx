"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/ui/button";
import { viewportOnce, fadeUp } from "@/lib/motion";
import { useDict } from "@/i18n/I18nProvider";

export function ResourceCallout() {
  const t = useDict().sections.resourceCallout;
  return (
    <section className="py-12 md:py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative overflow-hidden rounded-3xl border border-border bg-foreground px-8 py-14 text-center text-background md:px-16 md:py-20"
        >
          {/* brand glow accents */}
          <div className="pointer-events-none absolute -left-20 -top-20 size-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 size-72 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-h2 text-balance">{t.title}</h2>
            <p className="mx-auto mt-4 max-w-lg text-background/70">
              {t.body}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#demo">
                  {t.seeDemo} <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
              >
                <a href="#contact">{t.bookDemo}</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
