import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
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
        component: () => import(/* webpackChunkName: "listarEmprgs" */ '../components/Empregados/List.vue'),
      },
      {
        path: 'novo',
        component: () => import(/* webpackChunkName: "novoEmprg" */ '../components/Empregados/New.vue'),
      },
    ],
  },
  {
    path: '/dependentes',
    component: () => import(/* webpackChunkName: "dependentes" */ '../views/Dependentes.vue'),
    children: [
      {
        path: 'list',
        props: true,
        component: () => import(/* webpackChunkName: "listarDeps" */ '../components/Dependentes/List.vue'),
      },
      {
        path: 'novo',
        component: () => import(/* webpackChunkName: "novoDep" */ '../components/Dependentes/New.vue'),
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
