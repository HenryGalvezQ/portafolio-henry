// Contact.vue

<template>
  <section class="contact section" id="contact">
    <h2 class="section__title">{{ t('title') }}</h2>
    <span class="section__subtitle">{{ t('subtitle') }}</span>

    <div class="contact__container container grid">
      <div>
        <div class="contact__information contact__information--copyable" 
          @click="copyToClipboard('+51970675529', 'phone')"
          @touchstart.passive="(e) => handleCopyableTouch(e.currentTarget, true)"
          @touchend.passive="(e) => handleCopyableTouch(e.currentTarget, false)"
          @touchcancel.passive="(e) => handleCopyableTouch(e.currentTarget, false)">
          <UilIcon name="phone" class="contact__icon" />
          <div>
            <h3 class="contact__title">{{ t('phone') }}</h3>
            <span class="contact__subtitle">+51 970675529</span>
          </div>
          <UilIcon name="copy" class="contact__copy-icon" />
        </div>

        <div class="contact__information contact__information--copyable" 
          @click="copyToClipboard('henrygalvezquilla@gmail.com', 'email')"
          @touchstart.passive="(e) => handleCopyableTouch(e.currentTarget, true)"
          @touchend.passive="(e) => handleCopyableTouch(e.currentTarget, false)"
          @touchcancel.passive="(e) => handleCopyableTouch(e.currentTarget, false)">
          <UilIcon name="envelope" class="contact__icon" />
          <div>
            <h3 class="contact__title">{{ t('email') }}</h3>
            <span class="contact__subtitle">henrygalvezquilla@gmail.com</span>
          </div>
          <UilIcon name="copy" class="contact__copy-icon" />
        </div>
        <div class="contact__information">
          <UilIcon name="map-marker" class="contact__icon" />
          <div>
            <h3 class="contact__title">{{ t('location') }}</h3>
            <span class="contact__subtitle">{{ t('locationValue') }}</span>
          </div>
        </div>
      </div>

      <form @submit.prevent="handleSubmit" class="contact__form grid">
        <div class="contact__inputs grid">
          <div class="contact__content" :class="{ 'input-error': errors.name }" @click="focusInput('name')">
            <label for="name" class="contact__label">{{ t('fieldName') }}</label>
            <textarea 
              id="name" 
              rows="1"
              class="contact__input contact__input--auto" 
              v-model="formData.name"
              @input="handleInput('name', $event)"
              ref="nameInput"></textarea>
          </div>
          <div class="contact__content" :class="{ 'input-error': errors.email }" @click="focusInput('email')">
            <label for="email" class="contact__label">{{ t('fieldEmail') }}</label>
            <textarea 
              id="email" 
              rows="1"
              class="contact__input contact__input--auto" 
              v-model="formData.email"
              @input="handleInput('email', $event)"
              :placeholder="t('emailPlaceholder')"
              ref="emailInput"></textarea>
          </div>
          <div class="contact__content contact__content--reduced" @click="focusInput('project')">
            <label for="project" class="contact__label">{{ t('fieldProject') }}</label>
            <textarea 
              id="project" 
              rows="1"
              class="contact__input contact__input--auto" 
              v-model="formData.project"
              @input="adjustHeight"
              ref="projectInput"></textarea>
          </div>
          <div class="contact__content contact__content--reduced" :class="{ 'input-error': errors.message }" @click="focusInput('message')">
            <label for="message" class="contact__label">{{ t('fieldMessage') }}</label>
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
        <button @click="openWhatsApp" class="button button--flex button--animated button--whatsapp">
          WhatsApp
          <UilIcon name="whatsapp" class="button__icon" />
        </button>
        <button @click="!isSubmitting && handleSubmit()" class="button button--flex button--animated" :class="{ 'button--submitting': isSubmitting }">
          {{ isSubmitting ? t('sending') : t('send') }}
          <UilIcon name="message" class="button__icon" />
        </button>
      </div>
    </div>

    <!-- Toast Notification -->
    <transition name="toast">
      <div v-if="toast.show" :class="['toast', `toast--${toast.type}`]">
        <UilIcon :name="toast.type === 'success' ? 'check-circle' : toast.type === 'info' ? 'info-circle' : 'exclamation-triangle'" class="toast__icon" />
        <span class="toast__message">{{ toast.message }}</span>
      </div>
    </transition>
  </section>
</template>

<script setup>
import UilIcon from '@/components/UilIcon.vue'
import { ref, nextTick, onMounted } from 'vue';
import emailjs from '@emailjs/browser';
import { useI18n } from 'vue-i18n';
const { t } = useI18n({ inheritLocale: true, useScope: 'local' });

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

