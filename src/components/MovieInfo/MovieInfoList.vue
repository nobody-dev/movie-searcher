<template>
  <div class="movie__list">
    <span>Оригинальное название: {{movieInfo.original_title}} sdfsdfsdf sedfsdfsdfsdf sdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdf</span>
    <span>Бюджет: {{movieInfo.budget}}$</span>
    <span></span>
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
  .movie__list {
    display: flex;
    flex-direction: column;
    max-width: 60%;
    word-wrap: break-word;
  }
</style>
