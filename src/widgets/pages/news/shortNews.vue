<template>
  <section class="news">
    <div
      class="news__title"
      v-if="news.length"
      ref="div"
    >
    Статьи
  </div>

    <router-link
      class="article"
      v-for="article in news"
      :key="article.id"
      :to="`/articles/${article.href}`"
    >
      <img
        class="article__img"
        :ref="(el: any) => getImageUrl(article.avatar, el)"
      >
      <div class="article__subtitle">{{ article.title }}</div>
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Article } from 'app/store/modules/news.store'

export default defineComponent({
  name: 'UiNews',
  props: {},
  computed: {
    news (): Article[] {
      return this.$store.getters.getArticles
    },
  },
  data: () => ({
    defaultImageUrl: require('shared/assets/images/no_image.jpg').default,
  }),
  methods: {
    async getImageUrl (avatar: string, el: any) {
      try {
        const isAvatar = await this.$store.dispatch('getImage', avatar)

        if (isAvatar.status !== 200) {
          const imageUrl = require(`shared/assets/images/${avatar}`).default
          el.setAttribute('src', imageUrl + avatar)
          return null
        }

        const imageUrl = await this.$store.getters.defaultImageUrl

        el.setAttribute('src', imageUrl + avatar)
      } catch (error) {
        el.setAttribute('src', this.defaultImageUrl)
        throw error
      }
    },
  },
  async mounted () {
    this.$store.dispatch('fetchArticles')
  },
})
</script>

<style lang="scss">
@use '~shared/assets/styles/mixin.scss' as mixin;

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
  &__img {
    width: 100%;
    height: 103px;
    background: #d9d9d9;
    border-radius: 10px;
    margin-bottom: 10px;
    object-fit: cover;
    @include mixin.adaptive(desktop) {
      height: 150px;
    }
  }
  &__subtitle {
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    color: var(--color-font-alternative);
  }
}
</style>
