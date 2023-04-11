interface themeSwitcherI {
  theme: string
}

const themeSwitcher = {
  state: {
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
  },
  mutations: {
    switchTheme (state: themeSwitcherI) {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', state.theme)
    },
  },
  getters: {
    getTheme (state: themeSwitcherI) {
      return state.theme
    },
  },
}

export {
  themeSwitcher,
  type themeSwitcherI
}
