<template>
  <div class="container">
    <h1>Dentistas</h1> <!-- El título -->
    </div>
    
  <v-container>
    <v-row>
    <!-- Tarjeta 1 -->
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
    
    <!-- Tarjeta 7 -->
    <v-col cols="20" md="4">
  <div class="card">
      <div class="card-inner" :class="{ flipped: isFlipped7 }">
        <!-- Cara delantera -->
        <div class="card-front">
          <img src="@/assets/Imagenes/dentistCris.jpg" alt="Imagen del Dentista" class="card-img7">
          <div class="card-content">
            <h3>Dr. Jesús Cristopher Muñoz Andrade</h3>
            <h4>Estomatología y Salud </h4>
            <hr class="custom-line7"> <!-- Línea horizontal -->
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist8.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. En estomatología y salud por el “Centro de Investigación y Estudios Superiores” 2003 a 2007. 
                </p>
              </div>
            </div>
            <div class="button">
              <button class="btn-primary7v" @click.stop="flipCard7">Ver más</button>
            </div>
          </div>
        </div>

        <!-- Cara trasera -->
        <div class="card-back">
          <div class="card-back-content">
            <h3>Diplomados</h3>
            <div class="text-with-images7">
              <img src="@/assets/Imagenes/dentist17.jpg" alt="Logo" class="small-img">
              <div class="text-content3">
                <p class="justified-text">
                  Trabajo en el “centro de Odontología Integral Especializada y Estética Dental”
                   obteniendo experiencia en implantes dentales, De abril del 2007 a febrero 2008. 

                </p>
              </div>
            </div>
            <div class="text-with-images7">
              <img src="@/assets/Imagenes/dentist18.jpg" alt="Logo" class="small-img">
              <div class="text-content7">
                <p class="justified-text">
                  Practica de cirugía Bucal y Maxilofacial en el “Hospital de Traumatología y Ortopedia y Hospital
                   Regional # 36 ambos del IMSS”, De febrero del 2010 a marzo 2014.

                </p>
              </div>
            </div>
            <div class="text-with-images7">
              <img src="@/assets/Imagenes/dentist19.jpg" alt="Logo" class="small-img">
              <div class="text-content7">
                <p class="justified-text">
                  Docente del área de cirugía bucal, exodoncia e implantología dental, Fisiología, anestesia dental y
                   anatomía en la “Universidad México Americana del Golfo” De septiembre de 2014 a agosto de 2016.

                </p>
              </div>
            </div>

            <div class="button-container">
              <button class="btn-primary7" @click.stop="flipCard7">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </v-col>

    <!-- Tarjeta 8 -->
    <v-col cols="20" md="4">
  <div class="card">
      <div class="card-inner" :class="{ flipped: isFlipped8 }">
        <!-- Cara delantera -->
        <div class="card-front">
          <img src="@/assets/Imagenes/dentistEli.jpg" alt="Imagen del Dentista" class="card-img8">
          <div class="card-content">
            <h3>Dr. Elio Federico Monterrosas Fuentes </h3>
            <h4>Estomatología y Especialista en Ortopedia </h4>
            <hr class="custom-line8"> <!-- Línea horizontal -->
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist2.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. En Estomatología por la “Benemérita Universidad Autónoma de Puebla” 1998 a 2003.
                </p>
              </div>
            </div>
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist21.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Especialidad en Ortopedia por la “Universidad Nacional Autónoma de México (UNAM)” 2009 a 2011.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </v-col>
  
  <!-- Tarjeta 9 -->
  <v-col cols="20" md="4">
  <div class="card">
      <div class="card-inner" :class="{ flipped: isFlipped9 }">
        <!-- Cara delantera -->
        <div class="card-front">
          <img src="@/assets/Imagenes/dentistAn.jpg" alt="Imagen del Dentista" class="card-img9">
          <div class="card-content">
            <h3>Dr. José Ángel Pérez Benítez </h3>
            <h4>Estomatología y Especialista en Ortodoncia y Endodoncia </h4>
            <hr class="custom-line9"> <!-- Línea horizontal -->
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist19.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. En Estomatología por la “Universidad Mexicoamericana del Golfo, Puebla” 2011 a 2015.
                </p>
              </div>
            </div>
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist12.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Especialidad en endodoncia por “Centro Mexicano en estomatologia”2016 a 2018”.
                </p>
              </div>
            </div>
            <div class="button">
              <button class="btn-primary9v" @click.stop="flipCard9">Ver más</button>
            </div>
          </div>
        </div>

        <!-- Cara trasera -->
        <div class="card-back">
          <div class="card-back-content">
            <h3>Nivel académico</h3>
            <div class="text-with-images9">
              <img src="@/assets/Imagenes/dentist19.jpg" alt="Logo" class="small-img">
              <div class="text-content9">
                <p class="justified-text">
                  Lic. En Estomatología por la “Universidad Mexicoamericana del Golfo, Puebla” 2011 a 2015.

                </p>
              </div>
            </div>
            <div class="text-with-images9">
              <img src="@/assets/Imagenes/dentist22.jpg" alt="Logo" class="small-img">
              <div class="text-content9">
                <p class="justified-text">
                  Especialidad en Ortodoncia por “Centro Universitario Interamericano del Pacífico
                   (CEUNI), Plantel Golfo Centro, Heroica Puebla de Zaragoza, PUE” 2019 a 2021. 

                </p>
              </div>
            </div>
            <div class="text-with-images9">
              <img src="@/assets/Imagenes/dentist12.jpg" alt="Logo" class="small-img">
              <div class="text-content9">
                <p class="justified-text">
                  Especialidad en endodoncia por “Centro Mexicano en estomatologia”2016 a 2018”.

                </p>
            </div>
          </div>

            <div class="button-container">
              <button class="btn-primary9" @click.stop="flipCard9">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </v-col>

    <!-- Tarjeta 10 -->
    <v-col cols="20" md="4">
  <div class="card">
      <div class="card-inner" :class="{ flipped: isFlipped10 }">
        <!-- Cara delantera -->
        <div class="card-front">
          <img src="@/assets/Imagenes/dentistVia.jpg" alt="Imagen del Dentista" class="card-img10">
          <div class="card-content">
            <h3>Dra. Vianey Joaquina Mateo Barrales </h3>
            <h4>Estomatología y Salud</h4>
            <hr class="custom-line10"> <!-- Línea horizontal -->
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist8.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. En estomatología y salud por el “Centro de Investigación y Estudios Superiores”.
                </p>
              </div>
            </div>
            <div class="button">
              <button class="btn-primary10v" @click.stop="flipCard10">Ver más</button>
            </div>
          </div>
        </div>

        <!-- Cara trasera -->
        <div class="card-back">
          <div class="card-back-content">
            <h3>Experiencia</h3>
            <div class="text-with-images10">
              <img src="@/assets/Imagenes/dentist23.jpg" alt="Logo" class="small-img">
              <div class="text-content10">
                <p class="justified-text">
                  Trabajo en” Dental Dorada” como auxiliar en: Endodoncia, Ortodoncia, Rehabilitación,
                   Cirugía bucal Y conocimientos en área de recepción, 2023 a 2024. 

                </p>
              </div>
            </div>
            <div class="text-with-images10">
              <img src="@/assets/Imagenes/dentist23.jpg" alt="Logo" class="small-img">
              <div class="text-content10">
                <p class="justified-text">
                  Servicio social en “Clínica Particular Dental Dorada” como auxiliar dental en diferentes áreas
                   Odontológicas, Limpieza y desinfección de instrumental y equipamiento utilizado, 2022 a 2023. 

                </p>
              </div>
            </div>

            <div class="button-container">
              <button class="btn-primary10" @click.stop="flipCard10">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </v-col>

     <!-- Tarjeta 11 -->
     <v-col cols="20" md="4">
  <div class="card">
      <div class="card-inner" :class="{ flipped: isFlipped11 }">
        <!-- Cara delantera -->
        <div class="card-front">
          <img src="@/assets/Imagenes/dentistZule.jpg" alt="Imagen del Dentista" class="card-img11">
          <div class="card-content">
            <h3>Dra. Zuleyma Michelle Barranco Valencia </h3>
            <h4>Cirujano Dentista </h4>
            <hr class="custom-line11"> <!-- Línea horizontal -->
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist24.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. En Cirujano Dentista por la “Universidad del Valle de Puebla” 2018 a 2022. 
                </p>
              </div>
            </div>

            <div class="button">
              <button class="btn-primary11v" @click.stop="flipCard11">Ver más</button>
            </div>
          </div>
        </div>

        <!-- Cara trasera -->
        <div class="card-back">
          <div class="card-back-content">
            <h3>Experiencia</h3>
            <div class="text-with-images11">
              <img src="@/assets/Imagenes/dentist25.jpg" alt="Logo" class="small-img">
              <div class="text-content11">
                <p class="justified-text">
                   Certificado BLS por el "Hospital Cruz Roja Mexicana, en la ciudad de Puebla"2021.

                </p>
              </div>
            </div>
              <div class="text-content11">
                <p class="justified-text">
                  •"Curso de infecciones bucales y lesiones de la mucosa oral"2024.
                </p>
              </div>
            
              <div class="text-content11">
                <p class="justified-text">
                  •"Curso en terapia neural y ozonoterapia en odontología"2023.
                </p>
              </div>
            
              <div class="text-content11">
                <p class="justified-text">
                  •"Curso sectorial de resistencia antimicrobiana para el primer nivel de atención"2023.
                </p>
          </div>

            <div class="button-container">
              <button class="btn-primary11" @click.stop="flipCard11">Volver</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </v-col>

    <!-- Tarjeta 12 -->
    <v-col cols="20" md="4">
  <div class="card">
      <div class="card-inner" :class="{ flipped: isFlipped12 }">
        <!-- Cara delantera -->
        <div class="card-front">
          <img src="@/assets/Imagenes/dentistMG.jpg" alt="Imagen del Dentista" class="card-img12">
          <div class="card-content">
            <h3>Dra. María Guadalupe Pérez Ponce</h3>
            <h4>Odontóloga General </h4>
            <hr class="custom-line12"> <!-- Línea horizontal -->
            <div class="text-with-images">
              <img src="@/assets/Imagenes/dentist8.jpg" alt="Logo" class="small-img">
              <div class="text-content">
                <p class="justified-text">
                  Lic. En Odontología “Centro de Estudios Superiores de Tepeaca” 2018 a 2023. 
                </p>
              </div>
            </div>
            <div class="button">
              <button class="btn-primary12v" @click.stop="flipCard12">Ver más</button>
            </div>
          </div>
        </div>

        <!-- Cara trasera -->
        <div class="card-back">
          <div class="card-back-content">
            <h3>Experiencia</h3>
            <div class="text-with-images12">
              <img src="@/assets/Imagenes/dentist26.jpg" alt="Logo" class="small-img">
              <div class="text-content12">
                <p class="justified-text">
                  OPPSS realizado en "Centro de Estudios Superiores de Tepeaca."

                </p>
              </div>
            </div>

              <div class="text-content12">
                <p class="justified-text">
                  •"Uso de aparatología rayos x". 

                </p>
              </div>
              <div class="text-content12">
                <p class="justified-text">
                  •"Profilaxis, educación de higiene oral. "

                </p>
              </div>
              <div class="text-content12">
                <p class="justified-text">
                  •"Restauración de estéticas". 

                </p>
              </div>
            </div>

            <div class="button-container">
              <button class="btn-primary12" @click.stop="flipCard12">Volver</button>
            </div>
          </div>
        </div>
      </div>
      </v-col>
    </v-row>
    </v-container>

      
