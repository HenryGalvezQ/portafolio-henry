import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@iconscout/unicons/css/line.css'
import './assets/css/global.css'

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages: { es: {}, en: {} }
})

createApp(App).use(i18n).mount('#app')