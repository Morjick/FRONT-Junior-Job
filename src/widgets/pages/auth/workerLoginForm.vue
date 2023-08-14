<template>
  <div class="workerLoginForm worker-form">
    <p
      class="validation-error-label"
      v-if="v$.email.$errors[0]"
    >
      Введите корректный email
    </p>
    <input
      class="ui-input"
      placeholder="Email"
      v-model="v$.email.$model"
      :class="{ error: v$.email.$error }"
    />

    <p
      class="validation-error-label"
      v-if="v$.password.$errors[0]?.$params?.type == 'minLength'"
    >
      Минимальная длинна пароля - 6 символов
    </p>
    <input
      type="password"
      class="ui-input"
      placeholder="Пароль"
      v-model="v$.password.$model"
      :class="{ error: v$.password.$error }"
    />
    <p
      class="validation-error-label"
      v-if="error.length"
    >
      {{ error }}
    </p>

    <ui-button
      text="Войти"
      style="font-weight: bold; margin: 10px 0"
      @click="sendForm"
    />

    <router-link
      to="/join?methods=singup"
      style="width: 100%; margin: 0 auto; text-align: center; font-size: 25px"
      >Зарегистрироваться</router-link
    >
  </div>
</template>

<script lang="ts">
import useVuelidate from '@vuelidate/core'
import { email, minLength, required } from '@vuelidate/validators'
import { defineComponent } from 'vue'
import UiButton from 'widgets/ui/UiButton.vue'

export default defineComponent({
  name: 'workerLoginForm',
  setup () {
    return {
      v$: useVuelidate(),
    }
  },
  validations () {
    return {
      password: { required, minLength: minLength(6), },
      email: { required, email, },
    }
  },
  data: () => ({
    email: '',
    password: '',
    error: '',
  }),
  components: { UiButton, },
  props: {},
  computed: {},
  methods: {
    async sendForm () {
      try {
        const response: any = await this.axios.post('auth/sing-in', {
          email: this.email, password: this.password,
        })

        if (response.response?.data?.ok === false) {
          this.error = response.response?.data?.message
          return
        }

        localStorage.setItem('jj-token', response.data.token)
        this.$store.dispatch('login', response.data)

        this.$router.push('/')
      } catch (e) {
      }
    },
  },
  mounted () {},
})
</script>
