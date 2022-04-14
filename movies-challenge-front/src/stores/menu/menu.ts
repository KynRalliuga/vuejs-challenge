import { defineStore } from "pinia";

const useMenuStore = defineStore({
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

export default useMenuStore;
