<template>
<v-container>
      <v-row>
    <section class="hero">
      <div class="content">
        <h1>FelizDent</h1>
        <h2>Clínica Dental</h2>
        <p>Felizdent es una clínica dental en con más de 20 años de experiencia, ofreciendo soluciones dentales innovadoras con tratamientos innovadores y mínimamente invasivos.
        Utilizamos materiales de última generación y contamos con un equipo de odontólogos especializados en periodoncia, estética dental, ortodoncia
        y odontopediatría, comprometidos con brindarte el mejor cuidado para tu salud bucal.</p>
        <img src="@/assets/ImagenesP/PP1.jpg" alt="Consultorio dental">
      </div>
    </section>
    </v-row>
    </v-container>

     <!-- Carrusel "Servicios" -->
     <v-row>
      <v-container>
     <div class="especialidades-container">
      <div class="carrusel">
        <div
          v-for="especialidad in especialidades"
          :key="especialidad.id"
          class="imagen-contenedor"
          @click="irADetalle(especialidad)"
        >
          <img :src="especialidad.imagen" alt="Especialidad" class="imagen">
          <div class="nombre-overlay">{{ especialidad.nombre }}</div>
        </div>
      </div>
    </div>
  </v-container>
   </v-row>


     <!-- Dentistas" -->
    <v-container>
    <div class="doctors-gallery">
    <h2>Conoce a nuestro equipo de dentistas</h2>

     <!-- Tarjeta 1 -->
      <v-row>
     <v-col cols="20" md="4">
    <div class="card">
      <div class="card-inner" :class="{ flipped: isFlipped1 }">
        <!-- Cara delantera -->
        <div class="card-front">
          <img src="@/assets/Imagenes/dentist.jpg" alt="Imagen del Dentista" class="card-img">
          <div class="card-content">
            <h3>Dra. Blanca Rodríguez Cortez</h3>

            <h4>Cirujano Dentista, Especialista en Cirugía Maxilofacial, con Maestría y Doctorado en Ciencias de la Educación y Doctorado en Salud Pública.</h4>
            <hr class="custom-line"> <!-- Línea horizontal -->
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist2.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. En Cirujano Dentista Facultad de Estomatología por la “Benemérita Universidad Autónoma de Puebla” 1995.
                </p>
              </div>
            </div>
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist3.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Especialidad en Cirugía Maxilofacial en Hospital universitario de Puebla por la “Benemérita Universidad Autónoma de Puebla” 1999.
                </p>
              </div>
            </div>
            <div class="button">
              <button class="btn-primary1v" @click.stop="flipCard1">Ver más</button>
            </div>
          </div>
        </div>

        <!-- Cara trasera -->
        <div class="card-back">
          <div class="card-back-content">
            <h3>Nivel académico</h3>
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist3.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. En Cirujano Dentista Facultad de Estomatología por la “Benemérita Universidad Autónoma de Puebla” 1995.
                </p>
              </div>
            </div>
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist3.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Especialidad en Cirugía Maxilofacial en Hospital universitario de Puebla por la “Benemérita Universidad Autónoma de Puebla” 1999.
                </p>
              </div>
            </div>
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist4.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Maestría en Ciencias de la Educación por el "Instituto de Estudios Universitarios", 2020.
                </p>
              </div>
            </div>
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist5.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Doctorado en Ciencias de la Educación por el "Centro de Investigación Científica, Académica y de Postgrado", 2024.
                </p>
              </div>
            </div>
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist6.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Doctorado en Salud Pública por la "Universidad Contemporánea de las Américas", Acta de examen en proceso de titulación.
                </p>
              </div>
            </div>
            <div class="button-container">
              <button class="btn-primary1" @click.stop="flipCard1">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-col>

    <!-- Tarjeta 2 -->
    <v-col cols="20" md="4">
    <div class="card">
      <div class="card-inner" :class="{ flipped: isFlipped2 }">
        <!-- Cara delantera -->
        <div class="card-front">
          <img src="@/assets/Imagenes/dentistME.jpg" alt="Imagen del Dentista" class="card-img2">
          <div class="card-content">
            <h3>Dra. María Elena Rodríguez Álvarez</h3>
            <h4>Estomatología Pediátrica</h4>
            <hr class="custom-line2"> <!-- Línea horizontal -->
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist2.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. En Estomatología por la “Benemérita Universidad Autónoma de Puebla” 1998 a 2002.
                </p>
              </div>
            </div>
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist7.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Especialidad en Estomatología Pediátrica “Instituto Nacional de Pediatría (INP) México D.F” 2008 a 2010.
                </p>
              </div>
            </div>
            <div class="button">
              <button class="btn-primary2v" @click.stop="flipCard2">Ver más</button>
            </div>
          </div>
        </div>

        <!-- Cara trasera -->
        <div class="card-back">
          <div class="card-back-content">
            <h3>Experiencia</h3>
            <div class="text-with-images2">
              <img src="@/assets/Imagenes/dentist8.jpg" alt="Logo" class="small-img">
              <div class="text-content2">
                <p class="justified-text">
                  Agosto 2021- Junio 2022 "Profesora en centro de investigación y estudios superiores en estomatología y salud S.C. CESES". (Modalidad en línea).
                </p>
              </div>
            </div>
            <div class="text-with-images2">
              <img src="@/assets/Imagenes/dentist9.jpg" alt="Logo" class="small-img">
              <div class="text-content2">
                <p class="justified-text">
                  Junio 2015-diciembre 2019 "Gestora de seguro popular • Operativo • Régimen Estatal de Protección Social en Salud".(seguro popular)
                </p>
              </div>
            </div>
            <div class="text-with-images2">
              <img src="@/assets/Imagenes/dentist3.jpg" alt="Logo" class="small-img">
              <div class="text-content2">
                <p class="justified-text">
                  Enero 2011-Junio 2014 (Estomatóloga pediatra • Clínico • Hospital Universitario de Puebla).
                </p>
              </div>
            </div>
            <div class="text-with-images2">
              <img src="@/assets/Imagenes/dentist10.jpg" alt="Logo" class="small-img">
              <div class="text-content2">
                <p class="justified-text">
                  2010-a la fecha "Estomatóloga Pediatra • Clínico • Risu clínica dental".
                </p>
              </div>
            </div>
            <div class="button-container">
              <button class="btn-primary2" @click.stop="flipCard2">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-col>
  
  <!-- Tarjeta 3 -->
  <v-col cols="20" md="4">
  <div class="card">
      <div class="card-inner" :class="{ flipped: isFlipped3 }">
        <!-- Cara delantera -->
        <div class="card-front">
          <img src="@/assets/Imagenes/dentistisabel.jpg" alt="Imagen del Dentista" class="card-img3">
          <div class="card-content">
            <h3>Dra. Isabel Chávez </h3>
            <h4>Estomatología Pediátrica </h4>
            <hr class="custom-line3"> <!-- Línea horizontal -->
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist2.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. En Estomatología por la “Benemérita Universidad Autónoma de Puebla” 2002 a 2006.
                </p>
              </div>
            </div>
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist11.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Especialidad en Estomatología Pediátrica “Hospital para el Niño Poblano” 2009 a 2011.
                </p>
              </div>
            </div>
            <div class="button">
              <button class="btn-primary3v" @click.stop="flipCard3">Ver más</button>
            </div>
          </div>
        </div>

        <!-- Cara trasera -->
        <div class="card-back">
          <div class="card-back-content">
            <h3>Diplomados</h3>
            <div class="text-with-images3">
              <img src="@/assets/Imagenes/dentist3.jpg" alt="Logo" class="small-img">
              <div class="text-content3">
                <p class="justified-text">
                  Diplomado en Investigación Clínica "Benemérita Universidad Autónoma de Puebla" 2009- 2010 (240 hrs).

                </p>
              </div>
            </div>
            <div class="text-with-images3">
              <img src="@/assets/Imagenes/dentist2.jpg" alt="Logo" class="small-img">
              <div class="text-content3">
                <p class="justified-text">
                  Diplomado de Ortopedia Maxilar con Aplicación Clínica En la "Benemérita Universidad Autónoma de Puebla" (campus Tehuacán)
                  2019- 2021.

                </p>
              </div>
            </div>
            <div class="text-with-images3">
              <img src="@/assets/Imagenes/dentist3.jpg" alt="Logo" class="small-img">
              <div class="text-content3">
                <p class="justified-text">
                  Diplomado de Actualización Ortopedia y Odontopediatría "Desarrollo Especializado con Nuevas Técnicas de Actualizaciòn"
                  2021-2022.

                </p>
              </div>
            </div>

            <div class="button-container">
              <button class="btn-primary3" @click.stop="flipCard3">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-col>

    <!-- Tarjeta 4 -->
   <v-col cols="20" md="4">
  <div class="card">
      <div class="card-inner" :class="{ flipped: isFlipped4 }">
        <!-- Cara delantera -->
        <div class="card-front">
          <img src="@/assets/Imagenes/dentistY.jpg" alt="Imagen del Dentista" class="card-img4">
          <div class="card-content">
            <h3>Dra. Yazmin Téllez Bautista </h3>
            <h4>Estomatología y Especialista en Endodoncia</h4>
            <hr class="custom-line4"> <!-- Línea horizontal -->
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist2.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. En Estomatología por la “Benemérita Universidad Autónoma de Puebla” 1998-2003.
                </p>
              </div>
            </div>
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist12.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Especialidad en endodoncia por “Centro Mexicano en estomatologia”2009 a 2011”.
                </p>
              </div>
            </div>
            <div class="button">
              <button class="btn-primary4v" @click.stop="flipCard4">Ver más</button>
            </div>
          </div>
        </div>

        <!-- Cara trasera -->
        <div class="card-back">
          <div class="card-back-content">
            <h3>Diplomados</h3>
            <div class="text-with-images4">
              <img src="@/assets/Imagenes/dentist13.jpg" alt="Logo" class="small-img">
              <div class="text-content4">
                <p class="justified-text">
                  Diplomado en Odontología Estetica y Restauradora en "Colegio Dental del Estado de Mexico, A.C" 2022. 

                </p>
              </div>
            </div>
            <div class="text-with-images4">
              <img src="@/assets/Imagenes/dentist2.jpg" alt="Logo" class="small-img">
              <div class="text-content4">
                <p class="justified-text">
               Diplomado de medicina interna en Estomatología en “Benemérita Universidad
              Autónoma de puebla” 2012-2013.

                </p>
              </div>
            </div>
            <div class="text-with-images4">
              <img src="@/assets/Imagenes/dentist15.jpg" alt="Logo" class="small-img">
              <div class="text-content4">
                <p class="justified-text">
               Diplomado en Cirugía Plástica Periodental en "Colegio de Actualización Profesional Tepeaca"2024.
                </p>
              </div>
            </div>
            <div class="text-with-images4">
              <img src="@/assets/Imagenes/dentist3.jpg" alt="Logo" class="small-img">
              <div class="text-content4">
                <p class="justified-text">
                 Diplomado en Diagnóstico y Tratamientos básicos Periodontales en “Benemérita
                   Universidad Autónoma de Puebla” abril 2015-febrero 2016.
                </p>
            </div>
          </div>

            <div class="button-container">
              <button class="btn-primary4" @click.stop="flipCard4">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </v-col>

    <!-- Tarjeta 5 -->
    <v-col cols="20" md="4">
  <div class="card">
      <div class="card-inner" :class="{ flipped: isFlipped5 }">
        <!-- Cara delantera -->
        <div class="card-front">
          <img src="@/assets/Imagenes/dentistBr.jpg" alt="Imagen del Dentista" class="card-img5">
          <div class="card-content">
            <h3>Dra. Bricia Pascuala López López</h3>
            <h4>Estomatología</h4>
            <hr class="custom-line5"> <!-- Línea horizontal -->
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist2.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. en Estomatología por la “Benemérita Universidad Autónoma de Puebla” 2008 a 2013.
                </p>
              </div>
            </div>

            <div class="button">
              <button class="btn-primary5v" @click.stop="flipCard5">Ver más</button>
            </div>
          </div>
        </div>

        <!-- Cara trasera -->
        <div class="card-back">
          <div class="card-back-content">
            <h3>Diplomados</h3>
            <div class="text-with-images5">
              <img src="@/assets/Imagenes/dentist2.jpg" alt="Logo" class="small-img">
              <div class="text-content5">
                <p class="justified-text">
                  Diplomado de medicina interna en Estomatología avalada por
                   Benemérita Universidad Autónoma de Puebla” 2019-2020. 

                </p>
              </div>
            </div>
            <div class="text-with-images5">
              <img src="@/assets/Imagenes/dentist15.jpg" alt="Logo" class="small-img">
              <div class="text-content5">
                <p class="justified-text">
                  Diplomado de Biocosmetica Dental por el “Colegio de Actualización
                   de Tepeaca” octubre 2021-septiembre a 2022.
                </p>
              </div>
            </div>
            <div class="text-with-images5">
              <img src="@/assets/Imagenes/dentist15.jpg" alt="Logo" class="small-img">
              <div class="text-content5">
                <p class="justified-text">
                  Diplomado en Prostodoncia Total por “Colegio de Actualización
                   de Tepeaca” noviembre 2022 a junio 2022. 

                </p>
              
            </div>
          </div>

            <div class="button-container">
              <button class="btn-primary5" @click.stop="flipCard5">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </v-col>

    <!-- Tarjeta 6 -->
    <v-col cols="20" md="4">
  <div class="card">
      <div class="card-inner" :class="{ flipped: isFlipped6 }">
        <!-- Cara delantera -->
        <div class="card-front">
          <img src="@/assets/Imagenes/dentistCr.jpg" alt="Imagen del Dentista" class="card-img6">
          <div class="card-content">
            <h3>Dra. Emma Carolina Machorro Velázquez</h3>
            <h4>Estomatología</h4>
            <hr class="custom-line6"> <!-- Línea horizontal -->
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist2.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. en Estomatología por la “Benemérita Universidad Autónoma de Puebla” (campus Tehuacán)
                   2015 a 2020.
                </p>
              </div>
            </div>
            <div class="button">
              <button class="btn-primary6v" @click.stop="flipCard6">Ver más</button>
            </div>
          </div>
        </div>

        <!-- Cara trasera -->
        <div class="card-back">
          <div class="card-back-content">
            <h3>Diplomados</h3>
            <div class="text-with-images6">
              <img src="@/assets/Imagenes/dentist16.jpg" alt="Logo" class="small-img">
              <div class="text-content6">
                <p class="justified-text">
                  Diplomado de Medicina Interna en el "Colegio Actualizacion Odontologica Puebla" (mayo 2023). 
                </p>
              </div>
            </div>
            <div class="button-container">
              <button class="btn-primary6" @click.stop="flipCard6">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </v-col> 
