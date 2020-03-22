<template>
  <div class="movie__info_right">
    <span>{{movieInfo.original_title}}</span>
    <span>Бюджет: {{movieInfo.budget}}$</span>
    <span>Оригинальное название:{{movieInfo.original_title}}</span>
  </div>
</template>

<script>
  export default {
    props: {
      movieInfo: Object,
    }
  };
</script>

<style scoped>
  .movie__info_right {
    display: flex;
    flex-direction: column;
  }
</style>
