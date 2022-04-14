<template>
  <div class="movie-list">
    <div class="error-msg" v-if="movieStore.messageApi && movieStore.isLoading">
      {{ movieStore.messageApi }}
    </div>
    <div class="movies-list" v-if="movieStore.movies.length > 0">
      <MovieItem
        :movie="movie"
        v-for="movie in movieStore.movies"
        :key="movie.id"
      />
    </div>
  </div>
</template>

<script src="./script" lang="ts" />