</v-row>
<div class="button-container1">
    <button class="boton-conoce-mas" @click="conoceMas">Conoce más</button>
  </div>
</div>
</v-container>


<!-- Filosofía -->
<v-container>
 <v-row>
<div class="filosofia-container">
  <h2>Conoce nuestra filosofía</h2>
  <p>Descubre qué nos motiva y guía en Felizdent. Nuestra misión,</p>
    <div class="texto2"> visión y valores reflejan nuestro compromiso con tu salud dental y bienestar.</div>
    

  <div class="misvis-section">
    <div class="misvis-item">
      <img src="@/assets/ImagenesP/DentistSon.jpg" alt="Paciente sonriendo">
      <div class="misvis-text1">
        <h3><i class="icon-check"></i> VISIÓN</h3>
        <p>Para el 2026 ser una clínica dental reconocida a nivel regional por la calidad, excelencia y responsabilidad social con la salud bucal de nuestros pacientes.</p>
      </div>
    </div>

    <div class="misvis-item">
      <div class="misvis-text">
        <h3><i class="icon-check"></i> MISIÓN</h3>
        <p>FELIZDENT es una clínica dental que brinda servicios de salud bucal con técnicas especializadas utilizando tecnología de vanguardia en material y equipo para asegurar la salud bucal, y satisfacción de nuestros pacientes, basados en la calidad humana.</p>
      </div>
      <img src="@/assets/ImagenesP/DentistP.jpg" alt="Dentista trabajando">
    </div>
  </div>
  <div class="content1">
        <img src="@/assets/ImagenesP/dentI.jpg" alt="Consultorio dental">
  </div>
