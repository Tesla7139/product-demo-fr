"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/primitives/Container";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const RESULTS = [
  {
    stat: "−42 %",
    heading: "De tickets support en moins",
    body: "Vos clients corrigent leur adresse, changent de taille ou annulent eux-mêmes — les demandes qui s’empilaient dans votre boîte mail se règlent toutes seules.",
  },
  {
    stat: "+18 %",
    heading: "De panier moyen en plus",
    body: "La page de remerciement devient votre meilleur moment d’upsell. Ajout en un clic, sans repasser par le paiement, débité sur la carte déjà utilisée.",
  },
  {
    stat: "5,0 ★",
    heading: "Note sur Shopify",
    body: "Plus de 70 avis marchands, aucun placement payant. L’app de modification de commande la mieux notée de l’App Store.",
  },
];

export function MetricsStrip() {
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
              key={r.stat}
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
