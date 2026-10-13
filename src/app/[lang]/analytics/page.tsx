import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, LineChart, PiggyBank, PackageCheck, ExternalLink } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/ui/button";
import { AnalyticsMock } from "@/components/sections/demo/AnalyticsMock";
import { mockStoreFor } from "@/lib/site";
import { hasLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const APP_URL = "https://apps.shopify.com/clickpost-order-edit-cancel";

export async function generateMetadata({ params }: PageProps<"/[lang]/analytics">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const t = getDictionary(lang).pages.analytics;
  return { title: t.metaTitle, description: t.metaDescription };
}

// Icons for dict.pages.analytics.highlights (same order).
const HIGHLIGHT_ICONS = [PiggyBank, LineChart, PackageCheck];

export default async function AnalyticsPage({ params }: PageProps<"/[lang]/analytics">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const t = dict.pages.analytics;
  const mockStore = mockStoreFor(lang, dict.demo);
  const highlights = t.highlights.map((h, i) => ({ ...h, icon: HIGHLIGHT_ICONS[i] }));

  return (
    <div className="min-h-screen bg-[#121314] pb-6 pt-12 text-white">
      <section className="relative overflow-hidden pb-8 pt-20 md:pt-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-eyebrow text-primary">{t.eyebrow}</span>
            <h1
              className="text-display mt-4 text-balance text-white"
              style={{ fontSize: "clamp(2.25rem,5vw,3.5rem)" }}
            >
              {t.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              {t.intro}
            </p>
          </div>
        </Container>
      </section>

      {/* dashboard preview */}
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="rounded-[1.75rem] bg-gradient-to-br from-[#1c3b34] via-[#14524a] to-[#0d9488] p-3 shadow-2xl sm:p-5">
            <AnalyticsMock store={mockStore} />
          </div>
          <p className="mt-3 text-center text-xs text-white/40">
            {t.sampleNote}
          </p>
        </div>
      </Container>

      {/* what you can track */}
      <Container>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-white/12 bg-white/5 p-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#0d9488]/20 text-[#5eead4]">
                <Icon className="size-5" />
              </span>
              <h2 className="text-h3 mt-4 text-white">{title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </Container>

      {/* CTA */}
      <Container>
        <div className="my-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/15 bg-white/5 p-8 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-h3 text-white">{t.ctaTitle}</h2>
            <p className="mt-1 text-sm text-white/60">
              {t.ctaBody}
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href={APP_URL} target="_blank" rel="noreferrer">
                {t.install} <ExternalLink className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-white/25 bg-transparent text-white hover:bg-white/10">
              <Link href={`/${lang}#contact`}>
                {t.bookDemo} <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
