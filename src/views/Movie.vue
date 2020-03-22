<template>
  <div class="movie">
    <MovieHeader/>
    <MovieInfo :movieInfo="movieInfo"/>
  </div>
</template>

<script>
import MovieInfo from '../components/MovieInfo';
import MovieHeader from '../components/MovieHeader';

export default {
  components: {
    MovieHeader,
    MovieInfo,
  },
  computed: {
    movieInfo() {
      return this.$store.getters.getMovie;
    },
    movieId() {
      const path = this.$route.path;
      return path.substring(7);
    },
  },
  mounted() {
    this.$store.dispatch('loadMovieInfo', this.movieId);
  },
};
</script>

<style lang="scss" scoped>
  .movie {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 60%;
    padding: 30px 10px;
  }
</style>
