// Header.vue

<template>
  <header class="header" id="header" :class="{ 'scroll-header': isScrolled }">
    <nav class="nav container">
      <a href="#" class="nav__logo">GalvezDev</a>
      <div class="nav__menu" id="nav-menu" :class="{ 'show-menu': isMenuOpen }">
        <ul class="nav__list grid">
          <li class="nav__item">
            <a href="#home" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'home' }">
              <UilIcon name="estate" class="nav__icon" /> {{ t('nav.home') }}
            </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'about' }">
              <UilIcon name="user" class="nav__icon" /> {{ t('nav.about') }}
            </a>
          </li>
          <li class="nav__item">
            <a href="#skills" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'skills' }">
              <UilIcon name="brackets-curly" class="nav__icon" /> {{ t('nav.skills') }}
            </a>
          </li>
          <li class="nav__item">
            <a href="#qualification" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'qualification' }">
              <UilIcon name="history" class="nav__icon" /> {{ t('nav.qualification') }}
            </a>
          </li>
          <li class="nav__item">
            <a href="#services" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'services' }">
              <UilIcon name="briefcase-alt" class="nav__icon" /> {{ t('nav.services') }}
            </a>
          </li>
          <li class="nav__item">
            <a href="#portfolio" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'portfolio' }">
              <UilIcon name="scenery" class="nav__icon" /> {{ t('nav.portfolio') }}
            </a>
          </li>
          <li class="nav__item">
            <a href="#contact" class="nav__link" @click="closeMenu" :class="{ 'active-link': activeSection === 'contact' }">
              <UilIcon name="message" class="nav__icon" /> {{ t('nav.contact') }}
            </a>
          </li>
        </ul>
        <UilIcon name="times" class="nav__close" id="nav-close" @click="closeMenu" />
      </div>

      <div class="nav__btns">

        <!-- Language Switcher -->
        <div
          class="lang__switcher"
          :class="{ 'lang__switcher--active': isLangOpen }"
          @mouseenter="onLangMouseEnter"
          @mouseleave="onLangMouseLeave"
          @click="onLangClick"
          ref="langSwitcher"
        >
          <UilIcon name="english-to-chinese" class="lang__icon" />
          <span class="lang__label">{{ currentLang }}</span>
          <UilIcon :name="isLangOpen ? 'angle-down' : 'angle-up'" class="lang__arrow" />

          <div
            class="lang__dropdown"
            :class="{ 'lang__dropdown--open': isLangOpen }"
            @mouseenter="onDropdownMouseEnter"
            @mouseleave="onDropdownMouseLeave"
          >
            <div
              class="lang__option"
              :class="{ 'lang__option--active': currentLang === 'ES' }"
              @click.stop="selectLang('ES')"
            >
              <span>ES</span>
              <UilIcon v-if="currentLang === 'ES'" name="check" class="lang__check" />
            </div>
            <div
              class="lang__option"
              :class="{ 'lang__option--active': currentLang === 'EN' }"
              @click.stop="selectLang('EN')"
            >
              <span>EN</span>
              <UilIcon v-if="currentLang === 'EN'" name="check" class="lang__check" />
            </div>
          </div>
        </div>
        <!-- End Language Switcher -->

        <!-- Nav Toggle (mobile menu) -->
        <div class="nav__toggle" id="nav-toggle" @click="toggleMenu">
          <UilIcon name="list-ul" />
        </div>

        <!-- Theme Switch Button -->
        <button
          class="theme-switch"
          :class="{ 'theme-switch--dark': currentTheme === 'dark' }"
          @click="$emit('toggle-theme')"
          :aria-label="currentTheme === 'dark' ? t('theme.toLight') : t('theme.toDark')"
        >
          <span class="theme-switch__track">
            <span class="theme-switch__thumb">
              <UilIcon :name="currentTheme === 'dark' ? 'moon' : 'sun'" />
            </span>
          </span>
        </button>
        <!-- End Theme Switch Button -->

      </div>
    </nav>
  </header>
