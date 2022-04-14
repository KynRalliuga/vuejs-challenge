<template>
  <div class="movie-item">
    <img :src="movie.backdrop_path" alt="" v-if="movie.backdrop_path" />
    <div class="infos-movie">
      <h3>{{ movie.title }}</h3>
      <p>{{ movie.overview }}</p>
    </div>
  </div>
</template>

<script src="./script" lang="ts" />

<style scoped>
.movie-item {
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
}
.infos-movie {
  padding: 20px;
}
img {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  height: 200px;
}
h3 {
  font-size: 20px;
  font-weight: bold;
  padding-bottom: 10px;
}
</style>
