import useMoviesStore from "@/stores/movies/movies";
import { defineComponent } from "vue";
import MovieItem from "../MovieItem";
import PaginationComponent from "../PaginationComponent";

export default defineComponent({
  components: { MovieItem, PaginationComponent },
  setup() {
    const movieStore = useMoviesStore();

    return { movieStore };
  },
});
