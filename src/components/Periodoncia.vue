<template>
    <v-container>
      <v-row>
        <div class="periodoncia">
          <!-- Imagen con título centrado encima -->
          <section class="header-section">
            <img src="@/assets/ImagenesP/Perio.jpg" alt="Periodoncia" class="header-image" />
            <h2 class="title">Periodoncia</h2>
          </section>
  
          <!-- Descripción principal -->
          <section class="description">
            <p>
              Cuida la salud de tus encías con nuestros tratamientos especializados en periodoncia,
              enfocados en prevenir y tratar enfermedades periodontales para mantener tu encía y sonrisa saludable.
            </p>
          </section>

        <div class="container2">
          <div class="container-text">
            <p>
             En la Clínica Dental Felizdent contamos con especialistas altamente capacitados en el
             tratamiento de la periodontitis y la gingivitis. Las encías son un tejido clave en la
             salud bucal, ya que sostienen los dientes y facilitan la masticación. Un dato interesante
             es que, según estudios, más del 80% de las personas mayores de 35 años presentan algún
             problema en las encías. Si no se trata a tiempo, estas afecciones pueden avanzar hasta
             causar la pérdida de piezas dentales. Por ello, es fundamental acudir a un experto en
             periodoncia al notar los primeros síntomas. 

            </p>
          </div>
          <div class="img-container">
            <img src="@/assets/ImagenesP/Perio1.jpg" alt="Dentista trabajando">
          </div>
        </div>


  
          <!-- Preguntas desplegables -->
          <div class="titul">
            <div class="titulQ"> ¡Tu salud dental es nuestra prioridad en Felizdent!</div>
          </div>
          <section class="questions">
            <div class="question blue" @click="toggleQuestion(1)">
              <h3>
                ¿Qué es la periodoncia?
                <span :class="{ expanded: activeQuestion === 1 }">+</span>
              </h3>
              <div v-if="activeQuestion === 1" class="answer">
                <hr class="divider" /> <!-- Línea divisoria -->
                <p>
                  La periodoncia es la especialidad de la odontología que se ocupa de prevenir, diagnosticar
                  y tratar las enfermedades de las encías y del hueso que sujetan los dientes. Las enfermedades
                  periodontales más comunes son la gingivitis y la periodontitis.
                </p>
              </div>
            </div>
  
            <div class="question green" @click="toggleQuestion(2)">
              <h3>
                ¿Qué es la gingivitis?
                <span :class="{ expanded: activeQuestion === 2 }">+</span>
              </h3>
              <div v-if="activeQuestion === 2" class="answer">
                <hr class="divider" /> <!-- Línea divisoria -->
                <p>
                  La gingivitis es una enfermedad periodontal crónica e indolora que provoca la inflamación
                  de las encías. Es una enfermedad con alta prevalencia en la sociedad actual, según los
                  grupos de edad su frecuencia puede estar alrededor de un 60% de la población en mayor
                  o menor medida y si no se trata puede dar lugar a la periodontitis. Su principal causa
                  es el acúmulo de bacterias o placa bacteriana alrededor de los dientes por una técnica
                  de cepillado inadecuada o insuficiente.
                </p>
              </div>
            </div>
  
            <div class="question blue" @click="toggleQuestion(3)">
              <h3>
                ¿Qué es la periodontitis?
                <span :class="{ expanded: activeQuestion === 3 }">+</span>
              </h3>
              <div v-if="activeQuestion === 3" class="answer">
                <hr class="divider" /> <!-- Línea divisoria -->
                <p>
                  La periodontitis o piorrea es una enfermedad indolora que afecta a la encía y produce
                  la pérdida o destrucción del hueso que rodea a los dientes, favoreciendo la movilidad
                  y posterior pérdida dental. Esta enfermedad periodontal es, junto con la caries, la
                  primera causa de pérdida de dientes. En muchas ocasiones, los síntomas de la periodontitis
                  pueden pasar desapercibidos y diagnosticarse demasiado tarde. En otros, puede manifestarse
                  mediante el sangrado de encías, el mal aliento, la recesión de encías e incluso la movilidad dental.
                </p>
              </div>
            </div>
          </section>
  
          <!-- Consejos para encías sanas -->
          <section class="tips">
            <h3>¿Cómo tener las encías siempre sanas?</h3>
            <p>
              El cuidado de las encías es una de las tareas más importantes, si quieres
              mantener una dentición sana durante muchos años. Para ello es fundamental
              mantener una correcta higiene bucodental de forma diaria, siendo la técnica
              de cepillado en este caso muy importante. Además, es imprescindible acudir
              al especialista quien realizará revisiones periódicas no sólo de nuestros dientes,
              si no también de la salud de nuestras encías, ya que el cepillado común no es suficiente
              para evitar la acumulación de bacterias, y para ello son necesarios distintos tratamientos
              de las enfermedades periodontales.
            </p>
          </section>
        </div>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        activeQuestion: null,
      };
    },
    methods: {
      toggleQuestion(questionNumber) {
        this.activeQuestion = this.activeQuestion === questionNumber ? null : questionNumber;
      },
    },
  };
  </script>
  
  <style scoped>
  .periodoncia {
    padding: 20px;
    margin-top: 130px;
    font-family: 'Arial', sans-serif;
  }
  
  .header-section {
    position: relative;
    text-align: center;
    color: white;
    display: flex;
    flex-direction: column; /* Asegura que los elementos se apilen verticalmente */
    align-items: center; /* Centra horizontalmente */
  }
  
  .header-image {
    width: 100%;
    height: auto;
  }
  
  .title {
    position: absolute;
    top: 50%; /* Ajusta para que el título esté más arriba */
    right: 15%;
    font-weight: bold;
    background-color: rgba(180, 235, 112, 0.8);
    color: white;
    padding: 10px;
    border-radius: 17px;
    font-size: clamp(1.6em, 3vw, 3em); /* Tamaño adaptable con clamp */
    
  }
  
  .description {
    text-align: center;
    margin: 30px 0;
    line-height: 1.6;
    color: #27e1bc;
    font-weight: bold;
    font-size: 2em;
  }
  .container2 {
    display: flex; /* alinea los elementos en fila */
    justify-content: space-between; /* espacio entre el texto y la imagen */
    align-items: flex-start;
    padding: 20px;
    margin-top: 130px;
    flex-wrap: wrap;
     
  }
  .container-text {
    width: 100%; /* Asegura que ocupe el 100% en pantallas pequeñas */
    max-width: 450px;
    text-align: justify;
    box-sizing: border-box;
    margin-right: 0; /* Elimina el margen derecho */
    margin-bottom: 20px; /* Agrega margen inferior */

  }
  
  .img-container {
  width: 40%; /* Ajusta el ancho de la imagen */
  max-width: 400px;
  margin-right: 20px; /* Espacio a la derecha de la imagen */
  display: flex;
  align-items: flex-start; /* Asegura que la imagen también esté alineada con el texto */
}
  .img-container img {
  width: 100%;
  height: auto;
  margin-top: 0;
  object-fit: contain; 
}
.titul{
  padding: 20px;
  margin-top: 100px;
  font-family: 'Arial', sans-serif;
  text-align: center; /* Asegura que todo dentro esté centrado */
}
.titulQ{
  display: inline-block; /* Se ajusta al tamaño del texto */
  border-bottom: 3px solid #ccc; /* Solo aplica un borde debajo */
  padding: 10px; /* Añade espacio alrededor del texto */
  margin: 20px auto; /* Centra el elemento */
  font-weight: bold;
  font-size: 1.5em;
  text-align: center;
}
  .questions {
    margin-top: 50px;
  }
  
  .questions .question {
    padding: 30px;
    border-radius: 5px;
    border: 1px solid #ddd;
    cursor: pointer;
    
  }
  .questions .question.blue {
    background-color: #27e1bc;
  }
  
  .questions .question.green {
    background-color: #a3e056;
  }
  
  .questions .question h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    color: #000000;
  }
  
  .questions .question h3 span {
    transition: transform 0.3s ease;
  }
  
  .questions .question h3 span.expanded {
    transform: rotate(45deg);
    font-weight: bold;
  }
  
  .answer {
    margin-top: 10px;
    padding: 10px;
    border-radius: 5px;
    display: block;
    transition: all 0.3s ease;
  }
  
  .divider {
    border: 0;
    height: 1.5px;
    background: #000000;
    margin-bottom: 10px;
  }
  
  .tips h3 {
    width: 100%;
    font-size: 26px;
    font-weight: bold;
    text-align: center;
    margin-top: 130px;
    font-style: italic; /* Aplica cursiva al texto */
  }
  
  .tips p {
    width: 100%;
    margin-top: 10px;
    text-align: center;
    margin-top: 20px;
    font-weight: bold;
    font-size: 1.4em;
    font-style: italic; /* Aplica cursiva al texto */
    
  }
  /* Media para el título y la imagen de fondo en móviles */
