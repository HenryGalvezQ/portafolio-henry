<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">Portfolio</h2>
    <span class="section__subtitle">Trabajos más recientes</span>

    <div class="portfolio__container container grid">

      <div class="portfolio__card portfolio__card--first" @mouseleave="handleCardLeave">
        
        <div class="portfolio__img-carousel" 
             @mouseenter="clearProject1AutoSlide" 
             @mouseleave="startProject1AutoSlide">
             
          <div class="portfolio__img-track" :style="{ transform: `translateX(-${currentProject1ImageIndex * 100}%)` }">
            <img v-for="image in project1Images" 
                 :key="image" 
                 :src="image" 
                 alt="Sigepro project screenshot" 
                 class="portfolio__img">
          </div>
          
          <i @click="prevProject1Image" class="uil uil-angle-left-b portfolio-carousel__button portfolio-carousel__button--left"></i>
          <i @click="nextProject1Image" class="uil uil-angle-right-b portfolio-carousel__button portfolio-carousel__button--right"></i>
          
          <div class="portfolio-carousel__pagination">
            <span v-for="(_, index) in project1Images" 
                  :key="index"
                  class="portfolio-carousel__dot"
                  :class="{ 'portfolio-carousel__dot--active': index === currentProject1ImageIndex }"
                  @click="goToProject1Slide(index)">
            </span>
          </div>
        </div>
        <div class="portfolio__data">
          <h3 class="portfolio__title">Sigepro</h3>
          <p class="portfolio__description">Sitio web diseñado en Figma y desarrollado en Vue 3.</p>
          <div class="portfolio__buttons" :class="{ 
            'demo-hover': hoveredButton === 'demo',
            'presentation-hover': hoveredButton === 'presentation'
          }">
            <a href="http://67.205.133.92/app/" target="_blank" rel="noopener noreferrer" 
               class="button button--flex button--small portfolio__button portfolio__button--animated"
               @mouseenter="handleButtonHover('demo')" 
               @mouseleave="handleButtonLeave">
                <i class="uil uil-dribbble button__icon"></i> 
                <span class="button__text">Demo</span>
                <i class="uil uil-arrow-right button__icon button__arrow"></i>
            </a>
            <a href="https://www.figma.com/design/6yVeJjKkAnVy7yTG1shhTq/Prototipado-SIGEPRO?node-id=1292-511&p=f&t=QlJ8irZ9W3I0wwd6-0" target="_blank" rel="noopener noreferrer" 
               class="button button--flex button--small portfolio__button button--figma portfolio__button--animated"
               @mouseenter="handleButtonHover('figma')" 
               @mouseleave="handleButtonLeave">
                <SvgIcon name="figma" />
                <span class="button__text">Diseño</span>
                <i class="uil uil-arrow-right button__icon button__arrow"></i>
            </a>
            <a href="https://gitlab.com/pisw2025-proyectos-investigacion/sigepro-frontend" target="_blank" rel="noopener noreferrer" 
               class="button button--flex button--small portfolio__button button--github portfolio__button--animated"
               @mouseenter="handleButtonHover('github')" 
               @mouseleave="handleButtonLeave">
                <SvgIcon name="github" />
                <span class="button__text">Código</span>
                <i class="uil uil-arrow-right button__icon button__arrow"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" 
               class="button button--flex button--small portfolio__button button--presentation portfolio__button--animated"
               @mouseenter="handleButtonHover('presentation')" 
               @mouseleave="handleButtonLeave">
                <i class="uil uil-presentation-play button__icon"></i>
                <span class="button__text">Slides</span>
                <i class="uil uil-arrow-right button__icon button__arrow"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="portfolio__card">
        <img src="@/assets/img/portfolio2.jpg" alt="portfolio image 2" class="portfolio__img">
        <div class="portfolio__data">
          <h3 class="portfolio__title">Diseño de Marca</h3>
          <p class="portfolio__description">Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.</p>
          <a href="#" class="button button--flex button--small portfolio__button">
            Demo
            <i class="uil uil-arrow-right button__icon"></i>
          </a>
        </div>
      </div>

      <div class="portfolio__card">
        <img src="@/assets/img/portfolio3.jpg" alt="portfolio image 3" class="portfolio__img">
        <div class="portfolio__data">
          <h3 class="portfolio__title">Tienda Online</h3>
          <p class="portfolio__description">Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.</p>
          <a href="#" class="button button--flex button--small portfolio__button">
            Demo
            <i class="uil uil-arrow-right button__icon"></i>
          </a>
        </div>
      </div>

      <div class="portfolio__card">
        <img src="@/assets/img/portfolio1.jpg" alt="portfolio image 4" class="portfolio__img">
        <div class="portfolio__data">
          <h3 class="portfolio__title">App de E-commerce</h3>
          <p class="portfolio__description">Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.</p>
          <a href="#" class="button button--flex button--small portfolio__button">
            Demo
            <i class="uil uil-arrow-right button__icon"></i>
          </a>
        </div>
      </div>

      <div class="portfolio__card">
        <img src="@/assets/img/portfolio2.jpg" alt="portfolio image 5" class="portfolio__img">
        <div class="portfolio__data">
          <h3 class="portfolio__title">Proyecto 5</h3>
          <p class="portfolio__description">Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.</p>
          <a href="#" class="button button--flex button--small portfolio__button">
            Demo
            <i class="uil uil-arrow-right button__icon"></i>
          </a>
        </div>
      </div>

      <div class="portfolio__card">
        <img src="@/assets/img/portfolio3.jpg" alt="portfolio image 6" class="portfolio__img">
        <div class="portfolio__data">
          <h3 class="portfolio__title">Proyecto 6</h3>
          <p class="portfolio__description">Sitio web adaptable a todos los dispositivos, con componentes de UI e interacciones animadas.</p>
          <a href="#" class="button button--flex button--small portfolio__button">
            Demo
            <i class="uil uil-arrow-right button__icon"></i>
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

