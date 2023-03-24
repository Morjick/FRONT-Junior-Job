import { createStore } from 'vuex'
import { newsStore } from 'pages/home/news.store'

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
  },
})

export default store
