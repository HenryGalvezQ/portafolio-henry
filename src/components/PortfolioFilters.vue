<template>
  <div class="portfolio-filters">
    <!-- Fila: input + listbox -->
    <div class="portfolio-filters__search-row">
      <div class="portfolio-filters__search-wrapper">
        <i class="uil uil-search portfolio-filters__search-icon"></i>
        <input
          v-model="searchQuery"
          type="text"
          class="portfolio-filters__input"
          placeholder="Buscar proyectos..."
          aria-label="Buscar proyectos"
        />
        <button
          v-if="searchQuery"
          class="portfolio-filters__clear-btn"
          @click="searchQuery = ''"
          aria-label="Limpiar búsqueda"
        >
          <i class="uil uil-times"></i>
        </button>
      </div>

      <!-- Listbox campo de búsqueda -->
      <div class="portfolio-filters__listbox-wrapper" ref="listboxWrapper">
        <button
          class="portfolio-filters__listbox-btn"
          @click="listboxOpen = !listboxOpen"
          :aria-expanded="listboxOpen"
          aria-haspopup="listbox"
        >
          <i :class="searchFieldIcons[searchField]"></i>
          <span class="portfolio-filters__listbox-label">{{ searchFieldLabels[searchField] }}</span>
          <i
            class="uil uil-angle-down portfolio-filters__listbox-arrow"
            :class="{ 'is-open': listboxOpen }"
          ></i>
        </button>

        <Transition name="pf-dropdown">
          <ul
            v-if="listboxOpen"
            class="portfolio-filters__listbox"
            role="listbox"
            aria-label="Campo de búsqueda"
          >
            <li
              v-for="option in searchFieldOptions"
              :key="option.value"
              class="portfolio-filters__listbox-option"
              :class="{ 'is-selected': searchField === option.value }"
              role="option"
              :aria-selected="searchField === option.value"
              @click="selectField(option.value)"
            >
              <i :class="option.icon"></i>
              <span>{{ option.label }}</span>
              <i v-if="searchField === option.value" class="uil uil-check portfolio-filters__check"></i>
            </li>
          </ul>
        </Transition>
      </div>
    </div>

    <!-- Chips de tags -->
    <div class="portfolio-filters__tags-row">
      <button
        v-for="tag in allTags"
        :key="tag"
        class="portfolio-filters__tag-chip"
        :class="{ 'is-active': activeTag === tag }"
        @click="selectTag(tag)"
      >
        {{ tag }}
      </button>
    </div>

    <!-- Contador de resultados (solo si hay filtros activos) -->
    <p
      class="portfolio-filters__results-count"
    >
      <span class="portfolio-filters__results-number">{{ resultsCount }}</span>
      {{ resultsCount === 1 ? 'proyecto encontrado' : 'proyectos encontrados' }}
    </p>
  </div>
</template>

<script>
import { projectsData } from '@/data/projectsData.js';

