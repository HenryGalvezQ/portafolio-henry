// src/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    title: 'Sigepro',
    description: 'Prototipé en Figma y desarrollé una SPA de gestión de proyectos con una UI adaptativa basada en roles (Admin / Cliente / Colaborador), lo construí con Vue 3, Pinia y Tailwind CSS y lo conecté al backend con APIRESTful.',
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
    tags: ["Frontend Dev", "Diseño UX/UI", "Prácticas Pre-profesionales"],
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
<li><strong>Contenido Dinámico y Gestión de Banners:</strong> Desarrollé un sistema CRUD completo en el panel de administrador para gestionar los banners de la página de inicio, permitiendo al equipo de prensa actualizar anuncios y noticias de forma autónoma. También mejoré la interfaz del carrusel de noticias y comunicados en la página principal.</li>
<li><strong>Interfaz de Usuario Optimizada:</strong> Realicé ajustes en la usabilidad del portal, como la mejora del menú de navegación para hacerlo más dinámico, la adición de un logo de carga para mejorar la percepción del rendimiento y la integración de nuevos canales de comunicación como TikTok en el encabezado y pie de página.</li>
</ul>`,
    tags: ["Frontend Dev", "Fullstack", "Prácticas Pre-profesionales"],
    techBadge: ['php', 'javascript', 'mysql'],
    buttons: [
      { type: 'demo', url: 'https://www.municipalidadlajoya.gob.pe/' }
    ]
  },
  {
    id: 3,
    title: 'SafeBank ID',
    description: 'Desarrollé un SDK de autenticación biométrica facial "On-Device" para Android, utilizando Kotlin y Google ML Kit para detección de vida (liveness) y cifrado local, eliminando la dependencia de servidores externos.',
    expandedDescription: `<h3>SafeBank ID - Seguridad Biométrica On-Device</h3>
<p>SafeBank ID es una solución de seguridad móvil innovadora diseñada para combatir el fraude financiero post-robo. A diferencia de las apps bancarias tradicionales que dependen del PIN o la huella del sistema operativo, SafeBank ID es un <strong>SDK de autenticación biométrica independiente</strong> que se integra directamente en las aplicaciones, verificando la identidad del usuario en tiempo real mediante reconocimiento facial activo.</p>

<p>Técnicamente, el proyecto fue desarrollado nativamente en <strong>Android con Kotlin y Jetpack Compose</strong>. El núcleo de la inteligencia artificial utiliza <strong>Google ML Kit</strong> para la detección de rostros y landmarks, implementando algoritmos personalizados para la prueba de vida (liveness detection) mediante análisis de parpadeo, lo que previene ataques de suplantación (anti-spoofing) con fotos o videos. Para la gestión de la cámara y el procesamiento de imágenes de alta velocidad se utilizó <strong>CameraX</strong>.</p>

<p>Lo que distingue a este proyecto es su arquitectura <strong>100% Local (On-Device)</strong>. No envía datos biométricos a la nube, garantizando la privacidad del usuario y reduciendo los costos de infraestructura para las entidades financieras. Las plantillas biométricas se cifran con estándares avanzados (AES-256) utilizando <strong>EncryptedSharedPreferences</strong>, asegurando que la información sensible nunca salga del dispositivo.</p>

<h4>Características Clave:</h4>
<ul>
<li><strong>Liveness Detection Activo:</strong> Sistema anti-spoofing que requiere interacción del usuario (parpadeo) para validar que es una persona real y no una grabación.</li>
<li><strong>Privacidad y Cero Latencia:</strong> Verificación instantánea (< 0.5s) y funcionamiento offline, alineado con estándares de seguridad ISO 27001.</li>
<li><strong>Integración SDK:</strong> Diseño modular pensado para ser consumido fácilmente por otras aplicaciones fintech como una librería de seguridad.</li>
</ul>`,
    tags: ["Mobile", "Frontend Dev", "Impacto Social"],
    techBadge: ['android', 'kotlin', 'java'], // Asumo Java/Kotlin por el entorno Android
    buttons: [
       // He puesto un placeholder, asegúrate de poner el link a tu video demo o al PDF si lo subes a un drive
      { type: 'presentation', url: 'https://www.canva.com/design/DAHAxIOo06U/zfwtahyrOhM7jw0lZV559A/edit?utm_content=DAHAxIOo06U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' }, 
      { type: 'github', url: 'https://github.com/HenryGalvezQ' } // Enlace general a tu GitHub si no es público
    ]
  },
  {
    id: 4,
    title: 'Portafolio Personal',
    description: 'Diseñé y desarrollé mi sitio web personal utilizando Vue 3 y Vite, implementando una arquitectura de componentes modular, con un diseño responsive enfocado en la experiencia de usuario.',
    expandedDescription: `<h3>Portafolio Profesional - Identidad Digital</h3>
<p>Este portafolio es una representación de mis habilidades como Desarrollador Frontend y Diseñador UX/UI. Fue construido desde cero con el objetivo de crear una interfaz limpia, moderna y altamente performante que sirva como escaparate para mis proyectos y experiencia profesional.</p>

