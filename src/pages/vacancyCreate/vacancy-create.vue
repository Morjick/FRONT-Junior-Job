<template>
  <div class="vacancy">
    <h1 class="vacancy-title">Создание вакансии</h1>

    <div class="vacancy-form">
      <input
        type="file"
        @input="setvacancyAvatar"
      >

      <ui-input
        v-model="title"
        placeholder="Название"
      />

      <ui-select
        placeholder="Категории"
        itemText="title"
        :items="categories"
        :isStringObject="true"
        @select="setCategory"
      />

      <ui-input
        v-model="time"
        placeholder="Время"
        inputType="time"
      />

      <ui-input
        v-model="place"
        placeholder="Место"
      />

      <ui-text-area
        v-model="body"
        placeholder="Описание"
      />

      <div class="checkbox">
        <input
          type="checkbox"
          id="experience"
          class="checkbox__input"
        >
        <label
          for="experience"
          class="checkbox__label"
        >
          Необходим опыт работы
        </label>
      </div>

      <div class="checkbox">
        <input
          type="checkbox"
          id="near"
          class="checkbox__input"
        >
        <label
          for="near"
          class="checkbox__label"
        >
          Рядом с вами
        </label>
      </div>

      <ui-button
        text="Отправить"
        @click="createVacancy"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { CategoryI } from 'app/store/modules/news.store'
import { defineComponent } from 'vue'
import UiButtonVue from 'widgets/ui/UiButton.vue'
import UiInputVue from 'widgets/ui/UiInput.vue'
import UiSelectVue from 'widgets/ui/UiSelect.vue'
import UiTextareaVue from 'widgets/ui/UiTextarea.vue'

const UiInput: any = UiInputVue
const UiSelect: any = UiSelectVue
const UiTextArea: any = UiTextareaVue
const UiButton: any = UiButtonVue

export default defineComponent({
  name: 'VacancyCreatePage',
  data: () => ({
    title: '',
    time: '',
    place: '',
    body: '',
    avatar: '',
    category: null as any,
  }),
  components: { UiInput, UiSelect, UiTextArea, UiButton, },
  props: {},
  computed: {
    categories (): CategoryI[] {
      return this.$store.getters.getCategory
    },
  },
  methods: {
    setCategory (data: any) {
      this.category = { ...data, }
    },
    async createVacancy () {
      try {
        const { data, } = await this.axios.post('vacancy/create-vacancy', {
          title: this.title,
          show: true,
          category: this.category.id,
          avatar: this.avatar,
          body: this.body,
        })

        this.$router.push('/')
        return data
      } catch (e) {
        return e
      }
    },
    async setvacancyAvatar (event: any) {
      const image = event.target.files[0]

      if (!image) return null

      const formdata = new FormData()

      formdata.append('file', image)

      const { data, } = await this.axios.post('static/upload-image', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      this.avatar = data.image.name
    },
  },
  mounted () { },
})
</script>

<style lang="scss">
.vacancy {
  padding: 27px 32px;

  &-title {
    color: var(--color-textarea);
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 31px;
    margin-bottom: 20px;
  }

  &-form {
    & div {
      margin-bottom: 20px;
    }
  }
}
.checkbox {
  display: flex;
  width: 305px;
  margin: 0 auto;
  &__input {
    min-width: 24px;
    min-height: 24px;
    margin-right: 10px;
    cursor: pointer;
  }
  &__label {
    font-size: 25px;
    color: var(--color-alternative);
    cursor: pointer;
  }
}
</style>
