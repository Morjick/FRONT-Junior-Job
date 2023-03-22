interface Article {
  id: number
  title: string
  imgName: string
  href: string
}

interface NewsStoreI {
  news: Article[]
}

const newsStore = {
  state: {
    news: [
      {
        id: 1,
        title: 'Как искать работу',
        imgName: 'account_circle.png',
        href: '#',
      },
    ] as Article[],
  },
  getters: {
    getArticles (state: NewsStoreI): Article[] {
      return state.news
    },
  },
  actions: {
    async fetchArticles (action: any) {

    },
  },
  mutations: {
    updateNews (state: NewsStoreI, news: Article[]) {
      state.news = news
    },
  },
}

export {
  newsStore,
  type Article,
  type NewsStoreI
}
