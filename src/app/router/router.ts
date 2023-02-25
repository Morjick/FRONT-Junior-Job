import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from 'pages/home'
import { AboutPage } from 'pages/about'
import DefaultLayout from '../layout/default.vue'
import EmptyLayout from '../layout/empty.vue'
import ErrorLayout from '../layout/error.vue'
import { JoinPage } from 'pages/join'
import { AuthPage } from 'pages/auth'
import { JoinVariable } from 'pages/joinVariable'
import { NotFound } from 'pages/notFound'
import { searchResultsPage } from 'pages/searchResults'


export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: DefaultLayout,
      path: '/',
      children: [
        { component: HomePage, path: '/' },
        { component: AboutPage, path: '/about' },
        { component: searchResultsPage, path: "/search-result" }
      ],
    },
    {
      component: EmptyLayout,
      path: '/join',
      children: [
        { component: JoinPage, path: '' },
        { component: AuthPage, path: '/auth' },
        { component: JoinVariable, path: '/join-variable'}
      ]
    },
    {
      component: ErrorLayout,
      path: '/:pathMatch(.*)*',
      children: [
        { component: NotFound, path: '' }
      ]
    }
  ]
})