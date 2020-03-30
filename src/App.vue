<template>
  <v-app id="inspire">
    <Header/>
    <router-view/>
  </v-app>
  <!--created by Ivan "Nobody" Kudriavcev-->
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header: Header,
  },
};
</script>

<style>
  #inspire {
    background: #f5f5f5;
  }
</style>
