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
  computed: {
    getSearchText() {
      return this.$store.state.searchText;
    },
  },
  mounted() {
    //When the user returns from the movie page to the main page, insert the search text into the input
    this.getSearchText ? this.textRequest = this.getSearchText : false;
  },
  methods: {
    searchMovies() {
      //Saving user search text
      this.$store.commit('setPropertyInStore', {key: 'searchText', value: this.textRequest});
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
