<template>
  <div class="movie__button">
    <!--add-->
    <v-btn
      dark
      class="ma-2"
      color="#2962FF"
      v-if="!isMovieInFavorite"
      @click.stop="addToFavorite()"
    >
      Добавить
      <v-icon dark right>mdi-checkbox-marked-circle</v-icon>
    </v-btn>
    <!--remove-->
    <v-btn
      dark
      class="ma-2"
      color="red"
      v-if="isMovieInFavorite"
      @click.stop="removeFromFavorite()"
    >
      Удалить
      <v-icon dark right>mdi-cancel</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    props: {
      movieInfo: Object,
    },
    computed: {
      getFavoriteMovies() {
        return this.$store.state.favoriteMovies;
      },
      isMovieInFavorite() {
        return this.getFavoriteMovies.some((movie) => movie.id === this.movieInfo.id);
      },
    },
    methods: {
      addToFavorite() {
        this.$store.commit('setMovieToFavorite', this.movieInfo);
      },
      removeFromFavorite() {
        this.$store.commit('removeMovieFromFavorite', this.movieInfo.id);
      },
    },
  };
</script>

<style scoped lang="scss">
  .v-btn {
    border-radius: 0;
  }
  .movie__button {
    display: inline-block;
  }
</style>
