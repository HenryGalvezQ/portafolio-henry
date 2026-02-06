<template>
  <header class="header" id="header" :class="{ 'scroll-header': isScrolled }">
    <nav class="nav container">
      <a href="#" class="nav__logo">GalvezDev</a>
      <div class="nav__menu" id="nav-menu" :class="{ 'show-menu': isMenuOpen }">
        <ul class="nav__list grid">
          <li class="nav__item">
            <a href="#home" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'home' }">
              <i class="uil uil-estate nav__icon"></i> Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'about' }">
              <i class="uil uil-user nav__icon"></i> Acerca de mí
            </a>
          </li>
          <li class="nav__item">
            <a href="#skills" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'skills' }">
              <i class="uil uil-file-alt nav__icon"></i> Habilidades
            </a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'services' }">
              <i class="uil uil-briefcase-alt nav__icon"></i> Servicios
            </a>
          </li>
          <li class="nav__item">
            <a href="#portfolio" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'portfolio' }">
              <i class="uil uil-scenery nav__icon"></i> Portafolio
            </a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'contact' }">
              <i class="uil uil-message nav__icon"></i> Contáctame
            </a>
          </li>
        </ul>
        <i class="uil uil-times nav__close" id="nav-close" @click="closeMenu"></i>
      </div>
      <div class="nav__btns">
        <!--
        <i 
          @click="$emit('toggle-theme')" 
          class="uil change-theme" 
          id="theme-button"
          :class="currentTheme === 'dark' ? 'uil-sun' : 'uil-moon'"
        ></i>
        -->

        <div class="nav__toggle" id="nav-toggle" @click="toggleMenu">
          <i class="uil uil-apps"></i>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';

// Lógica del menú móvil
const isMenuOpen = ref(false);
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;
const closeMenu = () => isMenuOpen.value = false;

// Declaramos las props y los emits
defineProps({
  activeSection: String,
  currentTheme: String,
  isScrolled: Boolean
});
defineEmits(['toggle-theme']);
</script>

<style scoped>

/* ==================== BASE ESTILOS (MOBILE-FIRST) ==================== */

.header {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--first-color-3); /* Color del CSS original para la barra inferior */
}

/* --- NAV --- */
.nav {
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__logo,
.nav__toggle {
  color: white; /* El logo y el toggle son blancos en móvil */
  font-weight: var(--font-medium);
}

.nav__logo:hover {
  color: white; /* Mantenemos el color al hacer hover */
}

.nav__toggle {
  font-size: 1.1rem;
  cursor: pointer;
}

.nav__toggle:hover {
  color: var(--first-color-lighter); /* Un color más claro al hacer hover para feedback */
}

/* --- Menú desplegable --- */
.nav__menu {
  position: fixed;
  bottom: -100%; /* Oculto por defecto */
  left: 0;
  width: 100%;
  background-color: var(--body-color);
  padding: 2rem 1.5rem 4rem;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem 1.5rem 0 0;
  transition: .3s;
  z-index: var(--z-fixed);
}

/* Clase para mostrar el menú */
.show-menu {
  bottom: 0;
}

.nav__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--small-font-size);
  color: var(--title-color); /* Color de texto para los items dentro del menú desplegable */
  font-weight: var(--font-medium);
}

/* Al estar dentro del menú desplegable, el active-link solo cambia de color */
.show-menu .active-link {
   color: var(--first-color);
   background-color: transparent;
   box-shadow: none;
   animation: none;
}

.nav__icon {
  font-size: 1.2rem;
}

.nav__close {
  position: absolute;
  right: 1.3rem;
  bottom: .5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--first-color);
}

.nav__close:hover {
  color: var(--first-color-alt);
}

/* --- Botones de Navegación (Tema) --- */
.nav__btns {
  display: flex;
  align-items: center;
}

.change-theme {
  font-size: 1.25rem;
  color: white; /* El ícono de tema es blanco en móvil */
  margin-right: var(--mb-1);
  cursor: pointer;
}

.change-theme:hover {
  color: var(--first-color-lighter);
}

/* --- Active link en la barra inferior (con animación) --- */
/* Solo se aplica cuando el menú NO está desplegado */
.active-link {
  color: white;
  background-color: hsl(var(--hue-color), 65%, 65%);
  box-shadow:
    0 -10px 0 15px hsl(var(--hue-color), 65%, 65%),
    0 10px 0 15px hsl(var(--hue-color), 65%, 65%);
  animation: showThenFade 4s ease-in-out forwards;
}

@keyframes showThenFade {
  0%, 90% { /* Muestra el efecto por un tiempo */
    background-color: hsl(var(--hue-color), 65%, 65%);
    box-shadow:
      0 -10px 0 15px hsl(var(--hue-color), 65%, 65%),
      0 10px 0 15px hsl(var(--hue-color), 65%, 65%);
  }
  100% { /* Se desvanece al final */
    background-color: transparent;
    box-shadow: none;
  }
}

/* Clase para la sombra al hacer scroll (se aplica con JS) */
.scroll-header {
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
}


/* ==================== ESTILOS PARA TABLET Y SUPERIOR (>= 768px) ==================== */
@media screen and (min-width: 768px) {
  .header {
    top: 0; /* Header arriba */
    bottom: initial;
    padding: 0 1rem;
    background-color: var(--first-color-3); /* Mantenemos el color púrpura */
  }

  .nav {
    height: calc(var(--header-height) + 1.5rem);
    column-gap: 1rem;
  }

  /* Reset y ajuste de elementos del menú */
  .nav__menu {
    position: static;
    width: auto;
    background-color: transparent;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
  }
  
  .nav__list {
    display: flex;
    column-gap: 2rem;
    margin-left: 8rem;
  }

  .nav__link {
    flex-direction: row;
    color: white; /* Letras de los enlaces en blanco */
    transition: transform 0.3s ease;
  }
  
  /* Se ocultan los elementos que no se usan en escritorio */
  .nav__icon,
  .nav__close,
  .nav__toggle {
    display: none;
  }

  .nav__link:hover {
    /* Al pasar el mouse, solo cambiamos el tamaño. Hereda el color blanco. */
    transform: scale(1.2);
  }

  .active-link {
    /* El enlace activo es grande por defecto y quitamos los estilos de móvil. */
    transform: scale(1.2);
    color: rgb(255, 255, 231) !important;
    background-color: transparent;
    box-shadow: none;
    animation: none;
  }
  
  .change-theme {
    margin: 0;
    color: white;
  }

  .nav__logo {
     color: white; /* Logo en blanco */
     transition: transform 0.3s ease; /* Añadimos también transición al logo */
  }

  .nav__logo:hover {
    transform: scale(1.05); /* Agrandamos un poco el logo al pasar el mouse */
    color: white; /* Mantenemos el color */
  }
}
</style>