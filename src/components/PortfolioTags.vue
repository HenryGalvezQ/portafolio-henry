// PortfolioTags.vue

<template>
  <div v-if="tags && tags.length > 0" class="portfolio__tags" ref="tagsContainer">
    <span 
      v-for="tag in tags" 
      :key="tag" 
      class="portfolio__tag"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script>
  export default {
    name: 'PortfolioTags',
    props: {
      tags: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      calculateTagSpacing() {
        if (!this.tags || this.tags.length <= 1) return;
        
        this.$nextTick(() => {
          const container = this.$refs.tagsContainer;
          if (!container) return;
          
          container.style.gap = '0px';

          const tagElements = container.querySelectorAll('.portfolio__tag');
          if (tagElements.length <= 1) return;
          
          let totalTagWidth = 0;
          tagElements.forEach(tag => {
            totalTagWidth += tag.getBoundingClientRect().width;
          });
          
          const containerWidth = container.getBoundingClientRect().width;
          const availableSpace = containerWidth - totalTagWidth;
          
          let finalGap = 0;
          
          if (availableSpace > 0) {
            const idealGap = availableSpace / (tagElements.length - 1);
            
            // --- CAMBIA ESTA LÍNEA ---
            const maxGap = 5; // Límite máximo de 5px

            finalGap = Math.min(idealGap, maxGap);
          }
          
          if (container.style.gap !== `${finalGap}px`) {
            container.style.gap = `${finalGap}px`;
          }
        });
      }
    },
    mounted() {
      // --- ESTA ES LA NUEVA LÓGICA ---
      let attempts = 0;
      // Creamos un intervalo que ejecutará el cálculo 5 veces durante medio segundo.
      const intervalId = setInterval(() => {
        this.calculateTagSpacing();
        attempts++;
        // Después de 5 intentos, detenemos el intervalo para no gastar recursos.
        if (attempts >= 5) {
          clearInterval(intervalId);
        }
      }, 100); // Se ejecuta cada 100 milisegundos
    },
    updated() {
      // Updated sigue siendo útil si la lista de tags cambia dinámicamente.
      this.calculateTagSpacing();
    }
  }
</script>

<style scoped>
.portfolio__tags {
  display: flex;
  align-items: center;
  
  margin-bottom: 0.875rem;
}

.portfolio__tag {
  background-color: #777f8d;
  color: white;
  padding: 0.1875rem 0.375rem;
  border-radius: 0.75rem;
  font-size: 0.595rem;
  font-weight: 500;
  white-space: nowrap;
  line-height: 1.2;
}
</style>