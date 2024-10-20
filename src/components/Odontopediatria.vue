<template>
    <v-container>
      <v-row>
        <v-col cols="12">
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
      </v-col>
  
      <v-col cols="12">
        <div class="container2">
          <div class="container-text">
            <p>Las visitas tempranas al odontopediatra ayudan a detectar y prevenir
               problemas como caries en los dientes de leche, que son fundamentales
              para guiar la erupción correcta de los dientes permanentes y asegurar
              una buena salud bucal a largo plazo.</p>
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
      </v-col>

       <v-col cols="12">
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
        <div class="content1">
        <img src="@/assets/ImagenesP/Odon4.jpg" alt="Consultorio dental">
      </div>
    </v-col>


    <v-col cols="12">
      <div class="cont">
    <h1 class="title2">3 Datos Felizdent</h1>
    <div class="Cuadrados">
      <div class="Cuad Cuadrado1">
        <p>
          Las visitas tempranas al odontopediatra permiten educar a los niños y a los padres
          sobre la importancia de una correcta higiene bucal, inculcando hábitos saludables que 
          pueden durar toda la vida.
        </p>
      </div>
      <div class="Cuad Cuadrado2">
        <p>
          Acostumbrar a los niños a visitar al odontopediatra desde pequeños les ayuda a reducir la 
          ansiedad o miedo a las visitas al dentista. Esto crea una experiencia positiva que facilitará 
          sus visitas regulares durante toda su vida.
        </p>
      </div>
      <div class="Cuad Cuadrado3">
        <p>
          Los dientes de leche no solo ayudan en la masticación y el habla, sino que también mantienen 
          el espacio necesario para que los dientes permanentes crezcan correctamente. Cuidar de ellos 
          reduce las posibilidades de tener problemas de alineación dental en el futuro.
        </p>
      </div>
    </div>
  </div>
</v-col>
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
    margin-top: 110px;
  }
  
  .image-section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .image-container {
   position: relative; /* Para poner el título sobre la imagen */
   width: 100%; /* La imagen ocupa el 100% del ancho */
   max-width: 100vw; /* tamaño en unidades relativas */
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
    background-color: rgba(163, 224, 86, 0.8); 
    color: white; 
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
    margin-right: 4vw;  /* Espacio entre el texto y la imagen */
    text-align: justify; 
  }
  
  .img-container {
    flex: 1; /* La imagen ocupará  el 50% */
    display: flex;
    justify-content: center; /* Centra la imagen dentro del contenedor */
  }
  
  .img-container img {
  width: 100%; /* Ajusta el ancho de la imagen al contenedor */
  max-width: 500px; /* tamaño de la imagen */
  height: auto; /* Mantiene la proporción */
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
  width: 30vw;
  font-size: 1.5em; /* Tamaño del texto */
  }
  .content1 {
  width: 100%;
  height: auto; /* Ocupa todo el alto de la pantalla */
  display: flex; /* Para centrar la imagen */
  justify-content: center;
  align-items: center;
  padding: 20px; /* Espacio*/
  
}
.content1 img {
  width: 100%;
  height: auto; /* Mantiene la proporción de la imagen */
  object-fit: contain; /* La imagen se ajusta al contenedor */
 
}
.cont {
    margin: 60px 0;
    text-align: center; /* Centrar el título */
    
}
.title2 {
    font-size: 2.5em; /* Tamaño del texto */
    margin-bottom: 40px; /* Espacio debajo del título */
    background-color: #27E1BC; /* Fondo azul */
    color: rgb(14, 13, 13); /* Color del texto */
    padding: 10px; /* Espacio interno */
    border-radius: 30px; 
    display: inline-block; /* Ajusta el fondo al tamaño del texto */
}
.Cuadrados {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Centra los cuadros en pantallas pequeñas */
  align-items: center; /* Alinea verticalmente el contenido */
    
}
.Cuad {
    padding: 20px; /* Espacio interno del cuadro */
    width: 300px; /* Ancho del cuadro */
    margin: 40px; /* Espacio entre cuadros */
    display: flex; /* Alinea el contenido del cuadro */
    align-items: center; /* Alinea verticalmente el contenido */
    justify-content: center; /* Alinea horizontalmente el contenido */
}
.Cuad p {
    text-align: center; /* Centra el texto dentro del cuadro */
    font-size: 1em; /* Tamaño del texto */
    color: #000000; /* Color del texto */
}

