import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from "./router/index";

// Create a new Vue application instance
const app = createApp(App);

// Install the Pinia plugin
app.use(createPinia());

// Install the router
app.use(router);

// Mount the application to the DOM
app.mount('#app');
