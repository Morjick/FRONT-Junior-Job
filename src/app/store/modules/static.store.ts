import axios from 'axios'

const defaultImageUrl = 'http://junior-job.ru/api/static/image/'

interface StaticState {
  defaultImageUrl: string
}

const StaticStore = {
  state: (): StaticState => ({
    defaultImageUrl,
  }),
  getters: {
    defaultImageUrl (store: StaticState) {
      return store.defaultImageUrl
    },
  },
  actions: {
    async getImage (context: any, imageName: string) {
      const url = defaultImageUrl + imageName
      const image = await axios.get(url)

      return image
    },
  },
  mutations: {},
}

export {
  StaticStore,
  type StaticState
}
