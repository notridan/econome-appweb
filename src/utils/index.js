import faker from "./faker";
import helper from "./helper";
import lodash from "./lodash";
import colors from "./colors";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import settings from './settings';

const toastOptions = {
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
};

export default (app) => {
  app.use(faker);
  app.use(helper);
  app.use(lodash);
  app.use(colors);
  app.use(Toast, toastOptions);
  app.use(LoadingPlugin);
  app.use(settings);
};
