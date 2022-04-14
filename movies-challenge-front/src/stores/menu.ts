import { defineStore } from "pinia";

export const useMenuStore = defineStore({
  id: "menu",
  state: () => ({
    menuItems: [
      {
        route: "home",
        title: "Home",
      },
      {
        route: "trending",
        title: "Trending",
      },
    ],
  }),
});
