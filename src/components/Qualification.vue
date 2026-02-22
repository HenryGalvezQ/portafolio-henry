// Qualification.vue

<template>
  <section class="qualification section" id="qualification">
    <h2 class="section__title">{{ t('title') }}</h2>
    <span class="section__subtitle">{{ t('subtitle') }}</span>

    <div class="qualification__container container">
      <div class="qualification__tabs">
        <div 
          class="qualification__button button--flex" 
          data-tab="education"
          @click="setActiveTab('education', $event)"
          @touchend="handleTabTouch('education', $event)"
          :class="{ 'qualification__active': activeTab === 'education' }">
          <i class="uil uil-graduation-cap qualification__icon"></i>
          {{ t('tabs.education') }}
        </div>
        <div 
          class="qualification__button button--flex" 
          data-tab="work"
          @click="setActiveTab('work', $event)"
          @touchend="handleTabTouch('work', $event)"
          :class="{ 'qualification__active': activeTab === 'work' }">
          <i class="uil uil-briefcase-alt qualification__icon"></i>
          {{ t('tabs.work') }}
        </div>
      </div>

      <div class="qualification__sections">
        <div class="qualification__content" :class="{ 'show-active-education': activeTab === 'education', 'show-active-work': activeTab === 'work' }">
          
          <!-- UNSA -->
          <div class="qualification__data qualification__data-education">
            <div class="qualification__item-content qualification__item-content--clickable" @click="openModal('unsa')">
              <img src="@/assets/img/logo-unsa.webp" alt="Logo UNSA" class="qualification__logo qualification__logo--bg">
              <div class="qualification__text-content">
                <h3 class="qualification__title">{{ t('unsa.title') }}</h3>
                <span class="qualification__subtitle">{{ t('unsa.institution') }}</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  {{ t('unsa.date') }}
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
                  <h3 class="qualification__title">{{ t('symmetry.title') }}</h3>
                  <span class="qualification__subtitle">{{ t('symmetry.institution') }}</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    {{ t('symmetry.date') }}
                  </div>
                </div>
                <img src="@/assets/img/symmetry_logo2.webp" alt="Logo Symmetry" class="qualification__logo qualification__logo--rounded">
              </div>
            </div>
          </div>

          <!-- Inglés -->
          <div class="qualification__data qualification__data-education">
            <div class="qualification__item-content qualification__item-content--clickable" @click="openModal('ingles')">
              <img src="@/assets/img/logo_idiomas.webp" alt="Logo UNSA" class="qualification__logo qualification__logo--bg">
              <div class="qualification__text-content">
                <h3 class="qualification__title">{{ t('ingles.title') }}</h3>
                <span class="qualification__subtitle">{{ t('ingles.institution') }}</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  {{ t('ingles.date') }}
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
                  <h3 class="qualification__title">{{ t('innovaciencia.title') }}</h3>
                  <span class="qualification__subtitle">{{ t('innovaciencia.institution') }}</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    {{ t('innovaciencia.date') }}
                  </div>
                </div>
                <img src="@/assets/img/logo_innovaciencia.webp" alt="Logo Innovaciencia" class="qualification__logo qualification__logo--bg">
              </div>
            </div>
          </div>

          <!-- Cisco -->
          <div class="qualification__data qualification__data-education">
            <div class="qualification__item-content qualification__item-content--clickable" @click="openModal('cisco')">
              <img src="@/assets/img/logo-cisco-net-academy.webp" alt="Logo Cisco" class="qualification__logo qualification__logo--bg">
              <div class="qualification__text-content">
                <h3 class="qualification__title">{{ t('cisco.title') }}</h3>
                <span class="qualification__subtitle">{{ t('cisco.institution') }}</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  {{ t('cisco.date') }}
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
                  <h3 class="qualification__title">{{ t('municipalidad.title') }}</h3>
                  <span class="qualification__subtitle">{{ t('municipalidad.institution') }}</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    {{ t('municipalidad.date') }}
                  </div>
                </div>
                <img src="@/assets/img/logo-muni.webp" alt="Logo Municipalidad" class="qualification__logo">
              </div>
            </div>
          </div>

          <!-- Coderhouse -->
          <div class="qualification__data qualification__data-education">
            <div class="qualification__item-content qualification__item-content--clickable" @click="openModal('coderhouse')">
              <img src="@/assets/img/logo-coderhouse.webp" alt="Logo Coderhouse" class="qualification__logo qualification__logo--bg">
              <div class="qualification__text-content">
                <h3 class="qualification__title">{{ t('coderhouse.title') }}</h3>
                <span class="qualification__subtitle">{{ t('coderhouse.institution') }}</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  {{ t('coderhouse.date') }}
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
                  <h3 class="qualification__title">{{ t('soporte.title') }}</h3>
                  <span class="qualification__subtitle">{{ t('soporte.institution') }}</span>
                  <div class="qualification__calendar">
                    <i class="uil uil-calendar-alt"></i>
                    {{ t('soporte.date') }}
                  </div>
                </div>
                <div class="qualification__logo-placeholder"></div>
              </div>
            </div>
          </div>

          <!-- Oracle -->
          <div class="qualification__data qualification__data-education">
            <div class="qualification__item-content qualification__item-content--clickable" @click="openModal('oracle')">
              <img src="@/assets/img/logo-oracle.webp" alt="Logo Oracle" class="qualification__logo qualification__logo--bg">
              <div class="qualification__text-content">
                <h3 class="qualification__title">{{ t('oracle.title') }}</h3>
                <span class="qualification__subtitle">{{ t('oracle.institution') }}</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  {{ t('oracle.date') }}
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
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ inheritLocale: true, useScope: 'local' });

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
const setActiveTab = (tabName, event) => {
  if (activeTab.value === tabName) {
    activeTab.value = activeTab.value === 'education' ? 'work' : 'education';
  } else {
    activeTab.value = tabName;
  }
  event.currentTarget.blur();
};

