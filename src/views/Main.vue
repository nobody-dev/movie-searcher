<template>
  <div class="main-page">
    <Search/>
    <Movies/>
  </div>
</template>

<script>
import Movies from '../components/Main/Movies.vue';
import Search from '../components/Main/Search.vue';

export default {
  components: {
    Movies: Movies,
    Search: Search,
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
