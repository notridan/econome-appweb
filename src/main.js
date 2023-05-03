import { createApp } from "vue";
import { createPinia } from "pinia";
import '@fullcalendar/core/vdom';
import App from "./App.vue";
import router from "./router";
import globalComponents from "./global-components";
import utils from "./utils";
import "./assets/css/app.css";
import { useSettingsStore } from '@/stores/useSettingsStore';


const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(router);


// app.use(LoadingOverlayPlugin);

const settingsStore = useSettingsStore();
await settingsStore.fetchSettings();

globalComponents(app);
utils(app);

app.mount("#app");