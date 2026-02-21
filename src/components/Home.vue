// Home.vue
<template>
  <section class="home section" id="home">
    <div class="home__container container grid">
      <div class="home__wrapper">
        <div class="home__social">
          <a href="https://www.linkedin.com/in/henry-galvez-quilla-26367b281" aria-label="LinkedIn" target="_blank" class="home__social-icon">
            <i class="uil uil-linkedin-alt"></i>
            <span class="home__social-text">LinkedIn</span>
          </a>
          <a href="https://www.credly.com/users/henry-quilla" aria-label="Credly" target="_blank" class="home__social-icon">
            <i class="uil uil-dribbble"></i>
            <span class="home__social-text">Credly</span>
          </a>
          <a href="https://github.com/HenryGalvezQ" aria-label="GitHub" target="_blank" class="home__social-icon">
            <i class="uil uil-github-alt"></i>
            <span class="home__social-text">GitHub</span>
          </a>
          <a href="https://wa.me/51970675529?text=Hola,%20quiero%20contactarte%20por%20tus%20servicios." aria-label="WhatsApp" target="_blank" class="home__social-icon">
            <i class="uil uil-whatsapp"></i>
            <span class="home__social-text">WhatsApp</span>
          </a>
          <a href="https://www.facebook.com/henry.galvez.quilla" aria-label="Facebook" target="_blank" class="home__social-icon">
            <i class="uil uil-facebook-f"></i>
            <span class="home__social-text">Facebook</span>
          </a>
          <a href="#contact" aria-label="Email" class="home__social-icon">
            <i class="uil uil-envelope-alt"></i>
            <span class="home__social-text">Email</span>
          </a>
        </div>
        
        <div class="home__content grid">
          <div class="home__img">
            <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <mask id="mask0" mask-type="alpha">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                              130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                              97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                              0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
              </mask>
              <g mask="url(#mask0)">
                <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                              129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                              -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                <image class="home__blob-img" x="12" y="18" href="@/assets/img/perfil.png" />
              </g>
            </svg>
          </div>
          <div class="home__data">
            <h1 class="home__title">{{ t('title') }}</h1>
            <h3 class="home__subtitle">
              <span>{{ t('subtitle1') }}</span><br>
              <span>{{ t('subtitle2') }}</span><br>
              <span>{{ t('subtitle3') }}</span>
            </h3>
            <p class="home__discription">{{ t('description') }}</p>
            <a href="#contact" class="button button--flex button--animated">
              {{ t('contact') }}<i class="uil uil-message button__icon"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div class="home__scroll">
        <a href="#about" class="home__scroll-button button--flex">
          <i class="uil uil-mouse-alt home__scroll-mouse"></i>
          <span class="home__scroll-name">{{ t('scroll') }}</span>
          <i class="uil uil-arrow-down"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n({ inheritLocale: true, useScope: 'local' })
</script>

<style scoped>
.home__container {
  gap: 1rem;
  position: relative;
  max-width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
}

.home__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  column-gap: 2rem; 
}

.home__content {
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 2rem;
  align-items: center;
  flex: initial;
  max-width: fit-content;
}

.home__social {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex-shrink: 0;
  width: 150px;
  align-items: flex-start;
  margin-top: 6.5rem;
}

.home__social-icon {
  font-size: 1.5rem;
  color: var(--icon-color-social);
  display: flex;
  align-items: center;
  padding: 0.6rem;
  border-radius: 0.5rem;
  background-color: transparent;
  transition: padding 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;
  width: fit-content;
  text-decoration: none;
}

.home__social-icon i {
  z-index: 2;
  position: relative;
  transition: transform 0.3s ease;
  min-width: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home__social-text {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--title-color);
  margin-left: 0;
  max-width: 0;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 2;
  position: relative;
}

.home__social-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background-color: var(--first-color);
  transition: width 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  z-index: 1;
  border-radius: 0.5rem;
}

.home__social-icon:hover {
  background-color: transparent;
  padding-right: 1rem;
}

.home__social-icon:hover::before {
  width: 100%;
}

.home__social-icon:hover i {
  color: white;
  transform: scale(1.1);
}

.home__social-icon:hover .home__social-text {
  max-width: 150px;
  opacity: 1;
  margin-left: 0.6rem;
  color: white;
}

.home__blob {
  width: 200px;
  fill: var(--first-color-2);
}

.home__blob-img {
  width: 170px;
}

.home__data {
  max-width: 400px;
}

.home__img {
  justify-self: center; 
  display: flex;
  align-items: center;
}

.home__title {
  font-size: var(--big-font-size);
}

.home__subtitle {
  font-size: var(--h3-font-size);
  color: var(--subtitle-color);
  font-weight: var(--font-medium);
  margin-bottom: var(--mb-0-75);
}

.home__discription {
  margin-bottom: var(--mb-2);
  color: var(--text-color-solid);
}
.button--animated {
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  transform: scale(1);
}

.button--animated:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.button--animated:active {
  transform: translateY(-1px) scale(0.98);
}

.home__scroll {
  display: none;
  position: absolute;
  top: 450px;
  right: 13.5rem;
  bottom: 4rem;
}

.home__scroll-button {
  color: var(--first-color);
  transition: .3s;
}

.home__scroll-button:hover {
  transform: translateY(.25rem);
}

.home__scroll-mouse {
  font-size: 2rem;
}

.home__scroll-name {
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
  margin-right: var(--mb-0-25);
}

.home__scroll-arrow {
  font-size: 1.25rem;
}

