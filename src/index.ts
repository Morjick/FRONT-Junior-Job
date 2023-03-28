import { router, store } from 'app'
import { createApp, h } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import CKEditor from '@ckeditor/ckeditor5-vue'
import 'shared/assets/styles/main.scss'

const app = createApp({
  render: () => h(App),
})

app.config.errorHandler = function (err: any, vm: any, info: any) {
  if (err.search(/\d/g) !== -1) {
    const errCode = Number(err.match(/\d/g).join(''))

    if (errCode >= 500 && errCode <= 600) {
      void router.push('/server-error')
    } else if (errCode >= 305 && errCode <= 401) {
      void router.push('')
    } else if (errCode === 403) {
      void router.push('/auth')
    }
  }
}

axios.defaults.baseURL = ''

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(CKEditor)

app.mount('#app')
