import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import "./axios";

import VueAnimXyz from "@animxyz/vue3";
import "@animxyz/core"; // Import css here if you haven't elsewhere

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
import "./assets/tailwind.css";

import "primevue/resources/primevue.min.css";
import "./assets/theme.css";

/* import font awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRightToBracket,
  faCreditCard,
  faUserPlus,
  faUpload,
  faUsers,
  faGears,
  faGlobe,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faArrowRightToBracket,
  faCreditCard,
  faUserPlus,
  faUpload,
  faUsers,
  faGears,
  faGlobe,
  faLink
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(ToastService);
app.use(VueAnimXyz);
app.use(PrimeVue);
app.use(router);

app.mount("#app");
