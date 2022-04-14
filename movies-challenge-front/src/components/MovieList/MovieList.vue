<template>
  <div class="movie-list">
    <div
      class="error-msg text-center"
      v-if="movieStore.messageApi && movieStore.isLoading"
    >
      {{ movieStore.messageApi }}
    </div>
    <div
      class="movies-list grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
      v-if="movieStore.movies.length > 0 && !movieStore.isLoading"
    >
      <MovieItem
        :movie="movie"
        v-for="movie in movieStore.movies"
        :key="movie.id"
      />
    </div>
  </div>
</template>

<script src="./script" lang="ts" />