<p>La arquitectura técnica se basa en <strong>Vue 3 (Composition API)</strong> potenciado por <strong>Vite</strong>, lo que asegura una carga instantánea y una gestión eficiente de los recursos. Implementé una estructura de componentes reutilizables y un manejo de estado reactivo para funcionalidades globales como el cambio de tema (Dark/Light Mode) y la navegación activa (Scroll Spy), mejorando la interactividad sin comprometer el rendimiento.</p>

<p>El diseño visual sigue principios de <strong>Mobile-First</strong> y diseño adaptativo, asegurando una visualización perfecta en cualquier dispositivo. Utilicé CSS moderno para las animaciones y transiciones suaves, y organicé la información (como estos datos de proyectos) en módulos JS independientes para facilitar la escalabilidad y el mantenimiento del contenido a largo plazo.</p>

<h4>Características Destacadas:</h4>
<ul>
<li><strong>Arquitectura Basada en Componentes:</strong> Estructura modular (Header, Hero, Projects, Contact) que facilita la reutilización y el mantenimiento del código.</li>
<li><strong>Gestión de Tema Dinámico:</strong> Sistema de modo oscuro/claro con persistencia en el almacenamiento local (LocalStorage) para recordar las preferencias del usuario.</li>
<li><strong>Optimización y Performance:</strong> Uso de carga perezosa (lazy loading) para recursos y optimización de assets para maximizar la velocidad del sitio.</li>
</ul>`,
    tags: ["Frontend Dev", "Diseño UX/UI"],
    techBadge: ['vue', 'javascript'],
    buttons: [
      { type: 'github', url: 'https://github.com/HenryGalvezQ/portafolio-henry' }, // Tu repo del portafolio
      { type: 'demo', url: 'https://henrygalvez-frontend.netlify.app/' } // La URL donde está desplegado este mismo portafolio
    ]
  },
{
    id: 5,
    title: 'ReMarket',
    description: 'Aplicación nativa Android para compraventa segura, desarrollada con Kotlin y Jetpack Compose. Implementa arquitectura MVVM Clean, sincronización offline (Room/WorkManager) y chat en tiempo real.',
    expandedDescription: `<h3>ReMarket - Marketplace Seguro y Offline-First</h3>
<p>ReMarket es una aplicación móvil nativa diseñada para combatir el comercio informal de dispositivos electrónicos. El proyecto destaca por su ingeniería frontend avanzada, ofreciendo una experiencia de usuario robusta incluso en entornos sin conexión a internet, priorizando la seguridad y la integridad de los datos.</p>

<p>En el <strong>Frontend (Android)</strong>, implementé una arquitectura moderna basada en <strong>MVVM y Clean Architecture</strong> utilizando <strong>Kotlin y Jetpack Compose</strong>. La interfaz de usuario es totalmente declarativa, gestionando estados complejos de UI de forma reactiva con StateFlow. Para garantizar una experiencia fluida (UX), desarrollé una estrategia de <strong>"Offline-First"</strong>: la aplicación utiliza Room Database como única fuente de verdad, permitiendo a los usuarios crear productos y navegar sin internet. La sincronización con el backend se maneja en segundo plano mediante <strong>WorkManager</strong> una vez que se recupera la conexión.</p>

<p>A nivel de <strong>Diseño y UX/UI</strong>, prototipé la aplicación en Figma enfocándome en flujos diferenciados por roles (Administrador vs. Cliente). La aplicación incluye características interactivas avanzadas como un chat en tiempo real (integrado con Firestore), gestión de estados de carga y error, y un sistema de validación de identidad seguro. La inyección de dependencias con <strong>Hilt</strong> asegura que el código sea modular, escalable y fácilmente testeable.</p>

<h4>Características Técnicas Frontend:</h4>
<ul>
<li><strong>Arquitectura Reactiva y Limpia:</strong> Separación estricta de capas (UI, Domain, Data) usando Jetpack Compose para la UI y Coroutines/Flow para el manejo asíncrono de datos.</li>
<li><strong>Sincronización Offline (Background Sync):</strong> Persistencia local con Room y colas de trabajo con WorkManager para subir imágenes y datos automáticamente cuando hay red.</li>
<li><strong>Gestión de Estado Avanzada:</strong> Uso de ViewModels y StateFlow para comunicar cambios de datos a la UI en tiempo real (ej. nuevos mensajes de chat o actualizaciones de estado de venta).</li>
<li><strong>Seguridad e Integración:</strong> Implementación de autenticación segura con Tokens JWT e interceptores de Retrofit, integrando servicios de Firebase y Cloudinary de forma transparente al usuario.</li>
</ul>`,
    tags: ["Mobile", "Frontend Dev", "Diseño UX/UI"],
    techBadge: ['android', 'kotlin', 'firebase'],
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/design/NCiaj1TCaKbz3j24Zw5hzG/Marketplace?node-id=0-1&t=caPV8ReaIRql9K12-1' },
      { type: 'presentation', url: 'https://docs.google.com/presentation/d/1EVbWNegmOR5PqxnBDhOR_0beXEWSdEH6/edit?usp=sharing&ouid=114415674854887529375&rtpof=true&sd=true' },
      { type: 'github', url: 'https://github.com/dhuamanilu/ReMarket' }
    ]
  },
  {
    id: 6,
    title: 'ReMarket App Multiplataforma',
    description: 'Migración del marketplace ReMarket a un entorno multiplataforma utilizando Flutter y Dart. UI optimizada mediante el patrón BFF (Backend-For-Frontend) para mejorar la velocidad de carga y fluidez en iOS y Android.',
    expandedDescription: `<h3>ReMarket Multiplataforma - Migración a Flutter</h3>