</template>

<script setup>
import UilIcon from '@/components/UilIcon.vue'
import { ref, watch,onMounted, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n({ inheritLocale: true, useScope: 'local' })
const { locale } = useI18n({ useScope: 'global' })

const isMenuOpen = ref(false);
const toggleMenu = () => isMenuOpen.value = !isMenuOpen.value;

const currentLang = ref(locale.value === 'en' ? 'EN' : 'ES');

// Sincronizar document.documentElement.lang con el locale activo
onMounted(() => {
  document.documentElement.lang = locale.value;
});

watch(locale, (newLocale) => {
  document.documentElement.lang = newLocale;
});

const isLangOpen = ref(false);
const langSwitcher = ref(null);

// Rastrear si el mouse está sobre el trigger o el dropdown
const isOverTrigger = ref(false);
const isOverDropdown = ref(false);

const isDesktop = () => window.innerWidth >= 768;

// ── Handlers de hover en desktop ────────────────────────────────────
const onLangMouseEnter = () => {
  if (!isDesktop()) return;
  isOverTrigger.value = true;
  isLangOpen.value = true;
};

const onLangMouseLeave = () => {
  if (!isDesktop()) return;
  isOverTrigger.value = false;
  // Solo cerrar si el mouse tampoco está sobre el dropdown
  if (!isOverDropdown.value) {
    isLangOpen.value = false;
  }
};

const onDropdownMouseEnter = () => {
  if (!isDesktop()) return;
  isOverDropdown.value = true;
  isLangOpen.value = true;
};

const onDropdownMouseLeave = () => {
  if (!isDesktop()) return;
  isOverDropdown.value = false;
  if (!isOverTrigger.value) {
    isLangOpen.value = false;
  }
};

// ── Handler de click en mobile ──────────────────────────────────────
// En desktop se usa hover, en mobile se usa click para abrir/cerrar.
// handleOutsideMouseDown usa 'mousedown' para dispararse antes que 'click',
// evitando la condición de carrera en el primer tap al cargar la página.
const onLangClick = () => {
  if (isDesktop()) return; // en desktop se controla con hover
  isLangOpen.value = !isLangOpen.value;
};

const selectLang = (lang) => {
  currentLang.value = lang;
  locale.value = lang === 'ES' ? 'es' : 'en';
  isLangOpen.value = false;
  isOverTrigger.value = false;
  isOverDropdown.value = false;
};

// Se usa 'mousedown' en lugar de 'click' para que este handler se ejecute
// antes que el click del propio elemento, evitando que el primer tap en
// mobile abra y cierre el dropdown en el mismo evento.
const handleOutsideMouseDown = (e) => {
  if (langSwitcher.value && !langSwitcher.value.contains(e.target)) {
    isLangOpen.value = false;
    isOverTrigger.value = false;
    isOverDropdown.value = false;
  }
};

onMounted(() => document.addEventListener('mousedown', handleOutsideMouseDown));
onBeforeUnmount(() => document.removeEventListener('mousedown', handleOutsideMouseDown));

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

      if (targetId === 'qualification') {
        window.dispatchEvent(new CustomEvent('nav-to-qualification'));

        document.querySelectorAll('#skills .skills__open').forEach(el => {
          el.classList.remove('skills__open');
          el.classList.add('skills__close');
          const list = el.querySelector('.skills__list');
          if (list) {
            list.style.transition = 'none';
            list.style.maxHeight = '0';
          }
        });

        void document.body.offsetHeight;

        scrollTimeouts.push(setTimeout(() => {
          document.querySelectorAll('#skills .skills__list').forEach(el => {
            el.style.transition = '';
            el.style.maxHeight = '';
          });

          const el = document.getElementById('qualification');
          const headerEl = document.getElementById('header');
          if (!el) return;

          const isDesktopView = window.innerWidth >= 768;
          const headerH = isDesktopView && headerEl ? headerEl.offsetHeight : 0;
          const extraOffset = isDesktopView ? 72 : 0;

          window.scrollTo({
            top: el.offsetTop - headerH + extraOffset,
            behavior: 'smooth'
          });
        }, 120));

        return;
      }

      if (targetId === 'skills') {
        window.dispatchEvent(new CustomEvent('nav-to-skills'));
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }

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
  font-size: 1.5rem;
  cursor: pointer;
}
.nav__toggle:hover { color: var(--first-color-lighter); }

