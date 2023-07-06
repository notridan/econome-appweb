import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layout/Main.vue";
import { isAuthenticated } from "../stores/useAuthStore";
import Dashboard from "../econome/views/dashboard/Main.vue";
import Settings from "../econome/views/settings/Main.vue";
import Roles from "../econome/views/identity-access/roles/Main.vue";
import Permissions from "../econome/views/identity-access/permissions/Main.vue";
import Condominiums from "../econome/views/modules/condominiums/Main.vue";
import UnitsGroups from "../econome/views/modules/units_groups/Main.vue";
// import Modules from "../econome/views/identity-access/modules/Main.vue";
import Users from "../econome/views/identity-access/users/Main.vue";
import Login from "../econome/views/login/Main.vue";
import ForgotPassword from "../econome/views/forgot-password/Main.vue";
import ResetPassword from "../econome/views/reset-password/Main.vue";
import Register from "../econome/views/register/Main.vue";
import ErrorPage from "../views/error-page/Main.vue";
import { useToast } from 'vue-toastification';

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
        path: "/settings",
        name: "settings",
        component: Settings,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/identity-access/roles",
        name: "identity-access-roles",
        component: Roles,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/identity-access/permissions",
        name: "identity-access-permissions",
        component: Permissions,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/identity-access/users",
        name: "identity-access-users",
        component: Users,
        meta: {
          requiresAuth: true
        }
      },
      // {
      //   path: "/identity-access/modules",
      //   name: "identity-access-modules",
      //   component: Modules,
      //   meta: {
      //     requiresAuth: true
      //   }
      // },
      {
        path: "/condominiums",
        name: "condominiums",
        component: Condominiums,
        meta: {
          requiresAuth: true
        }
      },
      {
        path: "/units_groups",
        name: "units_groups",
        component: UnitsGroups,
        meta: {
          requiresAuth: true
        }
      }
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
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
    meta: {
      requiresUnauth: true
    }
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: ResetPassword,
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

  verifyEmail(to.query);

  if (to.meta.requiresAuth && !isAuthenticated()) {
    // Se a rota requer autenticação e o usuário não está autenticado, redirecione para a página de login
    next('/login');
  } else if (to.meta.requiresUnauth && isAuthenticated()) {
    // Se a rota requer que o usuário não esteja autenticado (como a página de login) e o usuário está autenticado, redirecione para a página inicial ou dashboard
    next('/');
  } else {
    // Caso contrário, continue normalmente
    next();
  }
});

async function verifyEmail(query){
  const toast = useToast();
  const response = query['email-verify'];
  if (response) {
    
    switch (response) {
      case 'invalid':
        toast.error('Link de verificação de email inválido.');
        break;
      case 'already_verified':
        toast.warning('O email já foi verificado.');
        break;
      case 'success':
        toast.success('Email verificado com sucesso.');
        break;
    
      default:
        break;
    }

  }
}

export default router;