export default {
  name: 'PortfolioFilters',
  emits: ['filter-change'],
  data() {
    return {
      searchQuery: '',
      searchField: 'title',
      activeTag: 'Todos',
      listboxOpen: false,
      searchFieldOptions: [
        { value: 'todos',       label: 'Todos los campos', icon: 'uil uil-apps'        },
        { value: 'title',       label: 'Título',           icon: 'uil uil-sliders-v-alt'     },
        { value: 'description', label: 'Descripción',      icon: 'uil uil-file-alt'    },
        { value: 'tags',        label: 'Tags',             icon: 'uil uil-label'       },
        { value: 'techBadge',   label: 'Tecnología',       icon: 'uil uil-code-branch' },
      ],
      searchFieldLabels: {
        todos:       'Todos los campos',
        title:       'Título',
        description: 'Descripción',
        tags:        'Tags',
        techBadge:   'Tecnología',
      },
      searchFieldIcons: {
        todos:       'uil uil-apps',
        title:       'uil uil-sliders-v-alt',
        description: 'uil uil-file-alt',
        tags:        'uil uil-label',
        techBadge:   'uil uil-code-branch',
      },
    };
  },
  computed: {
    allTags() {
      const tagSet = new Set();
      projectsData.forEach(p => {
        if (p.tags) p.tags.forEach(t => tagSet.add(t.trim()));
      });
      return ['Todos', ...Array.from(tagSet).sort()];
    },
    filteredProjects() {
      let results = [...projectsData];

      // Filtro por tag activo
      if (this.activeTag !== 'Todos') {
        results = results.filter(p =>
          p.tags && p.tags.some(t => t.trim() === this.activeTag)
        );
      }

      // Filtro por texto
      const q = this.searchQuery.toLowerCase().trim();
      if (q) {
        results = results.filter(p => {
          switch (this.searchField) {
            case 'title':
              return p.title.toLowerCase().includes(q);
            case 'description':
              return p.description.toLowerCase().includes(q);
            case 'tags':
              return p.tags && p.tags.some(t => t.toLowerCase().includes(q));
            case 'techBadge':
              return p.techBadge && p.techBadge.some(b => b.toLowerCase().includes(q));
            default: // 'todos'
              return (
                p.title.toLowerCase().includes(q) ||
                p.description.toLowerCase().includes(q) ||
                (p.tags && p.tags.some(t => t.toLowerCase().includes(q))) ||
                (p.techBadge && p.techBadge.some(b => b.toLowerCase().includes(q)))
              );
          }
        });
      }

      return results;
    },
    resultsCount() {
      return this.filteredProjects.length;
    },
  },
  watch: {
    filteredProjects(val) {
      this.$emit('filter-change', val.map(p => p.id));
    },
  },
  mounted() {
    document.addEventListener('click', this.handleOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick);
  },
  methods: {
    selectField(value) {
      this.searchField = value;
      this.listboxOpen = false;
    },
    selectTag(tag) {
      if (tag !== 'Todos' && this.activeTag === tag) {
        this.activeTag = 'Todos';
      } else {
        this.activeTag = tag;
      }
    },
    handleOutsideClick(e) {
      if (this.$refs.listboxWrapper && !this.$refs.listboxWrapper.contains(e.target)) {
        this.listboxOpen = false;
      }
    },
  },
};
</script>

<style scoped>
/* =====================================================
   PORTFOLIO FILTERS
   - Sin márgenes laterales propios: los hereda del
     .container padre (global.css max-width: 768px,
     margin auto en ≥768px, var(--mb-1-5) en móvil).
   - Usa variables CSS del sistema (--mb-*, --*-font-size,
     --first-color, --container-color, etc.)
   ===================================================== */

.portfolio-filters {
  display: flex;
  flex-direction: column;
  gap: var(--mb-0-75);
  width: 100%;
}

/* ── Fila buscador + listbox ─────────────────────── */
.portfolio-filters__search-row {
  display: flex;
  gap: 0.75rem;
  align-items: center;
  width: 100%;
}

/* Input */
.portfolio-filters__search-wrapper {
  position: relative;
  flex: 1;
  min-width: 0;
}

.portfolio-filters__search-icon {
  position: absolute;
  left: 0.875rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--first-color);
  font-size: 1.1rem;
  pointer-events: none;
}

.portfolio-filters__input {
  width: 100%;
  padding: 0.65rem 2.25rem 0.65rem 2.5rem;
  border: 1.5px solid var(--scroll-bar-color);
  border-radius: .5rem;
  background-color: var(--container-color);
  color: var(--text-color);
  font-size: var(--normal-font-size);
  font-family: var(--body-font);
  transition: box-shadow 0.3s ease;
  box-sizing: border-box;
}

.portfolio-filters__input:focus {
  outline: none;
  border-color: var(--first-color);
  box-shadow: 0 0 0 3px var(--first-color-lighter);
}

.portfolio-filters__input::placeholder {
  color: var(--text-color-light);
}

.portfolio-filters__clear-btn {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--text-color-light);
  cursor: pointer;
  padding: 0.15rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  line-height: 1;
  transition: color 0.2s ease;
}

.portfolio-filters__clear-btn:hover {
  color: var(--first-color);
}

/* ── Listbox ─────────────────────────────────────── */
.portfolio-filters__listbox-wrapper {
  position: relative;
  flex-shrink: 0;
}

.portfolio-filters__listbox-btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 0.875rem;
  background-color: var(--container-color);
  border: 1.5px solid var(--scroll-bar-color);
  border-radius: .5rem;
  color: var(--text-color);
  font-size: var(--small-font-size);
  font-family: var(--body-font);
  font-weight: var(--font-medium);
  cursor: pointer;
  white-space: nowrap;
  transition: box-shadow 0.3s ease;
}

.portfolio-filters__listbox-btn:hover,
.portfolio-filters__listbox-btn[aria-expanded="true"] {
  border-color: var(--first-color);
  box-shadow: 0 0 0 3px var(--first-color-lighter);
}

