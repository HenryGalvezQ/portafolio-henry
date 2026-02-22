import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '@iconscout/unicons/css/line.css'
import './assets/css/global.css'

const getInitialLocale = () => {
  const browserLang = navigator.language?.slice(0, 2) // 'en-US' → 'en'
  const supported = ['es', 'en']
  return supported.includes(browserLang)
    ? browserLang
    : import.meta.env.VITE_DEFAULT_LOCALE
}

const i18n = createI18n({
  legacy: false,
  locale: getInitialLocale(),
  fallbackLocale: import.meta.env.VITE_FALLBACK_LOCALE,
  messages: { es: {}, en: {} }
})

createApp(App).use(i18n).mount('#app')