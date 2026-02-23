// CertificateModal.vue

<template>
  <transition name="fade">
    <div v-if="show" class="qualification__modal" @click="closeModal">
      
      <div :class="['carousel-container', { 'carousel-container--vertical': isVertical }]" @click.stop
        @touchstart.passive="onTouchStart"
        @touchmove.passive="onTouchMove"
        @touchend="onTouchEnd"
      >

        <UilIcon name="times" class="qualification__modal-close" @click="closeModal" />

        <!-- NUEVO: Mostrar testimonial si es Symmetry -->
        <div v-if="showSymmetryTestimonial" class="qualification__modal-content qualification__modal-content--testimonial">
          <SymmetryTestimonial />
        </div>

        <!-- EXISTENTE: Lógica normal de imágenes para otros modales -->
        <template v-else>
          <UilIcon v-if="isCarousel" name="angle-left-b" class="carousel__button carousel__button--left" @click.stop="prevImage" />

          <div class="qualification__modal-content">
            <div v-if="!isCarousel" class="carousel__wrapper">
              <img v-if="images.length > 0" 
                   :src="images[0]" 
                   :alt="t('certAlt')" 
                   class="qualification__modal-img">
            </div>
            
            <div v-else class="carousel">
              <div class="carousel__wrapper">
                <div class="carousel__track" :style="{ transform: `translateX(-${currentImageIndex * 100}%)` }">
                  <div v-for="(image, index) in images" :key="index" class="carousel__slide">
                    <img :src="image" 
                         :alt="`${t('certAlt')} ${index + 1}`" 
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

          <UilIcon v-if="isCarousel" name="angle-right-b" class="carousel__button carousel__button--right" @click.stop="nextImage" />
        </template>

      </div>
    </div>
  </transition>
</template>


<script setup>
import UilIcon from '@/components/UilIcon.vue'
import { ref, computed, watch, onUnmounted } from 'vue';
import SymmetryTestimonial from './SymmetryTestimonial.vue';

import { useI18n } from 'vue-i18n';
const { t } = useI18n({ inheritLocale: true, useScope: 'local' });

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

// Touch swipe state
const touchStartX = ref(0);
const touchStartY = ref(0);
const touchDeltaX = ref(0);
const isSwiping = ref(false);
const SWIPE_THRESHOLD = 50; // px mínimos para considerar swipe

// --- Propiedades Computadas ---
const isCarousel = computed(() => props.images && props.images.length > 1);

// NUEVO: Detectar si debe mostrar el testimonial de Symmetry
const showSymmetryTestimonial = computed(() => props.modalId === 'symmetry');

// --- Touch / Swipe ---
const onTouchStart = (e) => {
  const touch = e.touches[0];
  touchStartX.value = touch.clientX;
  touchStartY.value = touch.clientY;
  touchDeltaX.value = 0;
  isSwiping.value = false;
  clearAutoSlide();
};

const onTouchMove = (e) => {
  if (!e.touches.length) return;
  const touch = e.touches[0];
  touchDeltaX.value = touch.clientX - touchStartX.value;
  const deltaY = touch.clientY - touchStartY.value;

  // Solo marcamos como swipe horizontal si el movimiento X es dominante
  if (Math.abs(touchDeltaX.value) > Math.abs(deltaY)) {
    isSwiping.value = true;
  }
};

const onTouchEnd = () => {
  if (isSwiping.value && isCarousel.value && !showSymmetryTestimonial.value) {
    if (touchDeltaX.value < -SWIPE_THRESHOLD) {
      // Swipe izquierda → siguiente imagen
      autoSlide();
    } else if (touchDeltaX.value > SWIPE_THRESHOLD) {
      // Swipe derecha → imagen anterior
      prevImage();
    }
  }

  touchStartX.value = 0;
  touchStartY.value = 0;
  touchDeltaX.value = 0;
  isSwiping.value = false;
  startAutoSlide();
};

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
    document.body.style.overflow = 'hidden';
    currentImageIndex.value = 0;
    if (isCarousel.value && !showSymmetryTestimonial.value) { // MODIFICADO: No autoplay para testimonial
      startAutoSlide();
    }
  } else {
    document.body.style.overflow = '';
    clearAutoSlide();
  }
});

onUnmounted(() => {
  document.body.style.overflow = '';
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
  background-color: rgba(0,0,0,.67);
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
  /* Mejora rendimiento de gestos táctiles */
  touch-action: pan-y;
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

/* ==================== BOTÓN CERRAR ==================== */
.qualification__modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.4rem;
  height: 2.4rem;
  color: var(--first-color);
  cursor: pointer;
  z-index: 15;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  box-sizing: border-box;
  padding: 0.45rem;
  transition: background-color .3s, color .3s;
}

.qualification__modal-close:hover {
  background-color: var(--first-color);
  color: #ffffff;
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
  width: 4rem;
  height: 4rem;
  color: var(--first-color);
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  padding: 0.75rem;
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
  color: #ffffff;
}
.carousel__button--left {
  left: -8rem; 
}
.carousel__button--right {
  right: -8rem;
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

/* ==================== MODO OSCURO ==================== */
/* Se usa un selector con alta especificidad anclado a .qualification__modal
   para evitar que afecte otros componentes. No se puede lograr con scoped
   porque Vue no permite combinar body.dark-theme (selector externo) con
   clases scoped del mismo componente. */

/* ==================== MEDIA QUERIES ==================== */
@media screen and (max-width: 568px) {
  .qualification__modal-img.qualification__modal-img--vertical {
    width: 85%;
  }
}

/* ==================== MOBILE: Botones de navegación más compactos que desktop
   pero todavía usables. Se usan px fijos para el círculo para garantizar
   un tamaño mínimo cómodo al tacto. ==================== */
@media screen and (max-width: 767px) {
  .carousel__button {
    width: 2.4rem;
    height: 2.4rem;
    padding: 0.3rem;
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
    width: 2rem;
    height: 2rem;
    padding: 0.2rem;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "certAlt": "Certificado"
  },
  "en": {
    "certAlt": "Certificate"
  }
}
</i18n>