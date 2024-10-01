<template>
  <header>
    <div class="navbar">
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/ImagenesP/logo2.jpg" alt="Logo Felizdent" />
        </router-link>
      </div>
      <button class="menu-toggle" aria-label="Toggle menu" @click="toggleMenu"> 
        ☰
      </button>
      <nav :class="{ active: menuActive }">
        <ul>
          <li @click="closeMenu"><router-link to="/servicios">Servicios</router-link></li>
          <li @click="closeMenu"><router-link to="/consultorios">Consultorios</router-link></li>
          <li @click="closeMenu"><router-link to="/dentistas">Dentistas</router-link></li>
          <li @click="closeMenu"><router-link to="/comentarios">Comentarios</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      menuActive: false, // Estado del menú
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive; // Alternar el estado del menú
    },
    closeMenu() {
      this.menuActive = false; // Cierra el menú
    },
  },
}
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

nav.active {
  display: block;
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

/* Header , para moviles */
@media (max-width: 768px) {
  nav {
    display: none; /* El menú no se muestra */
    width: 100%;
    position: absolute;
    top: 60px; /* Ajusta la altura del header */
    left: 0;
    background-color: white;
    border-top: 1px solid #e0e0e0;
  }

  nav.active {
    display: block; /* Muestra el menú si está activo */
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
    display: block; /* Muestra el botón de menú en móviles */
  }
}
</style>
