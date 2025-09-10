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
        
        const tagElements = container.querySelectorAll('.portfolio__tag');
        if (tagElements.length <= 1) return;
        
        let totalTagWidth = 0;
        tagElements.forEach(tag => {
          totalTagWidth += tag.offsetWidth;
        });
        
        const containerWidth = container.offsetWidth;
        const availableSpace = containerWidth - totalTagWidth;
        const gap = Math.max(0.2 * 16, availableSpace / (tagElements.length - 1));
        
        container.style.gap = `${Math.min(gap, 0.6 * 16)}px`;
      });
    }
  },
  mounted() {
    this.calculateTagSpacing();
  },
  updated() {
    this.calculateTagSpacing();
  }
}
</script>

<style scoped>
.portfolio__tags {
  display: flex;
  align-items: center;
  width: 100%;
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