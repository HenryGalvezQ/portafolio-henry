<template>
  <section class="contact section" id="contact">
    <h2 class="section__title">Contáctame</h2>
    <span class="section__subtitle">Ponte en contacto</span>

    <div class="contact__container container grid">
      <div>
        <div class="contact__information">
          <i class="uil uil-phone contact__icon"></i>
          <div>
            <h3 class="contact__title">Llámame</h3>
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
            <h3 class="contact__title">Ubicación</h3>
            <span class="contact__subtitle">Perú - Arequipa</span>
          </div>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="contact__form grid">
        <div class="contact__inputs grid">
          <div class="contact__content" :class="{ 'input-error': errors.name }" @click="focusInput('name')">
            <label for="name" class="contact__label">Nombre</label>
            <textarea 
              id="name" 
              rows="1"
              class="contact__input contact__input--auto" 
              v-model="formData.name"
              @input="handleInput('name', $event)"
              ref="nameInput"></textarea>
          </div>
          <div class="contact__content" :class="{ 'input-error': errors.email }" @click="focusInput('email')">
            <label for="email" class="contact__label">Email o Celular</label>
            <textarea 
              id="email" 
              rows="1"
              class="contact__input contact__input--auto" 
              v-model="formData.email"
              @input="handleInput('email', $event)"
              placeholder="ejemplo@email.com o +51 999999999"
              ref="emailInput"></textarea>
          </div>
          <div class="contact__content contact__content--reduced" @click="focusInput('project')">
            <label for="project" class="contact__label">Asunto (opcional)</label>
            <textarea 
              id="project" 
              rows="1"
              class="contact__input contact__input--auto" 
              v-model="formData.project"
              @input="adjustHeight"
              ref="projectInput"></textarea>
          </div>
          <div class="contact__content contact__content--reduced" :class="{ 'input-error': errors.message }" @click="focusInput('message')">
            <label for="message" class="contact__label">Mensaje</label>
            <textarea 
              id="message" 
              rows="4" 
              class="contact__input contact__input--auto" 
              v-model="formData.message"
              @input="handleInput('message', $event)"
              ref="messageInput"></textarea>
          </div>
        </div>
      </form>
      
      <div class="contact__buttons">
        <button type="button" @click="openWhatsApp" class="button button--flex button--whatsapp">
          WhatsApp
          <i class="uil uil-whatsapp button__icon"></i>
        </button>
        <button type="submit" @click="handleSubmit" class="button button--flex" :disabled="isSubmitting">
          {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
          <i class="uil uil-message button__icon"></i>
        </button>
      </div>
    </div>

    <!-- Toast Notification -->
    <transition name="toast">
      <div v-if="toast.show" :class="['toast', `toast--${toast.type}`]">
        <i :class="['toast__icon', toast.type === 'success' ? 'uil uil-check-circle' : 'uil uil-exclamation-triangle']"></i>
        <span class="toast__message">{{ toast.message }}</span>
      </div>
    </transition>
  </section>
</template>

<script setup>
import { ref, nextTick, onMounted } from 'vue';
import emailjs from '@emailjs/browser';

const formData = ref({
  name: '',
  email: '',
  project: '',
  message: ''
});

const errors = ref({
  name: false,
  email: false,
  message: false
});

const isSubmitting = ref(false);

const toast = ref({
  show: false,
  message: '',
  type: 'success'
});

// Referencias a los inputs
const nameInput = ref(null);
const emailInput = ref(null);
const projectInput = ref(null);
const messageInput = ref(null);

const showToast = (message, type = 'success') => {
  toast.value = {
    show: true,
    message,
    type
  };
  
  setTimeout(() => {
    toast.value.show = false;
  }, 4000);
};

const clearErrors = () => {
  errors.value = {
    name: false,
    email: false,
    message: false
  };
};

// Validar si es un email válido
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validar si es un número de teléfono válido (formato flexible)
const isValidPhone = (phone) => {
  // Acepta números con o sin +, espacios, guiones, paréntesis
  // Mínimo 9 dígitos para ser considerado válido
  const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
  const phoneRegex = /^\+?[0-9]{9,15}$/;
  return phoneRegex.test(cleanPhone);
};

// Función para enfocar el input cuando se hace click en cualquier parte del contenedor
const focusInput = (fieldName) => {
  const inputMap = {
    name: nameInput,
    email: emailInput,
    project: projectInput,
    message: messageInput
  };
  
  if (inputMap[fieldName] && inputMap[fieldName].value) {
    inputMap[fieldName].value.focus();
  }
};

// Función para manejar el input y ajustar altura
const handleInput = async (fieldName, event) => {
  // Ajustar la altura
  await adjustHeight(event);
  
  // Si el campo tiene contenido y tenía error, quitar el error
  if (formData.value[fieldName] && formData.value[fieldName].trim() !== '') {
    errors.value[fieldName] = false;
  }
};

// Función para ajustar la altura dinámicamente
const adjustHeight = async (event) => {
  await nextTick();
  const element = event.target;
  
  // Resetear la altura para obtener el scrollHeight correcto
  element.style.height = 'auto';
  
  // Ajustar la altura según el contenido
  element.style.height = element.scrollHeight + 'px';
};

// Inicializar alturas al montar el componente
onMounted(() => {
  // Ajustar altura inicial si hay contenido pre-cargado
  [nameInput, emailInput, projectInput, messageInput].forEach(input => {
    if (input.value && input.value.value) {
      input.value.style.height = 'auto';
      input.value.style.height = input.value.scrollHeight + 'px';
    }
  });
});

const handleSubmit = async () => {
  clearErrors();
  
  // Validación básica de campos vacíos
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    if (!formData.value.name) errors.value.name = true;
    if (!formData.value.email) errors.value.email = true;
    if (!formData.value.message) errors.value.message = true;
    
    showToast('Por favor, completa todos los campos requeridos', 'error');
    return;
  }

  // Validar que sea email o teléfono válido
  const contactValue = formData.value.email.trim();
  const isEmail = isValidEmail(contactValue);
  const isPhone = isValidPhone(contactValue);

  if (!isEmail && !isPhone) {
    errors.value.email = true;
    showToast('Por favor, ingresa un email válido o un número de celular', 'error');
    return;
  }

  isSubmitting.value = true;

  try {
    let emailData = {
      name: formData.value.name,
      project: formData.value.project,
      message: formData.value.message
    };

    // Si es email, usarlo normalmente
    if (isEmail) {
      emailData.email = contactValue;
    } else {
      // Si es teléfono, usar un email genérico y agregar el teléfono al mensaje
      emailData.email = 'noreply@contactform.com'; // Email genérico para que EmailJS funcione
      emailData.message = `📱 Celular de contacto: ${contactValue}\n\n${formData.value.message}`;
    }

    await emailjs.send(
      'service_vcnwfaw',
      'template_7lts8u5',
      emailData,
      'D3S-rSMXgov-Ijdfg'
    );

    showToast('¡Mensaje enviado exitosamente! Te contactaré pronto', 'success');
    
    // Limpiar el formulario
    formData.value = { name: '', email: '', project: '', message: '' };
    
    await nextTick();
    // Resetear alturas de todos los elementos
    [nameInput, emailInput, projectInput, messageInput].forEach(input => {
      if (input.value) {
        input.value.style.height = 'auto';
      }
    });
  } catch (error) {
    console.error('Error al enviar el mensaje:', error);
    showToast('Hubo un error al enviar el mensaje. Por favor, intenta contactarme por WhatsApp', 'error');
  } finally {
    isSubmitting.value = false;
  }
};

