<template>
  <div class="articles">
    <ui-news :newsArr="newsArr" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiNews from 'pages/home/UiNews.vue'

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
    UiNews,
  },
  props: {},
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<<<<<<< HEAD
=======
<style lang="scss">
.articles {
  padding: 33px 5px;
}
</style>
>>>>>>> de1c7c7207ff7c93abbf6401f99a2f8283fff8df
