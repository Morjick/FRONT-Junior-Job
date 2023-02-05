import { router } from 'app'
import { createApp, h } from 'vue'
import App from './App.vue'
import './shared/assets/styles/main.scss'

const app = createApp({
  render: () =>h (App),
})

app.use(router)

app.mount('#app')