const openWhatsApp = () => {
  const phoneNumber = '51970675529';
  const message = encodeURIComponent('Hola, quiero contactarte por tus servicios.');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};
</script>

<style scoped>
/* ==================== CONTACT ME ==================== */
.contact {
  padding-bottom: 4.5rem;
}
.contact__container {
  row-gap: 3rem;
  position: relative;
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
  color: var(--text-color-darker);
}

.contact__content {
  background-color: hsl(240, 100%, 95%);
  border-radius: .5rem;
  padding: .75rem 1rem .25rem;
  transition: all 0.3s ease;
  cursor: text;
  display: flex;
  flex-direction: column;
}

.contact__content--reduced {
  padding: .5rem 1rem .2rem;
}

.contact__content.input-error {
  border: 2px solid #ef4444;
  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
  animation: shake 0.5s;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.contact__label {
  font-size: var(--smaller-font-size);
  color: var(--title-color);
  margin-bottom: 0.25rem;
  cursor: text;
  pointer-events: none;
}

.contact__input {
  width: 100%;
  background-color: hsl(240, 100%, 95%);
  color: var(--text-color);
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  border: none;
  outline: none;
  padding: .25rem .5rem .5rem 0;
  resize: none;
  overflow: hidden;
  min-height: auto;
  line-height: 1.5;
}

.contact__input--auto {
  transition: height 0.1s ease;
  overflow-y: hidden;
  display: block;
}

.contact__input::placeholder {
  color: var(--text-color-light);
  opacity: 0.6;
  font-size: var(--small-font-size);
}

.contact__buttons {
  display: flex;
  gap: 3.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.contact__buttons button {
  flex: 0 1 auto;
  min-width: 200px;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  transform: scale(1);
}

.contact__buttons button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.contact__buttons button:active {
  transform: translateY(-1px) scale(0.98);
}

.button--whatsapp {
  background-color: #25D366;
  order: 1;
}

.button--whatsapp:hover {
  background-color: #128C7E;
}

.button--flex:not(.button--whatsapp) {
  order: 2;
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: scale(1) !important;
}

.button__icon {
  margin-left: 0.5rem;
  font-size: 1.3rem;
}

/* ==================== TOAST NOTIFICATION ==================== */
.toast {
  position: fixed;
  top: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1rem;
  font-weight: 500;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  max-width: 400px;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(400px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.toast--success {
  background-color: #10b981;
  color: white;
}

.toast--error {
  background-color: #ef4444;
  color: white;
}

.toast__icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.toast__message {
  flex: 1;
}

.toast-enter-active {
  animation: slideIn 0.3s ease;
}

.toast-leave-active {
  animation: slideOut 0.3s ease;
}

@keyframes slideOut {
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(400px);
    opacity: 0;
  }
}

/* ==================== MEDIA QUERIES ==================== */
@media screen and (min-width: 568px) {
  .contact__container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .contact__buttons {
    grid-column: 1 / -1;
  }

  .contact__input {
      min-height: 3.5rem;
  }
}

@media screen and (min-width: 768px) {
  .contact__form {
    width: 460px;
  }
  .contact__inputs {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
  }
}

/* Ajustes específicos para mobile */
@media screen and (max-width: 567px) {
  .contact__container {
    row-gap: 1.5rem;
  }
  
  .contact__buttons {
    gap: 0.75rem;
    margin-top: 1.5rem;
  }
  
  .contact__buttons button {
    min-width: 0;
    flex: 1;
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
  }
  
  .button__icon {
    margin-left: 0.25rem;
    font-size: 1.1rem;
  }
  
  .toast {
    top: 1rem;
    right: 1rem;
    left: 1rem;
    max-width: none;
  }
}
</style>