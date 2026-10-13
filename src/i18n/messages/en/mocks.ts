// Product-UI mocks: the hero browser animation, the analytics dashboard, the
// post-purchase / thank-you upsell screens. Placeholders in {braces} are filled
// at runtime (names, prices, counts); order IDs and amounts live in code.
export const mocks = {
  /** Shared bits of the fake browser chrome. */
  browser: {
    /** Path appended to the store domain in mock URL bars. */
    orderPath: "/order",
  },

  heroPhone: {
    confirmation: "Confirmation #{id}",
    orderConfirmed: "Order confirmed",
    thankYouReceipt: "Thank you, {name}! A receipt is on its way.",
    thankYou: "Thank you, {name}!",
    editTitle: "Make changes to your order",
    editWindow: "You can make changes for another",
    /** Countdown, picked by the language's plural rule for the minute count. */
    countdown: {
      one: "{m} minute and {s} seconds",
      other: "{m} minutes and {s} seconds",
    },
    options: {
      contact: "Change Contact Information",
      address: "Edit Shipping Address",
      items: "Update your order",
      discount: "Apply Discount Code",
      cancel: "Cancel Your Order",
    },
    addressTitle: "Edit shipping address",
    fields: {
      address: "Address 1",
      city: "City",
      zip: "Postal code",
    },
    saveAddress: "Save address",
    addressSaved: "Address saved",
    upsellTitle: "You may also like these products",
    upsellSub: "Frequently bought together — ships in the same box.",
    add: "Add to order",
    added: "Added",
    syncing: "Syncing with your order…",
    analyticsTitle: "Your impact this month",
    analyticsSub: "Updated in real time",
    revenueAdded: "Revenue added",
    aovLift: "AOV lift",
    weeklyRevenue: "Upsell revenue / week",
    metrics: {
      upsellRevenue: "Upsell revenue",
      upsellsAccepted: "Upsells accepted",
      ticketsDeflected: "Tickets deflected",
    },
    summary: "Order summary",
    subtotal: "Subtotal",
    shipping: "Shipping",
    shippingFree: "FREE",
    total: "Total",
    /** Item already in the sample order. */
    mainItem: "Merino Wool Crew",
    /** Upsell offers; the first one gets added to the order. */
    upsells: ["Everyday Tote", "Trail Runner 2.0", "Wool Beanie"],
  },

  analytics: {
    title: "Analytics",
    /** Date-range picker: {from} / {to} are formatted dates. */
    dateRange: "{from} – {to}",
    tabs: {
      overview: "Overview",
      edits: "Edit Activity",
      upsell: "Upsell",
    },
    totalEdits: "Total Edits",
    ofTotalOrders: "{pct} of total orders",
    supportSavings: "Support Cost Savings",
    avgSaved: "{amount} avg saved per edit",
    upsellRevenueAdded: "Upsell Revenue Added",
    fromUpsells: "From {count} completed upsells",
    previousPeriod: "Previous period",
    /** "Total 42 edits out of 102 orders" — the two counts are bold. */
    editsSummary: {
      before: "Total ",
      edits: "{count} edits",
      middle: " out of ",
      orders: "{count} orders",
      after: "",
    },
    breakdown: {
      addressChanged: "Address Changed",
      contactUpdated: "Contact Updated",
      quantityChanged: "Quantity Changed",
      itemsAdded: "Items Added (Upsell)",
      orderCancelled: "Order Cancelled",
      discountApplied: "Discount Applied",
    },
    ofEdits: "{pct} of edits",
    distribution: "Edit Type Distribution",
    cancellationReasons: "Cancellation Reasons",
    /** Filter chip: label + count. */
    filterCount: "{label} ({count})",
    filters: {
      all: "All",
      prepaid: "Prepaid",
      cod: "COD",
    },
    reasons: {
      changedMind: "Changed my mind",
      mistake: "Ordered by mistake",
      cheaper: "Found it cheaper elsewhere",
      slow: "Delivery too slow",
    },
    upsellRevenue: "Upsell Revenue",
    upsellConversion: "Upsell Conversion",
    ofEligible: "of eligible orders",
    avgPerUpsell: "Avg Revenue Per Upsell",
    itemsAdded: "Items Added: {count}",
    revenueOverTime: "Upsell Revenue Over Time",
    topProducts: "Top {count} Upsell Products",
    sold: "{count} sold",
    emptyTitle: "No Items found",
    emptySub: "Try changing the filters or search term",
  },

  oneTapUpsell: {
    eyebrow: "One-tap upsell · {name}",
    title: "Turn the thank-you page into your best offer",
    body: "Right after checkout, show an exclusive deal customers add with a single tap — charged to the card they just used. No new checkout, no re-entering details.",
    bullets: [
      "One tap — no re-payment or re-checkout",
      "A countdown creates real urgency",
      "Set the discount and rules you want",
    ],
    /** Fake domain built from the store name ({slug} = name, lowercased, no spaces). */
    storeDomain: "{slug}.com",
    confirmation: "Confirmation #{id}",
    paid: "· You’ve paid for your order",
    beforeYouGo: "{name}, before you go!",
    limitedTime: "Add this for a limited time",
    offerOf: "Offer {n} of {total}",
    addOnProduct: "Add-on product",
    shipping: "Shipping",
    shippingValue: "Free",
    taxes: "Taxes",
    taxesValue: "Free",
    addToOrder: "Add to order · {price}",
    tap: "tap",
    skip: "Skip Offer",
    footnote: "One tap to add — no card or re-checkout needed.",
  },

  oneTapUpsellMock: {
    confirmation: "Confirmation #{id}",
    thankYou: "Thank you, {name}!",
    viewConfirmation: "View order confirmation ›",
    beforeYouGo: "{name}, before you go!",
    limitedTime: "Your order is confirmed but you can still add the following for a limited time",
    dontMissOut: "Don't miss out — this offer expires when you leave this page!",
    offerOf: "Offer {n} of {total}",
    addOnProduct: "Add-on product",
    size: "Size",
    shipping: "Shipping",
    shippingValue: "Free",
    taxes: "Taxes",
    taxesValue: "Free",
    addedToOrder: "Added to your order",
    addToOrder: "Add to order · {price}",
    skip: "Skip Offer",
  },

  thankYouMap: {
    shippingAddress: "Shipping address",
    /** City + region on the map card. */
    place: "{city}, {region}",
    confirmed: "Your order is confirmed",
    emailSoon: "You'll receive a confirmation email soon",
    /** Followed by the "shop" wordmark. */
    trackWith: "Download to track with",
  },

  thankYouProducts: {
    completeOrder: "Complete your order",
    recommended: "Recommended for you",
    add: "Add · {price}",
    orderConfirmed: "Order #{id} confirmed",
    thankYou: "Thank you, {name}!",
    youMayAlsoLike: "You may also like these products",
  },

  thankYouUpsell: {
    addToOrder: "Add to order",
    decrease: "Decrease",
    increase: "Increase",
    unlocked: "You've unlocked free shipping!",
    unlockPrompt: "Unlock free shipping by adding best sellers.",
    applied: "Free shipping applied to your order.",
    /** "$12 away from free shipping." — {amount} is bold. */
    away: { before: "", amount: "{amount}", after: " away from free shipping." },
    addMore: "Add More Items",
    exploreAll: "Explore all products",
  },

  tooGoodToMiss: {
    title: "Too good to miss!",
    /** Discount badge; {pct} is a formatted percentage. */
    badge: "{pct} OFF",
    add: "Add · {price}",
  },
};
