import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from 'pages/home'
import { AboutPage } from 'pages/about'
import DefaultLayout from '../layout/default.vue'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: DefaultLayout,
      path: '/',
      children: [
        { component: HomePage, path: '' },
        { component: AboutPage, path: '/about' },
      ],
    },
    {
      component: HomePage,
      path: '/:pathMatch(.*)*',
    }
  ]
})