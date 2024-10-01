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
  background-color: white; /* Fondo blanco para el botón */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s; /* Transición suave para el fondo */
}

/* Cambio de color al pasar el ratón sobre el botón */
.whatsapp-button:hover {
  background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco ligeramente transparente al pasar el cursor */
}

.whatsapp-button img.whatsapp-icon {
  width: 80px; /* Tamaño del ícono */
  height: 80px;
}
</style>
