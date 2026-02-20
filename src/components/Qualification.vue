// Qualification.vue

<template>
  <section class="qualification section" id="qualification">
    <h2 class="section__title">Experiencia</h2>
    <span class="section__subtitle">Mi experiencia educativa y de trabajo</span>

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
          
          <!-- UNSA -->
          <div class="qualification__data qualification__data-education">
            <div class="qualification__item-content qualification__item-content--clickable" @click="openModal('unsa')">
              <img src="@/assets/img/logo-unsa.png" alt="Logo UNSA" class="qualification__logo qualification__logo--bg">
              <div class="qualification__text-content">
                <h3 class="qualification__title">Ingeniería de Sistemas (Egresado)</h3>
                <span class="qualification__subtitle">Universidad Nacional de San Agustín</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  Abril 2021 - Diciembre 2025
                </div>
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>

          <!-- Symmetry -->
          <div class="qualification__data qualification__data-work">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
            <div class="qualification__col-right">
              <div class="qualification__item-content qualification__item-content--right qualification__item-content--clickable" @click="openModal('symmetry')">
                <div class="qualification__text-content">
                  <h3 class="qualification__title">Frontend Developer (Freelance)</h3>
                  <span class="qualification__subtitle">Symmetry Club LLC • Fitness App</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    Diciembre 2025
                  </div>
                </div>
                <img src="@/assets/img/symmetry_logo2.png" alt="Logo Symmetry" class="qualification__logo qualification__logo--rounded">
              </div>
            </div>
          </div>

          <!-- Inglés -->
          <div class="qualification__data qualification__data-education">
            <div class="qualification__item-content qualification__item-content--clickable" @click="openModal('ingles')">
              <img src="@/assets/img/logo_idiomas.png" alt="Logo UNSA" class="qualification__logo qualification__logo--bg">
              <div class="qualification__text-content">
                <h3 class="qualification__title">Idioma Inglés Intermedio</h3>
                <span class="qualification__subtitle">Centro de Idiomas UNSA</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  Noviembre 2024 - Octubre 2025
                </div>
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>

          <!-- Innovaciencia -->
          <div class="qualification__data qualification__data-work">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
            <div class="qualification__col-right">
              <div class="qualification__item-content qualification__item-content--right qualification__item-content--clickable" @click="openModal('innovaciencia')">
                <div class="qualification__text-content">
                  <h3 class="qualification__title">Frontend Developer (Prácticas pre-profesionales)</h3>
                  <span class="qualification__subtitle">Innovaciencia Peru</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    Abril 2025 - Noviembre 2025
                  </div>
                </div>
                <img src="@/assets/img/logo_innovaciencia.png" alt="Logo Innovaciencia" class="qualification__logo qualification__logo--bg">
              </div>
            </div>
          </div>

          <!-- Cisco -->
          <div class="qualification__data qualification__data-education">
            <div class="qualification__item-content qualification__item-content--clickable" @click="openModal('cisco')">
              <img src="@/assets/img/logo-cisco-net-academy.png" alt="Logo Cisco" class="qualification__logo qualification__logo--bg">
              <div class="qualification__text-content">
                <h3 class="qualification__title">Ciberseguridad</h3>
                <span class="qualification__subtitle">CISCO Networking Academy</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  Agosto 2024 - Julio 2025
                </div>
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>

          <!-- Municipalidad -->
          <div class="qualification__data qualification__data-work">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
            <div class="qualification__col-right">
              <div class="qualification__item-content qualification__item-content--right qualification__item-content--clickable" @click="openModal('municipalidad')">
                <div class="qualification__text-content">
                  <h3 class="qualification__title">Soporte Informática (Prácticas pre-profesionales)</h3>
                  <span class="qualification__subtitle">Municipalidad Distrital de La Joya</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    Enero 2025 - Marzo 2025
                  </div>
                </div>
                <img src="@/assets/img/logo-muni.png" alt="Logo Municipalidad" class="qualification__logo">
              </div>
            </div>
          </div>

          <!-- Coderhouse -->
          <div class="qualification__data qualification__data-education">
            <div class="qualification__item-content qualification__item-content--clickable" @click="openModal('coderhouse')">
              <img src="@/assets/img/logo-coderhouse.png" alt="Logo Coderhouse" class="qualification__logo qualification__logo--bg">
              <div class="qualification__text-content">
                <h3 class="qualification__title">Carrera UX/UI</h3>
                <span class="qualification__subtitle">Coderhouse</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  Abril 2023 - Diciembre 2023
                </div>
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>

          <!-- Soporte TI (sin modal) -->
          <div class="qualification__data qualification__data-work">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
            <div class="qualification__col-right">
              <div class="qualification__item-content qualification__item-content--right">
                <div class="qualification__text-content">
                  <h3 class="qualification__title">Soporte TI</h3>
                  <span class="qualification__subtitle">Particulares</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    Enero 2022 - Diciembre 2024
                  </div>
                </div>
                <div class="qualification__logo-placeholder"></div>
              </div>
            </div>
          </div>

          <!-- Oracle -->
          <div class="qualification__data qualification__data-education">
            <div class="qualification__item-content qualification__item-content--clickable" @click="openModal('oracle')">
              <img src="@/assets/img/logo-oracle.png" alt="Logo Oracle" class="qualification__logo qualification__logo--bg">
              <div class="qualification__text-content">
                <h3 class="qualification__title">Oracle Cloud APEX Developer</h3>
                <span class="qualification__subtitle">Oracle</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  Agosto 2023 - Setiembre 2023
                </div>
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
            </div>
          </div>
    
        </div>
      </div>
    </div>
    
    <CertificateModal 
      :show="activeModalId !== null" 
      :images="currentModalImages"
      :is-vertical="isModalVertical"
      :modal-id="activeModalId"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import CertificateModal from './CertificateModal.vue';

