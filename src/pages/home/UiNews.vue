<template>
  <section class="news">
    <div
      class="news__title"
      v-if="news.length"
    >
    Статьи
  </div>

    <router-link
      class="article"
      v-for="article in news"
      :key="article.id"
      :to="article.href"
    >
      <img
        :src="imgUrls[article.id - 1]"
        class="article__img"
      >
      <div class="article__subtitle">{{ article.title }}</div>
    </router-link>
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
  data: () => ({
    imgUrls: [] as Array<string>,
  }),
  methods: {
    async getImgUrl (imgName: string) {
      try {
        const request = await fetch(require('shared/assets/images/' + imgName).default)
        this.imgUrls.push(await request.url)
      } catch {
        const request = await fetch(require('shared/assets/images/default.jpg').default)
        this.imgUrls.push(await request.url)
      }
    },
  },
  async mounted () {
    this.$store.dispatch('fetchArticles')
    this.news.forEach(article => {
      this.getImgUrl(article.imgName)
    })
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

.article__img {
  width: 100%;
  height: 103px;
  background: #d9d9d9;
  border-radius: 10px;
  margin-bottom: 10px;
  object-fit: cover;
}

.article__subtitle {
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  color: var(--color-font-alternative);
}
</style>
