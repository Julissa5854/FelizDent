<!-- src/views/Consultorios.vue -->
<template>

  <div class="consultorios">
    <h2>Consultorios</h2>
    <!-- Aquí usamos el componente ConsultorioCard para mostrar los consultorios -->
    <ConsultorioCard1
      name="FelizDent clínica dental"
      location="San Lorenzo Ometepec, Pue."
      address="Av. Reforma 153, Barrio de Jesús, 75615 San Lorenzo Ometepec, Pue."
      phone="+52 1 222 152 6613"
      clinicaImage="@/assets/ImagenesC/consulSan.jpg">
    </ConsultorioCard1>
    />
    <!-- Consultorio 2-->
    <ConsultorioCard2
      name="FelizDent Clínica dental"
      location="San Nicolás Tecamachalco, Pue."
      address="C. 13 Ote. 206, San Nicolás, 75486 Tecamachalco, Pue."
      phone="+52 1 249 243 6544"
      clinicaImage="@/assets/ImagenesC/consulTeca.jpg">
    </ConsultorioCard2>
    />

    <!-- Consultorio 3-->
    <ConsultorioCard3
      name="FelizDent Clínica dental"
      location="Los Reyes de Juárez, Pue. "
      address="Leona Vicario 60, El Alto, 75400 Los Reyes de Juárez, Pue."
      phone="+52 1 222 139 7322"
      clinicaImage="@/assets/ImagenesC/consulReyes.jpg">
    </ConsultorioCard3>
    />
    
  </div>
</template>

<script>
export default {
  name: "Consultorios",
  components: {
    ConsultorioCard
  }
};
</script>

<style scoped>
.consultorios {
  text-align: center;
}
</style>
