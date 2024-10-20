<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="estetica-dental">
          <div class="title-images">
            <div class="images">
              <img src="@/assets/ImagenesC/Son9.jpg" alt="Sonrisa" />
            </div>
            <h1 class="title">Estética Dental</h1>
          </div>
          <p class="description">
            Cuida la salud dental de tus hijos con nuestros tratamientos especializados en odontopediatría, enfocados
            en prevenir y tratar problemas dentales desde temprana edad, asegurando sonrisas saludables para el futuro.
          </p>
        </div>
      </v-col>
  
      <v-col cols="12">
        <div class="container2">
          <div class="container-text">
            <p>
              El 48% de las personas considera que la sonrisa es la característica más memorable
              al conocer a alguien por primera vez, según la Academia Americana de Odontología Cosmética (AACD).
            </p>
          </div>
          <div class="img-container">
            <img src="@/assets/ImagenesC/Son3.jpg" alt="Sonrisa 4" />
          </div>
        </div>
      </v-col>
  
      <!-- Sección de tratamientos -->
      <v-col cols="12">
        <div class="tratamientos-section">
          <h1>Tratamientos dentales de FelizDent</h1>
          <h2 class="title2">Blanqueamiento Dental</h2>
          <div class="tratamiento-description">
            <p>
              El blanqueamiento dental es un procedimiento estético que tiene como objetivo aclarar el color de los dientes, eliminando manchas o decoloraciones
              causadas por factores como el consumo de alimentos y bebidas (café, vino, té), el tabaco o el envejecimiento natural.
            </p>
            <img src="@/assets/ImagenesC/Son4.jpg" alt="Blanqueamiento dental" />
          </div>
        </div>
      </v-col>
  
      <v-col cols="12">
        <div class="dise-sonrisa-section">
          <h2 class="dise-title">Diseño de sonrisa Digital</h2>
          <div class="container2">
            <div class="container-text3">
              <p>
                El Diseño de Sonrisa Digital es una técnica avanzada en odontología estética que utiliza herramientas
                digitales para planificar y visualizar cómo se verá la sonrisa del paciente después de realizar ciertos
                tratamientos dentales. Este método permite a los dentistas crear una simulación personalizada y precisa
                de la sonrisa ideal, considerando aspectos como la forma, el tamaño, la posición y el color de los
                dientes, así como la armonía facial.
              </p>
            </div>
            <div class="dise-img-container">
              <img src="@/assets/ImagenesC/Son5.jpg" alt="Diseño de sonrisa" />
            </div>
          </div>
        </div>
      </v-col>
  
      <v-col cols="12">
        <p class="description2">
          Una sonrisa saludable no solo impacta en la apariencia, sino también
          en la salud general. La mala salud bucal puede derivar en problemas como
          enfermedades cardiovasculares, infecciones y complicaciones en el sistema inmunológico.
        </p>
        <div class="img-container2">
          <img src="@/assets/ImagenesC/Son6.jpg" alt="Diseño de sonrisa" />
        </div>
      </v-col>
  
      <v-col cols="12">
        <div class="carillas-section">
          <h2 class="carillas-title">Carillas</h2>
          <div class="container3">
            <div class="container-text4">
              <p>
                Las carillas dentales son finas láminas de material (generalmente
                porcelana o resina compuesta) que se adhieren a la superficie frontal
                de los dientes con el fin de mejorar su apariencia estética.
              </p>
            </div>
            <div class="carillas-img-container">
              <img src="@/assets/ImagenesC/Son7.jpg" alt="Diseño de sonrisa" />
            </div>
          </div>
        </div>
      </v-col>
  
      <!-- Sección de texto informativo -->
      <v-col cols="12">
        <div class="carillas-info">
          <h3>¿Cuándo son necesarias las carillas dentales?</h3>
  
          <p><strong>Manchas y decoloraciones:</strong> Las carillas pueden ocultar dientes manchados o descoloridos que no responden bien a los tratamientos de blanqueamiento.</p>
  
          <p><strong>Dientes desgastados:</strong> Proporcionan una solución estética para dientes que han sufrido desgaste por el tiempo o uso.</p>
  
          <div class="carillas-image">
            <img src="@/assets/ImagenesC/Son8.jpg" alt="carillas dentales" />
          </div>
  
          <p><strong>Dientes desiguales o desalineados:</strong> Pueden crear la ilusión de dientes más uniformes y bien alineados, evitando la necesidad de tratamientos ortodóncicos en algunos casos.</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
  </template>
  
  <script>
  export default {
    name: "EsteticaDental",
  };
  </script>
  
  <style scoped>
 
  .estetica-dental {
    padding: 20px;
    font-family: 'Arial', sans-serif;
    margin-top: 120px;
  }
  .title-images {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  
  .images {
    position: relative; /* Para poner el título sobre la imagen */
   width: 100%; /* La imagen ocupa el 100% del ancho */
   max-width: 100vw; /* tamaño en unidades relativas */
  }
  
  .images img {
    width: 100%;
    height: auto;
  }
  
  .title {
    position: absolute; /* poner el titulo encima de las imagenes*/
    top: 50%; /*  vertical */
    left: 50%; /*  horizontal */
    transform: translate(-50%, -50%); /*centrado en ambos ejes */
    background-color: rgba(168, 226, 98, 0.8); 
    color: white;
    padding: 10px 20px; 
    border-radius: 15px; 
    text-align: center;
    font-size: 3.2vw; /* Tamaño del texto ajustado */
    z-index: 1; 
    white-space: nowrap;  
  }
  .description {
    text-align: center;
    margin: 20px 0;
    line-height: 1.6;
    color: #27E1BC;
    font-weight: bold;
    font-size: 1.5em; 
  
  }
  .container2 {
    display: flex; /* Alinea los elementos en fila */
    justify-content: space-between; /* Espacio entre el texto y la imagen */
    align-items: flex-start; /* Alinea el contenido verticalmente */
    margin-top: 60px;
    flex-wrap: wrap; /* los elementos se ajustan */
  
  }
  .container-text {
    width: 300px; 
    height: 300px; 
    text-align: center; 
    overflow: hidden; /* Oculta el texto*/
    box-sizing: border-box;
    margin-right: 40px; 
  }
  
  .container-text p {
    font-size: 1.5em;
     
  }
  .img-container {
    width: 100%;
    max-width: 400px;
    margin-bottom: 20px;
  }
  .img-container img {
    width: 100%;
    height: auto;
  }
  
  .tratamientos-section {
    text-align: center;
    margin: 5vw 0;
    
  }
  
  .title2 {
    background-color: #27E1BC; 
    color: rgb(0, 0, 0); 
    font-size: 1.5rem; 
    border-radius: 20px; 
    padding: 10px 20px; 
    display: inline-block; 
    margin-top: 50px; 
  }
  
  .tratamiento-description {
    margin-top:  5vw; 
    font-size: 1.5rem; 
  }
  
  .tratamiento-description img {
    width: 100%;
    max-width: 500px;
    height: auto;
    margin-top: 30px;
  }
  
  .dise-sonrisa-section{
     margin: 3vw 0;
    text-align: center;
  }
  .dise-title {
    background-color: #27E1BC; 
    color: rgb(0, 0, 0); 
    font-size: 1.5rem; 
    border-radius: 20px; 
    padding: 10px 20px; 
    display: inline-block; 
   
  }
  .container-text3 {
    width: 400px; 
    height: 500px; 
    text-align: justify;
    overflow: hidden; 
    box-sizing: border-box; 
    margin-right: 40px; 
    font-size: 1.5em; 
    margin-top: 30px;
  }
  
  .dise-img-container {
    flex: 1; /* La imagen ocupará el 50% */
    justify-content: flex-end; /* Alinea la imagen a la derecha */
    width: 100%;
    max-width: 450px;
    
  }
  .dise-img-container img { 
    width: 100%;
    height: auto;
    margin-top: 55px;
   
  }
  .description2 {
    text-align: center;
    margin: 5vw 0;
    line-height: 1.4; /* Reduce el espaciado entre líneas */
    color: #27E1BC;
    font-weight: bold;
    font-size: 3em; /* Tamaño del texto reducido */
    max-width: 800px; /* para que no sea tan ancho */
    margin-left: auto; 
    margin-right: auto; 
    
  
  }
  .img-container2{
   width: 100%;
    display: flex;
    justify-content: center;
  
  }
  .img-container2 img{
    width: 100%;
    max-width: 400px;
    height: auto;
  }
  
  .carillas-section {
    margin: 5vw 0;
    text-align: center;
  }
  .carillas-title {
    background-color: #27E1BC; 
    color: rgb(0, 0, 0); 
    font-size: 1.5rem; 
    border-radius: 20px; 
    padding: 10px 20px; 
    display: inline-block; 
    width: 23vw; 
    text-align: center;
    
  }
  
  .container3 {
    display: flex; 
    justify-content: space-between; 
    align-items: flex-start; 
    margin-top: 80px;
    flex-wrap: wrap; /* Permite que los elementos se ajusten automáticamente en pantallas pequeñas */
    flex-direction: row; /* Mantiene los elementos en fila en pantallas grandes */
  }
  
  .container-text4 {
    width: 400px; 
    height: 500px; 
    text-align: justify;
    overflow: hidden; /* Oculta el texto que se desborda */
    box-sizing: border-box; 
    margin-right: 40px; 
    font-size: 1.5em; /* Tamaño del texto */
  }
  
  .carillas-img-container {
    flex: 1; /* La imagen ocupará el 50% */
    display: flex;
    justify-content: flex-end; /* Alinea la imagen a la derecha */
    align-items: center; /* Alinea el contenido verticalmente */
    margin-top: 20px auto;
  }
  
  .carillas-img-container img { 
    width: 50%; /* Ajusta el ancho de la imagen al contenedor */
    max-width: 100%; /* Ajusta el tamaño máximo de la imagen al 100% del contenedor */
    height: auto; 
  }
  
  .carillas-info {
    text-align: center;
    margin-top: -200px; 
    padding: 0 20px; 
  }
  
  .carillas-info h3 {
    font-size: 2em; /* Tamaño del título */
    margin-bottom: 50px; 
  }
  
  .carillas-info p {
    font-size: 2em; /* Tamaño del texto de los párrafos */
    line-height: 1.4; /* Espaciado entre líneas */
    text-align: center;
    margin: 40px 0;
    max-width: 600px; /* Ajuste para que no sea tan ancho */
    margin-left: auto; 
    margin-right: auto; 
  }
  
  .carillas-image {
    margin-top: 30px; /* Añadir espacio superior */
    margin-bottom: 30px; /* Añadir espacio inferior */
  }
  
  .carillas-image img {
    width: 80%; /* Ajustar el tamaño de la imagen */
    max-width: 500px;
    height: auto;
    display: block;
    margin: 0 auto; /*la imagen esté centrada */
  }
  
  .carillas-img-container img {
    width: 100%;
    max-width: 350px;
    height: auto;
  }
  

  @media (max-width: 768px) {
    .estetica-dental {
      margin-top: 80px; /* Reduce el margen superior */
    }
  
    .title {
      font-size: 2rem; /*tamaño del título */
    }
    .title-images {
      flex-direction: column;
    }
  
    .images img{
      height: 17vh; /*altura de la imagen */
      max-width: 150%; 
    }
    
    .description {
      font-size: 1.2em; 
    }
  
    .container-text {
      width: 100%; /* El texto ocupará el 100% */
      height: auto; /* Altura automática */
      margin-right: 0; /* Sin margen derecho */
    }
  
    .img-container img {
      width: 100%; 
      max-width: none; 
      
    }
  
    .tratamiento-description img {
      width: 100%; 
      max-width: none; 
    }
  
    .container-text3 {
      width: 100%; 
      height: auto; 
      font-size: 1.2em; 
      margin-top: -10px;
    }
  
    .dise-img-container img {
      width: 90%; 
    }
    .description2 {
      font-size: 2em; 
      padding: 0 20px; 
    }
  
    .img-container2 img {
      width: 80%; 
    }
  
    .carillas-title {
      width: auto; 
      font-size: 1.8rem;
      padding: 10px 10px; 
    }
    .container3 {
      flex-direction: column; 
    }
    .container-text4 {
      width: 100%; 
      margin-bottom: -210px; 
      
      }
      .tratamiento-description img {
      max-width: 200px;
    }
    .carillas-img-container {
    justify-content: center; /* Centrar horizontalmente */
    align-items: center; /* Centrar verticalmente */
    width: 100%; 
    }
    .carillas-img-container img {
    margin-right: 35px;
    width: 90%; 
    text-align: center
  }
    .carillas-info h3 {
      margin-top: 260px; /* Separar título del contenido de la imagen  */
      font-size: 1.5rem; /* tamaño del título */
  }
  .tratamiento-description{
    margin-top: 40px;
  }
  
}
  @media (max-width: 480px) {
    .title {
      font-size: 1.5em; /* Tamaño de fuente*/
    }
  
    .description, .description2 {
      font-size: 1em; 
    }
  
    .container2 {
      flex-direction: column; 
      align-items: center; 
    }
  
    .img-container {
      justify-content: center; 
    }
  
    .carillas-info p {
      
      font-size: 0.9em; 
    }
  
    .carillas-image img {
      width: 100%; 
    }
    .carillas-img-container {
      margin: 0 auto; 
    }
  }
  
  @media (max-width: 600px) {
    .description2 {
      font-size: 1.5em; 
    }
  
    .container-text3,
    .container-text,
    .container2 {
      width: 100%; 
      margin-right: 0; 
    }
  
    .img-container {
      justify-content: center; 
    }
  
    .tratamiento-description img {
      margin-top: 20px; /* Reducir espacio*/
    }
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
  @media (max-width: 1024px) {
    .title {
      font-size: 2rem;
    }
    .description {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 768px) {
    .description {
      font-size: 1.2rem;
    }
  
    .container2 {
      flex-direction: column; /* columna */
    }
  
    .container-text, .img-container {
      width: 100%;
    }
  
    .tratamiento-description img {
      max-width: 100%; /* Ajusta la imagen al 100% en pantallas pequeñas */
    }
  }
  /* Ajustes específicos para pantallas de tabletas */
@media (max-width: 900px) {
  .img-container {
    width: 100%; /* Asegura que la imagen ocupe todo el ancho disponible */
    margin: 0 auto; /* Centra la imagen */
    margin-top: 18px; 
  }
  .img-container img {
    width: 100%; /* Ajusta el tamaño de la imagen para pantallas de tabletas */
    height: auto; /* Mantén las proporciones */
  }
  .dise-img-container{
    width: 100%; /* Asegura que la imagen ocupe todo el ancho disponible */
    margin: 0 auto; /* Centra la imagen */
  }
  .dise-img-container img{
    width: 100%; /* Ajusta el tamaño de la imagen para pantallas de tabletas */
    height: auto; /* Mantén las proporciones */
  }
}
@media (orientation: landscape) {
  .images img {
    height: 35vh; /* Ajustar la altura de la imagen cuando está en horizontal */
  }

  .title {
    font-size: 2.8vw; /* Reduce el tamaño del título en orientación horizontal */
  }
}

.description {
  text-align: center;
  margin: 20px 0;
  line-height: 1.6;
  color: #27E1BC;
  font-weight: bold;
  font-size: 1.5em;
}
  </style>