</template>

<script>
export default {
  name: 'DentistCard',
  data() {
    return {
      isFlipped1: false,
      isFlipped2: false,
      isFlipped3: false,
      isFlipped4: false,
      isFlipped5: false,
      isFlipped6: false,
      isFlipped7: false,
      isFlipped8: false,
      isFlipped9: false,
      isFlipped10: false,
      isFlipped11: false,
      isFlipped12: false,
    };
  },
  methods: {
    flipCard1(event) {
      this.isFlipped1 = !this.isFlipped1;
      event.stopPropagation(); // Detiene la propagación del clic para evitar que el contenedor también ejecute el flip
    },
    flipCard2(event) {
      this.isFlipped2 = !this.isFlipped2;
      event.stopPropagation(); // Detiene la propagación del clic para evitar que el contenedor también ejecute el flip
    },
    flipCard3(event) {
      this.isFlipped3 = !this.isFlipped3;
      event.stopPropagation(); // Detiene la propagación del clic para evitar que el contenedor también ejecute el flip
    },
    flipCard4(event) {
      this.isFlipped4 = !this.isFlipped4;
      event.stopPropagation(); // Detiene la propagación del clic para evitar que el contenedor también ejecute el flip
  },
  flipCard5(event) {
      this.isFlipped5 = !this.isFlipped5;
      event.stopPropagation(); // Detiene la propagación del clic para evitar que el contenedor también ejecute el flip
  },
  flipCard6(event) {
      this.isFlipped6 = !this.isFlipped6;
      event.stopPropagation(); // Detiene la propagación del clic para evitar que el contenedor también ejecute el flip
  },
  flipCard7(event) {
      this.isFlipped7 = !this.isFlipped7;
      event.stopPropagation(); // Detiene la propagación del clic para evitar que el contenedor también ejecute el flip
  },
  flipCard8(event) {
      this.isFlipped8 = !this.isFlipped8;
      event.stopPropagation(); // Detiene la propagación del clic para evitar que el contenedor también ejecute el flip
  },
  flipCard9(event) {
      this.isFlipped9 = !this.isFlipped9;
      event.stopPropagation(); // Detiene la propagación del clic para evitar que el contenedor también ejecute el flip
  },
  flipCard10(event) {
      this.isFlipped10 = !this.isFlipped10;
      event.stopPropagation(); // Detiene la propagación del clic para evitar que el contenedor también ejecute el flip
  },
  flipCard11(event) {
      this.isFlipped11 = !this.isFlipped11;
      event.stopPropagation(); // Detiene la propagación del clic para evitar que el contenedor también ejecute el flip
  },
  flipCard12(event) {
      this.isFlipped12 = !this.isFlipped12;
      event.stopPropagation(); // Detiene la propagación del clic para evitar que el contenedor también ejecute el flip
  },
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
.card-img7{
  width: 100%;
  height: 500px; /* Ajusta la altura según lo necesites */
   margin-top: -133px
}
.card-img8{
  width: 100%;
  height: 500px; /* Ajusta la altura según lo necesites */
   margin-top: -50px
}
.card-img9{
  width: 100%;
  height: 550px; /* Ajusta la altura según lo necesites */
   margin-top: -100px
}
.card-img10{
  width: 100%;
  height: 500px; /* Ajusta la altura según lo necesites */
   margin-top: -180px
}
.card-img11{
  width: 100%;
  height: 500px; /* Ajusta la altura según lo necesites */
   margin-top: -180px
}
.card-img12{
  width: 100%;
  height: 500px; /* Ajusta la altura según lo necesites */
   margin-top: -180px
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
,.text-with-images6, .text-with-images7, .text-with-images8, .text-with-images9
,.text-with-images10, .text-with-images11, .text-with-images12{
  display: flex;
  align-items: flex-start;
  margin: 20px 0;

}
.text-content {
  max-width: calc(100% - 48px); /* Ajusta el espacio para la imagen y el texto */
  
}
.text-content2 p, .text-content3 p, .text-content4 p, .text-content5 p, .text-content6 p, .text-content7 p, .text-content8 p
,.text-content9 p, .text-content10 p, .text-content11 p, .text-content12 p{
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
.btn-primary7v{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin-top: auto;
  margin-bottom: -143px; /* Ajusta según la distancia deseada del botón */

}
.btn-primary9v{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin-top: auto;
  margin-bottom: -55px; /* Ajusta según la distancia deseada del botón */

}
.btn-primary10v{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin-top: auto;
  margin-bottom: -175px; /* Ajusta según la distancia deseada del botón */

}
.btn-primary11v{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin-top: auto;
  margin-bottom: -175px; /* Ajusta según la distancia deseada del botón */

}
.btn-primary12v{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin-top: auto;
  margin-bottom: -175px; /* Ajusta según la distancia deseada del botón */

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
.btn-primary7{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin: 50px 0;
  

}
.btn-primary9{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin: 215px 0;
  

}
.btn-primary10{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin: 300px 0;
}
.btn-primary11{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin: 395px 0;
}
.btn-primary12{
  padding: 12px 26px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  background-color: #9da94d;
  color: #fff;
  margin: 565px 0;
}

.btn-primary1:hover, .btn-primary2:hover, .btn-primary3:hover, .btn-primary4:hover, .btn-primary5:hover
, .btn-primary6:hover, .btn-primary7:hover, .btn-primary9:hover, .btn-primary10:hover, .btn-primary11:hover, .btn-primary12:hover {
  background-color: #55BAA8;
}

.btn-primary1v:hover, .btn-primary2v:hover, .btn-primary3v:hover,.btn-primary4v:hover,.btn-primary5v:hover
,.btn-primary6v:hover,.btn-primary7v:hover,.btn-primary9v:hover,.btn-primary10v:hover,.btn-primary11v:hover,.btn-primary12v:hover {
  background-color: #55BAA8;
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
.custom-line7{
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  margin-top: 40px;
}
.custom-line8{
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  margin-top: 20px;
}
.custom-line9{
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  margin-top: 45px;
}
.custom-line10{
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  margin-top: 45px;
}
.custom-line11{
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  margin-top: 45px;
}
.custom-line12{
  border: none;
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
  margin-top: 45px;
}
.button-container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  
}

</style>