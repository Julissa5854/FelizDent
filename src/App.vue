<template>
    <div id="app">
      <Header /> <!-- Asegúrate de incluir tu componente Header -->
      <nav>
        <router-link to="/">Página Principal</router-link>
        <router-link to="/consultorios">Consultorios</router-link>
        <router-link to="/dentistas">Dentistas</router-link>
      </nav>
      <router-view></router-view> <!-- Aquí se mostrará el componente basado en la ruta -->
      <WhatsAppButton /> <!-- Agrega el botón de WhatsApp aquí -->
      <Footer /> <!-- Agrega el footer aquí -->
    </div>
  </template>
  
  <script>
  import Header from './components/Header.vue'; // Asegúrate de que la ruta sea correcta
  import WhatsAppButton from './components/WhatsAppButton.vue'; // Importa el componente del botón de WhatsApp
  import Footer from './components/Footer.vue'; // Importa el componente Footer
  
  export default {
    name: 'App',
    components: {
      Header,
      WhatsAppButton, // Registra el componente del botón de WhatsApp
      Footer // Registra el componente Footer
    },
  }
  </script>
  
  <style>
  /* Agrega estilos aquí si es necesario */
  </style>
  