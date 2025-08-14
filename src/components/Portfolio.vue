<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">Portfolio</h2>
    <span class="section__subtitle">Most recent work</span>

    <div class="portfolio__container container swiper-container">
      <div class="swiper-wrapper">
        <div class="portfolio__content grid swiper-slide">
          <img src="@/assets/img/portfolio1.jpg" alt="portfolio image 1" class="portfolio__img">
          <div class="portfolio__data">
            <h3 class="portfolio__title">Modern Website</h3>
            <p class="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
            <a href="#" class="button button--flex button--small portfolio__button">
              Demo
              <i class="uil uil-arrow-right button__icon"></i>
            </a>
          </div>
        </div>

        <div class="portfolio__content grid swiper-slide">
          <img src="@/assets/img/portfolio2.jpg" alt="portfolio image 2" class="portfolio__img">
          <div class="portfolio__data">
            <h3 class="portfolio__title">Brand Design</h3>
            <p class="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
            <a href="#" class="button button--flex button--small portfolio__button">
              Demo
              <i class="uil uil-arrow-right button__icon"></i>
            </a>
          </div>
        </div>

        <div class="portfolio__content grid swiper-slide">
          <img src="@/assets/img/portfolio3.jpg" alt="portfolio image 3" class="portfolio__img">
          <div class="portfolio__data">
            <h3 class="portfolio__title">Online Store</h3>
            <p class="portfolio__description">Website adaptable to all devices, with ui components and animated interactions.</p>
            <a href="#" class="button button--flex button--small portfolio__button">
              Demo
              <i class="uil uil-arrow-right button__icon"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="swiper-button-next">
        <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
      </div>
      <div class="swiper-button-prev">
        <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

// Importaciones de Swiper
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// El hook onMounted asegura que el DOM está listo
onMounted(() => {
  new Swiper('.portfolio__container', {
    // Configura Swiper para usar los módulos importados
    modules: [Navigation, Pagination],
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});
</script>
<style scoped>
/* Necesitamos hacer estos estilos globales para que Swiper funcione bien desde el componente */
:global(.portfolio__container) {
  overflow: initial;
}
:global(.swiper-button-prev::after),
:global(.swiper-button-next::after) {
  content: '';
}
:global(.swiper-portfolio-icon) {
  font-size: 2rem;
  color: var(--first-color);
}
:global(.swiper-button-prev) {
  left: -.5rem;
}
:global(.swiper-button-next) {
  right: -.5rem;
}
:global(.swiper-pagination-bullet-active) {
  background-color: var(--first-color);
}
:global(.swiper-button-prev),
:global(.swiper-button-next),
:global(.swiper-pagination-bullet) {
  outline: none;
}
:global(.swiper-container-horizontal > .swiper-pagination-bullets) {
  bottom: -2.5rem;
}
/* Fin de estilos globales */

.portfolio__content {
  padding: 0 1.5rem;
}
.portfolio__img {
  width: 265px;
  border-radius: .5rem;
  justify-self: center;
}
.portfolio__title {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
}
.portfolio__description {
  margin-bottom: var(--mb-0-75);
}
.portfolio__button:hover .button__icon {
  transform: translateX(.25rem);
}

/* Media Queries */
@media screen and (min-width: 568px) {
  .portfolio__content {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 768px) {
  .portfolio__img {
    width: 320px;
  }
  .portfolio__content {
    align-items: center;
  }
}
@media screen and (min-width: 1024px) {
  .portfolio__content {
    column-gap: 5rem;
  }
  :global(.swiper-portfolio-icon) {
    font-size: 3.5rem;
  }
  :global(.swiper-button-prev) {
    left: -3.5rem;
  }
  :global(.swiper-button-next) {
    right: -3.5rem;
  }
  :global(.swiper-container-horizontal > .swiper-pagination-bullets) {
    bottom: -4.5rem;
  }
}
</style>