</div>
</v-row>
</v-container>


 <!-- Sección de los valores -->
 <v-container>
  <v-row>
 <div class="valores-container">
    <h2><i class="fas fa-check-circle"></i> Valores</h2>
    <ul class="valores-list">
      <li v-for="valor in valores" :key="valor.nombre">
        <strong :style="{ color: valor.color }">{{ valor.nombre }}:</strong> {{ valor.descripcion }}
      </li>
    </ul>
  </div>

  <!-- Imagen del logo fuera del contenedor de valores -->
  <div class="logo-container">
    <img src="@/assets/ImagenesP/logo2.jpg" alt="Felizdent Logo" class="logo-felizdent">
  </div>
  </v-row>
  </v-container>

 
  <!-- footer -->
<footer>
  <div class="footer-content">
    <div class="footer-logo">
      <img src="@/assets/ImagenesP/logo2.jpg" alt="Logo Felizdent">
    </div>
    
    <div class="footer-section">
      <h4>Contacto</h4>
      <p>Av. Reforma 153, Barrio de Jesús, 75615 San Lorenzo Ometepec, Pue.</p>
      <p>Teléfono: +52 1 222 152 6613</p>
    </div>

    <div class="footer-section">
      <h4>Enlaces Rápidos</h4>
      <ul>
          <li><router-link to="#servicios">Servicios</router-link></li>
          <li><router-link to="/consultorios">Consultorios</router-link></li>
          <li><router-link to="/dentistas">Dentistas</router-link></li>
          <li><router-link to="#comentarios">Comentarios</router-link></li>
        </ul>
    </div>

    <div class="footer-section">
      <h4>Horarios de Atención</h4>
      <p>Lunes a Viernes: 9:00 AM - 6:00 PM.</p>
      <p>Sábado: 9:00 AM - 2:00 PM.</p>
      <p>Domingo: Previa Cita.</p>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p>&copy; 2024 Felizdent | Todos los derechos reservados.</p>
  </div>
