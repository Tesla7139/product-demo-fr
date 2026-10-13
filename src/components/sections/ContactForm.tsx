"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Loader2, Mail, Sparkles } from "lucide-react";
import { Container } from "@/components/primitives/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { useDict } from "@/i18n/I18nProvider";

type Errors = Partial<Record<"name" | "email" | "company", string>>;

export function ContactForm() {
  const c = useDict().sections.contactForm;
  const [status, setStatus] = useState<"idle" | "submitting" | "done">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const company = String(data.get("company") || "").trim();
    const next: Errors = {};
    if (!name) next.name = c.errors.name;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) next.email = c.errors.email;
    if (!company) next.company = c.errors.company;
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("submitting");
    // mock submit
    setTimeout(() => setStatus("done"), 1100);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* left: value props */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <span className="text-eyebrow text-primary">{c.eyebrow}</span>
            <h2 className="text-h2 mt-3 text-balance">{c.title}</h2>
            <p className="mt-4 max-w-md text-muted-foreground">
              {c.intro}
            </p>
            <ul className="mt-8 flex flex-col gap-3.5">
              {c.valuePoints.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-foreground/90">
                  <span className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="size-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* right: form card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="rounded-2xl border border-border bg-card p-7 shadow-soft-xl md:p-8"
          >
            {status === "done" ? (
              <div className="flex flex-col items-center gap-4 py-12 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Sparkles className="size-7" />
                </div>
                <h3 className="text-h3">{c.doneTitle}</h3>
                <p className="max-w-xs text-sm text-muted-foreground">
                  {c.doneBody}
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
                <Field label={c.nameLabel} name="name" placeholder={c.namePlaceholder} error={errors.name} />
                <Field
                  label={c.emailLabel}
                  name="email"
                  type="email"
                  placeholder={c.emailPlaceholder}
                  error={errors.email}
                />
                <Field label={c.companyLabel} name="company" placeholder={c.companyPlaceholder} error={errors.company} />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium">
                    {c.messageLabel} <span className="text-muted-foreground">{c.optional}</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder={c.messagePlaceholder}
                    className="rounded-md border border-border bg-background px-4 py-2.5 text-sm shadow-soft-sm transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:outline-none"
                  />
                </div>
                <Button type="submit" size="lg" className="mt-1 w-full" disabled={status === "submitting"}>
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> {c.sending}
                    </>
                  ) : (
                    <>
                      <Mail className="size-4" /> {c.submit}
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label}
      </label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={error ? "border-red-400" : undefined}
      />
      {error && (
        <span id={`${name}-error`} className="text-xs text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}
