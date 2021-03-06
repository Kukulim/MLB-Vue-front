import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/store";
import axios from "axios";
import VueAxios from "vue-axios";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
