import { defineStore } from "pinia";

export const useMainMenuStore = defineStore("mainMenu", {
  state: () => ({
    menu: [
      "MENU PRINCIPAL",
      {
        icon: "HomeIcon",
        pageName: "dashboard",
        title: "Resumo Geral",
      },
      {
        icon: "SettingsIcon",
        pageName: "settings",
        title: "Configurações"
      },
    ],
  }),
});