</footer>
</template>


<script>
  import imgOdontopediatria from '@/assets/ImagenesP/Den1.jpg';
  import imgEndodoncia from '@/assets/ImagenesP/Img3.jpg';
  import imgCirugias from '@/assets/ImagenesP/Img4.jpg';
  import imgOrtodoncia from '@/assets/ImagenesP/Den1.jpg'; 
  import imgEstetica from '@/assets/ImagenesP/Img3.jpg'; 
  import imgPeriodoncia from '@/assets/ImagenesP/Img4.jpg'; 
  
  export default {
  name: 'PaginaPrincipal',
  data() {
    return {
        isFlipped1: false,
        isFlipped2: false,
        isFlipped3: false,
        isFlipped4: false,
        isFlipped5: false,
        isFlipped6: false,
  
        especialidades: [
          { id: 1, nombre: "Odontopediatría", imagen: imgOdontopediatria, url: "/detalles/Odontopediatría" },
          { id: 2, nombre: "Endodoncia", imagen: imgEndodoncia, url: "/detalles/Endodoncia" },
          { id: 3, nombre: "Cirugías", imagen: imgCirugias, url: "/detalles/Cirugías" },
          { id: 4, nombre: "Ortodoncia", imagen: imgOrtodoncia, url: "/detalles/Ortodoncia y Ortopedia Maxilar" },
          { id: 5, nombre: "Estética Dental", imagen: imgEstetica, url: "/detalles/estetica-dental" },
          { id: 6, nombre: "Periodoncia", imagen: imgPeriodoncia, url: "/detalles/Periodoncia" }
        ],
        valores: [
        { nombre: 'Ética', color: '#55BAA8', descripcion: 'Ser firme y honesto con los pacientes sobre su tratamiento que se le va a realizar.' },
        { nombre: 'Responsabilidad', color: '#55BAA8', descripcion: 'Cumplir en tiempo y forma con los tratamientos establecidos de la mejor manera posible.' },
        { nombre: 'Respeto', color: '#55BAA8', descripcion: 'Saber escuchar y aceptar las decisiones del paciente.' },
        { nombre: 'Honestidad', color: '#55BAA8', descripcion: 'Tenemos el compromiso con nuestros pacientes de brindar información transparente.' },
        { nombre: 'Tolerancia', color: '#55BAA8', descripcion: 'Capacidad de aceptar y respetar las diferencias de culto religión e idioma de nuestros pacientes y en el equipo trabajo.' }
      ]
        
      };
    },
    
    methods: {
      flipCard1(event) {
        this.isFlipped1 = !this.isFlipped1;
        event.stopPropagation();
      },
      flipCard2(event) {
        this.isFlipped2 = !this.isFlipped2;
        event.stopPropagation();
      },
      flipCard3(event) {
        this.isFlipped3 = !this.isFlipped3;
        event.stopPropagation();
      },
      flipCard4(event) {
        this.isFlipped4 = !this.isFlipped4;
        event.stopPropagation();
      },
      flipCard5(event) {
        this.isFlipped5 = !this.isFlipped5;
        event.stopPropagation();
      },
      flipCard6(event) {
        this.isFlipped6 = !this.isFlipped6;
        event.stopPropagation();
      },
      irADetalle(especialidad) {
        this.$router.push(especialidad.url);
      },
      conoceMas() {
        this.$router.push("/conoce-mas");
      },
      toggleMenu() {
      // Alterna la clase 'active' en el elemento 'nav'
      const nav = document.querySelector('nav');
      nav.classList.toggle('active');
    },
    }
  };
  </script>


