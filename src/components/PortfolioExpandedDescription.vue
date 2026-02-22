// PortfolioExpandedDescription.vue

<template>
  <div 
    class="portfolio-expanded" 
    :class="{ 'scrolled-to-bottom': isScrolledToBottom }"
    ref="expandedContainer"
  >
    <div class="portfolio-expanded__header">
      <h3 class="portfolio-expanded__title">{{ t('title') }}</h3>
      <button 
        @click="$emit('close')" 
        class="portfolio-expanded__close"
        :aria-label="t('closeAria')"
      >
        <i class="uil uil-times"></i>
      </button>
    </div>
    
    <div 
      class="portfolio-expanded__content" 
      ref="scrollContainer" 
      :style="contentStyle"
    >
      <div class="portfolio-expanded__description" v-html="project.expandedDescription[locale]">
      </div>
    </div>

    <button @click="$emit('close')" class="portfolio-expanded__read-less">
      <i class="uil uil-arrow-left"></i>
      {{ t('readLess') }}
    </button>

    <!-- Indicador de scroll si es necesario -->
    <div 
      v-if="showScrollIndicator" 
      class="portfolio-expanded__scroll-indicator"
    >
      <i class="uil uil-angle-down"></i>
      <span>{{ t('scrollHint') }}</span>
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'PortfolioExpandedDescription',
  setup() {
    const { t } = useI18n({ inheritLocale: true, useScope: 'local' })
    const { locale } = useI18n({ useScope: 'global' })
    return { t, locale }
  },
  props: {
    project: {
      type: Object,
      required: true
    },
    wrapperHeight: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      showScrollIndicator: false,
      calculatedMaxHeight: 450, // Altura base para desktop
      originalMaxHeight: null,  // Almacena la altura original antes del hover
      isButtonHovered: false, // Detecta si hay botones en hover
      isScrolledToBottom: false
    };
  },
  computed: {
    contentStyle() {
      return {
        maxHeight: `${this.calculatedMaxHeight}px`,
        transition: 'max-height 0.3s ease'
      };
    }
  },
  watch: {
    wrapperHeight: {
      handler(newHeight, oldHeight) {
        if (newHeight && oldHeight) {
          // Si la altura aumentó, significa que los botones están en hover

          if (newHeight > oldHeight) {
            // Almacenamos la altura original si no la tenemos

            if (!this.originalMaxHeight) {
              this.originalMaxHeight = this.calculatedMaxHeight;
            }
            this.isButtonHovered = true;
            this.calculateContentHeight(newHeight);
          }
          // Si la altura disminuyó, significa que se quitó el hover 
          else if (newHeight < oldHeight && this.originalMaxHeight) {
            this.isButtonHovered = false;
            // Restauramos la altura original
            this.calculatedMaxHeight = this.originalMaxHeight;
            this.originalMaxHeight = null; // Limpiamos para el próximo ciclo
          }
        } else if (newHeight && !oldHeight) {
          // Primera vez que recibimos altura
          this.calculateContentHeight(newHeight);
        }
        
        // Recalculamos el indicador de scroll
        this.$nextTick(() => {
          this.checkScrollIndicator();
        });
      },
      immediate: true
    }
  },
  mounted() {
    this.checkScrollIndicator();
    this.$refs.scrollContainer?.addEventListener('scroll', this.handleScroll);
    
    // Si no tenemos wrapperHeight inicial, calculamos una altura base
    if (!this.wrapperHeight) {
      this.$nextTick(() => {
        this.calculateInitialHeight();
      });
    }
  },
  beforeUnmount() {
    this.$refs.scrollContainer?.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    calculateContentHeight(wrapperHeight) {
      // Solo calculamos nueva altura si los botones están en hover
      if (!this.isButtonHovered) {
        return;
      }
      
      this.$nextTick(() => {
        const expandedContainer = this.$refs.expandedContainer;
        if (!expandedContainer) return;

        // Obtenemos las alturas de los elementos fijos
        const header = expandedContainer.querySelector('.portfolio-expanded__header');
        const readLessButton = expandedContainer.querySelector('.portfolio-expanded__read-less');
        
        const headerHeight = header ? header.offsetHeight : 0;
        const buttonHeight = readLessButton ? readLessButton.offsetHeight : 0;
        const containerPadding = 80; // padding del contenedor + márgenes
        
        // Calculamos la altura disponible para el contenido
        let availableHeight = wrapperHeight - headerHeight - buttonHeight - containerPadding;
        
        // Establecemos límites según el viewport
        const minHeight = 200;
        let maxHeight;
        
        if (window.innerWidth >= 992) {
          maxHeight = 500; // Aumentamos un poco el límite para hover
        } else if (window.innerWidth <= 567) {
          maxHeight = 350;
        } else {
          maxHeight = 450;
        }
        
        // Aplicamos los límites
        this.calculatedMaxHeight = Math.max(minHeight, Math.min(availableHeight, maxHeight));
      });
    },
    
    calculateInitialHeight() {
      // Altura inicial basada en viewport cuando no hay wrapperHeight
      if (window.innerWidth >= 992) {
        this.calculatedMaxHeight = 500;
      } else if (window.innerWidth <= 567) {
        this.calculatedMaxHeight = 300;
      } else {
        this.calculatedMaxHeight = 400;
      }
      
      this.checkScrollIndicator();
    },
    
    checkScrollIndicator() {
      this.$nextTick(() => {
        const container = this.$refs.scrollContainer;
        if (container) {
          this.showScrollIndicator = container.scrollHeight > container.clientHeight;
        }
      });
    },
    
    handleScroll(event) {
      const container = event.target;
      const isNearBottom = container.scrollTop + container.clientHeight >= container.scrollHeight - 10;
      
      this.isScrolledToBottom = isNearBottom;
      
      if (isNearBottom && this.showScrollIndicator) {
        this.showScrollIndicator = false;
      }
    }
  }
}
</script>

