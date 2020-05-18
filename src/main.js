import Vue from 'vue';
import VueCarousel from 'vue-carousel';
import App from './App.vue';
import './registerServiceWorker';
import './assets/css/main.css';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(VueCarousel);
