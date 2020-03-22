<template>
  <v-form class="search-input">
    <v-text-field
      label="Поиск фильмов"
      required
      type="text"
      v-model="textRequest"
      @input="searchMovies"
    ></v-text-field>
  </v-form>
</template>


<script>
export default {
  data() {
    return {
      textRequest: '',
    };
  },
  methods: {
    searchMovies() {
      this.$store.dispatch('searchMovies', this.textRequest);
    },
  },
};
</script>

<style scoped>
  .search-input {
    width: 60%;
    margin-top: 30px;
  }
</style>