<style scoped>
/* Estilos para el header */
header {
  background-color: white;
    border-bottom: 1px solid #e0e0e0;
    padding: 10px 20px;
    position: fixed;   /* Fija el header en la parte superior */
    top: 0;            /* Asegura que esté pegado a la parte superior de la página */
    width: 100%;       /* Asegura que el header ocupe el 100% del ancho */
    z-index: 1000;     /* Asegura que el header esté por encima de otros elementos */
}

/* Ajustes para que el contenido de la página no quede tapado por el header */
body {
  padding-top: 70px;  /* Ajusta según la altura de tu header */
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 80px;

  margin-right: 10px;
}

nav {
  display: flex;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav ul li {
  margin-left: 20px;
}

nav ul li a {
  text-decoration: none;
  font-family: 'Arial', sans-serif;
  color: black;
  font-size: 16px;
}

nav ul li a:hover {
  color: #55BAA8; /* Color de resaltado al pasar el cursor */
}

/* Estilos para el botón de menú en móviles */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  color: black;
  cursor: pointer;
  margin-left: auto;
}

/* Media query para dispositivos móviles */
@media (max-width: 768px) {
  nav {
    display: none;
    width: 100%;
    position: absolute;
    top: 60px; /* Ajusta según la altura del header */
    left: 0;
    background-color: white;
    border-top: 1px solid #e0e0e0;
  }

  nav.active {
    display: block;
  }

  nav ul {
    flex-direction: column;
    width: 100%;
  }

  nav ul li {
    margin: 10px 0;
    text-align: center;
  }

  .menu-toggle {
    display: block;
  }
}

 /* Estilos de la sección "Historia" */
 .hero {
    text-align: center;
    margin-bottom: 30px;
    
  }
  .content h2 {
  color: #A3E056;
  font-size: 2.5em;

}.content h1{
  margin-top: 120px;
  color: #27E1BC;
  font-size: 2.5em;


}.content h1{
  margin-top: 120px;

}
  .content img {
    width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-top: 20px;
   
  }

  /* Estilos generales para la sección */
  .especialidades-container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* Fondo azul para el carrusel */
  .carrusel {
    display: flex;
    overflow-x: auto;
    white-space: nowrap;
    background-color: #7fbfdf;
    padding: 10px;
    border-radius: 10px;
    width: 100%;
    justify-content: center;
    margin-top: -50px;

  }

  .imagen-contenedor {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 10px;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    transition: transform 0.3s ease;
    display: inline-block; /* Mantener las imágenes en línea */
    
  }

  /* Responsividad para pantallas más pequeñas */
