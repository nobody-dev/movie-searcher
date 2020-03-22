<template>
  <div class="movie__header">
    <v-btn
      :tile="true"
      :block="true"
      :color="'#007bff'"
      :large="true"
      @click="toHome"
    >
      <v-icon left>mdi-arrow-left</v-icon>К общему списку
    </v-btn>
  </div>
</template>

<script>
  export default {
    methods: {
      toHome() {
        this.$router.push('/');
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
