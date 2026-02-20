<template>
  <Header 
    :active-section="activeSection" 
    :current-theme="theme"
    :is-scrolled="isHeaderScrolled"  @toggle-theme="toggleTheme"

  />
  
  <main class="main">
    <Home />
    <About />
    <Skills />
    <Qualification />
    <Services />
    <Portfolio />
    <!--<Project />-->
    <!--<Testimonial />-->
    <Contact />
  </main>
  
  <Footer />

  <a href="#" aria-label="scroll-up" class="scrollup" id="scroll-up" :class="{ 'show-scroll': showScrollBtn }">
    <i class="uil uil-arrow-up scrollup__icon"></i>
  </a>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

// Importamos todos los componentes
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Qualification from './components/Qualification.vue'
import Services from './components/Services.vue'
import Portfolio from './components/Portfolio.vue'
import Project from './components/Project.vue'
import Testimonial from './components/Testimonial.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

// Importamos los estilos globales


// --- LÓGICA REACTIVA GLOBAL ---

// 2. Variable para el botón de scroll (ya la teníamos)
const showScrollBtn = ref(false);
// 3. NUEVA: Variable para saber qué sección está activa
const activeSection = ref('home');
// 4. NUEVA: Variable para el tema (light/dark)
const theme = ref('light');
const isHeaderScrolled = ref(false);
// 5. NUEVA: Función para cambiar el tema
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  localStorage.setItem('selected-theme', theme.value);
};

// 6. Usamos watch para reaccionar a los cambios en la variable 'theme'
watch(theme, (newTheme) => {
  if (newTheme === 'dark') {
    document.body.classList.add('dark-theme');
  } else {
    document.body.classList.remove('dark-theme');
  }
});

// 7. Función de scroll MEJORADA con mejor offset
const handleScroll = () => {
  // Lógica para el botón de scroll
  showScrollBtn.value = window.scrollY >= 560;
  isHeaderScrolled.value = window.scrollY >= 80;
  
  // Lógica para la sección activa con MEJOR OFFSET
  const scrollY = window.scrollY;
  const sections = document.querySelectorAll('section[id]');
  
  // Calculamos el offset del header (diferente en mobile vs desktop)
  const isMobile = window.innerWidth < 768;
  const headerOffset = isMobile ? 100 : 150;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - headerOffset;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      activeSection.value = sectionId;
    }
  });
};

// 8. En onMounted, ahora también leemos el tema guardado en localStorage
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();

  const savedTheme = localStorage.getItem('selected-theme');
  if (savedTheme) {
    theme.value = savedTheme;
  }

// ==================== MOBILE HOVER FIX ====================
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  document.addEventListener('touchend', (e) => {
    const btn = e.target.closest('.button, .home__social-icon, .portfolio__expand-button');
    if (!btn) return;

    // Excluir solo los botones dentro de contact__buttons — en Android vuelven solos
    if (btn.closest('.contact__buttons')) return;

    setTimeout(() => {
      const parent = btn.parentNode;
      if (!parent) return;

      const isDownloadBtn = btn.classList.contains('button--outline') &&
                            btn.querySelector('.button__icon');
      
      const firstColorValue = isDownloadBtn
        ? getComputedStyle(document.documentElement).getPropertyValue('--first-color').trim()
        : null;

      const computed = window.getComputedStyle(btn);
      btn.style.backgroundColor = computed.backgroundColor;
      btn.style.color = computed.color;
      btn.style.borderColor = computed.borderColor;
      btn.style.transform = computed.transform;
      btn.style.boxShadow = computed.boxShadow;
      btn.style.paddingRight = computed.paddingRight;

      const children = btn.querySelectorAll('*');
      children.forEach(child => {
        const cs = window.getComputedStyle(child);
        child.style.color = cs.color;
        child.style.maxWidth = cs.maxWidth;
        child.style.opacity = cs.opacity;
        child.style.marginLeft = cs.marginLeft;
      });

      const ghost = btn.cloneNode(true);
      ghost.style.cssText = '';
      ghost.style.position = 'absolute';
      ghost.style.visibility = 'hidden';
      ghost.style.pointerEvents = 'none';
      ghost.classList.add('no-hover-state');
      document.body.appendChild(ghost);

      const ng = window.getComputedStyle(ghost);
      const normalBg = ng.backgroundColor;
      const normalColor = ng.color;
      const normalBorder = ng.borderColor;
      const normalTransform = ng.transform;
      const normalShadow = ng.boxShadow;
      const normalPaddingRight = ng.paddingRight;

      const ghostChildren = ghost.querySelectorAll('*');
      const normalChildStyles = Array.from(ghostChildren).map(child => {
        const s = window.getComputedStyle(child);
        return { 
          color: s.color, 
          maxWidth: s.maxWidth, 
          opacity: s.opacity,
          marginLeft: s.marginLeft
        };
      });
      document.body.removeChild(ghost);

      const t = 'all 0.6s ease';
      btn.style.transition = t;
      children.forEach(child => {
        child.style.transition = t;
      });

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          btn.style.backgroundColor = normalBg;
          btn.style.color = normalColor;
          btn.style.borderColor = normalBorder;
          btn.style.transform = normalTransform;
          btn.style.boxShadow = normalShadow;
          btn.style.paddingRight = normalPaddingRight;

          children.forEach((child, i) => {
            if (normalChildStyles[i]) {
              const isIcon = child.classList.contains('button__icon');
              if (isIcon) {
                const iconColor = (isDownloadBtn && firstColorValue)
                  ? firstColorValue
                  : normalChildStyles[i].color;
                child.setAttribute('style', 
                  `color: ${iconColor} !important; transition: all 0.6s ease !important;`
                );
              } else {
                child.style.color = normalChildStyles[i].color;
                child.style.maxWidth = normalChildStyles[i].maxWidth;
                child.style.opacity = normalChildStyles[i].opacity;
                child.style.marginLeft = normalChildStyles[i].marginLeft;
              }
            }
          });

          setTimeout(() => {
            const clone = btn.cloneNode(true);
            clone.style.cssText = '';
            clone.querySelectorAll('*').forEach(child => {
              child.style.cssText = '';
              child.removeAttribute('style');
            });
            parent.replaceChild(clone, btn);
          }, 650);
        });
      });

    }, 1500);

  }, { passive: true });
}});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.main {
  overflow-x: hidden;
  margin-top: 0;
}

.scrollup {
  position: fixed;
  right: 1rem;
  bottom: -20%;
  background-color: var(--first-color);
  opacity: .92;
  padding: 0 .3rem;
  border-radius: .4rem;
  z-index: var(--z-tooltip);
  transition: .4s;
}

.scrollup:hover {
  background-color: var(--first-color-alt);
}

.scrollup__icon {
  font-size: 1.5rem;
  color: #fff;
}

.show-scroll {
  bottom: 3.6rem;
}

@media screen and (min-width: 768px) {
  .show-scroll {
    bottom: 3rem;
  }
}
</style>