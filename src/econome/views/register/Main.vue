<template>
  <div class="container">
    <div
      class="w-full min-h-screen p-5 md:p-20 flex items-center justify-center"
    >
      <div class="w-96 intro-y">\
        <form @submit.prevent="handleCreateAccount" aria-autocomplete="none">
        <div
          class="text-white dark:text-slate-300 text-2xl font-medium text-center mt-14"
        >
          Crie sua conta agora!
        </div>
        <div
          class="box px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60"
        >
          <input
            type="text"
            class="form-control py-3 px-4 block"
            placeholder="Nome"
            v-model="userName"
          />
          <input
            type="email"
            class="form-control py-3 px-4 block mt-4"
            placeholder="E-mail"
            v-model="userEmail"
          />
          <input
            type="password"
            class="form-control py-3 block px-4 mt-4"
            placeholder="Senha"
            v-model="userPassword"
          />
          
          <input
            type="password"
            class="form-control py-3 px-4 block mt-4"
            placeholder="Confirmação da Senha"
            v-model="userPasswordConfirmation"
          />
          <div class="flex items-center text-slate-500 mt-4 text-xs sm:text-sm">
            <input
              id="remember-me"
              type="checkbox"
              class="form-check-input border mr-2"
              v-model="agree"
            />
            <label class="cursor-pointer select-none" for="remember-me"
              >Eu concordo com a</label
            >
            <a class="text-primary dark:text-slate-200 ml-1" href=""
              >Política de Privacidade</a
            >.
          </div>
          <div class="mt-5 xl:mt-8 text-center xl:text-left">
            <button
                class="btn btn-primary w-full xl:mr-3 disable"
                v-bind:disabled="!agree"
                :class="{ 'opacity-50 pointer-events-none': !agree }"
              >
                Cadastrar
              </button>
              <button
                class="btn btn-outline-secondary w-full mt-3"
                @click.prevent="signIn"
              >
                <label class="cursor-pointer select-none" for="signIn"
                  >Já possuo uma</label
                >
                <a class="text-primary dark:text-slate-200 ml-1">Conta</a>.
              </button>
          </div>
        </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import router from "../../../router/index";
import { useAuthStore } from "../../../stores/useAuthStore";

const authStore = useAuthStore();
let agree = ref(false);

const userName = ref("");
const userEmail = ref("");
const userPassword = ref("");
const userPasswordConfirmation = ref("");

const handleCreateAccount = async () => {
  if (agree.value) {
    await authStore.onCreateAccount(userName.value, userEmail.value, userPassword.value, userPasswordConfirmation.value);
  }
};

const signIn = () => {
  router.push({ path: "/login" });
};
</script>
