<template>
 <div>
   <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
     <div class="collapse navbar-collapse" id="navbarNav">
       <ul class="navbar-nav">
         <li class="nav-item">
            <router-link
              class="nav-link"
              to="/"
              exact
              active-class="active">
              Главная
            </router-link>
         </li>
         <li class="nav-item">
           <router-link
             to="/favorite"
             class="nav-link"
             active-class="active">
             Избранные
           </router-link>
         </li>
         <li class="nav-item">
           <router-link
             to="/contacts"
             class="nav-link"
             active-class="active">
             Контакты
           </router-link>
         </li>
       </ul>
     </div>
   </nav>
 </div>
</template>

<style scoped>
  .nav-link {
    font-size: 20px;
    cursor: pointer;
    user-select: none;
  }
</style>
