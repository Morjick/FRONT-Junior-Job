<template>
  <div class="articles-page">
    <div class="flexer">
      <h1>Статьи</h1>
      <ui-button
        style="min-height: 30px; height: 40px; max-width: 150px; min-width: 200px;"
        text="Создать статью"
        @click="pushToCreateArticle"
      />
    </div>
    <articles-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArticlesList from 'widgets/admin/ArticlesList.vue'
import UiButton from 'widgets/ui/UiButton.vue'

export default defineComponent({
  name: 'ArticlesPage',
  data: () => ({
  }),
  components: { ArticlesList, UiButton, },
  props: {},
  computed: {},
  methods: {
    pushToCreateArticle () {
      this.$router.push('/admin/create-articles')
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.articles-page {
  h1 {
    font-size: 34px;
    font-weight: bold;
    margin: 0 0 10px;
  }
}
</style>
