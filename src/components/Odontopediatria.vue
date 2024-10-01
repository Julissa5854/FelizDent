<template>
    <v-container>
      <v-row>
        <div class="odontopediatria-container">
          <!-- Sección de la imagen principal -->
          <div class="image-section">
            <div class="image-container">
              <img class="main-image" src="@/assets/ImagenesP/Odon1.jpg" alt="Niña sonriendo con dentista" />
              <h1 class="title">Odontopediatría</h1>
            </div>
          </div>
  
          <p class="description">
            Cuida la salud dental de tus hijos con nuestros tratamientos especializados en odontopediatría, enfocados
            en prevenir y tratar problemas dentales desde temprana edad, asegurando sonrisas
            saludables para el futuro.
          </p>
        </div>
  
        <div class="container2">
          <div class="container-text">
            <p>FELIZDENT es una clínica dental que brinda servicios de salud bucal con técnicas especializadas utilizando tecnología de vanguardia en material y equipo para asegurar la salud bucal, y satisfacción de nuestros pacientes, basados en la calidad humana.</p>
          </div>
          <div class="img-container">
            <img src="@/assets/ImagenesP/odon2.jpg" alt="Dentista trabajando">
          </div>
        </div>
  
        <p class="description2">
          La Odontopediatría y la Ortodoncia infantil son las ramas de la Odontología que cuidan y tratan
          la salud bucodental de la infancia y la adolescencia. El cuidado de los dientes es fundamental
          desde la lactancia materna y la erupción de los dientes.
        </p>
  
        <div class="container3">
          <div class="img-container2">
            <img src="@/assets/ImagenesP/Odon3.jpg" alt="Pápa con su hijo">
          </div>
          <div class="container-text2">
            <p> El 60-90% de los niños en edad escolar sufren caries dentales, según la Organización Mundial de la Salud (OMS).
              Las visitas regulares al odontopediatra desde una edad temprana ayudan a prevenir problemas como caries,
              maloclusiones y enfermedades de las encías, que pueden tener un impacto negativo en la salud dental a
              largo plazo.</p>
          </div>
        </div>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'Odontopediatria',
  };
  </script>
  
  <style scoped>
  .odontopediatria-container {
    padding: 20px;
    font-family: 'Arial', sans-serif;
    margin-top: 150px;
  }
  
  .image-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .image-container {
    position: relative; /* Para poner el título sobre la imagen */
    width: 100%; /* la imagen ocupa el 100% del ancho */
    max-width: 1200px; /* tamaño*/
  }
  
  .main-image {
    width: 100%; /* la imagen ocupa el 100% */
    height: auto; /* Mantiene la proporción de la imagen */
  }
  
  .title {
    position: absolute; /* Para el título */
    top: 50%; /* Centrar verticalmente */
    left: 50%; /* Centrar horizontalmente */
    transform: translate(-50%, -50%); /* Ajusta el centro del texto */
    background-color: #A3E056;
    color: white; /* Color del titulo*/
    padding: 10px 20px; /* Espacio*/
    border-radius: 30px; /* Bordes redondeados */
    text-align: center;
    font-size: 3em; /* Tamaño del texto */
  }
  
  .description {
    text-align: center;
    margin: 20px 0;
    line-height: 1.6;
    color: #27E1BC;
    font-weight: bold;
    font-size: 1.5em; /* Tamaño del texto */
  }
  
  .container2 {
    display: flex; /* alinea los elementos en fila */
    flex-wrap: wrap; /* los elementos se ajustan */
    justify-content: space-between; /* espacio entre el texto y la imagen */
    align-items: center; /* Alinea el contenido verticalmente */
    padding: 20px;
    margin-top: 60px;
  }
  
  .container-text {
    flex: 1; /* El texto ocupará un 50%  */
    margin-right: 60px; /* Espacio entre el texto y la imagen */
    text-align: justify; 
  }
  
  .img-container {
    flex: 1; /* La imagen ocupará  el 50% */
  }
  
  .img-container img {
    width: 100%; /* Ajusta el ancho de la imagen al contenedor */
    max-width: 500px; /* tamaño de la imagen */
  }
  
  .description2 {
    text-align: center;
    margin: 20px 0;
    line-height: 1.6;
    color: #A3E056;
    font-weight: bold;
    font-size: 1.5em; /* Tamaño del texto */
    margin-top: 60px;
  }
  
  .container3 {
    display: flex; /* Alinea los elementos en fila */
    flex-wrap: wrap; /* Permite que los elementos se ajusten */
    justify-content: flex-start; /* Alinea a la izquierda */
    align-items: center; /* Alinea el contenido verticalmente */
    padding: 20px;
    margin-top: 60px;
  }
  
  .img-container2 {
    margin-right: 300px; /* Espacio entre la imagen y el texto */
  }
  
  .img-container2 img {
    width: 400px; /* Ajusta el ancho de la imagen al contenedor */
    max-width: 400px; /* Ajusta el tamaño máximo de la imagen */
    height: auto; /* Mantiene la proporción  */
    
  }
  
  .container-text2 {
    flex: 1; 
    text-align: justify; 
    width: 400px; /* Ajusta el ancho de la imagen  */
    max-width: 400px;
    font-size: 1.5em; /* Tamaño del texto */
  }


/* Media para el titulo y la imagen de fondo en moviles*/
@media (max-width: 600px) {
    .main-image {
        height: 20vh; /* Ajusta la altura de la imagen */
    }

    .title {
        font-size: 1.2em; 
        padding: 6px 12px; /* para que sea más pequeño */
        top: 50%; /* alineal el titulo */
        background-color: rgba(163, 224, 86, 0.8); 
    }
}

/* Para pantallas más pequeñas */
@media (max-width: 480px) {
    .title {
        font-size: 1em; /* Reduce aún más el tamaño del texto */
        padding: 4px 8px; /* Ajusta el padding */
        background-color: rgba(163, 224, 86, 0.8); 
    }
}

  /* Media para los textos e imagenes */
  @media (max-width: 768px) {
    .container2 {
      flex-direction: column; /* Cambia a columna */
      margin-top: 30px; /* Reduce el margen superior */
    }
  
    .container-text {
      margin-right: 0; /* Elimina el margen derecho */
      margin-bottom: 20px; /* Agrega margen inferior */
    }
  
    .img-container2 {
      margin-right: 0; /* Elimina el margen derecho */
      margin-bottom: 20px; /* Agrega margen inferior */
    }
  
    .container3 {
      flex-direction: column; /* Cambia a columna */
    }
  
    .img-container2 img {
      width: 100%; /* La imagen ocupará el 100% del ancho */
      max-width: none; /* Sin ancho*/
    }
  
    .container-text2 {
      width: 100%; /* El texto ocupará el 100% del ancho */
      max-width: none; /* Sin ancho */
    }
  }
  
  @media (max-width: 480px) {
    .title {
      font-size: 2em; /* Reduce el tamaño del texto */
    }
  
    .description, .description2 {
      font-size: 1.2em; /* Reduce el tamaño del texto*/
    }
  
    .container-text2 {
      font-size: 1.2em; /* Reduce el tamaño del texto */
    }
  }
  </style>
  