<template>
  <section class="news">
    <div class="news__title">Статьи</div>

    <a
      class="article"
      href="#"
      v-for="news in newsArr as News[]"
      :key="news.id"
    >
      <div class="article__img"></div>
      <!-- <img :src="imgSrc" :alt="imgAlt" class="article__img"> -->
      <div class="article__subtitle">{{ news.title }}</div>
    </a>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface News {
  id: number
  title: string
}

const NewsArr: News[] = [
  {
    id: 1,
    title: 'title',
  },
]

export default defineComponent({
  name: 'UiNews',
  props: {
    newsArr: {
      type: Array,
      default: NewsArr,
    },
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
