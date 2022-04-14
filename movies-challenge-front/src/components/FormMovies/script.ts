import useMoviesStore from "@/stores/movies/movies";
import { defineComponent } from "vue";
import SelectComponent from "../FormsComponents/SelectComponent";

export default defineComponent({
  components: { SelectComponent },
  setup() {
    const movieStore = useMoviesStore();

    return { movieStore };
  },
});
