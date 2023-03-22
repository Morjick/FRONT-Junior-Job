import { router } from './router/router'
import { newsStore } from 'pages/home/news.store'
import { createStore } from 'vuex'

const store = createStore({
  modules: {
    news: newsStore,
  },
})

export { router, store }
