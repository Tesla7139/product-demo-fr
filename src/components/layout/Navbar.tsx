"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { mainNavFor } from "@/lib/site";
import { cn } from "@/lib/utils";
import { useDict, useHref } from "@/i18n/I18nProvider";

const SHOPIFY_LISTING = "https://apps.shopify.com/clickpost-order-edit-cancel";

export function Navbar() {
  const t = useDict();
  const href = useHref();
  const mainNav = mainNavFor(t.site);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // links to the hero demo (#demo) also shake the store-URL input to prompt a link
  const fireDemoShake = (path: string) => {
    if (path.endsWith("#demo")) window.dispatchEvent(new CustomEvent("demo:shake"));
  };

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur-xl transition-shadow duration-300",
        scrolled ? "border-border shadow-[0_4px_20px_rgb(0,0,0,0.05)]" : "border-border/60"
      )}
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6">
          <nav className="flex w-full items-center gap-3 py-4 lg:gap-5" aria-label={t.layout.navbar.ariaLabel}>
            <div className="pl-0.5">
              <Logo className="h-5" />
            </div>

            {/* Desktop links */}
            <div
              className="hidden items-center gap-1 lg:ml-auto lg:flex"
              onMouseLeave={() => setOpenGroup(null)}
            >
              {mainNav.map((item) =>
                item.items ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setOpenGroup(item.label)}
                  >
                    <button
                      className="flex items-center gap-1 whitespace-nowrap rounded-full px-3 py-2 text-[0.85rem] font-medium text-foreground/85 transition-colors hover:text-foreground"
                      aria-expanded={openGroup === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform duration-200",
                          openGroup === item.label && "rotate-180"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {openGroup === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute left-0 top-full w-64 pt-3"
                        >
                          <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-soft-xl">
                            {item.items.map((sub) => (
                              <a
                                key={sub.label}
                                href={href(sub.href)}
                                className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-background-muted"
                              >
                                <div className="text-sm font-medium text-foreground">
                                  {sub.label}
                                </div>
                                {sub.desc && (
                                  <div className="text-xs text-muted-foreground">{sub.desc}</div>
                                )}
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <a
                    key={item.label}
                    href={href(item.href)}
                    onClick={() => fireDemoShake(item.href)}
                    className="whitespace-nowrap rounded-full px-3 py-2 text-[0.85rem] font-medium text-foreground/85 transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                )
              )}
            </div>

            {/* Right actions */}
            <div className="hidden items-center gap-2.5 lg:flex">
              <LanguageSwitcher align="right" />
              <a
                href={SHOPIFY_LISTING}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-full bg-[#155FFF] px-5 py-2.5 text-[0.85rem] font-semibold text-white transition-all hover:brightness-110 active:scale-[0.98]"
              >
                {t.layout.navbar.cta}
              </a>
            </div>

            {/* Mobile: single Product Tour link (taps the hero demo + shakes the input) + language */}
            <div className="ml-auto flex min-w-0 items-center gap-1 lg:hidden">
              <a
                href={href("/#demo")}
                onClick={() => fireDemoShake("/#demo")}
                className="min-w-0 truncate rounded-full px-2 py-2 text-[0.9rem] font-semibold text-foreground transition-colors hover:text-primary sm:px-4"
              >
                {t.layout.navbar.mobileTour}
              </a>
              <LanguageSwitcher align="right" className="shrink-0" />
            </div>
          </nav>
      </div>
    </motion.header>
  );
}
