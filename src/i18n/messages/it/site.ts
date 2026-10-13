import type { Dict } from "../en";

export const site: Dict["site"] = {
  tagline: "I tuoi clienti correggono da soli i propri ordini.",
  nav: {
    productTour: "Tour del prodotto",
    customerLove: "Dicono di noi",
    reviews: "Recensioni",
    reviewsDesc: "70+ recensioni a 5 stelle dei merchant",
  },
  integrations: {
    Klaviyo: "Klaviyo e Order Editing sincronizzano gli eventi dei clienti per email automatiche e personalizzate.",
    Gorgias: "L’integrazione con Gorgias mostra le modifiche agli ordini direttamente nei tuoi ticket di assistenza.",
    Zendesk: "L’integrazione con Zendesk porta il contesto dell’ordine nella tua piattaforma di assistenza.",
    AfterSell: "AfterSell e Order Editing uniscono upsell post-acquisto e modifiche agli ordini.",
    AfterShip: "AfterShip sincronizza il tracking delle spedizioni e segnala le consegne problematiche.",
    "Loop Returns": "L’integrazione con Loop Returns permette ai clienti di sostituire gli articoli in autonomia.",
    Rebuy: "Rebuy alimenta raccomandazioni di prodotto intelligenti nell’editor post-acquisto.",
    Recharge: "Recharge consente ai clienti di modificare gli ordini in abbonamento senza intoppi.",
    "SAP ERP": "L’integrazione con SAP invia le correzioni degli ordini al tuo ERP.",
    ShipStation: "ShipStation sincronizza gli stati di evasione e le modifiche alle etichette di spedizione.",
    "Shopify Flow": "Avvia workflow in automatico ogni volta che un ordine viene modificato o annullato.",
    Unicommerce: "Mantieni il magazzino sincronizzato: spedisce sempre l’ordine corretto.",
    Easycom: "Invia gli ordini modificati direttamente nella tua catena logistica.",
  },
  brandInfo: {
    Doonails: { tier: "Brand da oltre 100 M$", country: "Germania" },
    "Curl Warehouse": { tier: "Fatturato a 7 cifre", country: "Canada" },
    VanillaPura: { tier: "Fatturato a 7 cifre", country: "Utah, USA" },
    "GHAR SOAPS": { tier: "Fatturato a 8 cifre", country: "Emirati Arabi Uniti" },
    MIRAGGIO: { tier: "Fatturato a 8 cifre" },
    Mateina: { tier: "Il preferito di Andrew Huberman", country: "Canada" },
    "Mars By GHC": { tier: "Fatturato a 7 cifre" },
    "Renue By Science": { country: "USA" },
  },
  features: [
    {
      eyebrow: "Modifiche",
      title: "Modifica ordini self-service",
      blurb: "I clienti correggono l’ordine dalla pagina di ringraziamento e di stato dell’ordine — senza aprire un ticket.",
      bullets: ["Cambia articoli e varianti", "Modifica le quantità", "Aggiorna i dati di contatto"],
    },
    {
      eyebrow: "Indirizzi",
      title: "Verifica indirizzi integrata",
      blurb: "Intercetta gli indirizzi non recapitabili prima della spedizione con i controlli basati su Google Maps.",
      bullets: ["Suggerimenti in tempo reale", "Segnala le consegne a rischio", "Meno spedizioni fallite"],
    },
    {
      eyebrow: "Annullamenti",
      title: "Annullamenti e rimborsi immediati",
      blurb: "I clienti annullano entro la finestra che decidi tu — rimborsi e buoni negozio partono in automatico.",
      bullets: ["Rimborsi automatici", "Opzione buono negozio", "Finestre configurabili"],
    },
    {
      eyebrow: "Upsell",
      title: "Upsell post-acquisto",
      blurb: "Proponi l’aggiunta giusta subito dopo il checkout e fai crescere lo scontrino medio.",
      bullets: ["Aggiunta con un tocco", "Raccomandazioni intelligenti", "Nessun nuovo checkout"],
    },
    {
      eyebrow: "Sincronizzazione",
      title: "Sempre allineato con la logistica",
      blurb: "Ogni modifica arriva al tuo 3PL / WMS: il magazzino spedisce sempre la cosa giusta.",
      bullets: ["Sync con 3PL / WMS", "Aggiornamenti in tempo reale", "Nessun doppio lavoro"],
    },
    {
      eyebrow: "Controllo",
      title: "Controllo totale e storico completo",
      blurb: "Imposta le finestre di modifica, gestisci gli ordini in blocco e consulta lo storico di ogni cambiamento.",
      bullets: ["Finestre di modifica", "Modifiche in blocco", "Registro completo delle modifiche"],
    },
  ],
  segments: [
    { title: "Brand D2C e Shopify", blurb: "Dai il controllo ai clienti e alleggerisci l’assistenza fin dal primo giorno." },
    { title: "Merchant ad alto volume", blurb: "Automatizza migliaia di modifiche al mese senza ingrandire il team di assistenza." },
    { title: "Brand con 3PL / WMS", blurb: "Le modifiche arrivano dritte alla logistica: il magazzino spedisce esattamente ciò che è stato ordinato." },
  ],
  faqs: [
    {
      q: "Quanto tempo serve per andare live?",
      a: "Installa l’app dallo Shopify App Store, attiva l’app embed e imposta la finestra di modifica. La maggior parte dei negozi è operativa in pochi minuti, senza sviluppatori.",
    },
    {
      q: "Cosa possono modificare i clienti in autonomia?",
      a: "Articoli, varianti, quantità, indirizzo di spedizione e dati di contatto — oltre all’annullamento self-service con rimborso automatico o buono negozio, sempre entro la finestra che definisci tu.",
    },
    {
      q: "Funziona con il mio 3PL o WMS?",
      a: "Sì. Le modifiche si sincronizzano in tempo reale con la tua logistica, così il magazzino spedisce sempre l’ordine corretto e aggiornato.",
    },
    {
      q: "È conforme al GDPR e pronto per il diritto di recesso UE?",
      a: "Sì. Clickpost è conforme al GDPR e certificato ISO 27001 / 27701 e SOC 2. L’app include anche un modulo di recesso, così i tuoi clienti europei possono esercitare il loro diritto in pochi clic.",
    },
    {
      q: "Come funzionano gli upsell post-acquisto?",
      a: "Dopo il checkout, l’app propone un’aggiunta pertinente che il cliente accetta con un tocco — senza reinserire i dati di pagamento — e lo scontrino medio sale.",
    },
    {
      q: "Quanto costa?",
      a: "È gratis fino a 500 ordini al mese. I piani a pagamento partono da 49 $/mese (fatturati in dollari da Shopify), con 14 giorni di prova gratuita. Trovi tutti i dettagli nella sezione prezzi qui sopra.",
    },
  ],
  footer: [
    {
      title: "Note legali",
      links: ["Privacy Policy", "Cookie Policy", "Dichiarazione di conformità", "Termini e condizioni", "Profilo di sicurezza"],
    },
    { title: "Azienda", links: ["Chi siamo", "Sicurezza delle informazioni", "Lavora con noi"] },
  ],
};
