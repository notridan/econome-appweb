<template>
  <div class="container">
    <div class="w-full min-h-screen p-5 md:p-20 flex items-center justify-center">
      <div class="w-96 intro-y">
        <div class="text-white dark:text-slate-300 text-5xl font-bold font-sans text-center mt-10">
          EconoMe
        </div>
        <div class="text-white dark:text-slate-300 font-medium text-center">
          Simplifique, Organize, Realize!
        </div>
        <form @submit.prevent="loginUser">
          <div
            class="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
            <input type="text" class="form-control py-3 px-4 block" placeholder="Email" autocomplete="email"
              v-model="userEmail" />
            <input type="password" class="form-control py-3 px-4 block mt-4" placeholder="Senha" autocomplete="current-password"
              v-model="userPassword" />
            <div class="text-slate-500 flex text-xs sm:text-sm mt-4">
              <div class="flex items-center mr-auto">
                <input type="checkbox" class="form-check-input border mr-2" id="remember-me"
                  v-model="userRememberLogin" />
                <label class="cursor-pointer select-none" for="remember-me">Lembrar login</label>
              </div>
              <a href="">Esqueceu a senha?</a>
            </div>
            <div class="mt-5 xl:mt-8 text-center xl:text-left">
              <button class="btn btn-primary w-full xl:mr-3">Entrar</button>
              <button @click.prevent="onCreateAccount" class="btn btn-outline-secondary w-full mt-3">
                Cadastrar conta
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from "../../../stores/useAuthStore";
import router from "../../../router/index";

const userAuth = useAuthStore();
const { onLogin } = userAuth;

const userEmail = ref('');
const userPassword = ref('');
const userRememberLogin = ref(false);

const loginUser = async () => {
  await onLogin(userEmail.value, userPassword.value);
};

const onCreateAccount = () => {
  router.push({ path: "/register" });
};
</script>
