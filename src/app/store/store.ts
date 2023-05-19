import { createStore } from 'vuex'
import { newsStore } from 'pages/home/news.store'
import { themeSwitcher } from './themeSwitcher.store'
import { screenStore } from './screenStore.store'

interface usersStore {
  users: object[]
}

const userStore = {
  state: () => ({
    users: [
      {
        id: 1,
        name: 'Matvey',
        age: 21,
      },
    ],
  }),
  getters: {
    getUsers (state: usersStore) {
      return state.users
    },
  },
}

const store = createStore({
  modules: {
    users: userStore,
    news: newsStore,
    theme: themeSwitcher,
    screen: screenStore,
  },
})

export default store
