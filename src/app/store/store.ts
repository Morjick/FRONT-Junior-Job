import { createStore } from 'vuex'
import { notificationStore } from './modules/notification.store'
import { newsStore } from './modules/news.store'
import { themeSwitcher } from './modules/themeSwitcher.store'
import { screenStore } from './modules/screenStore.store'
import { AuthStore } from './modules/auth.store'
import { paymentStore } from './modules/payment.store'

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
    notification: notificationStore,
    news: newsStore,
    theme: themeSwitcher,
    screen: screenStore,
    auth: AuthStore,
    payment: paymentStore,
  },
})

export default store
