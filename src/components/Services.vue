// Services.vue

<template>
  <section class="services section" id="services" ref="servicesSection">
    <h2 class="section__title">{{ t('title') }}</h2>
    <span class="section__subtitle">{{ t('subtitle') }}</span>

    <div class="services__container container grid">
      
      <div :class="['services__content', servicesState.ui ? 'services__open' : 'services__close']" data-service="ui">
        
        <img src="@/assets/img/diseno_captura.png" alt="Captura de Diseño UI/UX" class="services__img">

        <div class="services__header" @click="toggleService()">
          <i class="uil uil-web-grid services__icon"></i>
          <div>
            <h3 class="services__title">{{ t('ui.title') }}</h3>
            <span class="services__subtitle">{{ t('ui.subtitle') }}</span>
          </div>
          <i class="uil uil-angle-down services__arrow"></i>
        </div>
        
        <div class="services__list grid">
          <ul class="services__list-ul">
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>{{ t('ui.items[0]') }}</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>{{ t('ui.items[1]') }}</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>{{ t('ui.items[2]') }}</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>{{ t('ui.items[3]') }}</p>
            </li>
          </ul>
        </div>

        <span @click="toggleService()" class="services__button">
          {{ t('viewMore') }}
          <i class="uil uil-arrow-right button__icon"></i>
        </span>
      </div>

      <div :class="['services__content', servicesState.frontend ? 'services__open' : 'services__close']" data-service="frontend">
        
        <img src="@/assets/img/desarrollo_captura.png" alt="Captura de Desarrollo Frontend" class="services__img">

        <div class="services__header" @click="toggleService()">
          <i class="uil uil-arrow services__icon"></i>
          <div>
            <h3 class="services__title">{{ t('frontend.title') }}</h3>
            <span class="services__subtitle">{{ t('frontend.subtitle') }}</span>
          </div>
          <i class="uil uil-angle-down services__arrow"></i>
        </div>

        <div class="services__list grid">
          <ul class="services__list-ul">
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>{{ t('frontend.items[0]') }}</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>{{ t('frontend.items[1]') }}</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>{{ t('frontend.items[2]') }}</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>{{ t('frontend.items[3]') }}</p>
            </li>
          </ul>
        </div>

        <span @click="toggleService()" class="services__button">
          {{ t('viewMore') }}
          <i class="uil uil-arrow-right button__icon"></i>
        </span>
      </div>

      <div :class="['services__content', servicesState.mobile ? 'services__open' : 'services__close']" data-service="mobile">

        <img src="@/assets/img/mobile_captura.jpg" alt="Captura de Desarrollo Mobile" class="services__img">

        <div class="services__header" @click="toggleService()">
          <i class="uil uil-mobile-android services__icon"></i>
          <div>
            <h3 class="services__title">{{ t('mobile.title') }}</h3>
            <span class="services__subtitle">{{ t('mobile.subtitle') }}</span>
          </div>
          <i class="uil uil-angle-down services__arrow"></i>
        </div>

        <div class="services__list grid">
          <ul class="services__list-ul">
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>{{ t('mobile.items[0]') }}</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>{{ t('mobile.items[1]') }}</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>{{ t('mobile.items[2]') }}</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>{{ t('mobile.items[3]') }}</p>
            </li>
          </ul>
        </div>

        <span @click="toggleService()" class="services__button">
          {{ t('viewMore') }}
          <i class="uil uil-arrow-right button__icon"></i>
        </span>
      </div>
    </div>
  </section>
</template>

<script>

import { useI18n } from 'vue-i18n';

export default {
  name: 'Services',
  setup() {
    const { t } = useI18n({ inheritLocale: true, useScope: 'local' })
    return { t }
  },
  data() {
    return {
      servicesState: {
        ui: false,
        frontend: false,
        mobile: false,
      },
      observer: null,
      userHasClicked: false,
    };
  },
  methods: {
    toggleService() {
      this.userHasClicked = true;
      const isAnyCardOpen = Object.values(this.servicesState).some(isOpen => isOpen);
      const newState = !isAnyCardOpen;
      Object.keys(this.servicesState).forEach(key => {
        this.servicesState[key] = newState;
      });
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px 0px -95% 0px', 
      threshold: 0,
    };
    this.observer = new IntersectionObserver((entries) => {
      if (this.userHasClicked) return;
      const entry = entries[0];
      const isVisible = entry.isIntersecting;
      Object.keys(this.servicesState).forEach(key => {
        this.servicesState[key] = isVisible;
      });
    }, options);
    const sectionToObserve = this.$refs.servicesSection;
    if (sectionToObserve) {
      this.observer.observe(sectionToObserve);
    }
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
}
</script>

<style scoped>
/* ==================== SERVICES ==================== */
.services__container {
  gap: 1.5rem;
  grid-template-columns: 1fr;
  padding-top: 1rem;
}

.section__subtitle {
  color: var(--subtitle-color);
}

.services__content {
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: .5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,.15);
  position: relative;
  padding-bottom: 3rem;
  /* CAMBIO 1: Transición mejorada para animar la sombra y el tamaño */
  transition: transform 0.4s ease, box-shadow .3s;
}

.services__content:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,.15);
  /* CAMBIO 2: Se agranda la tarjeta al pasar el mouse */
  transform: scale(1.03);
  /* CAMBIO 3: Se asegura de que la tarjeta agrandada esté por encima de las demás */
  z-index: 5;
}

