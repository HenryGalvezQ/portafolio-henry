<template>
  <div 
    v-if="images && images.length > 0"
    class="portfolio__img-carousel"
    :class="{ 'carousel-hint-active': showCarouselHint }"
    @mouseenter="clearAutoSlide"
    @mouseleave="startAutoSlide"
  >
    <div class="portfolio__img-track" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
      <div 
        v-for="(image, index) in images"
        :key="index"
        class="portfolio__img-container"
      >
        <img 
          :src="image" 
          :alt="alt + ' project screenshot'"
          class="portfolio__img"
        >
      </div>
    </div>
    
    <PortfolioTechBadges :tech-badges="techBadges" />
    
    <template v-if="images.length > 1">
      <i @click="prevImage" class="uil uil-angle-left-b portfolio-carousel__button portfolio-carousel__button--left"></i>
      <i @click="nextImage" class="uil uil-angle-right-b portfolio-carousel__button portfolio-carousel__button--right"></i>
      
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
import PortfolioTechBadges from './PortfolioTechBadges.vue';

export default {
  name: 'PortfolioImageCarousel',
  components: {
    PortfolioTechBadges
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
  emits: ['carousel-hint-shown'],
  data() {
    return {
      currentImageIndex: 0,
      autoSlideInterval: null,
      showCarouselHint: false
    };
  },
  methods: {
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
</style>