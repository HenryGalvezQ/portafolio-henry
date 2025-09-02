<template>
  <div class="portfolio__card" @mouseleave="handleCardLeave" @mouseenter="handleCardEnter">
    
    <div v-if="project.tags && project.tags.length > 0" class="portfolio__tags">
      <span 
        v-for="tag in project.tags" 
        :key="tag" 
        class="portfolio__tag"
      >
        {{ tag }}
      </span>
    </div>
    
    <div 
      v-if="project.images && project.images.length > 0"
      class="portfolio__img-carousel"
      :class="{ 'carousel-hint-active': showCarouselHint }"
      @mouseenter="clearAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <div class="portfolio__img-track" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
        <div 
          v-for="(image, index) in project.images"
          :key="index"
          class="portfolio__img-container"
        >
          <img 
            :src="image" 
            :alt="project.title + ' project screenshot'"
            class="portfolio__img"
          >
        </div>
      </div>
      
      <div class="portfolio__tech-badges-container">
        <div 
          v-for="tech in project.techBadge"
          :key="tech"
          class="portfolio__tech-badge"
          @mouseenter="showTooltip($event, tech)"
          @mouseleave="hideTooltip"
        >
          <SvgIcon :name="tech" />
        </div>
      </div>
      
      <template v-if="project.images.length > 1">
        <i @click="prevImage" class="uil uil-angle-left-b portfolio-carousel__button portfolio-carousel__button--left"></i>
        <i @click="nextImage" class="uil uil-angle-right-b portfolio-carousel__button portfolio-carousel__button--right"></i>
        
        <div class="portfolio-carousel__pagination">
          <span 
            v-for="(_, index) in project.images"
            :key="index"
            class="portfolio-carousel__dot"
            :class="{ 'portfolio-carousel__dot--active': index === currentImageIndex }"
            @click="goToSlide(index)"
          >
          </span>
        </div>
      </template>
    </div>

    <div class="portfolio__data">
      <h3 class="portfolio__title">{{ project.title }}</h3>
      <p class="portfolio__description">{{ project.description }}</p>

      <div class="portfolio__cta">
        <i class="uil uil-rocket"></i>
        <span>¡Explora el proyecto!</span>
      </div>

      <PortfolioActionButtons
        :buttons="project.buttons"
        :hover-state="{ 
          'demo-hover': project.buttons.length === 4 && hoveredButton === 1,
          'presentation-hover': project.buttons.length === 4 && hoveredButton === 4
        }"
        @button-hover="handleButtonHover"
        @button-leave="handleButtonLeave"
      />
    </div>
    
    <div class="portfolio__expand-button">
      <span>Ver más</span>
      <i class="uil uil-arrow-down"></i>
    </div>

    <Teleport to="body">
      <div 
        v-show="tooltip.visible" 
        class="custom-tooltip" 
        :style="tooltip.style"
      >
        {{ tooltip.text }}
      </div>
    </Teleport>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';
import PortfolioActionButtons from './PortfolioActionButtons.vue'; // 1. Importar el componente hijo

export default {
  name: 'PortfolioCard',
  components: {
    SvgIcon,
    PortfolioActionButtons // 2. Registrar el componente hijo
  },
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      hoveredButton: null,
      lockHover: false,
      currentImageIndex: 0,
      autoSlideInterval: null,
      showCarouselHint: false,
      tooltip: {
        visible: false,
        text: '',
        style: {}
      }
    };
  },
  methods: {
    handleCardEnter() {
      if (this.project.images && this.project.images.length > 1) {
        this.showCarouselHint = true;
        setTimeout(() => {
          this.showCarouselHint = false;
        }, 1000);
      }
    },
    handleButtonHover(buttonId) {
      if (this.lockHover) return;
      // Ahora 'hoveredButton' guardará un número (1, 2, 3, o 4)
      this.hoveredButton = buttonId; 

      // Esta lógica de bloqueo es para el efecto especial.
      // La adaptamos para que se active con los botones 1 y 4
      // solo cuando hay 4 botones en total.
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
    handleCardLeave() {
      this.hoveredButton = null;
      this.lockHover = false;
      this.showCarouselHint = false;
    },
    startAutoSlide() {
      if (this.project.images.length <= 1) return;
      this.clearAutoSlide();
      this.autoSlideInterval = setInterval(this.nextImage, 7000);
    },
    clearAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.images.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.project.images.length) % this.project.images.length;
    },
    goToSlide(index) {
      this.currentImageIndex = index;
      this.startAutoSlide();
    },
    showTooltip(event, techName) {
      const badge = event.currentTarget;
      const rect = badge.getBoundingClientRect();

      const isZoomed = window.matchMedia('(min-width: 1600px)').matches;
      const zoomFactor = isZoomed ? 1.25 : 1;
      
      const top = (rect.top / zoomFactor) - 38;
      const left = (rect.left / zoomFactor) + (rect.width / zoomFactor / 2);

      this.tooltip.text = `Diseñado en ${techName.charAt(0).toUpperCase() + techName.slice(1)}`;
      this.tooltip.style = {
        top: `${top}px`,
        left: `${left}px`,
        opacity: 1,
      };
      this.tooltip.visible = true;
    },
    hideTooltip() {
      this.tooltip.style.opacity = 0;
      setTimeout(() => {
        if (this.tooltip) {
          this.tooltip.visible = false;
        }
      }, 200);
    },
    calculateTagSpacing() {
      if (!this.project.tags || this.project.tags.length <= 1) return;
      
      this.$nextTick(() => {
        const container = this.$el.querySelector('.portfolio__tags');
        if (!container) return;
        
        const tags = container.querySelectorAll('.portfolio__tag');
        if (tags.length <= 1) return;
        
        // Calcular ancho total de todas las tags
        let totalTagWidth = 0;
        tags.forEach(tag => {
          totalTagWidth += tag.offsetWidth;
        });
        
        // Calcular espacio disponible para gaps
        const containerWidth = container.offsetWidth;
        const availableSpace = containerWidth - totalTagWidth;
        const gap = Math.max(0.2 * 16, availableSpace / (tags.length - 1)); // Mínimo 0.2rem
        
        // Aplicar spacing usando justify-content y gap calculado
        container.style.gap = `${Math.min(gap, 0.6 * 16)}px`; // Máximo 0.6rem
      });
    }
  },
  mounted() {
    this.startAutoSlide();
    this.calculateTagSpacing(); // Agregar esta línea

  },
  updated() {
    this.calculateTagSpacing();
  },
  beforeUnmount() {
    this.clearAutoSlide();
  }
}
</script>