@media (max-width: 768px) {
  .carrusel {
    flex-direction: column; /* Cambia la dirección del carrusel a vertical */
    align-items: center;    /* Centra los elementos en la columna */
  }

  .imagen-contenedor {
    flex: 1 1 90%; /* Ocupa casi todo el ancho de la pantalla en móviles */
  }
}

  .imagen-contenedor:hover {
    transform: scale(1.1);
  }

  .imagen {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Asegura que las imágenes se ajusten correctamente */
  }

  .nombre-overlay {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    text-align: center;
    padding: 5px 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .imagen-contenedor:hover .nombre-overlay {
    opacity: 1;
  }

  /* Estilos para carrusel horizontal personalizado */
  .carrusel::-webkit-scrollbar {
    height: 8px;
    
  }

  .carrusel::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  .carrusel::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  .carrusel::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  /* Estilos para el botón de conoce más, de los dentistas*/
  .boton-conoce-mas {
    background-color: #6BAA1C;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 35px;
  transition: background-color 0.3s ease;
   
  }
  .button-container1 {
    margin-left: 0; /* Elimina el margen negativo */
    text-align: center; /* Centra el botón */
    height: 20vh; /* O asegúrate de tener el tamaño del contenedor adecuado */
  
}
.boton-conoce-mas:hover {
  background-color: #55BAA8; /* Color al pasar el cursor */
  
}
@media (max-width: 768px) {
  .boton-conoce-mas {
    font-size: 16px; /* Ajusta el tamaño de fuente en móviles */
    padding: 8px 16px; /* Ajusta el tamaño del botón */
  }

  .card {
    max-width: 100%; /* Tarjetas al 100% en móviles */
    height: auto; /* Altura automática en móviles */
  }

  .button-container1 {
    margin-left: 0;
    text-align: center;
  }
}

  /* Estilos para las tarjetas de doctores*/
  .card {
  width: 100%;
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 16px auto;
  background-color: #fff;
  height: 950px; /* Ajusta la altura según tu diseño */
  perspective: 1000px; /* Proporciona profundidad para el efecto 3D */
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased; /* Para navegadores basados en WebKit (Chrome, Safari) */
  -moz-osx-font-smoothing: grayscale; /* Para navegadores en macOS */
  font-size: 1rem; /* Tamaño de fuente base */
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-front, .card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card-front {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-back {
  background-color: #f0f0f0;
  transform: rotateY(180deg);
  padding: 16px;
  flex-direction: column;
  justify-content: flex-start;
  text-align: flex-start;;
  

}

.card-img,.card-img2 {
  width: 100%;
  height: 500px; /* Ajusta la altura según lo necesites */

}
.card-img3{
  width: 100%;
  height: 500px; /* Ajusta la altura según lo necesites */
   margin-top: -120px
}
.card-img4{
  width: 100%;
  height: 500px; /* Ajusta la altura según lo necesites */
   margin-top: -75px
}
.card-img5{
  width: 100%;
  height: 500px; /* Ajusta la altura según lo necesites */
   margin-top: -160px
}
.card-img6{
  width: 100%;
  height: 500px; /* Ajusta la altura según lo necesites */
   margin-top: -133px
}

.small-img {
  width: 40px; /* Tamaño de la imagen pequeña */
  height: auto;
  margin-right: 8px; /* Espacio entre la imagen y el texto */
}

.text-with-images {
  display: flex;
  align-items: flex-start;
  
}

.text-with-images2, .text-with-images3, .text-with-images4, .text-with-images5
,.text-with-images6{
  display: flex;
  align-items: flex-start;
  margin: 20px 0;

}
.text-content {
  max-width: calc(100% - 48px); /* Ajusta el espacio para la imagen y el texto */
  
}
.text-content2 p, .text-content3 p, .text-content4 p, .text-content5 p, .text-content6 p{
  margin: 5px 0;

}
.card-content {
  padding: 16px;

}
.card-back-content{
  font-size: 1.15em;
}
.card-back-content h3{
  font-size: 1.16em;
  font-weight: bold;
  
}
.card-content h3 {
  margin: 0 0 8px 0;
  font-size: 1.15em;
  font-weight: bold;
}

.card-content h4 {
  margin: 0 0 8px 0;
  font-size: 1em;
  color: #666;
}

.justified-text {
  margin: 0 0 16px 0;
  color: #666;
  text-align: justify;
}
.button {
  display: flex;
  justify-content: flex-end; 
  padding: 16px;
  

}
.btn-primary1v{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin-bottom: -1px;
  
}
.btn-primary2v{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin-bottom: -10px; /* Ajusta según la distancia deseada del botón */
  
}
.btn-primary3v{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin-top: auto;
  margin-bottom: -77px; /* Ajusta según la distancia deseada del botón */
}

.btn-primary4v{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin-top: auto;
  margin-bottom: -75px; /* Ajusta según la distancia deseada del botón */
}
.btn-primary5v{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin-top: auto;
  margin-bottom: -160px; /* Ajusta según la distancia deseada del botón */
}
.btn-primary6v{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin-top: auto;
  margin-bottom: -134px; /* Ajusta según la distancia deseada del botón */

}
.btn-primary1{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin: -15px 0;
  
  
}
.btn-primary2{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin: 93px 0;
  
}
.btn-primary3{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin: 230px 0;
}
.btn-primary4{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin: 110px 0;
  
}
.btn-primary5{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin: 250px 0;
  
}
.btn-primary6{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin: 615px 0;
  
}
.btn-primary1:hover, .btn-primary2:hover, .btn-primary3:hover, .btn-primary4:hover, .btn-primary5:hover,
.btn-primary6:hover{
  background-color: #55BAA8;
}

.btn-primary1v:hover, .btn-primary2v:hover, .btn-primary3v:hover,.btn-primary4v:hover,.btn-primary5v:hover, .btn-primary6v:hover
{
  background-color: #55BAA8;
}
.button-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
}
.custom-line {
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
}
.custom-line2{
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  margin-top: 70px;
}
.custom-line3{
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  margin-top: 90px;
}
.custom-line4{
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  margin-top: 40px;
}
.custom-line5{
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  margin-top: 40px;
}
.custom-line6{
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  margin-top: 40px;
}
.doctors-gallery h2 {
  padding: 50px 0;
  text-align: center;
  font-weight: bold;
}
.doctors-gallery{
  background-color: #A3E056;
  margin-top: -25px;

/* Estilos para la Filosofía */
}
.filosofia-container {
  margin: 0 auto;
  padding: 20px;
  font-weight: bold;
  
}
.filosofia-container h2 {
  font-size: 24px;
  color: #57C5B6;
  
}
.filosofia-container p {
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
  margin: 0; /* Elimina el margen por defecto */
  
}
.texto2{
  font-size: 16px;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
}

.misvis-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
 
}
.misvis-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 45%;
  margin-bottom: 20px;

}
.misvis-item img {
  width: 80%;
  border-radius: 10px;
  margin: 50px;
}

