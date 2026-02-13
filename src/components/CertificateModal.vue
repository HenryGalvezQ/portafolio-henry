<template>
  <transition name="fade">
    <div v-if="show" class="qualification__modal" @click="closeModal">
      
      <div :class="['carousel-container', { 'carousel-container--vertical': isVertical }]" @click.stop>

        <i @click="closeModal" class="uil uil-times qualification__modal-close"></i>

        <!-- NUEVO: Mostrar testimonial si es Symmetry -->
        <div v-if="showSymmetryTestimonial" class="qualification__modal-content qualification__modal-content--testimonial">
          <SymmetryTestimonial />
        </div>

        <!-- EXISTENTE: Lógica normal de imágenes para otros modales -->
        <template v-else>
          <i v-if="isCarousel" @click.stop="prevImage" class="uil uil-angle-left-b carousel__button carousel__button--left"></i>

          <div class="qualification__modal-content">
            <div v-if="!isCarousel" class="carousel__wrapper">
              <img v-if="images.length > 0" 
                   :src="images[0]" 
                   alt="Certificado" 
                   class="qualification__modal-img">
            </div>
            
            <div v-else class="carousel">
              <div class="carousel__wrapper">
                <div class="carousel__track" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
                  <div v-for="(image, index) in images" :key="index" class="carousel__slide">
                    <img :src="image" 
                         :alt="`Certificado ${index + 1}`" 
                         class="qualification__modal-img">
                  </div>
                </div>
              </div>
              <div class="carousel__pagination">
                <span 
                  v-for="(_, index) in images" 
                  :key="index" 
                  class="carousel__dot" 
                  :class="{ 'carousel__dot--active': index === currentImageIndex }" 
                  @click.stop="goToSlide(index)"
                ></span>
              </div>
            </div>
          </div>

          <i v-if="isCarousel" @click.stop="nextImage" class="uil uil-angle-right-b carousel__button carousel__button--right"></i>
        </template>

      </div>
    </div>
  </transition>
</template>


<script setup>
import { ref, computed, watch, onUnmounted } from 'vue';
import SymmetryTestimonial from './SymmetryTestimonial.vue';

// --- Props y Emits ---
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  images: {
    type: Array,
    default: () => []
  },
  isVertical: {
    type: Boolean,
    default: false
  },
  modalId: { // NUEVO: Para detectar si es Symmetry
    type: String,
    default: null
  }
});

const emit = defineEmits(['close']);

// --- Estado Interno ---
const currentImageIndex = ref(0);
let autoSlideInterval = null;

// --- Propiedades Computadas ---
const isCarousel = computed(() => props.images && props.images.length > 1);

// NUEVO: Detectar si debe mostrar el testimonial de Symmetry
const showSymmetryTestimonial = computed(() => props.modalId === 'symmetry');

// --- Métodos (sin cambios) ---
const clearAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;
  }
};
const autoSlide = () => {
  if (props.images.length === 0) return;
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length;
};
const startAutoSlide = () => {
  clearAutoSlide();
  autoSlideInterval = setInterval(autoSlide, 7000);
};
const nextImage = () => {
  clearAutoSlide();
  autoSlide();
  startAutoSlide();
};
const prevImage = () => {
  clearAutoSlide();
  if (props.images.length === 0) return;
  currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length;
  startAutoSlide();
};
const goToSlide = (index) => {
  clearAutoSlide();
  currentImageIndex.value = index;
  startAutoSlide();
};
const closeModal = () => {
  emit('close');
};

// --- Hooks del Ciclo de Vida (sin cambios) ---
watch(() => props.show, (isNowVisible) => {
  if (isNowVisible) {
    currentImageIndex.value = 0;
    if (isCarousel.value && !showSymmetryTestimonial.value) { // MODIFICADO: No autoplay para testimonial
      startAutoSlide();
    }
  } else {
    clearAutoSlide();
  }
});

onUnmounted(() => {
  clearAutoSlide(); 
});
</script>

<style scoped>
/* ==================== TRANSICIÓN DE FUNDIDO ==================== */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* ==================== ESTILOS DEL MODAL ==================== */
.qualification__modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.65);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  z-index: var(--z-modal);
}
.carousel-container {
  position: relative;
  max-width: 850px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.qualification__modal-content {
  position: relative;
  background-color: var(--container-color);
  padding: 1rem;
  border-radius: .5rem;
  width: 100%;
}

/* NUEVO: Estilo especial para el modal de testimonial */
.qualification__modal-content--testimonial {
  padding: 0;
  background-color: transparent;
  max-width: 650px;
}

.qualification__modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: var(--first-color);
  cursor: pointer;
  z-index: 15;
}

/* ==================== LÓGICA DE ESTILOS PARA IMÁGENES ==================== */
.qualification__modal-img {
  display: block;
  max-width: 100%;
  max-height: 85vh;
  width: auto;
  height: auto;
  margin: 0 auto;
}
.qualification__modal-img.qualification__modal-img--vertical {
  width: 390px; 
}
.carousel-container.carousel-container--vertical {
    max-width: 420px;
}

/* ==================== ESTILOS DEL CARRUSEL ==================== */
.carousel__button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2.5rem;
  color: var(--first-color);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  padding: 0.3rem;
  width: 1.6em;
  height: 1.6em;
  cursor: pointer;
  transition: background-color .3s, color .3s;
  z-index: 15;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box; 
}
.carousel__button:hover {
  background-color: var(--first-color);
  color: var(--container-color);
}
.carousel__button--left {
  left: -8rem; 
}
.carousel__button--right {
  right: -8rem;
}
.carousel__button .uil {
  line-height: 1; 
}
.carousel__wrapper {
  overflow: hidden;
  border-radius: .5rem;
  width: 100%;
}
.carousel {
  position: relative; 
  width: 100%;
}
.carousel__track {
  display: flex;
  transition: transform 0.5s ease-in-out;
}
.carousel__slide {
  width: 100%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel__pagination {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -0.78rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}
.carousel__dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color .3s;
}
.carousel__dot--active {
  background-color: var(--first-color);
}

/* ==================== MEDIA QUERIES ==================== */
@media screen and (max-width: 568px) {
  .qualification__modal-img.qualification__modal-img--vertical {
    width: 85%;
  }
}

@media screen and (max-width: 1024px) { 
  .carousel__button--left {
    left: 1rem;
  }
  .carousel__button--right {
    right: 1rem;
  }
}
@media screen and (max-width: 350px) {
  .carousel__button {
    font-size: 2rem; 
    padding: 0.25rem; 
    width: 1.4em; 
    height: 1.4em; 
  }
  .carousel__button--left {
    left: 0.5rem;
  }
  .carousel__button--right {
    right: 0.5rem;
  }
}
</style>