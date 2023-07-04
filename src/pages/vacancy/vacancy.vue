<template>
  <div class="vacancy">
    <div
      v-for="item in vacancy"
      :key="item.id"
      class="vacancy-item"
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
  data: () => ({}),
  components: {},
  props: {},
  computed: {
    vacancy (): Vacancy[] {
      return this.$store.getters.getVacancy
    },
  },
  methods: {},
  mounted () {},
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
  }
}
</style>
