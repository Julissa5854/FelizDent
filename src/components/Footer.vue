<template>
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
            <li><router-link to="/servicios">Servicios</router-link></li>
            <li><router-link to="/consultorios">Consultorios</router-link></li>
            <li><router-link to="/dentistas">Dentistas</router-link></li>
            <li><router-link to="/comentarios">Comentarios</router-link></li>
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
  export default {
    name: 'Footer'
  }
  </script>
  
  <style scoped>
  
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
    color: #00bfa5; /*logo */
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
  
  /* Footer para moviles */
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
    }
  
    .footer-section {
      flex-basis: 100%;
      margin: 10px 0;
    }
  
    .footer-logo img {
      height: 60px; /* Ajusta el tamaño */
    }
  }
  </style>
  