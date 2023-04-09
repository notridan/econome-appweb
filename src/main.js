import { createApp } from "vue";
import { createPinia } from "pinia";
import '@fullcalendar/core/vdom';
import App from "./App.vue";
import router from "./router";
import globalComponents from "./global-components";
import utils from "./utils";
import "./assets/css/app.css";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router);
app.use(Toast, {
    // Você pode personalizar as opções globais aqui, se desejar
    position: 'top-right',
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false,
  });

globalComponents(app);
utils(app);

app.mount("#app");