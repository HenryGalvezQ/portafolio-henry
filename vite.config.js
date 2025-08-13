import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url' // Importa las utilidades de URL

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // Añade esta sección
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})