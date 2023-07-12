<template>
  <div class="worker-form legalForm">
    <p style="margin: 20px 0 30px">
      Оставьте заявку на регистрацию, мы рассмотрим ее в ручном режиме и поможем
      настроить работу индивидуально
    </p>
    <add-photo text="Добавьте логотип <br> копнании" />
    <p class="validation-error-label"
v-if="v$.$error">
      Заполните все обязательные поля
    </p>

    <input
      class="ui-input"
      placeholder="Имя"
      v-model="v$.name.$model"
      :class="{ error: v$.name.$error }"
    />

    <p
      class="validation-error-label"
      v-if="
        v$.inn.$errors[0]?.$params?.type == 'minLength' ||
        v$.inn.$errors[0]?.$params?.type == 'maxLength'
      "
    >
      ИНН должен содержать 12 символов
    </p>
    <input
      class="ui-input"
      placeholder="ИНН"
      v-model="v$.inn.$model"
      :class="{ error: v$.inn.$error }"
    />

    <textarea
      placeholder="Контактная информация"
      v-model="contact"
    ></textarea>

    <input
      class="ui-input"
      placeholder="Email"
      v-model="v$.email.$model"
      :class="{ error: v$.email.$error }"
    />

    <input
      class="ui-input"
      placeholder="Город"
      v-model="v$.city.$model"
      :class="{ error: v$.city.$error }"
    />

    <textarea
      placeholder="Какая помощь необходима?"
      v-model="about"
    ></textarea>

    <ui-button
      text="Зарегистрироваться"
      style="font-weight: bold; margin: 10px 0"
      @click="sendForm"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AddPhoto from './addPhoto.vue'
import useVuelidate from '@vuelidate/core'
import { email, maxLength, minLength, required } from '@vuelidate/validators'
import UiButton from 'widgets/ui/UiButton.vue'

export default defineComponent({
  name: 'legalForm',
  data: () => ({
    name: '',
    inn: '',
    email: '',
    city: '',
    contact: '',
    about: '',
  }),
  setup () {
    return {
      v$: useVuelidate(),
    }
  },
  validations () {
    return {
      name: { required, },
      inn: { required, minLength: minLength(12), maxLength: maxLength(12), },
      contact: { required, },
      email: { required, email, },
      password: { required, minLength: minLength(6), },
      city: { required, },
    }
  },
  components: { AddPhoto, UiButton, },
  props: {},
  computed: {},
  methods: {
    async sendForm () {
      const candidate = {
        firstname: this.name,
        email: this.email,
        implication: 'legal',
        city: this.city,
        role: 'USER',
        abuot: this.about,
      }

      const { data, }: any = await this.axios.post('/auth/sing-up', candidate)
      this.$store.commit('setMainUserData', data.user)
      this.$store.commit('setToken', data.token)
      this.$store.commit('setIsAuth', true)
      localStorage.setItem('jj-token', data.token)

      this.$router.push('/')
    },
  },
  mounted () {},
})
</script>
