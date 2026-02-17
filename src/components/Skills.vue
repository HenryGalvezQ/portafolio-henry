<template>
  <section class="skills section" id="skills">
    <h2 class="section__title">Habilidades</h2>
    <span class="section__subtitle">Mi Nivel Técnico</span>
    
    <div class="skills__container container grid">
      
      <div :class="['skills__content', skillsState.frontend ? 'skills__open' : 'skills__close']" ref="frontendSkill" data-skill="frontend">
        <div class="skills__header" @click="toggleSkill('frontend')">
          <i class="uil uil-brackets-curly skills__icon"></i>
          <div>
            <h1 class="skills__title">Frontend Development</h1>
            <span class="skills__subtitle">Mi especialidad principal</span>
          </div>
          <i class="uil uil-angle-down skills__arrow"></i>
        </div>

        <div class="skills__list skills__list--grid grid">
          <div v-for="skill in frontendSkills" :key="skill.name" class="skills__data skills__data--icon">
            <SvgIcon :name="skill.iconName" />
            <h3 class="skills__name">{{ skill.name }}</h3>
          </div>
        </div>
      </div>

      <div :class="['skills__content', skillsState.mobile ? 'skills__open' : 'skills__close']" ref="mobileSkill" data-skill="mobile">
        <div class="skills__header" @click="toggleSkill('mobile')">
          <i class="uil uil-mobile-android skills__icon"></i>
          <div>
            <h1 class="skills__title">Desarrollo Móvil</h1>
            <span class="skills__subtitle">Aplicaciones Nativas & Híbridas</span>
          </div>
          <i class="uil uil-angle-down skills__arrow"></i>
        </div>

        <div class="skills__list skills__list--grid grid">
          <div v-for="skill in mobileSkills" :key="skill.name" class="skills__data skills__data--icon">
            <SvgIcon :name="skill.iconName" />
            <h3 class="skills__name">{{ skill.name }}</h3>
          </div>
        </div>
      </div>

      <div :class="['skills__content', skillsState.backend ? 'skills__open' : 'skills__close']" ref="backendSkill" data-skill="backend">
        <div class="skills__header" @click="toggleSkill('backend')">
          <i class="uil uil-database skills__icon"></i>
          <div>
            <h1 class="skills__title">Backend y Bases de Datos</h1>
            <span class="skills__subtitle">Lógica de servidor y datos</span>
          </div>
          <i class="uil uil-angle-down skills__arrow"></i>
        </div>
        
        <div class="skills__list skills__list--grid grid">
          <div v-for="skill in backendSkills" :key="skill.name" class="skills__data skills__data--icon">
            <SvgIcon :name="skill.iconName" />
            <h3 class="skills__name">{{ skill.name }}</h3>
          </div>
        </div>
      </div>

      <div :class="['skills__content', skillsState.devops ? 'skills__open' : 'skills__close']" ref="devopsSkill" data-skill="devops">
        <div class="skills__header" @click="toggleSkill('devops')">
          <i class="uil uil-server-network skills__icon"></i>
          <div>
            <h1 class="skills__title">Programación y DevOps</h1>
            <span class="skills__subtitle">Lenguajes y Arquitectura</span>
          </div>
          <i class="uil uil-angle-down skills__arrow"></i>
        </div>
        
        <div class="skills__list skills__list--grid grid">
          <div v-for="skill in devopsSkills" :key="skill.name" class="skills__data skills__data--icon">
            <SvgIcon :name="skill.iconName" />
            <h3 class="skills__name">{{ skill.name }}</h3>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'Skills',
  components: {
    SvgIcon
  },
  data() {
    return {
      // 1. Frontend
      frontendSkills: [
        { name: 'Figma', iconName: 'figma' },
        { name: 'HTML', iconName: 'html' },
        { name: 'CSS', iconName: 'css' },
        { name: 'JavaScript', iconName: 'javascript' },
        { name: 'TypeScript', iconName: 'typescript' },
        { name: 'Vue.js', iconName: 'vue' },
        { name: 'React', iconName: 'react' },
        { name: 'Nuxt', iconName: 'nuxt' },
      ],
      // 2. Mobile
      mobileSkills: [
        { name: 'Kotlin', iconName: 'kotlin' },
        { name: 'Flutter', iconName: 'flutter' },
        { name: 'React Native', iconName: 'react' },
      ],
      // 3. Backend
      backendSkills: [
        { name: 'PHP', iconName: 'php' },
        { name: 'Flask', iconName: 'flask' },
        { name: 'Firebase', iconName: 'firebase' },
        { name: 'MySQL', iconName: 'mysql' },
        { name: 'PostgreSQL', iconName: 'postgresql' },
      ],
      // 4. DevOps
      devopsSkills: [
        { name: 'Python', iconName: 'python' },
        { name: 'Java', iconName: 'java' },
        { name: 'C#', iconName: 'csharp' },
        { name: 'C++', iconName: 'cplusplus' },
        { name: 'AWS', iconName: 'aws' },
        { name: 'Docker', iconName: 'docker' },
      ],
      skillsState: {
        frontend: false,
        mobile: false,
        backend: false,
        devops: false,
      },
      observer: null,
      // Se eliminó userHasClicked para permitir que el scroll siempre funcione
    };
  },
  methods: {
    toggleSkill(skill) {
      // Si el usuario hace click, simplemente invertimos el estado actual.
      // El scroll se encargará de resetearlo si se aleja.
      this.skillsState[skill] = !this.skillsState[skill];
    }
  },
  mounted() {
    const options = {
      root: null,
      // Ajustamos el margen para que reaccione un poco antes de que el elemento salga del todo
      rootMargin: '-10% 0px -10% 0px', 
      threshold: 0.1, // Basta con que se vea un 10% para activarse
    };
    
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const skillName = entry.target.dataset.skill;
        if (skillName) {
            // LÓGICA CLAVE:
            // Asigna directamente el estado de intersección.
            // Si entra (isIntersecting = true) -> se abre.
            // Si sale (isIntersecting = false) -> se cierra.
            this.skillsState[skillName] = entry.isIntersecting;
        }
      });
    }, options);

    const elementsToObserve = [
      this.$refs.frontendSkill, 
      this.$refs.mobileSkill, 
      this.$refs.backendSkill, 
      this.$refs.devopsSkill
    ];
    
    elementsToObserve.forEach(element => {
      if (element) this.observer.observe(element);
    });
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
}
</script>

