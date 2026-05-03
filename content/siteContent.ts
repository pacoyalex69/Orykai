export type Service = {
  id: string;
  title: string;
  category: string;
  summary: string;
  capabilities: string[];
  includes: string[];
  deliverable: string;
  metric: string;
  accent: string;
};

export type ConceptCase = {
  id: string;
  title: string;
  label: string;
  year: string;
  summary: string;
  stack: string[];
  result: string;
  image: string;
  imageAlt: string;
  accent: string;
};

export type TeamMember = {
  name: string;
  fullName: string;
  role: string;
  focus: string;
  bio: string;
  initials: string;
  photo?: string;
  skills: string[];
  accent: string;
};

export type ProcessStep = {
  num: string;
  title: string;
  desc: string;
};

export const siteContent = {
  brand: {
    name: 'Orykai Software',
    shortName: 'Orykai',
    email: 'alex2005sg@gmail.com',
    phone: '+34 633 070 720',
    whatsapp: 'https://wa.me/34633070720',
    mailto: 'mailto:alex2005sg@gmail.com',
    location: 'Granada · Almeria · España',
    coverage: 'Trabajamos en Granada, Andalucia y para negocios de cualquier parte del mundo.',
    logo: '/image/orykai-logo.jpeg',
    heroImage: '/image/banner.png',
    tagline:
      'Creamos webs, apps y automatizaciones para negocios locales que quieren captar mas clientes y trabajar con menos caos.',
    heroQuote:
      'Digitalizamos negocios con webs que venden, sistemas que ordenan el dia a dia y automatizaciones que ahorran tiempo.',
    primaryCta: 'Solicitar diagnostico',
  },
  heroStats: [
    { label: '01 Captacion', value: 'Webs, SEO local y mensajes que convierten visitas en contactos.' },
    { label: '02 Gestion', value: 'CRMs, stock, horarios y procesos internos bajo control.' },
    { label: '03 Automatizacion', value: 'IA, citas y respuestas para reducir tareas repetitivas.' },
    { label: '04 Acompañamiento', value: 'Demo temprana, seguimiento y mantenimiento opcional.' },
  ],
  services: [
    {
      id: 'web',
      title: 'Desarrollo Web',
      category: 'Presencia y captacion',
      summary:
        'Webs corporativas, portfolios, tiendas online y plataformas preparadas para explicar tu negocio, captar contactos y crecer.',
      capabilities: ['Web completa', 'Tienda online', 'Hosting y mantenimiento'],
      includes: ['Estructura y copy comercial', 'Diseño responsive', 'Demo temprana', 'SEO tecnico base'],
      deliverable: 'Una web lista para lanzar, medir y evolucionar.',
      metric: 'Captacion clara',
      accent: '#d8b35f',
    },
    {
      id: 'multiplataforma',
      title: 'Desarrollo Multiplataforma',
      category: 'Apps y gestion',
      summary:
        'Aplicaciones moviles, escritorio y paneles internos para centralizar clientes, cursos, camaras, equipos o cualquier flujo operativo.',
      capabilities: ['Apps moviles', 'Escritorio', 'Paneles internos'],
      includes: ['Arquitectura de producto', 'Interfaz de gestion', 'Roles de usuario', 'Integraciones a medida'],
      deliverable: 'Una herramienta practica para usar en el dia a dia.',
      metric: 'Un sistema, varios canales',
      accent: '#2fb7b2',
    },
    {
      id: 'ia',
      title: 'Integración de IA',
      category: 'Automatizacion inteligente',
      summary:
        'Chatbots, asistentes y automatizaciones de citas o respuestas para negocios que quieren atender mejor sin multiplicar tareas.',
      capabilities: ['Chatbots', 'Citas automaticas', 'Asistentes internos'],
      includes: ['Flujos conversacionales', 'Conexion con formularios', 'Respuestas automatizadas', 'Control humano'],
      deliverable: 'Automatizaciones utiles, entendibles y controlables.',
      metric: 'Menos trabajo manual',
      accent: '#f3cc6e',
    },
    {
      id: 'marketing-seo',
      title: 'Marketing y SEO',
      category: 'Visibilidad local',
      summary:
        'SEO local, Google Business, contenido, campañas y gestion de redes para que el negocio aparezca, comunique y convierta.',
      capabilities: ['SEO local', 'Google Business', 'Contenido y campañas'],
      includes: ['Auditoria inicial', 'Calendario de contenido', 'Posts y piezas visuales', 'Medicion de resultados'],
      deliverable: 'Mas visibilidad con una estrategia que se puede medir.',
      metric: 'Visibilidad + leads',
      accent: '#85c7ff',
    },
    {
      id: 'sistemas',
      title: 'Sistemas Internos',
      category: 'Orden operativo',
      summary:
        'CRMs, control horario, stock, dashboards y comunicacion interna para negocios que necesitan dejar de depender de hojas sueltas.',
      capabilities: ['CRM', 'Stock y horarios', 'Dashboards'],
      includes: ['Mapa de procesos', 'Panel privado', 'Permisos y estados', 'Automatizaciones internas'],
      deliverable: 'Un sistema privado adaptado a como trabaja tu equipo.',
      metric: 'Negocio ordenado',
      accent: '#b7e36d',
    },
  ] satisfies Service[],
  cases: [
    {
      id: 'corporativa-premium',
      title: 'Web local que capta',
      label: 'Servicio empaquetado',
      year: 'Demo temporal',
      summary:
        'Presencia digital para negocios que necesitan explicar que hacen, aparecer con autoridad y convertir visitas en solicitudes.',
      stack: ['Web completa', 'SEO base', 'Formulario'],
      result: 'Una web clara, rapida y preparada para recibir contactos.',
      image: '/image/demo-web-local.png',
      imageAlt: 'Mockup temporal de web profesional para negocio local',
      accent: '#d8b35f',
    },
    {
      id: 'app-operativa',
      title: 'App de gestion',
      label: 'Servicio empaquetado',
      year: 'Demo temporal',
      summary:
        'Aplicacion movil o escritorio para clientes, tareas, cursos, camaras, reservas o gestion interna del negocio.',
      stack: ['Mobile', 'CRM', 'Panel admin'],
      result: 'Una herramienta diaria para trabajar con menos friccion.',
      image: '/image/demo-app-gestion.png',
      imageAlt: 'Mockup temporal de app y CRM de gestion para negocio local',
      accent: '#2fb7b2',
    },
    {
      id: 'growth-seo',
      title: 'SEO local y captacion',
      label: 'Servicio empaquetado',
      year: 'Demo temporal',
      summary:
        'Estrategia de busquedas, Google Business, contenido y medicion para atraer clientes cercanos y convertir mejor.',
      stack: ['SEO local', 'Contenido', 'Analitica'],
      result: 'Mas visibilidad con acciones concretas y medibles.',
      image: '/image/demo-seo-local.png',
      imageAlt: 'Mockup temporal de analitica SEO local y captacion',
      accent: '#85c7ff',
    },
    {
      id: 'ia-soporte',
      title: 'IA y citas automaticas',
      label: 'Servicio empaquetado',
      year: 'Demo temporal',
      summary:
        'Chatbots, asistentes y flujos de cita para atender consultas, recoger datos y responder sin perder el control humano.',
      stack: ['Chatbot', 'Citas', 'Automatizacion'],
      result: 'Menos tareas repetitivas y mejor respuesta al cliente.',
      image: '/image/demo-ia-automatizacion.png',
      imageAlt: 'Mockup temporal de chatbot y automatizacion de citas',
      accent: '#f3cc6e',
    },
    {
      id: 'dashboard-negocio',
      title: 'Dashboard operativo',
      label: 'Servicio empaquetado',
      year: 'Demo temporal',
      summary:
        'Panel privado para stock, horarios, ventas, tareas y clientes cuando el negocio necesita orden y vision rapida.',
      stack: ['Stock', 'Horarios', 'CRM'],
      result: 'Menos hojas sueltas y mas decisiones con contexto.',
      image: '/image/demo-dashboard-negocio.png',
      imageAlt: 'Mockup temporal de dashboard operativo para stock y horarios',
      accent: '#b7e36d',
    },
  ] satisfies ConceptCase[],
  process: [
    {
      num: '01',
      title: 'Diagnóstico',
      desc:
        'Entendemos el negocio, como llegan los clientes, que tareas consumen tiempo y donde se pierde dinero o claridad.',
    },
    {
      num: '02',
      title: 'Arquitectura',
      desc:
        'Ordenamos mensajes, pantallas, funcionalidades y recorrido de usuario para construir solo lo que aporta valor real.',
    },
    {
      num: '03',
      title: 'Producción',
      desc:
        'Diseñamos y desarrollamos con avances visibles, demo temprana y seguimiento para ajustar antes del lanzamiento.',
    },
    {
      num: '04',
      title: 'Lanzamiento',
      desc:
        'Preparamos rendimiento, SEO, despliegue, entrega y mantenimiento opcional para que el sistema siga evolucionando.',
    },
  ] satisfies ProcessStep[],
  manifesto: [
    'Menos plantilla. Más intención.',
    'Tecnología con criterio.',
    'IA donde suma.',
    'Marca que se entiende.',
    'Software que trabaja.',
  ],
  team: [
    {
      name: 'Francisco Requena',
      fullName: 'Francisco Requena',
      role: 'Desarrollador multiplataforma',
      focus: 'Apps moviles, escritorio, sistemas internos y producto operativo.',
      bio:
        'Transforma necesidades de gestion en aplicaciones claras para que el negocio trabaje mejor entre dispositivos, equipos y procesos.',
      initials: 'FR',
      skills: ['Apps moviles', 'CRMs', 'Sistemas internos'],
      accent: '#2fb7b2',
    },
    {
      name: 'Alejandro Sánchez',
      fullName: 'Alejandro Sanchez',
      role: 'Desarrollador web',
      focus: 'Web, experiencia visual, SEO tecnico, rendimiento y captacion.',
      bio:
        'Diseña y desarrolla webs rapidas, expresivas y orientadas a conversion para que cada negocio explique mejor y capte mas.',
      initials: 'AS',
      skills: ['React', 'SEO', 'Conversion'],
      accent: '#d8b35f',
    },
  ] satisfies TeamMember[],
  trust: [
    {
      label: 'Demos listas',
      value: '5 soluciones base',
      text: 'Servicios preparados para adaptar a negocios locales, no piezas decorativas.',
    },
    {
      label: 'Zona prioritaria',
      value: 'Granada · Andalucia',
      text: 'Cercania local con capacidad para trabajar en remoto en cualquier proyecto.',
    },
    {
      label: 'Proceso claro',
      value: 'Demo temprana',
      text: 'El cliente ve avances reales pronto y decide con contexto.',
    },
  ],
  marquee: ['Web local', 'Apps', 'IA', 'SEO local', 'Marketing', 'Automatizacion', 'CRM', 'Stock'],
} as const;