/* ==================== MOBILE FIXES ==================== */
/* Pantallas muy pequeñas (max-width: 350px) */
@media screen and (max-width: 350px) {
  .home__container {
    padding-top: 1.2rem;
  }
  
  .home__wrapper {
    flex-direction: column-reverse; /* Cambiado: primero contenido, luego redes */
    gap: 2rem;
    align-items: center;
  }
  
  /* Redes sociales en mobile */
  .home__social {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 0.4rem;
    margin-top: 0;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
  }
  
  /* Iconos sociales solo muestran el ícono en mobile */
  .home__social-icon {
    font-size: 1.25rem;
    padding: 0.5rem;
    width: auto;
  }
  
  /* Ocultar texto en mobile */
  .home__social-text {
    display: none;
  }
  
  .home__social-icon:hover .home__social-text {
    display: none;
  }
  
  /* Grid del contenido principal */
  .home__content {
    grid-template-columns: 1fr;
    justify-content: center;
    row-gap: 1rem;
    padding-top: 0;
  }
  
  .home__img {
    order: -1; /* Imagen primero */
    justify-self: center;
    margin-bottom: 0.2rem;
  }
  
  .home__blob {
    width: 170px;
  }
  
  .home__data {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .home__title {
    font-size: 1.75rem;
    text-align: center;
    margin-bottom: 1rem;
    white-space: nowrap;
  }
  
  .home__subtitle {
    font-size: 0.9rem;
    text-align: left;
    margin-bottom: 1rem;
    width: 100%;
  }
  
  .home__discription {
    font-size: 0.85rem;
    text-align: left;
    margin-bottom: 1.4rem;
    width: 100%;
  }
}

/* Pantallas pequeñas (min-width: 351px y max-width: 567px) */
@media screen and (min-width: 351px) and (max-width: 567px) {
  .home__container {
    padding-top: 1.25rem;
  }
  
  .home__wrapper {
    flex-direction: column-reverse;
    gap: 2rem;
    align-items: center;
  }
  
  .home__social {
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 0.6rem;
    margin-top: 0;
    flex-wrap: wrap;
  }
  
  .home__social-icon {
    font-size: 1.3rem;
    padding: 0.5rem;
  }
  
  .home__social-text {
    display: none;
  }
  
  .home__social-icon:hover .home__social-text {
    display: none;
  }
  
  .home__content {
    grid-template-columns: 1fr;
    justify-content: center;
    row-gap: 1.25rem;
  }
  
  .home__img {
    order: -1;
    justify-self: center;
    margin-bottom: 0.2rem;
  }
  
  .home__blob {
    width: 180px;
  }
  
  .home__data {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .home__title {
    text-align: center;
    margin-bottom: 1rem;
    white-space: nowrap;
  }
  
  .home__subtitle {
    text-align: left;
    margin-bottom: 1rem;
    width: 100%;
  }
  
  .home__discription {
    text-align: left;
    margin-bottom: 1.5rem;
    width: 100%;
  }
}

/* Tablets pequeñas (min-width: 568px) */
@media screen and (min-width: 568px) {
  .home__wrapper {
    gap: 0;
  }
  .home__social {
    width: 160px;
    margin-left: 0;
    margin-top: 0;
  }
  .home__content {
    grid-template-columns: max-content max-content;
    justify-content: flex-start; 
    column-gap: 1rem;
    margin-left: 1rem;
    padding-top: 0;
  }
  .home__data {
    grid-column: initial;
    max-width: 400px;
  }
  .home__img {
    order: 1;
    justify-self: end;
  }
}


/* Tablets (min-width: 768px) */
@media screen and (min-width: 768px) {
  .home__container {
    row-gap: 5rem;
    padding-top: 0rem;
    margin-top: -0.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  .home__wrapper {
    column-gap: 1.5rem;
  }
  .home__social {
    width: 160px;
    margin-top: 6.5rem;
  }
  .home__content {
    padding-top: 5.5rem;
    column-gap: 1rem;
    grid-template-columns: 1.5fr 1fr;
  }
  .home__blob {
    width: 270px;
  }
  .home__scroll {
    display: block;
  }
  .home__scroll-button {
    margin-left: 3rem;
  }
  .home__social-icon {
    font-size: 1.6rem;
  }
  .home.section {
    padding: 6rem 0 1rem; /* 6rem arriba, 1rem abajo (reducido -1rem) */
  }
}

/* Desktop (min-width: 1024px) - PERFECTO, NO TOCAR */
@media screen and (min-width: 1024px) {
  .home__container {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .home__blob {
    width: 320px;
  }
  .home__wrapper {
    column-gap: 2rem; 
  }
  .home__social {
    width: 170px;
  }
  .home__content {
    grid-template-columns: max-content max-content;
    column-gap: 3rem;
    justify-content: center;
    margin-left: 0;
  }
  .home__social-icon {
    font-size: 1.7rem;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "title": "Hi, I'm Henry Galvez",
    "subtitle1": "Ingeniero de Sistemas",
    "subtitle2": "Frontend/Mobile Developer",
    "subtitle3": "UX/UI Designer",
    "description": "Experiencia de alto nivel en diseño y desarrollo web, produciendo trabajos de calidad.",
    "contact": "Contacto",
    "scroll": "Scroll a CV"
  },
  "en": {
    "title": "Hi, I'm Henry Galvez",
    "subtitle1": "Systems Engineer",
    "subtitle2": "Frontend/Mobile Developer",
    "subtitle3": "UX/UI Designer",
    "description": "High level experience in web design and development, producing quality work.",
    "contact": "Contact",
    "scroll": "Scroll to CV"
  }
}
</i18n>