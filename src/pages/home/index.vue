<template>
  <section class="home">
    <ui-search-form class="main-search-form"/>
    <ui-news :newsArr="newsArr"/>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiSearchForm from 'widgets/ui/UiSearchForm.vue'
import UiNews from 'widgets/ui/UiNews.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    UiSearchForm,
    UiNews
  },
  data: () => ({
    newsArr: [
      {imgSrc: "#", imgAlt: "#", articleTitle: "Как стать востребованным сотрудником?"},
      {imgSrc: "#", imgAlt: "#", articleTitle: "Самые необычные профессии"}
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
