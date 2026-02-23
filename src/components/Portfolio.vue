// Portafolio.vue

<template>
  <section class="portfolio section" id="portfolio">
    <h2 class="section__title">{{ t('title') }}</h2>
    <span class="section__subtitle">{{ t('subtitle') }}</span>

    <div class="portfolio__filters-wrapper container">
      <PortfolioFilters @filter-change="onFilterChange" />
    </div>

    <div class="portfolio__container container grid">
      <PortfolioCardWrapper 
        v-for="project in filteredProjects" 
        :key="project.id" 
        :project="project"
      />

      <!-- Estado vacío -->
      <div v-if="filteredProjects.length === 0" class="portfolio__empty">
        <UilIcon name="folder-slash" class="portfolio__empty-icon" />
        <p class="portfolio__empty-text">{{ t('empty.text') }}</p>
        <span class="portfolio__empty-hint">{{ t('empty.hint') }}</span>
      </div>
    </div>
  </section>
</template>

<script>
import UilIcon from '@/components/UilIcon.vue';
import PortfolioCardWrapper from './PortfolioCardWrapper.vue';
import PortfolioFilters from './PortfolioFilters.vue';
import { getButtonTemplates } from '@/config/button-config.js';
import projectsImages from '@/utils/image-loader.js';
import { projectsData } from '@/data/projectsData.js';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Portfolio',
  components: {
    PortfolioCardWrapper,
    PortfolioFilters,
    UilIcon
  },
  setup() {
    const { t } = useI18n({ inheritLocale: true, useScope: 'local' })
    const { locale } = useI18n({ useScope: 'global' })
    return { t, locale }
  },
  data() {
    return {
      filteredIds: null, // null = mostrar todos
    };
  },
  computed: {
    projects() {
      return this.processProjects();
    },
    filteredProjects() {
      if (!this.filteredIds) return this.projects;
      return this.projects.filter(p => this.filteredIds.includes(p.id));
    },
  },
  methods: {
    onFilterChange(ids) {
      this.filteredIds = ids;
    },
    createProjectButtons(buttonList) {
      if (!buttonList) return [];
      const templates = getButtonTemplates(this.t);
      return buttonList.map((buttonInfo, index) => {
        const template = templates[buttonInfo.type] || {};
        return {
          ...template,
          ...buttonInfo,
          id: index + 1,
        };
      });
    },
    processProjects() {
      return projectsData.map(project => ({
        ...project,
        images: projectsImages[project.folderName] || [],
        buttons: this.createProjectButtons(project.buttons),
      }));
    },
  },
};
</script>

<style scoped>

.section__subtitle {
  color: var(--subtitle-color);
}

/* ── Filtros ─────────────────────────────────────── */
.portfolio__filters-wrapper {
  /* Hereda los márgenes laterales del .container de global.css,
     igual que el resto de secciones. Solo añadimos separación inferior
     para que respire antes de la grilla de cards. */
  margin-bottom: var(--mb-2-5);
}

/* ── Grid de cards ───────────────────────────────── */
.portfolio__container {
  gap: 2.5rem;
  grid-template-columns: 1fr;
  padding-top: 0;        /* El filters-wrapper ya da el espacio superior */
  align-items: start;
}

/* ── Estado vacío ────────────────────────────────── */
.portfolio__empty {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  gap: 0.5rem;
  text-align: center;
}

.portfolio__empty-icon {
  width: 3rem;
  height: 3rem;
  color: var(--first-color);
  margin-bottom: 0.5rem;
}

.portfolio__empty-text {
  font-size: var(--h3-font-size);
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  margin: 0;
}

.portfolio__empty-hint {
  font-size: var(--small-font-size);
  color: var(--text-color-light);
}

/* ── Responsive (idéntico al original) ───────────── */
@media screen and (max-width: 350px) {
  .portfolio__container {
    grid-template-columns: max-content;
    justify-content: center;
  }
}

@media screen and (max-width: 567px) {
  .section__subtitle {
    margin-bottom: var(--mb-1-5);
  }
  .portfolio__filters-wrapper {
    margin-bottom: var(--mb-2);
  }
}

@media screen and (min-width: 568px) {
  .portfolio__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px) {
  .portfolio.section {
    padding: 7rem 0 1rem;
  }
}

@media screen and (min-width: 992px) {
  .portfolio__container {
    grid-template-columns: repeat(3, 340px);
    justify-content: center;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "title": "Portafolio",
    "subtitle": "Trabajos más recientes",
    "empty": {
      "text": "No se encontraron proyectos",
      "hint": "Prueba con otros términos o cambia los filtros"
    },
    "buttons": {
      "demo": "Demo",
      "figma": "Diseño",
      "github": "Código",
      "presentation": "Slides"
    }
  },
  "en": {
    "title": "Portfolio",
    "subtitle": "Most recent work",
    "empty": {
      "text": "No projects found",
      "hint": "Try different terms or change the filters"
    },
    "buttons": {
      "demo": "Demo",
      "figma": "Design",
      "github": "Code",
      "presentation": "Slides"
    }
  }
}
</i18n>