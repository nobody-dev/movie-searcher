<template>
  <div class="contacts">
    <h2 class="contacts__title">Контакты:</h2>
    <p class="contacts__email">
      <strong>E-mail: </strong>
      <a href="mailto:inside.dev.box@gmail.com">inside.dev.box@gmail.com</a>
    </p>
    <p class="contacts__telegram">
      <strong>Telegram: </strong>
      <a href="https://teleg.one/nobodywow">@nobodywow</a>
    </p>
    <p class="contacts__vk">
      <strong>VK: </strong>
      <a href="https://vk.com/nobody.woow">nobody.woow</a>
    </p>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped lang="scss">
  .contacts {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    &__title {
      padding: 20px;
    }
  }
</style>
