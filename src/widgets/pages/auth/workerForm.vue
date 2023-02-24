<template>
  <div class="worker-form">
    <input 
      class="ui-input"
      placeholder="Фамилия"
      v-model="lastname"
    >
    <input 
      class="ui-input"
      placeholder="Имя"
      v-model="name"
    >
    <input 
      type="password"
      class="ui-input"
      placeholder="Пароль"
      v-model="password"
    >
    <input 
      type="date"
      class="ui-input"
      placeholder="Дата рождения"
      v-model="birsday"
    >
    <input 
      class="ui-input"
      placeholder="Город"
      v-model="city"
    >
    <input 
      class="ui-input"
      placeholder="Место учёбы"
      v-model="learn"
    >
    <input 
      class="ui-input"
      placeholder="ИНН"
      v-model="inn"
    >
    <input 
      class="ui-input"
      placeholder="Предлагаемая услуга"
      v-model="service"
    >

    <textarea placeholder="Резюме"></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'workerForm',
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
  }),
  components: {},
  props: {},
  computed: {},
  methods: {
    ll (event: any) {
      console.log(event)
    }
  },
  mounted () {}
})
</script>