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
// 1. Importar el nuevo componente hijo
import PortfolioCard from './PortfolioCard.vue';

// --- IMPORTAR IMÁGENES ---
// Se importan las imágenes para cada proyecto aquí, en el componente padre.
import portfolio1_1 from '@/assets/img/portafolio/portfolio1_1.jpg';
import portfolio1_2 from '@/assets/img/portafolio/portfolio1_2.jpg';
import portfolio1_3 from '@/assets/img/portafolio/portfolio1_3.jpg';

import portfolio2 from '@/assets/img/portfolio2.jpg';
import portfolio3 from '@/assets/img/portfolio3.jpg';
import portfolio4 from '@/assets/img/portfolio1.jpg';

export default {
  name: 'Portfolio',
  // 2. Registrar el componente hijo para poder usarlo en el template
  components: {
    PortfolioCard
  },
  data() {
    return {
      // 3. Definir todos los proyectos en un único array de objetos
      projects: [
        { 
          id: 1, 
          title: 'Sigepro', 
          description: 'Sitio web diseñado en Figma y desarrollado en Vue 3, utiliza Pinia store y tailwindcss, está conectado al backend con ApiRESTFul y sigo hablando y hablando y hablandoooooo.',
          tags: ["Proyecto Personal", "Diseño UX/UI", "Desarrollo Frontend"],
          images: [ portfolio1_1, portfolio1_2, portfolio1_3 ],
          techBadge: ['figma', 'vue'],
          buttons: [
            { type: 'demo', text: 'Demo', icon: 'uil uil-play', url: 'http://67.205.133.92/app/', animated: true, arrow: true },
            { type: 'figma', text: 'Diseño', icon: 'figma', url: 'https://www.figma.com/design/6yVeJjKkAnVy7yTG1shhTq/Prototipado-SIGEPRO?node-id=1292-511&p=f&t=QlJ8irZ9W3I0wwd6-0', animated: true, arrow: true },
            { type: 'github', text: 'Código', icon: 'github', url: 'https://gitlab.com/pisw2025-proyectos-investigacion/sigepro-frontend', animated: true, arrow: true },
            { type: 'presentation', text: 'Slides', icon: 'uil uil-presentation-play', url: '#', animated: true, arrow: true }
          ]
        },
        { 
          id: 2, 
          title: 'Diseño de Marca', 
          description: 'Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.',
          images: [ portfolio2 ],
          buttons: [
            { type: 'demo', text: 'Demo', icon: 'uil uil-arrow-right', url: '#', animated: false }
          ]
        },
        { 
          id: 3, 
          title: 'Tienda Online', 
          description: 'Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.',
          images: [ portfolio3 ],
          buttons: [
            { type: 'demo', text: 'Demo', icon: 'uil uil-arrow-right', url: '#', animated: false }
          ]
        },
        { 
          id: 4, 
          title: 'App de E-commerce', 
          description: 'Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.',
          images: [ portfolio4 ],
          buttons: [
            { type: 'demo', text: 'Demo', icon: 'uil uil-arrow-right', url: '#', animated: false }
          ]
        },
        { 
          id: 5, 
          title: 'Proyecto 5', 
          description: 'Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.',
          images: [ portfolio2 ],
          buttons: [
            { type: 'demo', text: 'Demo', icon: 'uil uil-arrow-right', url: '#', animated: false }
          ]
        },
        { 
          id: 6, 
          title: 'Proyecto 6', 
          description: 'Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.',
          images: [ portfolio3 ],
          buttons: [
            { type: 'demo', text: 'Demo', icon: 'uil uil-arrow-right', url: '#', animated: false }
          ]
        },
      ]
    };
  }
  // ¡Toda la lógica compleja ha sido eliminada de aquí!
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