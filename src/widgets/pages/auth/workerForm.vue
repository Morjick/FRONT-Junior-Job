<template>
  <div
    @loadImage="setImage"
    class="worker-form"
  >
    <add-photo @loadImage="setImage" />

    <input
      class="ui-input"
      placeholder="Фамилия *"
      v-model="v$.lastname.$model"
      :class="{ error: v$.lastname.$error }"
    />

    <input
      class="ui-input"
      placeholder="Имя *"
      v-model="v$.name.$model"
      :class="{ error: v$.name.$error }"
    />

    <input
      class="ui-input"
      placeholder="Email *"
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
      placeholder="Пароль *"
      v-model="v$.password.$model"
      :class="{ error: v$.password.$error }"
    />

    <span class="label">Введите дату рождение</span>
    <input
      type="date"
      class="ui-input"
      placeholder="Дата рождения *"
      v-model="date"
      style="margin-bottom: 35px;"
    />
    <input
      class="ui-input"
      placeholder="Город *"
      v-model="v$.city.$model"
      :class="{ error: v$.city.$error }"
    />
    <input
      class="ui-input"
      placeholder="Место учёбы *"
      v-model="v$.learn.$model"
      :class="{ error: v$.learn.$error }"
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

    <ui-select
      :multiselect="true"
      :items="compliance"
      itemText=""
      itemKey=""
      style="margin-bottom: 20px; color: var(--color-alternative)"
      placehlod="Компетенции"
      @select="addCompliance"
    />

    <div class="compliance-container">
      <div
        v-for="item in checkCompliance"
        :key="item"
        class="compliance-item"
      >{{ item }}</div>
    </div>

    <textarea
      placeholder="Резюме"
      v-model="about"
    ></textarea>

    <p
      class="validation-error-label"
      style="max-width: 300px;"
      v-if="errorMessage.length"
    >
      {{ errorMessage }}
    </p>
    <ui-button
      text="Зарегистрироваться"
      style="font-weight: bold; margin: 10px 0"
      @click="sendForm"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiButton from 'widgets/ui/UiButton.vue'
import UiSelectVue from 'widgets/ui/UiSelect.vue'
import AddPhoto from './addPhoto.vue'
import { useVuelidate } from '@vuelidate/core'
import { email, maxLength, minLength, required } from '@vuelidate/validators'

const UiSelect: any = UiSelectVue

export default defineComponent({
  name: 'workerForm',
  setup () {
    return {
      v$: useVuelidate(),
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
    image: '',
    date: '',
    implication: 'physical',
    about: '',
    compliance: [
      'Вежливость',
      'Грамотная устная речь',
      'Грамотная письменная речь',
      'Общение с клиентами',
      'Навыки презентации',
      'Харизма',
      'Коммуникабельность',
      'Публичные выступления',
      'Уборка',
      'Готовка',
      'Шитье',
      'Рукоделие',
      'Уход за  домашними животными',
      'Уход за детьм',
      'Уход за пожилыми людьми',
      'Фотосъемка',
      'Видеосъемка',
      'Видеомонтаж',
      'Работа с фотографиями',
      'Управляю транспортным средством, требующим специальных прав',
      'Управляю транспортным средством, не требующим специальных прав',
      'Работа с компьютером',
      'Работа с документами',
      'MS Office',
      'Программирование',
      'Дизайн',
      'Работа с продукцией',
      'Учет',
      'Есть медкнижка',
      'Работа с сельско-хозяйственными культурами',
      'Работа с кормовыми животными',
      'Ремонт',
      'Строительство',
    ],
    checkCompliance: [] as any[],
    avatar: '' as string,
    errorMessage: '',
  }),
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
    }
  },
  components: { AddPhoto, UiButton, UiSelect, },
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
      try {
        const isError = await this.v$.$validate()
        if (isError) return false

        const candidate = {
          firstname: this.name,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
          implication: 'physical',
          birthday: this.birsday,
          learn: this.learn,
          inn: this.inn,
          city: this.city,
          about: this.about,
          role: 'USER',
          avatar: this.avatar,
        }

        const data: any = await this.axios.post('/auth/sing-up', candidate)

        if (!data?.response?.data.ok) {
          this.errorMessage = data?.response?.data.message
          return
        }

        this.$store.commit('setMainUserData', data.data.user)
        this.$store.commit('setToken', data.data.token)
        this.$store.commit('setIsAuth', true)
        localStorage.setItem('jj-token', data.data.token)

        this.$router.push('/')
      } catch (e) {
      }
    },
    addCompliance (compliance: any, item: any) {
      if (!compliance || !item) {
        return false
      }
      this.checkCompliance.push(item)
      this.compliance = [ ...this.compliance, ]
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.ui-input {
  color: var(--color-alternative);
}

.compliance-container {
  max-width: 300px;
  margin-bottom: 20px;
}

.label {
  color: var(--color-primery);
  margin: 10px 5px 5px;
}

.compliance-item {
  display: inline-block;
  background: var(--color-font-alternative);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 16px;
  color: var(--admin-alternative-color-font);
  margin: 0 5px 5px 0;
}
</style>
