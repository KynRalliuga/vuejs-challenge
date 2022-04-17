import axios, { type AxiosResponse } from "axios";
import { defineStore } from "pinia";
import type { SelectHTMLAttributes } from "vue";
import router from "../../router";
import type {
  MovieTMDB,
  ResponseMoviesDataSuccesful,
  ResponseMoviesError,
} from "./types";

const useMoviesStore = defineStore({
  id: "movies",
  state: () => ({
    totalPages: 1,
    options: [
      {
        value: "day",
        label: "Day",
      },
      {
        value: "week",
        label: "Week",
      },
    ],
    isLoading: false,
    movies: [] as MovieTMDB[],
    messageApi: "Carregando...",
  }),

  getters: {
    page: (): number => {
      return router.currentRoute.value.params.page
        ? parseInt(router.currentRoute.value.params.page as string)
        : 1;
    },

    time_window: (): "day" | "week" => {
      return router.currentRoute.value.params.time_window
        ? (router.currentRoute.value.params.time_window as "day" | "week")
        : "day";
    },
  },

  actions: {
    changeTimeWindow(payload: Event) {
      router.push({
        name: "trendingTimeWindow",
        params: { time_window: (payload.target as SelectHTMLAttributes).value },
      });
    },

    changePage(type: "+" | "-") {
      let newPage = this.page;

      if (type === "+" && newPage < this.totalPages) {
        newPage++;
      } else if (type === "-" && newPage > 1) {
        newPage--;
      }

      router.push({
        name: "trendingTimeWindowPage",
        params: { page: newPage, time_window: this.time_window },
      });
    },

    async fetchMovies() {
      if (!this.isLoading) {
        this.isLoading = true;
        this.messageApi = "Carregando...";

        await axios
          .get(
            `${import.meta.env.VITE_TMDB_BASE_API_URL}/trending/movie/${
              this.time_window
            }?api_key=${import.meta.env.VITE_API_TOKEN}&page=${this.page}`
          )
          .then((response: AxiosResponse<ResponseMoviesDataSuccesful>) => {
            this.movies = response.data.results;
            this.movies.forEach((value) => {
              value.backdrop_path =
                import.meta.env.VITE_TMDB_BASE_IMAGE_URL + value.backdrop_path;
            });
            this.messageApi = "";
            this.totalPages = response.data.total_pages;
          })
          .catch((response: AxiosResponse<ResponseMoviesError>) => {
            this.movies = [];
            this.messageApi = response.data.status_message;
            this.totalPages = 1;
          })
          .finally(() => {
            this.isLoading = false;
          });
      }
    },
  },
});

export default useMoviesStore;
