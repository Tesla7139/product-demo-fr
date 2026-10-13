"use client";

import { Container } from "@/components/primitives/Container";
import { GuidedEditor } from "@/components/sections/demo/GuidedEditor";
import { useMemo } from "react";
import { mockStoreFor } from "@/lib/site";
import { useDict, useLocale } from "@/i18n/I18nProvider";

export function ProductTourSection() {
  const t = useDict();
  const locale = useLocale();
  const mockStore = useMemo(() => mockStoreFor(locale, t.demo), [locale, t.demo]);
  const s = t.sections.productTour;
  return (
    <section id="product-tour" className="py-20 md:py-28">
      <Container>
        {/* section header */}
        <div className="mb-14 text-center">
          <p className="text-eyebrow mb-3 text-primary">{s.eyebrow}</p>
          <h2
            className="font-sans font-extrabold uppercase tracking-tight text-foreground"
            style={{ fontSize: "clamp(2rem, 3.6vw, 3rem)", lineHeight: 0.98 }}
          >
            {s.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            {s.subtitle}
          </p>
        </div>

        <GuidedEditor store={mockStore} />
      </Container>
    </section>
  );
}