const handleTabTouch = (tabName, event) => {
  event.preventDefault();
  setActiveTab(tabName, event);
  
  const el = event.currentTarget;
  // Capturamos el valor YA actualizado por setActiveTab
  const resultingTab = activeTab.value;
  
  setTimeout(() => {
    // El botón tocado: es activo si el tab resultante es él mismo
    el.style.color = resultingTab === tabName 
      ? 'var(--first-color)' 
      : 'var(--subtitle-color)';
    
    // El otro botón también necesita actualizarse
    const allBtns = document.querySelectorAll('.qualification__button');
    allBtns.forEach(btn => {
      const isEducation = btn.dataset.tab === 'education';
      const btnTab = isEducation ? 'education' : 'work';
      btn.style.color = resultingTab === btnTab 
        ? 'var(--first-color)' 
        : 'var(--subtitle-color)';
    });
  }, 50);
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
  transition: color 0.15s ease;
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
  transform: scale(1.10);
  position: relative;
  z-index: 5;
}
.qualification__content.show-active-education .qualification__data-work:has(.qualification__item-content--clickable:hover) {
  transform: scale(1.03);
  position: relative;
  z-index: 5;
}

/* Laboral activa: work hover +25% más, education hover +25% menos */
.qualification__content.show-active-work .qualification__data-work:has(.qualification__item-content--clickable:hover) {
  transform: scale(1.10);
  position: relative;
  z-index: 5;
}
.qualification__content.show-active-work .qualification__data-education:has(.qualification__item-content--clickable:hover) {
  transform: scale(1.03);
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

<i18n lang="json">
{
  "es": {
    "title": "Experiencia",
    "subtitle": "Mi experiencia educativa y de trabajo",
    "tabs": {
      "education": "Educación",
      "work": "Laboral"
    },
    "unsa": {
      "title": "Ingeniería de Sistemas (Egresado)",
      "institution": "Universidad Nacional de San Agustín",
      "date": "Abril 2021 - Diciembre 2025"
    },
    "symmetry": {
      "title": "Frontend Developer (Freelance)",
      "institution": "Symmetry Club LLC • Fitness App",
      "date": "Diciembre 2025"
    },
    "ingles": {
      "title": "Idioma Inglés Intermedio",
      "institution": "Centro de Idiomas UNSA",
      "date": "Noviembre 2024 - Octubre 2025"
    },
    "innovaciencia": {
      "title": "Frontend Developer (Prácticas pre-profesionales)",
      "institution": "Innovaciencia Peru",
      "date": "Abril 2025 - Noviembre 2025"
    },
    "cisco": {
      "title": "Ciberseguridad",
      "institution": "CISCO Networking Academy",
      "date": "Agosto 2024 - Julio 2025"
    },
    "municipalidad": {
      "title": "Soporte Informática (Prácticas pre-profesionales)",
      "institution": "Municipalidad Distrital de La Joya",
      "date": "Enero 2025 - Marzo 2025"
    },
    "coderhouse": {
      "title": "Carrera UX/UI",
      "institution": "Coderhouse",
      "date": "Abril 2023 - Diciembre 2023"
    },
    "soporte": {
      "title": "Soporte TI",
      "institution": "Particulares",
      "date": "Enero 2022 - Diciembre 2024"
    },
    "oracle": {
      "title": "Oracle Cloud APEX Developer",
      "institution": "Oracle",
      "date": "Agosto 2023 - Setiembre 2023"
    }
  },
  "en": {
    "title": "Experience",
    "subtitle": "My educational and work experience",
    "tabs": {
      "education": "Education",
      "work": "Work"
    },
    "unsa": {
      "title": "Systems Engineering (Graduate)",
      "institution": "National University of San Agustín",
      "date": "April 2021 - December 2025"
    },
    "symmetry": {
      "title": "Frontend Developer (Freelance)",
      "institution": "Symmetry Club LLC • Fitness App",
      "date": "December 2025"
    },
    "ingles": {
      "title": "Intermediate English Language",
      "institution": "UNSA Language Center",
      "date": "November 2024 - October 2025"
    },
    "innovaciencia": {
      "title": "Frontend Developer (Pre-professional Internship)",
      "institution": "Innovaciencia Peru",
      "date": "April 2025 - November 2025"
    },
    "cisco": {
      "title": "Cybersecurity",
      "institution": "CISCO Networking Academy",
      "date": "August 2024 - July 2025"
    },
    "municipalidad": {
      "title": "IT Support (Pre-professional Internship)",
      "institution": "Municipalidad Distrital de La Joya",
      "date": "January 2025 - March 2025"
    },
    "coderhouse": {
      "title": "UX/UI Career",
      "institution": "Coderhouse",
      "date": "April 2023 - December 2023"
    },
    "soporte": {
      "title": "IT Support",
      "institution": "Private clients",
      "date": "January 2022 - December 2024"
    },
    "oracle": {
      "title": "Oracle Cloud APEX Developer",
      "institution": "Oracle",
      "date": "August 2023 - September 2023"
    }
  }
}
</i18n>