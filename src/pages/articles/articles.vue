<template>
  <div class="articles">
    <short-news />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import shortNews from 'widgets/pages/news/shortNews.vue'

export default defineComponent({
  name: 'ArticlesPage',
  data: () => ({
    newsArr: [
      {
        imgSrc: '#',
        imgAlt: '#',
        articleTitle: 'Как зарегистрироваться в приложении "Мой налог?" ',
        id: 0,
      },
      {
        imgSrc: '#',
        imgAlt: '#',
        articleTitle: 'Самые необычные профессии',
        id: 1,
      },
      {
        imgSrc: '#',
        imgAlt: '#',
        articleTitle: 'Самые необычные профессии',
        id: 2,
      },
      {
        imgSrc: '#',
        imgAlt: '#',
        articleTitle: 'Самые необычные профессии',
        id: 3,
      },
      {
        imgSrc: '#',
        imgAlt: '#',
        articleTitle: 'Самые необычные профессии',
        id: 4,
      },
    ],
  }),
  components: {
    shortNews,
  },
  props: {},
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
.articles {
  padding: 33px 5px;
}
</style>
