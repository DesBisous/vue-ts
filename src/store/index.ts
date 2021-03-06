import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import user from './modules/user';
import sideBar from './modules/sideBar';

Vue.use(Vuex);

const debug: boolean = process.env.NODE_ENV === 'development';

export default new Vuex.Store({
  modules: {
    user,
    sideBar,
  },
  strict: debug,
  plugins: debug ? [createLogger({})] : [],
});
