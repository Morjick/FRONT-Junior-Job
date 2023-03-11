<template>
  <div class="worker-form physicalForm">
    <add-photo @loadImage="setImage" />
    <p
      class="validation-error-label"
      v-if="v$.$error"
    >Заполните все обязательные поля</p>

    <input
      class="ui-input"
      placeholder="Фамилия"
      v-model="v$.lastname.$model"
      :class="{ error: v$.lastname.$error }"
    >

    <input
      class="ui-input"
      placeholder="Имя"
      v-model="v$.name.$model"
      :class="{ error: v$.name.$error }"
    >

    <input
      class="ui-input"
      placeholder="Имя"
      v-model="v$.patronomic.$model"
      :class="{ error: v$.patronomic.$error }"
    >

    <input
      class="ui-input"
      placeholder="Email"
      v-model="v$.email.$model"
      :class="{ error: v$.email.$error }"
    >

    <p
      class="validation-error-label"
      v-if="v$.password.$errors[0]?.$params?.type == 'minLength'"
    >Минимальная длинна пароля - 6 символов</p>
    <input
      type="password"
      class="ui-input"
      placeholder="Пароль"
      v-model="v$.password.$model"
      :class="{ error: v$.password.$error }"
    >

    <p></p>

    <input
      class="ui-input"
      placeholder="Город"
      v-model="v$.city.$model"
      :class="{ error: v$.city.$error }"
    >

    <textarea placeholder="Какая помощь необходима?"></textarea>

    <p style="margin: 20px 0 30px;">Чтобы создавать вакансии, <br> необходимо авторизоваться <br> через Госуслуги</p>
    <img style="cursor: pointer; pointer-events: all;"
src="~/shared/assets/images/singin-in-MyPay.png"
alt="">

    <ui-button
      text="Зарегистрироваться"
      style="font-weight: bold; margin: 10px 0;"
      @click="sendForm"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useVuelidate from '@vuelidate/core'
import { email, maxLength, minLength, required } from '@vuelidate/validators'
import UiButton from 'widgets/ui/UiButton.vue'
import AddPhoto from './addPhoto.vue'

export default defineComponent({
  name: 'physicalForm',
  setup () {
    return {
      v$: useVuelidate(),
    }
  },
  data: () => ({}),
  validations () {
    return {
      lastname: { required, minLength: minLength(2), },
      name: { required, minLength: minLength(2), },
      password: { required, minLength: minLength(6), },
      city: { required, },
      learn: { required, },
      inn: { required, minLength: minLength(12), maxLength: maxLength(12), },
      service: { required, },
      email: { required, email, },
      patronomic: { required, },
    }
  },
  components: { UiButton, AddPhoto, },
  props: {},
  computed: {},
  methods: {
    async sendForm () {
      const isError = await this.v$.$validate()
      if (isError) return
    },
  },
  mounted () {},
})
</script>
