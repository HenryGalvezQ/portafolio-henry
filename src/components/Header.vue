<template>
  <header class="header" id="header">
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
              <i class="uil uil-user nav__icon"></i> About
            </a>
          </li>
          <li class="nav__item">
            <a href="#skills" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'skills' }">
              <i class="uil uil-file-alt nav__icon"></i> Skills
            </a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'services' }">
              <i class="uil uil-briefcase-alt nav__icon"></i> Services
            </a>
          </li>
          <li class="nav__item">
            <a href="#portfolio" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'portfolio' }">
              <i class="uil uil-scenery nav__icon"></i> Portfolio
            </a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'contact' }">
              <i class="uil uil-message nav__icon"></i> ContactMe
            </a>
          </li>
        </ul>
        <i class="uil uil-times nav__close" id="nav-close" @click="closeMenu"></i>
      </div>
      <div class="nav__btns">
        <i 
          @click="$emit('toggle-theme')" 
          class="uil change-theme" 
          id="theme-button"
          :class="currentTheme === 'dark' ? 'uil-sun' : 'uil-moon'"
        ></i>

        <div class="nav__toggle" id="nav-toggle" @click="openMenu">
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
const openMenu = () => isMenuOpen.value = true;
const closeMenu = () => isMenuOpen.value = false;

// Declaramos las props y los emits
defineProps({
  activeSection: String,
  currentTheme: String
});
defineEmits(['toggle-theme']);
</script>
<style scoped>
/* ESTILOS BASE (ESCRITORIO) */
.header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
}

.nav {
  height: calc(var(--header-height) + 1.5rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
}

.nav__logo,
.nav__toggle {
  color: var(--title-color);
  font-weight: var(--font-medium);
}

.nav__logo:hover {
  color: var(--first-color);
}

.nav__list {
  display: flex;
  column-gap: 2rem;
}

.nav__link {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: var(--small-font-size);
  color: var(--title-color);
  font-weight: var(--font-medium);
  transition: .3s;
}

.nav__link:hover,
.active-link {
  color: var(--first-color);
}

.nav__icon,
.nav__close,
.nav__toggle {
  display: none;
}

.nav__btns {
  display: flex;
  align-items: center;
}

.change-theme {
  font-size: 1.25rem;
  color: var(--title-color);
  margin-right: var(--mb-1);
  cursor: pointer;
}

.change-theme:hover {
  color: var(--first-color);
}

/*==================== ESTILOS PARA MÓVILES (Réplica del original) ====================*/
@media screen and (max-width: 767px) {
  .header {
    top: initial;
    bottom: 0;
    /* Color de fondo del original */
    background-color: var(--first-color-3, hsl(var(--hue-color), 69%, 66%));
  }

  .nav {
    height: var(--header-height);
  }

  .nav__menu {
    position: fixed;
    bottom: -100%;
    left: 0;
    width: 100%;
    background-color: var(--body-color);
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: .3s;
  }
  
  .show-menu {
    bottom: 0;
  }

  .nav__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  .nav__link {
    /* Los enlaces dentro del menú desplegable tienen el color del tema */
    color: var(--title-color);
  }

  .nav__icon {
    font-size: 1.2rem;
  }
  
  /* Efecto hover y activo DENTRO del menú desplegable */
  .nav__menu .nav__link:hover,
  .nav__menu .active-link {
     color: var(--first-color);
     /* Importante: Reseteamos los estilos de cápsula aquí para que no apliquen dentro del menú */
     background-color: transparent;
     box-shadow: none;
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
  
  .nav__toggle {
    color: white; /* Ícono del toggle en blanco */
    font-size: 1.1rem;
    cursor: pointer;
  }
  
  /* Hacemos visibles los íconos y botones de menú en móvil */
  .nav__icon,
  .nav__close,
  .nav__toggle {
    display: block;
  }
  
  /* ESTILOS DE LA BARRA INFERIOR (No del menú desplegable) */
  /* Aquí aplicamos los estilos de cápsula del original al NAV principal en móvil */
  .nav:not(.nav__menu) .nav__link {
    color: white;
  }
  
  .nav:not(.nav__menu) .active-link {
    color: white;
    background-color: hsl(var(--hue-color), 65%, 65%);
    box-shadow:
      0 -10px 0 15px hsl(var(--hue-color), 65%, 65%),
      0 10px 0 15px hsl(var(--hue-color), 65%, 65%);
    animation: showThenFade 4s ease-in-out forwards;
  }
  
  @keyframes showThenFade {
    0%, 100% {
      background-color: transparent;
      box-shadow: none;
    }
  }
}
</style>