.misvis-text, .misvis-text1 {
  padding: 20px;
  text-align: center;
  border: 0px solid #ccc;
  box-shadow:  0 5px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 16px auto;
  border-left: none; /* Quita el borde izquierdo */
 
  
}
.misvis-text:hover {
  background-color: #55BAA8;

}
.misvis-text1:hover {
  background-color: #A3E056;

  }

.misvis-text h3, .misvis-text1 h3 {
  font-size: 18px;
  color: #9da94d;
  text-align: center;
  font-weight: bold;
  
  
}

.misvis-text h3 i {
  margin-right: 10px;
  font-weight: bold;
}

.misvis-text p {
  font-size: 20x;
  color: #333;
}
.content1 img {
    width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-top: 20px;
   
}
@media (max-width: 768px) {
  .misvis-section {
    flex-direction: column; /* Cambia la dirección a columna para pantallas pequeñas */
    align-items: center; /* Alinea las cards en el centro */
  }

  .misvis-item {
    max-width: 100%; /* Asegura que las cards ocupen todo el ancho en pantallas pequeñas */
    margin-bottom: 20px;
  }

  .misvis-item img {
    width: 100%; /* Asegura que las imágenes ocupen todo el ancho de la card */
    margin: 0; /* Elimina el margen */
  }

  .misvis-text, .misvis-text1 {
    text-align: center;
    padding: 10px;
  }
}