<p>Como parte de un proyecto académico para la asignatura de Plataformas Emergentes, participé en la migración de la aplicación nativa ReMarket hacia un entorno de desarrollo multiplataforma. El desafío principal fue unificar la base de código para sistemas operativos móviles manteniendo un alto estándar en la fluidez de la interfaz y la experiencia de usuario (UX).</p>

<p>Desde la perspectiva del <strong>Desarrollo Frontend</strong>, la aplicación fue reescrita completamente utilizando <strong>Flutter y Dart</strong>. Aproveché la arquitectura basada en widgets de Flutter para crear una interfaz de usuario altamente componetizada, reactiva y adaptable a diferentes tamaños de pantalla. La gestión del estado se optimizó para garantizar transiciones suaves entre las pantallas de catálogo, detalles del producto y flujos de compra/venta, evitando bloqueos en el hilo principal de la UI.</p>

<p>En cuanto a la <strong>Arquitectura y Experiencia de Usuario</strong>, la aplicación consume servicios a través de un patrón <strong>BFF (Backend-For-Frontend)</strong>. Aunque es una implementación de lado del servidor, su impacto es netamente frontend: permite que la aplicación móvil solicite y reciba cargas de datos (payloads) hechas a medida para las pantallas exactas que el usuario está viendo, reduciendo drásticamente los tiempos de carga, el consumo de datos móviles y mejorando la percepción de rendimiento general.</p>

<h4>Características Destacadas de la UI/UX:</h4>
<ul>
<li><strong>Experiencia Unificada (Cross-Platform):</strong> Diseño y desarrollo de interfaces consistentes que se sienten naturales tanto en dispositivos Android como iOS utilizando el catálogo de widgets de Material Design y Cupertino.</li>
<li><strong>Optimización de Carga con BFF:</strong> Integración con una capa intermedia que estructura los datos específicamente para la vista móvil, mejorando la velocidad de renderizado de las listas de productos y galerías de imágenes.</li>
<li><strong>Formularios y Validaciones Fluidas:</strong> Implementación de flujos de registro y publicación de productos con retroalimentación visual en tiempo real y manejo de errores amigable para el usuario.</li>
</ul>`,
    tags: ["Mobile", "Frontend Dev", "Diseño UX/UI"],
    techBadge: ['flutter', 'dart'],
    buttons: [
      { type: 'github', url: 'https://github.com/HenryGalvezQ/PE-Lab04' },
      { type : 'presentation', url: 'https://docs.google.com/document/d/1WWqDpdJtigqhOI0Xb6xgOAzqZ22y2bXnCtbRHFBsXPc/edit?usp=sharing' },
      { type: 'figma', url: 'https://www.figma.com/design/NCiaj1TCaKbz3j24Zw5hzG/Marketplace?node-id=0-1&t=caPV8ReaIRql9K12-1' } // He mantenido el enlace de Figma del proyecto original, ya que el diseño base es el mismo.
    ]
  },
  {
    id: 7,
    title: 'UNSA Park',
    description: 'Lideré el desarrollo de una aplicación móvil IoT para la gestión de estacionamientos universitarios. Construida con React Native y TypeScript, integra mapas interactivos y visualización de disponibilidad en tiempo real.',
    expandedDescription: `<h3>UNSA Park - Smart Campus & IoT</h3>
<p>UNSA Park es una solución móvil integral desarrollada bajo el concepto de "Smart Cities" para optimizar el control de acceso y la gestión de estacionamientos en el campus universitario. Como <strong>Lead Mobile Developer & Architect</strong>, diseñé una aplicación capaz de procesar datos de sensores IoT y presentarlos al usuario de manera instantánea y amigable.</p>

<p>En el <strong>Frontend Móvil</strong>, utilicé <strong>React Native con TypeScript</strong> para crear una arquitectura de componentes reutilizables y tipados, asegurando la escalabilidad y el mantenimiento del código. Implementé el motor <strong>Hermes</strong> para optimizar el tiempo de inicio de la app y reducir el tamaño del bundle, garantizando un rendimiento fluido incluso en dispositivos de gama media/baja. La interfaz se comunica con un backend IoT mediante protocolos eficientes para reflejar el estado de los espacios físicos sin latencia perceptible.</p>

<p>La <strong>Experiencia de Usuario (UX)</strong> se centra en la visualización geoespacial. Integré <strong>react-native-maps</strong> para renderizar un mapa interactivo del campus donde los conductores pueden ver la disponibilidad de espacios en tiempo real (libres/ocupados) mediante indicadores visuales codificados por colores. Además, diseñé un sistema de <strong>trazado de rutas (routing)</strong> que guía al usuario desde su posición actual hasta la puerta de ingreso seleccionada, reduciendo el tiempo de búsqueda de estacionamiento y la congestión vehicular interna.</p>

