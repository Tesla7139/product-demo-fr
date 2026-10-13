import type { Dict } from "../en";

export const site: Dict["site"] = {
  tagline: "Ihre Kunden korrigieren Bestellungen selbst.",
  nav: {
    productTour: "Produkttour",
    customerLove: "Kundenstimmen",
    reviews: "Bewertungen",
    reviewsDesc: "70+ Fünf-Sterne-Bewertungen von Händlern",
  },
  integrations: {
    Klaviyo: "Klaviyo und Order Editing synchronisieren Kundenereignisse für personalisierte E-Mail-Automationen.",
    Gorgias: "Die Gorgias-Integration zeigt Bestelländerungen direkt in Ihren Support-Tickets an.",
    Zendesk: "Die Zendesk-Integration liefert den Bestellkontext direkt in Ihrer Support-Plattform.",
    AfterSell: "AfterSell und Order Editing verbinden Post-Purchase-Upsells mit Bestelländerungen.",
    AfterShip: "AfterShip synchronisiert Tracking-Updates und markiert problematische Zustellungen.",
    "Loop Returns": "Mit der Loop-Returns-Integration tauschen Kunden Artikel direkt um.",
    Rebuy: "Rebuy liefert smarte Produktempfehlungen im Post-Purchase-Editor.",
    Recharge: "Mit Recharge ändern Kunden ihre Abo-Bestellungen ganz unkompliziert.",
    "SAP ERP": "Die SAP-Integration überträgt Bestellkorrekturen direkt in Ihr ERP-System.",
    ShipStation: "ShipStation synchronisiert Fulfillment-Status und Anpassungen an Versandetiketten.",
    "Shopify Flow": "Starten Sie Workflows automatisch, sobald eine Bestellung geändert oder storniert wird.",
    Unicommerce: "Halten Sie Ihr Lager synchron – damit immer die korrigierte Bestellung rausgeht.",
    Easycom: "Geänderte Bestellungen landen direkt in Ihrer Fulfillment-Pipeline.",
  },
  brandInfo: {
    Doonails: { tier: "Marke mit 100 Mio. $+", country: "Deutschland" },
    "Curl Warehouse": { tier: "7-stelliger Umsatz", country: "Kanada" },
    VanillaPura: { tier: "7-stelliger Umsatz", country: "Utah, USA" },
    "GHAR SOAPS": { tier: "8-stelliger Umsatz", country: "VAE" },
    MIRAGGIO: { tier: "8-stelliger Umsatz" },
    Mateina: { tier: "Andrew Hubermans Favorit", country: "Kanada" },
    "Mars By GHC": { tier: "7-stelliger Umsatz" },
    "Renue By Science": { country: "USA" },
  },
  features: [
    {
      eyebrow: "Bearbeitung",
      title: "Bestellungen selbst ändern",
      blurb: "Kunden korrigieren ihre Bestellung auf der Danke- und Bestellstatusseite – ganz ohne Ticket.",
      bullets: ["Artikel & Varianten tauschen", "Mengen anpassen", "Kontaktdaten aktualisieren"],
    },
    {
      eyebrow: "Adresse",
      title: "Adressprüfung integriert",
      blurb: "Erkennen Sie unzustellbare Adressen vor dem Versand – dank Prüfung über Google Maps.",
      bullets: ["Live-Adressvorschläge", "Riskante Zustellungen markieren", "Weniger Fehlzustellungen"],
    },
    {
      eyebrow: "Stornierungen",
      title: "Sofortige Stornos & Erstattungen",
      blurb: "Kunden stornieren innerhalb Ihres Zeitfensters – Erstattung oder Gutschrift laufen automatisch.",
      bullets: ["Automatische Erstattungen", "Option Shop-Guthaben", "Flexible Zeitfenster"],
    },
    {
      eyebrow: "Upsell",
      title: "Post-Purchase-Upsells",
      blurb: "Empfehlen Sie direkt nach dem Checkout das passende Extra und steigern Sie den Warenkorbwert.",
      bullets: ["Mit einem Tipp hinzufügen", "Smarte Empfehlungen", "Kein erneuter Checkout"],
    },
    {
      eyebrow: "Sync",
      title: "Immer synchron mit dem Fulfillment",
      blurb: "Jede Änderung geht an Ihren 3PL bzw. Ihr WMS – so verschickt das Lager immer das Richtige.",
      bullets: ["3PL-/WMS-Sync", "Updates in Echtzeit", "Keine doppelte Bearbeitung"],
    },
    {
      eyebrow: "Kontrolle",
      title: "Volle Kontrolle & lückenloses Protokoll",
      blurb: "Legen Sie Bearbeitungsfenster fest, bearbeiten Sie Bestellungen gesammelt und sehen Sie jede Änderung im Protokoll.",
      bullets: ["Bearbeitungsfenster", "Massenbearbeitung", "Vollständiges Änderungsprotokoll"],
    },
  ],
  segments: [
    { title: "D2C- & Shopify-Marken", blurb: "Geben Sie Kunden die Kontrolle und entlasten Sie Ihren Support vom ersten Tag an." },
    { title: "Händler mit hohem Volumen", blurb: "Automatisieren Sie Tausende Änderungen pro Monat – ohne das Support-Team zu vergrößern." },
    { title: "Marken mit 3PL / WMS", blurb: "Änderungen fließen direkt ins Fulfillment, damit das Lager verschickt, was bestellt wurde." },
  ],
  faqs: [
    {
      q: "Wie schnell bin ich live?",
      a: "Installieren Sie die App aus dem Shopify App Store, aktivieren Sie das App-Embed und legen Sie Ihr Bearbeitungsfenster fest. Die meisten Shops sind in wenigen Minuten live – ganz ohne Entwickler.",
    },
    {
      q: "Was können Kunden selbst ändern?",
      a: "Artikel, Varianten, Mengen, Lieferadresse und Kontaktdaten – dazu Stornierungen per Self-Service mit automatischer Erstattung oder Gutschrift, alles innerhalb des von Ihnen festgelegten Zeitfensters.",
    },
    {
      q: "Funktioniert das mit meinem 3PL oder WMS?",
      a: "Ja. Änderungen werden in Echtzeit mit Ihrem Fulfillment synchronisiert, damit das Lager immer die korrekte, aktuelle Bestellung verschickt.",
    },
    {
      q: "Ist die App DSGVO-konform und bereit für das EU-Widerrufsrecht?",
      a: "Ja. Clickpost ist DSGVO-konform sowie nach ISO 27001 / 27701 und SOC 2 zertifiziert. Die App enthält außerdem ein Widerrufsformular, mit dem Ihre Kunden in der EU ihr Widerrufsrecht mit wenigen Klicks ausüben.",
    },
    {
      q: "Wie funktionieren Post-Purchase-Upsells?",
      a: "Nach dem Checkout zeigt die App ein passendes Extra, das Kunden mit einem Tipp annehmen – ohne Zahlungsdaten erneut einzugeben. Das steigert den durchschnittlichen Warenkorbwert.",
    },
    {
      q: "Was kostet die App?",
      a: "Kostenlos bis 500 Bestellungen pro Monat. Bezahlpläne starten bei 49 $/Monat (Abrechnung durch Shopify in US-Dollar) mit 14 Tagen kostenloser Testphase. Details finden Sie oben im Bereich Preise.",
    },
  ],
  footer: [
    {
      title: "Rechtliches",
      links: ["Datenschutzerklärung", "Cookie-Richtlinie", "Compliance-Erklärung", "AGB", "Sicherheitsprofil"],
    },
    { title: "Unternehmen", links: ["Über uns", "Informationssicherheit", "Karriere"] },
  ],
};
