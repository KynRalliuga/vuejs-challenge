import { beforeEach, describe, expect, it } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import useMenuStore from "../menu/menu";
import router from "../../router";

describe("menu", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("menu has items", () => {
    const menu = useMenuStore();
    expect(menu.$state.menuItems.length > 0).to.be.true;
  });

  it("menu names exists in router names", () => {
    const menu = useMenuStore();
    const allRoutesNames = router.options.routes.map((route) => {
      return route.name;
    });

    menu.$state.menuItems.forEach((menuitem) => {
      expect(allRoutesNames.includes(menuitem.route)).to.be.true;
    });
  });
});
