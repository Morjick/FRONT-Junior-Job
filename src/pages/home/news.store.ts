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
        imgName: '#',
        href: '/',
      },
      {
        id: 2,
        title: 'Как не потерять работу',
        imgName: '#',
        href: '/',
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
