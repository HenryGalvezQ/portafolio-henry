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
  const headerOffset = isMobile ? 100 : 150; // Offset más grande para compensar desplegables
  
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
  // Llamamos a handleScroll inmediatamente para detectar la sección inicial
  handleScroll();
  
  const savedTheme = localStorage.getItem('selected-theme');
  if (savedTheme) {
    theme.value = savedTheme;
  }
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.main {
  overflow-x: hidden; /* Opcional, si es necesario */
  margin-top: 0; /* <--- Añade esta línea para subir todo */
}

.scrollup {
  position: fixed;
  right: 1rem;
  bottom: -20%;
  background-color: var(--first-color);
  opacity: .8;
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

/* Media Queries para el botón de scroll */
@media screen and (min-width: 768px) {
  .show-scroll {
    bottom: 3rem;
  }
}
</style>