/* === ESTILOS PARA LA IMAGEN === */
.services__img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  object-position: center;
  border-radius: .5rem;
  margin-bottom: var(--mb-1-5);
  box-shadow: 0 2px 4px rgba(0,0,0,.25);
}

.services__header {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.services__icon,
.services__arrow {
  font-size: 2rem;
  color: var(--first-color);
}

.services__icon {
  margin-right: var(--mb-1);
}

.services__title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}

.services__subtitle {
  font-size: var(--small-font-size);
  color: var(--subtitle-color);

}

.services__arrow {
  margin-left: auto;
  transition: transform 0.4s;
}

.services__list {
  overflow: hidden;
  transition: max-height 0.4s ease-out, margin-top 0.4s ease-out;
}

.services__list-ul {
  list-style: none;
  padding-left: 0;
  row-gap: 1rem;
  display: flex;
  flex-direction: column;
}

.services__list-item {
  display: flex;
  align-items: flex-start;
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}

.services__list-icon {
  color: var(--first-color);
  margin-right: var(--mb-0-5);
  font-size: 1.2rem;
  margin-top: 2px;
}

/* --- Estados de Abierto y Cerrado --- */
.services__close .services__list {
  max-height: 0;
}

.services__close .services__list-item {
  opacity: 0;
  transform: translateY(-10px);
}

.services__open .services__list {
  max-height: 1000px;
  margin-top: var(--mb-1-5);
}

.services__open .services__arrow {
  transform: rotate(-180deg);
}

/* ==================== BOTÓN VER MÁS ==================== */
.services__button {
  position: absolute;
  left: 1.5rem;
  bottom: 1rem;
  font-size: var(--small-font-size);
  color: var(--first-color);
  display: inline-flex;
  align-items: center;
  column-gap: .25rem;
  cursor: pointer;
  transition: opacity .3s;
}

.services__button:hover .button__icon {
  transform: translateX(.25rem);
}

.button__icon {
  font-size: 1rem;
  transition: transform .3s;
}

.services__open .services__button {
  opacity: 0;
  pointer-events: none;
}

/* ==================== MEDIA QUERIES ==================== */
@media screen and (max-width: 350px) {
  .services__container {
    grid-template-columns: max-content;
    justify-content: center;
  }
}

@media screen and (max-width: 567px) {
  .section__subtitle {
    margin-bottom: var(--mb-1-5);
  }
}

@media screen and (min-width: 768px) {
  .services__container {
    grid-template-columns: repeat(3, 340px);
    justify-content: center;
    column-gap: 2rem;
  }
  .services__content {
    padding: 2rem 1.5rem 3rem 1.5rem;
  }
  .services.section { /* o .qualification, .services, .portfolio */
    padding: 7rem 0 1rem; /* 7rem arriba, 1rem abajo */
  }
}

@media screen and (min-width: 1024px) {
  .services__container {
    grid-template-columns: repeat(3, 340px);
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "title": "Servicios",
    "subtitle": "Lo que ofrezco",
    "viewMore": "Ver más",
    "ui": {
      "title": "Diseñador \n UI/UX",
      "subtitle": "Diseño de interfaces y experiencia de usuario",
      "items": [
        "Desarrollo de interfaces de usuario atractivas.",
        "Creación de prototipos y wireframes en Figma.",
        "Diseño de interacciones y flujos de usuario.",
        "Investigación de usuarios y pruebas de usabilidad."
      ]
    },
    "frontend": {
      "title": "Desarrollador \n Frontend",
      "subtitle": "Desarrollo de diseños y aplicaciones web",
      "items": [
        "Desarrollo de SPAs con Vue.js, Nuxt y React.js",
        "Maquetación de sitios web responsivos.",
        "Consumo de APIs REST y autenticación OAuth/JWT",
        "Creación rápida de MVPs"
      ]
    },
    "mobile": {
      "title": "Desarrollador \n Mobile",
      "subtitle": "Aplicaciones nativas e híbridas multiplataforma",
      "items": [
        "Desarrollo nativo Android con Kotlin y Jetpack Compose",
        "Apps híbridas con Flutter y React Native",
        "Arquitectura MVVM, Clean Architecture e inyección de dependencias",
        "Integración con APIs REST, Firebase y sincronización offline"
      ]
    }
  },
  "en": {
    "title": "Services",
    "subtitle": "What I offer",
    "viewMore": "View more",
    "ui": {
      "title": "UI/UX \n Designer",
      "subtitle": "Interface design and user experience",
      "items": [
        "Development of attractive user interfaces.",
        "Creation of prototypes and wireframes in Figma.",
        "Design of interactions and user flows.",
        "User research and usability testing."
      ]
    },
    "frontend": {
      "title": "Frontend \n Developer",
      "subtitle": "Development of web designs and applications",
      "items": [
        "SPA development with Vue.js, Nuxt and React.js",
        "Responsive website layout.",
        "REST API consumption and OAuth/JWT authentication",
        "Rapid MVP creation"
      ]
    },
    "mobile": {
      "title": "Mobile \n Developer",
      "subtitle": "Native and hybrid cross-platform applications",
      "items": [
        "Native Android development with Kotlin and Jetpack Compose",
        "Hybrid apps with Flutter and React Native",
        "MVVM, Clean Architecture and dependency injection",
        "Integration with REST APIs, Firebase and offline sync"
      ]
    }
  }
}
</i18n>