const copyToClipboard = async (value, type) => {
  const msg = type === 'phone' ? t('toastCopiedPhone') : t('toastCopiedEmail');
  
  // Intento moderno (funciona en desktop y algunos mobile)
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(value);
      showToast(msg, 'info');
      return;
    } catch {
      // Cae al fallback
    }
  }

  // Fallback para mobile (Safari, Android WebView, etc.)
  try {
    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0;';
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();
    // Para iOS específicamente
    textarea.setSelectionRange(0, textarea.value.length);
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    
    if (success) {
      showToast(msg, 'info');
    } else {
      showToast(t('toastCopyError'), 'error');
    }
  } catch {
    showToast(t('toastCopyError'), 'error');
  }
};

const handleCopyableTouch = (el, touching) => {
  if (touching) {
    el.classList.add('is-touching');
  } else {
    // Pequeño delay para que se vea el feedback antes de quitarlo
    setTimeout(() => {
      el.classList.remove('is-touching');
    }, 420);
  }
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

  // Hover para desktop (mouse)
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (!isTouch) {
    document.querySelectorAll('.contact__information--copyable').forEach(el => {
      el.addEventListener('mouseenter', () => el.classList.add('is-touching'));
      el.addEventListener('mouseleave', () => el.classList.remove('is-touching'));
    });
  }
});

const handleSubmit = async () => {
  clearErrors();

  // Validación básica de campos vacíos
  if (!formData.value.name || !formData.value.email || !formData.value.message) {
    if (!formData.value.name) errors.value.name = true;
    if (!formData.value.email) errors.value.email = true;
    if (!formData.value.message) errors.value.message = true;
    
    showToast(t('toastRequired'), 'error');
    return;
  }

  // Validar que sea email o teléfono válido
  const contactValue = formData.value.email.trim();
  const isEmail = isValidEmail(contactValue);
  const isPhone = isValidPhone(contactValue);

  if (!isEmail && !isPhone) {
    errors.value.email = true;
    showToast(t('toastInvalidContact'), 'error');
    return;
  }

  // Rate limit: máximo 5 mensajes por día por navegador
  if (!checkRateLimit()) {
    showToast(t('toastRateLimit'), 'error');
    return;
  }
  

  isSubmitting.value = true;

  try {
    let emailData = {
      name: formData.value.name,
      project: formData.value.project.trim() || t('defaultProject'),
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
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      emailData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    showToast(t('toastSuccess'), 'success');
    
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
    showToast(t('toastError'), 'error');
  } finally {
    isSubmitting.value = false;
  }
};

const openWhatsApp = () => {
  const phoneNumber = '51970675529';
  const message = encodeURIComponent(t('whatsappMessage'));
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, '_blank');
};

const checkRateLimit = () => {
  const key = 'contact_submissions';
  const maxPerDay = 5; // Límite de envíos por día
  const now = Date.now();
  const oneDayMs = 24 * 60 * 60 * 1000;

  const stored = JSON.parse(localStorage.getItem(key) || '[]');
  const recent = stored.filter(ts => now - ts < oneDayMs);

  if (recent.length >= maxPerDay) {
    return false;
  }

  recent.push(now);
  localStorage.setItem(key, JSON.stringify(recent));
  return true;
};
</script>

<style scoped>
/* ==================== CONTACT ME ==================== */
.section__subtitle {
  color: var(--subtitle-color);
}
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
  width: 2rem;
  height: 2rem;
  color: var(--first-color);
  margin-right: var(--mb-0-75);
  flex-shrink: 0;
}

.contact__title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
}

.contact__subtitle {
  font-size: var(--small-font-size);
    color: var(--subtitle-color);
}