<style scoped>
/* ==================== PORTFOLIO TAGS ==================== */
.portfolio__tags {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0.875rem;
  /* El gap se establecerá dinámicamente */
}

.portfolio__tag {
  background-color: #777f8d;
  color: white;
  padding: 0.1875rem 0.375rem;
  border-radius: 0.75rem;
  font-size: 0.595rem;
  font-weight: 500;
  white-space: nowrap;
  line-height: 1.2;
}

/* ==================== PORTFOLIO CARD ==================== */
.portfolio__card {
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: .5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,.15);
  transition: transform 0.4s ease, box-shadow .3s, max-height 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  max-height: 530px; 
  overflow: hidden;
}
.portfolio__card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,.15);
  transform: scale(1.03);
  z-index: 5;
  max-height: 800px;
}
.portfolio__img {
  width: 100%;
  border-radius: .5rem;
  margin-bottom: var(--mb-1);
  flex-shrink: 0;
  object-fit: cover;
  height: auto;
  max-height: 200px;
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
.portfolio__description {
  margin-bottom: var(--mb-0-75);
  flex-grow: 1;
  max-height: 4.5em;
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

.portfolio__card:hover .portfolio__description {
  max-height: 200px;
}

.portfolio__card:hover .portfolio__description::after {
  opacity: 0;
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

.portfolio__card:hover .portfolio__cta {
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

/* ==================== BADGE DE TECNOLOGÍA ==================== */
.portfolio__tech-badges-container {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  gap: 0.5rem;
  z-index: 4;
}

.portfolio__tech-badge {
  width: 1.85rem;
  height: 1.85rem;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}

.portfolio__tech-badge svg {
  width: 1.125rem !important;
  height: 1.125rem !important;
  max-width: 1.125rem !important;
  max-height: 1.125rem !important;
  transition: transform 0.2s ease;
}

.portfolio__img-carousel:hover .portfolio__tech-badge svg {
  transform: scale(1.1);
}

.portfolio__tech-badge :deep(svg) {
  width: 1.125rem !important;
  height: 1.125rem !important;
  max-width: 1.125rem !important;
  max-height: 1.125rem !important;
}

/* ==================== TOOLTIP PERSONALIZADO ==================== */
.custom-tooltip {
  position: fixed;
  transform: translateX(-50%); 
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.custom-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
}

/* ==================== BOTÓN "VER MÁS" ==================== */
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
.portfolio__card:hover .portfolio__expand-button {
  opacity: 0;
  height: 0;
  padding-top: 0;
  overflow: hidden;
  border-top: none;
  transition: opacity 0.3s ease, height 0.3s ease, padding 0.3s ease;
}
.portfolio__expand-button i {
  transition: transform .3s;
}
.portfolio__card:hover .portfolio__expand-button i {
  transform: translateY(5px);
}

/* ==================== CARRUSEL ==================== */
.portfolio__img-carousel {
  position: relative;
  overflow: hidden;
  border-radius: .5rem;
  margin-bottom: var(--mb-0);
  cursor: pointer;
}

.portfolio__img-container {
  position: relative;
  flex-shrink: 0;
  width: 100%;
}

.portfolio__img-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.portfolio-carousel__button,
.portfolio-carousel__pagination {
  opacity: 0;
  transition: opacity 0.3s ease;
}
.portfolio__img-carousel:hover .portfolio-carousel__button,
.portfolio__img-carousel:hover .portfolio-carousel__pagination,
.portfolio__img-carousel.carousel-hint-active .portfolio-carousel__button,
.portfolio__img-carousel.carousel-hint-active .portfolio-carousel__pagination {
  opacity: 1;
}
.portfolio-carousel__button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  color: var(--title-color);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.portfolio-carousel__button:hover {
  background-color: var(--first-color);
  color: var(--container-color);
}
.portfolio-carousel__button--left {
  left: .5rem;
}
.portfolio-carousel__button--right {
  right: .5rem;
}
.portfolio-carousel__pagination {
  position: absolute;
  bottom: .5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  display: flex;
  gap: .5rem;
  background-color: rgba(0, 0, 0, 0.3);
  padding: .25rem .5rem;
  border-radius: 1rem;
}
.portfolio-carousel__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: background-color .3s;
}
.portfolio-carousel__dot:hover {
  background-color: white;
}
.portfolio-carousel__dot--active {
  background-color: var(--first-color);
}

/* Los estilos de los botones de acción se han movido a PortfolioActionButtons.vue */

@media screen and (min-width: 992px) {
  .portfolio__card {
    padding: 2rem 1.5rem;
  }
}
</style>