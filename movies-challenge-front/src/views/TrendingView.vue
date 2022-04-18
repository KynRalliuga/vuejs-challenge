<script lang="ts">
import DefaultTemplate from "../components/Templates/DefaultTemplate";
import FormMovies from "../components/FormMovies";
import MovieList from "../components/MovieList";
import useMoviesStore from "../stores/movies/movies";
import { defineComponent } from "vue";

export default defineComponent({
  components: { DefaultTemplate, FormMovies, MovieList },

  beforeCreate() {
    this.$watch(
      () => this.$route.params,
      () => {
        const movieStore = useMoviesStore();
        movieStore.fetchMovies();
      },
      { immediate: true }
    );
  },
});
</script>

<template>
  <DefaultTemplate>
    <FormMovies class="pb-8" />
    <MovieList />
  </DefaultTemplate>
</template>
