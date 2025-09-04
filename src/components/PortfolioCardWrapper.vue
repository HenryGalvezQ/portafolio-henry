<template>
  <div 
    class="portfolio-wrapper" 
    :class="{ 
      'portfolio-wrapper--expanded': isExpanded,
      'portfolio-wrapper--animating': isAnimating 
    }"
  >
    <PortfolioCard 
      :project="project"
      :is-expanded="isExpanded"
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
      isAnimating: false
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
    },
    onEnter() {
      this.isAnimating = true;
    },
    onLeave() {
      this.isAnimating = false;
    }
  }
}
</script>

<style scoped>
.portfolio-wrapper {
  display: flex;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
}

.portfolio-wrapper--expanded {
  grid-column: 1 / -1; /* Ocupa toda la fila */
  z-index: 10;
  background-color: var(--container-color);
  border-radius: 0.5rem;
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  margin: 0 -1rem;
  padding: 0 1rem;
}

.portfolio-wrapper--animating {
  overflow: visible;
}

/* Transición para la descripción expandida */
.expand-description-enter-active,
.expand-description-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.expand-description-enter-from {
  opacity: 0;
  transform: translateX(30px);
  width: 0;
}

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
  .portfolio-wrapper--expanded {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  
  .expand-description-enter-from,
  .expand-description-leave-to {
    transform: translateY(20px);
  }
}

@media screen and (min-width: 992px) {
  .portfolio-wrapper--expanded {
    margin: 0 -2rem;
    padding: 0 2rem;
  }
}
</style>