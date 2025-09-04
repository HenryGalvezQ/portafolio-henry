<template>
  <div class="portfolio-expanded">
    <div class="portfolio-expanded__header">
      <h3 class="portfolio-expanded__title">Detalles del Proyecto</h3>
      <button 
        @click="$emit('close')" 
        class="portfolio-expanded__close"
        aria-label="Cerrar descripción expandida"
      >
        <i class="uil uil-times"></i>
      </button>
    </div>
    
    <div class="portfolio-expanded__content" ref="scrollContainer">
      <div class="portfolio-expanded__description" v-html="project.expandedDescription">
      </div>
      
      <div class="portfolio-expanded__actions">
        <button 
          @click="$emit('close')" 
          class="portfolio-expanded__read-less"
        >
          <i class="uil uil-arrow-left"></i>
          Leer menos
        </button>
      </div>
    </div>
    
    <!-- Indicador de scroll si es necesario -->
    <div 
      v-if="showScrollIndicator" 
      class="portfolio-expanded__scroll-indicator"
    >
      <i class="uil uil-angle-down"></i>
      <span>Desplaza para leer más</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PortfolioExpandedDescription',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showScrollIndicator: false
    };
  },
  mounted() {
    this.checkScrollIndicator();
    this.$refs.scrollContainer?.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    this.$refs.scrollContainer?.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
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
  max-width: 50%;
  min-width: 300px;
  background-color: var(--container-color);
  border-left: 2px solid #8b5cf6;
  padding: 1.5rem;
  margin-left: 1rem;
  border-radius: 0 0.5rem 0.5rem 0;
  display: flex;
  flex-direction: column;
  position: relative;
}

.portfolio-expanded__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--border-color);
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
  color: var(--text-color);
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
  color: #ef4444;
  transform: scale(1.1);
}

.portfolio-expanded__content {
  flex: 1;
  overflow-y: auto;
  padding-right: 0.5rem;
  margin-right: -0.5rem;
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
  color: var(--text-color);
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

.portfolio-expanded__actions {
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: flex-start;
}

.portfolio-expanded__read-less {
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
    margin-top: 1rem;
    border-left: none;
    border-top: 2px solid #8b5cf6;
    border-radius: 0.5rem;
  }
  
  .portfolio-expanded__content {
    max-height: 300px;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .portfolio-expanded {
    max-width: 55%;
  }
}

@media screen and (min-width: 992px) {
  .portfolio-expanded {
    max-width: 60%;
    padding: 2rem;
  }
  
  .portfolio-expanded__content {
    max-height: 500px;
  }
}
</style>