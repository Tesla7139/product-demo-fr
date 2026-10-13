// Guided demo: the feature rail + guided tour (GuidedEditor, TourOverlay), the
// demo modal (DemoExperience), the store-URL input, the merchant setup card and
// the Shopify badges.
export const tour = {
  guidedEditor: {
    heading: "Click a feature to run it live.",
    chooseFeature: "Choose a feature",
    startTour: "Start tour",
    startTrial: "Start free trial",
    /** Fake URL shown in the demo's browser bar. {name} = store name, lowercased, no spaces. */
    domainPattern: "{name}.com",
    /** Left-rail features. */
    features: {
      editing: "Order editing",
      upsell: "Post-purchase upsell",
      address: "Address validation",
      euWithdrawal: "EU withdrawal",
      cancel: "Cancellation",
    },
    /** Sub-tabs above the order-editing window. */
    editViews: {
      thankyou: "Thank you page",
      orderstatus: "Order status page",
    },
    /** Sub-tabs above the upsell window. */
    upsellViews: {
      onetap: "One tap upsell",
      thankyou: "Order status page",
    },
    /** Tour step buttons. */
    next: "Next",
    finish: "Finish",
    /** Guided-tour callout cards. */
    steps: {
      window: {
        title: "Your edit window",
        desc: "Customers can edit their order for a window you control — no support ticket needed.",
      },
      addrShow: {
        title: "Self-serve edits",
        desc: "Change the address in seconds. Tap the address to drop in the corrected one, then tap Update to sync it to your store.",
      },
      orderAdd: {
        title: "Add or change items",
        desc: "Add one more, swap, or remove. Tap + to bump the quantity, then Update your order to apply it — the new total is instant.",
      },
      upsellOffer: {
        title: "One tap to add",
        desc: "A one-time deal the instant they pay — tap Add and it's charged to the card on file, no re-checkout.",
      },
      tyShip: {
        title: "Nudge to free shipping",
        desc: "On the order status page, shoppers see they're one best-seller away from free shipping. Tap Add and it drops into their order.",
      },
      tyShow: {
        title: "Add more, right here",
        desc: "Recommend add-ons on the order status page too. Tap Add and it drops into their order — they settle the balance at the end.",
      },
      addrFlagged: {
        title: "We catch bad addresses",
        desc: "Undeliverable or incomplete addresses are flagged before the order ships — the shopper accepts the corrected, deliverable address in one tap.",
      },
      addrUpdate: {
        title: "Save the corrected address",
        desc: "Tap Update Shipping Address to lock in the verified, deliverable address on the order — no failed delivery, no return-to-origin.",
      },
      euCard: {
        title: "EU withdrawal, built in",
        desc: "From 19 June 2026, EU shoppers need a clear withdrawal function. 'Withdraw from contract' sits right on the order status page — tap it, then confirm, and it's acknowledged by email instantly.",
      },
      euFinish: {
        title: "EU-ready withdrawal",
        desc: "A compliant, well-routed withdrawal flow that holds the order and keeps your team in control.",
      },
    },
    /** Final conversion box of the EU-withdrawal tour. */
    euOutcome: {
      headline: "EU-ready withdrawal",
      button: "Get the EU withdrawal function for my store now",
    },
    /** One-line pitch on the "up next" hand-off box before each feature's tour. */
    intros: {
      editing: "Let shoppers edit their own orders — swaps, add-ons, quantities — without a support ticket.",
      upsell: "One-tap offers right after checkout that lift average order value with zero extra ad spend.",
      address: "Catch undeliverable addresses before they ship — fewer failed deliveries and RTO.",
      euWithdrawal: "Automate EU withdrawal requests and stay compliant with zero manual work.",
    },
    /** "Ready to {action} on your store?" box. {action} comes from `finale[feature].action`. */
    readyToTry: {
      before: "Ready to {action} on ",
      highlight: "your store",
      after: "?",
    },
    /** Per-feature CTA verb used in `readyToTry`. */
    finale: {
      editing: {
        action: "cut support tickets",
      },
      upsell: {
        action: "boost AOV",
      },
      address: {
        action: "stop failed deliveries",
      },
      euWithdrawal: {
        action: "stay EU-compliant",
      },
      cancel: {
        action: "handle cancellations",
      },
    },
  },
  tourOverlay: {
    close: "Close",
    upNext: "Up next",
    next: "Next",
    finalHeadline: "Ready to reduce support tickets and boost AOV using CP Order Editing?",
    defaultHeadline: "You've seen it in action — start your free trial now.",
    seenIt: "You've seen it in action",
    /** {feature} = next feature's label. */
    watchNext: "Watch next: {feature}",
    tapHere: "tap here",
    closeTour: "Close tour",
  },
  setupPanel: {
    title: "Let customers edit their orders after checkout",
    enabled: "Order editing is now enabled for customers.",
    selectWindow: "Select the time limit for customers to edit their orders",
    tabs: {
      window: "Time Limit",
      untilShipped: "Until Fulfilled",
      custom: "Custom",
    },
    selectTimeLimit: "Select Time Limit",
    timeOptions: {
      min15: "15 Minute",
      min30: "30 Minute",
      h1: "1 Hour",
      h2: "2 Hour",
      h4: "4 Hour",
      h6: "6 Hour",
      h12: "12 Hour",
      d1: "1 day",
    },
    allowEdit: "Allow customers to edit:",
    editOptions: {
      shipping: "Shipping Address",
      contact: "Change Contact Information",
      order: "Update Your Order",
      discount: "Discount Codes",
      cancel: "Cancellation",
    },
    back: "Back",
    skip: "Skip for now",
    next: "Next",
  },
  demoExperience: {
    closePreview: "Close preview",
    /** Store name used when the store's name couldn't be read. */
    fallbackName: "Your store",
    /** Fake URL in the laptop mock. {name} = store name, lowercased, no spaces. */
    domainPattern: "{name}.com",
    loading: {
      ready: "Ready",
      brandLoading: "Brand details loading",
      /** {label} = store domain or name. */
      isReady: "{label} is ready",
      building: "Building {label}",
      storeReady: "Your store is ready",
      finalizing: "Finalizing brand details",
      allSet: "All set",
      styling: "Styling key moments",
      preparing: "Preparing your {label} demo",
      openingNow: "All set. Opening your branded preview now.",
      openingSoon: "We can open the experience now and continue settling in the remaining brand details in the background.",
      ticketsHeading: "Tickets your shoppers won't need to open",
    },
    /** Scrolling sample support tickets (fictional shoppers). */
    tickets: [
      { subject: "Can I change delivery date?", email: "anna.ko@hotmail.com", time: "22m ago" },
      { subject: "Ordered wrong, too late to switch?", email: "tom.baker@gmail.com", time: "25m ago" },
      { subject: "Typed my email wrong on checkout", email: "nina.s@yahoo.com", time: "31m ago" },
      { subject: "Need to add an item to my order", email: "raj.m@gmail.com", time: "34m ago" },
      { subject: "Wrong size, can I swap it?", email: "lea.f@outlook.com", time: "39m ago" },
      { subject: "Forgot to apply my discount code", email: "mike.d@gmail.com", time: "42m ago" },
      { subject: "Want to cancel my order", email: "sara.p@yahoo.com", time: "47m ago" },
    ],
    welcome: {
      welcomeTo: "Welcome to",
      brandedPreview: "your branded preview",
      clickAnywhere: "Click anywhere to explore",
    },
    reviews: {
      heading: "Loved by fast-growing brands",
      subheading: "What Shopify merchants say about Clickpost.",
      seeAll: "See all 70+ reviews",
    },
  },
  demoUrlInput: {
    label: "Your store URL",
    placeholder: "Enter your store URL",
    generating: "Generating",
    seeItLive: "See it live",
  },
  badges: {
    builtForShopify: "Built for Shopify",
    /** Small line above "Shopify App Store" on the badge. */
    availableOn: "Available on",
    availableOnAria: "Available on the Shopify App Store",
  },
};
