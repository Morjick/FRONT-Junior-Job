interface screenStoreStateI {
  screenWidth: number
}

const screenStore = {
  state: {
    screenWidth: window.innerWidth,
  },

  mutations: {
    updateScreenWidth (state: screenStoreStateI) {
      state.screenWidth = window.innerWidth
    },
  },

  getters: {
    getScreenWidth (state: screenStoreStateI) {
      return state.screenWidth
    },
  },
}

export {
  screenStore
}
