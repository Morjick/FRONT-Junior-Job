<template>
  <section class="news">
    <div
      class="news__title"
      v-if="news.length"
    >
    Статьи
  </div>

    <a
      class="article"
      v-for="article in news"
      :key="article.id"
      :href="article.href"
    >
      <img
        :src="getImgUrl(article.imgName)"
        class="article__img"
      >
      <div class="article__subtitle">{{ article.title }}</div>
    </a>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Article } from './news.store'

export default defineComponent({
  name: 'UiNews',
  props: {},
  computed: {
    news (): Article[] {
      return this.$store.getters.getArticles
    },
  },
  methods: {
    getImgUrl (imgName: string) {
      return require('shared/assets/images/' + imgName).default
    },
  },
  async mounted () {
    this.$store.dispatch('fetchArticles')
  },
})
</script>

<style lang="scss">
.news__title {
  font-weight: 600;
  font-size: 25px;
  color: var(--color-font);
  margin-bottom: 15px;
}

.article {
  display: block;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.1s all;
}

.article:hover {
  transform: scale(1.05);
}

.article__img {
  width: 100%;
  height: 103px;
  background: #d9d9d9;
  border-radius: 10px;
  margin-bottom: 10px;
}

.article__subtitle {
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: var(--color-font-alternative);
}
</style>
