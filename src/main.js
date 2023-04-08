import { createApp } from "vue";
import { createPinia } from "pinia";
import '@fullcalendar/core/vdom';
import App from "./App.vue";
import router from "./router";
import globalComponents from "./global-components";
import utils from "./utils";
import "./assets/css/app.css";

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router);

globalComponents(app);
utils(app);

app.mount("#app");