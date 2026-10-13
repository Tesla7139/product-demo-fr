import type { Dict } from "../en";

export const tour: Dict["tour"] = {
  guidedEditor: {
    heading: "Klik op een functie om hem live te zien.",
    chooseFeature: "Kies een functie",
    startTour: "Start tour",
    startTrial: "Gratis proberen",
    domainPattern: "{name}.nl",
    features: {
      editing: "Bestelling aanpassen",
      upsell: "Post-purchase upsell",
      address: "Adresvalidatie",
      euWithdrawal: "EU-herroeping",
      cancel: "Annuleren",
    },
    editViews: {
      thankyou: "Bedankpagina",
      orderstatus: "Orderstatuspagina",
    },
    upsellViews: {
      onetap: "Upsell met één tik",
      thankyou: "Orderstatuspagina",
    },
    next: "Volgende",
    finish: "Afronden",
    steps: {
      window: {
        title: "Jouw bewerkingstermijn",
        desc: "Klanten kunnen hun bestelling aanpassen binnen een termijn die jij bepaalt — zonder supportticket.",
      },
      addrShow: {
        title: "Zelf aanpassen",
        desc: "Wijzig het adres in een paar seconden. Tik op het adres om het gecorrigeerde adres in te vullen en tik daarna op Bijwerken om het naar je winkel te synchroniseren.",
      },
      orderAdd: {
        title: "Artikelen toevoegen of wijzigen",
        desc: "Eentje extra, wisselen of verwijderen. Tik op + om het aantal te verhogen en daarna op Bestelling bijwerken — het nieuwe totaal staat er meteen.",
      },
      upsellOffer: {
        title: "Toevoegen met één tik",
        desc: "Een eenmalige deal direct na betaling — tik op Toevoegen en het bedrag wordt afgeschreven van de gebruikte kaart, zonder nieuwe checkout.",
      },
      tyShip: {
        title: "Duwtje richting gratis verzending",
        desc: "Op de orderstatuspagina zien klanten dat ze nog één bestseller verwijderd zijn van gratis verzending. Tik op Toevoegen en het gaat mee in hun bestelling.",
      },
      tyShow: {
        title: "Meer toevoegen, gewoon hier",
        desc: "Raad ook op de orderstatuspagina extra producten aan. Tik op Toevoegen en het gaat mee in de bestelling — het verschil betalen ze aan het eind.",
      },
      addrFlagged: {
        title: "Foute adressen? Die vangen we af",
        desc: "Onbezorgbare of onvolledige adressen worden gemarkeerd voordat de bestelling wordt verzonden — de klant accepteert het gecorrigeerde, bezorgbare adres met één tik.",
      },
      addrUpdate: {
        title: "Gecorrigeerd adres opslaan",
        desc: "Tik op Verzendadres bijwerken om het geverifieerde, bezorgbare adres vast te leggen — geen mislukte bezorging, geen retour naar afzender.",
      },
      euCard: {
        title: "EU-herroeping, ingebouwd",
        desc: "Vanaf 19 juni 2026 moeten klanten in de EU een duidelijke herroepingsfunctie hebben. ‘Overeenkomst herroepen’ staat gewoon op de orderstatuspagina — tikken, bevestigen, en de ontvangst wordt direct per e-mail bevestigd.",
      },
      euFinish: {
        title: "Herroeping, EU-proof",
        desc: "Een compliant, goed ingerichte herroepingsflow die de bestelling tegenhoudt en je team de regie geeft.",
      },
    },
    euOutcome: {
      headline: "Herroeping, EU-proof",
      button: "Activeer de EU-herroepingsfunctie in mijn winkel",
    },
    intros: {
      editing: "Laat klanten zelf hun bestelling aanpassen — wisselen, toevoegen, aantallen — zonder supportticket.",
      upsell: "Aanbiedingen met één tik direct na de checkout die je orderwaarde verhogen, zonder extra advertentiebudget.",
      address: "Vang onbezorgbare adressen af vóór verzending — minder mislukte leveringen en retouren.",
      euWithdrawal: "Automatiseer EU-herroepingsverzoeken en blijf compliant zonder handwerk.",
    },
    readyToTry: {
      before: "Klaar om {action} in ",
      highlight: "jouw winkel",
      after: "?",
    },
    finale: {
      editing: {
        action: "supporttickets te verminderen",
      },
      upsell: {
        action: "je orderwaarde te verhogen",
      },
      address: {
        action: "mislukte leveringen te stoppen",
      },
      euWithdrawal: {
        action: "EU-compliant te blijven",
      },
      cancel: {
        action: "annuleringen te regelen",
      },
    },
  },
  tourOverlay: {
    close: "Sluiten",
    upNext: "Hierna",
    next: "Volgende",
    finalHeadline: "Klaar om supporttickets te verminderen en je orderwaarde te verhogen met CP Order Editing?",
    defaultHeadline: "Je hebt het in actie gezien — start nu je gratis proefperiode.",
    seenIt: "Je hebt het in actie gezien",
    watchNext: "Bekijk hierna: {feature}",
    tapHere: "tik hier",
    closeTour: "Tour sluiten",
  },
  setupPanel: {
    title: "Laat klanten hun bestelling aanpassen na de checkout",
    enabled: "Bestellingen aanpassen staat nu aan voor klanten.",
    selectWindow: "Kies hoe lang klanten hun bestelling mogen aanpassen",
    tabs: {
      window: "Tijdslimiet",
      untilShipped: "Tot verzending",
      custom: "Aangepast",
    },
    selectTimeLimit: "Kies een tijdslimiet",
    timeOptions: {
      min15: "15 minuten",
      min30: "30 minuten",
      h1: "1 uur",
      h2: "2 uur",
      h4: "4 uur",
      h6: "6 uur",
      h12: "12 uur",
      d1: "1 dag",
    },
    allowEdit: "Klanten mogen aanpassen:",
    editOptions: {
      shipping: "Verzendadres",
      contact: "Contactgegevens",
      order: "Bestelling bijwerken",
      discount: "Kortingscodes",
      cancel: "Annuleren",
    },
    back: "Terug",
    skip: "Nu overslaan",
    next: "Volgende",
  },
  demoExperience: {
    closePreview: "Voorbeeld sluiten",
    fallbackName: "Jouw winkel",
    domainPattern: "{name}.nl",
    loading: {
      ready: "Klaar",
      brandLoading: "Merkgegevens laden",
      isReady: "{label} is klaar",
      building: "{label} wordt gebouwd",
      storeReady: "Je winkel is klaar",
      finalizing: "Merkgegevens afronden",
      allSet: "Helemaal klaar",
      styling: "Belangrijke momenten stylen",
      preparing: "Je demo voor {label} wordt voorbereid",
      openingNow: "Helemaal klaar. Je gebrande voorbeeld wordt nu geopend.",
      openingSoon: "We kunnen de demo nu al openen en de laatste merkdetails op de achtergrond verder afronden.",
      ticketsHeading: "Tickets die je klanten niet meer hoeven te openen",
    },
    tickets: [
      { subject: "Kan ik de bezorgdatum wijzigen?", email: "anna.jansen@hotmail.com", time: "22 min geleden" },
      { subject: "Verkeerd besteld, te laat om te wisselen?", email: "tom.bakker@gmail.com", time: "25 min geleden" },
      { subject: "Verkeerd e-mailadres ingevuld bij afrekenen", email: "nina.s@ziggo.nl", time: "31 min geleden" },
      { subject: "Ik wil nog iets aan mijn bestelling toevoegen", email: "ruben.m@gmail.com", time: "34 min geleden" },
      { subject: "Verkeerde maat, kan ik ruilen?", email: "lotte.v@outlook.com", time: "39 min geleden" },
      { subject: "Kortingscode vergeten in te vullen", email: "mike.d@gmail.com", time: "42 min geleden" },
      { subject: "Ik wil mijn bestelling annuleren", email: "sara.p@kpnmail.nl", time: "47 min geleden" },
    ],
    welcome: {
      welcomeTo: "Welkom bij",
      brandedPreview: "je gebrande voorbeeld",
      clickAnywhere: "Klik ergens om te ontdekken",
    },
    reviews: {
      heading: "Geliefd bij snelgroeiende merken",
      subheading: "Wat Shopify-merchants over Clickpost zeggen.",
      seeAll: "Bekijk alle 70+ reviews",
    },
  },
  demoUrlInput: {
    label: "URL van je webshop",
    placeholder: "Vul de URL van je webshop in",
    generating: "Genereren",
    seeItLive: "Bekijk live",
  },
  badges: {
    builtForShopify: "Built for Shopify",
    availableOn: "Beschikbaar in de",
    availableOnAria: "Beschikbaar in de Shopify App Store",
  },
};
