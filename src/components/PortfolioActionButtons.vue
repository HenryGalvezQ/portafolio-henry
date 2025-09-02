<template>
  <div ref="buttonsContainer" class="portfolio__buttons" 
       :class="{ ...hoverState, 'delayed-reorder': delayedButtonReorder }"
       @mouseleave="$emit('button-leave')">
    <a 
      v-for="button in buttons"
      :key="button.text"
      :href="button.url" 
      target="_blank" 
      rel="noopener noreferrer"
      class="button button--flex button--small portfolio__button"
      :class="['button--' + button.type, { 'portfolio__button--animated': button.animated }]"
      @mouseenter="$emit('button-hover', button.id)"
      @mouseleave="$emit('button-leave')"
    >
      <SvgIcon v-if="button.icon === 'figma' || button.icon === 'github'" :name="button.icon" />
      <i v-else :class="button.icon" class="button__icon"></i>
      
      <span class="button__text">{{ button.text }}</span>
      
      <i v-if="button.arrow" class="uil uil-arrow-right button__icon button__arrow"></i>
    </a>
  </div>
</template>

<script>
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'PortfolioActionButtons',
  components: {
    SvgIcon
  },
  props: {
    buttons: {
      type: Array,
      required: true
    },
    hoverState: {
      type: Object,
      required: true
    }
  },
  emits: ['button-hover', 'button-leave'],
  data() {
    return {
      delayedButtonReorder: false,
      collapseTimeout: null
    }
  },
  watch: {
    'hoverState.presentation-hover'(newValue, oldValue) {
      // Cuando se desactiva presentation-hover
      if (oldValue && !newValue) {
        // Activar estado temporal para delay
        this.delayedButtonReorder = true;
        
        // Limpiar timeout anterior si existe
        if (this.collapseTimeout) {
          clearTimeout(this.collapseTimeout);
        }
        
        // Después del tiempo de colapso del botón 4, permitir reordenamiento
        this.collapseTimeout = setTimeout(() => {
          this.delayedButtonReorder = false;
        }, 0); // 0ms coincide con la duración de colapso del botón 4
      } else if (newValue) {
        // Si se activa presentation-hover, cancelar delay
        this.delayedButtonReorder = false;
        if (this.collapseTimeout) {
          clearTimeout(this.collapseTimeout);
          this.collapseTimeout = null;
        }
      }
    }
  },
  mounted() {
    // Agregar listener global para detectar cuando el mouse sale del área
    document.addEventListener('mousemove', this.handleGlobalMouseMove);
  },
  beforeUnmount() {
    // Limpiar el listener y timeout
    document.removeEventListener('mousemove', this.handleGlobalMouseMove);
    if (this.collapseTimeout) {
      clearTimeout(this.collapseTimeout);
    }
  },
  methods: {
    handleGlobalMouseMove(event) {
      // Solo verificar si hay estados especiales activos
      if (this.hoverState['demo-hover'] || this.hoverState['presentation-hover']) {
        const buttonsElement = this.$refs.buttonsContainer;
        if (buttonsElement) {
          const rect = buttonsElement.getBoundingClientRect();
          const mouseX = event.clientX;
          const mouseY = event.clientY;
          
          // Si el mouse está fuera del área de botones, resetear
          if (mouseX < rect.left || mouseX > rect.right || mouseY < rect.top || mouseY > rect.bottom) {
            this.$emit('button-leave');
          }
        }
      }
    }
  }
}
</script>

<style scoped>
/* ==================== BOTONES DE ACCIÓN ==================== */
/* ==================== BOTONES DE ACCIÓN ==================== */
.portfolio__buttons {
  display: flex;
  flex-wrap: wrap;
  gap: .75rem;
  align-items: center;
  margin-top: auto;
  --button-height: 2.25rem;
  position: relative;
  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  height: 0;
  overflow: hidden;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0s 0.4s, height 0.4s ease;
}

.portfolio__card:hover .portfolio__buttons {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
  height: auto;
  transition: opacity 0.4s ease .2s, transform 0.4s ease .2s, visibility 0s .2s, height 0.4s ease .2s;
}

.portfolio__buttons.demo-hover .portfolio__button.button--presentation {
  flex-basis: 100%;
  width: 2.25rem !important;
  max-width: 2.25rem;
  flex-grow: 0;
  flex-shrink: 0;
}

.portfolio__buttons.presentation-hover .portfolio__button:nth-child(1) {
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 0s, transform 0s;
  animation: button-reappear 0.3s ease 0.24s forwards;
  flex-basis: 100%;
  width: 2.25rem !important;
  max-width: 2.25rem;
  flex-grow: 0;
  flex-shrink: 0;
  order: 4;
}

