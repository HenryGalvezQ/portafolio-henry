// About.vue

<template>
  <section class="about section" id="about">
    <h2 class="section__title">{{ t('title') }}</h2>
    <span class="section__subtitle">{{ t('subtitle') }}</span>

    <div class="about__container container grid">
      <img src="@/assets/img/about.webp" alt="about" class="about__img" loading="lazy" width="700" height="528">
      
      <div class="about__data">
        <p class="about__description">
          {{ t('description') }}
        </p>
        
        <div class="about__info">
          <div>
            <span class="about__info-title">02+</span>
            <span class="about__info-name">{{ t('info.years') }}</span>
          </div>
          <div>
            <span class="about__info-title">10+</span>
            <span class="about__info-name">{{ t('info.projects') }}</span>
          </div>
          <div>
            <span class="about__info-title">05+</span>
            <span class="about__info-name">{{ t('info.certificates') }}</span>
          </div>
        </div>

        <div class="about__buttons">
          <a :href="locale === 'en' ? '/cv-henry-galvez-en.pdf' : '/cv-henry-galvez.pdf'" target="_blank" rel="noopener noreferrer" class="button button--flex button--animated">
            {{ t('buttons.view') }}<i class="uil uil-eye button__icon"></i>
          </a>
          
          <a :href="locale === 'en' ? '/cv-henry-galvez-en.pdf' : '/cv-henry-galvez.pdf'" :download="locale === 'en' ? 'CV_Henry_Galvez_EN.pdf' : 'CV_Henry_Galvez.pdf'" class="button button--flex button--outline button--animated">
            {{ t('buttons.download') }}<i class="uil uil-download-alt button__icon"></i>
          </a>
        </div>
      </div>

      <div class="about__scroll">
        <a href="#portfolio" class="about__scroll-button button--flex" @click="scrollToPortfolio">
          <i class="uil uil-mouse-alt about__scroll-mouse"></i>
          <span class="about__scroll-name">{{ t('scroll') }}</span>
          <i class="uil uil-arrow-down"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'About',
  setup() {
    const { t } = useI18n({ inheritLocale: true, useScope: 'local' })
    const { locale } = useI18n({ useScope: 'global' })
    return { t, locale }
  },
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

<i18n lang="json">
{
  "es": {
    "title": "Acerca de mí",
    "subtitle": "Mi introducción",
    "description": "Ingeniero de Sistemas especializado en desarrollo Frontend y Mobile, con enfoque en diseño UX/UI. Creo interfaces escalables, accesibles y centradas en el usuario utilizando arquitecturas modernas y mejores prácticas de desarrollo.",
    "info": {
      "years": "Años \n de experiencia",
      "projects": "Proyectos \n completados",
      "certificates": "Certificados \n obtenidos"
    },
    "buttons": {
      "view": "Ver CV",
      "download": "Descargar CV"
    },
    "scroll": "Ir a Portafolio"
  },
  "en": {
    "title": "About Me",
    "subtitle": "My introduction",
    "description": "Systems Engineer specialized in Frontend and Mobile development, with a focus on UX/UI design. I build scalable, accessible, and user-centered interfaces using modern architectures and development best practices.",
    "info": {
      "years": "Years \n of experience",
      "projects": "Projects \n completed",
      "certificates": "Certificates \n obtained"
    },
    "buttons": {
      "view": "View CV",
      "download": "Download CV"
    },
    "scroll": "Go to Portfolio"
  }
}
</i18n>