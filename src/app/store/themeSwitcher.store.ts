enum theme {
  dark = 'dark',
  light = 'light'
}

interface themeSwitcherI {
  theme: theme
}

const themeSwitcher = {
  state: {
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : theme.light,
  },
  mutations: {
    switchTheme (state: themeSwitcherI) {
      state.theme = state.theme === theme.light ? theme.dark : theme.light
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
  theme
}