/* NUEVA REGLA: Para cuando presentation-hover se desactiva */
.portfolio__buttons:not(.presentation-hover):not(.delayed-reorder) .portfolio__button:nth-child(1) {
  animation: button-disappear-reappear 1s ease forwards;
  transition: opacity 0.3s cubic-bezier(0.2, 0, 0.38, 0.9), 
              transform 0.3s cubic-bezier(0.2, 0, 0.38, 0.9), 
              width 0.35s cubic-bezier(0.2, 0, 0.38, 0.9), 
              order 0.3s cubic-bezier(0.2, 0, 0.38, 0.9);
}

/* Mantener el botón 1 oculto durante el delay */
.portfolio__buttons.delayed-reorder .portfolio__button:nth-child(1) {
  opacity: 0;
  transform: scale(0.8);
  order: 4;
}

.portfolio__buttons.presentation-hover .portfolio__button:nth-child(2) { order: 1; }
.portfolio__buttons.presentation-hover .portfolio__button:nth-child(3) { order: 2; }
.portfolio__buttons.presentation-hover .portfolio__button:nth-child(4) { order: 3; }

/* ======================================================================== */
/* =====================  AQUÍ ESTÁN LAS CORRECCIONES  ==================== */
/* ======================================================================== */

.portfolio__button--animated:hover,
.portfolio__buttons.demo-hover .portfolio__button:first-child,
/* CORREGIDO: Apuntamos al 4to botón, no al que tenga la clase .button--presentation */
.portfolio__buttons.presentation-hover .portfolio__button:nth-child(4) {
  width: auto;
  padding: 0 1rem;
  justify-content: center;
  transition: width 0.35s cubic-bezier(0.2, 0, 0.38, 0.9), padding 0.35s cubic-bezier(0.2, 0, 0.38, 0.9);
}
.portfolio__button--animated:hover .button__text,
.portfolio__buttons.demo-hover .portfolio__button:first-child .button__text,
/* CORREGIDO: Apuntamos al texto dentro del 4to botón */
.portfolio__buttons.presentation-hover .portfolio__button:nth-child(4) .button__text {
  opacity: 1;
  width: auto;
  transition: opacity 0.25s cubic-bezier(0.2, 0, 0.38, 0.9) 0.1s, width 0.35s cubic-bezier(0.2, 0, 0.38, 0.9);
}
.portfolio__button--animated:hover .button__arrow,
.portfolio__buttons.demo-hover .portfolio__button:first-child .button__arrow,
/* CORREGIDO: Apuntamos a la flecha dentro del 4to botón */
.portfolio__buttons.presentation-hover .portfolio__button:nth-child(4) .button__arrow {
  opacity: 1;
  width: auto;
  transition: opacity 0.2s cubic-bezier(0.2, 0, 0.38, 0.9) 0.15s, width 0.35s cubic-bezier(0.2, 0, 0.38, 0.9);
  animation: arrow-bounce-in 0.75s cubic-bezier(0.4, 0, 0.2, 1) 0.15s forwards;
}

.portfolio__button--animated:first-child:hover,
.portfolio__buttons.demo-hover .portfolio__button:first-child { width: 9rem; }

/* CORREGIDO: Combinamos la regla de hover individual con la regla del contenedor */
.portfolio__button--animated:nth-child(4):hover,
.portfolio__buttons.presentation-hover .portfolio__button:nth-child(4) { width: 10rem; }

/* Mantenemos las reglas individuales de hover para los demás botones */
.portfolio__button--animated.button--figma:hover { width: 10rem; }
.portfolio__button--animated.button--github:hover { width: 10rem; }
.portfolio__button--animated.button--presentation:hover { width: 9rem; } /* Se mantiene para hover individual */


/* ======================================================================== */
/* ===================== FIN DE LAS CORRECCIONES ========================== */
/* ======================================================================== */

.portfolio__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;
  height: var(--button-height);
  padding: 0 1rem;
  order: 0;
}
.portfolio__button--animated {
  position: relative;
  overflow: hidden;
  padding: 0;
  width: 2.25rem;
  transition: width 0.35s cubic-bezier(0.2, 0, 0.38, 0.9), padding 0.35s cubic-bezier(0.2, 0, 0.38, 0.9);
  justify-content: flex-start;
  padding-left: 0.5rem;
}
/* Estados específicos para transiciones de colapso */
.portfolio__button--animated:not(:hover),
.portfolio__buttons:not(.demo-hover) .portfolio__button--animated:first-child,
.portfolio__buttons:not(.presentation-hover) .portfolio__button--animated.button--presentation {
  transition: width 0.35s cubic-bezier(0.2, 0, 0.38, 0.9), padding 0.35s cubic-bezier(0.2, 0, 0.38, 0.9);
}

