<template>
  <section class="home">
    <ui-search-form class="home__search" :data="cities" :dataProperty="cityProperty"/>
    <div class="home__subtitle">Новые вакансии</div>
    <ui-new-items :newItems="newVacancies"/>
    <ui-news :newsArr="newsArr"/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiSearchForm from 'widgets/ui/UiSearchForm.vue'
import UiNews from './UiNews.vue'
import UiNewItems from 'widgets/ui/UiNewItems.vue'
import Cities from 'cities-info'

export default defineComponent({
  name: 'HomePage',
  components: {
    UiSearchForm,
    UiNews,
    UiNewItems
  },
  data: () => ({
    newsArr: [
      { imgSrc: '#', imgAlt: '#', articleTitle: 'Как стать востребованным сотрудником?', id: 0 },
      { imgSrc: '#', imgAlt: '#', articleTitle: 'Самые необычные профессии', id: 1 }
    ],
    newVacancies: [
      { imgSrc: '#', imgAlt: '#', title: 'ООО «Демидовский огурец»', timing: 'Ежедневно 10:00-15:00', task: 'Собирать продукцию...', id: 0 },
      { imgSrc: '#', imgAlt: '#', title: 'Пятерочка', timing: 'По будням 9:00-16:00', task: 'Улыбаться клиентам у входа в...', id: 1 },
      { imgSrc: '#', imgAlt: '#', title: 'Елена', timing: 'Вторник 17:00-17:30', task: 'Выгуливать двух собачек...', id: 2 }
    ],
    cities: Cities.getCity((element: any) =>  element, ['name_with_type']),
    cityProperty: 'name_with_type'
  }),
  computed: {
  },
  methods: {
  },
  mounted () {
  }
})
</script>
