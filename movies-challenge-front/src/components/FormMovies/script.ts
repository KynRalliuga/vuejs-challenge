import useMoviesStore from "@/stores/movies/movies";
import { MutationType } from "pinia";
import { defineComponent } from "vue";
import SelectComponent from "../FormsComponents/SelectComponent";

export default defineComponent({
  components: { SelectComponent },
  setup() {
    const movieStore = useMoviesStore();

    movieStore.$subscribe((mutations) => {
      if (
        mutations.type === MutationType.direct &&
        mutations.events.key === "time_window"
      ) {
        movieStore.fetchMovies();
      }
    });

    return { movieStore };
  },
});
