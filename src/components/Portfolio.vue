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
import { projectsData } from '@/data/projectsData.js';
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
    },

    processProjects() {
      return projectsData.map(project => ({
        ...project,
        images: projectsImages[project.title] || [],
        buttons: this.createProjectButtons(project.buttons)
      }));
    }
  },
  created() {
    this.projects = this.processProjects();
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