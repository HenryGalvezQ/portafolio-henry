<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">Portfolio</h2>
    <span class="section__subtitle">Trabajos más recientes</span>

    <div class="portfolio__container container grid">
      <PortfolioCard 
        v-for="project in projects" 
        :key="project.id" 
        :project="project"
      />
    </div>
  </section>
</template>

<script>
// 1. Importar componentes necesarios
import PortfolioCard from './PortfolioCard.vue';
import { buttonTemplates } from '@/config/button-config.js';
// ¡NUEVO! Importar nuestro cargador de imágenes
import projectsImages from '@/utils/image-loader.js';

export default {
  name: 'Portfolio',
  components: {
    PortfolioCard
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
    // Los datos "en crudo" ahora no necesitan la propiedad 'images'.
    // La añadiremos dinámicamente.
    const projectsData = [
      {
        id: 1,
        title: 'Sigepro',
        description: 'Sitio web diseñado en Figma y desarrollado en Vue 3, utiliza Pinia store y tailwindcss, está conectado al backend con ApiRESTFul y sigo hablando y hablando y hablandoooooo.',
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
        buttons: this.createProjectButtons([
          { type: 'demo-simple', url: '#' }
        ])
      },
      {
        id: 4,
        title: 'App de E-commerce',
        description: 'Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.',
        buttons: this.createProjectButtons([
          { type: 'demo-simple', url: '#' }
        ])
      },
      {
        id: 5,
        title: 'Diseño de Marca',
        description: 'Sitio web diseñado en Figma y desarrollado en Vue 3, utiliza Pinia store y tailwindcss, está conectado al backend con ApiRESTFul y sigo hablando y hablando y hablandoooooo.',
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
        tags: ["Proyecto Personal", "Diseño UX/UI", "Desarrollo Frontend"],
        techBadge: ['figma', 'vue'],
        buttons: this.createProjectButtons([
          { type: 'demo', url: 'http://67.205.133.92/app/' },
          { type: 'figma', url: 'https://www.figma.com/design/6yVeJjKkAnVy7yTG1shhTq/Prototipado-SIGEPRO?node-id=1292-511&p=f&t=QlJ8irZ9W3I0wwd6-0' },
          { type: 'presentation', url: '#' },
          { type: 'github', url: 'https://gitlab.com/pisw2025-proyectos-investigacion/sigepro-frontend' }
        ])
      },
      // ...etc.
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