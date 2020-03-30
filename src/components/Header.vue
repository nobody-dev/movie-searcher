<template>
 <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
     <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav">
         <li class="nav-item">
            <div
              class="nav-link"
              :class="{'active': isHome}"
              @click="toHome">
              Главная
            </div>
         </li>
         <li class="nav-item">
           <div
             class="nav-link"
             :class="{'active': isFavorite}"
             @click="toFavorite">
             Избранные
           </div>
         </li>
         <li class="nav-item">
           <div
             class="nav-link"
             :class="{'active': isContacts}"
             @click="toContacts">
             Контакты
           </div>
         </li>
       </ul>
     </div>
   </nav>
 </div>
</template>

<script>
export default {
  computed: {
    isHome() {
      return this.$route.path === '/';
    },
    isFavorite() {
      return this.$route.path === '/favorite';
    },
    isContacts() {
      return this.$route.path === '/contacts';
    },
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },
    toFavorite() {
      this.$router.push('/favorite');
    },
    toContacts() {
      this.$router.push('/contacts');
    },
  },
};
</script>

<style scoped>
  .nav-link {
    font-size: 20px;
    cursor: pointer;
    user-select: none;
  }
</style>