// --- Importación de todas las imágenes ---
import certificadoCoderhouse1 from '@/assets/img/certificado_coderhouse1.png';
import certificadoCoderhouse2 from '@/assets/img/certificado_coderhouse2.png';
import constancia_egresado from '@/assets/img/constancia_egresado.jpg';
import constancia_ranking from '@/assets/img/constancia_ranking.jpg';
import libreta_notas from '@/assets/img/libreta_notas.jpg';
import certificado_oracle from '@/assets/img/certificado_oracle.jpg';
import certificado_muni from '@/assets/img/certificado_muni.jpg';
import certificado_innovaciencia from '@/assets/img/certificado_innovaciencia.jpg';
import certificado_cisco1 from '@/assets/img/certificado_cisco1.jpg';
import certificado_cisco2 from '@/assets/img/certificado_cisco2.jpg';
import certificado_cisco3 from '@/assets/img/certificado_cisco3.jpg';
import certificado_cisco4 from '@/assets/img/certificado_cisco4.jpg';
import certificado_cisco5 from '@/assets/img/certificado_cisco5.jpg';
import certificado_cisco6 from '@/assets/img/certificado_cisco6.jpg';
import certificado_cisco7 from '@/assets/img/certificado_cisco7.jpg';
import certificado_cisco8 from '@/assets/img/certificado_cisco8.jpg';
import certificado_ingles from '@/assets/img/certificado_ingles1.jpg';
import certificado_ingles2 from '@/assets/img/certificado_ingles2.jpg';

// --- Estado del Componente ---
const activeTab = ref('education');
const activeModalId = ref(null);

// --- Datos de los Modales ---
const modalData = {
  unsa: [constancia_egresado, constancia_ranking],
  support: [],
  coderhouse: [certificadoCoderhouse1, certificadoCoderhouse2],
  municipalidad: [certificado_muni],
  oracle: [certificado_oracle],
  innovaciencia: [certificado_innovaciencia],
  cisco: [
    certificado_cisco1, certificado_cisco2, certificado_cisco3,
    certificado_cisco4, certificado_cisco5, certificado_cisco6,
    certificado_cisco7, certificado_cisco8
  ],
  symmetry: [],
  ingles: [certificado_ingles, certificado_ingles2]
};

// --- Propiedades Computadas ---
const currentModalImages = computed(() => {
  return activeModalId.value ? modalData[activeModalId.value] : [];
});

const isModalVertical = computed(() => {
  const verticalIds = ['unsa', 'municipalidad', 'innovaciencia', 'symmetry', 'ingles'];
  return verticalIds.includes(activeModalId.value);
});

// --- Métodos ---
const setActiveTab = (tabName) => {
  activeTab.value = tabName;
};

const openModal = (modalId) => {
  if (modalId === 'symmetry' || (modalData[modalId] && modalData[modalId].length > 0)) {
    activeModalId.value = modalId;
  }
};

const closeModal = () => {
  activeModalId.value = null;
};
</script>

