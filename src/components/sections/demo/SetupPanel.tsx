"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronsUpDown } from "lucide-react";
import { useDict } from "@/i18n/I18nProvider";

// Stable ids — labels come from the dictionary (t.tour.setupPanel).
const TIME_OPTIONS = ["min15", "min30", "h1", "h2", "h4", "h6", "h12", "d1"] as const;
type TimeOption = (typeof TIME_OPTIONS)[number];

const TABS = ["window", "untilShipped", "custom"] as const;

const EDIT_OPTIONS = ["shipping", "contact", "order", "discount", "cancel"] as const;

/** Merchant "enable order editing" setup card (default window: 15 minutes). */
export function SetupPanel({
  onBack,
  onSkip,
  onNext,
  className,
}: {
  onBack?: () => void;
  onSkip?: () => void;
  onNext?: () => void;
  className?: string;
}) {
  const t = useDict().tour.setupPanel;
  const [tab, setTab] = useState<(typeof TABS)[number]>("window");
  const [timeLimit, setTimeLimit] = useState<TimeOption>("min15");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [allowed, setAllowed] = useState<Record<string, boolean>>({
    shipping: true,
    contact: true,
    order: true,
    discount: false,
    cancel: false,
  });

  return (
    <div
      className={`w-full max-w-md rounded-2xl border border-border bg-white p-6 text-left shadow-soft-xl ${className ?? ""}`}
    >
      <h3 className="text-base font-bold text-neutral-900">
        {t.title}
      </h3>

      <div className="mt-4 flex items-center gap-2 rounded-lg bg-emerald-100 px-3 py-3 text-sm font-medium text-emerald-800">
        <Check className="size-4" strokeWidth={3} />
        {t.enabled}
      </div>

      <h4 className="mt-6 text-sm font-bold text-neutral-900">
        {t.selectWindow}
      </h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {TABS.map((id) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            className={`rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
              tab === id
                ? "border-neutral-300 bg-neutral-200 text-neutral-900"
                : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50"
            }`}
          >
            {t.tabs[id]}
          </button>
        ))}
      </div>

      <AnimatePresence initial={false}>
        {tab === "window" && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-visible"
          >
            <div className="mt-4">
              <span className="text-sm text-neutral-500">{t.selectTimeLimit}</span>
              <div className="relative mt-1.5">
                <button
                  onClick={() => setDropdownOpen((v) => !v)}
                  className={`flex w-full items-center justify-between rounded-md border bg-neutral-50 px-4 py-2.5 text-sm text-neutral-800 ${
                    dropdownOpen ? "border-blue-500 ring-2 ring-blue-500/30" : "border-border"
                  }`}
                >
                  {t.timeOptions[timeLimit]}
                  <ChevronsUpDown className="size-4 text-neutral-500" />
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.15 }}
                      className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md border border-neutral-300 bg-white py-1 shadow-soft-xl"
                    >
                      {TIME_OPTIONS.map((opt) => (
                        <li key={opt}>
                          <button
                            onClick={() => {
                              setTimeLimit(opt);
                              setDropdownOpen(false);
                            }}
                            className={`block w-full px-4 py-2 text-left text-sm transition-colors ${
                              opt === timeLimit
                                ? "bg-blue-600 text-white"
                                : "text-neutral-800 hover:bg-neutral-100"
                            }`}
                          >
                            {t.timeOptions[opt]}
                          </button>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <h4 className="mt-6 text-sm font-bold text-neutral-900">{t.allowEdit}</h4>
      <div className="mt-3 flex flex-col gap-3">
        {EDIT_OPTIONS.map((key) => {
          const on = allowed[key];
          return (
            <button
              key={key}
              onClick={() => setAllowed((p) => ({ ...p, [key]: !p[key] }))}
              className="flex items-center gap-3 text-left text-sm text-neutral-800"
            >
              <span
                className={`flex size-6 shrink-0 items-center justify-center rounded-md border transition-colors ${
                  on ? "border-neutral-900 bg-neutral-900" : "border-neutral-300 bg-white"
                }`}
              >
                {on && <Check className="size-4 text-white" strokeWidth={3} />}
              </span>
              {t.editOptions[key]}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
        <button
          onClick={onBack}
          className="rounded-md px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
        >
          {t.back}
        </button>
        <div className="flex gap-2">
          <button
            onClick={onSkip ?? onNext}
            className="rounded-md border border-border px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
          >
            {t.skip}
          </button>
          <button
            onClick={onNext}
            className="rounded-md bg-neutral-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-[0.98]"
          >
            {t.next}
          </button>
        </div>
      </div>
    </div>
  );
}
