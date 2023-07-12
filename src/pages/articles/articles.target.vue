<template>
  <div class="articles-target">
    <div class="articles-target-title">
      <h1>{{ article.title }}</h1>
      <span>{{ getDate(article.createdAt) }}</span>
    </div>

    <p v-html="article.body"></p>

    <p
      v-if="article.author"
      class="articles-target-author"
    >
      Автор: <span>{{ article.author?.firstname }} {{ article.author?.lastname }}</span>
    </p>
    <p
      v-if="article.author"
      class="articles-target-author"
    >
      Последнее изменение: <span>{{ getDate(article.updatedAt) }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { Article } from 'app/store/modules/news.store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ArticlesTargetPage',
  data: () => ({
    article: {} as Article,
  }),
  components: {},
  props: {},
  computed: {},
  methods: {
    async getArticles () {
      try {
        const { href, } = this.$route.params

        if (!href) {
          this.$router.push('/articles')
        }

        const { data, }: any = await this.axios.get(`/articles/get-article/${href}`)

        if (!data.article) {
          this.$router.push('/articles')
          return false
        }

        this.article = data.article
      } catch (e) {
        return e
      }
    },
    getDate (date: string) {
      if (!date || !date.length) {
        return date
      }
      return date.split('T')[0].split('-').reverse().join('.')
    },
  },
  mounted () {
    this.getArticles()
  },
})
</script>

<style lang="scss">
.articles-target {
  padding: 20px 40px;

  &-title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 32px;
      font-weight: bold;
      margin-bottom: 20px;
    }

    span {
      font-weight: bold;
    }
  }

  &-author {
    margin: 15px 0;
    font-weight: bold;
    span {
      color: var(--color-alternative);
    }
  }
}
</style>