<h4>Características Técnicas Destacadas:</h4>
<ul>
<li><strong>Mapas Interactivos y Geolocalización:</strong> Visualización dinámica de zonas de parqueo sobre mapas reales con marcadores de estado en vivo.</li>
<li><strong>Arquitectura Optimizada:</strong> Uso de TypeScript para una lógica de negocio robusta y Hermes para un rendimiento nativo superior en Android.</li>
<li><strong>Integración IoT en Frontend:</strong> Consumo de flujos de datos en tiempo real para actualizar la UI instantáneamente cuando un sensor detecta la entrada o salida de un vehículo.</li>
<li><strong>Sistema de Navegación:</strong> Flujos de usuario intuitivos para consulta de historial de accesos y guía de navegación asistida.</li>
</ul>`,
    tags: ["Mobile", "Frontend Dev", "Impacto Social"],
    techBadge: ['react', 'typescript', 'android'], 
    buttons: [
      { type: 'presentation', url: '#' }, // Enlace a tus diapositivas o video demo
      { type: 'github', url: 'https://github.com/HenryGalvezQ' } // Tu perfil o repo si es público
    ]
  },
  {
    id: 8,
    title: 'Symmetry Applicant Showcase',
    description: 'Superé los requerimientos de una prueba técnica avanzada desarrollando una app Flutter con arquitectura "Offline-First", sincronización bidireccional (Store-and-Forward) y un sistema de diseño adaptable (Dark/Light Mode).',
    expandedDescription: `<h3>Symmetry App - Ingeniería de Software aplicada a Mobile</h3>
<p>Este proyecto fue desarrollado como respuesta a un desafío técnico de alto nivel, donde el objetivo no era solo cumplir con los requisitos funcionales, sino demostrar excelencia en ingeniería de software. Adopté un enfoque de <strong>Producto Mínimo Viable (MVP)</strong> listo para producción, priorizando la escalabilidad, la robustez de los datos y una experiencia de usuario pulida.</p>

<p>A nivel de <strong>Arquitectura y Backend Local</strong>, implementé una estrategia estricta de <strong>Clean Architecture</strong> con separación de capas (Domain, Data, Presentation) y el patrón <strong>BLoC</strong> para la gestión de estado reactivo. El núcleo del sistema es un motor de sincronización personalizado ("Store-and-Forward") que utiliza <strong>Floor (SQLite)</strong> como fuente de verdad local y <strong>Firebase</strong> como respaldo en la nube. Resolví desafíos complejos de concurrencia ("Race Conditions") mediante semáforos y estrategias de fusión de estados, garantizando que los datos nunca se pierdan, incluso si el usuario edita contenido sin conexión a internet.</p>

<p>En el <strong>Frontend y UX/UI</strong>, fui más allá de los requisitos básicos ("Maximally Overdeliver"). Diseñé un sistema de temas dinámico (Dark/Light Mode) con persistencia de preferencias y componentes de marca adaptativos. Implementé un motor de búsqueda y filtrado en memoria para una respuesta instantánea, y aseguré la privacidad de los datos mediante un aislamiento estricto de sesiones (Row-Level Security) en la base de datos local, limpiando información sensible al cerrar sesión.</p>

<h4>Características Técnicas Avanzadas:</h4>
<ul>
<li><strong>Motor de Sincronización Bidireccional:</strong> Algoritmo personalizado que gestiona colas de subida y descarga, resolviendo conflictos de datos y permitiendo operaciones CRUD completas en modo offline.</li>
<li><strong>Optimistic UI:</strong> La interfaz responde inmediatamente a las acciones del usuario (likes, guardados, creación de artículos) mientras las operaciones se procesan en segundo plano.</li>
<li><strong>Soft Deletes & Data Integrity:</strong> Implementación de borrado lógico para sincronización segura y manejo de transiciones de estado complejas entre local y remoto.</li>
<li><strong>Seguridad y Aislamiento:</strong> Arquitectura diseñada para entornos multi-usuario en un mismo dispositivo, asegurando que los datos cacheados sean inaccesibles entre diferentes sesiones.</li>
</ul>`,
    tags: ["Mobile", "Frontend Dev", "Fullstack"],
    techBadge: ['flutter', 'dart', 'firebase'],
    buttons: [
      { type: 'github', url: 'https://github.com/HenryGalvezQ/starter-project/tree/main' },
      { type: 'demo', url: '#' } // Si tienes el video en YouTube o Drive, pon el link aquí.
    ]
  },
  {
    id: 9,
    title: 'MiMedioPasaje',
    description: 'Aplicación móvil ganadora del 1er Puesto en la Feria de Proyectos UNSA. Desarrollada en Flutter, automatiza denuncias de transporte público mediante geolocalización y captura de evidencia multimedia.',
    expandedDescription: `<h3>MiMedioPasaje - Tecnología con Impacto Social</h3>
<p>Galardonada con el <strong>Primer Puesto en la Feria de Proyectos de la UNSA</strong>, esta aplicación aborda una problemática social crítica: el incumplimiento del medio pasaje universitario. Mi rol se centró en diseñar una solución tecnológica que empoderara a los estudiantes, transformando un trámite burocrático engorroso en una acción digital inmediata y accesible.</p>

<p>En el frente de <strong>Ingeniería Móvil con Flutter</strong>, desarrollé una aplicación nativa optimizada para la velocidad de respuesta, factor crucial en situaciones de conflicto en el transporte. Implementé la integración con APIs de hardware para la <strong>captura de evidencia multimedia (foto/video/audio)</strong> y servicios de <strong>Geolocalización (Google Maps API)</strong> para registrar las coordenadas exactas de la infracción automáticamente. La arquitectura maneja el almacenamiento de estas pruebas en la nube, asegurando su integridad para el reporte.</p>

