<script setup lang="ts">
import DefaultTemplate from "../components/Templates/DefaultTemplate";
import FormMovies from "../components/FormMovies";
import MovieList from "../components/MovieList";
import useMoviesStore from "../stores/movies/movies";

const movieStore = useMoviesStore();

movieStore.fetchMovies();
</script>

<template>
  <DefaultTemplate>
    <FormMovies class="pb-8" />
    <MovieList />
  </DefaultTemplate>
</template>