/* Estilo del contenedor de los valores */
.valores-container {
  max-width: 600px;
  padding: 20px;
  border: 0px solid #ccc;
  box-shadow:  0 5px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* Estilos para el título y la lista de valores */
.valores-container h2 {
  color: #9da94d;
  font-family: Arial, sans-serif;
  font-size: 24px;
  text-align: center; /* Centrar el título */
  margin-bottom: 10px;
  font-weight: bold;
}

.valores-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.valores-list li {
  font-family: Arial, sans-serif;
  font-size: 18px;
  margin: 10px 0;
}

/* Estilos para el logo */
.logo-felizdent {
  width: 100%;  /* Ajustar al ancho del contenedor */
  max-height: 400px;
  object-fit: cover;
  margin-top: 90px;
  transition: all 0.3s ease;
  margin-left: 80px; /* Espacio entre los valores y el logo*/
}


/* Contenedor principal para manejar flexbox */
.contenedor-principal {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
}

/* Estilos responsivos para móviles */
@media (max-width: 768px) {
  .contenedor-principal {
    flex-direction: column; /* Coloca en columna para móviles */
    align-items: center; /* Centra los elementos en móviles */
  }

  .valores-container,
  .logo-container {
    width: 100%; /* Ocupar todo el ancho del contenedor */
    text-align: center; /* Centrar el contenido en móviles */
    margin-bottom: 20px;
  }

  .logo-felizdent {
    max-width: 80%; /* Ajusta la imagen para que no sea demasiado grande en móviles */
    height: auto; /* Asegura que la imagen mantenga sus proporciones */
    margin: 0 auto; /* Centra la imagen */
  }
}


/* Estilos para el footer */
footer {
  background-color: #e8f5e9; /* Color suave */
  padding: 40px 20px;
  color: #333;
  margin-top: 80px;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px; /* Añadido para separar las secciones */
  
}

.footer-logo img {
  height: 80px;
}

.footer-section {
  flex-basis: 200px;
  margin: 20px 0;
}

.footer-section h4 {
  font-size: 18px;
  margin-bottom: 10px;
  color: #00bfa5; /* Verde similar al logo */
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  text-decoration: none;
  color: #333;
}

.footer-section ul li a:hover {
  color: #00bfa5; /* Color de resaltado al pasar el cursor */
}

.footer-bottom {
  text-align: center;
  padding: 10px 0;
  border-top: 1px solid #ccc;
  margin-top: 20px;
}

.footer-bottom p {
  font-size: 14px;
}

/* Media query para dispositivos móviles */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    
  }
  .card {
    width: 100%;
    font-size: 1rem; /* Ajusta el tamaño de la fuente para pantallas pequeñas */
  }

  .footer-section {
    flex-basis: 100%;
    margin: 10px 0;
  }

  .footer-logo img {
    height: 60px; /* Ajustar según el tamaño que prefieras */
  }
  .card-text {
    font-size: 1em; /* Reduce el tamaño de fuente para pantallas muy pequeñas */
  }
}

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