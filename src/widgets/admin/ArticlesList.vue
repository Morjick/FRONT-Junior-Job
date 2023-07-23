<template>
  <div class="articles-list">
    <div
      v-for="(item) in articles"
      :key="item.id"
      class="articles-list-item"
    >
      <span class="articles-list-item-info">{{ item.title }}</span>
      <span
        style="opacity: 0.4; margin-top: 10px"
        class="articles-list-item-info"
        >Автор: {{ item.author.firstname }} {{ item.author.lastname }}</span
      >
      <div class="articles-list-item-buttons">
        <ui-button
          style="
            min-height: 30px;
            height: 40px;
            max-width: 150px;
            min-width: 200px;
          "
          text="Удалить"
          @click="deleteArticles(item)"
        />
        <ui-button
          style="
            min-height: 30px;
            height: 40px;
            max-width: 150px;
            min-width: 200px;
          "
          text="Редактировать"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Article } from 'app/store/modules/news.store'
import { defineComponent } from 'vue'
import UiButton from 'widgets/ui/UiButton.vue'

export default defineComponent({
  name: 'ArticlesList',
  data: () => ({
    articles: [] as Article[],
  }),
  components: { UiButton, },
  props: {},
  computed: {},
  methods: {
    async getArticles () {
      const { data, }: any = await this.axios.get('articles/get-many')

      this.articles = data.articles
    },
    async deleteArticles (article: Article) {
      if (!article || !article.id) return null
      await this.axios.delete(`articles/delete-article?id=${article.id}`)

      this.getArticles()
    },
  },
  mounted () {
    this.getArticles()
  },
})
</script>

<style lang="scss">
.articles-list {
  &-item {
    border-bottom: 1px dashed #000;
    margin-bottom: 10px;
    padding-bottom: 10px;

    &:first-child {
      margin-top: 10px;
    }

    span {
      display: block;
    }

    &-buttons {
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
}
</style>
