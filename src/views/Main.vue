<template>
  <div class="main-page">
    <app-search></app-search>
    <app-movies></app-movies>
  </div>
</template>

<script>
import Movies from '../components/Movies.vue';
import Search from '../components/Search.vue';

export default {
  components: {
    appMovies: Movies,
    appSearch: Search,
  },
};
</script>

<style scoped>
  .main-page {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
