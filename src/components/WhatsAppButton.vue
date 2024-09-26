<template>
    <!-- Botón de WhatsApp -->
    <a class="whatsapp-button" href="https://wa.me/1234567890" target="_blank" aria-label="Chat on WhatsApp">
      <img src="@/assets/ImagenesC/low.jpg" alt="WhatsApp" class="whatsapp-icon">
    </a>
  </template>
  
  <script>
  export default {
    name: 'WhatsAppButton'
  }
  </script>
  
  <style scoped>
   /* Estilos para el botón de WhatsApp */
   .whatsapp-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 100px;
    height: 100px;
    z-index: 1000; /* Asegura que el botón esté sobre otros elementos */
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .whatsapp-button img.whatsapp-icon {
    width: 80px; /* Tamaño del ícono */
    height: 80px;
  }
  </style>
  