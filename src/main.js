// src/main.js

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Asegúrate de que esto esté correcto
import 'vuetify/styles'; // Si estás usando Vuetify

const app = createApp(App);

app.use(router); // Aquí le dices a Vue que use el router

app.mount('#app');
