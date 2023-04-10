interface themeSwitcherI {
  theme: string
}

const themeSwitcher = {
  state: {
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light',
  },
  mutations: {
    switchTheme (state: themeSwitcherI) {
      if (state.theme === 'light') {
        state.theme = 'dark'
        localStorage.setItem('theme', 'dark')
      } else {
        state.theme = 'light'
        localStorage.setItem('theme', 'light')
      }
    },
  },
  getters: {
    getTheme (state: themeSwitcherI) {
      return state.theme
    },
  },
}

export {
  themeSwitcher
}
