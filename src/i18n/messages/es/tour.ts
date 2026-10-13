import type { Dict } from "../en";

export const tour: Dict["tour"] = {
  guidedEditor: {
    heading: "Haz clic en una función para verla en directo.",
    chooseFeature: "Elige una función",
    startTour: "Iniciar tour",
    startTrial: "Prueba gratis",
    domainPattern: "{name}.es",
    features: {
      editing: "Edición de pedidos",
      upsell: "Upsell post-compra",
      address: "Validación de direcciones",
      euWithdrawal: "Desistimiento UE",
      cancel: "Cancelación",
    },
    editViews: {
      thankyou: "Página de agradecimiento",
      orderstatus: "Estado del pedido",
    },
    upsellViews: {
      onetap: "Upsell en un toque",
      thankyou: "Estado del pedido",
    },
    next: "Siguiente",
    finish: "Terminar",
    steps: {
      window: {
        title: "Tu plazo de edición",
        desc: "Tus clientes pueden editar su pedido durante el plazo que tú decidas, sin abrir un ticket de soporte.",
      },
      addrShow: {
        title: "Cambios en autoservicio",
        desc: "Cambia la dirección en segundos. Toca la dirección para poner la correcta y luego toca Actualizar para sincronizarla con tu tienda.",
      },
      orderAdd: {
        title: "Añade o cambia artículos",
        desc: "Añade uno más, cambia o elimina. Toca + para subir la cantidad y luego Actualizar pedido para aplicarlo: el nuevo total aparece al instante.",
      },
      upsellOffer: {
        title: "Añadir con un toque",
        desc: "Una oferta única justo al pagar: toca Añadir y se cobra en la tarjeta ya registrada, sin volver a pasar por el checkout.",
      },
      tyShip: {
        title: "Un empujón hacia el envío gratis",
        desc: "En la página de estado del pedido, el cliente ve que le falta un best-seller para tener envío gratis. Toca Añadir y se suma a su pedido.",
      },
      tyShow: {
        title: "Añade más, aquí mismo",
        desc: "Recomienda complementos también en la página de estado del pedido. Toca Añadir y se suma al pedido: la diferencia se paga al final.",
      },
      addrFlagged: {
        title: "Detectamos direcciones erróneas",
        desc: "Las direcciones incompletas o imposibles de entregar se señalan antes del envío, y el cliente acepta la dirección corregida con un toque.",
      },
      addrUpdate: {
        title: "Guarda la dirección corregida",
        desc: "Toca Actualizar dirección para fijar en el pedido la dirección verificada y entregable: sin entregas fallidas ni devoluciones al remitente.",
      },
      euCard: {
        title: "Desistimiento UE, integrado",
        desc: "A partir del 19 de junio de 2026, los clientes de la UE necesitan una función de desistimiento clara. «Desistir del contrato» está en la página de estado del pedido: un toque, una confirmación y el acuse de recibo sale al instante por email.",
      },
      euFinish: {
        title: "Desistimiento listo para la UE",
        desc: "Un flujo de desistimiento conforme y bien dirigido que retiene el pedido y deja a tu equipo al mando.",
      },
    },
    euOutcome: {
      headline: "Desistimiento listo para la UE",
      button: "Quiero la función de desistimiento UE en mi tienda",
    },
    intros: {
      editing: "Deja que tus clientes editen sus propios pedidos (cambios, complementos, cantidades) sin abrir un ticket.",
      upsell: "Ofertas de un toque justo después del pago que suben el ticket medio sin gastar un euro más en anuncios.",
      address: "Detecta direcciones imposibles de entregar antes del envío: menos entregas fallidas y devoluciones.",
      euWithdrawal: "Automatiza las solicitudes de desistimiento UE y cumple la normativa sin trabajo manual.",
    },
    readyToTry: {
      before: "¿Quieres {action} en ",
      highlight: "tu tienda",
      after: "?",
    },
    finale: {
      editing: {
        action: "reducir tus tickets de soporte",
      },
      upsell: {
        action: "subir tu ticket medio",
      },
      address: {
        action: "acabar con las entregas fallidas",
      },
      euWithdrawal: {
        action: "cumplir la normativa UE",
      },
      cancel: {
        action: "gestionar las cancelaciones",
      },
    },
  },
  tourOverlay: {
    close: "Cerrar",
    upNext: "A continuación",
    next: "Siguiente",
    finalHeadline: "¿Quieres reducir tus tickets de soporte y subir tu ticket medio con CP Order Editing?",
    defaultHeadline: "Ya lo has visto en acción: empieza tu prueba gratis.",
    seenIt: "Ya lo has visto en acción",
    watchNext: "Siguiente: {feature}",
    tapHere: "toca aquí",
    closeTour: "Cerrar tour",
  },
  setupPanel: {
    title: "Deja que tus clientes editen sus pedidos tras el pago",
    enabled: "La edición de pedidos ya está activada para tus clientes.",
    selectWindow: "Elige el plazo que tendrán tus clientes para editar sus pedidos",
    tabs: {
      window: "Plazo",
      untilShipped: "Hasta el envío",
      custom: "Personalizado",
    },
    selectTimeLimit: "Elige el plazo",
    timeOptions: {
      min15: "15 minutos",
      min30: "30 minutos",
      h1: "1 hora",
      h2: "2 horas",
      h4: "4 horas",
      h6: "6 horas",
      h12: "12 horas",
      d1: "1 día",
    },
    allowEdit: "Tus clientes pueden editar:",
    editOptions: {
      shipping: "Dirección de envío",
      contact: "Datos de contacto",
      order: "Artículos del pedido",
      discount: "Códigos de descuento",
      cancel: "Cancelación",
    },
    back: "Atrás",
    skip: "Omitir por ahora",
    next: "Siguiente",
  },
  demoExperience: {
    closePreview: "Cerrar vista previa",
    fallbackName: "Tu tienda",
    domainPattern: "{name}.es",
    loading: {
      ready: "Listo",
      brandLoading: "Cargando datos de la marca",
      isReady: "{label} está lista",
      building: "Creando {label}",
      storeReady: "Tu tienda está lista",
      finalizing: "Ultimando los datos de la marca",
      allSet: "Todo listo",
      styling: "Dando estilo a los momentos clave",
      preparing: "Preparando tu demo de {label}",
      openingNow: "Todo listo. Abriendo tu vista previa personalizada.",
      openingSoon: "Ya podemos abrir la experiencia; terminaremos de ajustar los detalles de la marca en segundo plano.",
      ticketsHeading: "Tickets que tus clientes ya no tendrán que abrir",
    },
    tickets: [
      { subject: "¿Puedo cambiar la fecha de entrega?", email: "ana.lopez@hotmail.es", time: "hace 22 min" },
      { subject: "Me equivoqué, ¿aún puedo cambiarlo?", email: "pablo.martin@gmail.com", time: "hace 25 min" },
      { subject: "Escribí mal mi email al pagar", email: "nuria.s@yahoo.es", time: "hace 31 min" },
      { subject: "Quiero añadir un artículo a mi pedido", email: "javier.m@gmail.com", time: "hace 34 min" },
      { subject: "Talla equivocada, ¿puedo cambiarla?", email: "laura.f@outlook.es", time: "hace 39 min" },
      { subject: "Olvidé aplicar mi código de descuento", email: "carlos.d@gmail.com", time: "hace 42 min" },
      { subject: "Quiero cancelar mi pedido", email: "sara.p@yahoo.es", time: "hace 47 min" },
    ],
    welcome: {
      welcomeTo: "Bienvenido a",
      brandedPreview: "tu vista previa personalizada",
      clickAnywhere: "Haz clic en cualquier parte para explorar",
    },
    reviews: {
      heading: "Las marcas que más crecen nos adoran",
      subheading: "Lo que dicen los comerciantes de Shopify sobre Clickpost.",
      seeAll: "Ver las más de 70 reseñas",
    },
  },
  demoUrlInput: {
    label: "URL de tu tienda",
    placeholder: "p. ej., tutienda.es",
    generating: "Generando",
    seeItLive: "Verlo en directo",
  },
  badges: {
    builtForShopify: "Built for Shopify",
    availableOn: "Disponible en",
    availableOnAria: "Disponible en la Shopify App Store",
  },
};
