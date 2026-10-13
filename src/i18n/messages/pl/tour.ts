import type { Dict } from "../en";

export const tour: Dict["tour"] = {
  guidedEditor: {
    heading: "Kliknij funkcję, aby zobaczyć ją na żywo.",
    chooseFeature: "Wybierz funkcję",
    startTour: "Rozpocznij prezentację",
    startTrial: "Wypróbuj za darmo",
    domainPattern: "{name}.pl",
    features: {
      editing: "Edycja zamówień",
      upsell: "Upsell po zakupie",
      address: "Walidacja adresu",
      euWithdrawal: "Odstąpienie (UE)",
      cancel: "Anulowanie",
    },
    editViews: {
      thankyou: "Strona podziękowania",
      orderstatus: "Status zamówienia",
    },
    upsellViews: {
      onetap: "Upsell jednym kliknięciem",
      thankyou: "Status zamówienia",
    },
    next: "Dalej",
    finish: "Zakończ",
    steps: {
      window: {
        title: "Twój czas na edycję",
        desc: "Klienci mogą zmieniać zamówienie przez czas, który sam ustalasz — bez żadnego zgłoszenia do supportu.",
      },
      addrShow: {
        title: "Zmiany bez udziału supportu",
        desc: "Adres zmienia się w kilka sekund. Kliknij adres, aby wstawić poprawiony, a potem „Zaktualizuj”, by zsynchronizować go ze sklepem.",
      },
      orderAdd: {
        title: "Dodawaj i zmieniaj produkty",
        desc: "Dodaj sztukę, wymień albo usuń. Kliknij +, aby zwiększyć ilość, a potem „Zaktualizuj zamówienie” — nowa suma pojawia się od razu.",
      },
      upsellOffer: {
        title: "Dodanie jednym kliknięciem",
        desc: "Jednorazowa oferta tuż po płatności — klient klika „Dodaj” i kwota trafia na zapisaną kartę, bez ponownego checkoutu.",
      },
      tyShip: {
        title: "Krok od darmowej dostawy",
        desc: "Na stronie statusu zamówienia klient widzi, że od darmowej dostawy dzieli go jeden bestseller. Klika „Dodaj” i produkt trafia do zamówienia.",
      },
      tyShow: {
        title: "Dokładaj więcej, właśnie tutaj",
        desc: "Polecaj dodatki również na stronie statusu zamówienia. Klient klika „Dodaj”, produkt trafia do zamówienia, a różnicę dopłaca na końcu.",
      },
      addrFlagged: {
        title: "Wyłapujemy błędne adresy",
        desc: "Niepełne lub niedoręczalne adresy są oznaczane przed wysyłką — klient jednym kliknięciem akceptuje poprawiony adres.",
      },
      addrUpdate: {
        title: "Zapisz poprawiony adres",
        desc: "Kliknij „Zaktualizuj adres dostawy”, aby zapisać w zamówieniu zweryfikowany adres — żadnych nieudanych dostaw ani zwrotów do nadawcy.",
      },
      euCard: {
        title: "Odstąpienie od umowy (UE) w standardzie",
        desc: "Od 19 czerwca 2026 r. klienci z UE muszą mieć dostęp do czytelnej funkcji odstąpienia od umowy. Przycisk „Odstąp od umowy” jest na stronie statusu zamówienia — kliknięcie, potwierdzenie i od razu e-mail z potwierdzeniem.",
      },
      euFinish: {
        title: "Odstąpienie od umowy gotowe na UE",
        desc: "Zgodny z przepisami, dobrze poprowadzony proces odstąpienia, który wstrzymuje zamówienie i zostawia kontrolę Twojemu zespołowi.",
      },
    },
    euOutcome: {
      headline: "Odstąpienie od umowy gotowe na UE",
      button: "Włącz funkcję odstąpienia od umowy w moim sklepie",
    },
    intros: {
      editing: "Klienci sami zmieniają zamówienia — wymiany, dodatki, ilości — bez zgłoszeń do supportu.",
      upsell: "Oferty jednym kliknięciem tuż po zakupie, które podnoszą wartość koszyka bez dodatkowej złotówki na reklamy.",
      address: "Wyłapuj niedoręczalne adresy przed wysyłką — mniej nieudanych dostaw i zwrotów.",
      euWithdrawal: "Automatyzuj odstąpienia od umowy w UE i spełniaj przepisy bez ręcznej pracy.",
    },
    readyToTry: {
      before: "Chcesz {action} w ",
      highlight: "swoim sklepie",
      after: "?",
    },
    finale: {
      editing: {
        action: "ograniczyć zgłoszenia do supportu",
      },
      upsell: {
        action: "podnieść wartość koszyka",
      },
      address: {
        action: "skończyć z nieudanymi dostawami",
      },
      euWithdrawal: {
        action: "spełniać wymogi UE",
      },
      cancel: {
        action: "sprawnie obsługiwać anulowania",
      },
    },
  },
  tourOverlay: {
    close: "Zamknij",
    upNext: "Następnie",
    next: "Dalej",
    finalHeadline: "Chcesz ograniczyć zgłoszenia do supportu i podnieść wartość koszyka z CP Order Editing?",
    defaultHeadline: "Widzisz, jak to działa — zacznij darmowy okres próbny.",
    seenIt: "Widzisz, jak to działa",
    watchNext: "Dalej: {feature}",
    tapHere: "kliknij tutaj",
    closeTour: "Zamknij prezentację",
  },
  setupPanel: {
    title: "Pozwól klientom edytować zamówienia po zakupie",
    enabled: "Edycja zamówień jest teraz włączona dla klientów.",
    selectWindow: "Wybierz, ile czasu klienci mają na edycję zamówienia",
    tabs: {
      window: "Limit czasu",
      untilShipped: "Do realizacji",
      custom: "Własny",
    },
    selectTimeLimit: "Wybierz limit czasu",
    timeOptions: {
      min15: "15 minut",
      min30: "30 minut",
      h1: "1 godzina",
      h2: "2 godziny",
      h4: "4 godziny",
      h6: "6 godzin",
      h12: "12 godzin",
      d1: "1 dzień",
    },
    allowEdit: "Klienci mogą zmieniać:",
    editOptions: {
      shipping: "Adres dostawy",
      contact: "Dane kontaktowe",
      order: "Produkty w zamówieniu",
      discount: "Kody rabatowe",
      cancel: "Anulowanie",
    },
    back: "Wstecz",
    skip: "Pomiń",
    next: "Dalej",
  },
  demoExperience: {
    closePreview: "Zamknij podgląd",
    fallbackName: "Twój sklep",
    domainPattern: "{name}.pl",
    loading: {
      ready: "Gotowe",
      brandLoading: "Wczytujemy dane marki",
      isReady: "{label}: gotowe",
      building: "Budujemy: {label}",
      storeReady: "Twój sklep jest gotowy",
      finalizing: "Dopracowujemy szczegóły marki",
      allSet: "Wszystko gotowe",
      styling: "Stylizujemy kluczowe momenty",
      preparing: "Przygotowujemy demo: {label}",
      openingNow: "Wszystko gotowe. Otwieramy Twój spersonalizowany podgląd.",
      openingSoon: "Możemy już otworzyć demo, a pozostałe szczegóły marki dopracujemy w tle.",
      ticketsHeading: "Zgłoszenia, których Twoi klienci nie będą musieli wysyłać",
    },
    tickets: [
      { subject: "Czy mogę zmienić datę dostawy?", email: "anna.nowak@wp.pl", time: "22 min temu" },
      { subject: "Zamówiłem nie to, za późno na zmianę?", email: "tomasz.wisniewski@gmail.com", time: "25 min temu" },
      { subject: "Błąd w e-mailu przy zamówieniu", email: "natalia.s@onet.pl", time: "31 min temu" },
      { subject: "Chcę dodać produkt do zamówienia", email: "michal.k@gmail.com", time: "34 min temu" },
      { subject: "Zły rozmiar, mogę wymienić?", email: "julia.z@interia.pl", time: "39 min temu" },
      { subject: "Zapomniałam wpisać kodu rabatowego", email: "kasia.d@gmail.com", time: "42 min temu" },
      { subject: "Chcę anulować zamówienie", email: "piotr.l@o2.pl", time: "47 min temu" },
    ],
    welcome: {
      welcomeTo: "Oto",
      brandedPreview: "Twój spersonalizowany podgląd",
      clickAnywhere: "Kliknij w dowolnym miejscu, aby zacząć",
    },
    reviews: {
      heading: "Pokochały nas szybko rosnące marki",
      subheading: "Co sprzedawcy z Shopify mówią o Clickpost.",
      seeAll: "Zobacz wszystkie opinie (70+)",
    },
  },
  demoUrlInput: {
    label: "Adres URL Twojego sklepu",
    placeholder: "np. twojsklep.pl",
    generating: "Generujemy…",
    seeItLive: "Zobacz na żywo",
  },
  badges: {
    builtForShopify: "Built for Shopify",
    availableOn: "Dostępne w",
    availableOnAria: "Dostępne w Shopify App Store",
  },
};
