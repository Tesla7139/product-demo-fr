import type { Dict } from "../en";

export const site: Dict["site"] = {
  tagline: "Klienci sami poprawiają swoje zamówienia.",
  nav: {
    productTour: "Prezentacja",
    customerLove: "Opinie klientów",
    reviews: "Opinie",
    reviewsDesc: "70+ pięciogwiazdkowych opinii sprzedawców",
  },
  integrations: {
    Klaviyo: "Klaviyo i Order Editing synchronizują zdarzenia klientów, by automatyzować spersonalizowane e-maile.",
    Gorgias: "Integracja z Gorgias pokazuje zmiany w zamówieniach bezpośrednio w zgłoszeniach supportu.",
    Zendesk: "Integracja z Zendesk daje pełny kontekst zamówienia w Twoim narzędziu do obsługi klienta.",
    AfterSell: "AfterSell i Order Editing łączą upselle po zakupie z edycją zamówień.",
    AfterShip: "AfterShip synchronizuje statusy przesyłek i oznacza problematyczne dostawy.",
    "Loop Returns": "Integracja z Loop Returns pozwala klientom wymieniać produkty bezpośrednio.",
    Rebuy: "Rebuy dostarcza inteligentne rekomendacje produktów w edytorze po zakupie.",
    Recharge: "Recharge pozwala klientom bez problemu edytować zamówienia subskrypcyjne.",
    "SAP ERP": "Integracja z SAP przesyła poprawki zamówień do Twojego systemu ERP.",
    ShipStation: "ShipStation synchronizuje statusy realizacji i zmiany etykiet wysyłkowych.",
    "Shopify Flow": "Uruchamiaj workflowy automatycznie, gdy zamówienie zostanie zmienione lub anulowane.",
    Unicommerce: "Magazyn zawsze ma aktualne dane, więc wysyła poprawione zamówienie.",
    Easycom: "Przesyłaj zmienione zamówienia prosto do procesu realizacji.",
  },
  brandInfo: {
    Doonails: { tier: "Marka 100 mln USD+", country: "Niemcy" },
    "Curl Warehouse": { tier: "Przychody 7-cyfrowe", country: "Kanada" },
    VanillaPura: { tier: "Przychody 7-cyfrowe", country: "Utah, USA" },
    "GHAR SOAPS": { tier: "Przychody 8-cyfrowe", country: "ZEA" },
    MIRAGGIO: { tier: "Przychody 8-cyfrowe" },
    Mateina: { tier: "Ulubiona marka Andrew Hubermana", country: "Kanada" },
    "Mars By GHC": { tier: "Przychody 7-cyfrowe" },
    "Renue By Science": { country: "USA" },
  },
  features: [
    {
      eyebrow: "Edycja",
      title: "Samodzielna edycja zamówień",
      blurb: "Klienci poprawiają zamówienie na stronie podziękowania i statusu zamówienia — bez zgłoszenia do supportu.",
      bullets: ["Wymiana produktów i wariantów", "Zmiana ilości", "Aktualizacja danych kontaktowych"],
    },
    {
      eyebrow: "Adres",
      title: "Wbudowana walidacja adresów",
      blurb: "Wyłapuj błędne adresy jeszcze przed wysyłką dzięki weryfikacji opartej na Google Maps.",
      bullets: ["Podpowiedzi adresu na żywo", "Oznaczanie ryzykownych dostaw", "Mniej nieudanych dostaw"],
    },
    {
      eyebrow: "Anulowania",
      title: "Natychmiastowe anulowania i zwroty",
      blurb: "Klienci anulują zamówienie w ustalonym przez Ciebie czasie — zwrot pieniędzy lub środki w sklepie naliczają się automatycznie.",
      bullets: ["Automatyczne zwroty", "Opcja środków w sklepie", "Konfigurowalny czas na zmiany"],
    },
    {
      eyebrow: "Upsell",
      title: "Upselle po zakupie",
      blurb: "Zaproponuj trafny dodatek tuż po zakupie i podnieś średnią wartość zamówienia.",
      bullets: ["Dodanie jednym kliknięciem", "Inteligentne rekomendacje", "Bez ponownego płacenia"],
    },
    {
      eyebrow: "Synchronizacja",
      title: "Zawsze zgodne z realizacją",
      blurb: "Każda zmiana trafia do Twojego 3PL / WMS, więc magazyn zawsze wysyła właściwy towar.",
      bullets: ["Synchronizacja z 3PL / WMS", "Aktualizacje w czasie rzeczywistym", "Bez podwójnej pracy"],
    },
    {
      eyebrow: "Kontrola",
      title: "Pełna kontrola i historia zmian",
      blurb: "Ustal czas na edycję, zarządzaj zamówieniami hurtowo i przeglądaj pełny dziennik każdej zmiany.",
      bullets: ["Czas na edycję", "Edycja zbiorcza", "Pełny dziennik zmian"],
    },
  ],
  segments: [
    { title: "Marki D2C i sklepy Shopify", blurb: "Daj klientom kontrolę i odciąż support od pierwszego dnia." },
    { title: "Sklepy o dużej skali", blurb: "Automatyzuj tysiące zmian miesięcznie bez powiększania zespołu obsługi." },
    { title: "Marki z 3PL / WMS", blurb: "Zmiany trafiają prosto do realizacji, więc magazyn wysyła dokładnie to, co zamówiono." },
  ],
  faqs: [
    {
      q: "Jak szybko mogę wystartować?",
      a: "Zainstaluj aplikację ze Shopify App Store, włącz app embed i ustaw czas na edycję. Większość sklepów działa po kilku minutach — bez programisty.",
    },
    {
      q: "Co klienci mogą zmienić sami?",
      a: "Produkty, warianty, ilości, adres dostawy i dane kontaktowe — a do tego samodzielnie anulować zamówienie z automatycznym zwrotem pieniędzy lub środkami w sklepie, w ustalonym przez Ciebie czasie.",
    },
    {
      q: "Czy działa z moim 3PL lub WMS?",
      a: "Tak. Zmiany synchronizują się z Twoim systemem realizacji w czasie rzeczywistym, więc magazyn zawsze wysyła poprawne, aktualne zamówienie.",
    },
    {
      q: "Czy aplikacja jest zgodna z RODO i gotowa na prawo odstąpienia od umowy w UE?",
      a: "Tak. Clickpost jest zgodny z RODO oraz posiada certyfikaty ISO 27001 / 27701 i SOC 2. Aplikacja zawiera też formularz odstąpienia od umowy, dzięki któremu klienci z UE skorzystają ze swojego prawa w kilku kliknięciach.",
    },
    {
      q: "Jak działają upselle po zakupie?",
      a: "Po złożeniu zamówienia aplikacja pokazuje trafny dodatek, który klient przyjmuje jednym kliknięciem — bez ponownego podawania danych płatności — co podnosi średnią wartość zamówienia.",
    },
    {
      q: "Ile to kosztuje?",
      a: "Za darmo do 500 zamówień miesięcznie. Płatne plany zaczynają się od 49 USD/mies. (Shopify rozlicza je w dolarach) z 14-dniowym darmowym okresem próbnym. Szczegóły znajdziesz w cenniku powyżej.",
    },
  ],
  footer: [
    {
      title: "Informacje prawne",
      links: ["Polityka prywatności", "Polityka cookies", "Deklaracja zgodności", "Regulamin", "Profil bezpieczeństwa"],
    },
    { title: "Firma", links: ["O nas", "Bezpieczeństwo informacji", "Kariera"] },
  ],
};
