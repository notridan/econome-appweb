import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layout/Main.vue";
import { isAuthenticated } from "../stores/useAuthStore";
import Dashboard from "../econome/views/dashboard/Main.vue";
import Login from "../econome/views/login/Main.vue";
import Register from "../econome/views/register/Main.vue";
import ErrorPage from "../views/error-page/Main.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      {
        path: "/",
        name: "dashboard",
        component: Dashboard,
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
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requiresUnauth: true
    }
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

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    // Se a rota requer autenticação e o usuário não está autenticado, redirecione para a página de login
    next('/login');
  } else if (to.meta.requiresUnauth && isAuthenticated()) {
    // Se a rota requer que o usuário não esteja autenticado (como a página de login) e o usuário está autenticado, redirecione para a página inicial ou dashboard
    next('/dashboard');
  } else {
    // Caso contrário, continue normalmente
    next();
  }
});

export default router;