// --- IMPORTAR LAS IMÁGENES DEL CARRUSEL ---
import portfolio1_1 from '@/assets/img/portafolio/portfolio1_1.jpg';
import portfolio1_2 from '@/assets/img/portafolio/portfolio1_2.jpg';
import portfolio1_3 from '@/assets/img/portafolio/portfolio1_3.jpg';

export default {
  name: 'Portfolio',
  components: {
    SvgIcon
  },
  data() {
    return {
      hoveredButton: null,
      lockHover: false,
      // --- DATOS PARA EL CARRUSEL DEL PROYECTO 1 ---
      project1Images: [portfolio1_1, portfolio1_2, portfolio1_3],
      currentProject1ImageIndex: 0,
      project1Interval: null,
    };
  },
  methods: {
    handleButtonHover(buttonType) {
      if (this.lockHover) return;
      this.hoveredButton = buttonType;

      if (buttonType === 'presentation' || buttonType === 'demo') {
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
    },
    // --- MÉTODOS PARA EL CARRUSEL DEL PROYECTO 1 ---
    startProject1AutoSlide() {
      this.clearProject1AutoSlide(); // Prevenir intervalos duplicados
      this.project1Interval = setInterval(this.nextProject1Image, 7000);
    },
    clearProject1AutoSlide() {
      if (this.project1Interval) {
        clearInterval(this.project1Interval);
        this.project1Interval = null;
      }
    },
    nextProject1Image() {
      this.currentProject1ImageIndex = (this.currentProject1ImageIndex + 1) % this.project1Images.length;
    },
    prevProject1Image() {
      this.currentProject1ImageIndex = (this.currentProject1ImageIndex - 1 + this.project1Images.length) % this.project1Images.length;
    },
    goToProject1Slide(index) {
      this.currentProject1ImageIndex = index;
      // Opcional: reiniciar el timer al hacer clic en un dot
      this.startProject1AutoSlide(); 
    }
  },
  // --- CICLO DE VIDA PARA CONTROLAR EL TIMER ---
  mounted() {
    this.startProject1AutoSlide();
  },
  beforeUnmount() {
    this.clearProject1AutoSlide();
  }
}
</script>

<style scoped>
/* ==================== PORTFOLIO ==================== */
.portfolio__container {
  gap: 2.5rem;
  grid-template-columns: 1fr;
  padding-top: 1rem;
}
.portfolio__card {
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: .5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,.15);
  transition: transform 0.4s ease, box-shadow .3s;
  display: flex;
  flex-direction: column;
}
.portfolio__card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,.15);
  transform: scale(1.03);
  z-index: 5;
}
.portfolio__img {
  width: 100%;
  border-radius: .5rem;
  margin-bottom: var(--mb-1);
  /* Agregado para el carrusel */
  flex-shrink: 0;
}
.portfolio__data {
  padding: 0 .5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}
.portfolio__title {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
}
.portfolio__description {
  margin-bottom: var(--mb-1-5);
  flex-grow: 1;
}

