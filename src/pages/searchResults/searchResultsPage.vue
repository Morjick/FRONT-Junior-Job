<template>
  <section class="search-result">
    <ui-search-form class="search-result__search" />
    <ui-new-items :newItems="newVacancies" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiSearchForm from 'widgets/ui/UiSearchForm.vue'
import UiNewItems from 'widgets/ui/UiNewItems.vue'

export default defineComponent({
  name: 'searchResultsPage',
  components: {
    UiSearchForm,
    UiNewItems,
  },
  data: () => ({
    newVacancies: [
      {
        imgSrc: '#',
        imgAlt: '#',
        title: 'ООО «Демидовский огурец»',
        timing: 'Ежедневно 10:00-15:00',
        task: 'Собирать продукцию...',
        id: 0,
      },
      {
        imgSrc: '#',
        imgAlt: '#',
        title: 'Пятерочка',
        timing: 'По будням 9:00-16:00',
        task: 'Улыбаться клиентам у входа в...',
        id: 1,
      },
      {
        imgSrc: '#',
        imgAlt: '#',
        title: 'Елена',
        timing: 'Вторник 17:00-17:30',
        task: 'Выгуливать двух собачек...',
        id: 2,
      },
    ],
  }),
})
</script>

<style lang="scss">
.search-result {
  padding: 0 20px;
  &__search {
    margin: 0 auto;
    transform: translateY(-50%);
  }
}
</style>