.nav__menu {
  position: fixed;
  bottom: -100%;
  left: 0;
  width: 100%;
  min-height: 203px;
  background-color: var(--body-color);
  padding: 2rem 1.5rem 4rem;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
  border-radius: 1.5rem 1.5rem 0 0;
  transition: .3s;
  z-index: var(--z-fixed);
}
.show-menu { bottom: 0; }

.nav__menu .nav__list {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
  right: 1.5rem;
  display: grid !important;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem 2rem;
}

.nav__item:last-child {
  grid-column: 2;
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

/* ── nav__btns: mobile order → lang | toggle | switch ──────── */
.nav__btns {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Mobile order */
.lang__switcher { order: 1; }
.nav__toggle    { order: 2; }
.theme-switch   { order: 3; }

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

/* ── Theme Switch Button ────────────────────────────────────── */
.theme-switch {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.theme-switch__track {
  position: relative;
  display: flex;
  align-items: center;
  width: 40px;
  height: 18px;
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.25);
  border: 1.5px solid rgba(255, 255, 255, 0.45);
  transition: background-color 0.35s ease, border-color 0.35s ease;
  box-sizing: border-box;
  flex-shrink: 0;
  overflow: visible;
}

.theme-switch--dark .theme-switch__track {
  background-color: rgba(0, 0, 0, 0.35);
  border-color: rgba(255, 255, 255, 0.2);
}

.theme-switch__thumb {
  position: absolute;
  left: -2px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.35s ease;
  transform: translateX(0);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
}

.theme-switch--dark .theme-switch__thumb {
  transform: translateX(17px);
  background-color: hsl(var(--hue-color), 65%, 20%);
}

.theme-switch__thumb svg {
  font-size: 0.9rem;
  width: 0.9rem;
  height: 0.9rem;
  color: hsl(var(--hue-color), 65%, 45%);
  transition: color 0.35s ease;
  filter: drop-shadow(0 0 0.1px currentColor);
}

.theme-switch--dark .theme-switch__thumb svg {
  color: #fff;
}

.theme-switch:hover .theme-switch__track {
  border-color: rgba(255, 255, 255, 0.7);
}
/* ─────────────────────────────────────────────────────────── */

/* ── Language Switcher ─────────────────────────────────────── */
.lang__switcher {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  cursor: pointer;
  color: white;
  user-select: none;
}
.lang__icon { 
  font-size: 1.25rem;
  filter: drop-shadow(0 0 0.3px currentColor);
 }
.lang__label {
  font-size: 0.8rem;
  font-weight: var(--font-medium);
  letter-spacing: 0.03em;
}
.lang__arrow {
  font-size: 1rem;
  transition: transform 0.2s ease;
  filter: drop-shadow(0 0 0.3px currentColor);
}
.lang__switcher--active .lang__icon,
.lang__switcher--active .lang__label,
.lang__switcher--active .lang__arrow {
  color: var(--first-color-lighter);
}
.lang__dropdown {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%) scaleY(0);
  transform-origin: bottom center;
  background-color: var(--body-color);
  border: 1px solid var(--border-color); /* antes hardcodeado */
  border-radius: 0.5rem;
  overflow: hidden;
  min-width: 72px;
  box-shadow: 0 -4px 12px rgba(0,0,0,0.15);
  transition: transform 0.2s ease, opacity 0.2s ease;
  opacity: 0;
  pointer-events: none;
  z-index: calc(var(--z-fixed) + 10);
}
.lang__dropdown--open {
  transform: translateX(-50%) scaleY(1);
  opacity: 1;
  pointer-events: all;
}
.lang__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.9rem;
  font-size: 0.82rem;
  font-weight: var(--font-medium);
  color: var(--title-color);
  transition: background-color 0.15s;
}
.lang__option:hover {
  background-color: var(--input-color); /* antes hardcodeado con hsl */
}
.lang__option--active { color: var(--first-color); }
.lang__check {
  font-size: 0.9rem;
  color: var(--first-color);
  margin-left: 0.4rem;
}
/* ─────────────────────────────────────────────────────────── */
@media screen and (max-width: 767px) {
  .nav__toggle svg {
    width: 1.5rem;
    height: 1.5rem;
    display: block;
    filter: drop-shadow(0 0 0.3px currentColor);
  }
}
/* ── DESKTOP ────────────────────────────────────────────────── */
@media screen and (min-width: 768px) {
  .header {
    top: 0;
    bottom: initial;
    padding: 0 2rem;
    background-color: var(--first-color-3);
  }
  .nav {
    max-width: 1110px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: calc(var(--header-height) + 1.5rem);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav__menu {
    position: static;
    flex: 1;
    display: flex;
    justify-content: center;
    background-color: transparent;
    padding: 0;
    box-shadow: none;
    border-radius: 0;
    min-height: unset;
  }
  .nav__menu .nav__list {
    position: static !important;
    bottom: unset !important;
    left: unset !important;
    right: unset !important;
    display: flex !important;
    flex-direction: row;
    column-gap: 2rem !important;
    gap: 0 2rem !important;
    margin-left: 0;
    grid-template-columns: unset;
  }
  .nav__item:last-child {
    grid-column: unset;
  }
  .nav__link {
    flex-direction: row;
    color: white;
    transition: transform 0.3s ease;
    white-space: nowrap;
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
  .nav__logo {
    color: white;
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }
  .nav__logo:hover {
    transform: scale(1.05);
    color: white;
  }
  .nav__btns {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
  }

  /* Desktop order → lang | switch */
  .lang__switcher { order: 1; }
  .nav__toggle    { order: 2; } /* oculto en desktop */
  .theme-switch   {
    order: 3;
    margin-left: 0.75rem;
  }

  /* ── Dropdown en desktop: se abre hacia abajo ── */
  .lang__dropdown {
    bottom: auto;
    top: calc(100% + 8px);
    transform: translateX(-50%) scaleY(0);
    transform-origin: top center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  .lang__dropdown--open {
    transform: translateX(-50%) scaleY(1);
  }

  /*
   * Puente invisible entre el trigger y el dropdown.
   * Cubre el hueco de 8px para que al mover el mouse del trigger al dropdown
   * no se salga de ambas zonas hover al mismo tiempo y cierre el menú.
   */
  .lang__switcher::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    /* suficiente para cubrir el gap (8px) más un margen de seguridad */
    height: 12px;
    /* transparente — solo actúa como área de hit */
    background: transparent;
  }

  .theme-switch__track {
    transition: background-color 0.35s ease, border-color 0.35s ease, transform 0.3s ease;
  }
  .theme-switch:hover .theme-switch__track {
    transform: scale(1.2);
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "nav": {
      "home": "Home",
      "about": "Acerca de mí",
      "skills": "Habilidades",
      "qualification": "Experiencia",
      "services": "Servicios",
      "portfolio": "Portafolio",
      "contact": "Contáctame"
    },
    "theme": {
      "toDark": "Activar modo oscuro",
      "toLight": "Activar modo claro"
    }
  },
  "en": {
    "nav": {
      "home": "Home",
      "about": "About me",
      "skills": "Skills",
      "qualification": "Experience",
      "services": "Services",
      "portfolio": "Portfolio",
      "contact": "Contact me"
    },
    "theme": {
      "toDark": "Enable dark mode",
      "toLight": "Enable light mode"
    }
  }
}
</i18n>