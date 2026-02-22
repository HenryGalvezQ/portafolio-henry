// PortfolioCard.vue

<template>
  <div 
    class="portfolio-card__content" 
    :class="{ 
      'is-expanded-mode': isExpanded,
      'parent-is-hovered': isHovered && !isExpanded
    }"
  >
    <PortfolioTags :tags="project.tags[locale]" />

    <div class="carousel-wrapper">
      <PortfolioImageCarousel
        ref="carousel"
        :images="project.images"
        :alt="project.title[locale]"
        :tech-badges="project.techBadge"
        :is-expanded="isExpanded"
        @carousel-hint-shown="handleCarouselHintShown"
        @open-modal="showModal = true"
      />
    </div>
    <Teleport to="body">
      <CertificateModal 
        v-if="showModal"
        :show="showModal" 
        :images="project.images"
        :is-vertical="false"
        @close="showModal = false"
      />
    </Teleport>
    <div class="portfolio__data">
      <h3 class="portfolio__title">{{ project.title[locale] }}</h3>
      <div class="portfolio__description-container">
        <p class="portfolio__description">
          {{ project.description[locale] }}
          <button 
            v-if="project.expandedDescription"
            @click="$emit('toggle-expand')"
            class="portfolio__read-more"
          >
            {{ isExpanded ? t('readLess') : t('readMore') }}
          </button>
        </p>
      </div>
      <div class="portfolio__cta" :class="{ 'portfolio__cta--visible': isExpanded }">
        <i class="uil uil-rocket"></i>
        <span>{{ t('cta') }} <i class="uil uil-arrow-down"></i></span> 
      </div>
      <PortfolioActionButtons
        :buttons="project.buttons"
        :hover-state="{ 
          'demo-hover': project.buttons.length === 4 && hoveredButton === 1,
          'presentation-hover': project.buttons.length === 4 && hoveredButton === 4
        }"
        :class="{ 'is-visible': (isHovered && !isExpanded) || isExpanded,'is-expanded-mode': isExpanded }"
        @button-hover="handleButtonHover"
        @button-leave="handleButtonLeave"
        @height-change="measureAndEmitHeight"
      />
    </div>
    <div 
      v-if="!isExpanded"
      class="portfolio__expand-button"
      @click.stop="$emit('toggle-expand')"
    >
      <span>{{ t('viewMore') }}</span>
      <i class="uil uil-arrow-down"></i>
    </div>
  </div>
</template>

<script>
import PortfolioTags from './PortfolioTags.vue';
import PortfolioImageCarousel from './PortfolioImageCarousel.vue';
import PortfolioActionButtons from './PortfolioActionButtons.vue';
import CertificateModal from './CertificateModal.vue';

import { useI18n } from 'vue-i18n';

