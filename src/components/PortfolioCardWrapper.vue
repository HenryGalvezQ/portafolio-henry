// PortfolioCardWrapper.vue
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
      @resize="handleCardResize"
    />
    <Transition 
      name="expand-description"
      @enter="onEnter"
      @leave="onLeave"
    >
      <PortfolioExpandedDescription 
        v-if="isExpanded"
        :project="project"
        :wrapper-height="cardHeight"
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
      isHovered: false,
      cardHeight: null,
      measureTimeout: null,
    };
  },
  computed: {
    expandedCardStyle() {
      if (this.isExpanded && this.cardHeight) {
        return { 'max-height': `${this.cardHeight}px` };
      }
      return {};
    }
  },
  methods: {
    handleCardResize(height) {
      this.cardHeight = height;
    },
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
      this.isHovered = false;
    },
    onEnter() {
      this.isAnimating = true;
    },
    onLeave() {
      setTimeout(() => {
        this.isAnimating = false;
      }, 500);
    },
    handleMouseEnter(event) {
      if (this.measureTimeout) clearTimeout(this.measureTimeout);
      if (!this.isExpanded) {
        this.isHovered = true;
        this.measureTimeout = setTimeout(() => {
          if (this.$el) {
            this.cardHeight = this.$el.scrollHeight;
          }
        }, 500);
      }
    },
    handleMouseLeave() {
      if (this.measureTimeout) clearTimeout(this.measureTimeout);
      this.isHovered = false;
    }
  }
}
</script>

<style scoped>
/* La clase base ahora define la apariencia de la card */
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
/* Estilos de hover que antes estaban en el hijo */
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