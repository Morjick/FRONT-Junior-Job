import { type UserI } from 'app/store/modules/auth.store'
import axios from 'axios'
import { type ActionContext } from 'vuex'

interface Article {
  id: number
  title: string
  body: string
  avatar: string
  href: string
  autor: UserI
}

interface Vacancy {
  id: number
  title: string
  href: string
  avatar: string
  show: boolean
  autorId: number
  categoryId: number
  createdAt: string
  updatedAt: string
}

interface Category {
  id: number
  title: string
  icon: string
  hash: string
}

interface NewsStoreI {
  news: Article[]
  vacancy: Vacancy[]
  category: Category[]
}

const newsStore = {
  state: (): NewsStoreI => ({
    news: [],
    vacancy: [],
    category: [],
  }),
  getters: {
    getArticles (state: NewsStoreI): Article[] {
      return state.news
    },
    getCategory (state: NewsStoreI): Category[] {
      return state.category
    },
    getVacancy (state: NewsStoreI): Vacancy[] {
      return state.vacancy
    },
  },
  actions: {
    async fetchArticles ({ commit, }: any) {
      const { data, } = await axios.get('articles/get-many')

      commit('updateNews', data.articles)
    },
    async fetchCategory (context: ActionContext<'S', 'R'>) {
      const { data, } = await axios.get('vacancy/get-category')

      context.commit('updateCategory', data.category)
    },
    async fetchVacancy (context: ActionContext<'S', 'R'>) {
      const { data, } = await axios.get('vacancy/get-many')

      context.commit('updateVacancy', data.vacancy)
    },
  },
  mutations: {
    updateNews (state: NewsStoreI, data: any) {
      state.news = data
    },
    updateCategory (state: NewsStoreI, data: Category[]) {
      state.category = data
    },
    updateVacancy (state: NewsStoreI, data: Vacancy[]) {
      state.vacancy = data
    },
  },
}

export {
  newsStore,
  type Article,
  type NewsStoreI,
  type Category,
  type Vacancy
}
