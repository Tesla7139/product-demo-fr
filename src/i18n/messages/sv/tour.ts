import type { Dict } from "../en";

export const tour: Dict["tour"] = {
  guidedEditor: {
    heading: "Klicka på en funktion för att se den live.",
    chooseFeature: "Välj en funktion",
    startTour: "Starta visning",
    startTrial: "Testa gratis",
    domainPattern: "{name}.se",
    features: {
      editing: "Orderändring",
      upsell: "Upsell efter köp",
      address: "Adressvalidering",
      euWithdrawal: "Ångerrätt (EU)",
      cancel: "Avbokning",
    },
    editViews: {
      thankyou: "Tacksida",
      orderstatus: "Orderstatus",
    },
    upsellViews: {
      onetap: "Upsell med ett tryck",
      thankyou: "Orderstatus",
    },
    next: "Nästa",
    finish: "Klar",
    steps: {
      window: {
        title: "Ditt tidsfönster för ändringar",
        desc: "Kunderna kan ändra sin order under ett tidsfönster som du styr – helt utan supportärende.",
      },
      addrShow: {
        title: "Ändringar i självservice",
        desc: "Byt adress på några sekunder. Tryck på adressen för att fylla i den rättade, och tryck sedan på Uppdatera för att synka den till din butik.",
      },
      orderAdd: {
        title: "Lägg till eller byt varor",
        desc: "Lägg till en till, byt eller ta bort. Tryck på + för att öka antalet och sedan på Uppdatera order – den nya summan syns direkt.",
      },
      upsellOffer: {
        title: "Lägg till med ett tryck",
        desc: "Ett unikt erbjudande i samma stund som kunden betalar – tryck på Lägg till så dras det från kortet som redan används, utan ny kassa.",
      },
      tyShip: {
        title: "En knuff mot fri frakt",
        desc: "På orderstatussidan ser kunderna att de bara är en bästsäljare från fri frakt. Tryck på Lägg till så hamnar den i ordern.",
      },
      tyShow: {
        title: "Lägg till mer, direkt här",
        desc: "Rekommendera tillägg även på orderstatussidan. Tryck på Lägg till så hamnar det i ordern – mellanskillnaden betalas på slutet.",
      },
      addrFlagged: {
        title: "Vi fångar felaktiga adresser",
        desc: "Ofullständiga adresser eller adresser som inte går att leverera till flaggas innan ordern skickas – kunden godkänner den rättade adressen med ett tryck.",
      },
      addrUpdate: {
        title: "Spara den rättade adressen",
        desc: "Tryck på Uppdatera leveransadress för att låsa den verifierade, levererbara adressen på ordern – inga misslyckade leveranser, inga returer till avsändaren.",
      },
      euCard: {
        title: "Ångerrätt (EU), inbyggt",
        desc: "Från den 19 juni 2026 måste kunder i EU ha en tydlig ångerfunktion. ”Frånträd avtalet” finns direkt på orderstatussidan – tryck, bekräfta, och en bekräftelse skickas direkt via mejl.",
      },
      euFinish: {
        title: "Ångerrätt redo för EU",
        desc: "Ett regelefterlevande, välorganiserat ångerflöde som håller kvar ordern och låter ditt team behålla kontrollen.",
      },
    },
    euOutcome: {
      headline: "Ångerrätt redo för EU",
      button: "Aktivera ångerfunktionen i min butik nu",
    },
    intros: {
      editing: "Låt kunderna ändra sina egna ordrar – byten, tillägg, antal – utan supportärenden.",
      upsell: "Erbjudanden med ett tryck direkt efter kassan som höjer ordervärdet utan en krona extra i annonser.",
      address: "Fånga adresser som inte går att leverera till innan ordern skickas – färre misslyckade leveranser och returer.",
      euWithdrawal: "Automatisera ångeranmälningar inom EU och följ reglerna utan manuellt arbete.",
    },
    readyToTry: {
      before: "Redo att {action} i ",
      highlight: "din butik",
      after: "?",
    },
    finale: {
      editing: {
        action: "minska supportärendena",
      },
      upsell: {
        action: "höja ordervärdet",
      },
      address: {
        action: "stoppa misslyckade leveranser",
      },
      euWithdrawal: {
        action: "följa EU:s regler",
      },
      cancel: {
        action: "hantera avbokningar",
      },
    },
  },
  tourOverlay: {
    close: "Stäng",
    upNext: "Härnäst",
    next: "Nästa",
    finalHeadline: "Redo att minska supportärendena och höja ordervärdet med CP Order Editing?",
    defaultHeadline: "Du har sett hur det fungerar – starta din gratis provperiod nu.",
    seenIt: "Du har sett hur det fungerar",
    watchNext: "Se härnäst: {feature}",
    tapHere: "tryck här",
    closeTour: "Stäng visningen",
  },
  setupPanel: {
    title: "Låt kunderna ändra sina ordrar efter köpet",
    enabled: "Orderändringar är nu aktiverade för kunderna.",
    selectWindow: "Välj hur länge kunderna får ändra sina ordrar",
    tabs: {
      window: "Tidsgräns",
      untilShipped: "Tills skickad",
      custom: "Anpassad",
    },
    selectTimeLimit: "Välj tidsgräns",
    timeOptions: {
      min15: "15 minuter",
      min30: "30 minuter",
      h1: "1 timme",
      h2: "2 timmar",
      h4: "4 timmar",
      h6: "6 timmar",
      h12: "12 timmar",
      d1: "1 dag",
    },
    allowEdit: "Låt kunderna ändra:",
    editOptions: {
      shipping: "Leveransadress",
      contact: "Kontaktuppgifter",
      order: "Orderns innehåll",
      discount: "Rabattkoder",
      cancel: "Avbokning",
    },
    back: "Tillbaka",
    skip: "Hoppa över",
    next: "Nästa",
  },
  demoExperience: {
    closePreview: "Stäng förhandsvisningen",
    fallbackName: "Din butik",
    domainPattern: "{name}.se",
    loading: {
      ready: "Klart",
      brandLoading: "Laddar varumärkesdetaljer",
      isReady: "{label} är klar",
      building: "Bygger {label}",
      storeReady: "Din butik är klar",
      finalizing: "Slutför varumärkesdetaljer",
      allSet: "Allt klart",
      styling: "Formger viktiga moment",
      preparing: "Förbereder din demo för {label}",
      openingNow: "Allt klart. Öppnar din anpassade förhandsvisning nu.",
      openingSoon: "Vi kan öppna demon nu och fortsätta med de sista varumärkesdetaljerna i bakgrunden.",
      ticketsHeading: "Ärenden som dina kunder slipper skapa",
    },
    tickets: [
      { subject: "Kan jag ändra leveransdatum?", email: "anna.karlsson@hotmail.com", time: "22 min sedan" },
      { subject: "Beställde fel, för sent att byta?", email: "erik.berg@gmail.com", time: "25 min sedan" },
      { subject: "Skrev fel mejladress i kassan", email: "nina.s@outlook.com", time: "31 min sedan" },
      { subject: "Vill lägga till en vara i min order", email: "johan.m@gmail.com", time: "34 min sedan" },
      { subject: "Fel storlek, kan jag byta?", email: "linnea.f@telia.com", time: "39 min sedan" },
      { subject: "Glömde använda min rabattkod", email: "mikael.d@gmail.com", time: "42 min sedan" },
      { subject: "Vill avbryta min order", email: "sara.p@yahoo.se", time: "47 min sedan" },
    ],
    welcome: {
      welcomeTo: "Välkommen till",
      brandedPreview: "din anpassade förhandsvisning",
      clickAnywhere: "Klicka var som helst för att utforska",
    },
    reviews: {
      heading: "Älskad av snabbväxande varumärken",
      subheading: "Vad Shopify-handlare säger om Clickpost.",
      seeAll: "Se alla 70+ omdömen",
    },
  },
  demoUrlInput: {
    label: "Din butiks URL",
    placeholder: "t.ex. dinbutik.se",
    generating: "Skapar",
    seeItLive: "Se det live",
  },
  badges: {
    builtForShopify: "Byggd för Shopify",
    availableOn: "Tillgänglig i",
    availableOnAria: "Tillgänglig i Shopify App Store",
  },
};
