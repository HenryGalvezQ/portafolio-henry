<template>
  <section class="testimonial section">
    <h2 class="section__title">Testimonial</h2>
    <span class="section__subtitle">My client saying</span>

    <div class="testimonial_container container swiper-container">
      <div class="swiper-wrapper">
        <div class="testimonial__content swiper-slide">
          <div class="testimonial__data">
            <div class="testimonial__header">
              <img src="@/assets/img/testimonial1.jpg" alt="" class="testimonial__img">
              <div>
                <h3 class="testimonial__name">Sara Smith</h3>
                <span class="testimonial__client">Client</span>
              </div>
            </div>
            <div>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
            </div>
          </div>
          <p class="testimonial__description">I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.</p>
        </div>

        <div class="testimonial__content swiper-slide">
          <div class="testimonial__data">
            <div class="testimonial__header">
              <img src="@/assets/img/testimonial2.jpg" alt="" class="testimonial__img">
              <div>
                <h3 class="testimonial__name">Matt Robinson</h3>
                <span class="testimonial__client">Client</span>
              </div>
            </div>
            <div>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
            </div>
          </div>
          <p class="testimonial__description">I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.</p>
        </div>

        <div class="testimonial__content swiper-slide">
          <div class="testimonial__data">
            <div class="testimonial__header">
              <img src="@/assets/img/testimonial3.jpg" alt="" class="testimonial__img">
              <div>
                <h3 class="testimonial__name">Raul Harris</h3>
                <span class="testimonial__client">Client</span>
              </div>
            </div>
            <div>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
              <i class="uil uil-star testimonial__icon-star"></i>
            </div>
          </div>
          <p class="testimonial__description">I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day.</p>
        </div>
      </div>

      <div class="swiper-pagination swiper-pagination-testimonial"></div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

// Importaciones de Swiper
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

// Importa los estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

onMounted(() => {
  new Swiper('.testimonial_container', {
    modules: [Pagination],
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints: {
      568: {
        slidesPerView: 2,
      },
    },
  });
});
</script>
<style scoped>
/* Estilos globales para Swiper que necesitan aplicarse desde este componente */
:global(.testimonial_container .swiper-pagination-bullet-active) {
  background-color: var(--first-color);
}
:global(.testimonial_container .swiper-pagination-testimonial) {
  bottom: 0;
}
/* Fin de estilos globales */

.testimonial__data,
.testimonial__header {
  display: flex;
}
.testimonial__data {
  justify-content: space-between;
  margin-bottom: var(--mb-1);
}
.testimonial__img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: var(--mb-0-75);
}
.testimonial__name {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}
.testimonial__client {
  font-size: var(--small-font-size);
  color: var(--text-color-light);
}
.testimonial__description {
  margin-bottom: var(--mb-2-5);
}
.testimonial__icon-star {
  color: var(--first-color);
}

/* Media Queries */
@media screen and (max-width: 350px) {
  .testimonial__data,
  .testimonial__header {
    flex-direction: column;
    align-items: center;
  }
  .testimonial__img {
    margin-right: 0;
    margin-bottom: var(--mb-0-25);
  }
  .testimonial__data,
  .testimonial__description {
    text-align: center;
  }
}
</style>