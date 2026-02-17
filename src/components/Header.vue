// ============================================================
// CAMBIO 1: Header.vue  (reemplaza tu Header.vue completo)
// ============================================================

// header.vue

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
            <a href="#qualification" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'qualification' }">
              <i class="uil uil-file-alt nav__icon"></i> Experiencia
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

const isMenuOpen = ref(false);
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;

let scrollTimeouts = [];

const closeMenu = (event) => {
  isMenuOpen.value = false;

  scrollTimeouts.forEach(id => clearTimeout(id));
  scrollTimeouts = [];

  const href = event.target.closest('a')?.getAttribute('href');
  if (href && href.startsWith('#')) {
    event.preventDefault();

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const sectionsWithoutCollapse = ['home', 'about'];

      // ─── CASO ESPECIAL: qualification ────────────────────────────────────────
      // El IntersectionObserver de Skills.vue abre los acordeones cuando skills
      // está en el viewport. Esto ocurre tanto si ya están abiertos (desde skills)
      // como si se abren DURANTE el scroll hacia qualification (desde home/about).
      // En ambos casos el layout se infla ~457px y el destino queda incorrecto.
      //
      // Solución en dos pasos:
      // 1. Disparar evento 'nav-to-qualification' para que Skills.vue desconecte
      //    su IntersectionObserver temporalmente (ya no abrirá acordeones).
      // 2. Colapsar los que estén abiertos, esperar su transición (420ms),
      //    leer offsetTop estable y hacer el scroll.
      // Skills.vue reconecta su observer 1.5s después (ya pasó el scroll).
      if (targetId === 'qualification') {
        window.dispatchEvent(new CustomEvent('nav-to-qualification'));

        // ✅ QUIRÚRGICO: colapsar sin transición, forzando max-height:0 inline
        document.querySelectorAll('#skills .skills__open').forEach(el => {
          el.classList.remove('skills__open');
          el.classList.add('skills__close');
          // Forzar max-height:0 instantáneo saltando la transición CSS
          const list = el.querySelector('.skills__list');
          if (list) {
            list.style.transition = 'none';
            list.style.maxHeight = '0';
          }
        });

        // Forzar reflow para que el DOM refleje el colapso instantáneo
        void document.body.offsetHeight;

        scrollTimeouts.push(setTimeout(() => {
          // Restaurar transiciones para uso futuro
          document.querySelectorAll('#skills .skills__list').forEach(el => {
            el.style.transition = '';
            el.style.maxHeight = '';
          });

          const el = document.getElementById('qualification');
          const headerEl = document.getElementById('header');
          if (!el) return;

          const isDesktop = window.innerWidth >= 768;
          const headerH = isDesktop && headerEl ? headerEl.offsetHeight : 0;
          const extraOffset = isDesktop ? 72 : 0;

          window.scrollTo({
            top: el.offsetTop - headerH + extraOffset,
            behavior: 'smooth'
          });
        }, 120));

        return;
      }
      // ─────────────────────────────────────────────────────────────────────────
      // ─── CASO ESPECIAL: skills (volver desde qualification) ──────────────────
      if (targetId === 'skills') {
        window.dispatchEvent(new CustomEvent('nav-to-skills'));
        
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
// ─────────────────────────────────────────────────────────────────────────
      // Resto de secciones: lógica original sin cambios
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

      if (!sectionsWithoutCollapse.includes(targetId)) {
        const currentScrollY = window.scrollY;
        const targetOffsetTop = targetElement.offsetTop;
        const isScrollingDown = targetOffsetTop > currentScrollY;

        if (isScrollingDown) {
          scrollTimeouts.push(setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 600));

          scrollTimeouts.push(setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 1000));
        }
      }
    }
  }
};

defineProps({
  activeSection: String,
  currentTheme: String,
  isScrolled: Boolean
});
defineEmits(['toggle-theme']);
</script>

<style scoped>
.header {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--first-color-3);
}
.nav {
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__logo,
.nav__toggle {
  color: white;
  font-weight: var(--font-medium);
}
.nav__logo:hover { color: white; }
.nav__toggle {
  font-size: 1.1rem;
  cursor: pointer;
}
.nav__toggle:hover { color: var(--first-color-lighter); }
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
  z-index: var(--z-fixed);
}
.show-menu { bottom: 0; }
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
  color: var(--title-color);
  font-weight: var(--font-medium);
}
.show-menu .active-link {
  color: var(--first-color);
  background-color: transparent;
  box-shadow: none;
  animation: none;
}
.nav__icon { font-size: 1.2rem; }
.nav__close {
  position: absolute;
  right: 1.3rem;
  bottom: .5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--first-color);
}
.nav__close:hover { color: var(--first-color-alt); }
.nav__btns {
  display: flex;
  align-items: center;
}
.change-theme {
  font-size: 1.25rem;
  color: white;
  margin-right: var(--mb-1);
  cursor: pointer;
}
.change-theme:hover { color: var(--first-color-lighter); }
.active-link {
  color: white;
  background-color: hsl(var(--hue-color), 65%, 65%);
  box-shadow:
    0 -10px 0 15px hsl(var(--hue-color), 65%, 65%),
    0 10px 0 15px hsl(var(--hue-color), 65%, 65%);
  animation: showThenFade 4s ease-in-out forwards;
}
@keyframes showThenFade {
  0%, 90% {
    background-color: hsl(var(--hue-color), 65%, 65%);
    box-shadow:
      0 -10px 0 15px hsl(var(--hue-color), 65%, 65%),
      0 10px 0 15px hsl(var(--hue-color), 65%, 65%);
  }
  100% {
    background-color: transparent;
    box-shadow: none;
  }
}
.scroll-header { box-shadow: 0 -1px 4px rgba(0, 0, 0, .15); }

@media screen and (min-width: 768px) {
  .header {
    top: 0;
    bottom: initial;
    padding: 0 1rem;
    background-color: var(--first-color-3);
  }
  .nav {
    height: calc(var(--header-height) + 1.5rem);
    column-gap: 1rem;
  }
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
    color: white;
    transition: transform 0.3s ease;
  }
  .nav__icon,
  .nav__close,
  .nav__toggle { display: none; }
  .nav__link:hover { transform: scale(1.2); }
  .active-link {
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
    color: white;
    transition: transform 0.3s ease;
  }
  .nav__logo:hover {
    transform: scale(1.05);
    color: white;
  }
}
</style>