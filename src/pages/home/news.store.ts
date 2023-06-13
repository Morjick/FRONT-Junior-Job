import axios from 'axios'

interface Article {
  id: number
  title: string
  avatar: string
  href: string
}

interface NewsStoreI {
  news: Article[]
}

const newsStore = {
  state: {
    news: [],
  },
  getters: {
    getArticles (state: NewsStoreI): Article[] {
      return state.news
    },
  },
  actions: {
    async fetchArticles ({ commit, }: any) {
      const { data, } = await axios.get('articles/get-many')

      commit('updateNews', data)
    },
  },
  mutations: {
    updateNews (state: NewsStoreI, data: any) {
      state.news = data
    },
  },
}

export {
  newsStore,
  type Article,
  type NewsStoreI
}
