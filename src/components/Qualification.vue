<template>
  <section class="qualification section">
    <h2 class="section__title">Qualification</h2>
    <span class="section__subtitle">My personal journey</span>

    <div class="qualification__container container">
      <div class="qualification__tabs">
        <div 
          class="qualification__button button--flex" 
          @click="setActiveTab('education')"
          :class="{ 'qualification__active': activeTab === 'education' }">
          <i class="uil uil-graduation-cap qualification__icon"></i>
          Education
        </div>
        <div 
          class="qualification__button button--flex" 
          @click="setActiveTab('work')"
          :class="{ 'qualification__active': activeTab === 'work' }">
          <i class="uil uil-briefcase-alt qualification__icon"></i>
          Work
        </div>
      </div>

      <div class="qualification__sections">
        <div class="qualification__content" v-show="activeTab === 'education'">
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Computer Engineer</h3>
              <span class="qualification__subtitle">Peru - University</span>
              <div class="qualification__calender">
                <i class="uil uil-calendar-alt"></i>
                2009 - 2014
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>
          <div class="qualification__data">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
            <div>
              <h3 class="qualification__title">Web Design</h3>
              <span class="qualification__subtitle">Span - Institute</span>
              <div class="qualification__calender">
                <i class="uil uil-calendar-alt"></i>
                2014 - 2017
              </div>
            </div>
          </div>
          </div>

        <div class="qualification__content" v-show="activeTab === 'work'">
          <div class="qualification__data">
            <div>
              <h3 class="qualification__title">Software Engineer</h3>
              <span class="qualification__subtitle">Microsoft - Peru</span>
              <div class="qualification__calender">
                <i class="uil uil-calendar-alt"></i>
                2016 - 2018
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
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
      activeTab: 'education' // Inicia con la pestaña 'education' activa
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
.qualification__container {
  padding-bottom: 2rem;
}
.qualification__tabs {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: var(--mb-2);
}
.qualification__button {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: color .3s;
}
.qualification__button:hover {
  color: var(--first-color);
}
.qualification__icon {
  font-size: 1.8rem;
  margin-right: var(--mb-0-25);
}
.qualification__active {
  color: var(--first-color);
}
.qualification__sections {
  margin-top: 2rem;
}
/* La lógica de mostrar/ocultar ahora la maneja Vue con v-show o v-if */
.qualification__data {
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
  margin-bottom: 1.5rem; /* Espaciado entre items de la timeline */
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
  color: var(--text-color-light);
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

/*==================== MEDIA QUERIES ====================*/
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
    grid-template-columns: .5fr;
  }
}
</style>