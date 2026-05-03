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
    coverage: 'Trabajamos en Granada, Andalucía y para negocios de cualquier parte del mundo.',
    established: '2026',
    logo: '/image/orykai-logo.jpeg',
    heroImage: '/image/banner.png',
    tagline:
      'Webs, apps y automatizaciones para negocios locales que quieren captar mas clientes y trabajar con menos caos.',
    heroQuote:
      'Webs que convierten visitas en contactos, sistemas que ordenan el dia a dia y automatizaciones que ahorran tiempo.',
    primaryCta: 'Solicitar diagnóstico',
  },
  heroStats: [
    { label: '01 Captación', value: 'Webs, SEO local y mensajes preparados para convertir visitas en contactos.' },
    { label: '02 Gestión', value: 'CRMs, stock, horarios y procesos internos bajo control.' },
    { label: '03 Automatización', value: 'IA, citas y respuestas para reducir tareas repetitivas.' },
    { label: '04 Entrega', value: 'Demo temprana, lanzamiento cuidado y mantenimiento opcional.' },
  ],
  services: [
    {
      id: 'web',
      title: 'Desarrollo Web',
      category: 'Presencia y captación',
      summary:
        'Webs corporativas, portfolios, tiendas online y plataformas preparadas para explicar tu negocio, captar contactos y crecer.',
      capabilities: ['Web completa', 'Tienda online', 'Hosting y mantenimiento'],
      includes: ['Estructura y copy comercial', 'Diseño responsive', 'Demo temprana', 'SEO técnico base'],
      deliverable: 'Una web lista para lanzar, medir y evolucionar.',
      metric: 'Captación clara',
      accent: '#d8b35f',
    },
    {
      id: 'multiplataforma',
      title: 'Desarrollo Multiplataforma',
      category: 'Apps y gestión',
      summary:
        'Aplicaciones móviles, escritorio y paneles internos para centralizar clientes, cursos, cámaras, equipos o cualquier flujo operativo.',
      capabilities: ['Apps móviles', 'Escritorio', 'Paneles internos'],
      includes: ['Arquitectura de producto', 'Interfaz de gestión', 'Roles de usuario', 'Integraciones a medida'],
      deliverable: 'Una herramienta práctica para usar en el día a día.',
      metric: 'Un sistema, varios canales',
      accent: '#2fb7b2',
    },
    {
      id: 'ia',
      title: 'Integración de IA',
      category: 'Automatización inteligente',
      summary:
        'Chatbots, asistentes y automatizaciones de citas o respuestas para negocios que quieren atender mejor sin multiplicar tareas.',
      capabilities: ['Chatbots', 'Citas automáticas', 'Asistentes internos'],
      includes: ['Flujos conversacionales', 'Conexión con formularios', 'Respuestas automatizadas', 'Control humano'],
      deliverable: 'Automatizaciones útiles, entendibles y controlables.',
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
      deliverable: 'Más visibilidad con una estrategia que se puede medir.',
      metric: 'Visibilidad + leads',
      accent: '#85c7ff',
    },
    {
      id: 'sistemas',
      title: 'Sistemas Internos',
      category: 'Orden operativo',
      summary:
        'CRMs, control horario, stock, dashboards y comunicación interna para negocios que necesitan dejar de depender de hojas sueltas.',
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
      label: 'Solución base',
      year: 'Adaptable',
      summary:
        'Presencia digital para negocios que necesitan explicar qué hacen, aparecer con autoridad y convertir visitas en solicitudes.',
      stack: ['Web completa', 'SEO base', 'Formulario'],
      result: 'Una web clara, rápida y preparada para recibir contactos.',
      image: '/image/demo-web-local.png',
      imageAlt: 'Mockup temporal de web profesional para negocio local',
      accent: '#d8b35f',
    },
    {
      id: 'app-operativa',
      title: 'App de gestión',
      label: 'Solución base',
      year: 'Adaptable',
      summary:
        'Aplicación móvil o escritorio para clientes, tareas, cursos, cámaras, reservas o gestión interna del negocio.',
      stack: ['Mobile', 'CRM', 'Panel admin'],
      result: 'Una herramienta diaria para trabajar con menos fricción.',
      image: '/image/demo-app-gestion.png',
      imageAlt: 'Mockup temporal de app y CRM de gestion para negocio local',
      accent: '#2fb7b2',
    },
    {
      id: 'growth-seo',
      title: 'SEO local y captación',
      label: 'Solución base',
      year: 'Adaptable',
      summary:
        'Estrategia de búsquedas, Google Business, contenido y medición para atraer clientes cercanos y convertir mejor.',
      stack: ['SEO local', 'Contenido', 'Analitica'],
      result: 'Más visibilidad con acciones concretas y medibles.',
      image: '/image/demo-seo-local.png',
      imageAlt: 'Mockup temporal de analitica SEO local y captacion',
      accent: '#85c7ff',
    },
    {
      id: 'ia-soporte',
      title: 'IA y citas automáticas',
      label: 'Solución base',
      year: 'Adaptable',
      summary:
        'Chatbots, asistentes y flujos de cita para atender consultas, recoger datos y responder sin perder el control humano.',
      stack: ['Chatbot', 'Citas', 'Automatización'],
      result: 'Menos tareas repetitivas y mejor respuesta al cliente.',
      image: '/image/demo-ia-automatizacion.png',
      imageAlt: 'Mockup temporal de chatbot y automatizacion de citas',
      accent: '#f3cc6e',
    },
    {
      id: 'dashboard-negocio',
      title: 'Dashboard operativo',
      label: 'Solución base',
      year: 'Adaptable',
      summary:
        'Panel privado para stock, horarios, ventas, tareas y clientes cuando el negocio necesita orden y visión rápida.',
      stack: ['Stock', 'Horarios', 'CRM'],
      result: 'Menos hojas sueltas y más decisiones con contexto.',
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
        'Entendemos el negocio, cómo llegan los clientes, qué tareas consumen tiempo y dónde se pierde dinero o claridad.',
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
      focus: 'Apps móviles, escritorio, sistemas internos y producto operativo.',
      bio:
        'Transforma necesidades de gestión en aplicaciones claras para que el negocio trabaje mejor entre dispositivos, equipos y procesos.',
      initials: 'FR',
      skills: ['Apps móviles', 'CRMs', 'Sistemas internos'],
      accent: '#2fb7b2',
    },
    {
      name: 'Alejandro Sánchez',
      fullName: 'Alejandro Sanchez',
      role: 'Desarrollador web',
      focus: 'Web, experiencia visual, SEO técnico, rendimiento y captación.',
      bio:
        'Diseña y desarrolla webs rápidas, expresivas y orientadas a conversión para que cada negocio explique mejor y capte más.',
      initials: 'AS',
      skills: ['React', 'SEO', 'Conversion'],
      accent: '#d8b35f',
    },
  ] satisfies TeamMember[],
  trust: [
    {
      label: 'Punto de partida',
      value: '5 soluciones base',
      text: 'Pantallas y flujos preparados para aterrizar rapido en un negocio real.',
    },
    {
      label: 'Zona prioritaria',
      value: 'Granada · Andalucía',
      text: 'Cercanía local con capacidad para trabajar en remoto con cualquier equipo.',
    },
    {
      label: 'Proceso claro',
      value: 'Demo temprana',
      text: 'El cliente ve avances reales pronto, decide con contexto y evita sorpresas.',
    },
  ],
  marquee: ['Web local', 'Apps', 'IA', 'SEO local', 'Marketing', 'Automatización', 'CRM', 'Stock'],
} as const;