.contact__content {
  background-color: var(--contact-input-color);
  border-radius: .5rem;
  padding: .75rem 1rem .25rem;
  transition: border 0.3s ease;
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

/* AGREGAR */
.button--whatsapp:hover,
.button--whatsapp:focus,
.button--whatsapp:active {
  background-color: #25D366 !important;
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
  background-color: var(--contact-input-color);
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

/* Reemplaza .contact__buttons button — idéntico en propiedades, apunta a .button */
.contact__buttons .button {
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
  font-family: var(--body-font);
}

.button--whatsapp {
  order: 1;
}

.button--flex:not(.button--whatsapp) {
  order: 2;
}

.button__icon {
  margin-left: 0.5rem;
  width: 1.3rem;
  height: 1.3rem;
  flex-shrink: 0;
  filter: drop-shadow(0 0 0.3px currentColor);
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

.contact__information--copyable {
  cursor: pointer;
  border-radius: 0.5rem;
  padding: 0.4rem 0.5rem;
  margin-left: -0.5rem;
  transition: background-color 0.2s ease;
  user-select: none;
  /* Sin :hover CSS en absoluto */
}

.contact__information--copyable.is-touching {
  background-color: var(--contact-input-color);
}

.contact__information--copyable.is-touching .contact__copy-icon {
  opacity: 1;
}

.contact__copy-icon {
  width: 1.1rem;
  height: 1.1rem;
  color: var(--first-color);
  margin-left: auto;
  opacity: 0.4;
  transition: opacity 0.2s ease;
  flex-shrink: 0;
}

/* Mobile: siempre visible el icono (no hay hover) */
@media (hover: none) {
  .contact__copy-icon {
    opacity: 0.5;
  }
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

.toast--info {
  background-color: #8498ab;
  color: white;
}

.toast__icon {
  width: 1.5rem;
  height: 1.5rem;
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
  .contact.section {
    padding: 7rem 0 5.5rem;
  }
  .section__subtitle {
    margin-bottom: 4rem;
  }
}

/* Ajustes específicos para mobile */
@media screen and (max-width: 567px) {
  .contact__container {
    row-gap: 1rem;
  }
  
  .contact__buttons {
    gap: 0.75rem;
    margin-top: 1.5rem;
  }
  
  .contact__buttons .button {
    min-width: 0;
    flex: 1;
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
  }
  
  .button__icon {
    margin-left: 0.25rem;
    width: 1.1rem;
    height: 1.1rem;
  }
  
  .toast {
    top: 1rem;
    right: 1rem;
    left: 1rem;
    max-width: none;
    padding: 1rem 1.4rem;
  }
}
</style>

<i18n lang="json">
{
  "es": {
    "title": "Contáctame",
    "subtitle": "Ponte en contacto",
    "phone": "Llámame",
    "email": "Email",
    "location": "Ubicación",
    "locationValue": "Perú - Arequipa",
    "fieldName": "Nombre",
    "fieldEmail": "Email o Celular",
    "emailPlaceholder": "ejemplo{'@'}email.com o +51 999999999",
    "fieldProject": "Asunto (opcional)",
    "fieldMessage": "Mensaje",
    "sending": "Enviando...",
    "send": "Enviar Mensaje",
    "toastRequired": "Por favor, completa todos los campos requeridos",
    "toastInvalidContact": "Por favor, ingresa un email válido o un número de celular",
    "toastSuccess": "¡Mensaje enviado exitosamente! Te contactaré pronto",
    "toastError": "Hubo un error al enviar el mensaje. Por favor, intenta contactarme por WhatsApp",
    "toastRateLimit": "Has alcanzado el límite de mensajes por hoy. Inténtalo mañana o contáctame por WhatsApp.",
    "whatsappMessage": "Hola, quiero contactarte por tus servicios.",
    "defaultProject": "Trabajo",
    "toastCopiedPhone": "Número copiado al portapapeles",
    "toastCopiedEmail": "Email copiado al portapapeles",
    "toastCopyError": "No se pudo copiar. Inténtalo manualmente"
  },
  "en": {
    "title": "Contact Me",
    "subtitle": "Get in touch",
    "phone": "Call Me",
    "email": "Email",
    "location": "Location",
    "locationValue": "Peru - Arequipa",
    "fieldName": "Name",
    "fieldEmail": "Email or Phone",
    "emailPlaceholder": "example{'@'}email.com or +1 (555) 000-0000",
    "fieldProject": "Subject (optional)",
    "fieldMessage": "Message",
    "sending": "Sending...",
    "send": "Send Message",
    "toastRequired": "Please fill in all required fields",
    "toastInvalidContact": "Please enter a valid email or phone number",
    "toastSuccess": "Message sent successfully! I'll get back to you soon",
    "toastError": "There was an error sending the message. Please try contacting me via WhatsApp",
    "toastRateLimit": "You've reached today's message limit. Try again tomorrow or contact me via WhatsApp.",
    "whatsappMessage": "Hello, I want to contact you about your services.",
    "defaultProject": "Work",
    "toastCopiedPhone": "Phone number copied to clipboard",
    "toastCopiedEmail": "Email copied to clipboard",
    "toastCopyError": "Couldn't copy. Please try manually"
  }
}
</i18n>