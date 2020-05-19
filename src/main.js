import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';
import './registerServiceWorker';
import './assets/css/main.css';
import router from './router';
import loader from './assets/images/loading-color.jpg';

Vue.config.productionTip = false;

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '',
  loading: loader,
  attempt: 1,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(VueLazyload);
