import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import unpluginVueI18n from '@intlify/unplugin-vue-i18n'

export default defineConfig({
  plugins: [
    vue(),
    unpluginVueI18n.vite()
  ],
  define: {
    __INTLIFY_JIT_COMPILATION__: true,
    __INTLIFY_DROP_MESSAGE_COMPILER__: false,
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    // Inyecta font-display swap para todas las @font-face procesadas por Vite
    preprocessorOptions: {}
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@iconscout/unicons')) return 'unicons'
          if (id.includes('swiper')) return 'swiper'
          if (id.includes('emailjs')) return 'emailjs'
        }
      }
    }
  }
})