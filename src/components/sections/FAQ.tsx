"use client";

import { Container } from "@/components/primitives/Container";
import { SectionHeading } from "@/components/primitives/SectionHeading";
import { AnimatedReveal } from "@/components/primitives/AnimatedReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDict } from "@/i18n/I18nProvider";

export function FAQ() {
  const t = useDict();
  const faqs = t.site.faqs;
  return (
    <section id="faq" className="py-20 md:py-28">
      <Container className="max-w-3xl">
        <SectionHeading eyebrow={t.sections.faq.eyebrow} title={t.sections.faq.title} />
        <AnimatedReveal className="mt-10">
          <Accordion type="single" collapsible defaultValue="item-0">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedReveal>
      </Container>
    </section>
  );
}
