import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

const registro = document.getElementById('registro');
const container = document.getElementById('container');
const login = document.getElementById('login');

login.addEventListener('click', () => {
    container.classList.remove("active");
});

