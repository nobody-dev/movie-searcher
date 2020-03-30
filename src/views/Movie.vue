<template>
  <div class="movie">
    <MovieHeader/>
    <!--loading-->
    <v-progress-linear v-if="!movieInfo"
                       color="rgb(0, 123, 255)"
                       indeterminate
                       rounded
                       height="6"
    ></v-progress-linear>
    <!--content-->
    <MovieInfo :movieInfo="movieInfo" v-if="movieInfo"/>
  </div>
</template>

<script>
import MovieInfo from '../components/Movie/MovieInfo';
import MovieHeader from '../components/Movie/MovieHeader';

export default {
  components: {
    MovieHeader,
    MovieInfo,
  },
  computed: {
    movieInfo() {
      return this.$store.state.movie;
    },
    movieId() {
      const path = this.$route.path;
      return path.substring(7);
    },
  },
  watch: {
    movieId() {
      this.$store.dispatch('loadMovieInfo', this.movieId);
      this.$store.dispatch('loadSimilarMovies', this.movieId);
    },
  },
  mounted() {
    this.$store.dispatch('loadMovieInfo', this.movieId);
    this.$store.dispatch('loadSimilarMovies', this.movieId);
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
    padding: 20px 10px 30px 10px;
  }
</style>
