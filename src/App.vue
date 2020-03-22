<template>
  <v-app id="inspire">
    <Header/>
    <router-view/>
  </v-app>
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header: Header,
  },
};
</script>
