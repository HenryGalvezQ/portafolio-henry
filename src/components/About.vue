<template>
  <section class="about section" id="about">
    <h2 class="section__title">About me</h2>
    <span class="section__subtitle">My introduction</span>

    <div class="about__container container grid">
      <img src="@/assets/img/about.jpg" alt="about" class="about__img">
      <div class="about__data">
        <p class="about__description">
          Ingeniero de Sistemas especializado en desarrollo Frontend y Mobile, con enfoque en diseño UX/UI. Creo interfaces escalables, accesibles y centradas en el usuario utilizando arquitecturas modernas y mejores prácticas de desarrollo.
        </p>
        <div class="about__info">
          <div>
            <span class="about__info-title">02+</span>
            <span class="about__info-name">Years <br> experience</span>
          </div>
          <div>
            <span class="about__info-title">10+</span>
            <span class="about__info-name">Completed <br> project</span>
          </div>
          <div>
            <span class="about__info-title">05+</span>
            <span class="about__info-name">Certificados <br> obtenidos</span>
          </div>
        </div>
        <div class="about__buttons">
          <a href="@/assets/img/CV Henry Galvez.pdf" download class="button button--flex">
            Descargar CV<i class="uil uil-download-alt button__icon"></i>
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

<style scoped>
/* ==================== ABOUT ==================== */
.about__img {
  width: 200px;
  border-radius: .5rem;
  justify-self: center;
  align-self: center;
}

.about__description {
  text-align: center;
  margin-bottom: var(--mb-2-5);
}

.about__info {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2-5);
}

.about__info-title {
  font-size: var(--h2-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
}

.about__info-name {
  font-size: var(--smaller-font-size);
}

.about__info-title,
.about__info-name {
  display: block;
  text-align: center;
}

.about__buttons {
  display: flex;
  justify-content: center;
}

/* ==================== MEDIA QUERIES ==================== */
@media screen and (min-width: 568px) {
  .about__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px) {
  .about__container {
    column-gap: 5rem;
  }
  .about__img {
    width: 350px;
  }
  .about__description {
    text-align: initial;
  }
  .about__info {
    justify-content: space-between;
  }
  .about__buttons {
    justify-content: initial;
  }
}
</style>