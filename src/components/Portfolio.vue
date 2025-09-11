// Portfolio.vue
<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">Portfolio</h2>
    <span class="section__subtitle">Trabajos más recientes</span>

    <div class="portfolio__container container grid">
      <PortfolioCardWrapper 
        v-for="project in projects" 
        :key="project.id" 
        :project="project"
      />
    </div>
  </section>
</template>

<script>
// 1. Importar componentes necesarios
import PortfolioCardWrapper from './PortfolioCardWrapper.vue'; // Nuevo wrapper
import { buttonTemplates } from '@/config/button-config.js';
// ¡NUEVO! Importar nuestro cargador de imágenes
import projectsImages from '@/utils/image-loader.js';

export default {
  name: 'Portfolio',
  components: {
    PortfolioCardWrapper // Ahora usamos el wrapper
  },
  data() {
    return {
      projects: []
    };
  },
  methods: {
    createProjectButtons(buttonList) {
      if (!buttonList) return [];
      
      return buttonList.map((buttonInfo, index) => {
        const template = buttonTemplates[buttonInfo.type] || {};
        return {
          ...template,
          ...buttonInfo,
          id: index + 1,
        };
      });
    }
  },
  created() {
    // Los datos "en crudo" ahora incluyen descripción expandida
    const projectsData = [
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
        tags: ["Proyecto Personal", "Diseño UX/UI", "Desarrollo Frontend"],
        techBadge: ['figma', 'vue'],
        buttons: this.createProjectButtons([
          { type: 'demo', url: 'http://67.205.133.92/app/' },
          { type: 'figma', url: 'https://www.figma.com/design/6yVeJjKkAnVy7yTG1shhTq/Prototipado-SIGEPRO?node-id=1292-511&p=f&t=QlJ8irZ9W3I0wwd6-0' },
          { type: 'github', url: 'https://gitlab.com/pisw2025-proyectos-investigacion/sigepro-frontend' },
          { type: 'presentation', url: '#' }
        ])
      },
      {
        id: 2,
        title: 'Diseño de Marca',
        description: 'Sitio web diseñado en Figma y desarrollado en Vue 3, utiliza Pinia store y tailwindcss, está conectado al backend con ApiRESTFul y sigo hablando y hablando y hablandoooooo.',
        expandedDescription: `<h3>Proyecto: Sistema de Diseño de Marca</h3>
<p>Este proyecto se enfocó en crear una identidad visual completa y coherente, desarrollando desde el concepto inicial hasta la implementación digital final. El trabajo abarcó tanto la creación de elementos gráficos como su traducción a una experiencia web interactiva y funcional.</p>

<p>Desde el punto de vista del <strong>Diseño Gráfico</strong>, desarrollé una identidad visual sólida que incluye logotipo, paleta de colores, tipografías corporativas y elementos gráficos complementarios. Cada elemento fue diseñado pensando en su aplicación multi-plataforma y escalabilidad.</p>

<p>En el <strong>Desarrollo Web</strong>, implementé la identidad visual en una plataforma digital robusta utilizando Vue 3, Pinia para la gestión del estado y Tailwind CSS para un diseño consistente y responsivo.</p>`,
        tags: ["Proyecto Personal", "Diseño UX/UI", "Desarrollo Frontend"],
        techBadge: ['figma', 'vue'],
        buttons: this.createProjectButtons([
          { type: 'demo', url: 'http://67.205.133.92/app/' },
          { type: 'figma', url: 'https://www.figma.com/design/6yVeJjKkAnVy7yTG1shhTq/Prototipado-SIGEPRO?node-id=1292-511&p=f&t=QlJ8irZ9W3I0wwd6-0' },
          { type: 'presentation', url: '#' },
          { type: 'github', url: 'https://gitlab.com/pisw2025-proyectos-investigacion/sigepro-frontend' }
        ])
      },
      {
        id: 3,
        title: 'Tienda Online',
        description: 'Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.',
        expandedDescription: `<h3>Tienda Online - E-commerce Moderno</h3>
<p>Desarrollo completo de una tienda online con enfoque en la experiencia del usuario y conversión. Este proyecto integra un sistema de gestión de productos, carrito de compras y procesamiento de pagos.</p>
<p>Las características incluyen diseño responsivo, animaciones fluidas y optimización para dispositivos móviles.</p>`,
        buttons: this.createProjectButtons([
          { type: 'demo-simple', url: '#' }
        ])
      },
      {
        id: 4,
        title: 'App de E-commerce',
        description: 'Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.',
        expandedDescription: `<h3>Aplicación E-commerce Avanzada</h3>
<p>Aplicación web progresiva (PWA) para comercio electrónico, diseñada con tecnologías modernas y enfoque mobile-first.</p>
<p>Incluye funcionalidades avanzadas como búsqueda inteligente, recomendaciones personalizadas y integración con múltiples métodos de pago.</p>`,
        buttons: this.createProjectButtons([
          { type: 'demo-simple', url: '#' }
        ])
      },
      {
        id: 5,
        title: 'Diseño de Marca',
        description: 'Sitio web diseñado en Figma y desarrollado en Vue 3, utiliza Pinia store y tailwindcss, está conectado al backend con ApiRESTFul y sigo hablando y hablando y hablandoooooo.',
        expandedDescription: `<h3>Proyecto: Sistema de Identidad Corporativa</h3>
<p>Desarrollo integral de identidad corporativa que abarca desde el diseño conceptual hasta la implementación digital. Este proyecto se centró en crear una presencia de marca coherente y memorable.</p>`,
        tags: ["Proyecto Personal", "Diseño UX/UI", "Desarrollo Frontend"],
        techBadge: ['figma', 'vue'],
        buttons: this.createProjectButtons([
          { type: 'demo', url: 'http://67.205.133.92/app/' },
          { type: 'figma', url: 'https://www.figma.com/design/6yVeJjKkAnVy7yTG1shhTq/Prototipado-SIGEPRO?node-id=1292-511&p=f&t=QlJ8irZ9W3I0wwd6-0' },
          { type: 'presentation', url: '#' },
          { type: 'github', url: 'https://gitlab.com/pisw2025-proyectos-investigacion/sigepro-frontend' }
        ])
      },
      {
        id: 6,
        title: 'Diseño de Marca',
        description: 'Sitio web diseñado en Figma y desarrollado en Vue 3, utiliza Pinia store y tailwindcss, está conectado al backend con ApiRESTFul y sigo hablando y hablando y hablandoooooo.',
        expandedDescription: `<h3>Proyecto: Branding Digital Completo</h3>
<p>Creación de una identidad de marca digital completa que incluye diseño web, aplicaciones móviles y material promocional. El proyecto se desarrolló siguiendo metodologías de design thinking.</p>`,
        tags: ["Proyecto Personal", "Diseño UX/UI", "Desarrollo Frontend"],
        techBadge: ['figma', 'vue'],
        buttons: this.createProjectButtons([
          { type: 'demo', url: 'http://67.205.133.92/app/' },
          { type: 'figma', url: 'https://www.figma.com/design/6yVeJjKkAnVy7yTG1shhTq/Prototipado-SIGEPRO?node-id=1292-511&p=f&t=QlJ8irZ9W3I0wwd6-0' },
          { type: 'presentation', url: '#' },
          { type: 'github', url: 'https://gitlab.com/pisw2025-proyectos-investigacion/sigepro-frontend' }
        ])
      },
      {
        id: 7,
        title: 'Diseño de Marca',
        description: 'Sitio web diseñado en Figma y desarrollado en Vue 3, utiliza Pinia store y tailwindcss, está conectado al backend con ApiRESTFul y sigo hablando y hablando y hablandoooooo.',
        expandedDescription: `<h3>Proyecto: Rediseño de Identidad Corporativa</h3>
<p>Modernización completa de la identidad visual de una empresa establecida, incluyendo la migración de sistemas legacy y actualización de todos los materiales de marca.</p>`,
        tags: ["Proyecto Personal", "Diseño UX/UI", "Desarrollo Frontend"],
        techBadge: ['figma', 'vue'],
        buttons: this.createProjectButtons([
          { type: 'demo', url: 'http://67.205.133.92/app/' },
          { type: 'figma', url: 'https://www.figma.com/design/6yVeJjKkAnVy7yTG1shhTq/Prototipado-SIGEPRO?node-id=1292-511&p=f&t=QlJ8irZ9W3I0wwd6-0' },
          { type: 'presentation', url: '#' },
          { type: 'github', url: 'https://gitlab.com/pisw2025-proyectos-investigacion/sigepro-frontend' }
        ])
      }
    ];
    
    // ¡MAGIA! Procesamos los datos para añadir las imágenes automáticamente.
    this.projects = projectsData.map(project => ({
      ...project,
      // Busca en nuestro objeto de imágenes usando el título del proyecto como clave.
      // Si no encuentra nada, devuelve un array vacío para evitar errores.
      images: projectsImages[project.title] || []
    }));
  }
}
</script>

<style scoped>
/* Aquí solo quedan los estilos que aplican al contenedor principal, 
  no a las tarjetas individuales.
*/
.portfolio__container {
  gap: 2.5rem;
  grid-template-columns: 1fr;
  padding-top: 1rem;
  align-items: start;
}

@media screen and (max-width: 350px) {
  .portfolio__container {
    grid-template-columns: max-content;
    justify-content: center;
  }
}
@media screen and (min-width: 568px) {
  .portfolio__container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 992px) {
  .portfolio__container {
    grid-template-columns: repeat(3, 340px);
    justify-content: center;
  }
}
</style>