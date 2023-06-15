<template>
  <div class="vacancy">
    <h1 class="vacancy-title">Создание вакансии</h1>

    <div class="vacancy-form">
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

      <ui-button
        text="Отправить"
        @click="createVacancy"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Category } from 'pages/home/news.store'
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
    category: null as any,
  }),
  components: { UiInput, UiSelect, UiTextArea, UiButton, },
  props: {},
  computed: {
    categories (): Category[] {
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
        })

        this.$router.push('/')
        return data
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e)
      }
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
  }

  &-form {
    & div {
      margin-bottom: 20px;
    }
  }
}
</style>
