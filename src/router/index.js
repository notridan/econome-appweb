import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layout/Main.vue";
import { useAuthStore } from "../stores/useAuthStore";
import DashboardOverview1 from "../views/dashboard-overview-1/Main.vue";
import Login from "../views/login/Main.vue";
import Register from "../views/register/Main.vue";
import ErrorPage from "../views/error-page/Main.vue";

const isAuthenticated = () => {
  return localStorage.getItem('token');
}

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "dashboard-overview-1",
        component: DashboardOverview1,
        meta: { requiresAuth: true },
      },
      {
        path: "notification",
        name: "notification",
        component: Notification,
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

// Verificar a autenticação antes de cada rota ser acessada
router.beforeEach(async (to, from, next) => {
  const userAuth = useAuthStore();
  const isAuth = isAuthenticated(); // Verifique se o usuário está autenticado
  
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuth) {
      // Se a rota requer autenticação e o usuário não está autenticado, redirecione para a página de login
      next({ path: "/login" });
  } else {
      // Caso contrário, continue com a navegação
      next();
  }
});

export default router;
