import { router, store } from 'app'
import { createApp, h } from 'vue'
import App from './App.vue'
import './shared/assets/styles/main.scss'

const app = createApp({
  render: () =>h (App),
})

app.use(router)
app.use(store)

app.mount('#app')