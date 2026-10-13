import type { Dict } from "../en";

export const site: Dict["site"] = {
  tagline: "Låt kunderna rätta sina egna ordrar.",
  nav: {
    productTour: "Produktvisning",
    customerLove: "Kundröster",
    reviews: "Omdömen",
    reviewsDesc: "70+ femstjärniga omdömen från handlare",
  },
  integrations: {
    Klaviyo: "Klaviyo och Order Editing synkar kundhändelser för personliga, automatiserade mejl.",
    Gorgias: "Integrationen med Gorgias visar orderändringar direkt i dina supportärenden.",
    Zendesk: "Integrationen med Zendesk ger orderkontext direkt i din supportplattform.",
    AfterSell: "AfterSell och Order Editing kombinerar upsells efter köpet med orderändringar.",
    AfterShip: "AfterShip synkar spårningsuppdateringar och flaggar leveranser med problem.",
    "Loop Returns": "Med Loop Returns kan kunderna byta varor direkt.",
    Rebuy: "Rebuy står för smarta produktrekommendationer i redigeraren efter köpet.",
    Recharge: "Med Recharge kan kunderna smidigt ändra sina prenumerationsordrar.",
    "SAP ERP": "SAP-integrationen skickar orderkorrigeringar till ditt affärssystem (ERP).",
    ShipStation: "ShipStation synkar leveransstatus och ändringar av fraktsedlar.",
    "Shopify Flow": "Starta arbetsflöden automatiskt när en order ändras eller avbryts.",
    Unicommerce: "Håll lagret i synk så att det alltid skickar den rättade ordern.",
    Easycom: "Skicka ändrade ordrar direkt in i ditt leveransflöde.",
  },
  brandInfo: {
    Doonails: { tier: "Varumärke på 100 M$+", country: "Tyskland" },
    "Curl Warehouse": { tier: "Sjusiffrig omsättning", country: "Kanada" },
    VanillaPura: { tier: "Sjusiffrig omsättning", country: "Utah, USA" },
    "GHAR SOAPS": { tier: "Åttasiffrig omsättning", country: "Förenade Arabemiraten" },
    MIRAGGIO: { tier: "Åttasiffrig omsättning" },
    Mateina: { tier: "Andrew Hubermans favorit", country: "Kanada" },
    "Mars By GHC": { tier: "Sjusiffrig omsättning" },
    "Renue By Science": { country: "USA" },
  },
  features: [
    {
      eyebrow: "Ändringar",
      title: "Orderändringar i självservice",
      blurb: "Kunderna rättar sin order på tack- och orderstatussidan – helt utan supportärende.",
      bullets: ["Byt varor och varianter", "Ändra antal", "Uppdatera kontaktuppgifter"],
    },
    {
      eyebrow: "Adress",
      title: "Inbyggd adressvalidering",
      blurb: "Fånga adresser som inte går att leverera till innan ordern skickas, med kontroller via Google Maps.",
      bullets: ["Adressförslag i realtid", "Flagga riskabla leveranser", "Färre misslyckade leveranser"],
    },
    {
      eyebrow: "Avbokningar",
      title: "Avbokning och återbetalning direkt",
      blurb: "Låt kunderna avbryta inom ditt tidsfönster – återbetalning eller tillgodohavande sköts automatiskt.",
      bullets: ["Automatiska återbetalningar", "Tillgodohavande i butiken", "Valfria tidsfönster"],
    },
    {
      eyebrow: "Upsell",
      title: "Upsells efter köpet",
      blurb: "Rekommendera rätt tillägg direkt efter kassan och höj det genomsnittliga ordervärdet.",
      bullets: ["Tillägg med ett tryck", "Smarta rekommendationer", "Ingen ny kassa"],
    },
    {
      eyebrow: "Synk",
      title: "Alltid i synk med lagret",
      blurb: "Varje ändring synkas till din 3PL / ditt WMS så att lagret alltid skickar rätt sak.",
      bullets: ["Synk med 3PL / WMS", "Uppdateringar i realtid", "Inget dubbelarbete"],
    },
    {
      eyebrow: "Kontroll",
      title: "Full kontroll och ändringslogg",
      blurb: "Bestäm tidsfönster, hantera ordrar i bulk och se en komplett logg över varje ändring.",
      bullets: ["Tidsfönster för ändringar", "Bulkändringar", "Komplett ändringslogg"],
    },
  ],
  segments: [
    { title: "D2C- och Shopify-varumärken", blurb: "Ge kunderna kontrollen och minska supporttrycket från dag ett." },
    { title: "Handlare med hög volym", blurb: "Automatisera tusentals ändringar i månaden utan att växa supportteamet." },
    { title: "Varumärken med 3PL / WMS", blurb: "Ändringar går direkt till lagret, så att det skickar exakt det som beställts." },
  ],
  faqs: [
    {
      q: "Hur snabbt kan jag komma igång?",
      a: "Installera från Shopify App Store, aktivera app embed och ställ in ditt tidsfönster för ändringar. De flesta butiker är live på några minuter – ingen utvecklare behövs.",
    },
    {
      q: "Vad kan kunderna ändra själva?",
      a: "Varor, varianter, antal, leveransadress och kontaktuppgifter – plus avbokning i självservice med automatisk återbetalning eller tillgodohavande, allt inom det tidsfönster du bestämmer.",
    },
    {
      q: "Fungerar det med min 3PL eller mitt WMS?",
      a: "Ja. Ändringarna synkas med ditt lager- och leveransflöde i realtid, så att lagret alltid skickar den rätta, uppdaterade ordern.",
    },
    {
      q: "Uppfyller det GDPR och är det redo för EU:s ångerrätt?",
      a: "Ja. Clickpost uppfyller GDPR och är certifierat enligt ISO 27001 / 27701 och SOC 2. Appen har också ett ångerformulär så att dina kunder i EU kan utöva sin ångerrätt med några klick.",
    },
    {
      q: "Hur fungerar upsells efter köpet?",
      a: "Efter kassan visar appen ett relevant tillägg som kunden kan lägga till med ett tryck – utan att ange betaluppgifterna igen – vilket höjer det genomsnittliga ordervärdet.",
    },
    {
      q: "Vad kostar det?",
      a: "Gratis upp till 500 ordrar i månaden. Betalplanerna börjar på 49 USD/månad (Shopify fakturerar i dollar) med 14 dagars gratis provperiod. Se prissektionen ovan för detaljer.",
    },
  ],
  footer: [
    {
      title: "Juridiskt",
      links: ["Integritetspolicy", "Cookiepolicy", "Efterlevnad", "Allmänna villkor", "Säkerhetsprofil"],
    },
    { title: "Företaget", links: ["Om oss", "Informationssäkerhet", "Karriär"] },
  ],
};
