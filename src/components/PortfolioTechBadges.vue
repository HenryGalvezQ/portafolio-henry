// PortfolioTechBadges.vue

<template>
  <div v-if="techBadges && techBadges.length > 0" class="portfolio__tech-badges-container">
    <div 
      v-for="tech in techBadges"
      :key="tech"
      class="portfolio__tech-badge"
      @mouseenter="handleMouseEnter($event, tech)"
      @mouseleave="handleMouseLeave"
    >
      <SvgIcon :name="tech" />
    </div>
  </div>

  <Teleport to="body">
    <div 
      v-show="tooltip.visible" 
      class="custom-tooltip" 
      :style="tooltip.style"
    >
      {{ tooltip.text }}
    </div>
  </Teleport>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

import { useI18n } from 'vue-i18n';

export default {
  name: 'PortfolioTechBadges',
  setup() {
    const { t } = useI18n({ inheritLocale: true, useScope: 'local' })
    return { t }
  },
  components: {
    SvgIcon
  },
  props: {
    techBadges: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      tooltip: {
        visible: false,
        text: '',
        style: {}
      }
    };
  },
    methods: {
    handleMouseEnter(event, techName) {
      const badge = event.currentTarget;
      const rect = badge.getBoundingClientRect();

      const isZoomed = window.matchMedia('(min-width: 1600px)').matches;
      const zoomFactor = isZoomed ? 1.25 : 1;
      
      const top = (rect.top / zoomFactor) - 38;
      const left = (rect.left / zoomFactor) + (rect.width / zoomFactor / 2);

      this.tooltip.text = this.t('tooltip', { name: techName.charAt(0).toUpperCase() + techName.slice(1) });
      this.tooltip.style = {
        top: `${top}px`,
        left: `${left}px`,
        opacity: 1,
      };
      this.tooltip.visible = true;
    },
    handleMouseLeave() {
      this.tooltip.style.opacity = 0;
      setTimeout(() => {
        if (this.tooltip) {
          this.tooltip.visible = false;
        }
      }, 200);
    }
  }
}
</script>

<style scoped>
.portfolio__tech-badges-container {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: flex;
  gap: 0.5rem;
  z-index: 4;
}

.portfolio__tech-badge {
  width: 1.85rem;
  height: 1.85rem;
  background-color: white;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: auto;
}

.portfolio__tech-badge svg {
  width: 1.125rem !important;
  height: 1.125rem !important;
  max-width: 1.125rem !important;
  max-height: 1.125rem !important;
  transition: transform 0.2s ease;
}

.portfolio__tech-badge:hover svg {
  transform: scale(1.1);
}

.portfolio__tech-badge :deep(svg) {
  width: 1.125rem !important;
  height: 1.125rem !important;
  max-width: 1.125rem !important;
  max-height: 1.125rem !important;
}

/* Tooltip personalizado */
.custom-tooltip {
  position: fixed;
  transform: translateX(-50%); 
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}

.custom-tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-width: 5px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
}
</style>

<i18n lang="json">
{
  "es": {
    "tooltip": "Diseñado en {name}"
  },
  "en": {
    "tooltip": "Designed in {name}"
  }
}
</i18n>