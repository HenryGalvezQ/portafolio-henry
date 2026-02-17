//Skills.vue

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
  components: { SvgIcon },
  data() {
    return {
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
      mobileSkills: [
        { name: 'Kotlin', iconName: 'kotlin' },
        { name: 'Flutter', iconName: 'flutter' },
        { name: 'React Native', iconName: 'react' },
      ],
      backendSkills: [
        { name: 'PHP', iconName: 'php' },
        { name: 'Flask', iconName: 'flask' },
        { name: 'Firebase', iconName: 'firebase' },
        { name: 'MySQL', iconName: 'mysql' },
        { name: 'PostgreSQL', iconName: 'postgresql' },
      ],
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
      // Flag para pausar el observer durante navegación al header a qualification
      _observerPaused: false,
      _resumeTimeout: null,
    };
  },
  methods: {
    toggleSkill(skill) {
      this.skillsState[skill] = !this.skillsState[skill];
    },

    // Llamado por el evento 'nav-to-qualification' del Header
    // Desconecta el observer por 1.5s para que el scroll a qualification
    // no sea interrumpido por la apertura automática de acordeones
    _pauseObserver() {
      if (this._resumeTimeout) clearTimeout(this._resumeTimeout);
      
      this._observerPaused = true;
      if (this.observer) this.observer.disconnect();

      // Reconectar después de que el scroll termine (1.5s es suficiente)
      this._resumeTimeout = setTimeout(() => {
        this._observerPaused = false;
        this._reconnectObserver();
      }, 1500);
    },

    _reconnectObserver() {
      if (!this.observer) return;
      const elements = [
        this.$refs.frontendSkill,
        this.$refs.mobileSkill,
        this.$refs.backendSkill,
        this.$refs.devopsSkill,
      ];
      elements.forEach(el => { if (el) this.observer.observe(el); });
    },
    _handleNavToSkills() {
      // Reconectar el observer para que los acordeones se abran al llegar
      if (this._resumeTimeout) clearTimeout(this._resumeTimeout);
      this._observerPaused = false;
      this._reconnectObserver();
    },
  },
  mounted() {
    // Escuchar el evento del Header para pausar el observer
    this._navHandler = () => this._pauseObserver();
    window.addEventListener('nav-to-qualification', this._navHandler);
    this._navToSkillsHandler = () => this._handleNavToSkills();
    window.addEventListener('nav-to-skills', this._navToSkillsHandler);

    const options = {
      root: null,
      // top: -10% → el elemento debe aparecer un 10% desde arriba para abrirse
      // bottom: -40% → el elemento debe salir un 40% por abajo antes de cerrarse
      // Esto retrasa el colapso al hacer scroll hacia arriba de forma natural
      rootMargin: '-10% 0px -15% 0px',
      threshold: 0.1,
    };

    this.observer = new IntersectionObserver((entries) => {
      // Si el observer está pausado, ignorar todas las entradas
      if (this._observerPaused) return;

      entries.forEach(entry => {
        const skillName = entry.target.dataset.skill;
        if (skillName) {
          this.skillsState[skillName] = entry.isIntersecting;
        }
      });
    }, options);

    const elementsToObserve = [
      this.$refs.frontendSkill,
      this.$refs.mobileSkill,
      this.$refs.backendSkill,
      this.$refs.devopsSkill,
    ];

    elementsToObserve.forEach(el => {
      if (el) this.observer.observe(el);
    });
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect();
    if (this._resumeTimeout) clearTimeout(this._resumeTimeout);
    window.removeEventListener('nav-to-qualification', this._navHandler);
    window.removeEventListener('nav-to-skills', this._navToSkillsHandler);
  },
};
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