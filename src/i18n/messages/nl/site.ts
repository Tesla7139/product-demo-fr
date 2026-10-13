import type { Dict } from "../en";

export const site: Dict["site"] = {
  tagline: "Laat klanten hun eigen bestelling aanpassen.",
  nav: {
    productTour: "Producttour",
    customerLove: "Klanten",
    reviews: "Reviews",
    reviewsDesc: "70+ vijfsterrenreviews van merchants",
  },
  integrations: {
    Klaviyo: "Klaviyo en Order Editing synchroniseren klantevents voor gepersonaliseerde e-mailautomatisering.",
    Gorgias: "Met de Gorgias-integratie zie je orderwijzigingen direct in je supporttickets.",
    Zendesk: "De Zendesk-integratie toont ordercontext rechtstreeks in je supportplatform.",
    AfterSell: "AfterSell en Order Editing combineren post-purchase upsells met orderwijzigingen.",
    AfterShip: "AfterShip synchroniseert trackingupdates en signaleert leveringen met problemen.",
    "Loop Returns": "Met de Loop Returns-integratie ruilen klanten artikelen direct om.",
    Rebuy: "Rebuy zorgt voor slimme productaanbevelingen in de post-purchase editor.",
    Recharge: "Met Recharge passen klanten moeiteloos hun abonnementsbestellingen aan.",
    "SAP ERP": "De SAP-integratie stuurt ordercorrecties door naar je ERP-systeem.",
    ShipStation: "ShipStation synchroniseert fulfilmentstatussen en aanpassingen aan verzendlabels.",
    "Shopify Flow": "Start automatisch workflows zodra een bestelling wordt aangepast of geannuleerd.",
    Unicommerce: "Houd je magazijn in sync, zodat altijd de gecorrigeerde bestelling wordt verzonden.",
    Easycom: "Stuur aangepaste bestellingen direct door naar je fulfilmentproces.",
  },
  brandInfo: {
    Doonails: { tier: "Merk van $ 100 mln+", country: "Duitsland" },
    "Curl Warehouse": { tier: "Omzet van 7 cijfers", country: "Canada" },
    VanillaPura: { tier: "Omzet van 7 cijfers", country: "Utah, VS" },
    "GHAR SOAPS": { tier: "Omzet van 8 cijfers", country: "VAE" },
    MIRAGGIO: { tier: "Omzet van 8 cijfers" },
    Mateina: { tier: "Favoriet van Andrew Huberman", country: "Canada" },
    "Mars By GHC": { tier: "Omzet van 7 cijfers" },
    "Renue By Science": { country: "VS" },
  },
  features: [
    {
      eyebrow: "Aanpassen",
      title: "Bestellingen zelf aanpassen",
      blurb: "Klanten passen hun bestelling aan op de bedankpagina en de orderstatuspagina — zonder ticket.",
      bullets: ["Artikelen & varianten wisselen", "Aantallen aanpassen", "Contactgegevens bijwerken"],
    },
    {
      eyebrow: "Adres",
      title: "Adresvalidatie, standaard ingebouwd",
      blurb: "Vang onbezorgbare adressen af vóór fulfilment, met controles op basis van Google Maps.",
      bullets: ["Live adressuggesties", "Risicovolle leveringen signaleren", "Minder mislukte zendingen"],
    },
    {
      eyebrow: "Annuleringen",
      title: "Direct annuleren & terugbetalen",
      blurb: "Laat klanten annuleren binnen jouw termijn — terugbetalingen en tegoed worden automatisch verwerkt.",
      bullets: ["Automatische terugbetalingen", "Optie voor winkeltegoed", "Instelbare termijnen"],
    },
    {
      eyebrow: "Upsell",
      title: "Post-purchase upsells",
      blurb: "Bied direct na de checkout het juiste extraatje aan en verhoog je gemiddelde orderwaarde.",
      bullets: ["Add-on met één tik", "Slimme aanbevelingen", "Geen tweede checkout"],
    },
    {
      eyebrow: "Sync",
      title: "Altijd in sync met fulfilment",
      blurb: "Elke wijziging gaat naar je 3PL / WMS, zodat het magazijn altijd het juiste verstuurt.",
      bullets: ["3PL / WMS-sync", "Realtime updates", "Geen dubbel werk"],
    },
    {
      eyebrow: "Controle",
      title: "Volledige controle & audittrail",
      blurb: "Stel bewerkingstermijnen in, beheer bestellingen in bulk en bekijk een compleet logboek van elke wijziging.",
      bullets: ["Bewerkingstermijnen", "Bulkbewerking", "Volledig wijzigingslog"],
    },
  ],
  segments: [
    { title: "D2C- & Shopify-merken", blurb: "Geef klanten de regie en verlaag vanaf dag één je supportdruk." },
    { title: "Merchants met hoge volumes", blurb: "Automatiseer duizenden wijzigingen per maand zonder je supportteam uit te breiden." },
    { title: "Merken met 3PL / WMS", blurb: "Wijzigingen gaan direct naar fulfilment, dus het magazijn verstuurt wat er besteld is." },
  ],
  faqs: [
    {
      q: "Hoe snel ben ik live?",
      a: "Installeer de app via de Shopify App Store, activeer de app-embed en stel je bewerkingstermijn in. De meeste winkels zijn binnen enkele minuten live — zonder developer.",
    },
    {
      q: "Wat kunnen klanten zelf aanpassen?",
      a: "Artikelen, varianten, aantallen, verzendadres en contactgegevens — plus zelf annuleren met automatische terugbetaling of winkeltegoed, allemaal binnen de termijn die jij bepaalt.",
    },
    {
      q: "Werkt het met mijn 3PL of WMS?",
      a: "Ja. Wijzigingen worden realtime gesynchroniseerd met je fulfilmentstack, zodat het magazijn altijd de juiste, bijgewerkte bestelling verstuurt.",
    },
    {
      q: "Is het GDPR-compliant en klaar voor het Europese herroepingsrecht?",
      a: "Ja. Clickpost is GDPR-compliant en gecertificeerd voor ISO 27001 / 27701 en SOC 2. De app bevat ook een herroepingsformulier, zodat je Europese klanten hun recht in een paar klikken kunnen uitoefenen.",
    },
    {
      q: "Hoe werken post-purchase upsells?",
      a: "Na de checkout toont de app een relevant extra product dat de klant met één tik toevoegt — zonder opnieuw betaalgegevens in te voeren. Zo stijgt je gemiddelde orderwaarde.",
    },
    {
      q: "Wat kost het?",
      a: "Gratis tot 500 bestellingen per maand. Betaalde abonnementen beginnen bij $ 49 per maand (door Shopify gefactureerd in USD), met 14 dagen gratis proberen. Zie de prijzen hierboven voor alle details.",
    },
  ],
  footer: [
    {
      title: "Juridisch",
      links: ["Privacybeleid", "Cookiebeleid", "Compliance-verklaring", "Algemene voorwaarden", "Beveiligingsprofiel"],
    },
    { title: "Bedrijf", links: ["Over ons", "Infosec", "Vacatures"] },
  ],
};
