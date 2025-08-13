<template>
  <section class="about section" id="about">
    <h2 class="section__title">About Me</h2>
    <span class="section__subtitle">My introduction</span>

    <div class="about__container container grid">
      <img src="@/assets/img/about.jpg" alt="about" class="about__img">
      <div class="about__data">
        <p class="about__description">
          Desarrollador web, con conocimiento y experiencia, trabajando en tecnologías web y diseño UX / UI, entregando un trabajo de calidad.
        </p>
        <div class="about__info">
          <div>
            <span class="about__info-title">08+</span>
            <span class="about__info-name">Years <br> experience</span>
          </div>
          <div>
            <span class="about__info-title">20+</span>
            <span class="about__info-name">Completed <br> project</span>
          </div>
          <div>
            <span class="about__info-title">05+</span>
            <span class="about__info-name">Companies <br> worked</span>
          </div>
        </div>
        <div class="about__buttons">
          <a href="/Alexa-Cv.pdf" download class="button button--flex">
            Download CV<i class="uil uil-download-alt button__icon"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>