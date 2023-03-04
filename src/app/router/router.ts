import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from 'pages/home'
import { AboutPage } from 'pages/about'
import DefaultLayout from '../layout/default.vue'
import EmptyLayout from '../layout/empty.vue'
import ErrorLayout from '../layout/error.vue'
import AdminLAyout from '../layout/admin.vue'
import { JoinPage } from 'pages/join'
import { AuthPage } from 'pages/auth'
import { JoinVariable } from 'pages/joinVariable'
import { NotFound } from 'pages/notFound'
import { searchResultsPage } from 'pages/searchResults'
import { ServerError } from 'pages/serverError'
import { AdminHomePage } from 'pages/admin/home'


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
      component: AdminLAyout,
      path: '/admin',
      children: [
        { component: AdminHomePage, path: '' }
      ]
    },
    {
      component: ErrorLayout,
      path: '/:pathMatch(.*)*',
      children: [
        { component: NotFound, path: '' },
        { component: ServerError, path: '' }
      ]
    }
  ]
})