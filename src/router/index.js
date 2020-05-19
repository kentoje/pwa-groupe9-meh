import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Listing from '../views/Listing.vue';
import Article from '../views/Article.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/listing',
    name: 'Listing',
    component: Listing,
  },
  {
    path: '/article/:slug',
    name: 'Article',
    component: Article,
    props: { default: true, sidebar: false },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
