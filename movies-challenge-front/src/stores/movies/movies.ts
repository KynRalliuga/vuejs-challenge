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

    async fetchMovies() {
      if (!this.isLoading) {
        this.isLoading = true;
        this.messageApi = "Carregando...";
        await axios
          .get(
            `https://api.themoviedb.org/3/trending/movie/${this.time_window}?api_key=&page=${this.page}`
          )
          .then((response: AxiosResponse<ResponseMoviesDataSuccesful>) => {
            this.movies = response.data.results;
            this.messageApi = "";
          })
          .catch((response: AxiosResponse<ResponseMoviesError>) => {
            this.movies = [];
            this.messageApi = response.data.status_message;
          })
          .finally(() => {
            this.isLoading = false;
          });
      }
    },
  },
});

export default useMoviesStore;
