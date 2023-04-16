import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import "./axios"

import VueAnimXyz from '@animxyz/vue3'
import '@animxyz/core' // Import css here if you haven't elsewhere

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./assets/tailwind.css";

import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import "./assets/theme.css";

const app = createApp(App);

app.use(createPinia());
app.use(VueAnimXyz)
app.use(PrimeVue);
app.use(router);


app.mount("#app");
