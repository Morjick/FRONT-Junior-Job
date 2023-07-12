enum theme {
  dark = 'dark',
  light = 'light'
}

interface themeStateI {
  theme: theme
}

const themeSwitcher = {
  state: (): themeStateI => ({
    theme: localStorage.getItem('theme')
      ? (localStorage.getItem('theme') === theme.light ? theme.light : theme.dark)
      : theme.light,
  }),
  mutations: {
    switchTheme (state: themeStateI, payload: theme) {
      state.theme = payload
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
  type theme,
  type theme as ThemeEnum
}