export default {
  name: 'PortfolioCard',
  setup() {
    const { t } = useI18n({ inheritLocale: true, useScope: 'local' })
    const { locale } = useI18n({ useScope: 'global' })
    return { t, locale }
  },
  components: {
    PortfolioTags,
    PortfolioImageCarousel,
    PortfolioActionButtons,
    CertificateModal
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    isExpanded: {
      type: Boolean,
      default: false
    },
    isHovered: {
      type: Boolean,
      default: false
    }
  },
  emits: ['toggle-expand', 'resize'],
  data() {
    return {
      hoveredButton: null,
      lockHover: false,
      showCarouselHint: false,
      showModal: false,
      resizeObserver: null,
      lastReportedHeight: 0,
    };
  },
  mounted() {
    // Este observer sirve como fallback para otros cambios de tamaño.
    this.resizeObserver = new ResizeObserver(() => {
        this.measureAndEmitHeight();
    });
    this.resizeObserver.observe(this.$el);
  },
  beforeUnmount() {
    if (this.resizeObserver) this.resizeObserver.disconnect();
  },
  methods: {
    measureAndEmitHeight() {
      this.$nextTick(() => {
        let newHeight = Math.round(this.$el.scrollHeight);

        //// Condición: ¿Está el mouse sobre el botón 1 o 4?
       // const isHoveringWrapButton = this.hoveredButton === 1 || this.hoveredButton === 4;
          const isHoveringAnyButton = this.hoveredButton !== null;
        // Si es así, añade el margen de seguridad. Si no, no hagas nada.
        if (isHoveringAnyButton) {
          newHeight += 35; // <-- ESTA ES LA "ALTURA AÑADIDA"
        }

        if (newHeight > 0 && newHeight !== this.lastReportedHeight) {
          this.lastReportedHeight = newHeight;
          this.$emit('resize', newHeight);
        }
      });
    },
    handleCarouselHintShown() {
      this.showCarouselHint = true;
      setTimeout(() => { this.showCarouselHint = false; }, 1000);
    },
    handleButtonHover(buttonId) {
      if (this.lockHover) return;
      this.hoveredButton = buttonId;
      if (this.project.buttons.length === 4 && (buttonId === 1 || buttonId === 4)) {
        this.lockHover = true;
        setTimeout(() => { this.lockHover = false; }, 350);
      }
      // Forzar medición después de hover
      this.$nextTick(() => {
        this.measureAndEmitHeight();
      });
    },
    handleButtonLeave() {
      if (this.lockHover) return;
      this.hoveredButton = null;
      // Forzar medición después de leave
      this.$nextTick(() => {
        this.measureAndEmitHeight();
      });
    },
  },
  watch: {
    showModal(value) {
      if (value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    isExpanded(newVal) {
      this.hoveredButton = null;
      this.lockHover = false;
    },
    isHovered(newVal) {
      if (!newVal) {
        this.hoveredButton = null;
        this.lockHover = false;
        this.showCarouselHint = false;
      }
    }
  }
}
</script>

<style scoped>
/* Esta clase ya no es una "card", es solo un contenedor de contenido. */
.portfolio-card__content {
  display: flex;
  flex-direction: column;
  flex: 1;
  transition: transform 0.4s ease;
}

/* En modo expandido, sí aplicamos padding y el borde redondeado específico */
.portfolio-card__content.is-expanded-mode {
  z-index: 5;
  border-radius: 0.5rem 0 0 0.5rem;
  background-color: var(--container-color);
  padding: 1.5rem;
  flex: none;         /* Anula el 'flex: 1' de la clase base. */
  width: 340px;       /* Mantiene el ancho original que tenía la tarjeta. */
  box-sizing: border-box; /* Asegura que el padding se incluya dentro de los 340px. */
}

@media screen and (max-width: 567px) {
  .portfolio-card__content.is-expanded-mode {
    border-radius: 0.5rem 0.5rem 0 0; /* Solo esquinas superiores redondeadas */
  }
}

@media screen and (min-width: 992px) {
  .portfolio-card__content.is-expanded-mode {
    padding: 1.6rem;
  }
}

.carousel-wrapper {
  flex-shrink: 0;
}

.portfolio__data {
  padding: 0 .5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.portfolio__title {
  font-size: var(--h3-font-size);
  margin-bottom: var(--mb-0-5);
}

.portfolio__description-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.portfolio__description {
  margin-bottom: var(--mb-0-72);
  color: var(--subtitle-color);
  flex-grow: 1;
  max-height: 4.3em;
  overflow: hidden;
  transition: max-height 0.4s ease-in-out;
  position: relative;
}

.portfolio__description::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1.5em;
  background: linear-gradient(transparent, var(--container-color));
  pointer-events: none;
  transition: opacity 0.4s ease-in-out;
}

.parent-is-hovered .portfolio__description {
  max-height: 200px;
}

.parent-is-hovered .portfolio__description::after {
  opacity: 0;
}

.is-expanded-mode .portfolio__description {
  max-height: none;
}

.is-expanded-mode .portfolio__description::after {
  display: none;
}

.portfolio__read-more {
  background: none;
  border: none;
  color: #8b5cf6;
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
  padding: 0;
  align-self: flex-start;
  transition: color 0.3s ease;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.portfolio__read-more:hover {
  color: #7c3aed;
}

.portfolio__cta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #8b5cf6;
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  margin: var(--mb-0-5) 0;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  height: 0;
  overflow: hidden;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0s 0.4s, height 0.4s ease;
}

.parent-is-hovered .portfolio__cta,
.portfolio__cta--visible {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  height: auto;
  transition: opacity 0.4s ease 0.1s, transform 0.4s ease 0.1s, visibility 0s 0.1s, height 0.4s ease 0.1s;
}

.portfolio__cta i {
  font-size: 1rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

.portfolio__expand-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  width: 100%;
  padding: 1rem;
  margin-top: auto;
  border-top: 1px solid var(--border-color);
  color: white;
  background-color: #8b5cf6;
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
  border-radius: .5rem;
  transition: opacity 0.3s ease, height 0.3s ease, padding 0.3s ease;
  height: 40px;
}

.portfolio__expand-button:hover {
  background-color: #7c3aed;
}

.parent-is-hovered .portfolio__expand-button {
  opacity: 0;
  height: 0;
  padding: 0;
  margin: 0;
  overflow: hidden;
  border-top: none;
  transition: opacity 0.3s ease, height 0.3s ease, padding 0.3s ease;
}

.portfolio__expand-button i {
  transition: transform .3s;
}

.parent-is-hovered .portfolio__expand-button i {
  transform: translateY(5px);
}

.is-expanded-mode .portfolio__description-container {
  flex-grow: 0;
}
</style>

<i18n lang="json">
{
  "es": {
    "readMore": "Leer más",
    "readLess": "Leer menos",
    "cta": "Explora el proyecto aquí",
    "viewMore": "Ver más"
  },
  "en": {
    "readMore": "Read more",
    "readLess": "Read less",
    "cta": "Explore the project here",
    "viewMore": "View more"
  }
}
</i18n>
