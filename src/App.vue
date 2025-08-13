<template>
  <Header />
  <main class="main">
    <Home />
    <About />
    <Skills /> </main>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue' // 1. Importar

import './assets/css/styles.css'
import './assets/css/responsive.css'

export default {
  name: 'App',
  components: {
    Header,
    Home,
    About,
    Skills // 2. Registrar
  }
}
</script>