/* ==================== ESTILOS DEL CARRUSEL EN LA CARD ==================== */
.portfolio__img-carousel {
  position: relative;
  overflow: hidden;
  border-radius: .5rem;
  margin-bottom: var(--mb-1);
  cursor: pointer;
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
.portfolio__img-carousel:hover .portfolio-carousel__pagination {
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


/* ==================== SOLUCIÓN BUG WRAP/HOVER ==================== */
.portfolio__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;
  align-items: center;
  margin-top: auto;
  --button-height: 2.25rem;
  position: relative;
}
.portfolio__buttons.demo-hover .portfolio__button.button--presentation {
  flex-basis: 100%;
  width: 2.25rem !important;
  max-width: 2.25rem;
  flex-grow: 0;
  flex-shrink: 0;
}
.portfolio__buttons.presentation-hover .portfolio__button:nth-child(1) {
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0s, transform 0s;
  animation: button-reappear 0.3s ease 0.17s forwards;
  flex-basis: 100%;
  width: 2.25rem !important;
  max-width: 2.25rem;
  flex-grow: 0;
  flex-shrink: 0;
  order: 4;
}
.portfolio__buttons.presentation-hover .portfolio__button:nth-child(2) { order: 1; }
.portfolio__buttons.presentation-hover .portfolio__button:nth-child(3) { order: 2; }
.portfolio__buttons.presentation-hover .portfolio__button:nth-child(4) { order: 3; }

.portfolio__button--animated:hover,
.portfolio__buttons.demo-hover .portfolio__button:first-child,
.portfolio__buttons.presentation-hover .portfolio__button.button--presentation {
  width: auto;
  padding: 0 1rem;
  justify-content: center;
}
.portfolio__button--animated:hover .button__text,
.portfolio__buttons.demo-hover .portfolio__button:first-child .button__text,
.portfolio__buttons.presentation-hover .portfolio__button.button--presentation .button__text {
  opacity: 1;
  width: auto;
}
.portfolio__button--animated:hover .button__arrow,
.portfolio__buttons.demo-hover .portfolio__button:first-child .button__arrow,
.portfolio__buttons.presentation-hover .portfolio__button.button--presentation .button__arrow {
  opacity: 1;
  width: auto;
  transition: opacity 0.2s ease 0.15s;
  animation: arrow-bounce-in 0.75s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards;
}
.portfolio__button--animated:first-child:hover,
.portfolio__buttons.demo-hover .portfolio__button:first-child { width: 9rem; }
.portfolio__button--animated.button--presentation:hover,
.portfolio__buttons.presentation-hover .portfolio__button.button--presentation { width: 9rem; }
.portfolio__button--animated.button--figma:hover { width: 10rem; }
.portfolio__button--animated.button--github:hover { width: 10rem; }

/* ================================================================= */

.portfolio__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  height: var(--button-height);
  padding: 0 1rem;
  order: 0;
}
.portfolio__button--animated {
  position: relative;
  overflow: hidden;
  padding: 0;
  width: 2.25rem;
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  justify-content: flex-start;
  padding-left: 0.5rem;
}
.portfolio__button--animated .button__text {
  opacity: 0;
  white-space: nowrap;
  margin: 0 0.5rem;
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  width: 0;
  overflow: hidden;
}
.portfolio__button--animated .button__arrow {
  opacity: 0;
  transform: translateX(0rem);
  transition: opacity 0.2s ease, transform 0.3s ease;
  width: 0;
  overflow: hidden;
}
.portfolio__button--animated .uil-dribbble,
.portfolio__button--animated .uil-presentation-play,
.portfolio__button--animated svg {
  opacity: 1 !important;
  display: flex !important;
  flex-shrink: 0;
}
.button--figma svg,
.button--github svg {
  width: 19px !important;
  height: 19px !important;
  max-width: 19px !important;
  max-height: 19px !important;
}
.button--figma :deep(svg),
.button--github :deep(svg) {
  width: 19px !important;
  height: 19px !important;
  max-width: 19px !important;
  max-height: 19px !important;
}
.button--figma, .button--github, .button--presentation { color: white; }
.button--figma { background-color: #ff9ad5; }
.button--figma:hover { background-color: #ff7bc8; }
.button--github { background-color: #88bef5; }
.button--github:hover { background-color: #6caff3; }
.button--presentation { background-color: #ffb788; }
.button--presentation:hover { background-color: #eb9b65; }
.portfolio__button:not(.portfolio__button--animated):hover .uil-arrow-right {
  transform: translateX(.25rem);
}
.button__icon {
  transition: transform .3s;
  display: inline-flex;
  align-items: center;
  margin: 0;
}
@keyframes arrow-bounce-in {
  0% { transform: translateX(0rem); }
  50% { transform: translateX(.4rem); }
  100% { transform: translateX(.25rem); }
}
@keyframes button-reappear {
  0% { 
    opacity: 0; 
    transform: scale(0.8) translateY(-10px); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1) translateY(0); 
  }
}
@media screen and (max-width: 350px) {
  .portfolio__container {
    grid-template-columns: max-content;
    justify-content: center;
  }
}
@media screen and (min-width: 568px) {
  .portfolio__container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 992px) {
  .portfolio__container {
    grid-template-columns: repeat(3, 340px);
    justify-content: center;
  }
  .portfolio__card {
    padding: 2rem 1.5rem;
  }
}
</style>