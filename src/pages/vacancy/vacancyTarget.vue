<template>
  <div class="vacancy-target">
    <h1>{{ vacancy.title }}</h1>

    <p class="vacancy-target-autor-name">
      {{ vacancy.author?.firstname }} {{ vacancy.author?.lastname }}
    </p>

    <p v-if="vacancy.body">{{ vacancy.body }}</p>
    <p v-else>Создатель вакансии не оставил описание</p>

    <h2 class="vacancy-target-candidate-title">Кандидаты:</h2>

    <div v-if="responses.length"></div>
    <p>Нет откликов. Станьте первым!</p>

    <ui-button
      text="Откликнуться"
      style="margin: 10px 0; max-width: 300px;"
      @click="addResponse"
    />
  </div>
</template>

<script lang="ts">
import { ResponseI, Vacancy } from 'app/store/modules/news.store'
import { defineComponent } from 'vue'
import UiButtonVue from 'widgets/ui/UiButton.vue'

const UiButton: any = UiButtonVue

export default defineComponent({
  name: 'vacancyTarget',
  data: () => ({
    vacancy: {} as Vacancy,
    responses: [] as ResponseI[],
    body: '',
  }),
  components: { UiButton, },
  props: {},
  computed: {},
  methods: {
    async getVacancy () {
      try {
        const data: any =
          await this.axios.get(`vacancy/get-vacance?href=${this.$route.params?.href}`)

        const vacancy: Vacancy = data.data.vacancy

        this.vacancy = vacancy
        this.responses = vacancy.response
      } catch (e) {
        return false
      }
    },
    async addResponse () {
      try {
        await this.axios.post('response/create', {
          targetId: this.vacancy.id,
          body: this.body,
        })
      } catch (e) {
        return e
      }
    },
  },
  mounted () {
    this.getVacancy()
  },
})
</script>

<style lang="scss">
.vacancy-target {
  padding: 20px 40px;

  h1 {
    font-size: 32px;
    font-weight: bold;

    margin-bottom: 20px;
  }

  &-autor-name {
    font-size: 24px;
    font-weight: bold;
    color: var(--color-alternative);
    margin-bottom: 20px;
  }

  &-candidate-title {
    font-weight: bold;
    font-size: 25px;
    margin: 15px 0;
  }
}
</style>
