"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LOCALE_COOKIE, LOCALE_META, locales, type Locale } from "@/i18n/config";
import { useDict, useLocale } from "@/i18n/I18nProvider";
import { cn } from "@/lib/utils";

/** Same page in another language; remembers the choice so IP detection won't override it. */
function switchTo(next: Locale, pathname: string) {
  document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
  const rest = pathname.replace(/^\/[a-z]{2}(?=\/|$)/, "");
  window.location.assign(`/${next}${rest}${window.location.search}${window.location.hash}`);
}

export function LanguageSwitcher({ className, align = "right" }: { className?: string; align?: "left" | "right" }) {
  const locale = useLocale();
  const t = useDict();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.common.language}: ${LOCALE_META[locale].label}`}
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-border bg-white px-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
      >
        <Globe className="h-4 w-4" aria-hidden />
        <span className="uppercase">{locale}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} aria-hidden />
      </button>
      {open && (
        <ul
          role="listbox"
          aria-label={t.common.language}
          className={cn(
            "absolute top-full z-50 mt-2 min-w-[11rem] overflow-hidden rounded-xl border border-border bg-white py-1 shadow-[0_12px_32px_rgb(0,0,0,0.12)]",
            align === "right" ? "right-0" : "left-0"
          )}
        >
          {locales.map((l) => (
            <li key={l} role="option" aria-selected={l === locale}>
              <button
                type="button"
                lang={l}
                onClick={() => (l === locale ? setOpen(false) : switchTo(l, pathname))}
                className={cn(
                  "flex w-full items-center justify-between gap-3 px-3.5 py-2 text-left text-sm transition-colors hover:bg-muted",
                  l === locale ? "font-semibold text-foreground" : "text-foreground/75"
                )}
              >
                <span>{LOCALE_META[l].label}</span>
                {l === locale && <Check className="h-4 w-4 text-primary" aria-hidden />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
