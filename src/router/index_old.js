import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layout/Main.vue";
import DashboardOverview1 from "../views/dashboard-overview-1/Main.vue";
import DashboardOverview2 from "../views/dashboard-overview-2/Main.vue";
import Calendar from "../views/calendar/Main.vue";
import Chat from "../views/chat/Main.vue";
import Inbox from "../views/inbox/Main.vue";
import EmailDetail from "../views/email-detail/Main.vue";
import Compose from "../views/compose/Main.vue";
import Products from "../views/products/Main.vue";
import ProductDetail from "../views/product-detail/Main.vue";
import Orders from "../views/orders/Main.vue";
import OrderDetail from "../views/order-detail/Main.vue";
import FileManager from "../views/file-manager/Main.vue";
import Profile from "../views/profile/Main.vue";
import Pricing from "../views/pricing/Main.vue";
import Invoice from "../views/invoice/Main.vue";
import Faq from "../views/faq/Main.vue";
import Timeline from "../views/timeline/Main.vue";
import CrudDataList from "../views/crud-data-list/Main.vue";
import CrudForm from "../views/crud-form/Main.vue";
import WizardLayout1 from "../views/wizard-layout-1/Main.vue";
import WizardLayout2 from "../views/wizard-layout-2/Main.vue";
import WizardLayout3 from "../views/wizard-layout-3/Main.vue";
import Login from "../views/login/Main.vue";
import Register from "../views/register/Main.vue";
import ErrorPage from "../views/error-page/Main.vue";
import RegularTable from "../views/regular-table/Main.vue";
import Tabulator from "../views/tabulator/Main.vue";
import Modal from "../views/modal/Main.vue";
import SlideOver from "../views/slide-over/Main.vue";
import Notification from "../views/notification/Main.vue";
import Tab from "../views/tab/Main.vue";
import Accordion from "../views/accordion/Main.vue";
import Button from "../views/button/Main.vue";
import Alert from "../views/alert/Main.vue";
import ProgressBar from "../views/progress-bar/Main.vue";
import Tooltip from "../views/tooltip/Main.vue";
import Dropdown from "../views/dropdown/Main.vue";
import Typography from "../views/typography/Main.vue";
import Icon from "../views/icon/Main.vue";
import LoadingIcon from "../views/loading-icon/Main.vue";
import RegularForm from "../views/regular-form/Main.vue";
import Datepicker from "../views/datepicker/Main.vue";
import TomSelect from "../views/tom-select/Main.vue";
import FileUpload from "../views/file-upload/Main.vue";
import WysiwygEditor from "../views/wysiwyg-editor/Main.vue";
import Validation from "../views/validation/Main.vue";
import Chart from "../views/chart/Main.vue";
import Slider from "../views/slider/Main.vue";
import ImageZoom from "../views/image-zoom/Main.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "dashboard-overview-1",
        component: DashboardOverview1,
      },
      {
        path: "dashboard-overview-2",
        name: "dashboard-overview-2",
        component: DashboardOverview2,
      },
      {
        path: "calendar",
        name: "calendar",
        component: Calendar,
      },
      {
        path: "chat",
        name: "chat",
        component: Chat,
      },
      {
        path: "inbox",
        name: "inbox",
        component: Inbox,
      },
      {
        path: "email-detail",
        name: "email-detail",
        component: EmailDetail,
      },
      {
        path: "compose",
        name: "compose",
        component: Compose,
      },
      {
        path: "products",
        name: "products",
        component: Products,
      },
      {
        path: "product-detail",
        name: "product-detail",
        component: ProductDetail,
      },
      {
        path: "orders",
        name: "orders",
        component: Orders,
      },
      {
        path: "order-detail",
        name: "order-detail",
        component: OrderDetail,
      },
      {
        path: "file-manager",
        name: "file-manager",
        component: FileManager,
      },
      {
        path: "profile",
        name: "profile",
        component: Profile,
      },
      {
        path: "pricing",
        name: "pricing",
        component: Pricing,
      },
      {
        path: "invoice",
        name: "invoice",
        component: Invoice,
      },
      {
        path: "faq",
        name: "faq",
        component: Faq,
      },
      {
        path: "timeline",
        name: "timeline",
        component: Timeline,
      },
      {
        path: "crud-data-list",
        name: "crud-data-list",
        component: CrudDataList,
      },
      {
        path: "crud-form",
        name: "crud-form",
        component: CrudForm,
      },
      {
        path: "wizard-layout-1",
        name: "wizard-layout-1",
        component: WizardLayout1,
      },
      {
        path: "wizard-layout-2",
        name: "wizard-layout-2",
        component: WizardLayout2,
      },
      {
        path: "wizard-layout-3",
        name: "wizard-layout-3",
        component: WizardLayout3,
      },
      {
        path: "regular-table",
        name: "regular-table",
        component: RegularTable,
      },
      {
        path: "tabulator",
        name: "tabulator",
        component: Tabulator,
      },
      {
        path: "modal",
        name: "modal",
        component: Modal,
      },
      {
        path: "slide-over",
        name: "slide-over",
        component: SlideOver,
      },
      {
        path: "notification",
        name: "notification",
        component: Notification,
      },
      {
        path: "tab",
        name: "tab",
        component: Tab,
      },
      {
        path: "accordion",
        name: "accordion",
        component: Accordion,
      },
      {
        path: "button",
        name: "button",
        component: Button,
      },
      {
        path: "alert",
        name: "alert",
        component: Alert,
      },
      {
        path: "progress-bar",
        name: "progress-bar",
        component: ProgressBar,
      },
      {
        path: "tooltip",
        name: "tooltip",
        component: Tooltip,
      },
      {
        path: "dropdown",
        name: "dropdown",
        component: Dropdown,
      },
      {
        path: "typography",
        name: "typography",
        component: Typography,
      },
      {
        path: "icon",
        name: "icon",
        component: Icon,
      },
      {
        path: "loading-icon",
        name: "loading-icon",
        component: LoadingIcon,
      },
      {
        path: "regular-form",
        name: "regular-form",
        component: RegularForm,
      },
      {
        path: "datepicker",
        name: "datepicker",
        component: Datepicker,
      },
      {
        path: "tom-select",
        name: "tom-select",
        component: TomSelect,
      },
      {
        path: "file-upload",
        name: "file-upload",
        component: FileUpload,
      },
      {
        path: "wysiwyg-editor",
        name: "wysiwyg-editor",
        component: WysiwygEditor,
      },
      {
        path: "validation",
        name: "validation",
        component: Validation,
      },
      {
        path: "chart",
        name: "chart",
        component: Chart,
      },
      {
        path: "slider",
        name: "slider",
        component: Slider,
      },
      {
        path: "image-zoom",
        name: "image-zoom",
        component: ImageZoom,
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
