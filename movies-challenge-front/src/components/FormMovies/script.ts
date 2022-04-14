import useMoviesStore from "@/stores/movies/movies";
import { defineComponent } from "vue";
import SelectComponent from "../FormsComponents/SelectComponent";

export default defineComponent({
  components: { SelectComponent },
  setup() {
    const movieStore = useMoviesStore();

    movieStore.$subscribe(() => movieStore.fetchMovies());

    return { movieStore };
  },
});
