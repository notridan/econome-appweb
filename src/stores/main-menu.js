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
        icon: "HomeIcon",
        pageName: "condominiums",
        title: "Condomínios",
      },
      {
        icon: "HomeIcon",
        pageName: "units_groups",
        title: "Grupos de Unidades",
      },
      {
        icon: "ListIcon",
        pageName: "units",
        title: "Residências",
      },
      {
        icon: "LayersIcon",
        pageName: "dependencies",
        title: "Dependências",
      },
      {
        icon: "AlertCircleIcon",
        pageName: "ocurrences",
        title: "Ocorrências",
      },
      {
        icon: "FileMinusIcon",
        pageName: "polls",
        title: "Enquetes",
      },
      {
        icon: "SettingsIcon",
        pageName: "settings",
        title: "Configurações"
      },
      {
        icon: "KeyIcon",
        pageName: "accessPermissions",
        title: "Identidade e Acesso",
        subMenu: [
          {
            icon: "",
            pageName: "identity-access-roles",
            title: "Papéis"
          },
          {
            icon: "",
            pageName: "identity-access-permissions",
            title: "Permissões"
          },
          // {
          //   icon: "",
          //   pageName: "identity-access-modules",
          //   title: "Módulos"
          // },
          {
            icon: "",
            pageName: "identity-access-users",
            title: "Usuários"
          }
        ]
      },


    ],
  }),
});
