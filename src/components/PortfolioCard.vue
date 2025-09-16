<template>
  <div 
    class="portfolio-card__content" 
    :class="{ 
      'is-expanded-mode': isExpanded,
      'parent-is-hovered': isHovered && !isExpanded
    }"
  >
    
    <PortfolioTags :tags="project.tags" />
    
    <PortfolioImageCarousel
      ref="carousel"
      :images="project.images"
      :alt="project.title"
      :tech-badges="project.techBadge"
      :is-expanded="isExpanded"
      @carousel-hint-shown="handleCarouselHintShown"
    />

    <div class="portfolio__data">
      <h3 class="portfolio__title">{{ project.title }}</h3>
      <div class="portfolio__description-container">
        <p class="portfolio__description">
          {{ project.description }}
          
          <button 
            v-if="project.expandedDescription"
            @click="$emit('toggle-expand')"
            class="portfolio__read-more"
          >
            {{ isExpanded ? 'Leer menos' : 'Leer más' }}
          </button>
        </p>
      </div>

      <div class="portfolio__cta" :class="{ 'portfolio__cta--visible': isExpanded }">
        <i class="uil uil-rocket"></i>
        <span>Explora el proyecto aquí <i class="uil uil-arrow-down"></i></span> 
      </div>

      <PortfolioActionButtons
        :buttons="project.buttons"
        :hover-state="{ 
          'demo-hover': project.buttons.length === 4 && hoveredButton === 1,
          'presentation-hover': project.buttons.length === 4 && hoveredButton === 4
        }"
        :class="{ 'is-visible': (isHovered && !isExpanded) || isExpanded,'is-expanded-mode': isExpanded }"
        @button-hover="handleButtonHover"
        @button-leave="handleButtonLeave"
      />
    </div>
    
    <div 
      v-if="!isExpanded"
      class="portfolio__expand-button"
    >
      <span>Ver más</span>
      <i class="uil uil-arrow-down"></i>
    </div>
  </div>
</template>

<script>
import PortfolioTags from './PortfolioTags.vue';
import PortfolioImageCarousel from './PortfolioImageCarousel.vue';
import PortfolioActionButtons from './PortfolioActionButtons.vue';

export default {
  name: 'PortfolioCard',
  components: {
    PortfolioTags,
    PortfolioImageCarousel,
    PortfolioActionButtons
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    isExpanded: {
      type: Boolean,
      default: false
    },
    // CAMBIO: Nueva prop para recibir el estado hover del padre
    isHovered: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-expand'],
  data() {
    return {
      hoveredButton: null,
      lockHover: false,
      showCarouselHint: false
    };
  },
  methods: {
    // CAMBIO: Eliminados handleCardEnter y handleCardLeave. La lógica se mueve al watcher.
    handleCarouselHintShown() {
      this.showCarouselHint = true;
      setTimeout(() => {
        this.showCarouselHint = false;
      }, 1000);
    },
    handleButtonHover(buttonId) {
      if (this.lockHover) return;
      this.hoveredButton = buttonId; 

      if (this.project.buttons.length === 4 && (buttonId === 1 || buttonId === 4)) {
        this.lockHover = true;
        setTimeout(() => {
          this.lockHover = false;
        }, 350);
      }
    },
    handleButtonLeave() {
      if (this.lockHover) return;
      this.hoveredButton = null;
    },
  },
  watch: {
    isExpanded(newVal) {
      if (!newVal) {
        this.hoveredButton = null;
        this.lockHover = false;
      }
    },
    // CAMBIO: Observamos la prop `isHovered` para manejar la lógica interna
    isHovered(newVal) {
      if (newVal) {
        if (this.$refs.carousel) {
          this.$refs.carousel.showCarouselHintOnHover();
        }
      } else {
        this.hoveredButton = null;
        this.lockHover = false;
        this.showCarouselHint = false;
      }
    }
  }
}
</script>

<style scoped>
/* CAMBIO: Esta clase ya no es una "card", es solo un contenedor de contenido. */
.portfolio-card__content {
  display: flex;
  flex-direction: column;
  flex: 1;

  transition: transform 0.4s ease;
}

/* CAMBIO: En modo expandido, sí aplicamos padding y el borde redondeado específico */
.portfolio-card__content.is-expanded-mode {
  z-index: 5;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: var(--container-color);
  padding: 1.5rem;
}

@media screen and (min-width: 992px) {
  .portfolio-card__content.is-expanded-mode {
    padding: 1.6rem;
  }
}

.portfolio__data {
  padding: 0 .5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: hidden;
}

.portfolio__title {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
}

.portfolio__description-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.portfolio__description {
  margin-bottom: var(--mb-0-72);
  flex-grow: 1;
  max-height: 4.3em;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  position: relative;
}

.portfolio__description::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.5em;
  background: linear-gradient(transparent, var(--container-color));
  pointer-events: none;
  transition: opacity 0.4s ease-in-out;
}

/* CAMBIO: El selector ahora usa la clase del estado hover del padre */
.parent-is-hovered .portfolio__description {
  max-height: 200px;
}

.parent-is-hovered .portfolio__description::after {
  opacity: 0;
}

.is-expanded-mode .portfolio__description {
  max-height: none;
}

.is-expanded-mode .portfolio__description::after {
  display: none;
}

.portfolio__read-more {
  background: none;
  border: none;
  color: #8b5cf6;
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
  padding: 0;
  align-self: flex-start;
  transition: color 0.3s ease;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.portfolio__read-more:hover {
  color: #7c3aed;
}

.portfolio__cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8b5cf6;
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  margin: var(--mb-0-5) 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  height: 0;
  overflow: hidden;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0s 0.4s, height 0.4s ease;
}

/* CAMBIO: El selector ahora usa la clase del estado hover del padre */
.parent-is-hovered .portfolio__cta,
.portfolio__cta--visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  height: auto;
  transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s, visibility 0s 0.1s, height 0.4s ease 0.1s;
}

.portfolio__cta i {
  font-size: 1rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

/* BOTÓN "VER MÁS" */
.portfolio__expand-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  width: 100%;
  padding: 1rem;
  margin-top: auto;
  border-top: 1px solid var(--border-color);
  color: white;
  background-color: #8b5cf6;
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
  border-radius: .5rem;
  transition: opacity 0.3s ease, height 0.3s ease, padding 0.3s ease;
  height: 40px;
}

.portfolio__expand-button:hover {
  background-color: #7c3aed;
}

/* CAMBIO: El selector ahora usa la clase del estado hover del padre */
.parent-is-hovered .portfolio__expand-button {
  opacity: 0;
  height: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  border-top: none;
  transition: opacity 0.3s ease, height 0.3s ease, padding 0.3s ease;
}

.portfolio__expand-button i {
  transition: transform .3s;
}

/* CAMBIO: El selector ahora usa la clase del estado hover del padre */
.parent-is-hovered .portfolio__expand-button i {
  transform: translateY(5px);
}

.is-expanded-mode .portfolio__description-container {
  flex-grow: 0;
}
</style>