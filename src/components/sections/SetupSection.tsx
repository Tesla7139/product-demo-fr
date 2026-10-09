"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { SetupPanel } from "./demo/SetupPanel";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function SetupSection() {
  return (
    <section id="setup" className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: copy */}
          <motion.div
            variants={staggerContainer(0.09)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <motion.span variants={fadeUp} className="text-eyebrow text-primary">
              Configuration
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-h2 mt-3 text-balance">
              C’est vous qui fixez les règles
            </motion.h2>
            <motion.p variants={fadeUp} className="mt-4 max-w-md text-muted-foreground">
              Décidez combien de temps vos clients peuvent modifier leur commande, et ce qu’ils ont
              le droit de changer — sans code, en ligne en quelques minutes.
            </motion.p>
            <motion.ul variants={fadeUp} className="mt-7 flex flex-col gap-3.5">
              {[
                "Délai de modification fixe ou jusqu’à l’expédition",
                "Activez ou désactivez chaque action",
                "Modifications synchronisées avec votre logistique",
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm text-foreground/90">
                  <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right: interactive setup box (shared with the product demo) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mx-auto"
          >
            <SetupPanel />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