<p>El desafío de <strong>UX/UI</strong> fue simplificar la carga cognitiva del usuario bajo estrés. Diseñé un flujo de "Denuncia en 3 Pasos" que permite registrar un incidente en menos de un minuto. La interfaz prioriza botones de acción grandes y claros, y un sistema de feedback visual que confirma al estudiante que su reporte ha sido generado exitosamente, brindando una sensación de seguridad y respaldo.</p>

<h4>Logros y Tecnologías:</h4>
<ul>
<li><strong>Reconocimiento Académico:</strong> Proyecto ganador del 1er Lugar por su innovación y viabilidad técnica.</li>
<li><strong>Integración de Hardware:</strong> Manejo eficiente de cámara, micrófono y GPS dentro del ciclo de vida de la app.</li>
<li><strong>Automatización de Procesos:</strong> Digitalización completa del flujo de reclamos ante INDECOPI.</li>
</ul>`,
    tags: ["Mobile", "Frontend Dev", "Diseño UX/UI"],
    techBadge: ['flutter', 'dart'],
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/design/FArnBNdsQ20gifkbbXM41o/MiPasaje?t=caPV8ReaIRql9K12-1' },
      { type: 'github', url: 'https://github.com/francoCarMar/MiMedioPasaje-Frontend' },
      // He puesto el enlace al documento como 'presentation' para que sea accesible como documentación técnica
      { type: 'presentation', url: 'https://docs.google.com/document/d/13SZJP68qrJpc-c3_Kotq1mlo4phvbQ9x/edit?usp=sharing&ouid=114415674854887529375&rtpof=true&sd=true' }
    ]
  },
  {
    id: 10,
    title: 'DescubrAqp',
    description: 'Aplicación nativa Android con arquitectura modular. Integra vistas panorámicas 360°, trazado de rutas GPS y reproducción de audio-guías en segundo plano mediante Foreground Services.',
    expandedDescription: `<h3>DescubrAqp - Experiencia Turística Inmersiva</h3>
<p>DescubrAqp es una aplicación móvil nativa diseñada para revitalizar el turismo en Arequipa mediante una experiencia digital interactiva. [cite_start]El proyecto se estructuró bajo una <strong>Arquitectura Modular</strong> organizada por capas (UI, Data, Domain), lo que facilitó la escalabilidad y el mantenimiento del código[cite: 13, 21].</p>

<p>En el ámbito de <strong>Ingeniería Frontend Android</strong>, implementé características avanzadas que van más allá de un simple CRUD. [cite_start]Desarrollé un <strong>Sistema de Audio en Segundo Plano</strong> utilizando <em>Foreground Services</em> y notificaciones persistentes, permitiendo al usuario escuchar la historia del lugar mientras explora otras apps o bloquea el teléfono[cite: 301, 303]. [cite_start]Para la gestión de datos, integré <strong>Room Database</strong>, implementando el patrón Repository y DAOs para garantizar una experiencia <em>offline</em> fluida y una única fuente de verdad[cite: 135, 230].</p>

<p>El enfoque en <strong>UX/UI e Interactividad</strong> es el núcleo del proyecto. [cite_start]Diseñé un módulo de <strong>Visualización 360°</strong> que procesa imágenes panorámicas y responde a gestos táctiles (inercia, zoom, rotación) para una inmersión total[cite: 451, 480]. [cite_start]Además, integré la API de Google Maps y Open Route Service para trazar <strong>rutas de navegación óptimas</strong> (Polylines) en tiempo real desde la ubicación del usuario hasta el destino turístico[cite: 519, 522].</p>

<h4>Características Técnicas Destacadas:</h4>
<ul>
[cite_start]<li><strong>Vista Inmersiva 360°:</strong> Renderizado de panoramas esféricos con control gestual y gestión eficiente del ciclo de vida del fragmento para optimizar memoria[cite: 455, 500].</li>
[cite_start]<li><strong>Servicios Background:</strong> Reproducción de audio continua mediante <code>startForeground</code> y gestión de notificaciones multimedia personalizadas[cite: 361, 377].</li>
[cite_start]<li><strong>Mapas y Geolocalización:</strong> Integración de marcadores dinámicos y cálculo de rutas paso a paso utilizando servicios REST externos[cite: 50, 577].</li>
[cite_start]<li><strong>Persistencia Local (Room):</strong> Base de datos relacional para cachear edificaciones, comentarios y mapas internos de los recintos[cite: 230, 248].</li>
</ul>`,
    tags: ["Mobile","Frontend Dev", "Diseño UX/UI"],
    techBadge: ['android', 'java', 'figma'], // El código del PDF muestra sintaxis Java
    buttons: [
      { type: 'github', url: 'https://github.com/Triplerush/DescubrAqp' },
      { type: 'figma', url: 'https://www.figma.com/design/d8d1HZCj0g86ZdbPPJjJck/Aqp?node-id=0-1&t=2thgBg5euWGxAW6o-1' },
      { type: 'presentation', url: 'https://www.canva.com/design/DAHA-KoswWw/7WyGo_4CmJCDQfaFZksegw/edit?utm_content=DAHA-KoswWw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' } 
    ]
  },
  {
    id: 11,
    title: 'For-UNSA',
    description: 'Diseñé la experiencia de usuario (UX) e interfaz (UI) completa de esta plataforma académica. Entregué prototipos de alta fidelidad en Figma y definí la guía de estilos para el equipo de desarrollo.',
    expandedDescription: `<h3>For-UNSA - Diseño de Experiencia Académica</h3>
