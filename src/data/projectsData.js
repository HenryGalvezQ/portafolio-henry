// src/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    title: 'Sigepro',
    description: 'Prototipé en Figma y desarrollé una SPA de gestión de proyectos con una UI adaptativa basada en roles (Admin / Cliente  Cliente/ Colaborador), lo construí con Vue 3, Pinia y Tailwind CSS y lo conecté al backend con APIRESTful.',
    expandedDescription: `<h3>Proyecto: SIGEPRO (Sistema de Gestión de Proyectos)</h3>
<p>SIGEPRO es una aplicación web SPA (Single Page Application) robusta y moderna, diseñada para la gestión integral de proyectos de investigación académica. Desarrollada como parte de la asignatura de Ingeniería de Software, esta plataforma permite a estudiantes y administradores gestionar todo el ciclo de vida de un proyecto, desde la solicitud inicial hasta el seguimiento detallado de tareas.</p>

<p>Desde la perspectiva del <strong>Desarrollo Frontend</strong>, construí una arquitectura reactiva y eficiente utilizando <strong>Vue 3 y Vite</strong>, garantizando una experiencia de usuario fluida y tiempos de carga mínimos. La gestión del estado global se maneja con <strong>Pinia</strong>, centralizando la autenticación y los datos del usuario de forma segura. La interfaz, diseñada con <strong>Tailwind CSS</strong>, es completamente responsiva y sigue un enfoque de diseño utilitario para un desarrollo ágil. La comunicación con el backend se realiza a través de una API REST, gestionada con Axios, implementando un sistema de autenticación seguro basado en tokens JWT.</p>

<p>En el ámbito del <strong>Diseño UX/UI</strong>, el enfoque principal fue crear flujos de usuario intuitivos y adaptados a distintos perfiles. El sistema distingue tres roles claros (<strong>Administrador, Colaborador y Cliente</strong>), y la interfaz se transforma dinámicamente para mostrar únicamente las herramientas y la información relevante para cada uno. Diseñé procesos complejos como el asistente de configuración de proyectos, un flujo multi-paso que guía al administrador a través de la creación y asignación de tareas de manera ordenada y sin fricciones. La experiencia de usuario se enriquece con un sistema de notificaciones en tiempo real que ofrece feedback inmediato sobre las acciones realizadas.</p>

<h4>Características Destacadas:</h4>
<ul>
<li><strong>Autenticación y Seguridad por Roles:</strong> Implementación de un sistema de acceso seguro con JWT que personaliza la experiencia y los permisos para Administradores, Colaboradores y Clientes.</li>
<li><strong>Flujo de Aprobación de Proyectos:</strong> Un ciclo de vida completo donde los clientes crean solicitudes que los administradores revisan, configuran y aprueban a través de un panel de gestión centralizado.</li>
<li><strong>Dashboard Dinámico y Adaptativo:</strong> La pantalla principal (HomeView) actúa como un centro de control que renderiza componentes específicos según el rol del usuario, optimizando su flujo de trabajo.</li>
<li><strong>Gestión CRUD Intuitiva:</strong> Interfaces claras para la administración completa de clientes, proyectos y tareas, utilizando modales y formularios con validaciones en tiempo real.</li>
<li><strong>Asistente de Configuración Guiado:</strong> Un "wizard" multi-paso para que los administradores formalicen un proyecto, definan sus tareas iniciales con validación de fechas secuencial y organicen el cronograma por fases.</li>
</ul>`,
    tags: ["Proyecto Personal", "Diseño UX/UI", "Desarrollo Frontend"],
    techBadge: ['figma', 'vue'],
    buttons: [
      { type: 'demo', url: 'http://138.68.254.39/app/' },
      { type: 'figma', url: 'https://www.figma.com/design/6yVeJjKkAnVy7yTG1shhTq/Prototipado-SIGEPRO?node-id=1292-511&p=f&t=QlJ8irZ9W3I0wwd6-0' },
      { type: 'github', url: 'https://github.com/HenryGalvezQ/phaseflow' },
      { type: 'presentation', url: 'https://www.canva.com/design/DAG75rU1odw/JxcqLztKz2kCwu3wimlAxA/edit?utm_content=DAG75rU1odw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' }
    ]
  },
  {
    id: 2,
    title: 'Portal Web Municipalidad de La Joya',
    description: 'Modernicé el portal web municipal, desarrollando un chatbot con PHP y JS, integrando visores de PDF para documentos oficiales y reforzando la seguridad del panel de administrador con autenticación de Google (OAuth).',
    expandedDescription: `<h3>Proyecto: Modernización del Portal Web de la Municipalidad Distrital de La Joya</h3>
<p>Durante mis prácticas pre-profesionales, lideré una serie de mejoras clave en el portal web de la Municipalidad Distrital de La Joya, con el objetivo de optimizar tanto la experiencia del ciudadano como la eficiencia de la gestión interna. El proyecto abarcó desarrollo de nuevas funcionalidades, mejoras en la interfaz y el refuerzo de la seguridad.</p>

<p>Mi contribución principal fue el <strong>desarrollo e implementación de un chatbot conversacional</strong>. Utilizando <strong>JavaScript para el frontend y PHP con MySQL para el backend</strong>, creé un asistente virtual capaz de guiar a los usuarios a través de consultas frecuentes, como los costos de procedimientos TUPA y otros servicios municipales. El flujo de la conversación se gestiona dinámicamente desde la base de datos, permitiendo al personal administrativo actualizar las respuestas sin necesidad de modificar el código.</p>

<p>En el ámbito de la <strong>seguridad y la administración</strong>, reforcé el acceso al panel de control implementando la <strong>autenticación mediante Google OAuth</strong>. Esta modernización eliminó el sistema de credenciales tradicional, ofreciendo un método de inicio de sesión más seguro y robusto para los funcionarios, validando sus cuentas de correo institucionales contra la base de datos de usuarios autorizados.</p>

<h4>Mejoras Adicionales de UX/UI:</h4>
<ul>
<li><strong>Visor de Documentos PDF:</strong> Implementé un visor de PDF interactivo directamente en las páginas de transparencia, como "Obras por Impuesto" y "CODISEC". Esto permite a los ciudadanos consultar resoluciones, actas y otros documentos oficiales sin necesidad de descargas, mejorando significativamente la accesibilidad a la información pública.</li>
<li><strong>Contenido Dinámico y Gestión de Banners:</strong> Desarrollé un sistema CRUD completo en el panel de administrador para gestionar los banners de la página de inicio[cite: 4306], permitiendo al equipo de prensa actualizar anuncios y noticias de forma autónoma. [cite_start]También mejoré la interfaz del carrusel de noticias y comunicados en la página principal.</li>
<li><strong>Interfaz de Usuario Optimizada:</strong> Realicé ajustes en la usabilidad del portal, como la mejora del menú de navegación para hacerlo más dinámico, la adición de un logo de carga para mejorar la percepción del rendimiento [cite: 4204] [cite_start]y la integración de nuevos canales de comunicación como TikTok en el encabezado y pie de página.</li>
</ul>`,
    tags: ["Prácticas Pre-profesionales", "Desarrollo Fullstack"],
    techBadge: ['php', 'javascript', 'mysql'],
    buttons: [
      { type: 'demo', url: 'https://www.municipalidadlajoya.gob.pe/' }
    ]
  },
  {
    id: 3,
    title: 'Tienda Online',
    description: 'Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.',
    expandedDescription: `<h3>Tienda Online - E-commerce Moderno</h3>
<p>Desarrollo completo de una tienda online con enfoque en la experiencia del usuario y conversión. Este proyecto integra un sistema de gestión de productos, carrito de compras y procesamiento de pagos.</p>
<p>Las características incluyen diseño responsivo, animaciones fluidas y optimización para dispositivos móviles.</p>`,
    buttons: [
      { type: 'demo-simple', url: '#' }
    ]
  },
  {
    id: 4,
    title: 'App de E-commerce',
    description: 'Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.',
    expandedDescription: `<h3>Aplicación E-commerce Avanzada</h3>
<p>Aplicación web progresiva (PWA) para comercio electrónico, diseñada con tecnologías modernas y enfoque mobile-first.</p>
<p>Incluye funcionalidades avanzadas como búsqueda inteligente, recomendaciones personalizadas y integración con múltiples métodos de pago.</p>`,
    buttons: [
      { type: 'demo-simple', url: '#' }
    ]
  },
  {
    id: 5,
    title: 'Diseño de Marca',
    description: 'Sitio web diseñado en Figma y desarrollado en Vue 3, utiliza Pinia store y tailwindcss, está conectado al backend con ApiRESTFul y sigo hablando y hablando y hablandoooooo.',
    expandedDescription: `<h3>Proyecto: Sistema de Identidad Corporativa</h3>
<p>Desarrollo integral de identidad corporativa que abarca desde el diseño conceptual hasta la implementación digital. Este proyecto se centró en crear una presencia de marca coherente y memorable.</p>`,
    tags: ["Proyecto Personal", "Diseño UX/UI", "Desarrollo Frontend"],
    techBadge: ['figma', 'vue'],
    buttons: [
      { type: 'demo', url: 'http://138.68.254.39/app/' },
      { type: 'figma', url: 'https://www.figma.com/design/6yVeJjKkAnVy7yTG1shhTq/Prototipado-SIGEPRO?node-id=1292-511&p=f&t=QlJ8irZ9W3I0wwd6-0' },
      { type: 'presentation', url: '#' },
      { type: 'github', url: 'https://github.com/HenryGalvezQ/phaseflow' }
    ]
  },
  {
    id: 6,
    title: 'Diseño de Marca',
    description: 'Sitio web diseñado en Figma y desarrollado en Vue 3, utiliza Pinia store y tailwindcss, está conectado al backend con ApiRESTFul y sigo hablando y hablando y hablandoooooo.',
    expandedDescription: `<h3>Proyecto: Branding Digital Completo</h3>
<p>Creación de una identidad de marca digital completa que incluye diseño web, aplicaciones móviles y material promocional. El proyecto se desarrolló siguiendo metodologías de design thinking.</p>`,
    tags: ["Proyecto Personal", "Diseño UX/UI", "Desarrollo Frontend"],
    techBadge: ['figma', 'vue'],
    buttons: [
      { type: 'demo', url: 'http://67.205.133.92/app/' },
      { type: 'figma', url: 'https://www.figma.com/design/6yVeJjKkAnVy7yTG1shhTq/Prototipado-SIGEPRO?node-id=1292-511&p=f&t=QlJ8irZ9W3I0wwd6-0' },
      { type: 'presentation', url: '#' },
      { type: 'github', url: 'https://gitlab.com/pisw2025-proyectos-investigacion/sigepro-frontend' }
    ]
  },
  {
    id: 7,
    title: 'Diseño de Marca',
    description: 'Sitio web diseñado en Figma y desarrollado en Vue 3, utiliza Pinia store y tailwindcss, está conectado al backend con ApiRESTFul y sigo hablando y hablando y hablandoooooo.',
    expandedDescription: `<h3>Proyecto: Rediseño de Identidad Corporativa</h3>
<p>Modernización completa de la identidad visual de una empresa establecida, incluyendo la migración de sistemas legacy y actualización de todos los materiales de marca.</p>`,
    tags: ["Proyecto Personal", "Diseño UX/UI", "Desarrollo Frontend"],
    techBadge: ['figma', 'vue'],
    buttons: [
      { type: 'demo', url: 'http://67.205.133.92/app/' },
      { type: 'figma', url: 'https://www.figma.com/design/6yVeJjKkAnVy7yTG1shhTq/Prototipado-SIGEPRO?node-id=1292-511&p=f&t=QlJ8irZ9W3I0wwd6-0' },
      { type: 'presentation', url: '#' },
      { type: 'github', url: 'https://gitlab.com/pisw2025-proyectos-investigacion/sigepro-frontend' }
    ]
  }
];