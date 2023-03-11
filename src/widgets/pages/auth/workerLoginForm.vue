<template>
  <div class="workerLoginForm worker-form">
    <p class="validation-error-label"
v-if="v$.email.$errors[0]">
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

    <img
      style="cursor: pointer; pointer-events: all"
      src="~/shared/assets/images/singin-in-MyPay.png"
      alt=""
    />

    <ui-button
      text="Войти"
      style="font-weight: bold; margin: 10px 0"
      @click="sendForm"
    />

    <router-link
      to="/auth?form=worker&methods=singup"
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
  data: () => ({}),
  components: { UiButton, },
  props: {},
  computed: {},
  methods: {
    async sendForm () {},
  },
  mounted () {},
})
</script>
