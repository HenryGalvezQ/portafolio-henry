<template>
  <div 
    class="portfolio-card-container" 
    :class="{ 
      'is-expanded': isExpanded,
      'is-hovered': isHovered && !isExpanded,
      'is-animating': isAnimating 
    }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <PortfolioCard 
      :project="project"
      :is-expanded="isExpanded"
      :is-hovered="isHovered"
      @toggle-expand="toggleExpand"
    />
    
    <Transition 
      name="expand-description"
      @enter="onEnter"
      @leave="onLeave"
    >
      <PortfolioExpandedDescription 
        v-if="isExpanded"
        :project="project"
        @close="toggleExpand"
      />
    </Transition>
  </div>
</template>

<script>
import PortfolioCard from './PortfolioCard.vue';
import PortfolioExpandedDescription from './PortfolioExpandedDescription.vue';

export default {
  name: 'PortfolioCardWrapper',
  components: {
    PortfolioCard,
    PortfolioExpandedDescription
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isExpanded: false,
      isAnimating: false,
      // CAMBIO: Añadido estado para el hover
      isHovered: false,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
      // CAMBIO: Asegurarse que el estado hover se reinicie al expandir/contraer
      this.isHovered = false;
    },
    onEnter() {
      this.isAnimating = true;
    },
    onLeave() {
      // CAMBIO: Quitar isAnimating después de que termine la animación
      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
    },
    // CAMBIO: Métodos para manejar el hover
    handleMouseEnter() {
      if (!this.isExpanded) {
        this.isHovered = true;
      }
    },
    handleMouseLeave() {
      this.isHovered = false;
    }
  }
}
</script>

<style scoped>
/* CAMBIO: La clase base ahora define la apariencia de la card */
.portfolio-card-container {
  display: flex;
  position: relative;
  z-index: 1;
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: .5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,.15);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s ease, box-shadow .3s, max-height 0.5s ease-in-out;
  max-height: 530px;
  overflow: hidden;
}

/* CAMBIO: Estilos de hover que antes estaban en el hijo */
.portfolio-card-container.is-hovered {
  box-shadow: 0 4px 8px rgba(0,0,0,.15);
  transform: scale(1.03);
  z-index: 5;
  max-height: 800px;
}

.portfolio-card-container.is-expanded {
  grid-column: 1 / -1;
  z-index: 10;
  margin: 0 -1rem;
  padding: 0; /* El padding ahora lo gestionan los hijos */
  max-height: 1000px; /* Suficiente altura para el contenido expandido */
  overflow: visible; /* Permite que el box-shadow se vea bien */
}

.is-animating {
  overflow: visible;
}

/* Transición para la descripción expandida (sin cambios) */
.expand-description-enter-active,
.expand-description-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.expand-description-enter-from,
.expand-description-leave-to {
  opacity: 0;
  transform: translateX(30px);
  width: 0;
}

.expand-description-enter-to,
.expand-description-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Responsividad */
@media screen and (max-width: 567px) {
  .portfolio-card-container.is-expanded {
    flex-direction: column;
    margin: 0;
  }
  
  .expand-description-enter-from,
  .expand-description-leave-to {
    transform: translateY(20px);
  }
}

@media screen and (min-width: 992px) {
  .portfolio-card-container {
    padding: 1.6rem;
  }
  .portfolio-card-container.is-expanded {
    margin: 0 -2rem;
  }
}
</style>