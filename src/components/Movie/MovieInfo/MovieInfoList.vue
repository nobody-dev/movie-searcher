<template>
  <div class="movie__list">
    <!--release-->
    <span class="movie__item"><strong>Дата выхода:</strong>
      <template v-if="movieInfo.release_date"> {{ movieInfo.release_date | defaultDate}}</template>
      <template v-else>Не известна</template>
    </span>
    <!--original title-->
    <span class="movie__item"><strong>Оригинальное название:</strong> {{movieInfo.original_title ? movieInfo.original_title : 'Не известно'}}</span>
    <!--countries-->
    <div class="movie__countries-container movie__item">
      <strong>Страна:</strong>
      <ul v-if="movieInfo.production_countries.length" class="movie__countries">
        <li v-for="country in movieInfo.production_countries" class="movie__countries-item">{{country.name}}</li>
      </ul>
      <span v-else>Не известна</span>
    </div>
    <!--genres-->
    <div class="movie__genres-container movie__item">
      <strong>Жанр:</strong>
      <ul v-if="movieInfo.genres.length" class="movie__genres">
        <li v-for="genre in movieInfo.genres" class="movie__genres-item">{{genre.name}}</li>
      </ul>
      <span v-else>Не известен</span>
    </div>
    <!--runtime-->
    <span class="movie__item"><strong>Продолжительность:</strong> {{movieInfo.runtime ? movieInfo.runtime + ' мин.' : 'Не известно'}}</span>
    <!--budget-->
    <span class="movie__item"><strong>Бюджет: </strong>
      <template v-if="movieInfo.budget">{{ movieInfo.budget | money}}</template>
      <template v-else>Не известен</template>
    </span>
    <!--revenue-->
    <span class="movie__item"><strong>Собрано: </strong>
      <template v-if="movieInfo.revenue">{{ movieInfo.revenue | money}}</template>
      <template v-else>Не известно</template>
    </span>
    <!--homepage-->
    <span class="movie__item"><strong>Официальный сайт: </strong>
      <a v-if="movieInfo.homepage" :href="movieInfo.homepage">{{ movieInfo.homepage }}</a>
      <span v-else>Не известен</span>
    </span>
    <!--description-->
    <p class="movie__disc"><strong>Описание:</strong> {{movieInfo.overview ? movieInfo.overview : 'Не известно'}}</p>
  </div>
</template>

<script>
  export default {
    props: {
      movieInfo: Object,
    },
  };
</script>

<style scoped lang="scss">
  .movie {
    &__list {
       display: flex;
       flex-direction: column;
       width: 60%;
       word-wrap: break-word;
       font-size: 14px;
    }
    &__item {
      border-bottom: 1px dotted gray;
      padding: 1px 0;
    }
    &__genres {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      &-container {
        display: flex;
        strong {
          padding-right: 5px;
        }
      }
      &-item {
        padding-right: 5px;
        &:after {
          content: ','
        }
        &:last-child {
          &:after {
            content: ''
          }
        }
      }
    }
    &__countries {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      &-container {
        display: flex;
        strong {
          padding-right: 5px;
        }
      }
      &-item {
        padding-right: 5px;
        &:after {
          content: ','
        }
        &:last-child {
          &:after {
            content: ''
          }
        }
      }
    }
    .movie__disc {
      margin-top: 30px;
    }
  }
</style>
