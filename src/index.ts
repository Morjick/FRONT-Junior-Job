import { router, store } from 'app'
import { createApp, h } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'shared/assets/styles/main.scss'

const app = createApp({
  render: () =>h (App)
})

axios.defaults.baseURL = ''

app.use(router)
app.use(store)
app.use(VueAxios, axios)

app.mount('#app')