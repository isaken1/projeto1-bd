import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/empregados',
    component: () => import(/* webpackChunkName: "empregados" */ '../views/Empregados.vue'),
    children: [
      {
        path: 'list',
        props: true,
        component: () => import(/* webpackChunkName: "listar" */ '../components/Empregados/List.vue'),
      },
      {
        path: 'novo',
        component: () => import(/* webpackChunkName: "novo" */ '../components/Empregados/New.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
