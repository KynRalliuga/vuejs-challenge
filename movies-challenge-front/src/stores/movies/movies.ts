import axios, { type AxiosResponse } from "axios";
import { defineStore } from "pinia";
import type { SelectHTMLAttributes } from "vue";
import type {
  MovieTMDB,
  ResponseMoviesDataSuccesful,
  ResponseMoviesError,
} from "./types";

const useMoviesStore = defineStore({
  id: "movies",
  state: () => ({
    page: 1,
    totalPages: 1,
    time_window: "day" as "day" | "week",
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

  actions: {
    changeTimeWindow(payload: Event) {
      this.time_window = (payload.target as SelectHTMLAttributes).value;
    },

    changePage(type: "+" | "-") {
      if (type === "+" && this.page < this.totalPages) {
        this.page++;
      } else if (type === "-" && this.page > 1) {
        this.page--;
      }
    },

    resetPage() {
      this.page = 1;
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