<style scoped>
.portfolio-expanded {
  flex: 1;
  min-width: 300px;
  background-color: var(--container-color);
  border-left: 2px solid #8b5cf6;
  padding: 1.5rem 1.5rem 5rem;
  margin-left: 1rem;
  border-radius: 0 0.5rem 0.5rem 0;
  display: flex;
  flex-direction: column;
  position: relative;
}

.portfolio-expanded::before {
  content: '';
  position: absolute;
  bottom: 5rem;
  left: 1.5rem;
  right: 1.5rem;
  height: 3em;
  background: linear-gradient(transparent, var(--container-color));
  pointer-events: none;
  z-index: 5;
  transition: opacity 0.3s ease;
  opacity: 1;
}

.portfolio-expanded.scrolled-to-bottom::before {
  opacity: 0;
}

.portfolio-expanded__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
  flex-shrink: 0;
}

.portfolio-expanded__title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  margin: 0;
}

.portfolio-expanded__close {
  background: none;
  border: none;
  font-size: 1.25rem;
  color: var(--subtitle-color);
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.portfolio-expanded__close:hover {
  background-color: #f3f4f6;
  color: #8b5cf6;
  transform: scale(1.1);
}

.portfolio-expanded__content {
  flex: 1;
  overflow-y: auto;
  padding-right: 1.5rem;
  margin-right: -1.5rem;
  scrollbar-width: thin;
  scrollbar-color: #8b5cf6 transparent;
}

.portfolio-expanded__content::-webkit-scrollbar {
  width: 6px;
}

.portfolio-expanded__content::-webkit-scrollbar-track {
  background: transparent;
}

.portfolio-expanded__content::-webkit-scrollbar-thumb {
  background-color: #8b5cf6;
  border-radius: 3px;
}

.portfolio-expanded__content::-webkit-scrollbar-thumb:hover {
  background-color: #7c3aed;
}

.portfolio-expanded__description {
  line-height: 1.7;
  color: var(--subtitle-color);
}

/* Estilos para el contenido HTML */
.portfolio-expanded__description :deep(h3) {
  color: #8b5cf6;
  font-size: var(--h3-font-size);
  font-weight: var(--font-semi-bold);
  margin: 0 0 1rem 0;
}

.portfolio-expanded__description :deep(h4) {
  color: var(--title-color);
  font-size: var(--normal-font-size);
  font-weight: var(--font-medium);
  margin: 1.5rem 0 0.75rem 0;
}

.portfolio-expanded__description :deep(p) {
  margin-bottom: 1rem;
  text-align: justify;
}

.portfolio-expanded__description :deep(strong) {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
}

.portfolio-expanded__description :deep(ul) {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.portfolio-expanded__description :deep(li) {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

.portfolio-expanded__description :deep(li strong) {
  color: #8b5cf6;
}

.portfolio-expanded__read-less {
  position: absolute;
  left: 1.5rem;
  bottom: 1.5rem;
  z-index: 10;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(45deg, #8b5cf6, #7c3aed);
  color: white;
  border: none;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: all 0.3s ease;
}

.portfolio-expanded__read-less:hover {
  background: linear-gradient(45deg, #7c3aed, #6d28d9);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
}

.portfolio-expanded__scroll-indicator {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #8b5cf6;
  font-size: var(--small-font-size);
  animation: bounce 2s infinite;
  pointer-events: none;
}

.portfolio-expanded__scroll-indicator i {
  font-size: 1rem;
  margin-bottom: 0.25rem;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-5px);
  }
  60% {
    transform: translateY(-3px);
  }
}

/* Responsividad */
@media screen and (max-width: 567px) {
  .portfolio-expanded {
    max-width: 100%;
    margin-left: 0;
    margin-top: 0; /* Eliminar separación */
    border-left: none;
    border-top: 2px solid #8b5cf6;
    border-radius: 0 0 0.5rem 0.5rem; /* Solo esquinas inferiores redondeadas */
  }
  
  .portfolio-expanded::before {
    left: 1.5rem;
    right: 1.5rem;
  }
}

@media screen and (min-width: 992px) {
  .portfolio-expanded {
    padding: 2rem 2rem 6rem;
  }
  
  .portfolio-expanded::before {
    bottom: 6rem;
    left: 2rem;
    right: 2rem;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "title": "Detalles del Proyecto",
    "closeAria": "Cerrar descripción expandida",
    "readLess": "Leer menos",
    "scrollHint": "Desplaza para leer más"
  },
  "en": {
    "title": "Project Details",
    "closeAria": "Close expanded description",
    "readLess": "Read less",
    "scrollHint": "Scroll to read more"
  }
}
</i18n>