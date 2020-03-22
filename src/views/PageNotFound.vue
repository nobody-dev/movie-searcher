<template>
  <div class="page-not-found">
    <img class ="page-not-found__img" src="https://cdn.icon-icons.com/icons2/1302/PNG/512/sadsmiley_85787.png"  alt="404">
    <span class="page-not-found__code">404</span>
    <p class="page-not-found__text">Такой страницы не существует.</p>
  </div>
</template>

<script>
  export default {
  };
</script>

<style lang="scss" scoped>
  .page-not-found {
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &__img {
      width: 200px;
      height: 200px;
    }
    &__code {
      font-size: 8em;
    }
    &__text {
      font-size: 1.5em;
    }
  }
</style>
