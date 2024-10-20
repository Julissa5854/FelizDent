<template>
  <div class="comentarios-wrapper">
    <h1 style="font-family: Helvetica;">Comentarios</h1>
    <div id="sociablekit-container" class='sk-ww-google-reviews' data-embed-id='25477114'></div>
  </div>
</template>

<script>
export default {
  name: 'Comentarios',
  mounted() {
  // Verificar si el script ya existe para no cargarlo dos veces
  if (!document.querySelector('script[src="https://widgets.sociablekit.com/google-reviews/widget.js"]')) {
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-reviews/widget.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
}
};
</script>

<style scoped>
.comentarios-wrapper {
  padding: 20px;
  text-align: center;
}

h1 {
  font-weight: bold;
  font-size: 36px;
  margin-top: 100px;
}
</style>
