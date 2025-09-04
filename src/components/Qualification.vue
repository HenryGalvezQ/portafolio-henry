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
          
          <div class="qualification__data qualification__data-education" @click="openModal('unsa')">
            <div class="qualification__item-content">
              <img src="@/assets/img/logo-unsa.png" alt="Logo UNSA" class="qualification__logo">
              <div class="qualification__text-content">
                <h3 class="qualification__title">Ingeniería de Sistemas</h3>
                <span class="qualification__subtitle">Univ. Nacional de San Agustín</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  Abril 2021 - Presente
                </div>
              </div>
            </div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
          </div>
          
          <div class="qualification__data qualification__data-work" @click="openModal('support')">
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
    
          <div class="qualification__data qualification__data-education" @click="openModal('coderhouse')">
            <div class="qualification__item-content">
              <img src="@/assets/img/logo-coderhouse.png" alt="Logo Coderhouse" class="qualification__logo">
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
    
          <div class="qualification__data qualification__data-work" @click="openModal('municipalidad')">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
            <div class="qualification__item-content qualification__item-content--right">
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
          
          <div class="qualification__data qualification__data-education" @click="openModal('oracle')">
            <div class="qualification__item-content">
              <img src="@/assets/img/logo-oracle.png" alt="Logo Oracle" class="qualification__logo">
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
              <span class="qualification__line"></span>
            </div>
          </div>
    
          <div class="qualification__data qualification__data-work" @click="openModal('innovaciencia')">
            <div></div>
            <div>
              <span class="qualification__rounder"></span>
              <span class="qualification__line"></span>
            </div>
            <div class="qualification__item-content qualification__item-content--right">
              <div class="qualification__text-content">
                <h3 class="qualification__title">Frontend Developer (Prácticas pre-profesionales)</h3>
                <span class="qualification__subtitle">Innovaciencia Peru</span>
                <div class="qualification__calendar">
                  <i class="uil uil-calendar-alt"></i>
                  Abril 2025 - Julio 2025
                </div>
              </div>
              <img src="@/assets/img/logo_innovaciencia.png" alt="Logo Innovaciencia" class="qualification__logo">
            </div>
          </div>

          <div class="qualification__data qualification__data-education" @click="openModal('cisco')">
            <div class="qualification__item-content">
              <img src="@/assets/img/logo-cisco-net-academy.png" alt="Logo Cisco" class="qualification__logo">
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
            </div>
          </div>
    
        </div>
      </div>
    </div>

    <CertificateModal 
      :show="activeModalId !== null" 
      :images="currentModalImages"
      :is-vertical="isModalVertical"
      @close="closeModal"
    />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';
import CertificateModal from './CertificateModal.vue';

// --- Importación de todas las imágenes ---

// Coderhouse (sin cambios)
import certificadoCoderhouse1 from '@/assets/img/certificado_coderhouse1.png';
import certificadoCoderhouse2 from '@/assets/img/certificado_coderhouse2.png';

// Imágenes actualizadas y nuevas
import constancia_ranking from '@/assets/img/constancia_ranking.jpg';
import libreta_notas from '@/assets/img/libreta_notas.jpg';
import certificado_oracle from '@/assets/img/certificado_oracle.jpg';
import certificado_muni from '@/assets/img/certificado_muni.jpg';
import certificado_cisco1 from '@/assets/img/certificado_cisco1.jpg';
import certificado_cisco2 from '@/assets/img/certificado_cisco2.jpg';
import certificado_cisco3 from '@/assets/img/certificado_cisco3.jpg';
import certificado_cisco4 from '@/assets/img/certificado_cisco4.jpg';
import certificado_cisco5 from '@/assets/img/certificado_cisco5.jpg';
import certificado_cisco6 from '@/assets/img/certificado_cisco6.jpg';
import certificado_cisco7 from '@/assets/img/certificado_cisco7.jpg';
import certificado_cisco8 from '@/assets/img/certificado_cisco8.jpg';

// --- Estado del Componente ---
const activeTab = ref('education');
const activeModalId = ref(null);

// --- Datos de los Modales (Actualizado) ---
const modalData = {
  unsa: [constancia_ranking, libreta_notas],
  support: [], // Array vacío para que el click no haga nada
  coderhouse: [certificadoCoderhouse1, certificadoCoderhouse2],
  municipalidad: [certificado_muni],
  oracle: [certificado_oracle],
  innovaciencia: [], // Array vacío para que el click no haga nada
  cisco: [
    certificado_cisco1, certificado_cisco2, certificado_cisco3,
    certificado_cisco4, certificado_cisco5, certificado_cisco6,
    certificado_cisco7, certificado_cisco8
  ],
};

// --- Propiedades Computadas ---
const currentModalImages = computed(() => {
  // Devuelve las imágenes del modal activo, o un array vacío si no hay ninguno.
  return activeModalId.value ? modalData[activeModalId.value] : [];
});
const isModalVertical = computed(() => {
  const verticalIds = ['unsa', 'municipalidad'];
  return verticalIds.includes(activeModalId.value);
});
// --- Métodos ---
const setActiveTab = (tabName) => {
  activeTab.value = tabName;
};

// MODIFICADO: Solo abre el modal si el ID corresponde a un array con imágenes.
const openModal = (modalId) => {
  if (modalData[modalId] && modalData[modalId].length > 0) {
    activeModalId.value = modalId;
  }
  // Si no hay imágenes (array vacío), la función simplemente termina y no hace nada.
};

const closeModal = () => {
  activeModalId.value = null;
};
</script>

<style scoped>
/* ESTILOS ORIGINALES RESTAURADOS COMPLETAMENTE */

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
  cursor: pointer; /* RESTAURADO: El cursor es clickeable en todos por defecto */
}

.qualification__item-content {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.qualification__item-content--right {
  display: flex;
  align-items: center;
  gap: 1rem;
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

/* RESTAURADO: El efecto hover se aplica a todos los items .qualification__data */
.qualification__content .qualification__data:hover {
  transform: scale(1.08);
  position: relative;
  z-index: 5;
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
    grid-template-columns: .9fr;
  }
  .qualification__logo {
    width: 85px;
    height: 85px;
  }
}
</style>