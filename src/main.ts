import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/ionicons/iconfont.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;

window.$vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
console.log(window.$vm);
