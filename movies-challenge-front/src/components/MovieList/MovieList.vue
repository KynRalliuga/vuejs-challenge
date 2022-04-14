<template>
  <div class="movie-list">
    <div class="error-msg" v-if="movieStore.messageApi && movieStore.isLoading">
      {{ movieStore.messageApi }}
    </div>
    <div class="movies-list" v-if="movieStore.movies.length > 0">
      {{ movieStore.movies }}
      <MovieItem
        :bind="movie"
        v-for="movie in movieStore.movies"
        :key="movie.id"
      />
      <div v-for="movie in movieStore.movies" :key="movie.id">
        <h3>{{ movie.title }}</h3>
      </div>
    </div>
  </div>
</template>

<script src="./script" lang="ts" />
