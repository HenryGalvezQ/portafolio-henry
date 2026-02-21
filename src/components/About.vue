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
          <a href="/cv-henry-galvez.pdf" target="_blank" rel="noopener noreferrer" class="button button--flex button--animated">
            Ver CV<i class="uil uil-eye button__icon"></i>
          </a>
          
          <a href="/cv-henry-galvez.pdf" download="CV_Henry_Galvez.pdf" class="button button--flex button--outline button--animated">
            Descargar CV<i class="uil uil-download-alt button__icon"></i>
          </a>
        </div>
      </div>

      <div class="about__scroll">
        <a href="#portfolio" class="about__scroll-button button--flex" @click="scrollToPortfolio">
          <i class="uil uil-mouse-alt about__scroll-mouse"></i>
          <span class="about__scroll-name">Ir a Portafolio</span>
          <i class="uil uil-arrow-down"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
  methods: {
    scrollToPortfolio(event) {
      event.preventDefault(); // Prevenir el scroll por defecto
      
      const targetElement = document.getElementById('portfolio');
      
      if (targetElement) {
        // Scroll inicial
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Recalcular después de que las animaciones se completen
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 600);
        
        // Recalculación final para mayor precisión
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 1000);
      }
    }
  }
}
</script>

<style scoped>
/* ==================== ABOUT ==================== */
.section__subtitle {
  color: var(--subtitle-color);
}

.about__img {
  width: 200px;
  border-radius: .5rem;
  justify-self: center;
  align-self: center;
}

.about__description {
  text-align: center;
  margin-bottom: var(--mb-2-5);
  color: var(--text-color-solid);
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
  color: var(--subtitle-color);
}

.about__info-title,
.about__info-name {
  display: block;
  text-align: center;
}

.about__buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.about__container {
  position: relative;
}

:global(section#portfolio) {
  scroll-margin-bottom: 300px; 
}

/* ==================== SCROLL DOWN REPLICADO ==================== */
.about__scroll {
  display: none;
  position: absolute;
  right: 0; /* Lo pega al borde derecho del contenedor */
  z-index: 10;
}

.about__scroll-button {
  color: var(--first-color);
  transition: .3s;
  display: flex;
  align-items: center;
  column-gap: .5rem;
  text-decoration: none;
  cursor: pointer;
}

.about__scroll-button:hover {
  transform: translateY(.25rem);
}

.about__scroll-mouse {
  font-size: 2rem;
}

.about__scroll-name {
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
}

/* ==================== MEDIA QUERIES ==================== */
@media screen and (max-width: 567px) {
  .about__description {
    margin-bottom: var(--mb-1-5); /* usa una variable más pequeña */
  }
  .about__info {
    margin-bottom: var(--mb-2);
  }
}

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
    justify-content: center;
    position: relative; /* Necesario para posicionar el scroll relativamente */
  }
  
  /* Mostrar el scroll en desktop, alineado con los botones */
  .about__scroll {
    display: block;
    position: static; /* Cambia a static para que fluya con el contenido */
    margin-left: auto; /* Lo empuja totalmente a la derecha */
  }
  
  /* Contenedor wrapper para alinear botones y scroll */
  .about__data {
    position: relative;
  }

  .about.section {
    padding: 7rem 0 1rem; /* 7rem arriba (+1rem), 1rem abajo (-1rem) */
  }
}

@media screen and (min-width: 1024px) {
  .about__scroll {
    position: absolute;
    right: -8rem; /* Sale del contenedor hacia la derecha */
    top: auto;
    bottom: 0;
  }
  
  /* Alinear con la altura de los botones */
  .about__buttons {
    position: relative;
  }
}

/* Para pantallas muy grandes */
@media screen and (min-width: 1200px) {
  .about__scroll {
    right: -12rem; /* Más espacio en pantallas grandes */
  }
}
</style>