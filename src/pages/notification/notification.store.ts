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
    notification: [
      {
        text: 'Елена выбрала вас исполнителем',
        id: 1,
        icon: 'change',
      },
      {
        text: 'Елена выбрала вас исполнителем',
        id: 2,
        icon: 'done',
        callback: true,
      },
      {
        text: 'Елена выбрала вас исполнителем',
        id: 3,
        icon: 'article',
      },
    ],
  }),
  getters: {
    getNotifications (state: notificationStoreI): notificationI[] {
      return state.notification
    },
  },
}

export { notificationStore, type notificationI, type notificationStoreI }
