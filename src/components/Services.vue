<template>
  <section class="services section" id="services" ref="servicesSection">
    <h2 class="section__title">Servicios</h2>
    <span class="section__subtitle">Lo que ofrezco</span>

    <div class="services__container container grid">
      
      <div :class="['services__content', servicesState.ui ? 'services__open' : 'services__close']" data-service="ui">
        
        <img src="@/assets/img/diseno_captura.png" alt="Captura de Diseño UI/UX" class="services__img">

        <div class="services__header" @click="toggleService()">
          <i class="uil uil-web-grid services__icon"></i>
          <div>
            <h3 class="services__title">Diseñador <br> UI/UX</h3>
            <span class="services__subtitle">Diseño de interfaces y experiencia de usuario</span>
          </div>
          <i class="uil uil-angle-down services__arrow"></i>
        </div>
        
        <div class="services__list grid">
          <ul class="services__list-ul">
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>Desarrollo de interfaces de usuario atractivas.</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>Creación de prototipos y wireframes en Figma.</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>Diseño de interacciones y flujos de usuario.</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>Investigación de usuarios y pruebas de usabilidad.</p>
            </li>
          </ul>
        </div>

        <span @click="toggleService()" class="services__button">
          Ver más
          <i class="uil uil-arrow-right button__icon"></i>
        </span>
      </div>

      <div :class="['services__content', servicesState.frontend ? 'services__open' : 'services__close']" data-service="frontend">
        
        <img src="@/assets/img/desarrollo_captura.png" alt="Captura de Desarrollo Frontend" class="services__img">

        <div class="services__header" @click="toggleService()">
          <i class="uil uil-arrow services__icon"></i>
          <div>
            <h3 class="services__title">Desarrollador <br> Frontend</h3>
            <span class="services__subtitle">Desarrollo de diseños y aplicaciones web</span>
          </div>
          <i class="uil uil-angle-down services__arrow"></i>
        </div>

        <div class="services__list grid">
          <ul class="services__list-ul">
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>Desarrollo de SPAs con Vue.js, Nuxt y React.js</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>Maquetación de sitios web responsivos.</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>Consumo de APIs REST y autenticación OAuth/JWT</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>Creación rápida de MVPs</p>
            </li>
          </ul>
        </div>

        <span @click="toggleService()" class="services__button">
          Ver más
          <i class="uil uil-arrow-right button__icon"></i>
        </span>
      </div>

      <div :class="['services__content', servicesState.mobile ? 'services__open' : 'services__close']" data-service="mobile">

        <img src="@/assets/img/mobile_captura.jpg" alt="Captura de Desarrollo Mobile" class="services__img">

        <div class="services__header" @click="toggleService()">
          <i class="uil uil-mobile-android services__icon"></i>
          <div>
            <h3 class="services__title">Desarrollador <br> Mobile</h3>
            <span class="services__subtitle">Aplicaciones nativas e híbridas multiplataforma</span>
          </div>
          <i class="uil uil-angle-down services__arrow"></i>
        </div>

        <div class="services__list grid">
          <ul class="services__list-ul">
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>Desarrollo nativo Android con Kotlin y Jetpack Compose</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>Apps híbridas con Flutter y React Native</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>Arquitectura MVVM, Clean Architecture e inyección de dependencias</p>
            </li>
            <li class="services__list-item">
              <i class="uil uil-check-circle services__list-icon"></i>
              <p>Integración con APIs REST, Firebase y sincronización offline</p>
            </li>
          </ul>
        </div>

        <span @click="toggleService()" class="services__button">
          Ver más
          <i class="uil uil-arrow-right button__icon"></i>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Services',
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
  color: var(--text-color-light);
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

@media screen and (min-width: 768px) {
  .services__container {
    grid-template-columns: repeat(3, 340px);
    justify-content: center;
    column-gap: 2rem;
  }
  .services__content {
    padding: 2rem 1.5rem 3rem 1.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .services__container {
    grid-template-columns: repeat(3, 340px);
  }
}
</style>