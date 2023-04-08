import { defineStore } from "pinia";

export const useMainMenuStore = defineStore("mainMenu", {
  state: () => ({
    menu: [
      "START MENU",
      {
        icon: "HomeIcon",
        pageName: "dashboard",
        title: "Dashboard",
        subMenu: [
          {
            icon: "",
            pageName: "dashboard-overview-1",
            title: "Overview 1",
          }
        ],
      },
    ],
  }),
});
