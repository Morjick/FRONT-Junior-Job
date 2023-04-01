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

function createErrorHandler (): any {
  try {
    app.config.errorHandler = () => {
      void router.push('/')
    }
  } catch (error: any) {
    void router.push('/server-error')
    return error
  }
}

createErrorHandler()

axios.defaults.baseURL = ''
axios.interceptors.response.use(
  (res: any) => res,
  async (err: IError | any) => {
    try {
      if (err.status >= 500 && err.status <= 600) {
        void router.push('/server-error')
      } else if (err.status >= 305 && err.status <= 401) {
        void router.push('')
      } else if (err.status === 404) {
        void router.push('/auth')
      } else {
        return err
      }
    } catch (error: any) {
      void router.push('/server-error')
      return error
    }
  }
)

app.use(router)
app.use(store)
app.use(VueAxios, axios)
app.use(CKEditor)

app.mount('#app')
