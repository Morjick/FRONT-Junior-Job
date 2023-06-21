enum operationType {
  replenish = 'replenish',
  waste = 'waste'
}

interface paymentOperationsI {
  operationType: operationType
  sum: number
  date: string
  text: string
  id: number
}

interface paymentStateI {
  paymentHistory: paymentOperationsI[]
}

const paymentStore = {
  state: {
    paymentHistory: [
      {
        operationType: 'waste',
        sum: 50,
        date: '24.03.21',
        text: 'Откли на вакансию',
        id: 1,
      },
      {
        operationType: 'replenish',
        sum: 500,
        date: '25.03.21',
        text: 'Пополнение',
        id: 2,
      },
      {
        operationType: 'waste',
        sum: 50,
        date: '26.03.21',
        text: 'Откли на вакансию',
        id: 3,
      },
      {
        operationType: 'waste',
        sum: 50,
        date: '27.03.21',
        text: 'Откли на вакансию',
        id: 4,
      },
    ] as paymentOperationsI[],
  },
  getters: {
    getPaymentHistory (state: paymentStateI) {
      return state.paymentHistory
    },
  },
}

export {
  paymentStore,
  type paymentOperationsI
}
