import type { Dict } from "../en";

export const tour: Dict["tour"] = {
  guidedEditor: {
    heading: "Cliquez sur une fonctionnalité pour la voir en action.",
    chooseFeature: "Choisir une fonctionnalité",
    startTour: "Lancer la visite",
    startTrial: "Essai gratuit",
    domainPattern: "{name}.fr",
    features: {
      editing: "Modification de commande",
      upsell: "Upsell post-achat",
      address: "Validation d’adresse",
      euWithdrawal: "Rétractation UE",
      cancel: "Annulation",
    },
    editViews: {
      thankyou: "Page de remerciement",
      orderstatus: "Suivi de commande",
    },
    upsellViews: {
      onetap: "Upsell en un clic",
      thankyou: "Suivi de commande",
    },
    next: "Suivant",
    finish: "Terminer",
    steps: {
      window: {
        title: "Votre fenêtre de modification",
        desc: "Vos clients modifient leur commande pendant le délai que vous fixez — sans le moindre ticket support.",
      },
      addrShow: {
        title: "Modifications en autonomie",
        desc: "L’adresse change en quelques secondes. Touchez-la pour insérer la bonne, puis validez : elle se synchronise avec votre boutique.",
      },
      orderAdd: {
        title: "Ajouter ou changer des articles",
        desc: "Un de plus, un échange, un retrait. Touchez + pour ajuster la quantité, puis mettez la commande à jour — le nouveau total s’affiche aussitôt.",
      },
      upsellOffer: {
        title: "Ajout en un clic",
        desc: "Une offre unique dès le paiement — un clic et c’est débité sur la carte enregistrée, sans repasser par le paiement.",
      },
      tyShip: {
        title: "Cap sur la livraison offerte",
        desc: "Sur la page de suivi de commande, vos clients voient qu’un seul best-seller les sépare de la livraison offerte. Un clic et il rejoint leur commande.",
      },
      tyShow: {
        title: "Encore plus, ici même",
        desc: "Suggérez aussi des compléments sur la page de suivi de commande. Un clic et c’est ajouté — le solde se règle à la fin.",
      },
      addrFlagged: {
        title: "Adresses erronées, interceptées",
        desc: "Les adresses incomplètes ou non livrables sont signalées avant l’expédition — votre client accepte l’adresse corrigée en un clic.",
      },
      addrUpdate: {
        title: "Enregistrez l’adresse corrigée",
        desc: "Un clic pour fixer l’adresse vérifiée sur la commande — zéro échec de livraison, zéro retour à l’expéditeur.",
      },
      euCard: {
        title: "Rétractation UE, intégrée",
        desc: "Dès le 19 juin 2026, vos clients européens doivent disposer d’une fonction de rétractation claire. Elle est là, sur la page de suivi de commande : un clic, une confirmation, et l’accusé de réception part aussitôt par e-mail.",
      },
      euFinish: {
        title: "Rétractation UE, prête à l’emploi",
        desc: "Un parcours de rétractation conforme et bien orchestré, qui bloque la commande et laisse la main à votre équipe.",
      },
    },
    euOutcome: {
      headline: "Rétractation UE, prête à l’emploi",
      button: "Activer la rétractation UE sur ma boutique",
    },
    intros: {
      editing: "Vos clients modifient eux-mêmes leur commande — échanges, ajouts, quantités — sans ticket support.",
      upsell: "Des offres en un clic juste après le paiement, qui font grimper le panier moyen sans un euro de pub en plus.",
      address: "Interceptez les adresses non livrables avant l’expédition — moins d’échecs de livraison et de retours.",
      euWithdrawal: "Automatisez les demandes de rétractation UE et restez conforme, sans aucune saisie manuelle.",
    },
    readyToTry: {
      before: "Prêt à {action} sur ",
      highlight: "votre boutique",
      after: " ?",
    },
    finale: {
      editing: {
        action: "réduire vos tickets support",
      },
      upsell: {
        action: "booster votre panier moyen",
      },
      address: {
        action: "en finir avec les échecs de livraison",
      },
      euWithdrawal: {
        action: "rester conforme aux règles UE",
      },
      cancel: {
        action: "maîtriser les annulations",
      },
    },
  },
  tourOverlay: {
    close: "Fermer",
    upNext: "À suivre",
    next: "Suivant",
    finalHeadline: "Prêt à réduire vos tickets support et à booster votre panier moyen avec CP Order Editing ?",
    defaultHeadline: "Vous l’avez vu en action — lancez votre essai gratuit.",
    seenIt: "Vous l’avez vu en action",
    watchNext: "Ensuite : {feature}",
    tapHere: "touchez ici",
    closeTour: "Quitter la visite",
  },
  setupPanel: {
    title: "Laissez vos clients modifier leur commande après le paiement",
    enabled: "La modification de commande est activée pour vos clients.",
    selectWindow: "Choisissez le délai accordé à vos clients pour modifier leur commande",
    tabs: {
      window: "Délai",
      untilShipped: "Jusqu’à l’expédition",
      custom: "Personnalisé",
    },
    selectTimeLimit: "Délai de modification",
    timeOptions: {
      min15: "15 minutes",
      min30: "30 minutes",
      h1: "1 heure",
      h2: "2 heures",
      h4: "4 heures",
      h6: "6 heures",
      h12: "12 heures",
      d1: "1 jour",
    },
    allowEdit: "Vos clients peuvent modifier :",
    editOptions: {
      shipping: "Adresse de livraison",
      contact: "Coordonnées de contact",
      order: "Contenu de la commande",
      discount: "Codes promo",
      cancel: "Annulation",
    },
    back: "Retour",
    skip: "Passer",
    next: "Suivant",
  },
  demoExperience: {
    closePreview: "Fermer l’aperçu",
    fallbackName: "Votre boutique",
    domainPattern: "{name}.fr",
    loading: {
      ready: "Prêt",
      brandLoading: "Chargement de votre marque",
      isReady: "{label} est prête",
      building: "Création de {label}",
      storeReady: "Votre boutique est prête",
      finalizing: "Derniers réglages de marque",
      allSet: "C’est prêt",
      styling: "Mise en forme des moments clés",
      preparing: "Préparation de votre démo {label}",
      openingNow: "C’est prêt. Ouverture de votre aperçu personnalisé…",
      openingSoon: "Nous ouvrons la démo tout de suite et finalisons les derniers détails de votre marque en arrière-plan.",
      ticketsHeading: "Les tickets que vos clients n’auront plus à ouvrir",
    },
    tickets: [
      { subject: "Je peux changer la date de livraison ?", email: "anne.kervella@orange.fr", time: "il y a 22 min" },
      { subject: "Mauvais article, trop tard pour changer ?", email: "thomas.bernard@gmail.com", time: "il y a 25 min" },
      { subject: "Erreur dans mon e-mail au paiement", email: "nina.s@free.fr", time: "il y a 31 min" },
      { subject: "J’aimerais ajouter un article à ma commande", email: "julien.m@gmail.com", time: "il y a 34 min" },
      { subject: "Mauvaise taille, je peux l’échanger ?", email: "lea.f@outlook.fr", time: "il y a 39 min" },
      { subject: "J’ai oublié mon code promo", email: "marc.d@gmail.com", time: "il y a 42 min" },
      { subject: "Je veux annuler ma commande", email: "sarah.p@laposte.net", time: "il y a 47 min" },
    ],
    welcome: {
      welcomeTo: "Bienvenue chez",
      brandedPreview: "votre aperçu personnalisé",
      clickAnywhere: "Cliquez n’importe où pour découvrir",
    },
    reviews: {
      heading: "Plébiscité par les marques en pleine croissance",
      subheading: "Ce que les marchands Shopify disent de Clickpost.",
      seeAll: "Voir les 70+ avis",
    },
  },
  demoUrlInput: {
    label: "URL de votre boutique",
    placeholder: "ex. votre-boutique.fr",
    generating: "Génération…",
    seeItLive: "Voir en direct",
  },
  badges: {
    builtForShopify: "Conçu pour Shopify",
    availableOn: "Disponible sur le",
    availableOnAria: "Disponible sur le Shopify App Store",
  },
};
