<template>
  <div class="movie__header">
    <v-btn
      :tile="true"
      :block="true"
      :color="'#2962FF'"
      :large="true"
      @click="toSearch"
    >
      <v-icon left>mdi-arrow-left</v-icon>К общему списку
    </v-btn>
  </div>
</template>

<script>
  export default {
    computed: {
      getSearchText() {
        return this.$store.state.searchText;
      }
    },
    methods: {
      toSearch() {
        this.$router.push('/');
        //Move to search result page
        this.$store.dispatch('searchMovies', this.getSearchText)
      },
    },
  };
</script>

<style lang="scss">
  .movie {
    &__header {
      width: 100%;
      padding: 20px 0;
      .v-btn__content {
        color: rgba(255,255,255, .8);
      }
    }
  }
</style>
