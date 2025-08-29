<template>
  <transition name="fade">
    <div v-if="show" class="qualification__modal" @click="closeModal">
      
      <div :class="['carousel-container', { 'carousel-container--vertical': isVertical }]" @click.stop>

        <i @click="closeModal" class="uil uil-times qualification__modal-close"></i>

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

      </div>
    </div>
  </transition>
</template>


<script setup>
import { ref, computed, watch, onUnmounted } from 'vue';

// --- Props y Emits ---
// Se simplifica: Ya no necesitamos el 'modalId'
const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  images: {
    type: Array,
    default: () => []
  },
  isVertical: { // <-- AÑADE ESTO
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

// --- Estado Interno ---
const currentImageIndex = ref(0);
let autoSlideInterval = null;

// --- Propiedades Computadas ---
const isCarousel = computed(() => props.images && props.images.length > 1);

// Ya no necesitamos 'isVerticalDocument', la nueva lógica CSS es universal.

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
    if (isCarousel.value) {
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
  background-color: rgba(0,0,0,.5);
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
.qualification__modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: var(--first-color);
  cursor: pointer;
  z-index: 15;
}

/* ==================== LÓGICA DE ESTILOS PARA IMÁGENES (LA CLAVE DE LA CORRECCIÓN) ==================== */

/* REGLA UNIVERSAL PARA TODAS LAS IMÁGENES */
/* Esta única regla se encarga de ajustar correctamente tanto imágenes horizontales como verticales. */
.qualification__modal-img {
  display: block;
  /* La imagen no puede ser más ancha que su contenedor. */
  max-width: 100%;
  /* La imagen no puede ser más alta que el 85% de la ventana. */
  max-height: 85vh;
  /* El ancho y alto se ajustan automáticamente para mantener la proporción. */
  width: auto;
  height: auto;
  /* Se centra la imagen si su 'width' es 'auto' (caso vertical en desktop) */
  margin: 0 auto;
}
/* NUEVA REGLA ESPECÍFICA para los certificados de Municipalidad/UNSA */
.qualification__modal-img.qualification__modal-img--vertical {
  /* En pantallas de escritorio, le damos un ancho fijo para que no se vea demasiado grande */
  width: 390px; 
}
/* NUEVO: El contenedor también reduce su ancho en desktop para imágenes verticales */
.carousel-container.carousel-container--vertical {
    max-width: 420px; /* Un poco más que la imagen para darle margen */
}

/* ==================== ESTILOS DEL CARRUSEL (AJUSTADOS) ==================== */
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

/* NUEVO: Contenedor de cada imagen en el carrusel */
.carousel__slide {
  /* Ocupa el 100% del ancho del 'wrapper' */
  width: 100%;
  /* No se encoge, fundamental para el cálculo del transform */
  flex-shrink: 0;
  /* Centra la imagen (que ahora tiene 'width: auto') en su interior */
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
    /* En móvil, usamos un porcentaje para que sea fluido y no un ancho fijo */
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