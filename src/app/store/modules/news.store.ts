import { type UserI } from 'app/store/modules/auth.store'
import axios from 'axios'
import { type ActionContext } from 'vuex'

interface Article {
  id: number
  title: string
  body: string
  avatar: string
  href: string
  createdAt: string
  updatedAt: string
  author: UserI
}

interface Vacancy {
  id: number
  title: string
  href: string
  avatar: string
  show: boolean
  body: string
  autorId: number
  author: UserI
  response: any[]
  categoryId: number
  createdAt: string
  updatedAt: string
}

interface ResponseI {
  id: number
  body: string
  autorId: number
  vacancyId: number
}

interface CategoryI {
  id: number
  title: string
  icon: string
  hash: string
}

interface NewsStoreI {
  news: Article[]
  vacancy: Vacancy[]
  category: CategoryI[]
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
    getCategory (state: NewsStoreI): CategoryI[] {
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
    updateCategory (state: NewsStoreI, data: CategoryI[]) {
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
  type CategoryI,
  type Vacancy,
  type ResponseI
}
