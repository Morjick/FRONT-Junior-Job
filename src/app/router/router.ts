import { ArticlesPage } from 'pages/articles'
import { createRouter, createWebHistory } from 'vue-router'
import { HomePage } from 'pages/home'
import DefaultLayout from '../layout/default.vue'
import EmptyLayout from '../layout/empty.vue'
import ErrorLayout from '../layout/error.vue'
import AdminLayout from '../layout/admin.vue'
import MessageLayout from '../layout/message.vue'
import TxtLayout from '../layout/txt.vue'
import { MessagePage, MessageList } from 'pages/message'
import { JoinPage } from 'pages/join'
import { AuthPage } from 'pages/auth'
import { JoinVariable } from 'pages/joinVariable'
import { NotFound } from 'pages/notFound'
import { searchResultsPage } from 'pages/searchResults'
import { ServerError } from 'pages/serverError'
import { Profile } from 'pages/profile'
import { AdminHomePage } from 'pages/admin/home'
import { AdminArticlesPage } from 'pages/admin/articles'
import { CreateArticlesPage } from 'pages/admin/articles/create'
import { EditArticlesPage } from 'pages/admin/articles/edit'
import { CategoriesPage } from 'pages/admin/categories'
import { NotificationPage } from 'pages/notification'
import personalData from 'pages/personalData.vue'
import { VacancyCreate } from 'pages/vacancyCreate'
import { Vacancy } from 'pages/vacancy'
import { Wallet } from 'pages/wallet'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: DefaultLayout,
      path: '/',
      children: [
        { component: HomePage, path: '/', },
        { component: searchResultsPage, path: '/search-result', },
        { component: ArticlesPage, path: '/articles', },
        { component: Profile, path: '/profile', },
        { component: MessageList, path: '/message-list', },
        { component: NotificationPage, path: '/notification', },
        { component: VacancyCreate, path: '/vacancy-create', },
        { component: Vacancy, path: '/vacancy', },
        { component: Wallet, path: '/wallet', },
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
      component: TxtLayout,
      path: '/txt',
      children: [
        { component: personalData, path: '/personal-data', },
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
        {
          component: CreateArticlesPage,
          path: '/admin/create-articles',
          props: true,
        },
        {
          component: EditArticlesPage,
          path: '/admin/edit-articles/:id',
          props: true,
        },
        { component: CategoriesPage, path: '/admin/categories', },
      ],
    },
    {
      component: ErrorLayout,
      path: '/:pathMatch(.*)*',
      children: [
        { component: NotFound, path: '', },
        { component: ServerError, path: '/server-error', },
      ],
    },
    {
      component: MessageLayout,
      path: '/message',
      children: [
        { component: MessagePage, path: '', },
      ],
    },
  ],
})
