<template>
  <div @loadImage="setImage" class="worker-form">
    <add-photo />
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
      type="date"
      class="ui-input"
      placeholder="Дата рождения"
      v-model="date"
    >
    <input 
      class="ui-input"
      placeholder="Город"
      v-model="v$.city.$model"
      :class="{ error: v$.city.$error }"
    >
    <input 
      class="ui-input"
      placeholder="Место учёбы"
      v-model="v$.learn.$model"
      :class="{ error: v$.learn.$error }"
    >
    <input 
      class="ui-input"
      placeholder="ИНН"
      v-model="v$.inn.$model"
      :class="{ error: v$.inn.$error }"
    >
    <input 
      class="ui-input"
      placeholder="Предлагаемая услуга"
      v-model="v$.service.$model"
      :class="{ error: v$.service.$error }"
    >

    <textarea placeholder="Резюме"></textarea>

    <p>Чтобы откликнуться на вакансии, необходимо авторизоваться через приложение  «Мой налог»</p>

    <ui-button 
      text="Зарегистрироваться" 
      style="font-weight: bold;" 
      @click="sendForm"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiButton from 'widgets/ui/UiButton.vue'
import AddPhoto from './addPhoto.vue'
import { useVuelidate } from '@vuelidate/core'
import { minLength, required } from '@vuelidate/validators'


export default defineComponent({
  name: 'workerForm',
  setup () {
    return {
      v$: useVuelidate()
    }
  },
  data: () => ({
    lastname: '',
    name: '',
    email: '',
    password: '',
    birsday: '',
    city: '',
    learn: '',
    inn: '',
    service: '',
    resume: '',
    image: ''
  }),
  validations () {
    return {
      lastname: { required, minLength: minLength(2) },
      name: { required, minLength: minLength(2) },
      password: { required, minLength: minLength(6) },
      city: { required,  },
      learn: { required,  },
      inn: { required,  },
      service: { required,  },
    }
  },
  components: { AddPhoto, UiButton },
  props: {},
  computed: {},
  methods: {
    setImage (image: string) {
      this.image = image
    },
    async sendForm () {
      const isError = await this.v$.$validate()
      console.warn(isError);
      
    }
  },
  mounted () {}
})
</script>