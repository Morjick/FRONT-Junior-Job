<template>
  <section class="home">
    <ui-search-form class="main-search-form"/>
    <ui-news :newsArr="newsArr"/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiSearchForm from 'widgets/ui/UiSearchForm.vue'
import UiNews from './UiNews.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    UiSearchForm,
    UiNews
  },
  data: () => ({
    newsArr: [
      {imgSrc: "#", imgAlt: "#", articleTitle: "Как стать востребованным сотрудником?", id: 0},
      {imgSrc: "#", imgAlt: "#", articleTitle: "Самые необычные профессии", id: 1}
    ]
  }),
  computed: {
  },
  methods: {
  },
  mounted () {
  }
})
</script>