<p>For-UNSA es una plataforma colaborativa diseñada para centralizar recursos académicos. En este proyecto, mi rol fue exclusivamente el de <strong>Lead UX/UI Designer</strong>, trabajando en estrecha colaboración con el equipo de desarrollo bajo una metodología ágil (SCRUM).</p>

<p>Mi responsabilidad principal fue traducir los requerimientos funcionales en una interfaz intuitiva y atractiva. Utilicé <strong>Figma</strong> para crear todo el sistema de diseño, desde los wireframes de baja fidelidad hasta los prototipos interactivos de alta fidelidad (High-Fidelity). Me enfoqué en resolver la arquitectura de la información para que los estudiantes pudieran navegar entre facultades, escuelas y cursos sin fricción, priorizando la legibilidad y la facilidad de acceso a los documentos.</p>

<p>Definí la <strong>Identidad Visual</strong> del proyecto (paleta de colores, tipografía y componentes UI), asegurando la consistencia en todas las vistas. Además, realicé el "Hand-off" (entrega) de los diseños a los desarrolladores, proporcionando especificaciones claras sobre comportamientos, estados de los botones y flujos de navegación, lo que facilitó la implementación del frontend en React.</p>

<h4>Aportes de Diseño:</h4>
<ul>
<li><strong>Prototipado Completo:</strong> Diseño de todas las vistas clave (Login, Feed, Perfil, Detalle de Curso) en Figma.</li>
<li><strong>Sistema de Diseño (Design System):</strong> Creación de una guía de estilos y componentes reutilizables para mantener la coherencia visual.</li>
<li><strong>Flujo de Usuario (User Flow):</strong> Optimización de la navegación para reducir el número de clics necesarios para encontrar un sílabo o recurso.</li>
</ul>`,
    tags: ["Diseño UX/UI", "Frontend Dev"],
    techBadge: ['figma'], // Eliminamos React/Python para ser fieles a tu rol
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/design/yR3jjtWpHpcrZeAFD8g5ye/Prototipo--Copia-?node-id=0-1&t=qeyHyAst2IBwDw4b-1' },
      { type: 'presentation', url: 'https://docs.google.com/presentation/d/1CTQ12oEVfDb43T7HHMNFHRVAe42OfOzzwQgP9V5Tf3c/edit?usp=sharing' },
      // Mantenemos el repo por si quieren ver el resultado final del equipo, pero priorizamos Figma
      { type: 'github', url: 'https://github.com/atn25042002/ForUnsa' }
    ]
  },
  {
    id: 12,
    title: 'MiCombi - UX Caso de Estudio',
    description: 'Caso de estudio completo de UX/UI para una app de transporte público. Abarqué desde la investigación de usuarios y arquitectura de información hasta el prototipado en alta fidelidad y validación con métricas de usabilidad.',
    expandedDescription: `<h3>MiCombi - Diseño Centrado en el Usuario</h3>
<p>Desarrollado como proyecto final para la certificación de <strong>UX/UI Avanzado en Coderhouse</strong>, "MiCombi" nace para solucionar la caótica experiencia de navegar el transporte público informal en ciudades peruanas. Este proyecto no se limitó al diseño visual, sino que siguió rigurosamente la metodología del <strong>Design Thinking</strong>.</p>

<p>En la fase de <strong>UX Research</strong>, realicé un benchmarking competitivo (analizando TuRuta, Rumbo, Google Maps) y entrevistas con usuarios reales para definir <em>User Personas</em> y <em>Journey Maps</em>. Identifiqué que la principal fricción no era la falta de rutas, sino la incertidumbre y la ansiedad del usuario al no saber dónde bajar. Con estos hallazgos, definí la arquitectura de la información y los flujos de usuario (User Flows).</p>

<p>Para el <strong>Diseño de Interacción (IxD) y UI</strong>, iteré a través de tres niveles de fidelidad: bocetos en papel (Low-Fi), wireframes estructurales (Mid-Fi) y finalmente un prototipo interactivo en Alta Fidelidad (High-Fi) en <strong>Figma</strong>. Implementé un sistema de diseño atómico para garantizar la consistencia visual y la escalabilidad del producto.</p>

<p>Lo más destacado fue la fase de <strong>Validación y Testing</strong>. Llevé a cabo pruebas de usabilidad moderadas con usuarios potenciales, midiendo el éxito de la tarea y la satisfacción mediante métricas estandarizadas como el <strong>SEQ (Single Ease Question)</strong> y la escala <strong>SUS (System Usability Scale)</strong>, iterando el diseño final basándome en estos resultados cuantitativos y cualitativos.</p>

