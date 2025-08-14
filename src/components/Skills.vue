<template>
  <section class="skills section" id="skills">
    <h2 class="section__title">Skills</h2>
    <span class="section__subtitle">My technical level</span>
    <div class="skills__container container grid">
      <div :class="['skills__content', openSkill === 'frontend' ? 'skills__open' : 'skills__close']">
        <div class="skills__header" @click="toggleSkill('frontend')">
          <i class="uil uil-brackets-curly skills__icon"></i>
          <div>
            <h1 class="skills__title">Frontend Developer</h1>
            <span class="skills__subtitle">More than 4 years</span>
          </div>
          <i class="uil uil-angle-down skills__arrow"></i>
        </div>
        <div class="skills__list grid">
          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">HTML</h3>
              <span class="skills__number">90%</span>
            </div>
            <div class="skills__bar">
              <span class="skills__percentage skills__html"></span>
            </div>
          </div>
          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">CSS</h3>
              <span class="skills__number">80%</span>
            </div>
            <div class="skills__bar">
              <span class="skills__percentage skills__css"></span>
            </div>
          </div>
          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">JAVASCRIPT</h3>
              <span class="skills__number">70%</span>
            </div>
            <div class="skills__bar">
              <span class="skills__percentage skills__js"></span>
            </div>
          </div>
          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">React</h3>
              <span class="skills__number">85%</span>
            </div>
            <div class="skills__bar">
              <span class="skills__percentage skills__react"></span>
            </div>
          </div>
        </div>
      </div>

      <div :class="['skills__content', openSkill === 'backend' ? 'skills__open' : 'skills__close']">
        <div class="skills__header" @click="toggleSkill('backend')">
          <i class="uil uil-server-network skills__icon"></i>
          <div>
            <h1 class="skills__title">Backend Developer</h1>
            <span class="skills__subtitle">More than 2 years</span>
          </div>
          <i class="uil uil-angle-down skills__arrow"></i>
        </div>
        <div class="skills__list grid">
          <div class="skills__data">
              <div class="skills__titles">
                  <h3 class="skills__name">PHP</h3>
                  <span class="skills__number">90%</span>
              </div>
              <div class="skills__bar">
                  <span class="skills__percentage skills__php"></span>
              </div>
          </div>
          </div>
      </div>

      <div :class="['skills__content', openSkill === 'designer' ? 'skills__open' : 'skills__close']">
          <div class="skills__header" @click="toggleSkill('designer')">
              <i class="uil uil-swatchbook skills__icon"></i>
              <div>
                  <h1 class="skills__title">Designer</h1>
                  <span class="skills__subtitle">More than 5 years</span>
              </div>
              <i class="uil uil-angle-down skills__arrow"></i>
          </div>
          <div class="skills__list grid">
              <div class="skills__data">
                  <div class="skills__titles">
                      <h3 class="skills__name">FIGMA</h3>
                      <span class="skills__number">60%</span>
                  </div>
                  <div class="skills__bar">
                      <span class="skills__percentage skills__figma"></span>
                  </div>
              </div>
              </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  data() {
    return {
      // Mantiene el estado de la sección abierta.
      // Inicia con 'frontend' para que esté abierto por defecto.
      openSkill: 'frontend' 
    };
  },
  methods: {
    toggleSkill(skill) {
      // Si el skill clickeado ya está abierto, ciérralo.
      // Si no, ábrelo.
      if (this.openSkill === skill) {
        this.openSkill = null;
      } else {
        this.openSkill = skill;
      }
    }
  }
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
  transition: .4s;
}
.skills__list {
  row-gap: 1.5rem;
  padding-left: 2.7rem;
}
.skills__titles {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--mb-0-5);
}
.skills__name {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
}
.skills__bar,
.skills__percentage {
  height: 5px;
  border-radius: .25rem;
}
.skills__bar {
  background-color: var(--first-color-lighter);
}
.skills__percentage {
  display: block;
  background-color: var(--first-color);
}
.skills__html { width: 90%; }
.skills__css { width: 80%; }
.skills__js { width: 70%; }
.skills__react { width: 85%; }
.skills__php { width: 90%; }
.skills__node { width: 70%; }
.skills__firebase { width: 60%; }
.skills__python { width: 65%; }
.skills__figma { width: 60%; }
.skills__sketch { width: 70%; }
.skills__photoshop { width: 80%; }

.skills__close .skills__list {
  height: 0;
  overflow: hidden;
}
.skills__open .skills__list {
  height: max-content;
  margin-bottom: var(--mb-2-5);
}
.skills__open .skills__arrow {
  transform: rotate(-180deg);
}

/* Media Queries */
@media screen and (max-width: 350px) {
  .skills__title {
    font-size: var(--normal-font-size);
  }
}
@media screen and (min-width: 568px) {
  .skills__container {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>