/* Escalera en los cuadros */
.Cuad:nth-child(2) {
  transform: translateY(50px); /* Desplaza el segundo cuadro */
}

.Cuad:nth-child(3) {
  transform: translateY(120px); /* Desplaza el tercer cuadro más abajo */
}


.Cuadrado1 {
    background-color: #27E1BC; /* Color del cuadro 1 */
}

.Cuadrado2 {
    background-color: #d9d9d9c4; /* Color del cuadro 2 */
}

.Cuadrado3 {
    background-color: #A3E056; /* Color del cuadro 3 */
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
        font-size: 1.5em; /* Reduce aún más el tamaño del texto */
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
  
    .description, .description2 {
      font-size: 1.2em; /* Reduce el tamaño del texto*/
    }
  
    .container-text2 {
      font-size: 1.2em; /* Reduce el tamaño del texto */
    }
}
@media (max-width: 768px) {
  .content1 {
    height: auto; /* Permite que el contenedor crezca según el contenido en pantallas pequeñas */
  }

  .content1 img {
    width: 100%;
    height: auto; /* Se asegura de mantener la imagen completa*/
  }
}
/* Media para los cuadrados*/
@media (max-width: 768px) {
  .title2 {
    font-size: 2em; /* Tamaño más pequeño para pantallas medianas */
  }

  .Cuad {
    width: 90%; /* Aumenta el ancho en pantallas más pequeñas */
    margin: 10px 0; /* Reduce el margen entre cuadros */
  }
}

/* Media para los cuadrados */
@media (max-width: 480px) {
  .title2 {
    font-size: 1.5em; /* Reduce aún más el tamaño del texto */
  }

  .Cuad {
    width: 100%; /* Los cuadros ocuparán todo el ancho */
    margin: 5px 0; /* Espacio entre cuadros */
  }
}
@media (max-width: 900px) {
  /* Centrar las imágenes en dispositivos medianos */
  .img-container2 {
    justify-content: center; /* Centra la imagen Odon3.jpg */
  }

  /* Centrar los cuadros */
  .Cuadrados {
    justify-content: center; /* Centra los cuadros en dispositivos medianos */
  }

  /* Asegura que los textos e imágenes se ajusten correctamente */
  .container2,
  .container3 {
    flex-direction: column; /* Cambia a columnas en pantallas medianas */
    align-items: center; /* Centra verticalmente */
  }

  /* Ajustes adicionales para mantener el diseño */
  .container-text, 
  .container-text2 {
    width: 100%; /* Asegura que los textos ocupen el 100% en pantalla */
  }
}
@media (max-width: 1200px) {
  .container3 {
    flex-direction: column; /* Cambia a columnas en pantallas medianas */
  
  }
  .img-container2,
  .img-container {
    margin-right: 0; /* Elimina el margen a la derecha */
    margin-bottom: 20px; /* Agrega margen inferior */
  }

  .img-container img,
  .img-container2 img {
    width: 100%; /* La imagen ocupará todo el ancho */
    height: auto; /* Mantiene la proporción */
  }
  
  .Cuadrados {
    flex-direction: column; /* Alinea los cuadros en columna */
  }

  .Cuad {
    width: 100%; /* Ocupa el 100% del ancho */
    margin: 20px 0; /* Ajusta el margen entre los cuadros */
  }
}
@media (min-width: 768px) and (orientation: landscape) {
  .container-text2 {
    width: 60vw; /* Incrementa el ancho del contenedor en modo horizontal */
    text-align: justify; /* Asegura que el texto esté justificado */
    font-size: 1.5em; /* Ajusta el tamaño del texto si es necesario */
  }
}

  </style>
  