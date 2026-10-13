import type { Dict } from "../en";

export const tour: Dict["tour"] = {
  guidedEditor: {
    heading: "Clicca su una funzionalità per vederla in azione.",
    chooseFeature: "Scegli una funzionalità",
    startTour: "Avvia il tour",
    startTrial: "Prova gratis",
    domainPattern: "{name}.it",
    features: {
      editing: "Modifica ordini",
      upsell: "Upsell post-acquisto",
      address: "Verifica indirizzi",
      euWithdrawal: "Recesso UE",
      cancel: "Annullamento",
    },
    editViews: {
      thankyou: "Pagina di ringraziamento",
      orderstatus: "Stato dell’ordine",
    },
    upsellViews: {
      onetap: "Upsell con un tocco",
      thankyou: "Stato dell’ordine",
    },
    next: "Avanti",
    finish: "Fine",
    steps: {
      window: {
        title: "La tua finestra di modifica",
        desc: "I clienti possono modificare l’ordine entro un tempo che decidi tu — senza nessun ticket di assistenza.",
      },
      addrShow: {
        title: "Modifiche in autonomia",
        desc: "L’indirizzo si cambia in pochi secondi. Tocca l’indirizzo per inserire quello corretto, poi tocca Aggiorna per sincronizzarlo con il tuo negozio.",
      },
      orderAdd: {
        title: "Aggiungi o cambia articoli",
        desc: "Uno in più, un cambio o una rimozione. Tocca + per aumentare la quantità, poi aggiorna l’ordine — il nuovo totale compare all’istante.",
      },
      upsellOffer: {
        title: "Aggiunta con un tocco",
        desc: "Un’offerta unica subito dopo il pagamento — tocca Aggiungi e l’importo viene addebitato sulla carta già salvata, senza rifare il checkout.",
      },
      tyShip: {
        title: "Spinta verso la spedizione gratuita",
        desc: "Nella pagina di stato dell’ordine, il cliente vede che gli manca un solo best seller per la spedizione gratuita. Tocca Aggiungi ed entra nell’ordine.",
      },
      tyShow: {
        title: "Aggiungi altro, proprio qui",
        desc: "Suggerisci prodotti aggiuntivi anche nella pagina di stato dell’ordine. Tocca Aggiungi ed entra nell’ordine — il saldo si paga alla fine.",
      },
      addrFlagged: {
        title: "Intercettiamo gli indirizzi sbagliati",
        desc: "Gli indirizzi incompleti o non recapitabili vengono segnalati prima della spedizione — il cliente accetta quello corretto con un tocco.",
      },
      addrUpdate: {
        title: "Salva l’indirizzo corretto",
        desc: "Tocca Aggiorna indirizzo per fissare sull’ordine l’indirizzo verificato e recapitabile — niente consegne fallite, niente resi al mittente.",
      },
      euCard: {
        title: "Recesso UE, già integrato",
        desc: "Dal 19 giugno 2026 i clienti UE devono avere a disposizione una funzione di recesso chiara. «Recedi dal contratto» è proprio nella pagina di stato dell’ordine: un tocco, una conferma, e la ricevuta parte subito via email.",
      },
      euFinish: {
        title: "Recesso UE, pronto all’uso",
        desc: "Un flusso di recesso conforme e ben instradato, che blocca l’ordine e lascia il controllo al tuo team.",
      },
    },
    euOutcome: {
      headline: "Recesso UE, pronto all’uso",
      button: "Attiva subito il recesso UE sul mio negozio",
    },
    intros: {
      editing: "I clienti modificano da soli i propri ordini — cambi, aggiunte, quantità — senza ticket di assistenza.",
      upsell: "Offerte con un tocco subito dopo il checkout, che alzano lo scontrino medio senza un euro in più di pubblicità.",
      address: "Intercetta gli indirizzi non recapitabili prima della spedizione — meno consegne fallite e meno resi al mittente.",
      euWithdrawal: "Automatizza le richieste di recesso UE e resta conforme, senza alcun lavoro manuale.",
    },
    readyToTry: {
      before: "Pronto a {action} sul ",
      highlight: "tuo negozio",
      after: "?",
    },
    finale: {
      editing: {
        action: "ridurre i ticket di assistenza",
      },
      upsell: {
        action: "aumentare lo scontrino medio",
      },
      address: {
        action: "dire basta alle consegne fallite",
      },
      euWithdrawal: {
        action: "restare conforme alle norme UE",
      },
      cancel: {
        action: "gestire gli annullamenti",
      },
    },
  },
  tourOverlay: {
    close: "Chiudi",
    upNext: "Prossimo",
    next: "Avanti",
    finalHeadline: "Pronto a ridurre i ticket di assistenza e aumentare lo scontrino medio con CP Order Editing?",
    defaultHeadline: "L’hai visto in azione — inizia ora la tua prova gratuita.",
    seenIt: "L’hai visto in azione",
    watchNext: "Guarda ora: {feature}",
    tapHere: "tocca qui",
    closeTour: "Chiudi il tour",
  },
  setupPanel: {
    title: "Permetti ai clienti di modificare gli ordini dopo il checkout",
    enabled: "La modifica ordini è ora attiva per i clienti.",
    selectWindow: "Scegli entro quanto tempo i clienti possono modificare i propri ordini",
    tabs: {
      window: "Limite di tempo",
      untilShipped: "Fino all’evasione",
      custom: "Personalizzato",
    },
    selectTimeLimit: "Seleziona il limite di tempo",
    timeOptions: {
      min15: "15 minuti",
      min30: "30 minuti",
      h1: "1 ora",
      h2: "2 ore",
      h4: "4 ore",
      h6: "6 ore",
      h12: "12 ore",
      d1: "1 giorno",
    },
    allowEdit: "I clienti possono modificare:",
    editOptions: {
      shipping: "Indirizzo di spedizione",
      contact: "Dati di contatto",
      order: "Contenuto dell’ordine",
      discount: "Codici sconto",
      cancel: "Annullamento",
    },
    back: "Indietro",
    skip: "Salta per ora",
    next: "Avanti",
  },
  demoExperience: {
    closePreview: "Chiudi l’anteprima",
    fallbackName: "Il tuo negozio",
    domainPattern: "{name}.it",
    loading: {
      ready: "Pronto",
      brandLoading: "Caricamento dei dettagli del brand",
      isReady: "{label} è pronto",
      building: "Creazione di {label}",
      storeReady: "Il tuo negozio è pronto",
      finalizing: "Ultimi ritocchi al brand",
      allSet: "Tutto pronto",
      styling: "Personalizziamo i momenti chiave",
      preparing: "Prepariamo la tua demo di {label}",
      openingNow: "Tutto pronto. Apriamo ora la tua anteprima personalizzata.",
      openingSoon: "Possiamo aprire subito la demo e completare gli ultimi dettagli del brand in background.",
      ticketsHeading: "Ticket che i tuoi clienti non dovranno più aprire",
    },
    tickets: [
      { subject: "Posso cambiare la data di consegna?", email: "anna.conti@libero.it", time: "22 min fa" },
      { subject: "Ho sbagliato ordine, è troppo tardi per cambiarlo?", email: "marco.bianchi@gmail.com", time: "25 min fa" },
      { subject: "Ho sbagliato a scrivere l’email al checkout", email: "chiara.s@hotmail.it", time: "31 min fa" },
      { subject: "Devo aggiungere un articolo al mio ordine", email: "luca.m@gmail.com", time: "34 min fa" },
      { subject: "Taglia sbagliata, posso cambiarla?", email: "sara.f@outlook.it", time: "39 min fa" },
      { subject: "Ho dimenticato di inserire il codice sconto", email: "davide.r@gmail.com", time: "42 min fa" },
      { subject: "Vorrei annullare il mio ordine", email: "francesca.p@virgilio.it", time: "47 min fa" },
    ],
    welcome: {
      welcomeTo: "Benvenuto in",
      brandedPreview: "la tua anteprima personalizzata",
      clickAnywhere: "Clicca ovunque per esplorare",
    },
    reviews: {
      heading: "Amato dai brand in forte crescita",
      subheading: "Cosa dicono di Clickpost i merchant Shopify.",
      seeAll: "Leggi tutte le 70+ recensioni",
    },
  },
  demoUrlInput: {
    label: "URL del tuo negozio",
    placeholder: "es. iltuonegozio.it",
    generating: "Generazione…",
    seeItLive: "Guardala dal vivo",
  },
  badges: {
    builtForShopify: "Creata per Shopify",
    availableOn: "Disponibile su",
    availableOnAria: "Disponibile su Shopify App Store",
  },
};
