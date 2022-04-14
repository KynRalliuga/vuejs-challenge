import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { MovieTMDB } from "@/stores/movies/types";

export default defineComponent({
  props: {
    movie: {
      type: Object as PropType<MovieTMDB>,
      required: true,
    },
  },
});
