import { router, store } from 'app'
import { createApp, h } from 'vue'
import App from './App.vue'
import './shared/assets/styles/main.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp({
  render: () =>h (App)
})

axios.defaults.baseURL = ''

app.use(router)
app.use(store)
app.use(VueAxios, axios)

app.mount('#app')