<style scoped>
/* ==================== QUALIFICATION ==================== */
.section__subtitle {
  color: var(--subtitle-color);
}

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
  color: var(--subtitle-color);
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

/* Columna izquierda: fit-content limita el área interactiva */
.qualification__item-content {
  display: flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
}

/* Wrapper columna derecha */
.qualification__col-right {
  display: flex;
  align-items: center;
  width: 100%;
}

/* Contenido derecho: ocupa todo el 1fr, logo pegado a la derecha */
.qualification__item-content--right {
  display: flex;
  align-items: center;
  gap: 1rem;
  pointer-events: auto;
  width: 100%;
}

.qualification__item-content--right .qualification__logo,
.qualification__item-content--right .qualification__logo-placeholder {
  margin-left: auto;
  flex-shrink: 0;
}

/* Hover en rounder y line al hacer hover sobre el item clickable */
.qualification__data:has(.qualification__item-content--clickable:hover) {
  transform: scale(1.08);
  position: relative;
  z-index: 5;
}

/* Solo los item-content con @click tienen cursor pointer */
.qualification__item-content--clickable {
  cursor: pointer;
}

.qualification__logo {
  width: 40px;
  height: 40px;
  object-fit: contain;
  flex-shrink: 0;
}

.qualification__title {
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
}

.qualification__subtitle {
  display: inline-block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-1);
  color: var(--subtitle-color);
}

.qualification__calendar {
  font-size: var(--smaller-font-size);
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

.qualification__logo--rounded {
  border-radius: 6px;
}

.qualification__item-content--right .qualification__text-content {
  flex: 1;
  min-width: 0;
}

.qualification__logo-placeholder {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
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

/* Hover con mayor especificidad para ganar siempre a las reglas de escalado */

/* Educación activa: education hover +25% más, work hover +25% menos */
.qualification__content.show-active-education .qualification__data-education:has(.qualification__item-content--clickable:hover) {
  transform: scale(1.12);
  position: relative;
  z-index: 5;
}
.qualification__content.show-active-education .qualification__data-work:has(.qualification__item-content--clickable:hover) {
  transform: scale(1.06);
  position: relative;
  z-index: 5;
}

/* Laboral activa: work hover +25% más, education hover +25% menos */
.qualification__content.show-active-work .qualification__data-work:has(.qualification__item-content--clickable:hover) {
  transform: scale(1.12);
  position: relative;
  z-index: 5;
}
.qualification__content.show-active-work .qualification__data-education:has(.qualification__item-content--clickable:hover) {
  transform: scale(1.06);
  position: relative;
  z-index: 5;
}

/* ==================== MEDIA QUERIES ==================== */
@media screen and (max-width: 350px) {
  .qualification__data {
    column-gap: 0.5rem;
  }
  .qualification__logo {
    width: 25px;
    height: 25px;
  }
  .qualification__logo-placeholder {
    width: 25px;
    height: 25px;
  }
  .qualification__title {
    font-size: 0.625rem;
  }
  .qualification__subtitle {
    font-size: 0.563rem;
  }
  .qualification__calendar {
    font-size: 0.5rem;
  }
  .qualification__item-content {
    gap: 0.5rem;
  }
}

@media screen and (max-width: 567px) {
  .qualification__data {
    column-gap: 0.75rem;
  }
  .qualification__logo {
    width: 30px;
    height: 30px;
  }
  .qualification__logo-placeholder {
    width: 30px;
    height: 30px;
  }
  .qualification__title {
    font-size: 0.662rem;
    line-height: 1.2;
  }
  .qualification__subtitle {
    font-size: 0.625rem;
    margin-bottom: var(--mb-0-5);
  }
  .qualification__calendar {
    font-size: 0.563rem;
  }
  .qualification__item-content {
    gap: 0.5rem;
  }
  .qualification__rounder {
    width: 11px;
    height: 11px;
  }
  .qualification__line {
    transform: translate(5px, -7px);
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
  .qualification__tabs { justify-content: center; }
  .qualification__button { margin: 0 var(--mb-1); }
  .qualification__sections {
    grid-template-columns: 1fr;
  }
  .qualification__logo { width: 85px; height: 85px; }
  .qualification__logo-placeholder { width: 85px; height: 85px; }
  .qualification.section { padding: 7rem 0 1rem; }

  .qualification__container {
    max-width: 823px;
  }
}
</style>