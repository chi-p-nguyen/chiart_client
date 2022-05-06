import { createApp } from 'vue';
import App from './App.vue';
import router from "./router/index";
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/fluent-light/theme.css'
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'

const app = createApp(App);
app.use(router);
app.use(PrimeVue);
app.mount('#app');