<script setup lang="ts">
import DefaultTemplate from "../components/Templates/DefaultTemplate";
import FormMovies from "../components/FormMovies";
import MovieList from "../components/MovieList";
import useMoviesStore from "../stores/movies/movies";
import { MutationType } from "pinia";

const movieStore = useMoviesStore();

movieStore.fetchMovies();

movieStore.$subscribe((mutations) => {
  if (
    mutations.type === MutationType.direct &&
    (mutations.events.key === "time_window" || mutations.events.key === "page")
  ) {
    if (mutations.events.key === "time_window") {
      movieStore.resetPage();
    }
    movieStore.fetchMovies();
  }
});
</script>

<template>
  <DefaultTemplate>
    <FormMovies class="pb-8" />
    <MovieList />
  </DefaultTemplate>
</template>
