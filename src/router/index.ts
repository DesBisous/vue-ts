import Vue from 'vue';
import Router from 'vue-router';
import home from './modules/home';
import chatRoom from './modules/chatRoom';
import user from './modules/user';
import exception from './modules/exception';

Vue.use(Router);

export default new Router({
  routes: [
    home,
    chatRoom,
    user,
    exception,
  ],
});
