import Vue from 'vue';
import Router from 'vue-router';
import Main from '../views/Main.vue';
import MovieInfo from '../views/Movie';
import Contacts from '../views/Contacts.vue';
import Favorite from '../views/Favorite.vue';
import PageNotFound from '../views/PageNotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: MovieInfo,
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: Favorite,
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts,
    },
    {
      path: '/404',
      name: '404',
      component: PageNotFound,
    },
    {
      path: '*',
      redirect: '/404'
    },
  ],
});
