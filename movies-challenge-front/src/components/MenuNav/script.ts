import { mapState } from "pinia";
import useMenuStore from "../../stores/menu/menu";

export default {
  computed: {
    ...mapState(useMenuStore, ["menuItems"]),
  },
};
