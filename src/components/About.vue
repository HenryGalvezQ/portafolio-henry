<template>
  <section class="about section" id="about">
    <h2 class="section__title">Acerca de mí</h2>
    <span class="section__subtitle">Mi introducción</span>

    <div class="about__container container grid">
      <img src="@/assets/img/about.jpg" alt="about" class="about__img">
      <div class="about__data">
        <p class="about__description">
          Ingeniero de Sistemas especializado en desarrollo Frontend y Mobile, con enfoque en diseño UX/UI. Creo interfaces escalables, accesibles y centradas en el usuario utilizando arquitecturas modernas y mejores prácticas de desarrollo.
        </p>
        <div class="about__info">
          <div>
            <span class="about__info-title">02+</span>
            <span class="about__info-name">Años <br> de experiencia</span>
          </div>
          <div>
            <span class="about__info-title">10+</span>
            <span class="about__info-name">Proyectos <br> completados</span>
          </div>
          <div>
            <span class="about__info-title">05+</span>
            <span class="about__info-name">Certificados <br> obtenidos</span>
          </div>
        </div>
        <div class="about__buttons">
          <a href="/cv-henry-galvez.pdf" target="_blank" rel="noopener noreferrer" class="button button--flex">
            Ver CV<i class="uil uil-eye button__icon"></i>
          </a>
          
          <a href="/cv-henry-galvez.pdf" download="CV_Henry_Galvez.pdf" class="button button--flex button--outline">
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
  gap: 1rem; /* Separación entre botones */
  flex-wrap: wrap; /* Para que se adapten en móviles */
}

/* Botón con estilo invertido (outline) */
.button--outline {
  background-color: var(--body-color, #fff);
  color: var(--first-color, #6E57E0);
  border: 1px solid var(--first-color, #6E57E0);
}

.button--outline:hover {
  background-color: var(--first-color, #6E57E0);
  color: #fff;
  border-color: var(--first-color, #6E57E0);
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
    justify-content: center; /* Cambiado de initial a center */
  }
}
</style>