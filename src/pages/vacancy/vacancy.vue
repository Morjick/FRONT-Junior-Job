<template>
  <div class="vacancy">
    <div
      v-for="item in vacancy"
      :key="item.id"
      class="vacancy-item"
      @click="pushToCavancyPage(item)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<script lang="ts">
import { Vacancy } from 'app/store/modules/news.store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VacancyPage',
  data: () => ({
    vacancy: [] as Vacancy[],
  }),
  components: {},
  props: {},
  computed: {},
  methods: {
    pushToCavancyPage (vacancy: Vacancy) {
      this.$router.push(`/vacancy/${vacancy.href}`)
    },
    async getVacancy () {
      try {
        const query = []

        if (this.$route.query.title) {
          query.push(`title=${this.$route.query.title}`)
        }

        const { data, } = await this.axios.get(`/vacancy/search?${query.join('&')}`)

        this.vacancy = data.vacancies
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
.vacancy {
  padding: 27px 32px;

  &-item {
    margin-bottom: 24px;

    color: var(--color-title);
    font-family: 'Marmelad';
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 30px;

    cursor: pointer;
  }
}
</style>
