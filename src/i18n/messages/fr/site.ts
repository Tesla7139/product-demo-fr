import type { Dict } from "../en";

export const site: Dict["site"] = {
  tagline: "Vos clients corrigent eux-mêmes leurs commandes.",
  nav: {
    productTour: "Visite produit",
    customerLove: "Avis clients",
    reviews: "Avis",
    reviewsDesc: "70+ avis marchands 5 étoiles",
  },
  integrations: {
    Klaviyo: "Klaviyo et Order Editing synchronisent les événements clients pour des e-mails automatisés et personnalisés.",
    Gorgias: "L'intégration Gorgias affiche les modifications de commande directement dans vos tickets support.",
    Zendesk: "L'intégration Zendesk apporte le contexte de la commande dans votre outil de support.",
    AfterSell: "AfterSell et Order Editing combinent upsells post-achat et modifications de commande.",
    AfterShip: "AfterShip synchronise le suivi des colis et signale les livraisons à problème.",
    "Loop Returns": "L'intégration Loop Returns permet aux clients d'échanger un article en direct.",
    Rebuy: "Rebuy alimente des recommandations produits intelligentes dans l'éditeur post-achat.",
    Recharge: "Recharge permet aux clients de modifier leurs commandes d'abonnement en toute simplicité.",
    "SAP ERP": "L'intégration SAP envoie les corrections de commande vers votre ERP.",
    ShipStation: "ShipStation synchronise les statuts de préparation et les ajustements d'étiquettes d'expédition.",
    "Shopify Flow": "Déclenchez des workflows automatiquement dès qu'une commande est modifiée ou annulée.",
    Unicommerce: "Gardez l'entrepôt synchronisé : il expédie toujours la commande corrigée.",
    Easycom: "Envoyez les commandes modifiées directement dans votre chaîne logistique.",
  },
  brandInfo: {
    Doonails: { tier: "Marque à 100 M$+", country: "Allemagne" },
    "Curl Warehouse": { tier: "CA à 7 chiffres", country: "Canada" },
    VanillaPura: { tier: "CA à 7 chiffres", country: "Utah, États-Unis" },
    "GHAR SOAPS": { tier: "CA à 8 chiffres", country: "Émirats arabes unis" },
    MIRAGGIO: { tier: "CA à 8 chiffres" },
    Mateina: { tier: "La préférée d'Andrew Huberman", country: "Canada" },
    "Mars By GHC": { tier: "CA à 7 chiffres" },
    "Renue By Science": { country: "États-Unis" },
  },
  features: [
    {
      eyebrow: "Modification",
      title: "Modifications de commande en libre-service",
      blurb: "Vos clients corrigent leur commande sur la page de remerciement et de suivi — sans ouvrir de ticket.",
      bullets: ["Changer d'article ou de variante", "Ajuster les quantités", "Mettre à jour les coordonnées"],
    },
    {
      eyebrow: "Adresse",
      title: "Validation d'adresse intégrée",
      blurb: "Repérez les adresses non livrables avant l'expédition grâce aux vérifications Google Maps.",
      bullets: ["Suggestions d'adresse en direct", "Alerte sur les livraisons à risque", "Moins d'échecs de livraison"],
    },
    {
      eyebrow: "Annulations",
      title: "Annulations et remboursements instantanés",
      blurb: "Vos clients annulent dans le délai que vous fixez — remboursement ou avoir générés automatiquement.",
      bullets: ["Remboursements automatiques", "Option avoir boutique", "Délais configurables"],
    },
    {
      eyebrow: "Upsell",
      title: "Upsells post-achat",
      blurb: "Proposez le bon complément juste après le paiement et augmentez le panier moyen.",
      bullets: ["Ajout en un clic", "Recommandations intelligentes", "Sans repasser par le paiement"],
    },
    {
      eyebrow: "Synchronisation",
      title: "Toujours synchronisé avec la logistique",
      blurb: "Chaque modification est envoyée à votre 3PL / WMS : l'entrepôt expédie toujours le bon colis.",
      bullets: ["Synchro 3PL / WMS", "Mises à jour en temps réel", "Aucune double saisie"],
    },
    {
      eyebrow: "Contrôle",
      title: "Contrôle total et historique complet",
      blurb: "Définissez les délais de modification, gérez les commandes en masse et consultez l'historique de chaque changement.",
      bullets: ["Délais de modification", "Modification en masse", "Journal complet des modifications"],
    },
  ],
  segments: [
    { title: "Marques D2C et Shopify", blurb: "Donnez la main à vos clients et allégez votre support dès le premier jour." },
    { title: "Marchands à fort volume", blurb: "Automatisez des milliers de modifications par mois sans agrandir l'équipe support." },
    { title: "Marques avec 3PL / WMS", blurb: "Les modifications partent directement en logistique : l'entrepôt expédie ce qui a été commandé." },
  ],
  faqs: [
    {
      q: "En combien de temps puis-je être opérationnel ?",
      a: "Installez l'app depuis le Shopify App Store, activez l'app embed et fixez votre délai de modification. La plupart des boutiques sont en ligne en quelques minutes, sans développeur.",
    },
    {
      q: "Que peuvent modifier mes clients eux-mêmes ?",
      a: "Articles, variantes, quantités, adresse de livraison et coordonnées — ainsi que l'annulation en libre-service avec remboursement automatique ou avoir, dans le délai que vous définissez.",
    },
    {
      q: "Est-ce compatible avec mon 3PL ou mon WMS ?",
      a: "Oui. Les modifications sont synchronisées en temps réel avec votre logistique : l'entrepôt expédie toujours la commande à jour.",
    },
    {
      q: "Est-ce conforme au RGPD et au droit de rétractation européen ?",
      a: "Oui. Clickpost est conforme au RGPD, certifié ISO 27001 / 27701 et SOC 2. L'app propose aussi un formulaire de rétractation pour que vos clients européens exercent leur droit en quelques clics.",
    },
    {
      q: "Comment fonctionnent les upsells post-achat ?",
      a: "Après le paiement, l'app propose un complément pertinent que le client accepte en un clic — sans ressaisir ses informations de paiement — ce qui fait grimper le panier moyen.",
    },
    {
      q: "Combien ça coûte ?",
      a: "C'est gratuit jusqu'à 500 commandes par mois. Les plans payants démarrent à 49 $/mois (facturés en dollars par Shopify), avec 14 jours d'essai gratuit. Détails dans la section tarifs ci-dessus.",
    },
  ],
  footer: [
    {
      title: "Mentions légales",
      links: ["Politique de confidentialité", "Politique cookies", "Conformité RGPD", "Conditions générales", "Profil de sécurité"],
    },
    { title: "Entreprise", links: ["À propos", "Sécurité de l'information", "Carrières"] },
  ],
};
