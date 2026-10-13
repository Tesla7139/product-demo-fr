import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { IntegrationsGrid } from "@/components/sections/IntegrationsGrid";
import { Button } from "@/components/ui/button";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export async function generateMetadata({ params }: PageProps<"/[lang]/integrations">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).pages.integrations;
  return { title: t.metaTitle, description: t.metaDescription };
}

export default async function IntegrationsPage({ params }: PageProps<"/[lang]/integrations">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = getDictionary(lang).pages.integrations;

  return (
    <div className="bg-[#121314] text-white min-h-screen pt-12 pb-6">
      <section className="relative overflow-hidden pb-8 pt-20 md:pt-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-eyebrow text-primary">{t.eyebrow}</span>
            <h1 className="text-display mt-4 text-balance text-white" style={{ fontSize: "clamp(2.25rem,5vw,3.5rem)" }}>
              {t.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              {t.intro}
            </p>
          </div>
        </Container>
      </section>

      <IntegrationsGrid withHeading={false} />

      <Container>
        <div className="my-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/15 bg-white/5 p-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-h3 text-white">{t.ctaTitle}</h2>
            <p className="mt-1 text-sm text-white/60">
              {t.ctaBody}
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full">
            <Link href={`/${lang}#contact`}>
              {t.ctaButton} <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