@media (max-width: 600px) {
    .header-image {
        height: 20vh; /* Ajusta la altura de la imagen */
    }

    .title {
        top: 45%; /* Ajusta para que el título esté más arriba */
        right: 5%;
        font-size: 1.2em; 
        padding: 6px 12px;
        background-color: rgba(163, 224, 86, 0.8); 
    }
    .img-container {
    width: 100%; /* Asegura que ocupe el 100% del ancho en móviles */
    margin: 0 auto; /* Centra la imagen */
  }

  .img-container img {
    width: 90%; /* Ajusta el tamaño de la imagen en móviles */
    height: auto; /* Mantiene la proporción */
  }
  .question h3 {
    font-size: 16px; /* Reduce el tamaño del título de la pregunta */
  }

  .answer p {
    font-size: 14px; /* Ajusta el tamaño del texto en la respuesta */
    text-align: justify;
  }

  .tips h3, .tips p {
    font-size: 1.2em; /* Ajusta el tamaño del texto en las secciones de consejos */
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

/* Media para los textos e imágenes */
@media (max-width: 768px) {
    .container2 {
        flex-direction: column; /* Cambia a columna */
        align-items: center; 
        margin-top: 30px; /* Reduce el margen superior */
    }

    .container-text {
      width: 100%; /* Se asegura de que ocupen el 100% del ancho en pantallas pequeñas */
      max-width: 100%; /* Limita el ancho máximo */
      margin-right: 0; /* Elimina el margen derecho */
      margin-bottom: 20px; /* Agrega margen inferior */
    }

    .img-container {
      max-width: 100%;
      margin-top: 60px;
        
    }

    .img-container img {
      width: 100%; /* Asegura que la imagen ocupe el 100% en pantallas pequeñas */
      height: auto;
      
    }
    .titul {
    margin-top: 10px; /* Aumenta el margen superior para móviles */
  }

  .titulQ {
    font-size: 1.2em; /* Ajusta el tamaño del texto si es necesario */
  }
  .questions {
    margin-top: 5px;
  }
  .tips h3 {
    margin-top: 80px;
  }
  .question h3 {
    font-size: 18px; /* Ajusta el tamaño del texto de las preguntas */
  }

  .answer p {
    font-size: 16px; /* Ajusta el tamaño del texto de las respuestas */
    text-align: justify;
  }

  .tips h3, .tips p {
    font-size: 1.4em; /* Ajusta el tamaño del texto en las secciones de consejos */
  }
}

@media (max-width: 480px) {
    .description, .description2 {
        font-size: 1.2em; /* Reduce el tamaño del texto*/
    }

    .container-text {
        font-size: 1.2em; /* Reduce el tamaño del texto */
    }
}
/* Ajustes específicos para pantallas de tabletas */
@media (max-width: 900px) {
  .container2 {
    flex-direction: column; /* Cambia a disposición en columna para centrar */
    align-items: center; /* Asegura que ambos elementos estén centrados */
    text-align: center; /* Centra el texto */
  }

  .container-text {
    width: 100%; /* Se asegura de que el texto ocupe todo el ancho disponible */
    max-width: 100%; /* Evita que sea más ancho que el contenedor */
    margin-right: 0; /* Elimina márgenes laterales */
    margin-bottom: 20px; /* Añade espacio debajo del texto */
  }

  .img-container {
    width: 100%; /* Asegura que la imagen ocupe todo el ancho disponible */
    margin: 0 auto; /* Centra la imagen */
  }

  .img-container img {
    width: 100%; /* Ajusta el tamaño de la imagen para pantallas de tabletas */
    height: auto; /* Mantén las proporciones */
  }
}

  </style>
  

  
  