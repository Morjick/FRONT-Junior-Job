import { router, store } from 'app'
import { createApp, h } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import CKEditor from '@ckeditor/ckeditor5-vue'
import { type IError } from 'widgets/interface/error'
import 'shared/assets/styles/main.scss'

const app = createApp({
  render: () => h(App),
})

try {
  app.config.errorHandler = (err: IError | any): void => {
    const errCode = Number(err.message.match(/\d/g)?.join(''))
    if (errCode >= 500 && errCode <= 600) {
      void router.push('/server-error')
    } else if (errCode >= 305 && errCode <= 401) {
      void router.push('')
    } else if (errCode === 403) {
      void router.push('/auth')
    } else {
      throw err
    }
  }
} catch (error: IError | any) {
  throw error.message
}

axios.defaults.baseURL = ''
axios.interceptors.response.use(
  (res: any) => res,
  (err: IError | any) => {
    throw new Error(err)
  }
)

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(CKEditor)

app.mount('#app')