.portfolio__button--animated:not(:hover) .button__text,
.portfolio__buttons:not(.demo-hover) .portfolio__button--animated:first-child .button__text,
.portfolio__buttons:not(.presentation-hover) .portfolio__button--animated.button--presentation .button__text {
  transition: opacity 0.4s cubic-bezier(0.2, 0, 0.38, 0.9), width 0.35s cubic-bezier(0.2, 0, 0.38, 0.9);
}

.portfolio__button--animated:not(:hover) .button__arrow,
.portfolio__buttons:not(.demo-hover) .portfolio__button--animated:first-child .button__arrow,
.portfolio__buttons:not(.presentation-hover) .portfolio__button--animated.button--presentation .button__arrow {
  transition: opacity 0.4s cubic-bezier(0.2, 0, 0.38, 0.9), transform 0.35s cubic-bezier(0.2, 0, 0.38, 0.9), width 0.35s cubic-bezier(0.2, 0, 0.38, 0.9);
}

.portfolio__button--animated .button__text {
  opacity: 0;
  white-space: nowrap;
  margin: 0 0.5rem;
  transition: opacity 0.25s cubic-bezier(0.2, 0, 0.38, 0.9), width 0.35s cubic-bezier(0.2, 0, 0.38, 0.9);
  width: 0;
  overflow: hidden;
}
.portfolio__button--animated .button__arrow {
  opacity: 0;
  transform: translateX(0rem);
  transition: opacity 0.25s cubic-bezier(0.2, 0, 0.38, 0.9), transform 0.35s cubic-bezier(0.2, 0, 0.38, 0.9), width 0.35s cubic-bezier(0.2, 0, 0.38, 0.9);
  width: 0;
  overflow: hidden;
}
.portfolio__button--animated .uil-dribbble,
.portfolio__button--animated .uil-presentation-play,
.portfolio__button--animated svg {
  opacity: 1 !important;
  display: flex !important;
  flex-shrink: 0;
}
.button--figma svg,
.button--github svg {
  width: 19px !important;
  height: 19px !important;
  max-width: 19px !important;
  max-height: 19px !important;
}
.button--figma :deep(svg),
.button--github :deep(svg) {
  width: 19px !important;
  height: 19px !important;
  max-width: 19px !important;
  max-height: 19px !important;
}
.button--figma, .button--github, .button--presentation { 
  color: white;
  transition: box-shadow 0.3s ease;
}
.button--figma { background-color: #ff9ad5; }
.button--figma:hover { 
  background-color: #ff7bc8; 
  box-shadow: 0 6px 20px rgba(255, 154, 213, 0.5);
}
.button--github { background-color: #88bef5; }
.button--github:hover { 
  background-color: #6caff3; 
  box-shadow: 0 6px 20px rgba(136, 190, 245, 0.5);
}
.button--presentation { background-color: #ffb788; }
.button--presentation:hover { 
  background-color: #eb9b65; 
  box-shadow: 0 6px 20px rgba(255, 183, 136, 0.5);
}

.button--demo {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  color: white;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease;
}

.button--demo::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
  transition: left 0.5s;
}

.button--demo:hover::before {
  left: 100%;
}

.button--demo:hover {
  background: linear-gradient(135deg, #8b5cf6, #ec4899);
  box-shadow: 0 6px 20px rgba(139, 92, 246, 0.5);
}

.button--demo .uil-play {
  animation: pulse 2s infinite;
}
.portfolio__button:not(.portfolio__button--animated):hover .uil-arrow-right {
  transform: translateX(.25rem);
}
.button__icon {
  transition: transform .3s;
  display: inline-flex;
  align-items: center;
  margin: 0;
}

/* Nueva animación para desaparecer y reaparecer al desactivar presentation-hover */
.portfolio__buttons:not(.presentation-hover):not(.delayed-reorder) .portfolio__button:nth-child(1) {
  animation: button-disappear-reappear 1.4s cubic-bezier(0.55, 0, 0.2, 1) forwards;
}

@keyframes arrow-bounce-in {
  0% { transform: translateX(0rem); }
  50% { transform: translateX(.4rem); }
  100% { transform: translateX(.25rem); }
}

@keyframes button-reappear {
  0% { 
    opacity: 0; 
    transform: scale(0.8) translateY(-10px); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1) translateY(0); 
  }
}

@keyframes button-disappear-reappear {
  0% { 
    opacity: 0; 
    transform: scale(0.95) translateY(3px); 
  }
  100% { 
    opacity: 1; 
    transform: scale(1) translateY(0); 
  }
}
</style>