import Vue from 'vue';
import Router from 'vue-router';
import home from './modules/home';
import about from './modules/about';

Vue.use(Router);

export default new Router({
  routes: [
    home,
    about,
  ],
});
