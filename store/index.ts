import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';
import user from './modules/user';

Vue.use(Vuex);

const debug: boolean = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    user,
  },
  strict: debug,
  plugins: [createLogger({})],
});
