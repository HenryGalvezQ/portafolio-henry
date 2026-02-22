// Footer.vue

<template>
  <footer class="footer">
    <div class="footer__bg">
      <div class="footer__container container grid">
        <div>
          <h1 class="footer__title">Henry Galvez</h1>
          <span class="footer__subtitle">{{ t('subtitle') }}</span>
        </div>
        <ul class="footer__links">
          <li>
            <a href="#services" class="footer__link">{{ t('services') }}</a>
          </li>
          <li>
            <a href="#portfolio" class="footer__link">{{ t('portfolio') }}</a>
          </li>
          <li>
            <a href="#contact" class="footer__link">{{ t('contact') }}</a>
          </li>
        </ul>
        <div class="footer__socials">
          <a href="https://www.linkedin.com/in/henry-galvez-quilla-26367b281" aria-label="footer social linkedin" target="_blank" class="footer__social">
            <i class="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://github.com/HenryGalvezQ" aria-label="footer social github" target="_blank" class="footer__social">
            <i class="uil uil-github-alt"></i>
          </a>
          <a href="https://www.facebook.com/henry.galvez.quilla" aria-label="footer social facebook" target="_blank" class="footer__social">
            <i class="uil uil-facebook-f"></i>
          </a>
          <a :href="whatsappUrl" aria-label="footer social whatsapp" target="_blank" class="footer__social">
            <i class="uil uil-whatsapp"></i>
          </a>
        </div>
      </div>
      <p class="footer__copy">&#169; {{ currentYear }} Henry Galvez. {{ t('rights') }}</p>
    </div>
  </footer>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export default {
  name: 'Footer',
  setup() {
    const { t } = useI18n({ inheritLocale: true, useScope: 'local' });
    const whatsappUrl = computed(() => 
      `https://wa.me/51970675529?text=${encodeURIComponent(t('whatsappMessage'))}`
    );
    return { t, whatsappUrl };
  },
  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
/* ==================== FOOTER ==================== */
.footer {
  padding-top: 0.5rem; /* Reducido aún más */
}

.footer__container {
  row-gap: 1.5rem; /* Reducido de 2rem */
}

.footer__bg {
  background-color: var(--first-color-second);
  padding: 1.25rem 0 1.5rem; /* Reducido de 1.5rem 0 2rem */
}

.footer__title {
  font-size: var(--h1-font-size);
  margin-bottom: var(--mb-0-25);
}

.footer__subtitle {
  font-size: var(--small-font-size);
}

.footer__links {
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem; /* Reducido de 1rem */
}

.footer__link:hover {
  color: var(--first-color-lighter);
  transform: scale(1.03); /* Zoom del 10% */
}

.footer__link {
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
}

.footer__social {
  font-size: 1.25rem;
  margin-right: var(--mb-1-5);
  display: inline-block;
  transition: transform 0.3s ease, color 0.3s ease;
}

.footer__social:hover {
  color: var(--first-color-lighter);
  transform: scale(1.10); /* Zoom un poquito mayor para los íconos (opcional) */
}

.footer__copy {
  font-size: var(--smaller-font-size);
  text-align: center;
  color: #e0e0e0;
  margin-top: var(--mb-1-5); /* Reducido de var(--mb-2) */
}

.footer__title,
.footer__subtitle,
.footer__link,
.footer__social {
  color: #fff;
}

/* ==================== MEDIA QUERIES ==================== */
@media screen and (min-width: 568px) {
  .footer__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px) {
  .footer__container {
    padding: 0 1rem;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
  .footer__bg {
    padding: 1.5rem 0 2rem; /* Reducido de 2rem 0 2.5rem */
  }
  .footer__links {
    flex-direction: row;
    column-gap: 2rem;
  }
  .footer__socials {
    justify-self: flex-end;
  }
  .footer__copy {
    margin-top: 2rem; /* Reducido de 2.5rem */
  }
}

@media screen and (min-width: 1024px) {
  .footer__container {
    padding: 0;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "subtitle": "Desarrollador Frontend",
    "services": "Servicios",
    "portfolio": "Portafolio",
    "contact": "Contacto",
    "rights": "Todos los derechos reservados",
    "whatsappMessage": "Hola, quiero contactarte por tus servicios."
  },
  "en": {
    "subtitle": "Frontend Developer",
    "services": "Services",
    "portfolio": "Portfolio",
    "contact": "Contact",
    "rights": "All rights reserved",
    "whatsappMessage": "Hello, I want to contact you about your services."
  }
}
</i18n>