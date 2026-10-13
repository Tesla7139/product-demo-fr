"use client";

import { CreditCard } from "lucide-react";
import type { Addr } from "./DemoMock";
import { useDict, useFormat } from "@/i18n/I18nProvider";

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-[14px] font-bold text-neutral-900">{label}</div>
      <div className="mt-1.5 space-y-0.5 text-[13.5px] leading-relaxed text-neutral-600">{children}</div>
    </div>
  );
}

/** Shopify-style "Order details" summary (contact, payment, addresses, shipping method). */
export function OrderDetails({
  addr,
  email,
  phone,
  country,
  amount,
}: {
  addr: Addr;
  email: string;
  phone: string;
  country: string;
  amount: string;
}) {
  const dict = useDict();
  const t = dict.checkout.orderDetails;
  const { fill } = useFormat();
  const lines = [
    `${addr.first} ${addr.last}`,
    addr.line1,
    fill(dict.demo.cityLine, { city: addr.city, state: addr.state, zip: addr.zip }),
    country,
    phone,
  ];

  return (
    <div className="rounded-xl border border-border p-5">
      <h3 className="text-[17px] font-bold text-neutral-900">{t.title}</h3>
      <div className="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        <Block label={t.contact}>
          <div>{email}</div>
        </Block>
        <Block label={t.payment}>
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-9 shrink-0 items-center justify-center rounded border border-border bg-neutral-50">
              <CreditCard className="size-4 text-neutral-400" />
            </span>
            <span className="text-neutral-700">•••• 1 · {amount}</span>
          </div>
        </Block>
        <Block label={t.shippingAddress}>
          {lines.map((l, i) => <div key={i}>{l}</div>)}
        </Block>
        <Block label={t.billingAddress}>
          {lines.map((l, i) => <div key={i}>{l}</div>)}
        </Block>
        <Block label={t.shippingMethod}>
          <div>{t.standard}</div>
        </Block>
      </div>
    </div>
  );
}
