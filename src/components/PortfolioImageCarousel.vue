// PortfolioImageCarousel.vue

<template>
  <div 
    v-if="images && images.length > 0"
    class="portfolio__img-carousel"
    :class="{ 'carousel-hint-active': showCarouselHint }"
    @mouseenter="clearAutoSlide"
    @mouseleave="startAutoSlide"
    @touchstart.passive="onTouchStart"
    @touchmove.passive="onTouchMove"
    @touchend="onTouchEnd"
  >
    <div class="portfolio__img-track" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
      <div 
        v-for="(image, index) in images"
        :key="index"
        class="portfolio__img-container"
        @click="$emit('open-modal')"
      >
        <img 
          :src="image" 
          :alt="alt + ' ' + t('imgAlt')"
          class="portfolio__img"
          style="cursor: zoom-in;"
        >
      </div>
    </div>
    
    <PortfolioTechBadges :tech-badges="techBadges" />
    
    <template v-if="images.length > 1">
      <UilIcon name="angle-left-b" class="portfolio-carousel__button portfolio-carousel__button--left" @click="prevImage" />
      <UilIcon name="angle-right-b" class="portfolio-carousel__button portfolio-carousel__button--right" @click="nextImage" />

      
      <div class="portfolio-carousel__pagination">
        <span 
          v-for="(_, index) in images"
          :key="index"
          class="portfolio-carousel__dot"
          :class="{ 'portfolio-carousel__dot--active': index === currentImageIndex }"
          @click="goToSlide(index)"
        >
        </span>
      </div>
    </template>
  </div>
</template>

<script>
import UilIcon from '@/components/UilIcon.vue'
import PortfolioTechBadges from './PortfolioTechBadges.vue';
import { useI18n } from 'vue-i18n';

export default {
  name: 'PortfolioImageCarousel',
  setup() {
    const { t } = useI18n({ inheritLocale: true, useScope: 'local' })
    return { t }
  },
  components: {
    PortfolioTechBadges,
    UilIcon,
  },
  props: {
    images: {
      type: Array,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    techBadges: {
      type: Array,
      default: () => []
    },
    isExpanded: {
      type: Boolean,
      default: false
    },
    enableAutoSlide: {
      type: Boolean,
      default: true
    },
    slideInterval: {
      type: Number,
      default: 7000
    },
    showHintOnHover: {
      type: Boolean,
      default: true
    }
  },
  emits: ['carousel-hint-shown','open-modal'],
  data() {
    return {
      currentImageIndex: 0,
      autoSlideInterval: null,
      showCarouselHint: false,
      // Touch swipe state
      touchStartX: 0,
      touchStartY: 0,
      touchDeltaX: 0,
      isSwiping: false
    };
  },
  methods: {
    // ==================== SWIPE (touch) ====================
    onTouchStart(e) {
      const touch = e.touches[0];
      this.touchStartX = touch.clientX;
      this.touchStartY = touch.clientY;
      this.touchDeltaX = 0;
      this.isSwiping = false;
      this.clearAutoSlide();
    },
    onTouchMove(e) {
      if (!e.touches.length) return;
      const touch = e.touches[0];
      this.touchDeltaX = touch.clientX - this.touchStartX;
      const deltaY = touch.clientY - this.touchStartY;

      // Solo marcamos como swipe horizontal si el movimiento X es dominante
      if (Math.abs(this.touchDeltaX) > Math.abs(deltaY)) {
        this.isSwiping = true;
      }
    },
    onTouchEnd() {
      const SWIPE_THRESHOLD = 50; // px mínimos para considerar swipe

      if (this.isSwiping && this.images.length > 1) {
        if (this.touchDeltaX < -SWIPE_THRESHOLD) {
          // Swipe izquierda → siguiente imagen
          this.nextImage();
        } else if (this.touchDeltaX > SWIPE_THRESHOLD) {
          // Swipe derecha → imagen anterior
          this.prevImage();
        }
      }

      this.touchStartX = 0;
      this.touchStartY = 0;
      this.touchDeltaX = 0;
      this.isSwiping = false;
      this.startAutoSlide();
    },
    // ==================== CAROUSEL ====================
    showCarouselHintOnHover() {
      if (this.images && this.images.length > 1 && !this.isExpanded && this.showHintOnHover) {
        this.showCarouselHint = true;
        this.$emit('carousel-hint-shown');
        setTimeout(() => {
          this.showCarouselHint = false;
        }, 1000);
      }
    },
    startAutoSlide() {
      if (!this.enableAutoSlide || this.images.length <= 1 || this.isExpanded) return;
      this.clearAutoSlide();
      this.autoSlideInterval = setInterval(this.nextImage, this.slideInterval);
    },
    clearAutoSlide() {
      if (this.autoSlideInterval) {
        clearInterval(this.autoSlideInterval);
        this.autoSlideInterval = null;
      }
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
    },
    goToSlide(index) {
      this.currentImageIndex = index;
      this.startAutoSlide();
    },
    resetCarousel() {
      this.currentImageIndex = 0;
      this.showCarouselHint = false;
    }
  },
  watch: {
    isExpanded(newVal) {
      if (newVal) {
        this.clearAutoSlide();
      } else {
        this.startAutoSlide();
      }
    },
    images() {
      this.resetCarousel();
    }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.clearAutoSlide();
  },
  expose: ['showCarouselHintOnHover', 'resetCarousel']
}
</script>

<style scoped>
/* ==================== CARRUSEL ==================== */
.portfolio__img-carousel {
  position: relative;
  overflow: hidden;
  border-radius: .5rem;
  margin-bottom: var(--mb-0);
  cursor: pointer;
  /* Mejora rendimiento de gestos táctiles */
  touch-action: pan-y;
}

.portfolio__img-carousel:hover {
  z-index: 5;
}

.portfolio__img {
  width: 100%;
  border-radius: .5rem;
  margin-bottom: var(--mb-1);
  flex-shrink: 0;
  object-fit: cover;
  height: auto;
  max-height: 200px;
  box-shadow: 0 2px 4px rgba(0,0,0,.15);
  transition: transform 0.4s ease;
  /* Evita que arrastrar la imagen interfiera con el swipe */
  -webkit-user-drag: none;
  user-select: none;
}

/* AÑADIDO: El efecto de hover ahora se aplica a la imagen directamente */
.portfolio__img-carousel:hover .portfolio__img {
  transform: scale(1.03);
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

/* En móvil, mostrar siempre la paginación para indicar que es deslizable */
@media (max-width: 768px) {
  .portfolio-carousel__pagination {
    opacity: 1;
  }
}

.portfolio-carousel__button {
  position: absolute;
  top: calc(50% - 12px);
  transform: translateY(-50%);
  z-index: 2;
  color: var(--title-color);
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
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
</style>

<i18n lang="json">
{
  "es": {
    "imgAlt": "captura de pantalla del proyecto"
  },
  "en": {
    "imgAlt": "project screenshot"
  }
}
</i18n>