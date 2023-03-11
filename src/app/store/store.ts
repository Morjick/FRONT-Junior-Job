import { createStore } from 'vuex'

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
  },
})

export default store