.portfolio-filters__listbox-btn i:first-child {
  color: var(--first-color);
  font-size: 1rem;
}

/* Label oculto en móvil, visible en ≥480px */
.portfolio-filters__listbox-label {
  display: none;
}

.portfolio-filters__listbox-arrow {
  font-size: 1.1rem;
  color: var(--text-color-light);
  transition: transform 0.25s ease;
}

.portfolio-filters__listbox-arrow.is-open {
  transform: rotate(180deg);
}

/* Dropdown */
.portfolio-filters__listbox {
  position: absolute;
  top: calc(100% + 0.4rem);
  right: 0;
  z-index: var(--z-tooltip);
  background-color: var(--container-color);
  border: 1.5px solid var(--scroll-bar-color);
  border-radius: .5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  list-style: none;
  padding: 0.375rem 0;
  margin: 0;
  min-width: 190px;
  overflow: hidden;
}

.portfolio-filters__listbox-option {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.625rem 1rem;
  cursor: pointer;
  font-size: var(--small-font-size);
  color: var(--text-color);
  transition: background-color 0.2s ease, color 0.2s ease;
}

.portfolio-filters__listbox-option:hover {
  background-color: var(--input-color);
  color: var(--first-color);
}

.portfolio-filters__listbox-option.is-selected {
  color: var(--first-color);
  font-weight: var(--font-medium);
}

.portfolio-filters__listbox-option i:first-child {
  font-size: 1rem;
  width: 1rem;
  flex-shrink: 0;
}

.portfolio-filters__listbox-option span {
  flex: 1;
}

.portfolio-filters__check {
  font-size: 0.9rem;
  color: var(--first-color);
}

/* ── Chips de tags ───────────────────────────────── */
.portfolio-filters__tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: var(--mb-0-5);
  width: 100vw;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  padding-left: var(--mb-1-5);
  padding-right: var(--mb-1-5);
  justify-content: center;

}

.portfolio-filters__tag-chip {
  padding: 0.3rem 0.8rem;
  border-radius: 2rem;
  border: 1.5px solid var(--scroll-bar-color);
  background-color: var(--container-color);
  color: var(--text-color);
  font-size: var(--smaller-font-size);
  font-family: var(--body-font);
  font-weight: var(--font-medium);
  cursor: pointer;
  transition: color 0.25s ease, box-shadow 0.25s ease;
  white-space: nowrap;
  line-height: 1.4;
}

.portfolio-filters__tag-chip:hover {
  border-color: var(--first-color);
  color: var(--first-color);
  background-color: var(--input-color);
}

.portfolio-filters__tag-chip.is-active {
  background-color: var(--first-color);
  color: #fff;
  border-color: transparent;
  box-shadow: 0 2px 8px hsla(var(--hue-color), 69%, 61%, 0.35);
}

/* ── Contador de resultados ──────────────────────── */
.portfolio-filters__results-count {
  font-size: var(--small-font-size);
  color: var(--subtitle-color);
  margin: 0;
}

.portfolio-filters__results-number {
  font-weight: var(--font-semi-bold);
  color: var(--first-color);
}

/* ── Transición dropdown ─────────────────────────── */
.pf-dropdown-enter-active,
.pf-dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.pf-dropdown-enter-from,
.pf-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* ── Responsive ──────────────────────────────────── */

/* ≥480px: mostrar label de texto en el botón del listbox */
@media screen and (min-width: 480px) {
  .portfolio-filters__listbox-label {
    display: inline;
  }

}

@media screen and (max-width: 567px) {
  .portfolio-filters__tag-chip {
    padding: 0.2rem 0.6rem;
    font-size: 0.7rem;
  }
}

/* ≤350px: apilar search row y estirar listbox */
@media screen and (max-width: 350px) {
  .portfolio-filters__search-row {
    flex-direction: column;
  }
  .portfolio-filters__listbox-wrapper,
  .portfolio-filters__listbox-btn {
    width: 100%;
    justify-content: center;
  }
}


@media (max-width: 767px) {
  .portfolio-filters__tag-chip:focus:not(:focus-visible) {
    outline: none;
    border-color: var(--scroll-bar-color);
    color: var(--text-color);
    background-color: var(--container-color);
  }

  .portfolio-filters__tag-chip.is-active:focus:not(:focus-visible) {
    border-color: transparent;
    color: #fff;
    background-color: var(--first-color);
  }
}
</style>
