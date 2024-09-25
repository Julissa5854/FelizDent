<template>
  <div class="container">
    <h1>Dentistas</h1>
    <v-container>
      <v-row>
        <Card
          v-for="(dentist, index) in dentists"
          :key="index"
          :frontImage="dentist.frontImage"
          :name="dentist.name"
          :specialty="dentist.specialty"
          :frontDetails="dentist.frontDetails"
          :backTitle="dentist.backTitle"
          :backDetails="dentist.backDetails"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  components: {
    Card
  },
  data() {
    return {
      dentists: [
        {
          frontImage: require('@/assets/Imagenes/dentist.jpg'),
          name: 'Dra. Blanca Rodríguez Cortez',
          specialty: 'Cirujano Dentista',
          frontDetails: [
            { image: require('@/assets/Imagenes/dentist2.jpg'), text: 'Lic. En Cirujano Dentista Facultad de Estomatología por la “Benemérita Universidad Autónoma de Puebla” 1995.' },
            { image: require('@/assets/Imagenes/dentist3.jpg'), text: 'Especialidad en Cirugía Maxilofacial en Hospital universitario de Puebla por la “Benemérita Universidad Autónoma de Puebla” 1999.' }
          ],
          backTitle: 'Nivel académico',
          backDetails: [
            { image: require('@/assets/Imagenes/dentist3.jpg'), text: 'Lic. En Cirujano Dentista Facultad de Estomatología por la “Benemérita Universidad Autónoma de Puebla” 1995.' },
            { image: require('@/assets/Imagenes/dentist4.jpg'), text: 'Maestría en Ciencias de la Educación por el "Instituto de Estudios Universitarios", 2020.' },
            { image: require('@/assets/Imagenes/dentist5.jpg'), text: 'Doctorado en Ciencias de la Educación por el "Centro de Investigación Científica, Académica y de Postgrado", 2024.' },
            { image: require('@/assets/Imagenes/dentist6.jpg'), text: 'Doctorado en Salud Pública por la "Universidad Contemporánea de las Américas", Acta de examen en proceso de titulación.' }
          ]
        },
        {
          frontImage: require('@/assets/Imagenes/dentistME.jpg'),
          name: 'Dra. María Elena Rodríguez Álvarez',
          specialty: 'Estomatología Pediátrica',
          frontDetails: [
            { image: require('@/assets/Imagenes/dentist2.jpg'), text: 'Lic. En Estomatología por la “Benemérita Universidad Autónoma de Puebla” 1998 a 2002.' },
            { image: require('@/assets/Imagenes/dentist7.jpg'), text: 'Especialidad en Estomatología Pediátrica “Instituto Nacional de Pediatría (INP) México D.F” 2008 a 2010.' }
          ],
          backTitle: 'Experiencia',
          backDetails: [
            { image: require('@/assets/Imagenes/dentist8.jpg'), text: 'Agosto 2021- Junio 2022 "Profesora en centro de investigación y estudios superiores en estomatología y salud S.C. CESES". (Modalidad en línea).' },
            { image: require('@/assets/Imagenes/dentist9.jpg'), text: 'Junio 2015-diciembre 2019 "Gestora de seguro popular • Operativo • Régimen Estatal de Protección Social en Salud".(seguro popular)' },
            { image: require('@/assets/Imagenes/dentist3.jpg'), text: 'Enero 2011-Junio 2014 (Estomatóloga pediatra • Clínico • Hospital Universitario de Puebla).' },
            { image: require('@/assets/Imagenes/dentist10.jpg'), text: '2010-a la fecha "Estomatóloga Pediatra • Clínico • Risu clínica dental".' }
          ]
        },
        {
          frontImage: require('@/assets/Imagenes/dentistisabel.jpg'),
          name: 'Dra. Isabel Chávez',
          specialty: 'Estomatología Pediátrica',
          frontDetails: [
            { image: require('@/assets/Imagenes/dentist2.jpg'), text: 'Lic. En Estomatología por la “Benemérita Universidad Autónoma de Puebla” 2002 a 2006.' },
            { image: require('@/assets/Imagenes/dentist11.jpg'), text: 'Especialidad en Estomatología Pediátrica “Hospital para el Niño Poblano” 2009 a 2011.' }
          ],
          backTitle: 'Diplomados',
          backDetails: [
            { image: require('@/assets/Imagenes/dentist3.jpg'), text: 'Diplomado en Investigación Clínica "Benemérita Universidad Autónoma de Puebla" 2009- 2010 (240 hrs).' },
            { image: require('@/assets/Imagenes/dentist2.jpg'), text: 'Diplomado de Ortopedia Maxilar con Aplicación Clínica En la "Benemérita Universidad Autónoma de Puebla" (campus Tehuacán) 2019- 2021.' },
            { image: require('@/assets/Imagenes/dentist3.jpg'), text: 'Diplomado de Actualización Ortopedia y Odontopediatría "Desarrollo Especializado con Nuevas Técnicas de Actualizaciòn" 2021-2022.' }
          ]
        },
        {
          frontImage: require('@/assets/Imagenes/dentistY.jpg'),
          name: 'Dra. Yazmin Téllez Bautista',
          specialty: 'Estomatología y Especialista en Endodoncia.',
          frontDetails: [
            { image: require('@/assets/Imagenes/dentist2.jpg'), text: 'Lic. En Estomatología por la “Benemérita Universidad Autónoma de Puebla” 1998-2003.' },
            { image: require('@/assets/Imagenes/dentist12.jpg'), text: 'Especialidad en endodoncia por “Centro Mexicano en estomatologia”2009 a 2011”' }
          ],
          backTitle: 'Experiencia',
          backDetails: [
            { image: require('@/assets/Imagenes/dentist13.jpg'), text: 'Diplomado de actualización en Odonto–Estomatología de la medicina bucal a la rehabilitación protésica a través de la Periodoncia y la Implantología oral impartido por “Escuela Complutense” 2007.' },
            { image: require('@/assets/Imagenes/dentist2.jpg'), text: 'Diplomado de medicina interna en Estomatología en “Benemérita Universidad Autónoma de puebla” 2012-2013.' },
            { image: require('@/assets/Imagenes/dentist3.jpg'), text: 'Diplomado en Diagnóstico y Tratamientos básicos Periodontales en “Benemérita Universidad Autónoma de Puebla” abril 2015-febrero 2016..' }
          ]
        },
        {
          frontImage: require('@/assets/Imagenes/dentistBr.jpg'),
          name: 'Dra. Bricia Pascuala López López',
          specialty: 'Estomatología',
          frontDetails: [
            { image: require('@/assets/Imagenes/dentist2.jpg'), text: 'Lic. en Estomatología por la “Benemérita Universidad Autónoma de Puebla” 2008 a 2013.' }
          ],
          backTitle: 'Diplomados',
          backDetails: [
            { image: require('@/assets/Imagenes/dentist2.jpg'), text: 'Diplomado de medicina interna en Estomatología avalada por Benemérita Universidad Autónoma de Puebla” 2019-2020.' },
            { image: require('@/assets/Imagenes/dentist15.jpg'), text: 'Diplomado de Biocosmetica Dental por el “Colegio de Actualización de Tepeaca” octubre 2021-septiembre a 2022.' },
            { image: require('@/assets/Imagenes/dentist15.jpg'), text: 'Diplomado en Prostodoncia Total por “Colegio de Actualización de Tepeaca” noviembre 2022 a junio 2022.' }
          ]
        },
        {
          frontImage: require('@/assets/Imagenes/dentistCr.jpg'),
          name: 'Dra. Emma Carolina Machorro Velázquez',
          specialty: 'Estomatología',
          frontDetails: [
            { image: require('@/assets/Imagenes/dentist2.jpg'), text: 'Lic. en Estomatología por la “Benemérita Universidad Autónoma de Puebla” (campus Tehuacán) 2015 a 2020.' }
          ],
          backTitle: 'Diplomados',
          backDetails: [
            { image: require('@/assets/Imagenes/dentist16.jpg'), text: 'Diplomado de medicina interna en Estomatología por la “Benemérita Universidad Autónoma de Puebla” 2020-2021.' },
            { image: require('@/assets/Imagenes/dentist17.jpg'), text: 'Diplomado en Odontopediatría por la “Benemérita Universidad Autónoma de Puebla” 2021-2022.' },
            { image: require('@/assets/Imagenes/dentist18.jpg'), text: 'Diplomado en Ortodoncia por la “Benemérita Universidad Autónoma de Puebla” 2022-2023.' }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>

