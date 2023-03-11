import { ArticlesPage } from 'pages/articles'
import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from 'pages/home'
import { AboutPage } from 'pages/about'
import DefaultLayout from '../layout/default.vue'
import EmptyLayout from '../layout/empty.vue'
import ErrorLayout from '../layout/error.vue'
import AdminLayout from '../layout/admin.vue'
import { JoinPage } from 'pages/join'
import { AuthPage } from 'pages/auth'
import { JoinVariable } from 'pages/joinVariable'
import { NotFound } from 'pages/notFound'
import { searchResultsPage } from 'pages/searchResults'
import { ServerError } from 'pages/serverError'
import { AdminHomePage } from 'pages/admin/home'
import { AdminArticlesPage } from 'pages/admin/articles'
import { CreateArticlesPage } from 'pages/admin/articles/create'
import { EditArticlesPage } from 'pages/admin/articles/edit'
import { CategoriesPage } from 'pages/admin/categories'
import { NotificationPage } from 'pages/notification'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: DefaultLayout,
      path: '/',
      children: [
        { component: HomePage, path: '/', },
        { component: AboutPage, path: '/about', },
        { component: searchResultsPage, path: '/search-result', },
        { component: ArticlesPage, path: '/articles', },
        { component: NotificationPage, path: '/notifications', },
      ],
    },
    {
      component: EmptyLayout,
      path: '/join',
      children: [
        { component: JoinPage, path: '', },
        { component: AuthPage, path: '/auth', },
        { component: JoinVariable, path: '/join-variable', },
      ],
    },
    {
      component: AdminLayout,
      path: '/admin/',
      children: [
        { component: AdminHomePage, path: '', },
        {
          component: AdminArticlesPage,
          path: '/admin/articles',
        },
        { component: CreateArticlesPage, path: '/admin/create-articles', props: true, },
        { component: EditArticlesPage, path: '/admin/edit-articles/:id', props: true, },
        { component: CategoriesPage, path: '/admin/categories', },
      ],
    },
    {
      component: ErrorLayout,
      path: '/:pathMatch(.*)*',
      children: [
        { component: NotFound, path: '', },
        { component: ServerError, path: '', },
      ],
    },
  ],
})