<h4>Entregables y Técnicas:</h4>
<ul>
<li><strong>Investigación:</strong> Benchmarking, Entrevistas, User Personas, Empathy Maps.</li>
<li><strong>Diseño:</strong> Wireframing (Baja/Media/Alta fidelidad), Prototipado Interactivo, Design System.</li>
<li><strong>Métricas de Usabilidad:</strong> Pruebas con usuarios reales, medición de Tasa de Éxito, SEQ y SUS.</li>
</ul>`,
    tags: ["Diseño UX/UI", "Caso de Estudio", "Impacto Social"],
    techBadge: ['figma'], // Asumo Miro o similar para la parte de investigación, es estándar.
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/file/IjraYwcUMkE7xSmGn3lPjx/MiCombi-UX%2FUI?type=design&node-id=247%3A4052&t=GpJAVXUknP2p2qRe-1' },
      { type: 'demo', url: 'https://www.figma.com/proto/IjraYwcUMkE7xSmGn3lPjx/MiCombi-UX%2FUI?type=design&node-id=247-4743&scaling=scale-down&page-id=247%3A4052&starting-point-node-id=247%3A4743' }, // Link directo al prototipo funcional
      // Si quieres incluir el PDF como un "Case Study" descargable:
      { type: 'presentation', url: 'https://docs.google.com/presentation/d/1sTodpTIea1VuydorGpjw8gmAA24KXMM5TTV3sz0kU3I/edit?usp=sharing' } 
    ]
  },
  {
    id: 13,
    title: 'Cinepolis - Caso de Estudio UX-UI',
    description: 'Caso de estudio de rediseño de la experiencia de compra de entradas. Enfoque en la optimización del flujo de usuario (User Flow), prototipado interactivo en Figma y validación mediante pruebas de usabilidad moderadas.',
    expandedDescription: `<h3>Cinepolis - Optimización de la Experiencia de Compra</h3>
<p>Este proyecto consistió en un rediseño integral del flujo de adquisición de boletos para la cadena de cines Cinepolis, realizado como parte de una especialización en UX/UI. El objetivo principal fue identificar y eliminar los puntos de fricción (pain points) que causaban el abandono del carrito durante el proceso de compra digital.</p>

<p>La fase de <strong>Investigación y Estrategia (UX Research)</strong> comenzó con un análisis heurístico de la aplicación actual y entrevistas a usuarios frecuentes. Desarrollé artefactos clave como <em>User Personas</em> y <em>Customer Journey Maps</em> para mapear las emociones del usuario en cada etapa. Los hallazgos del "Reporte de Insights" revelaron problemas críticos en la selección de butacas y la claridad de los costos finales, lo que guió la nueva arquitectura de información.</p>

<p>Para la etapa de <strong>Diseño y Prototipado</strong>, utilicé <strong>Figma</strong> para iterar desde wireframes de baja fidelidad hasta un prototipo de alta fidelidad (High-Fi) totalmente interactivo. Implementé mejoras visuales y de interacción, como un selector de asientos más intuitivo y un desglose de precios transparente. El diseño final fue sometido a <strong>Pruebas de Usabilidad</strong> con usuarios reales, permitiéndome validar las hipótesis de mejora y ajustar el producto basándome en métricas de éxito y tiempos de ejecución de tareas.</p>

<h4>Entregables Clave:</h4>
<ul>
<li><strong>Reporte de Insights:</strong> Documentación detallada de hallazgos cualitativos y cuantitativos tras las pruebas con usuarios.</li>
<li><strong>Prototipo Navegable:</strong> Simulación completa del flujo de compra ("Happy Path") con micro-interacciones.</li>
<li><strong>Iteración Basada en Datos:</strong> Ajustes de diseño realizados post-testing para maximizar la usabilidad.</li>
</ul>`,
    tags: ["Diseño UX/UI", "Caso de Estudio"],
    techBadge: ['figma'],
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/file/tG9evssbIGB63QkJgJbpEs/PrototipoCinepolis-Henry?type=design&node-id=0%3A1&mode=design&t=avEtrFq5IL6MLtwo-1' },
      { type: 'demo', url: 'https://www.figma.com/proto/tG9evssbIGB63QkJgJbpEs/PrototipoCinepolis-Henry?node-id=9-657&t=UBkL5c4JQ9h17qFs-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A2&starting-point-node-id=9%3A657&show-proto-sidebar=1' },
      // He vinculado los reportes PDF que subiste como documentación adicional si decides alojarlos en algún lugar público, 
      // o puedes mantenerlos como parte de tu explicación en entrevistas.
      { type: 'presentation', url: 'https://docs.google.com/presentation/d/1ub7yW99RkIxHOC7Wu-7UhsJ-JQkqZMIP-5fD6w9Nap4/edit?usp=sharing' } 
    ]
  },
  {
    id: 14,
    title: 'Helpy',
    description: 'Diseñé y prototipé una aplicación móvil de asistencia médica geriátrica. Me enfoqué en la accesibilidad para el adulto mayor y validé la usabilidad del diseño mediante pruebas comparativas (método SUS) frente a competidores.',
    expandedDescription: `<h3>Helpy - Salud y Accesibilidad Digital</h3>
<p>Presentado en la <strong>Feria de Proyectos 2022</strong>, Helpy es una solución móvil diseñada para abordar la problemática de la adherencia al tratamiento médico en adultos mayores. El objetivo fue crear una herramienta digital que permitiera a este grupo demográfico gestionar sus recordatorios de medicación y monitorear signos vitales de manera autónoma y sencilla.</p>

