<template>
  <div id="app">
    <Header /> <!-- Header  -->
    <router-view></router-view> <!-- Contenido de la página -->
    <WhatsAppButton />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import WhatsAppButton from './components/WhatsAppButton.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    WhatsAppButton,
    Footer
  },
}
</script>

<style>

</style>
