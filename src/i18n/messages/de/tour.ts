import type { Dict } from "../en";

export const tour: Dict["tour"] = {
  guidedEditor: {
    heading: "Klicken Sie auf eine Funktion, um sie live zu sehen.",
    chooseFeature: "Funktion wählen",
    startTour: "Tour starten",
    startTrial: "Gratis testen",
    domainPattern: "{name}.de",
    features: {
      editing: "Bestelländerung",
      upsell: "Post-Purchase-Upsell",
      address: "Adressprüfung",
      euWithdrawal: "EU-Widerruf",
      cancel: "Stornierung",
    },
    editViews: {
      thankyou: "Danke-Seite",
      orderstatus: "Bestellstatus",
    },
    upsellViews: {
      onetap: "One-Tap-Upsell",
      thankyou: "Bestellstatus",
    },
    next: "Weiter",
    finish: "Fertig",
    steps: {
      window: {
        title: "Ihr Bearbeitungsfenster",
        desc: "Kunden können ihre Bestellung in einem von Ihnen festgelegten Zeitraum ändern – ganz ohne Support-Ticket.",
      },
      addrShow: {
        title: "Änderungen per Self-Service",
        desc: "Die Adresse ist in Sekunden geändert. Tippen Sie auf die Adresse, um die korrigierte einzufügen, und dann auf Aktualisieren – schon ist sie mit Ihrem Shop synchronisiert.",
      },
      orderAdd: {
        title: "Artikel hinzufügen oder ändern",
        desc: "Einen mehr, tauschen oder entfernen. Tippen Sie auf +, um die Menge zu erhöhen, und dann auf Bestellung aktualisieren – der neue Gesamtbetrag steht sofort da.",
      },
      upsellOffer: {
        title: "Mit einem Tipp dazu",
        desc: "Ein einmaliges Angebot direkt nach der Zahlung – ein Tipp auf Hinzufügen, und es wird über die hinterlegte Karte abgerechnet, ohne erneuten Checkout.",
      },
      tyShip: {
        title: "Anstoß zum Gratisversand",
        desc: "Auf der Bestellstatusseite sehen Kunden, dass ihnen nur noch ein Bestseller bis zum kostenlosen Versand fehlt. Ein Tipp auf Hinzufügen, und er landet in der Bestellung.",
      },
      tyShow: {
        title: "Mehr hinzufügen, direkt hier",
        desc: "Empfehlen Sie Extras auch auf der Bestellstatusseite. Ein Tipp auf Hinzufügen, und es landet in der Bestellung – den Restbetrag zahlen Kunden am Ende.",
      },
      addrFlagged: {
        title: "Fehlerhafte Adressen? Erkannt.",
        desc: "Unzustellbare oder unvollständige Adressen werden vor dem Versand markiert – Kunden übernehmen die korrigierte, zustellbare Adresse mit einem Tipp.",
      },
      addrUpdate: {
        title: "Korrigierte Adresse speichern",
        desc: "Ein Tipp auf Lieferadresse aktualisieren, und die geprüfte, zustellbare Adresse steht fest in der Bestellung – keine Fehlzustellung, keine Rücksendung an den Absender.",
      },
      euCard: {
        title: "EU-Widerruf, integriert",
        desc: "Ab dem 19. Juni 2026 brauchen Kunden in der EU eine klare Widerrufsfunktion. „Vertrag widerrufen“ sitzt direkt auf der Bestellstatusseite – antippen, bestätigen, und die Eingangsbestätigung geht sofort per E-Mail raus.",
      },
      euFinish: {
        title: "EU-Widerruf, startklar",
        desc: "Ein rechtskonformer, sauber gesteuerter Widerrufsprozess, der die Bestellung anhält und Ihrem Team die Kontrolle lässt.",
      },
    },
    euOutcome: {
      headline: "EU-Widerruf, startklar",
      button: "Widerrufsfunktion jetzt für meinen Shop aktivieren",
    },
    intros: {
      editing: "Kunden ändern ihre Bestellungen selbst – Artikel tauschen, Extras, Mengen – ganz ohne Support-Ticket.",
      upsell: "Angebote mit einem Tipp direkt nach dem Checkout, die den Warenkorbwert steigern – ohne einen Euro mehr Werbebudget.",
      address: "Erkennen Sie unzustellbare Adressen vor dem Versand – weniger Fehlzustellungen und Retouren.",
      euWithdrawal: "Automatisieren Sie EU-Widerrufe und bleiben Sie rechtskonform – ganz ohne manuellen Aufwand.",
    },
    readyToTry: {
      before: "Bereit für {action} in ",
      highlight: "Ihrem Shop",
      after: "?",
    },
    finale: {
      editing: {
        action: "weniger Support-Tickets",
      },
      upsell: {
        action: "einen höheren Warenkorbwert",
      },
      address: {
        action: "weniger Fehlzustellungen",
      },
      euWithdrawal: {
        action: "volle EU-Konformität",
      },
      cancel: {
        action: "stressfreie Stornierungen",
      },
    },
  },
  tourOverlay: {
    close: "Schließen",
    upNext: "Als Nächstes",
    next: "Weiter",
    finalHeadline: "Bereit, mit CP Order Editing Support-Tickets zu senken und den Warenkorbwert zu steigern?",
    defaultHeadline: "Sie haben es in Aktion gesehen – starten Sie jetzt Ihre kostenlose Testphase.",
    seenIt: "Sie haben es in Aktion gesehen",
    watchNext: "Als Nächstes: {feature}",
    tapHere: "hier tippen",
    closeTour: "Tour beenden",
  },
  setupPanel: {
    title: "Lassen Sie Kunden ihre Bestellung nach dem Checkout ändern",
    enabled: "Bestelländerungen sind jetzt für Kunden aktiviert.",
    selectWindow: "Legen Sie fest, wie lange Kunden ihre Bestellung ändern können",
    tabs: {
      window: "Zeitlimit",
      untilShipped: "Bis zum Versand",
      custom: "Individuell",
    },
    selectTimeLimit: "Zeitlimit wählen",
    timeOptions: {
      min15: "15 Minuten",
      min30: "30 Minuten",
      h1: "1 Stunde",
      h2: "2 Stunden",
      h4: "4 Stunden",
      h6: "6 Stunden",
      h12: "12 Stunden",
      d1: "1 Tag",
    },
    allowEdit: "Kunden dürfen ändern:",
    editOptions: {
      shipping: "Lieferadresse",
      contact: "Kontaktdaten",
      order: "Bestellinhalt",
      discount: "Rabattcodes",
      cancel: "Stornierung",
    },
    back: "Zurück",
    skip: "Überspringen",
    next: "Weiter",
  },
  demoExperience: {
    closePreview: "Vorschau schließen",
    fallbackName: "Ihr Shop",
    domainPattern: "{name}.de",
    loading: {
      ready: "Bereit",
      brandLoading: "Markendetails werden geladen",
      isReady: "{label} ist bereit",
      building: "{label} wird erstellt",
      storeReady: "Ihr Shop ist bereit",
      finalizing: "Markendetails werden finalisiert",
      allSet: "Alles bereit",
      styling: "Wichtige Momente werden gestaltet",
      preparing: "Ihre Demo für {label} wird vorbereitet",
      openingNow: "Alles bereit. Ihre persönliche Vorschau öffnet sich jetzt.",
      openingSoon: "Wir öffnen die Demo schon jetzt und vervollständigen die restlichen Markendetails im Hintergrund.",
      ticketsHeading: "Tickets, die Ihre Kunden nicht mehr eröffnen müssen",
    },
    tickets: [
      { subject: "Kann ich den Liefertermin ändern?", email: "anna.koch@web.de", time: "vor 22 Min." },
      { subject: "Falsch bestellt – zu spät zum Ändern?", email: "tobias.becker@gmail.com", time: "vor 25 Min." },
      { subject: "E-Mail-Adresse im Checkout vertippt", email: "nina.s@gmx.de", time: "vor 31 Min." },
      { subject: "Ich möchte noch einen Artikel hinzufügen", email: "jonas.m@gmail.com", time: "vor 34 Min." },
      { subject: "Falsche Größe – kann ich tauschen?", email: "lea.f@outlook.de", time: "vor 39 Min." },
      { subject: "Rabattcode vergessen", email: "markus.d@gmail.com", time: "vor 42 Min." },
      { subject: "Ich möchte meine Bestellung stornieren", email: "sarah.p@t-online.de", time: "vor 47 Min." },
    ],
    welcome: {
      welcomeTo: "Willkommen bei",
      brandedPreview: "Ihrer persönlichen Vorschau",
      clickAnywhere: "Zum Entdecken irgendwo klicken",
    },
    reviews: {
      heading: "Beliebt bei schnell wachsenden Marken",
      subheading: "Was Shopify-Händler über Clickpost sagen.",
      seeAll: "Alle 70+ Bewertungen ansehen",
    },
  },
  demoUrlInput: {
    label: "URL Ihres Shops",
    placeholder: "z. B. ihr-shop.de",
    generating: "Wird erstellt …",
    seeItLive: "Live ansehen",
  },
  badges: {
    builtForShopify: "Built for Shopify",
    availableOn: "Erhältlich im",
    availableOnAria: "Erhältlich im Shopify App Store",
  },
};
