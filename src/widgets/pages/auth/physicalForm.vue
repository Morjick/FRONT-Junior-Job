<template>
  <div class="worker-form physicalForm">
    <add-photo @loadImage="setImage" />
    <p class="validation-error-label"
v-if="v$.$error">
      Заполните все обязательные поля
    </p>

    <input
      class="ui-input"
      placeholder="Фамилия"
      v-model="v$.lastname.$model"
      :class="{ error: v$.lastname.$error }"
    />

    <input
      class="ui-input"
      placeholder="Имя"
      v-model="v$.name.$model"
      :class="{ error: v$.name.$error }"
    />

    <input
      class="ui-input"
      placeholder="Отчество"
      v-model="v$.patronomic.$model"
      :class="{ error: v$.patronomic.$error }"
    />

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

    <p></p>

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
import useVuelidate from '@vuelidate/core'
import { email, minLength, required } from '@vuelidate/validators'
import UiButton from 'widgets/ui/UiButton.vue'
import AddPhoto from './addPhoto.vue'

export default defineComponent({
  name: 'physicalForm',
  setup () {
    return {
      v$: useVuelidate(),
    }
  },
  data: () => ({
    lastname: '',
    name: '',
    patronomic: '',
    email: '',
    password: '',
    city: '',
    about: '',
    image: '',
    avatar: '',
  }),
  validations () {
    return {
      lastname: { required, minLength: minLength(2), },
      name: { required, minLength: minLength(2), },
      password: { required, minLength: minLength(6), },
      city: { required, },
      email: { required, email, },
      patronomic: { required, },
    }
  },
  components: { UiButton, AddPhoto, },
  props: {},
  computed: {},
  methods: {
    async setImage (image: any) {
      const formdata = new FormData()

      formdata.append('file', image)

      const { data, } = await this.axios.post('static/upload-image', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      this.image = image
      this.avatar = data.image.name
    },
    async sendForm () {
      const candidate = {
        firstname: this.name,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
        implication: 'physical',
        city: this.city,
        role: 'USER',
        abuot: this.about,
        avatar: this.avatar,
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
