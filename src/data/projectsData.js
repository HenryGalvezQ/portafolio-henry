// src/data/projectsData.js

export const projectsData = [
  {
    id: 1,
    folderName: 'Sigepro',
    title: {
      es: 'Sigepro',
      en: 'Sigepro',
    },
    description: {
      es: 'Prototipé en Figma y desarrollé una SPA de gestión de proyectos con una UI adaptativa basada en roles (Admin / Cliente / Colaborador), lo construí con Vue 3, Pinia y Tailwind CSS y lo conecté al backend con APIRESTful.',
      en: 'I prototyped in Figma and developed a project management SPA with a role-based adaptive UI (Admin / Client / Collaborator), built with Vue 3, Pinia and Tailwind CSS, connected to the backend via RESTful API.',
    },
    expandedDescription: {
      es: `<h3>Proyecto: SIGEPRO (Sistema de Gestión de Proyectos)</h3>
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
      en: `<h3>Project: SIGEPRO (Project Management System)</h3>
<p>SIGEPRO is a robust and modern SPA (Single Page Application) web application, designed for the comprehensive management of academic research projects. Developed as part of the Software Engineering course, this platform allows students and administrators to manage the entire lifecycle of a project, from the initial request to the detailed tracking of tasks.</p>

<p>From the <strong>Frontend Development</strong> perspective, I built a reactive and efficient architecture using <strong>Vue 3 and Vite</strong>, ensuring a smooth user experience and minimal load times. Global state management is handled with <strong>Pinia</strong>, safely centralizing authentication and user data. The interface, designed with <strong>Tailwind CSS</strong>, is fully responsive and follows a utility-first design approach for agile development. Communication with the backend is done through a REST API, managed with Axios, implementing a secure authentication system based on JWT tokens.</p>

<p>In the field of <strong>UX/UI Design</strong>, the main focus was to create intuitive user flows adapted to different profiles. The system distinguishes three clear roles (<strong>Administrator, Collaborator, and Client</strong>), and the interface dynamically transforms to show only the tools and information relevant to each one. I designed complex processes such as the project setup wizard, a multi-step flow that guides the administrator through the creation and assignment of tasks in an orderly and frictionless manner. The user experience is enriched with a real-time notification system that offers immediate feedback on the actions performed.</p>

<h4>Key Features:</h4>
<ul>
<li><strong>Role-Based Authentication and Security:</strong> Implementation of a secure access system with JWT that customizes the experience and permissions for Administrators, Collaborators, and Clients.</li>
<li><strong>Project Approval Flow:</strong> A complete lifecycle where clients create requests that administrators review, configure, and approve through a centralized management panel.</li>
<li><strong>Dynamic and Adaptive Dashboard:</strong> The main screen (HomeView) acts as a control center that renders specific components depending on the user's role, optimizing their workflow.</li>
<li><strong>Intuitive CRUD Management:</strong> Clear interfaces for the complete administration of clients, projects, and tasks, using modals and forms with real-time validations.</li>
<li><strong>Guided Setup Wizard:</strong> A multi-step wizard for administrators to formalize a project, define its initial tasks with sequential date validation, and organize the schedule by phases.</li>
</ul>`
    },
    tags: {
      es: ['Frontend Dev', 'Diseño UX/UI', 'Prácticas Pre-profesionales'],
      en: ['Frontend Dev', 'UX/UI Design', 'Pre-professional Internship'],
    },
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
    folderName: 'Portal Web Municipalidad de La Joya',
    title: {
      es: 'Portal Web Municipalidad de La Joya',
      en: 'La Joya Municipality Web Portal',
    },
    description: {
      es: 'Modernicé el portal web municipal, desarrollando un chatbot con PHP y JS, integrando visores de PDF para documentos oficiales y reforzando la seguridad del panel de administrador con autenticación de Google (OAuth).',
      en: 'I modernized the municipal web portal, developing a chatbot with PHP and JS, integrating PDF viewers for official documents and reinforcing the admin panel security with Google authentication (OAuth).',
    },
    expandedDescription: {
      es: `<h3>Proyecto: Modernización del Portal Web de la Municipalidad Distrital de La Joya</h3>
<p>Durante mis prácticas pre-profesionales, lideré una serie de mejoras clave en el portal web de la Municipalidad Distrital de La Joya, con el objetivo de optimizar tanto la experiencia del ciudadano como la eficiencia de la gestión interna. El proyecto abarcó desarrollo de nuevas funcionalidades, mejoras en la interfaz y el refuerzo de la seguridad.</p>

<p>Mi contribución principal fue el <strong>desarrollo e implementación de un chatbot conversacional</strong>. Utilizando <strong>JavaScript para el frontend y PHP con MySQL para el backend</strong>, creé un asistente virtual capaz de guiar a los usuarios a través de consultas frecuentes, como los costos de procedimientos TUPA y otros servicios municipales. El flujo de la conversación se gestiona dinámicamente desde la base de datos, permitiendo al personal administrativo actualizar las respuestas sin necesidad de modificar el código.</p>

<p>En el ámbito de la <strong>seguridad y la administración</strong>, reforcé el acceso al panel de control implementando la <strong>autenticación mediante Google OAuth</strong>. Esta modernización eliminó el sistema de credenciales tradicional, ofreciendo un método de inicio de sesión más seguro y robusto para los funcionarios, validando sus cuentas de correo institucionales contra la base de datos de usuarios autorizados.</p>

<h4>Mejoras Adicionales de UX/UI:</h4>
<ul>
<li><strong>Visor de Documentos PDF:</strong> Implementé un visor de PDF interactivo directamente en las páginas de transparencia, como "Obras por Impuesto" y "CODISEC". Esto permite a los ciudadanos consultar resoluciones, actas y otros documentos oficiales sin necesidad de descargas, mejorando significativamente la accesibilidad a la información pública.</li>
<li><strong>Contenido Dinámico y Gestión de Banners:</strong> Desarrollé un sistema CRUD completo en el panel de administrador para gestionar los banners de la página de inicio, permitiendo al equipo de prensa actualizar anuncios y noticias de forma autónoma. También mejoré la interfaz del carrusel de noticias y comunicados en la página principal.</li>
<li><strong>Interfaz de Usuario Optimizada:</strong> Realicé ajustes en la usabilidad del portal, como la mejora del menú de navegación para hacerlo más dinámico, la adición de un logo de carga para mejorar la percepción del rendimiento y la integración de nuevos canales de comunicación como TikTok en el encabezado y pie de página.</li>
</ul>`,
      en: `<h3>Project: Modernization of the La Joya District Municipality Web Portal</h3>
<p>During my pre-professional internship, I led a series of key improvements on the web portal of the La Joya District Municipality, with the aim of optimizing both the citizen's experience and the efficiency of internal management. The project included the development of new features, interface improvements, and security reinforcements.</p>

<p>My main contribution was the <strong>development and implementation of a conversational chatbot</strong>. Using <strong>JavaScript for the frontend and PHP with MySQL for the backend</strong>, I created a virtual assistant capable of guiding users through frequently asked questions, such as the costs of TUPA procedures and other municipal services. The conversation flow is managed dynamically from the database, allowing administrative staff to update responses without having to modify the code.</p>

<p>In the area of <strong>security and administration</strong>, I reinforced access to the control panel by implementing <strong>Google OAuth authentication</strong>. This modernization eliminated the traditional credential system, offering a safer and more robust login method for officials, validating their institutional email accounts against the authorized user database.</p>

<h4>Additional UX/UI Improvements:</h4>
<ul>
<li><strong>PDF Document Viewer:</strong> I implemented an interactive PDF viewer directly on transparency pages, such as "Works for Taxes" and "CODISEC". This allows citizens to consult resolutions, minutes, and other official documents without downloading them, significantly improving accessibility to public information.</li>
<li><strong>Dynamic Content and Banner Management:</strong> I developed a complete CRUD system in the admin panel to manage the homepage banners, allowing the press team to update announcements and news autonomously. I also improved the interface of the news and announcements carousel on the main page.</li>
<li><strong>Optimized User Interface:</strong> I made adjustments to the portal's usability, such as improving the navigation menu to make it more dynamic, adding a loading logo to improve performance perception, and integrating new communication channels like TikTok in the header and footer.</li>
</ul>`
    },
    tags: {
      es: ["Frontend Dev", "Fullstack", "Prácticas Pre-profesionales"],
      en: ["Frontend Dev", "Fullstack", "Pre-professional Internship"],
    },
    techBadge: ['php', 'javascript', 'mysql'],
    buttons: [
      { type: 'demo', url: 'https://www.municipalidadlajoya.gob.pe/' }
    ]
  },
  {
    id: 3,
    folderName: 'SafeBank ID',
    title: {
      es: 'SafeBank ID',
      en: 'SafeBank ID',
    },
    description: {
      es: 'Desarrollé un SDK de autenticación biométrica facial "On-Device" para Android, utilizando Kotlin y Google ML Kit para detección de vida (liveness) y cifrado local, eliminando la dependencia de servidores externos.',
      en: 'I developed an "On-Device" facial biometric authentication SDK for Android, using Kotlin and Google ML Kit for liveness detection and local encryption, eliminating reliance on external servers.',
    },
    expandedDescription: {
      es: `<h3>SafeBank ID - Seguridad Biométrica On-Device</h3>
<p>SafeBank ID es una solución de seguridad móvil innovadora diseñada para combatir el fraude financiero post-robo. A diferencia de las apps bancarias tradicionales que dependen del PIN o la huella del sistema operativo, SafeBank ID es un <strong>SDK de autenticación biométrica independiente</strong> que se integra directamente en las aplicaciones, verificando la identidad del usuario en tiempo real mediante reconocimiento facial activo.</p>

<p>Técnicamente, el proyecto fue desarrollado nativamente en <strong>Android con Kotlin y Jetpack Compose</strong>. El núcleo de la inteligencia artificial utiliza <strong>Google ML Kit</strong> para la detección de rostros y landmarks, implementando algoritmos personalizados para la prueba de vida (liveness detection) mediante análisis de parpadeo, lo que previene ataques de suplantación (anti-spoofing) con fotos o videos. Para la gestión de la cámara y el procesamiento de imágenes de alta velocidad se utilizó <strong>CameraX</strong>.</p>

<p>Lo que distingue a este proyecto es su arquitectura <strong>100% Local (On-Device)</strong>. No envía datos biométricos a la nube, garantizando la privacidad del usuario y reduciendo los costos de infraestructura para las entidades financieras. Las plantillas biométricas se cifran con estándares avanzados (AES-256) utilizando <strong>EncryptedSharedPreferences</strong>, asegurando que la información sensible nunca salga del dispositivo.</p>

<h4>Características Clave:</h4>
<ul>
<li><strong>Liveness Detection Activo:</strong> Sistema anti-spoofing que requiere interacción del usuario (parpadeo) para validar que es una persona real y no una grabación.</li>
<li><strong>Privacidad y Cero Latencia:</strong> Verificación instantánea (< 0.5s) y funcionamiento offline, alineado con estándares de seguridad ISO 27001.</li>
<li><strong>Integración SDK:</strong> Diseño modular pensado para ser consumido fácilmente por otras aplicaciones fintech como una librería de seguridad.</li>
</ul>`,
      en: `<h3>SafeBank ID - On-Device Biometric Security</h3>
<p>SafeBank ID is an innovative mobile security solution designed to combat post-theft financial fraud. Unlike traditional banking apps that rely on the OS PIN or fingerprint, SafeBank ID is an <strong>independent biometric authentication SDK</strong> that integrates directly into applications, verifying the user's identity in real time through active facial recognition.</p>

<p>Technically, the project was natively developed on <strong>Android with Kotlin and Jetpack Compose</strong>. The core artificial intelligence uses <strong>Google ML Kit</strong> for face and landmark detection, implementing custom algorithms for liveness detection via blink analysis, which prevents anti-spoofing attacks with photos or videos. <strong>CameraX</strong> was used for camera management and high-speed image processing.</p>

<p>What distinguishes this project is its <strong>100% Local (On-Device)</strong> architecture. It does not send biometric data to the cloud, guaranteeing user privacy and reducing infrastructure costs for financial institutions. Biometric templates are encrypted with advanced standards (AES-256) using <strong>EncryptedSharedPreferences</strong>, ensuring that sensitive information never leaves the device.</p>

<h4>Key Features:</h4>
<ul>
<li><strong>Active Liveness Detection:</strong> Anti-spoofing system that requires user interaction (blinking) to validate that it is a real person and not a recording.</li>
<li><strong>Privacy and Zero Latency:</strong> Instant verification (< 0.5s) and offline operation, aligned with ISO 27001 security standards.</li>
<li><strong>SDK Integration:</strong> Modular design meant to be easily consumed by other fintech applications as a security library.</li>
</ul>`
    },
    tags: {
      es: ["Mobile", "Frontend Dev", "Impacto Social"],
      en: ["Mobile", "Frontend Dev", "Social Impact"],
    },
    techBadge: ['android', 'kotlin', 'java'],
    buttons: [
      { type: 'presentation', url: 'https://www.canva.com/design/DAHAxIOo06U/zfwtahyrOhM7jw0lZV559A/edit?utm_content=DAHAxIOo06U&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' }, 
      { type: 'github', url: 'https://github.com/HenryGalvezQ' }
    ]
  },
  {
    id: 4,
    folderName: 'Portafolio Personal',
    title: {
      es: 'Portafolio Personal',
      en: 'Personal Portfolio',
    },
    description: {
      es: 'Diseñé y desarrollé mi sitio web personal con Vue 3 y Vite, implementando i18n (ES/EN), modo oscuro/claro y optimizaciones avanzadas de rendimiento (Lazy Loading, WebP, SEO) para una experiencia de usuario superior.',
      en: 'I designed and developed my personal website using Vue 3 and Vite, implementing i18n (ES/EN), dark/light mode, and advanced performance optimizations (Lazy Loading, WebP, SEO) for a superior user experience.',
    },
    expandedDescription: {
      es: `<h3>Portafolio Profesional - Identidad Digital & Rendimiento</h3>
<p>Este portafolio es una representación de mis habilidades como Desarrollador Frontend y Diseñador UX/UI. Fue construido desde cero con el objetivo de crear una interfaz limpia, moderna y altamente performante que sirva como escaparate para mis proyectos y experiencia profesional.</p>

<p>La arquitectura técnica se basa en <strong>Vue 3 (Composition API)</strong> potenciado por <strong>Vite</strong>. Implementé una estructura de componentes reutilizables y un manejo de estado reactivo para funcionalidades globales como el cambio de tema (Dark/Light Mode) y la navegación activa (Scroll Spy). Además, organicé la información en módulos JS independientes (como estos datos de proyectos) para facilitar la escalabilidad a largo plazo.</p>

<p>A nivel de <strong>Rendimiento y SEO</strong>, configuré <em>ViteImageOptimizer</em> para la compresión automática a formatos .webp y reduje el peso del bundle importando selectivamente íconos SVG (reemplazando librerías pesadas). Apliqué <em>Code Splitting</em> manual para dependencias como EmailJS y optimicé la carga de fuentes críticas usando <code>fetchpriority</code> y <code>preload</code>. Todo esto, sumado a metaetiquetas Open Graph, garantiza métricas sobresalientes y un excelente posicionamiento.</p>

<p>El diseño sigue principios de <strong>Mobile-First</strong>, con animaciones fluidas en CSS moderno. Finalmente, enriquecí la experiencia global con un sistema de internacionalización robusto (<strong>Vue I18n</strong>), gestionando las traducciones inglés/español de forma modular mediante bloques <code>&lt;i18n&gt;</code> por componente.</p>

<h4>Características Destacadas:</h4>
<ul>
<li><strong>Arquitectura Modular:</strong> Estructura basada en componentes (Header, Hero, Projects) y separación limpia de la capa de datos.</li>
<li><strong>Internacionalización (i18n):</strong> Soporte bilingüe dinámico con gestión de locales aislada por componente para un código más limpio.</li>
<li><strong>Optimización Extrema y SEO:</strong> Uso de imágenes WebP, Code Splitting, carga diferida (lazy loading) y eliminación de recursos bloqueantes.</li>
<li><strong>Gestión de Tema Dinámico:</strong> Sistema de modo oscuro/claro con persistencia en el almacenamiento local (LocalStorage).</li>
</ul>`,
      en: `<h3>Professional Portfolio - Digital Identity & Performance</h3>
<p>This portfolio is a representation of my skills as a Frontend Developer and UX/UI Designer. It was built from scratch with the goal of creating a clean, modern, and highly performant interface that serves as a showcase for my projects and professional experience.</p>

<p>The technical architecture is based on <strong>Vue 3 (Composition API)</strong> powered by <strong>Vite</strong>. I implemented a reusable component structure and reactive state management for global features such as theme switching (Dark/Light Mode) and active navigation (Scroll Spy). Furthermore, I organized the information into independent JS modules (like this project data) to facilitate long-term scalability.</p>

<p>At the <strong>Performance and SEO</strong> level, I configured <em>ViteImageOptimizer</em> for automatic compression to .webp formats and reduced the bundle size by selectively importing custom SVG icons (replacing heavy libraries). I applied manual <em>Code Splitting</em> for dependencies like EmailJS and optimized the loading of critical fonts using <code>fetchpriority</code> and <code>preload</code>. This, combined with Open Graph meta tags, guarantees outstanding metrics and excellent search ranking.</p>

<p>The design follows <strong>Mobile-First</strong> principles, featuring smooth animations with modern CSS. Finally, I enriched the overall experience with a robust internationalization system (<strong>Vue I18n</strong>), managing English/Spanish translations modularly through <code>&lt;i18n&gt;</code> blocks per component.</p>

<h4>Key Features:</h4>
<ul>
<li><strong>Modular Architecture:</strong> Component-based structure (Header, Hero, Projects) and clean separation of the data layer.</li>
<li><strong>Internationalization (i18n):</strong> Dynamic bilingual support with isolated locale management per component for cleaner code.</li>
<li><strong>Extreme Optimization and SEO:</strong> Use of WebP images, Code Splitting, lazy loading, and removal of render-blocking resources.</li>
<li><strong>Dynamic Theme Management:</strong> Dark/light mode system with local storage persistence (LocalStorage).</li>
</ul>`
    },
    tags: {
      es: ["Frontend Dev", "Diseño UX/UI"],
      en: ["Frontend Dev", "UX/UI Design"],
    },
    techBadge: ['vue', 'javascript', 'css'],
    buttons: [
      { type: 'github', url: 'https://github.com/HenryGalvezQ/portafolio-henry' },
      { type: 'demo', url: 'https://henrygalvez-frontend.netlify.app/' }
    ]
  },
  {
    id: 5,
    folderName: 'ReMarket',
    title: {
      es: 'ReMarket',
      en: 'ReMarket',
    },
    description: {
      es: 'Aplicación nativa Android para compraventa segura, desarrollada con Kotlin y Jetpack Compose. Implementa arquitectura MVVM Clean, sincronización offline (Room/WorkManager) y chat en tiempo real.',
      en: 'Native Android application for secure buying and selling, developed with Kotlin and Jetpack Compose. Implements MVVM Clean architecture, offline synchronization (Room/WorkManager) and real-time chat.',
    },
    expandedDescription: {
      es: `<h3>ReMarket - Marketplace Seguro y Offline-First</h3>
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
      en: `<h3>ReMarket - Secure and Offline-First Marketplace</h3>
<p>ReMarket is a native mobile application designed to combat the informal trade of electronic devices. The project stands out for its advanced frontend engineering, offering a robust user experience even in offline environments, prioritizing security and data integrity.</p>

<p>On the <strong>Frontend (Android)</strong>, I implemented a modern architecture based on <strong>MVVM and Clean Architecture</strong> using <strong>Kotlin and Jetpack Compose</strong>. The user interface is completely declarative, managing complex UI states reactively with StateFlow. To ensure a fluid experience (UX), I developed an <strong>"Offline-First"</strong> strategy: the application uses Room Database as the single source of truth, allowing users to create products and browse without the internet. Synchronization with the backend is handled in the background via <strong>WorkManager</strong> once the connection is restored.</p>

<p>At the <strong>Design and UX/UI</strong> level, I prototyped the application in Figma focusing on differentiated flows by roles (Administrator vs. Client). The app includes advanced interactive features such as real-time chat (integrated with Firestore), loading and error state management, and a secure identity validation system. Dependency injection with <strong>Hilt</strong> ensures the code is modular, scalable, and easily testable.</p>

<h4>Frontend Technical Features:</h4>
<ul>
<li><strong>Reactive and Clean Architecture:</strong> Strict separation of layers (UI, Domain, Data) using Jetpack Compose for the UI and Coroutines/Flow for asynchronous data handling.</li>
<li><strong>Offline Synchronization (Background Sync):</strong> Local persistence with Room and work queues with WorkManager to automatically upload images and data when there is a network connection.</li>
<li><strong>Advanced State Management:</strong> Use of ViewModels and StateFlow to communicate data changes to the UI in real time (e.g., new chat messages or sale status updates).</li>
<li><strong>Security and Integration:</strong> Implementation of secure authentication with JWT Tokens and Retrofit interceptors, integrating Firebase and Cloudinary services transparently to the user.</li>
</ul>`
    },
    tags: {
      es: ["Mobile", "Frontend Dev", "Diseño UX/UI"],
      en: ["Mobile", "Frontend Dev", "UX/UI Design"],
    },
    techBadge: ['android', 'kotlin', 'firebase'],
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/design/NCiaj1TCaKbz3j24Zw5hzG/Marketplace?node-id=0-1&t=caPV8ReaIRql9K12-1' },
      { type: 'presentation', url: 'https://docs.google.com/presentation/d/1EVbWNegmOR5PqxnBDhOR_0beXEWSdEH6/edit?usp=sharing&ouid=114415674854887529375&rtpof=true&sd=true' },
      { type: 'github', url: 'https://github.com/dhuamanilu/ReMarket' }
    ]
  },
  {
    id: 6,
    folderName: 'ReMarket App Multiplataforma',
    title: {
      es: 'ReMarket App Multiplataforma',
      en: 'Cross-Platform ReMarket App',
    },
    description: {
      es: 'Migración del marketplace ReMarket a un entorno multiplataforma utilizando Flutter y Dart. UI optimizada mediante el patrón BFF (Backend-For-Frontend) para mejorar la velocidad de carga y fluidez en iOS y Android.',
      en: 'Migration of the ReMarket marketplace to a cross-platform environment using Flutter and Dart. UI optimized through the BFF (Backend-For-Frontend) pattern to improve loading speed and fluidity on iOS and Android.',
    },
    expandedDescription: {
      es: `<h3>ReMarket Multiplataforma - Migración a Flutter</h3>
<p>Como parte de un proyecto académico para la asignatura de Plataformas Emergentes, participé en la migración de la aplicación nativa ReMarket hacia un entorno de desarrollo multiplataforma. El desafío principal fue unificar la base de código para sistemas operativos móviles manteniendo un alto estándar en la fluidez de la interfaz y la experiencia de usuario (UX).</p>

<p>Desde la perspectiva del <strong>Desarrollo Frontend</strong>, la aplicación fue reescrita completamente utilizando <strong>Flutter y Dart</strong>. Aproveché la arquitectura basada en widgets de Flutter para crear una interfaz de usuario altamente componetizada, reactiva y adaptable a diferentes tamaños de pantalla. La gestión del estado se optimizó para garantizar transiciones suaves entre las pantallas de catálogo, detalles del producto y flujos de compra/venta, evitando bloqueos en el hilo principal de la UI.</p>

<p>En cuanto a la <strong>Arquitectura y Experiencia de Usuario</strong>, la aplicación consume servicios a través de un patrón <strong>BFF (Backend-For-Frontend)</strong>. Aunque es una implementación de lado del servidor, su impacto es netamente frontend: permite que la aplicación móvil solicite y reciba cargas de datos (payloads) hechas a medida para las pantallas exactas que el usuario está viendo, reduciendo drásticamente los tiempos de carga, el consumo de datos móviles y mejorando la percepción de rendimiento general.</p>

<h4>Características Destacadas de la UI/UX:</h4>
<ul>
<li><strong>Experiencia Unificada (Cross-Platform):</strong> Diseño y desarrollo de interfaces consistentes que se sienten naturales tanto en dispositivos Android como iOS utilizando el catálogo de widgets de Material Design y Cupertino.</li>
<li><strong>Optimización de Carga con BFF:</strong> Integración con una capa intermedia que estructura los datos específicamente para la vista móvil, mejorando la velocidad de renderizado de las listas de productos y galerías de imágenes.</li>
<li><strong>Formularios y Validaciones Fluidas:</strong> Implementación de flujos de registro y publicación de productos con retroalimentación visual en tiempo real y manejo de errores amigable para el usuario.</li>
</ul>`,
      en: `<h3>Cross-Platform ReMarket - Migration to Flutter</h3>
<p>As part of an academic project for the Emerging Platforms course, I participated in migrating the native ReMarket application to a cross-platform development environment. The main challenge was to unify the codebase for mobile operating systems while maintaining a high standard of interface fluidity and user experience (UX).</p>

<p>From the <strong>Frontend Development</strong> perspective, the application was completely rewritten using <strong>Flutter and Dart</strong>. I took advantage of Flutter's widget-based architecture to create a highly componentized, reactive user interface adaptable to different screen sizes. State management was optimized to ensure smooth transitions between catalog screens, product details, and buy/sell flows, avoiding main UI thread blockages.</p>

<p>Regarding <strong>Architecture and User Experience</strong>, the application consumes services through a <strong>BFF (Backend-For-Frontend)</strong> pattern. Although it is a server-side implementation, its impact is strictly frontend: it allows the mobile application to request and receive custom-made data payloads tailored for the exact screens the user is viewing, drastically reducing loading times, mobile data consumption, and improving overall performance perception.</p>

<h4>Key UI/UX Features:</h4>
<ul>
<li><strong>Unified Experience (Cross-Platform):</strong> Design and development of consistent interfaces that feel natural on both Android and iOS devices using the Material Design and Cupertino widget catalog.</li>
<li><strong>Load Optimization with BFF:</strong> Integration with an intermediate layer that structures data specifically for the mobile view, improving the rendering speed of product lists and image galleries.</li>
<li><strong>Fluid Forms and Validations:</strong> Implementation of registration and product publication flows with real-time visual feedback and user-friendly error handling.</li>
</ul>`
    },
    tags: {
      es: ["Mobile", "Frontend Dev", "Diseño UX/UI"],
      en: ["Mobile", "Frontend Dev", "UX/UI Design"],
    },
    techBadge: ['flutter', 'dart'],
    buttons: [
      { type: 'github', url: 'https://github.com/HenryGalvezQ/PE-Lab04' },
      { type : 'presentation', url: 'https://docs.google.com/document/d/1WWqDpdJtigqhOI0Xb6xgOAzqZ22y2bXnCtbRHFBsXPc/edit?usp=sharing' },
      { type: 'figma', url: 'https://www.figma.com/design/NCiaj1TCaKbz3j24Zw5hzG/Marketplace?node-id=0-1&t=caPV8ReaIRql9K12-1' }
    ]
  },
  {
    id: 7,
    folderName: 'UNSA Park',
    title: {
      es: 'UNSA Park',
      en: 'UNSA Park',
    },
    description: {
      es: 'Lideré el desarrollo de una aplicación móvil IoT para la gestión de estacionamientos universitarios. Construida con React Native y TypeScript, integra mapas interactivos y visualización de disponibilidad en tiempo real.',
      en: 'I led the development of an IoT mobile application for university parking management. Built with React Native and TypeScript, it integrates interactive maps and real-time availability visualization.',
    },
    expandedDescription: {
      es: `<h3>UNSA Park - Smart Campus & IoT</h3>
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
      en: `<h3>UNSA Park - Smart Campus & IoT</h3>
<p>UNSA Park is a comprehensive mobile solution developed under the "Smart Cities" concept to optimize access control and parking management on the university campus. As the <strong>Lead Mobile Developer & Architect</strong>, I designed an application capable of processing data from IoT sensors and presenting it to the user instantly and intuitively.</p>

<p>On the <strong>Mobile Frontend</strong>, I used <strong>React Native with TypeScript</strong> to create an architecture of reusable and typed components, ensuring code scalability and maintainability. I implemented the <strong>Hermes</strong> engine to optimize the app's startup time and reduce bundle size, guaranteeing fluid performance even on mid/low-range devices. The interface communicates with an IoT backend through efficient protocols to reflect the status of physical spaces with no noticeable latency.</p>

<p>The <strong>User Experience (UX)</strong> is focused on geospatial visualization. I integrated <strong>react-native-maps</strong> to render an interactive campus map where drivers can see real-time space availability (free/occupied) via color-coded visual indicators. Additionally, I designed a <strong>routing system</strong> that guides the user from their current position to the selected entrance gate, reducing parking search time and internal traffic congestion.</p>

<h4>Key Technical Features:</h4>
<ul>
<li><strong>Interactive Maps and Geolocation:</strong> Dynamic visualization of parking zones on real maps with live status markers.</li>
<li><strong>Optimized Architecture:</strong> Use of TypeScript for robust business logic and Hermes for superior native performance on Android.</li>
<li><strong>IoT Integration in Frontend:</strong> Consumption of real-time data streams to update the UI instantly when a sensor detects a vehicle's entry or exit.</li>
<li><strong>Navigation System:</strong> Intuitive user flows for accessing history queries and assisted navigation guidance.</li>
</ul>`
    },
    tags: {
      es: ["Mobile", "Frontend Dev", "Impacto Social"],
      en: ["Mobile", "Frontend Dev", "Social Impact"],
    },
    techBadge: ['react', 'typescript', 'android'], 
    buttons: [
      { type: 'presentation', url: 'https://www.canva.com/design/DAHAxjn71Y0/K-DK_Deb6BflkS7lDPxIhA/edit?utm_content=DAHAxjn71Y0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' }, 
      { type: 'github', url: 'https://github.com/HenryGalvezQ' }
    ]
  },
  {
    id: 8,
    folderName: 'Symmetry Applicant Showcase',
    title: {
      es: 'Symmetry Applicant Showcase',
      en: 'Symmetry Applicant Showcase',
    },
    description: {
      es: 'Superé los requerimientos de una prueba técnica avanzada desarrollando una app Flutter con arquitectura "Offline-First", sincronización bidireccional (Store-and-Forward) y un sistema de diseño adaptable (Dark/Light Mode).',
      en: 'I exceeded the requirements of an advanced technical test by developing a Flutter app with an "Offline-First" architecture, bidirectional synchronization (Store-and-Forward) and an adaptable design system (Dark/Light Mode).',
    },
    expandedDescription: {
      es: `<h3>Symmetry App - Ingeniería de Software aplicada a Mobile</h3>
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
      en: `<h3>Symmetry App - Software Engineering Applied to Mobile</h3>
<p>This project was developed in response to a high-level technical challenge, where the goal was not only to meet the functional requirements but to demonstrate excellence in software engineering. I adopted a production-ready <strong>Minimum Viable Product (MVP)</strong> approach, prioritizing scalability, data robustness, and a polished user experience.</p>

<p>At the <strong>Architecture and Local Backend</strong> level, I implemented a strict <strong>Clean Architecture</strong> strategy with layer separation (Domain, Data, Presentation) and the <strong>BLoC</strong> pattern for reactive state management. The core of the system is a custom synchronization engine ("Store-and-Forward") that uses <strong>Floor (SQLite)</strong> as the local source of truth and <strong>Firebase</strong> as cloud backup. I solved complex concurrency challenges ("Race Conditions") through semaphores and state-merging strategies, ensuring that data is never lost, even if the user edits content offline.</p>

<p>In the <strong>Frontend and UX/UI</strong>, I went beyond the basic requirements ("Maximally Overdeliver"). I designed a dynamic theme system (Dark/Light Mode) with preference persistence and adaptive brand components. I implemented an in-memory search and filtering engine for instant response, and ensured data privacy through strict session isolation (Row-Level Security) in the local database, clearing sensitive information upon logout.</p>

<h4>Advanced Technical Features:</h4>
<ul>
<li><strong>Bidirectional Synchronization Engine:</strong> Custom algorithm that manages upload and download queues, resolving data conflicts and enabling full CRUD operations in offline mode.</li>
<li><strong>Optimistic UI:</strong> The interface responds immediately to user actions (likes, saves, article creation) while operations are processed in the background.</li>
<li><strong>Soft Deletes & Data Integrity:</strong> Logical deletion implementation for safe synchronization and handling of complex state transitions between local and remote.</li>
<li><strong>Security and Isolation:</strong> Architecture designed for multi-user environments on the same device, ensuring cached data is inaccessible across different sessions.</li>
</ul>`
    },
    tags: {
      es: ["Mobile", "Frontend Dev", "Fullstack"],
      en: ["Mobile", "Frontend Dev", "Fullstack"],
    },
    techBadge: ['flutter', 'dart', 'firebase'],
    buttons: [
      { type: 'github', url: 'https://github.com/HenryGalvezQ/starter-project/tree/main' },
      { type: 'presentation', url: 'https://github.com/HenryGalvezQ/starter-project/blob/main/docs/REPORT.md' }
    ]
  },
  {
    id: 9,
    folderName: 'MiMedioPasaje',
    title: {
      es: 'MiMedioPasaje',
      en: 'MiMedioPasaje',
    },
    description: {
      es: 'Aplicación móvil ganadora del 1er Puesto en la Feria de Proyectos UNSA. Desarrollada en Flutter, automatiza denuncias de transporte público mediante geolocalización y captura de evidencia multimedia.',
      en: 'Mobile application winner of the 1st Place in the UNSA Project Fair. Developed in Flutter, it automates public transport complaints through geolocation and multimedia evidence capture.',
    },
    expandedDescription: {
      es: `<h3>MiMedioPasaje - Tecnología con Impacto Social</h3>
<p>Galardonada con el <strong>Primer Puesto en la Feria de Proyectos de la UNSA</strong>, esta aplicación aborda una problemática social crítica: el incumplimiento del medio pasaje universitario. Mi rol se centró en diseñar una solución tecnológica que empoderara a los estudiantes, transformando un trámite burocrático engorroso en una acción digital inmediata y accesible.</p>

<p>En el frente de <strong>Ingeniería Móvil con Flutter</strong>, desarrollé una aplicación nativa optimizada para la velocidad de respuesta, factor crucial en situaciones de conflicto en el transporte. Implementé la integración con APIs de hardware para la <strong>captura de evidencia multimedia (foto/video/audio)</strong> y servicios de <strong>Geolocalización (Google Maps API)</strong> para registrar las coordenadas exactas de la infracción automáticamente. La arquitectura maneja el almacenamiento de estas pruebas en la nube, asegurando su integridad para el reporte.</p>

<p>El desafío de <strong>UX/UI</strong> fue simplificar la carga cognitiva del usuario bajo estrés. Diseñé un flujo de "Denuncia en 3 Pasos" que permite registrar un incidente en menos de un minuto. La interfaz prioriza botones de acción grandes y claros, y un sistema de feedback visual que confirma al estudiante que su reporte ha sido generado exitosamente, brindando una sensación de seguridad y respaldo.</p>

<h4>Logros y Tecnologías:</h4>
<ul>
<li><strong>Reconocimiento Académico:</strong> Proyecto ganador del 1er Lugar por su innovación y viabilidad técnica.</li>
<li><strong>Integración de Hardware:</strong> Manejo eficiente de cámara, micrófono y GPS dentro del ciclo de vida de la app.</li>
<li><strong>Automatización de Procesos:</strong> Digitalización completa del flujo de reclamos ante INDECOPI.</li>
</ul>`,
      en: `<h3>MiMedioPasaje - Technology with Social Impact</h3>
<p>Awarded <strong>First Place at the UNSA Project Fair</strong>, this application addresses a critical social issue: the non-compliance with the university half-fare. My role focused on designing a technological solution that empowers students, transforming a cumbersome bureaucratic procedure into an immediate and accessible digital action.</p>

<p>On the <strong>Mobile Engineering with Flutter</strong> front, I developed a native application optimized for response speed, a crucial factor in transport conflict situations. I implemented integration with hardware APIs for <strong>multimedia evidence capture (photo/video/audio)</strong> and <strong>Geolocation services (Google Maps API)</strong> to automatically register the exact coordinates of the infraction. The architecture handles the storage of these proofs in the cloud, ensuring their integrity for the report.</p>

<p>The <strong>UX/UI</strong> challenge was to simplify the user's cognitive load under stress. I designed a "3-Step Complaint" flow that allows registering an incident in less than a minute. The interface prioritizes large and clear action buttons, and a visual feedback system that confirms to the student that their report has been successfully generated, providing a sense of security and support.</p>

<h4>Achievements and Technologies:</h4>
<ul>
<li><strong>Academic Recognition:</strong> 1st Place winning project for its innovation and technical viability.</li>
<li><strong>Hardware Integration:</strong> Efficient handling of camera, microphone, and GPS within the app's lifecycle.</li>
<li><strong>Process Automation:</strong> Complete digitization of the complaints flow before INDECOPI.</li>
</ul>`
    },
    tags: {
      es: ["Mobile", "Frontend Dev", "Diseño UX/UI"],
      en: ["Mobile", "Frontend Dev", "UX/UI Design"],
    },
    techBadge: ['flutter', 'dart'],
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/design/FArnBNdsQ20gifkbbXM41o/MiPasaje?t=caPV8ReaIRql9K12-1' },
      { type: 'github', url: 'https://github.com/francoCarMar/MiMedioPasaje-Frontend' },
      { type: 'presentation', url: 'https://docs.google.com/document/d/13SZJP68qrJpc-c3_Kotq1mlo4phvbQ9x/edit?usp=sharing&ouid=114415674854887529375&rtpof=true&sd=true' }
    ]
  },
  {
    id: 10,
    folderName: 'DescubrAqp',
    title: {
      es: 'DescubrAqp',
      en: 'DescubrAqp',
    },
    description: {
      es: 'Aplicación nativa Android con arquitectura modular. Integra vistas panorámicas 360°, trazado de rutas GPS y reproducción de audio-guías en segundo plano mediante Foreground Services.',
      en: 'Native Android application with modular architecture. Integrates 360° panoramic views, GPS route tracking and background audio-guide playback via Foreground Services.',
    },
    expandedDescription: {
      es: `<h3>DescubrAqp - Experiencia Turística Inmersiva</h3>
<p>DescubrAqp es una aplicación móvil nativa diseñada para revitalizar el turismo en Arequipa mediante una experiencia digital interactiva. El proyecto se estructuró bajo una <strong>Arquitectura Modular</strong> organizada por capas (UI, Data, Domain), lo que facilitó la escalabilidad y el mantenimiento del código.</p>

<p>En el ámbito de <strong>Ingeniería Frontend Android</strong>, implementé características avanzadas que van más allá de un simple CRUD. Desarrollé un <strong>Sistema de Audio en Segundo Plano</strong> utilizando <em>Foreground Services</em> y notificaciones persistentes, permitiendo al usuario escuchar la historia del lugar mientras explora otras apps o bloquea el teléfono. Para la gestión de datos, integré <strong>Room Database</strong>, implementando el patrón Repository y DAOs para garantizar una experiencia <em>offline</em> fluida y una única fuente de verdad.</p>

<p>El enfoque en <strong>UX/UI e Interactividad</strong> es el núcleo del proyecto. Diseñé un módulo de <strong>Visualización 360°</strong> que procesa imágenes panorámicas y responde a gestos táctiles (inercia, zoom, rotación) para una inmersión total. Además, integré la API de Google Maps y Open Route Service para trazar <strong>rutas de navegación óptimas</strong> (Polylines) en tiempo real desde la ubicación del usuario hasta el destino turístico.</p>

<h4>Características Técnicas Destacadas:</h4>
<ul>
<li><strong>Vista Inmersiva 360°:</strong> Renderizado de panoramas esféricos con control gestual y gestión eficiente del ciclo de vida del fragmento para optimizar memoria.</li>
<li><strong>Servicios Background:</strong> Reproducción de audio continua mediante <code>startForeground</code> y gestión de notificaciones multimedia personalizadas.</li>
<li><strong>Mapas y Geolocalización:</strong> Integración de marcadores dinámicos y cálculo de rutas paso a paso utilizando servicios REST externos.</li>
<li><strong>Persistencia Local (Room):</strong> Base de datos relacional para cachear edificaciones, comentarios y mapas internos de los recintos.</li>
</ul>`,
      en: `<h3>DescubrAqp - Immersive Tourism Experience</h3>
<p>DescubrAqp is a native mobile application designed to revitalize tourism in Arequipa through an interactive digital experience. The project was structured under a <strong>Modular Architecture</strong> organized by layers (UI, Data, Domain), which facilitated code scalability and maintenance.</p>

<p>In the field of <strong>Android Frontend Engineering</strong>, I implemented advanced features that go beyond a simple CRUD. I developed a <strong>Background Audio System</strong> using <em>Foreground Services</em> and persistent notifications, allowing the user to listen to the history of the place while exploring other apps or locking the phone. For data management, I integrated <strong>Room Database</strong>, implementing the Repository pattern and DAOs to ensure a fluid <em>offline</em> experience and a single source of truth.</p>

<p>The focus on <strong>UX/UI and Interactivity</strong> is the core of the project. I designed a <strong>360° Visualization</strong> module that processes panoramic images and responds to touch gestures (inertia, zoom, rotation) for total immersion. Furthermore, I integrated the Google Maps API and Open Route Service to plot <strong>optimal navigation routes</strong> (Polylines) in real time from the user's location to the tourist destination.</p>

<h4>Key Technical Features:</h4>
<ul>
<li><strong>Immersive 360° View:</strong> Rendering of spherical panoramas with gesture control and efficient fragment lifecycle management to optimize memory.</li>
<li><strong>Background Services:</strong> Continuous audio playback using <code>startForeground</code> and custom multimedia notification management.</li>
<li><strong>Maps and Geolocation:</strong> Integration of dynamic markers and step-by-step route calculation using external REST services.</li>
<li><strong>Local Persistence (Room):</strong> Relational database to cache buildings, comments, and internal maps of the venues.</li>
</ul>`
    },
    tags: {
      es: ["Mobile","Frontend Dev", "Diseño UX/UI"],
      en: ["Mobile", "Frontend Dev", "UX/UI Design"],
    },
    techBadge: ['android', 'java', 'figma'],
    buttons: [
      { type: 'github', url: 'https://github.com/Triplerush/DescubrAqp' },
      { type: 'figma', url: 'https://www.figma.com/design/d8d1HZCj0g86ZdbPPJjJck/Aqp?node-id=0-1&t=2thgBg5euWGxAW6o-1' },
      { type: 'presentation', url: 'https://www.canva.com/design/DAHA-KoswWw/7WyGo_4CmJCDQfaFZksegw/edit?utm_content=DAHA-KoswWw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' } 
    ]
  },
  {
    id: 11,
    folderName: 'For-UNSA',
    title: {
      es: 'For-UNSA',
      en: 'For-UNSA',
    },
    description: {
      es: 'Diseñé la experiencia de usuario (UX) e interfaz (UI) completa de esta plataforma académica. Entregué prototipos de alta fidelidad en Figma y definí la guía de estilos para el equipo de desarrollo.',
      en: 'I designed the complete user experience (UX) and interface (UI) of this academic platform. I delivered high-fidelity prototypes in Figma and defined the style guide for the development team.',
    },
    expandedDescription: {
      es: `<h3>For-UNSA - Diseño de Experiencia Académica</h3>
<p>For-UNSA es una plataforma colaborativa diseñada para centralizar recursos académicos. En este proyecto, mi rol fue exclusivamente el de <strong>Lead UX/UI Designer</strong>, trabajando en estrecha colaboración con el equipo de desarrollo bajo una metodología ágil (SCRUM).</p>

<p>Mi responsabilidad principal fue traducir los requerimientos funcionales en una interfaz intuitiva y atractiva. Utilicé <strong>Figma</strong> para crear todo el sistema de diseño, desde los wireframes de baja fidelidad hasta los prototipos interactivos de alta fidelidad (High-Fidelity). Me enfoqué en resolver la arquitectura de la información para que los estudiantes pudieran navegar entre facultades, escuelas y cursos sin fricción, priorizando la legibilidad y la facilidad de acceso a los documentos.</p>

<p>Definí la <strong>Identidad Visual</strong> del proyecto (paleta de colores, tipografía y componentes UI), asegurando la consistencia en todas las vistas. Además, realicé el "Hand-off" (entrega) de los diseños a los desarrolladores, proporcionando especificaciones claras sobre comportamientos, estados de los botones y flujos de navegación, lo que facilitó la implementación del frontend en React.</p>

<h4>Aportes de Diseño:</h4>
<ul>
<li><strong>Prototipado Completo:</strong> Diseño de todas las vistas clave (Login, Feed, Perfil, Detalle de Curso) en Figma.</li>
<li><strong>Sistema de Diseño (Design System):</strong> Creación de una guía de estilos y componentes reutilizables para mantener la coherencia visual.</li>
<li><strong>Flujo de Usuario (User Flow):</strong> Optimización de la navegación para reducir el número de clics necesarios para encontrar un sílabo o recurso.</li>
</ul>`,
      en: `<h3>For-UNSA - Academic Experience Design</h3>
<p>For-UNSA is a collaborative platform designed to centralize academic resources. In this project, my role was exclusively as <strong>Lead UX/UI Designer</strong>, working closely with the development team under an agile methodology (SCRUM).</p>

<p>My main responsibility was to translate functional requirements into an intuitive and attractive interface. I used <strong>Figma</strong> to create the entire design system, from low-fidelity wireframes to interactive high-fidelity prototypes (High-Fidelity). I focused on solving the information architecture so that students could navigate between faculties, schools, and courses without friction, prioritizing readability and ease of access to documents.</p>

<p>I defined the project's <strong>Visual Identity</strong> (color palette, typography, and UI components), ensuring consistency across all views. In addition, I carried out the "Hand-off" of the designs to the developers, providing clear specifications on behaviors, button states, and navigation flows, which facilitated the implementation of the frontend in React.</p>

<h4>Design Contributions:</h4>
<ul>
<li><strong>Complete Prototyping:</strong> Design of all key views (Login, Feed, Profile, Course Detail) in Figma.</li>
<li><strong>Design System:</strong> Creation of a style guide and reusable components to maintain visual consistency.</li>
<li><strong>User Flow:</strong> Optimization of navigation to reduce the number of clicks needed to find a syllabus or resource.</li>
</ul>`
    },
    tags: {
      es: ["Diseño UX/UI", "Frontend Dev"],
      en: ["UX/UI Design", "Frontend Dev"],
    },
    techBadge: ['figma'],
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/design/yR3jjtWpHpcrZeAFD8g5ye/Prototipo--Copia-?node-id=0-1&t=qeyHyAst2IBwDw4b-1' },
      { type: 'presentation', url: 'https://docs.google.com/presentation/d/1CTQ12oEVfDb43T7HHMNFHRVAe42OfOzzwQgP9V5Tf3c/edit?usp=sharing' },
      { type: 'github', url: 'https://github.com/atn25042002/ForUnsa' }
    ]
  },
  {
    id: 12,
    folderName: 'MiCombi - UX Caso de Estudio',
    title: {
      es: 'MiCombi - UX Caso de Estudio',
      en: 'MiCombi - UX Case Study',
    },
    description: {
      es: 'Caso de estudio completo de UX/UI para una app de transporte público. Abarqué desde la investigación de usuarios y arquitectura de información hasta el prototipado en alta fidelidad y validación con métricas de usabilidad.',
      en: 'Complete UX/UI case study for a public transport app. I covered everything from user research and information architecture to high-fidelity prototyping and validation with usability metrics.',
    },
    expandedDescription: {
      es: `<h3>MiCombi - Diseño Centrado en el Usuario</h3>
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
      en: `<h3>MiCombi - User-Centered Design</h3>
<p>Developed as a final project for the <strong>Advanced UX/UI certification at Coderhouse</strong>, "MiCombi" was created to solve the chaotic experience of navigating informal public transport in Peruvian cities. This project was not limited to visual design, but rigorously followed the <strong>Design Thinking</strong> methodology.</p>

<p>In the <strong>UX Research</strong> phase, I conducted competitive benchmarking (analyzing TuRuta, Rumbo, Google Maps) and interviews with real users to define <em>User Personas</em> and <em>Journey Maps</em>. I identified that the main friction was not the lack of routes, but the user's uncertainty and anxiety of not knowing where to get off. With these findings, I defined the information architecture and user flows.</p>

<p>For the <strong>Interaction Design (IxD) and UI</strong>, I iterated through three levels of fidelity: paper sketches (Low-Fi), structural wireframes (Mid-Fi), and finally an interactive High-Fidelity (High-Fi) prototype in <strong>Figma</strong>. I implemented an atomic design system to ensure visual consistency and product scalability.</p>

<p>The highlight was the <strong>Validation and Testing</strong> phase. I conducted moderated usability tests with potential users, measuring task success and satisfaction using standardized metrics such as the <strong>SEQ (Single Ease Question)</strong> and the <strong>SUS (System Usability Scale)</strong> scale, iterating the final design based on these quantitative and qualitative results.</p>

<h4>Deliverables and Techniques:</h4>
<ul>
<li><strong>Research:</strong> Benchmarking, Interviews, User Personas, Empathy Maps.</li>
<li><strong>Design:</strong> Wireframing (Low/Mid/High fidelity), Interactive Prototyping, Design System.</li>
<li><strong>Usability Metrics:</strong> Testing with real users, Success Rate measurement, SEQ, and SUS.</li>
</ul>`
    },
    tags: {
      es: ["Diseño UX/UI", "Caso de Estudio", "Impacto Social"],
      en: ["UX/UI Design", "Case Study", "Social Impact"],
    },
    techBadge: ['figma'],
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/file/IjraYwcUMkE7xSmGn3lPjx/MiCombi-UX%2FUI?type=design&node-id=247%3A4052&t=GpJAVXUknP2p2qRe-1' },
      { type: 'demo', url: 'https://www.figma.com/proto/IjraYwcUMkE7xSmGn3lPjx/MiCombi-UX%2FUI?type=design&node-id=247-4743&scaling=scale-down&page-id=247%3A4052&starting-point-node-id=247%3A4743' },
      { type: 'presentation', url: 'https://docs.google.com/presentation/d/1sTodpTIea1VuydorGpjw8gmAA24KXMM5TTV3sz0kU3I/edit?usp=sharing' } 
    ]
  },
  {
    id: 13,
    folderName: 'Cinepolis - Caso de Estudio UX-UI',
    title: {
      es: 'Cinepolis - Caso de Estudio UX-UI',
      en: 'Cinepolis - UX/UI Case Study',
    },
    description: {
      es: 'Caso de estudio de rediseño de la experiencia de compra de entradas. Enfoque en la optimización del flujo de usuario (User Flow), prototipado interactivo en Figma y validación mediante pruebas de usabilidad moderadas.',
      en: 'Case study of the redesign of the ticket purchasing experience. Focus on optimizing the User Flow, interactive prototyping in Figma and validation through moderated usability testing.',
    },
    expandedDescription: {
      es: `<h3>Cinepolis - Optimización de la Experiencia de Compra</h3>
<p>Este proyecto consistió en un rediseño integral del flujo de adquisición de boletos para la cadena de cines Cinepolis, realizado como parte de una especialización en UX/UI. El objetivo principal fue identificar y eliminar los puntos de fricción (pain points) que causaban el abandono del carrito durante el proceso de compra digital.</p>

<p>La fase de <strong>Investigación y Estrategia (UX Research)</strong> comenzó con un análisis heurístico de la aplicación actual y entrevistas a usuarios frecuentes. Desarrollé artefactos clave como <em>User Personas</em> y <em>Customer Journey Maps</em> para mapear las emociones del usuario en cada etapa. Los hallazgos del "Reporte de Insights" revelaron problemas críticos en la selección de butacas y la claridad de los costos finales, lo que guió la nueva arquitectura de información.</p>

<p>Para la etapa de <strong>Diseño y Prototipado</strong>, utilicé <strong>Figma</strong> para iterar desde wireframes de baja fidelidad hasta un prototipo de alta fidelidad (High-Fi) totalmente interactivo. Implementé mejoras visuales y de interacción, como un selector de asientos más intuitivo y un desglose de precios transparente. El diseño final fue sometido a <strong>Pruebas de Usabilidad</strong> con usuarios reales, permitiéndome validar las hipótesis de mejora y ajustar el producto basándome en métricas de éxito y tiempos de ejecución de tareas.</p>

<h4>Entregables Clave:</h4>
<ul>
<li><strong>Reporte de Insights:</strong> Documentación detallada de hallazgos cualitativos y cuantitativos tras las pruebas con usuarios.</li>
<li><strong>Prototipo Navegable:</strong> Simulación completa del flujo de compra ("Happy Path") con micro-interacciones.</li>
<li><strong>Iteración Basada en Datos:</strong> Ajustes de diseño realizados post-testing para maximizar la usabilidad.</li>
</ul>`,
      en: `<h3>Cinepolis - Optimization of the Purchasing Experience</h3>
<p>This project consisted of a comprehensive redesign of the ticket acquisition flow for the Cinepolis cinema chain, carried out as part of a UX/UI specialization. The main objective was to identify and eliminate friction points (pain points) that caused cart abandonment during the digital purchasing process.</p>

<p>The <strong>Research and Strategy (UX Research)</strong> phase began with a heuristic analysis of the current application and interviews with frequent users. I developed key artifacts such as <em>User Personas</em> and <em>Customer Journey Maps</em> to map the user's emotions at each stage. The findings of the "Insights Report" revealed critical problems in seat selection and the clarity of final costs, which guided the new information architecture.</p>

<p>For the <strong>Design and Prototyping</strong> stage, I used <strong>Figma</strong> to iterate from low-fidelity wireframes to a fully interactive high-fidelity (High-Fi) prototype. I implemented visual and interaction improvements, such as a more intuitive seat selector and a transparent price breakdown. The final design was subjected to <strong>Usability Testing</strong> with real users, allowing me to validate the improvement hypotheses and adjust the product based on success metrics and task execution times.</p>

<h4>Key Deliverables:</h4>
<ul>
<li><strong>Insights Report:</strong> Detailed documentation of qualitative and quantitative findings after user testing.</li>
<li><strong>Navigable Prototype:</strong> Complete simulation of the purchase flow ("Happy Path") with micro-interactions.</li>
<li><strong>Data-Driven Iteration:</strong> Design adjustments made post-testing to maximize usability.</li>
</ul>`
    },
    tags: {
      es: ["Diseño UX/UI", "Caso de Estudio"],
      en: ["UX/UI Design", "Case Study"],
    },
    techBadge: ['figma'],
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/file/tG9evssbIGB63QkJgJbpEs/PrototipoCinepolis-Henry?type=design&node-id=0%3A1&mode=design&t=avEtrFq5IL6MLtwo-1' },
      { type: 'demo', url: 'https://www.figma.com/proto/tG9evssbIGB63QkJgJbpEs/PrototipoCinepolis-Henry?node-id=9-657&t=UBkL5c4JQ9h17qFs-1&scaling=min-zoom&content-scaling=fixed&page-id=4%3A2&starting-point-node-id=9%3A657&show-proto-sidebar=1' },
      { type: 'presentation', url: 'https://docs.google.com/presentation/d/1ub7yW99RkIxHOC7Wu-7UhsJ-JQkqZMIP-5fD6w9Nap4/edit?usp=sharing' } 
    ]
  },
  {
    id: 14,
    folderName: 'Helpy',
    title: {
      es: 'Helpy',
      en: 'Helpy',
    },
    description: {
      es: 'Diseñé y prototipé una aplicación móvil de asistencia médica geriátrica. Me enfoqué en la accesibilidad para el adulto mayor y validé la usabilidad del diseño mediante pruebas comparativas (método SUS) frente a competidores.',
      en: 'I designed and prototyped a geriatric medical assistance mobile application. I focused on accessibility for the elderly and validated the design usability through comparative testing (SUS method) against competitors.',
    },
    expandedDescription: {
      es: `<h3>Helpy - Salud y Accesibilidad Digital</h3>
<p>Presentado en la <strong>Feria de Proyectos 2022</strong>, Helpy es una solución móvil diseñada para abordar la problemática de la adherencia al tratamiento médico en adultos mayores. El objetivo fue crear una herramienta digital que permitiera a este grupo demográfico gestionar sus recordatorios de medicación y monitorear signos vitales de manera autónoma y sencilla.</p>

<p>Mi rol principal fue el de <strong>Diseñador de Producto y UX/UI</strong>. El desafío central fue diseñar una interfaz con altos estándares de <strong>accesibilidad</strong>, adaptada a las limitaciones visuales y cognitivas propias de la tercera edad. Diseñé flujos de navegación simplificados, utilicé tipografía de alto contraste y botones de gran tamaño para asegurar una interacción sin fricción. El prototipo permite configurar alarmas de medicamentos, registrar presión arterial/glucosa y conectar con cuidadores o médicos.</p>

<p>Para validar la propuesta, lideré una fase de <strong>Investigación y Testing</strong> rigurosa. Realicé un estudio comparativo (Benchmarking) contra líderes del mercado como <em>Medisafe</em> y ejecuté pruebas de usabilidad con usuarios reales mayores de 50 años. Utilicé la escala <strong>SUS (System Usability Scale)</strong> para medir cuantitativamente la satisfacción, demostrando que la interfaz de Helpy reducía la carga cognitiva y mejoraba la experiencia de uso frente a la competencia.</p>

<h4>Aportes de Diseño e Investigación:</h4>
<ul>
<li><strong>Diseño Inclusivo:</strong> Interfaz gráfica optimizada para adultos mayores (UI Geriátrica).</li>
<li><strong>Validación Científica:</strong> Uso de la metodología SUS para respaldar las decisiones de diseño con datos cuantitativos.</li>
<li><strong>Prototipado Funcional:</strong> Creación de flujos completos para la gestión de tratamientos y alertas médicas.</li>
</ul>`,
      en: `<h3>Helpy - Health and Digital Accessibility</h3>
<p>Presented at the <strong>2022 Project Fair</strong>, Helpy is a mobile solution designed to address the issue of medical treatment adherence in older adults. The goal was to create a digital tool that would allow this demographic group to manage their medication reminders and monitor vital signs autonomously and easily.</p>

<p>My main role was as a <strong>Product and UX/UI Designer</strong>. The central challenge was to design an interface with high standards of <strong>accessibility</strong>, adapted to the visual and cognitive limitations inherent to old age. I designed simplified navigation flows, used high-contrast typography, and large buttons to ensure frictionless interaction. The prototype allows setting medication alarms, recording blood pressure/glucose, and connecting with caregivers or doctors.</p>

<p>To validate the proposal, I led a rigorous <strong>Research and Testing</strong> phase. I conducted a comparative study (Benchmarking) against market leaders like <em>Medisafe</em> and executed usability tests with real users over 50 years old. I used the <strong>SUS (System Usability Scale)</strong> to quantitatively measure satisfaction, demonstrating that Helpy's interface reduced cognitive load and improved the user experience compared to the competition.</p>

<h4>Design and Research Contributions:</h4>
<ul>
<li><strong>Inclusive Design:</strong> Graphic interface optimized for older adults (Geriatric UI).</li>
<li><strong>Scientific Validation:</strong> Use of the SUS methodology to support design decisions with quantitative data.</li>
<li><strong>Functional Prototyping:</strong> Creation of complete flows for the management of treatments and medical alerts.</li>
</ul>`
    },
    tags: {
      es: ["Diseño UX/UI", "Impacto Social"],
      en: ["UX/UI Design", "Social Impact"],
    },
    techBadge: ['figma'], 
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/design/xTNEM1O2k9DXR0TT4iqxFH/Helpy?node-id=0-1&t=Uvg2YkNJB1jzOhIH-1' },
      { type: 'demo', url: 'https://www.figma.com/proto/xTNEM1O2k9DXR0TT4iqxFH/Helpy?node-id=18-481&t=ppQjiazUjlvGGxTY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=8%3A61' },
      { type: 'presentation', url: 'https://docs.google.com/presentation/d/1OzpJs1ve9EgU8Uswvirko6vM4HiLPS7LZag_ZOrAzBM/edit?usp=sharing' }
    ]
  },
  {
    id: 15,
    folderName: 'MOOC Gamificado - Emprendimiento',
    title: {
      es: 'MOOC Gamificado - Emprendimiento',
      en: 'Gamified MOOC - Entrepreneurship',
    },
    description: {
      es: 'Diseñé y prototipé en Figma una plataforma educativa gamificada. Integré narrativas de emprendimiento y mecánicas de juego (insignias, XP) para validar un modelo de aprendizaje basado en retos sin necesidad de backend.',
      en: 'I designed and prototyped a gamified educational platform in Figma. I integrated entrepreneurship narratives and game mechanics (badges, XP) to validate a challenge-based learning model without the need for a backend.',
    },
    expandedDescription: {
      es: `<h3>MOOC Gamificado - Experiencia de Aprendizaje Inmersiva</h3>
<p>Este proyecto consistió en el diseño UX/UI de una plataforma MOOC (Massive Open Online Course) centrada en la enseñanza del emprendimiento. El objetivo fue validar un modelo pedagógico que combina <strong>Design Thinking y Gamificación</strong>, integrados de manera orgánica para que el usuario perciba una narrativa de negocio ("Innova, Lanza y Escala") en lugar de una lección teórica tradicional.</p>

<p>En la fase de <strong>Prototipado en Figma</strong>, diseñé un sistema de interacción basado en "Misiones". En lugar de módulos estáticos, el estudiante elige un reto (ej. "La Revolución del Café") y avanza desbloqueando niveles ("Novato", "Innovador", "Visionario"). Implementé mecánicas de <strong>feedback inmediato</strong>, donde cada acción del usuario genera puntos de experiencia (XP) o insignias temáticas, reforzando la motivación y la retención del estudiante.</p>

<p>El diseño visual se iteró para eliminar tecnicismos pedagógicos, adoptando una estética profesional. Además, integré una funcionalidad de <strong>"Malla Receptora"</strong> dentro del mismo prototipo, permitiendo capturar feedback cualitativo de los usuarios evaluadores en tiempo real directamente sobre las pantallas del curso, facilitando la validación temprana del producto.</p>

<h4>Características de Diseño:</h4>
<ul>
<li><strong>Gamificación Estructural:</strong> Sistema de progreso por niveles, barras de experiencia (XP) y recompensas visuales (insignias de "Detective", "Visionario").</li>
<li><strong>Narrativa Inmersiva:</strong> Flujos de usuario diseñados como "misiones" de emprendimiento real para aumentar el compromiso.</li>
<li><strong>Herramientas de Validación:</strong> Integración de componentes para la recolección de feedback de usabilidad (malla receptora) dentro de la interfaz.</li>
</ul>`,
      en: `<h3>Gamified MOOC - Immersive Learning Experience</h3>
<p>This project consisted of the UX/UI design of a MOOC (Massive Open Online Course) platform focused on teaching entrepreneurship. The objective was to validate a pedagogical model that combines <strong>Design Thinking and Gamification</strong>, organically integrated so that the user perceives a business narrative ("Innovate, Launch, and Scale") instead of a traditional theoretical lesson.</p>

<p>In the <strong>Figma Prototyping</strong> phase, I designed an interaction system based on "Missions". Instead of static modules, the student chooses a challenge (e.g., "The Coffee Revolution") and advances by unlocking levels ("Rookie", "Innovator", "Visionary"). I implemented <strong>immediate feedback</strong> mechanics, where each user action generates experience points (XP) or thematic badges, reinforcing student motivation and retention.</p>

<p>The visual design was iterated to eliminate pedagogical technicalities, adopting a professional aesthetic. Additionally, I integrated a <strong>"Feedback Grid" (Malla Receptora)</strong> functionality within the prototype itself, allowing the capture of qualitative feedback from evaluating users in real time directly on the course screens, facilitating early product validation.</p>

<h4>Design Features:</h4>
<ul>
<li><strong>Structural Gamification:</strong> Level progression system, experience bars (XP), and visual rewards ("Detective", "Visionary" badges).</li>
<li><strong>Immersive Narrative:</strong> User flows designed as real entrepreneurship "missions" to increase engagement.</li>
<li><strong>Validation Tools:</strong> Integration of components for usability feedback collection (feedback grid) within the interface.</li>
</ul>`
    },
    tags: {
      es: ["Diseño UX/UI", "Caso de Estudio"],
      en: ["UX/UI Design", "Case Study"],
    },
    techBadge: ['figma'],
    buttons: [
      { type: 'figma', url: 'https://www.figma.com/design/O4SnOC5EE59PGSLuyLOkkL/MOOC-Gamificado-Prototipo?node-id=1-143&t=Wo8A54PoJOTl67Qi-1' },
      { type: 'demo', url: 'https://www.figma.com/proto/O4SnOC5EE59PGSLuyLOkkL/MOOC-Gamificado-Prototipo?node-id=1-143&t=gS6RWhjIiza8qQA4-1' } 
    ]
  }
];