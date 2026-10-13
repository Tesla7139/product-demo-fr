// Text for the landing-page sections in src/components/sections/ (not demo/ or HeroPhone).
export const sections = {
  hero: {
    /** Headline; `highlight` renders in brand blue between `before` and `after`. */
    title: { before: "Reduce Support Tickets and Add Thousands in ", highlight: "Upsell Revenue", after: "" },
    subtitle: "Enter your store URL to have a personalized demo tailored to your store.",
  },
  audienceSegments: {
    eyebrow: "Who it's for",
    title: "Built for the way you sell",
    learnMore: "Learn more",
  },
  contactForm: {
    eyebrow: "Talk to us",
    title: "See it on your store",
    intro: "Tell us a little about your store and we’ll put together a walkthrough tailored to your post-purchase flow.",
    valuePoints: [
      "Go live in minutes — no developer needed",
      "Works with your existing checkout & 3PL",
      "14-day free trial, cancel anytime",
    ],
    errors: {
      name: "Please enter your name",
      email: "Enter a valid work email",
      company: "Please enter your company",
    },
    doneTitle: "Thanks — we’ll be in touch",
    doneBody: "We’ll reach out shortly with a demo tailored to your store.",
    nameLabel: "Name",
    namePlaceholder: "Jane Doe",
    emailLabel: "Work email",
    emailPlaceholder: "jane@store.com",
    companyLabel: "Company",
    companyPlaceholder: "Your store",
    messageLabel: "Message",
    optional: "(optional)",
    messagePlaceholder: "What would you like to see?",
    sending: "Sending…",
    submit: "Request a demo",
  },
  customerLogos: {
    ariaLabel: "Brands working with us",
    reviewPending: "Verified Clickpost customer — review coming soon.",
  },
  demoShowcase: {
    eyebrow: "See it in action",
    title: "Self-serve order editing, start to finish",
    body: "Customers fix their own addresses, swap items, and accept upsells — right on your branded confirmation page. Every change syncs to your 3PL in real time, so orders ship right the first time and your team never touches a ticket.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions, answered",
  },
  featureShowcase: {
    eyebrow: "The platform",
    title: "Everything shoppers need to fix an order",
    subtitle: "Six capabilities that turn post-purchase chaos into self-service.",
    placeholder: "Placeholder",
  },
  globalReach: {
    eyebrow: "Every region, every order",
    title: "Orders getting saved around the world",
    subtitle: "Each ping is a shopper self-serving instead of opening a ticket.",
    editsHandled: "Edits handled",
    upsellRevenue: "Upsell revenue",
    cancellationsRecovered: "Cancellations recovered",
  },
  integrationsGrid: {
    eyebrow: "Integrations",
    title: "Plugs into your stack",
    subtitle: "Connect checkout, fulfillment, and marketing in a few clicks.",
    /** Filter-pill labels, keyed by the category ids used in src/lib/site.ts. */
    categories: {
      All: "All",
      iPaaS: "iPaaS",
      ERP: "ERP",
      "3PL": "3PL",
      WMS: "WMS",
      Shipping: "Shipping",
      Tech: "Tech",
    } as Record<string, string>,
    searchPlaceholder: "Search integrations...",
    noResults: "No integrations match your search.",
  },
  marsSpotlight: {
    badge: "Customer spotlight",
    tierBadge: "9-figure brand",
    titleLine1: "Mars By GHC scaled",
    titleLine2: "without scaling support.",
    intro: "A nine-figure Shopify brand turned their order confirmation page into a self-service hub. Their customers now fix their own orders — and add to them.",
    /** "{n}" is the formatted number, e.g. "200,000+". */
    figurePlus: "{n}+",
    stats: [
      {
        label: "orders self-edited",
        detail: "Customers corrected addresses, swapped variants, and applied discounts — without emailing support once.",
      },
      {
        label: "in upsell revenue",
        detail: "Generated directly on the post-purchase thank-you page. No ad spend. No new checkout friction.",
      },
      {
        label: "shoppers shown the edit option",
        detail: "Across every order confirmation — every one of them a potential support ticket that never happened.",
      },
    ],
    /** {date} = the review month, e.g. "January 2026". */
    reviewSource: "Mars By GHC — Shopify App Store, {date}",
    readReview: "Read their review",
  },
  metricsStrip: {
    results: [
      {
        /** {n} = formatted percentage, e.g. "42%". */
        stat: "{n}",
        heading: "Fewer support tickets",
        body: "Customers correct addresses, swap sizes, and cancel on their own — the problems that used to stack up in your inbox resolve themselves.",
      },
      {
        stat: "{n}",
        heading: "Higher average order value",
        body: "The thank-you page becomes your best upsell moment. Shoppers add with one tap, no re-checkout, charged to the card already on file.",
      },
      {
        /** {n} = formatted rating, e.g. "5.0". */
        stat: "{n} ★",
        heading: "Rated on Shopify",
        body: "70+ merchant reviews, no paid placement. The highest-rated order editing app on the App Store, start to finish.",
      },
    ],
  },
  pricing: {
    title: "Simple, transparent pricing",
    subtitle: "Choose the plan that fits your order volume. Start free, upgrade anytime.",
    monthly: "Monthly",
    annual: "Annual",
    perMonth: "/month",
    /** {from}/{to} = formatted order counts. */
    volume: "{from}–{to} orders/m",
    freeSub: "25 edits/upsells free every month",
    unlimitedSub: "unlimited order edits + upsells",
    trial: "14-day free trial",
    cta: "Try for free",
    billingNote: "All charges are billed in USD. Recurring and usage-based charges are billed every 30 days.",
    features: {
      allFeatures: "Access to all features",
      selfServe: "Self Service Order Editing",
      selfServeUnlimited: "Unlimited Self Service Order Editing",
      upsell: "Post Purchase Upsell (Increase AOV)",
      addressValidation: "Address Validation (powered by Google)",
      editingWindow: "Customizable editing window",
      addReplace: "Add/replace items",
      discountsRefunds: "Apply Discounts + Automated Refunds",
      chatSupport: "24*7 Chat Support",
      prioritySupport: "Priority Support - Chat + Slack",
      wms: "WMS/3PL Integrations",
      onboarding: "White glove onboarding",
      phoneSupport: "Phone-call Support",
      successManager: "Dedicated Success Manager",
    },
  },
  productTour: {
    eyebrow: "Interactive demo",
    title: "See every feature live",
    subtitle: "Pick any product tab and interact with a live demo — no sign-up required.",
  },
  resourceCallout: {
    title: "Go live in minutes, not sprints",
    body: "Install, set your editing window, and let shoppers take it from there.",
    seeDemo: "See your demo",
    bookDemo: "Book a demo",
  },
  setup: {
    eyebrow: "Setup",
    title: "You stay in control of the rules",
    body: "Decide how long shoppers can edit, and exactly what they’re allowed to change — no code, live in minutes.",
    points: [
      "Set an editing window by time or until fulfilled",
      "Toggle each action on or off",
      "Changes sync straight to your fulfillment stack",
    ],
  },
  testimonials: {
    /** Placeholder sample testimonials (not real merchant reviews). */
    items: [
      {
        quote: "Our support team stopped drowning in address-change emails. Shoppers just fix it themselves now.",
        name: "Sample Customer",
        role: "Head of CX · Placeholder Brand",
      },
      {
        quote: "Post-purchase upsells added a real bump to AOV without touching our checkout flow.",
        name: "Sample Customer",
        role: "Founder · Placeholder Co.",
      },
      {
        quote: "Edits sync straight to our 3PL, so the warehouse always ships the corrected order. No more chaos.",
        name: "Sample Customer",
        role: "Ops Lead · Placeholder Goods",
      },
    ],
    /** {n} = slide number. */
    goTo: "Go to testimonial {n}",
    previous: "Previous",
    next: "Next",
  },
  wallOfLove: {
    eyebrow: "Wall of Love",
    title: "Loved by fast-growing brands",
    subtitle: "See how merchants use Clickpost Order Editing to automate customer service and recover cart revenue.",
    folderLabel: "Wall of Love",
    seeAll: "See all 70+ reviews in our Love Gallery →",
  },
};