<style scoped>
.skills__container {
  row-gap: 0;
}
.skills__header {
  display: flex;
  align-items: center;
  margin-bottom: var(--mb-2-5);
  cursor: pointer;
}
.skills__icon,
.skills__arrow {
  font-size: 2rem;
  color: var(--first-color);
}
.skills__icon {
  margin-right: var(--mb-0-75);
}
.skills__title {
  font-size: var(--h3-font-size);
}
.skills__subtitle {
  font-size: var(--small-font-size);
  color: var(--text-color-light);
}
.skills__arrow {
  margin-left: auto;
  transition: transform 0.4s;
}
.skills__list {
  overflow: hidden;
  transition: max-height 0.4s ease-out;
  padding-left: 2.7rem;
}
.skills__data {
  transition: opacity 0.3s ease-out, transform 0.3s ease-out;
}
.skills__close .skills__list {
  max-height: 0;
}
.skills__close .skills__data {
  opacity: 0;
  transform: translateY(-10px);
}
.skills__open .skills__list {
  max-height: 1000px; 
  margin-bottom: var(--mb-2-5);
}
.skills__open .skills__arrow {
  transform: rotate(-180deg);
}
.skills__name {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  text-align: center;
}

/* === ESTILOS PARA LA CUADRÍCULA DE ICONOS === */
.skills__list--grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem 1rem;
  padding-left: 0;
}
.skills__data--icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}
.skills__data--icon :deep(svg) {
  width: 40px; 
  height: 40px;
  object-fit: contain;
}
.skills__data--icon .skills__name {
  margin-top: var(--mb-0-25);
  font-size: 0.8rem; 
}

/* === RESPONSIVE === */
@media screen and (max-width: 350px) {
  .skills__list--grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 568px) {
  .skills__container {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem; 
    align-items: start;
  }
}

@media screen and (min-width: 768px) {
  .skills__container {
    grid-template-columns: repeat(2, 1fr);
  }

  .skills.section { /* o .qualification, .services, .portfolio */
    padding: 7rem 0 1rem; /* 7rem arriba, 1rem abajo */
  }
}
</style>