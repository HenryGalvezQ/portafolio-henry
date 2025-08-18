<template>
  <section class="skills section" id="skills">
    <h2 class="section__title">Habilidades</h2>
    <span class="section__subtitle">Mi Nivel Técnico</span>
    
    <div class="skills__container container grid">
      
      <div :class="['skills__content', skillsState.frontend ? 'skills__open' : 'skills__close']" ref="frontendSkill" data-skill="frontend">
        <div class="skills__header" @click="toggleSkill('frontend')">
          <i class="uil uil-swatchbook skills__icon"></i>
          <div>
            <h1 class="skills__title">Frontend y Diseño UX/UI</h1>
            <span class="skills__subtitle">Mi especialidad principal</span>
          </div>
          <i class="uil uil-angle-down skills__arrow"></i>
        </div>

        <div class="skills__list skills__list--grid skills__list--4-cols grid">
          <div v-for="skill in frontendSkills" :key="skill.name" class="skills__data skills__data--icon">
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
            <span class="skills__subtitle">Lógica de servidor y gestión de datos</span>
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
          <i class="uil uil-brackets-curly skills__icon"></i>
          <div>
            <h1 class="skills__title">Programación y DevOps</h1>
            <span class="skills__subtitle">Lógica, sistemas y herramientas</span>
          </div>
          <i class="uil uil-angle-down skills__arrow"></i>
        </div>
        
        <div class="skills__list skills__list--grid skills__list--6-cols grid">
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
      // SECCIÓN 1: Ahora con WordPress
      frontendSkills: [
        { name: 'Figma', iconName: 'figma' },
        { name: 'HTML', iconName: 'html' },
        { name: 'CSS', iconName: 'css' },
        { name: 'JavaScript', iconName: 'javascript' },
        { name: 'Vue.js', iconName: 'vue' },
        { name: 'Vite', iconName: 'vite' },
        { name: 'WordPress', iconName: 'wordpress' },
        { name: 'Android', iconName: 'android' },
      ],
      // SECCIÓN 2
      backendSkills: [
        { name: 'PHP', iconName: 'php' },
        { name: 'Flask', iconName: 'flask' },
        { name: 'Firebase', iconName: 'firebase' },
        { name: 'MySQL', iconName: 'mysql' },
        { name: 'PostgreSQL', iconName: 'postgresql' },
      ],
      // SECCIÓN 3: Sin WordPress
      devopsSkills: [
        { name: 'Python', iconName: 'python' },
        { name: 'Java', iconName: 'java' },
        { name: 'C#', iconName: 'csharp' },
        { name: 'C++', iconName: 'cplusplus' },
        { name: 'AWS', iconName: 'aws' },
        { name: 'Docker', iconName: 'docker' },
        { name: 'Linux', iconName: 'linux' },
        { name: 'Bash', iconName: 'bash' },
        { name: 'Git', iconName: 'git' },
        { name: 'GitHub', iconName: 'github' },
        { name: 'VSCode', iconName: 'vscode' },
        { name: 'Unity', iconName: 'unity' },
      ],
      skillsState: {
        frontend: false,
        backend: false,
        devops: false,
      },
      observer: null,
      userHasClicked: false,
    };
  },
  methods: {
    toggleSkill(skill) {
      this.userHasClicked = true; 
      const currentState = this.skillsState[skill];
      Object.keys(this.skillsState).forEach(key => {
        this.skillsState[key] = false;
      });
      this.skillsState[skill] = !currentState;
    }
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '-65% 0px -35% 0px',
      threshold: 0,
    };
    this.observer = new IntersectionObserver((entries) => {
      if (this.userHasClicked) return;
      entries.forEach(entry => {
        const skillName = entry.target.dataset.skill;
        if (skillName) {
          this.skillsState[skillName] = entry.isIntersecting;
        }
      });
    }, options);
    const elementsToObserve = [this.$refs.frontendSkill, this.$refs.backendSkill, this.$refs.devopsSkill];
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
  grid-template-columns: repeat(3, 1fr);
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
  width: 50px;
  height: 50px;
  object-fit: contain;
}
.skills__data--icon .skills__name {
  margin-top: var(--mb-0-25);
}

/* === RESPONSIVE Y ESTILOS ESPECIALES === */
@media screen and (min-width: 568px) {
  .skills__container {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem; 
  }

  .skills__content:last-child {
    grid-column: 1 / -1;
  }
}

@media screen and (min-width: 768px) {
  .skills__container {
    grid-template-columns: 1fr;
  }
  
  /* NUEVA REGLA: Frontend con 4 columnas */
  .skills__list--4-cols {
    grid-template-columns: repeat(4, 1fr);
  }

  /* DevOps con 6 columnas */
  .skills__list--6-cols {
    grid-template-columns: repeat(6, 1fr);
  }
}

@media screen and (min-width: 992px) {
    .skills__container {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>