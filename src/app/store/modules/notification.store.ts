import axios from 'axios'
import { type ActionContext } from 'vuex'

interface notificationI {
  id: number
  text: string
  icon: string
  callback?: boolean
}

interface notificationStoreI {
  notification: notificationI[]
}

const notificationStore = {
  state: (): notificationStoreI => ({
    notification: [],
  }),
  getters: {
    getNotifications (state: notificationStoreI): notificationI[] {
      return state.notification
    },
  },
  actions: {
    async getNotification (context: ActionContext<'S', 'R'>) {
      const { data, }: any = await axios.get('notification/get-many')
      const notifications = data.notifications

      context.commit('setNotifications', notifications)
    },
  },
  mutations: {
    setNotifications (state: notificationStoreI, payload: notificationI[]) {
      state.notification = payload
    },
  },
}

export { notificationStore, type notificationI, type notificationStoreI }
