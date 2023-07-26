import axios from 'axios'
import { type ActionContext } from 'vuex'

enum UserRoleEnum {
  user = 'USER',
  admin = 'ADMIN',
  root = 'ROOT'
}

interface UserI {
  id: number
  firstname: string
  lastname: string
  email: string
  password: string
  implication: string
  learn: string
  inn: string
  city: string
  role: UserRoleEnum
  modarator?: UserI
  age?: number
  birsday?: string
  token?: string
  avatar: string
}

interface AuthStoreI {
  token?: string | null
  userFirstname?: string
  userLastname?: string
  userEmail?: string
  userId?: number | null
  isAuth: boolean
  mainUser?: UserI | null
}

const AuthStore = {
  state: (): AuthStoreI => ({
    token: null,
    userEmail: '',
    userFirstname: '',
    userLastname: '',
    userId: null,
    isAuth: false,
    mainUser: null,
  }),
  getters: {
    getToken (state: AuthStoreI) {
      return state.token
    },
    getMainUser (state: AuthStoreI) {
      return state.mainUser
    },
    isAuth (state: AuthStoreI) {
      return state.isAuth
    },
  },
  actions: {
    async checkToken (context: ActionContext<'S', 'R'>, state: AuthStoreI) {
      const { data: response, }: any = await axios.post('auth/check-token')

      if (!response.ok) return response.ok

      context.commit('setMainUserData', response.user)
      context.commit('setToken', response.token)
      context.commit('setIsAuth', response.ok)

      return response.ok
    },
    async login (context: ActionContext<'S', 'R'>, payload: any) {
      context.commit('setMainUserData', payload.user)
      context.commit('setToken', payload.token)
      context.commit('setIsAuth', payload.ok)
    },
    async signOut (context: ActionContext<'S', 'R'>) {
      context.commit('setMainUserData', {})
      context.commit('setToken', null)
      context.commit('setIsAuth', false)
      localStorage.removeItem('jj-token')
    },
  },
  mutations: {
    setMainUserData (state: AuthStoreI, user: UserI) {
      state.mainUser = user
      if (user.token) {
        state.token = user.token
      }
    },
    setToken (state: AuthStoreI, token: string) {
      state.token = token
    },
    setIsAuth (state: AuthStoreI, key: boolean) {
      state.isAuth = key
    },
  },
}

export {
  AuthStore,
  type AuthStoreI,
  type UserI,
  UserRoleEnum
}
