<template>
  <div id="app">
    <nav>
      <router-link to="/dentistas">Dentistas</router-link>
      <router-link to="/consultorios">Consultorios</router-link>
    </nav>
    <router-view></router-view> <!-- Aquí se renderizarán las rutas -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Tus estilos aquí */
</style>