<p>Mi rol principal fue el de <strong>Diseñador de Producto y UX/UI</strong>. El desafío central fue diseñar una interfaz con altos estándares de <strong>accesibilidad</strong>, adaptada a las limitaciones visuales y cognitivas propias de la tercera edad. Diseñé flujos de navegación simplificados, utilicé tipografía de alto contraste y botones de gran tamaño para asegurar una interacción sin fricción. El prototipo permite configurar alarmas de medicamentos, registrar presión arterial/glucosa y conectar con cuidadores o médicos.</p>

<p>Para validar la propuesta, lideré una fase de <strong>Investigación y Testing</strong> rigurosa. Realicé un estudio comparativo (Benchmarking) contra líderes del mercado como <em>Medisafe</em> y ejecuté pruebas de usabilidad con usuarios reales mayores de 50 años. Utilicé la escala <strong>SUS (System Usability Scale)</strong> para medir cuantitativamente la satisfacción, demostrando que la interfaz de Helpy reducía la carga cognitiva y mejoraba la experiencia de uso frente a la competencia.</p>

<h4>Aportes de Diseño e Investigación:</h4>
<ul>
<li><strong>Diseño Inclusivo:</strong> Interfaz gráfica optimizada para adultos mayores (UI Geriátrica).</li>
<li><strong>Validación Científica:</strong> Uso de la metodología SUS para respaldar las decisiones de diseño con datos cuantitativos.</li>
<li><strong>Prototipado Funcional:</strong> Creación de flujos completos para la gestión de tratamientos y alertas médicas.</li>
</ul>`,
    tags: ["Diseño UX/UI", "Impacto Social"],
    techBadge: ['figma'], 
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/design/xTNEM1O2k9DXR0TT4iqxFH/Helpy?node-id=0-1&t=Uvg2YkNJB1jzOhIH-1' },
      { type: 'demo', url: 'https://www.figma.com/proto/xTNEM1O2k9DXR0TT4iqxFH/Helpy?node-id=18-481&t=ppQjiazUjlvGGxTY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A61' },
      { type: 'presentation', url: '#' } // Puedes vincular aquí el PDF de la Feria si lo deseas
    ]
  },
  {
    id: 15,
    title: 'MOOC Gamificado - Emprendimiento',
    description: 'Diseñé y prototipé en Figma una plataforma educativa gamificada. Integré narrativas de emprendimiento y mecánicas de juego (insignias, XP) para validar un modelo de aprendizaje basado en retos sin necesidad de backend.',
    expandedDescription: `<h3>MOOC Gamificado - Experiencia de Aprendizaje Inmersiva</h3>
<p>Este proyecto consistió en el diseño UX/UI de una plataforma MOOC (Massive Open Online Course) centrada en la enseñanza del emprendimiento. El objetivo fue validar un modelo pedagógico que combina <strong>Design Thinking y Gamificación</strong>, integrados de manera orgánica para que el usuario perciba una narrativa de negocio ("Innova, Lanza y Escala") en lugar de una lección teórica tradicional.</p>

<p>En la fase de <strong>Prototipado en Figma</strong>, diseñé un sistema de interacción basado en "Misiones". En lugar de módulos estáticos, el estudiante elige un reto (ej. "La Revolución del Café") y avanza desbloqueando niveles ("Novato", "Innovador", "Visionario"). Implementé mecánicas de <strong>feedback inmediato</strong>, donde cada acción del usuario genera puntos de experiencia (XP) o insignias temáticas, reforzando la motivación y la retención del estudiante.</p>

<p>El diseño visual se iteró para eliminar tecnicismos pedagógicos, adoptando una estética profesional. Además, integré una funcionalidad de <strong>"Malla Receptora"</strong> dentro del mismo prototipo, permitiendo capturar feedback cualitativo de los usuarios evaluadores en tiempo real directamente sobre las pantallas del curso, facilitando la validación temprana del producto.</p>

<h4>Características de Diseño:</h4>
<ul>
<li><strong>Gamificación Estructural:</strong> Sistema de progreso por niveles, barras de experiencia (XP) y recompensas visuales (insignias de "Detective", "Visionario").</li>
<li><strong>Narrativa Inmersiva:</strong> Flujos de usuario diseñados como "misiones" de emprendimiento real para aumentar el compromiso.</li>
<li><strong>Herramientas de Validación:</strong> Integración de componentes para la recolección de feedback de usabilidad (malla receptora) dentro de la interfaz.</li>
</ul>`,
    tags: ["Diseño UX/UI", "Caso de Estudio"],
    techBadge: ['figma'],
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/design/O4SnOC5EE59PGSLuyLOkkL/MOOC-Gamificado-Prototipo?node-id=1-143&t=Wo8A54PoJOTl67Qi-1' },
      // He añadido un botón extra para ver el flujo específico si el link lo permite, o puedes usar el mismo para Demo
      { type: 'demo', url: 'https://www.figma.com/proto/O4SnOC5EE59PGSLuyLOkkL/MOOC-Gamificado-Prototipo?node-id=1-143&t=gS6RWhjIiza8qQA4-1' } 
    ]
  }
];