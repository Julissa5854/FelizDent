<template>
    <div class="container">
      <h1>Consultorios</h1> <!-- El título -->
      </div>

      <v-container>
      <v-row>
      <v-col>
        <!-- Tarjeta del consultorio de "San Lorenzo" -->
        <div class="consultorio-card1">
            <div class="consultorio-info">
              <h2>{{ name }}</h2>
              <p>{{ address }}</p>
              <p><a :href="`tel:${phone}`">{{ phone }}</a></p>
              <a :href="mapLink" target="_blank" class="map-link">Ver en Google Maps</a>
            </div>
          </div>
  
    <!-- Tarjeta principal que contiene todos los elementos -->
    <div class="main-card">
      <!-- Contenedor principal: Imagen y mapa -->
      <div class="image-and-map">
        <!-- Imagen del consultorio -->
        <div class="image-container">
          <img src="@/assets/ImagenesC/consulSan.jpg" alt="Imagen de la clínica" class="clinica-img">
        </div>
  
        <!-- Mapa de Google Maps del consultorio -->
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17961.06298242009!2d-97.86873282089783!3d18.84940874728674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cf88b8922ed7d7%3A0xc2f1398865f4100f!2sFelizdent%20Clinica%20Dental!5e0!3m2!1ses!2smx!4v1725846544334!5m2!1ses!2smx"
            class="map-frame" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>


     <!-- Tarjeta de consultorio de Tecamachalco -->
     <div class="consultorio-card2">
            <div class="consultorio-info">
              <h2>{{ name2 }}</h2>
              <p>{{ address2 }}</p>
              <p><a :href="`tel:${phone2}`">{{ phone2 }}</a></p>
              <a :href="mapLink2" target="_blank" class="map-link">Ver en Google Maps</a>
            </div>
          </div>
  
    <!-- Tarjeta principal que contiene todos los elementos -->
    <div class="main-card">
      <!-- Contenedor principal: Imagen y mapa-->
      <div class="image-and-map">
        <!-- Imagen del consultorio -->
        <div class="image-container">
          <img src="@/assets/ImagenesC/consulTeca.jpg" alt="Imagen de la clínica" class="clinica-img">
        </div>
  
        <!-- Mapa de Google Maps del consultorio -->
        <div class="map-container">
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120833.94912126148!2d-97.87868337598827!3d18.8399593403952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c5635ba176a8e7%3A0xa72fb7d005818733!2sClinica%20Dental%20Felizdent!5e0!3m2!1ses!2smx!4v1725917672340!5m2!1ses!2smx'
            class="map-frame" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>

     <!-- Tarjeta de consultorio de Los Reyes de Juárez -->
     <div class="consultorio-card3">
            <div class="consultorio-info">
              <h2>{{ name3 }}</h2>
              <p>{{ address3 }}</p>
              <p><a :href="`tel:${phone3}`">{{ phone3 }}</a></p>
              <a :href="mapLink3" target="_blank" class="map-link">Ver en Google Maps</a>
            </div>
          </div>
  
    <!-- Tarjeta principal que contiene todos los elementos -->
    <div class="main-card">
      <!-- Contenedor principal: Imagen y mapa-->
      <div class="image-and-map">
        <!-- Imagen del consultorio -->
        <div class="image-container">
          <img src="@/assets/ImagenesC/consulReyes.jpg" alt="Imagen de la clínica" class="clinica-img">
        </div>
  
        <!-- Mapa de Google Maps del consultorio -->
        <div class="map-container">
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.409786804097!2d-97.81497942845016!3d18.947360080591945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cf8a3975193699%3A0xa6fb9be55f66550!2sLeona%20Vicario%2060%2C%20El%20Alto%2C%2075400%20Los%20Reyes%20de%20Ju%C3%A1rez%2C%20Pue.!5e0!3m2!1ses!2smx!4v1725920982636!5m2!1ses!2smx'
            class="map-frame" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
     <!-- Tarjeta de consultorio de Puebla -->
     <div class="consultorio-card4">
            <div class="consultorio-info">
              <h2>{{ name4 }}</h2>
              <p>{{ address4 }}</p>
              <p class="doctor-communication">Comunícate:</p>
              <p><a :href="`tel:${phone4}`">{{ phone4 }}</a></p>
            </div>
          </div>
  </v-col>
    </v-row>
  </v-container>
  
  </template>
  
  <script>
    export default {
  name: 'consultorios',
  data() {
    return {
    }
  },

    props: {
      name: {
        type: String,
        default: 'FelizDent clínica dental San Lorenzo Ometepec, Pue.'
      },
      address: {
        type: String,
        default: 'Av. Reforma 153, Barrio de Jesús, 75615 San Lorenzo Ometepec, Pue.'
      },
      phone: {
        type: String,
        default: '+52 1 222 152 6613'
      },
      mapLink: {
        type: String,
        default: 'https://www.google.com/maps/place/Av.+Reforma+153,+Barrio+de+Jes%C3%BAs,+75615+San+Lorenzo+Ometepec,+Pue./@18.8544505,-97.8577379,17z/data=!3m1!4b1!4m6!3m5!1s0x85cf88b89230bdd7:0x3c8b6fe5423d630!8m2!3d18.8544505!4d-97.8577379!16s%2Fg%2F11jskfc0xj?entry=ttu'
      },

    name2: 'ConsultorioCard2',
      name2: {
        type: String,
        default: 'FelizDent clínica dental San Nicolás Tecamachalco, Pue.'
      },
      address2: {
        type: String,
        default: 'C. 13 Ote. 206, San Nicolás, 75486 Tecamachalco, Pue.'
      },
      phone2: {
        type: String,
        default: '+52 1 249 243 6544'
      },
      mapLink2: {
        type: String,
        default: 'https://www.google.com/maps/place/Clinica+Dental+Felizdent/@18.8399593,-97.8786834,12z/data=!4m20!1m13!4m12!1m4!2m2!1d-97.8625125!2d18.7970126!4e1!1m6!1m2!1s0x85c5635ba176a8e7:0xa72fb7d005818733!2sFeliz+DEnt+tecamachalco!2m2!1d-97.7300754!2d18.8785256!3m5!1s0x85c5635ba176a8e7:0xa72fb7d005818733!8m2!3d18.8784545!4d-97.7301069!16s%2Fg%2F11trsr8rt0?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D'
      },
  
  name3: 'ConsultorioCard3',
      name3: {
        type: String,
        default: 'FelizDent clínica dental Los Reyes de Juárez, Pue. '
      },
      address3: {
        type: String,
        default: 'Leona Vicario 60, El Alto, 75400 Los Reyes de Juárez, Pue.'
      },
      phone3: {
        type: String,
        default: '+52 1 222 139 7322'
      },
      mapLink3: {
        type: String,
        default: 'https://www.google.com/maps/place/Leona+Vicario+60,+El+Alto,+75400+Los+Reyes+de+Ju%C3%A1rez,+Pue./@18.9473601,-97.8149794,19z/data=!4m15!1m8!3m7!1s0x85cf8a3975193699:0xa6fb9be55f66550!2sLeona+Vicario+60,+El+Alto,+75400+Los+Reyes+de+Ju%C3%A1rez,+Pue.!3b1!8m2!3d18.9473194!4d-97.8148874!16s%2Fg%2F11jskbrkt9!3m5!1s0x85cf8a3975193699:0xa6fb9be55f66550!8m2!3d18.9473194!4d-97.8148874!16s%2Fg%2F11jskbrkt9?hl=es&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D'
      
  },
  name4: 'ConsultorioCard4',
      name4: {
        type: String,
        default: 'Consulta a Previa Cita en "Puebla" '
      },
      address4: {
        type: String,
        default: 'Leona Vicario 60, El Alto, 75400 Los Reyes de Juárez, Pue.'
      },
      phone4: {
        type: String,
        default: '+52 1 249 112 9401'
      
  }
  }
}


  </script>
  
  <style scoped>

  /* Estilo del contenedor principal */
  .container {
    padding: 20px;
    text-align: center; /* Centra el título */
  }
  
  /* Estilo para el título */
  .container h1 {
    font-weight: bold;
    font-size: 36px;
    margin-top: 100px; 
  }
  /* Estilo para la tarjeta principal */
  .main-card {
    margin-top: 20px;
    margin-bottom: 100px; /* Espacio inferior para separar del footer */
  }
  
  /* Contenedor para la imagen y el mapa */
  .image-and-map {
  display: flex;
  flex-direction: row; /* Diseño por defecto en pantallas grandes */
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
  }
  
  /* Estilo para la imagen del consultorio */
  .image-container,.map-container {
    flex: 1; /* Permite que el contenedor de la imagen ocupe el espacio disponible */
  }
  
  .clinica-img {
    width: 100%; /* Ajusta el ancho a 100% del contenedor */
    height: 350px; /* Mantiene la proporción de la imagen */
    border-radius: 8px;
    object-fit: cover; /* Asegura que la imagen cubra el contenedor sin deformarse */
  }
  
  /* Estilo para el mapa */
  .map-container {
    flex: 1; /* Permite que el contenedor del mapa ocupe el espacio disponible */
  }
  
  .map-frame {
    width: 100%; /* Ajusta el ancho a 100% del contenedor */
    height: 350px; /* Ajusta la altura del mapa */
    border-radius: 8px;
    object-fit: cover;
  }
  
  .map-link {
    display: inline-block;
    margin-top: 15px;
    background-color: #f5f5f5;
    padding: 12px;
    border-radius: 5px;
    color: #007bff;
    text-decoration: none;
    font-size: 1.1rem; /* Aumenta el tamaño del enlace */
  }
  
  .map-link:hover {
    text-decoration: underline;
  }
  
  /*Estilos para las tarjetas de los consultorios */
  .consultorio-card1, .consultorio-card2, .consultorio-card3 {
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
    padding: 20px;
  }
  
  .consultorio-info {
    text-align: center;
  }
  
  .consultorio-info h2 {
    margin: 0;
    font-size: 1.5em;
    color: #9da94d;
  }
  
  .consultorio-info p {
    margin: 10px 0;
  }
  
  .consultorio-card4 {
  border: 2px solid #007bff; /* Color de borde */
  border-radius: 10px; /* Esquinas redondeadas */
  padding: 20px; /* Espacio interno */
  text-align: center; /* Centrado del texto */
  max-width: 300px; /* Ancho máximo */
  margin: 20px auto; /* Margen superior e inferior */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra */
  background-color: #f9f9f9; /* Fondo */
}

.consultorio-info p {
  font-size: 1em; /* Tamaño del texto */
  margin: 8px 0; /* Espacio superior e inferior */
  color: #555; /* Color del texto */
}

/* Diseño vertical para pantallas móviles  */
@media (max-width: 768px) {
  .image-and-map {
    flex-direction: column; /* Cambia a diseño vertical */
    align-items: center;
  }

  .map-frame {
    height: 250px; /* Ajusta la altura del mapa en móviles */
  }

  .clinica-img {
    width: 100%;
    max-width: 350px;
    height: auto;
    margin-bottom: 10px;
  }
}
  </style>
  