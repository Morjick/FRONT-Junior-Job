enum theme {
  dark = 'dark',
  light = 'light'
}

interface themeStateI {
  theme: theme
}

const themeSwitcher = {
  state: {
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : theme.light,
  },
  mutations: {
    switchTheme (state: themeStateI) {
      state.theme = state.theme === theme.light ? theme.dark : theme.light
      localStorage.setItem('theme', state.theme)
    },
  },
  getters: {
    getTheme (state: themeStateI) {
      return state.theme
    },
  },
}

export {
  themeSwitcher,
  theme
}
