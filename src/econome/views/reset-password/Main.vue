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
        <form @submit.prevent="resetPassword">
          <div
            class="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
            
            <div class="mb-5">
              <h1 class="font-medium dark:text-slate-300 text-xl">Redefinição de Senha</h1>
              <p class="text-neutral-400">Redefina sua senha para acessar a plataforma.</p>
            </div>
            
            
            <input type="email" class="form-control py-3 px-4 block" placeholder="Email" autocomplete="email"
              v-model="userEmail" />

            <input type="text" class="form-control py-3 px-4 block mt-4" placeholder="Nova Senha" autocomplete="new-password"
              v-model="userPassword" />

            <input type="text" class="form-control py-3 px-4 block mt-4" placeholder="Confirmar Senha"
              v-model="userPasswordConfirmation" />
            
            <div class="mt-5 xl:mt-8 text-center xl:text-left">
              <button class="btn btn-primary w-full xl:mr-3">Atualizar Senha</button>
              <button @click.prevent="onLogin" class="btn btn-outline-secondary w-full mt-3">
                Cancelar
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
import { useRoute } from 'vue-router';
import router from "../../../router/index";

const userAuth = useAuthStore();
const route = useRoute();
const token = route.query.token;
const { onResetPassword } = userAuth;

const userEmail = ref('');
const userPassword = ref('');
const userPasswordConfirmation = ref('');

const resetPassword = async () => {
  await onResetPassword(userEmail.value, userPassword.value, userPasswordConfirmation.value, token);
};

const onLogin = () => {
  router.push({ path: "/login" });
};
</script>
