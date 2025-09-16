<template>
  <div 
    class="portfolio-card-container" 
    :class="{ 
      'is-expanded': isExpanded,
      'is-hovered': isHovered && !isExpanded,
      'is-animating': isAnimating 
    }"
    :style="expandedCardStyle"
    @mouseenter="handleMouseEnter($event)"
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
      hoveredCardHeight: null,
      measureTimeout: null,
    };
  },
  // CAMBIO: Añadimos una computed property
  computed: {
    expandedCardStyle() {
      // Si la tarjeta está expandida y hemos medido una altura, la aplicamos
      if (this.isExpanded && this.hoveredCardHeight) {
        return { 'max-height': `${this.hoveredCardHeight}px` };
      }
      return {}; // Si no, no aplicamos ningún estilo
    }
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
    handleMouseEnter(event) {
      // Limpiamos cualquier medición anterior que pudiera estar pendiente
      if (this.measureTimeout) {
        clearTimeout(this.measureTimeout);
      }
      
      if (!this.isExpanded) {
        this.isHovered = true;
        
        // Creamos un temporizador para esperar a que terminen las animaciones de CSS
        this.measureTimeout = setTimeout(() => {
          // Usamos this.$el para referirnos al elemento raíz del componente,
          // que es más seguro dentro de un setTimeout.
          if (this.$el) {
            this.hoveredCardHeight = this.$el.scrollHeight;
          }
        }, 500); // 500ms = 0.5s, la duración de la transición de max-height
      }
    },

    handleMouseLeave() {
      // Si el usuario quita el ratón antes de que midamos, cancelamos la medición
      if (this.measureTimeout) {
        clearTimeout(this.measureTimeout);
      }
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
  max-height: 530px; 
  overflow: hidden;
  
  /* --- LÓGICA DE ANCHO CORREGIDA --- */
  
  /* 1. Crucial para que el padding se incluya en el cálculo del width */
  box-sizing: border-box;
  
  /* 2. Por defecto (estado normal), el card tiene un ancho fijo */
  width: 340px; 
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
  width: auto;
  padding: 0; /* El padding ahora lo gestionan los hijos */
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