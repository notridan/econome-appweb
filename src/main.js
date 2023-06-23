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


const settingsStore = useSettingsStore();

settingsStore.fetchSettings().then(() => {
    globalComponents(app);
    utils(app);

    app.mount("#app");
});

// await settingsStore.fetchSettings();

