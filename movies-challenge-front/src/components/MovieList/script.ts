import useMoviesStore from "@/stores/movies/movies";
import { defineComponent } from "vue";
import MovieItem from "../MovieItem";

export default defineComponent({
  components: { MovieItem },
  setup() {
    const movieStore = useMoviesStore();

    movieStore.fetchMovies();

    return { movieStore };
  },
});
