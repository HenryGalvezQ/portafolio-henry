// SymmetryTestimonial.vue

<template>
  <div class="testimonial-card">
    <div class="testimonial-header">
      <img src="@/assets/img/symmetry_logo.png" alt="Symmetry Logo" class="testimonial-logo">
      <h3 class="testimonial-title">{{ t('title') }}</h3>
    </div>
    
    <div class="testimonial-divider"></div>
    
    <div class="testimonial-quote">
      <i class="uil uil-quote-left quote-icon"></i>
      <p class="quote-text">
        {{ t('quote') }}
      </p>
      <i class="uil uil-quote-right quote-icon"></i>
    </div>
    
    <div class="testimonial-author">
      <p class="author-name">{{ t('author.name') }}</p>
      <p class="author-title">{{ t('author.role') }}</p>
      <p class="author-date">{{ t('author.date') }}</p>
    </div>
    
    <div class="testimonial-divider"></div>
    
    <div class="testimonial-footer">
      <div class="contact-item">
        <i class="uil uil-envelope"></i>
        <span>info@symmetry.club</span>
      </div>
      <div class="contact-item">
        <i class="uil uil-link"></i>
        <a href="https://symmetry.club" target="_blank" rel="noopener noreferrer">
          https://symmetry.club
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ inheritLocale: true, useScope: 'local' });
</script>

<style scoped>
.testimonial-card {
  background: var(--container-color);
  border-radius: 16px;
  padding: 2rem 1.75rem;
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  font-family: var(--body-font);
}

.testimonial-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.testimonial-logo {
  width: 150px;       /* Mantenemos el ancho deseado */
  height: auto;       /* IMPORTANTE: Esto elimina el espacio vacío vertical */
  border-radius: 6px; /* El radio de 5px que pediste */
  display: block;     /* Para evitar márgenes fantasma */
}
.testimonial-title {
  font-size: 1.25rem;
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  text-align: center;
  margin: 0;
}

.testimonial-divider {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, transparent, var(--first-color), transparent);
  margin: 1.25rem 0;
}

.testimonial-quote {
  position: relative;
  padding: 1rem 0;
  text-align: center;
}

.quote-icon {
  font-size: 1.5rem;
  color: var(--first-color);
  opacity: 0.3;
}

.quote-text {
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-color-solid);
  font-style: italic;
  margin: 0.75rem 0;
  padding: 0 0.75rem;
}

.testimonial-author {
  text-align: center;
  margin: 1.5rem 0;
}

.author-name {
  font-size: 1rem;
  font-weight: var(--font-semi-bold);
  color: var(--title-color);
  margin-bottom: 0.4rem;
}

.author-title {
  font-size: 0.875rem;
  color: var(--text-color);
  margin-bottom: 0.2rem;
}

.author-date {
  font-size: 0.8rem;
  color: var(--text-color-light);
}

.testimonial-footer {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 1.25rem;
}

.contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: var(--text-color);
}

.contact-item i {
  color: var(--first-color);
  font-size: 1rem;
}

.contact-item a {
  color: var(--first-color);
  text-decoration: none;
  transition: opacity 0.3s;
}

.contact-item a:hover {
  opacity: 0.7;
}

/* Responsive */
@media screen and (max-width: 567px) {
  .testimonial-card {
    padding: 1.5rem 1.25rem;
  }
  
  .testimonial-logo {
    width: 100px;
    height: auto; /* Cambiar de 70px a auto para mantener la proporción */
  }
  
  .testimonial-title {
    font-size: 1.1rem;
  }
  
  .quote-text {
    font-size: 0.95rem;
    padding: 0 0.5rem;
  }
  
  .quote-icon {
    font-size: 1.25rem;
  }
  
  .author-name {
    font-size: 0.95rem;
  }
  
  .author-title,
  .author-date,
  .contact-item {
    font-size: 0.8rem;
  }
}

@media screen and (max-width: 350px) {
  .testimonial-card {
    padding: 1.25rem 1rem;
  }
  
  .quote-text {
    font-size: 0.85rem;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "title": "Confirmación de Trabajo",
    "quote": "Tu prueba técnica es justo lo que queríamos. Nos encantaría que formaras parte de Symmetry Club.",
    "author": {
      "name": "— Mauro Botanes",
      "role": "COO, Symmetry Club LLC",
      "date": "Noviembre 2025"
    }
  },
  "en": {
    "title": "Work Confirmation",
    "quote": "Your technical test is exactly what we were looking for. We would love for you to be part of Symmetry Club.",
    "author": {
      "name": "— Mauro Botanes",
      "role": "COO, Symmetry Club LLC",
      "date": "November 2025"
    }
  }
}
</i18n>