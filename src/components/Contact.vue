<template>
  <section class="contact section" id="contact">
    <h2 class="section__title">Contact Me</h2>
    <span class="section__subtitle">Get in touch</span>

    <div class="contact__container container grid">
      <div>
        <div class="contact__information">
          <i class="uil uil-phone contact__icon"></i>
          <div>
            <h3 class="contact__title">Call Me</h3>
            <span class="contact__subtitle">+51 970675529</span>
          </div>
        </div>
        <div class="contact__information">
          <i class="uil uil-envelope contact__icon"></i>
          <div>
            <h3 class="contact__title">Email</h3>
            <span class="contact__subtitle">henrygalvezquilla@gmail.com</span>
          </div>
        </div>
        <div class="contact__information">
          <i class="uil uil-map-marker contact__icon"></i>
          <div>
            <h3 class="contact__title">Location</h3>
            <span class="contact__subtitle">Peru - Arequipa</span>
          </div>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="contact__form grid">
        <div class="contact__inputs grid">
          <div class="contact__content">
            <label for="name" class="contact__label">Name</label>
            <input type="text" id="name" class="contact__input" v-model="formData.name">
          </div>
          <div class="contact__content">
            <label for="email" class="contact__label">Email</label>
            <input type="email" id="email" class="contact__input" v-model="formData.email">
          </div>
          <div class="contact__content">
            <label for="project" class="contact__label">Project</label>
            <input type="text" id="project" class="contact__input" v-model="formData.project">
          </div>
          <div class="contact__content">
            <label for="message" class="contact__label">Message</label>
            <textarea id="message" cols="0" rows="7" class="contact__input" v-model="formData.message"></textarea>
          </div>
          <div>
            <button type="submit" class="button button--flex">
              Send Message
              <i class="uil uil-message button__icon"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  project: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form data submitted:', formData.value);
  alert('Mensaje enviado (revisa la consola para ver los datos).');
  // Opcional: limpiar el formulario después de enviar
  formData.value = { name: '', email: '', project: '', message: '' };
};
</script>

<style scoped>
/* ==================== CONTACT ME ==================== */
.contact__container {
  row-gap: 3rem;
}

.contact__information {
  display: flex;
  margin-bottom: var(--mb-2);
  align-items: center;
}

.contact__icon {
  font-size: 2rem;
  color: var(--first-color);
  margin-right: var(--mb-0-75);
}

.contact__title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}

.contact__subtitle {
  font-size: var(--small-font-size);
  color: var(--text-color-light);
}

.contact__content {
  background-color: var(--input-color);
  border-radius: .5rem;
  padding: .75rem 1rem .25rem;
}

.contact__content>textarea {
  resize: vertical;
}

.contact__label {
  font-size: var(--smaller-font-size);
  color: var(--title-color);
}

.contact__input {
  width: 100%;
  background-color: var(--input-color);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: .25rem .5rem .5rem 0;
}

/* ==================== MEDIA QUERIES ==================== */
@media screen and (min-width: 568px) {
  .contact__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px) {
  .contact__form {
    width: 460px;
  }
  .contact__inputs {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem; /* Añadido para espaciar los inputs */
  }
}
</style>