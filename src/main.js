import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import vuetify from './plugins/vuetify';
import {money, defaultDate} from './filters/filters';

Vue.filter('money', money);
Vue.filter('defaultDate', defaultDate);
Vue.use(VueRouter);

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  vuetify,
  render: h => h(App),
});
