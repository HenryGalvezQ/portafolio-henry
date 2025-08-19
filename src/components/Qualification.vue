<template>
  <section class="qualification section" id="qualification">
    <h2 class="section__title">Experiencia</h2>
    <span class="section__subtitle">My personal journey</span>

    <div class="qualification__container container">
      <div class="qualification__tabs">
        <div 
          class="qualification__button button--flex" 
          @click="setActiveTab('education')"
          :class="{ 'qualification__active': activeTab === 'education' }">
          <i class="uil uil-graduation-cap qualification__icon"></i>
          Educación
        </div>
        <div 
          class="qualification__button button--flex" 
          @click="setActiveTab('work')"
          :class="{ 'qualification__active': activeTab === 'work' }">
          <i class="uil uil-briefcase-alt qualification__icon"></i>
          Laboral
        </div>
      </div>

      <div class="qualification__sections">
        <div class="qualification__content" :class="{ 'show-active-education': activeTab === 'education', 'show-active-work': activeTab === 'work' }">
          
          <div class="qualification__data qualification__data-education">
              <div>
                  <h3 class="qualification__title">Ingeniería de Sistemas</h3>
                  <span class="qualification__subtitle">Univ. Nacional de San Agustín</span>
                  <div class="qualification__calendar">
                      <i class="uil uil-calendar-alt"></i>
                      Abril 2021 - Presente
                  </div>
              </div>
              <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
              </div>
          </div>
          
          <div class="qualification__data qualification__data-work">
              <div></div>
              <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
              </div>
              <div>
                  <h3 class="qualification__title">Soporte TI</h3>
                  <span class="qualification__subtitle">Particulares</span>
                  <div class="qualification__calendar">
                      <i class="uil uil-calendar-alt"></i>
                      Enero 2022 - Diciembre 2024
                  </div>
              </div>
          </div>
      
          <div class="qualification__data qualification__data-education">
              <div>
                  <h3 class="qualification__title">Carrera UX/UI</h3>
                  <span class="qualification__subtitle">Coderhouse</span>
                  <div class="qualification__calendar">
                      <i class="uil uil-calendar-alt"></i>
                      Abril 2023 - Diciembre 2023
                  </div>
              </div>
              <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
              </div>
          </div>
      
          <div class="qualification__data qualification__data-work">
              <div></div>
              <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
              </div>
              <div>
                  <h3 class="qualification__title">Soporte Informática (Prácticas pre-profesionales)</h3>
                  <span class="qualification__subtitle">Municipalidad Distrital de La Joya</span>
                  <div class="qualification__calendar">
                      <i class="uil uil-calendar-alt"></i>
                      Enero 2025 - Marzo 2025
                  </div>
              </div>
          </div>
          
          <div class="qualification__data qualification__data-education">
              <div>
                  <h3 class="qualification__title">Oracle Cloud APEX Developer</h3>
                  <span class="qualification__subtitle">Oracle</span>
                  <div class="qualification__calendar">
                      <i class="uil uil-calendar-alt"></i>
                      Agosto 2023 - Setiembre 2023
                  </div>
              </div>
              <div>
                  <span class="qualification__rounder"></span>
                  <span class="qualification__line"></span>
              </div>
          </div>
      
          <div class="qualification__data qualification__data-work">
            <div></div>
            <div>
                <span class="qualification__rounder"></span>
                <span class="qualification__line"></span>
            </div>
            <div>
                <h3 class="qualification__title">Frontend Developer</h3>
                <span class="qualification__subtitle">Innovaciencia Peru</span>
                <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    Abril 2025 - Julio 2025
                </div>
            </div>
          </div>

          <div class="qualification__data qualification__data-education">
              <div>
                  <h3 class="qualification__title">Ciberseguridad</h3>
                  <span class="qualification__subtitle">CISCO Networking Academy</span>
                  <div class="qualification__calendar">
                      <i class="uil uil-calendar-alt"></i>
                      Agosto 2024 - Julio 2025
                  </div>
              </div>
              <div>
                  <span class="qualification__rounder"></span>
              </div>
          </div>
      
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Qualification',
  data() {
    return {
      activeTab: 'education'
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    }
  }
}
</script>

<style scoped>
/* ==================== QUALIFICATION ==================== */
.qualification__tabs {
  display: flex;
  justify-content: center;
  column-gap: 3rem;
  margin-bottom: var(--mb-2);
}

.qualification__button {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: .3s;
}

.qualification__button:hover {
  color: var(--first-color);
}

.qualification__icon {
  font-size: 1.8rem;
  margin-right: var(--mb-0-25);
}

.qualification__button.qualification__active {
  color: var(--first-color);
}

.qualification__sections {
  margin-top: 2rem;
}

.qualification__data {
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
  transition: transform 0.4s ease;
}

.qualification__title {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
}

.qualification__subtitle {
  display: inline-block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-1);
}

.qualification__calendar {
  font-size: var(--smaller-font-size);
  /*color: var(--text-color-light);*/
}

.qualification__rounder {
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: var(--first-color);
  border-radius: 50%;
}

.qualification__line {
  display: block;
  width: 1px;
  height: 100%;
  background-color: var(--first-color);
  transform: translate(6px, -7px);
}

/* ==================== LÓGICA DEL EFECTO DE ESCALADO ==================== */
.qualification__content.show-active-education .qualification__data-education {
  transform: scale(1.05);
}
.qualification__content.show-active-education .qualification__data-work {
  transform: scale(0.95);
}

.qualification__content.show-active-work .qualification__data-work {
  transform: scale(1.05);
}
.qualification__content.show-active-work .qualification__data-education {
  transform: scale(0.95);
}

/* ==================== MEDIA QUERIES ==================== */
@media screen and (max-width: 350px) {
  .qualification__data {
    gap: .5rem;
  }
}

@media screen and (min-width: 568px) {
  .qualification__sections {
    display: grid;
    grid-template-columns: .6fr;
    justify-content: center;
  }
}

@media screen and (min-width: 768px) {
  .qualification__tabs {
    justify-content: center;
  }
  .qualification__button {
    margin: 0 var(--mb-1);
  }
  .qualification__sections {
    grid-template-columns: .6fr;
  }
}
</style>