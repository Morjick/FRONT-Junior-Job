<template>
  <div class="articles-list">
    <div
      v-for="(item) in articles as articlesItem[]"
      :key="item.id"
      class="articles-list-item"
    >
      <span class="articles-list-item-info">{{ item.title }}</span>
      <span
        style="opacity: 0.4; margin-top: 10px"
        class="articles-list-item-info"
        >Автор: {{ item.autor }}</span
      >
      <div class="articles-list-item-buttons">
        <ui-button
          style="
            min-height: 30px;
            height: 40px;
            max-width: 150px;
            min-width: 200px;
          "
          text="Читать"
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
import { defineComponent } from 'vue'
import UiButton from 'widgets/ui/UiButton.vue'

interface articlesItem {
  id: number
  title: string
  body: string
  autor: string
}

const articles: articlesItem[] = [
  {
    id: 1,
    // eslint-disable-next-line max-len
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente.
      Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur,
      optio beatae officia possimus repudiandae. Quidem dolorem repellat 
      earum suscipit doloremque iusto obcaecati.
      Perspiciatis optio iusto dignissimos.`,
    // eslint-disable-next-line max-len
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente. Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur, optio beatae officia possimus repudiandae. Quidem dolorem repellat earum suscipit doloremque iusto obcaecati. Perspiciatis optio iusto dignissimos.',
    autor: 'Matvey',
  },
  {
    id: 2,
    // eslint-disable-next-line max-len
    title: 'Lorem ipsum dolor sit ame',
    // eslint-disable-next-line max-len
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente. Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur, optio beatae officia possimus repudiandae. Quidem dolorem repellat earum suscipit doloremque iusto obcaecati. Perspiciatis optio iusto dignissimos.',
    autor: 'Not Matvey',
  },
  {
    id: 1,
    // eslint-disable-next-line max-len
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente.
      Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur,
      optio beatae officia possimus repudiandae. Quidem dolorem repellat 
      earum suscipit doloremque iusto obcaecati.
      Perspiciatis optio iusto dignissimos.`,
    // eslint-disable-next-line max-len
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente. Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur, optio beatae officia possimus repudiandae. Quidem dolorem repellat earum suscipit doloremque iusto obcaecati. Perspiciatis optio iusto dignissimos.',
    autor: 'Matvey',
  },
  {
    id: 2,
    // eslint-disable-next-line max-len
    title: 'Lorem ipsum dolor sit ame',
    // eslint-disable-next-line max-len
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente. Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur, optio beatae officia possimus repudiandae. Quidem dolorem repellat earum suscipit doloremque iusto obcaecati. Perspiciatis optio iusto dignissimos.',
    autor: 'Not Matvey',
  },
  {
    id: 1,
    // eslint-disable-next-line max-len
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente.
      Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur,
      optio beatae officia possimus repudiandae. Quidem dolorem repellat 
      earum suscipit doloremque iusto obcaecati.
      Perspiciatis optio iusto dignissimos.`,
    // eslint-disable-next-line max-len
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente. Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur, optio beatae officia possimus repudiandae. Quidem dolorem repellat earum suscipit doloremque iusto obcaecati. Perspiciatis optio iusto dignissimos.',
    autor: 'Matvey',
  },
  {
    id: 2,
    // eslint-disable-next-line max-len
    title: 'Lorem ipsum dolor sit ame',
    // eslint-disable-next-line max-len
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente. Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur, optio beatae officia possimus repudiandae. Quidem dolorem repellat earum suscipit doloremque iusto obcaecati. Perspiciatis optio iusto dignissimos.',
    autor: 'Not Matvey',
  },
  {
    id: 1,
    // eslint-disable-next-line max-len
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente.
      Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur,
      optio beatae officia possimus repudiandae. Quidem dolorem repellat 
      earum suscipit doloremque iusto obcaecati.
      Perspiciatis optio iusto dignissimos.`,
    // eslint-disable-next-line max-len
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente. Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur, optio beatae officia possimus repudiandae. Quidem dolorem repellat earum suscipit doloremque iusto obcaecati. Perspiciatis optio iusto dignissimos.',
    autor: 'Matvey',
  },
  {
    id: 2,
    // eslint-disable-next-line max-len
    title: 'Lorem ipsum dolor sit ame',
    // eslint-disable-next-line max-len
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente. Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur, optio beatae officia possimus repudiandae. Quidem dolorem repellat earum suscipit doloremque iusto obcaecati. Perspiciatis optio iusto dignissimos.',
    autor: 'Not Matvey',
  },
  {
    id: 1,
    // eslint-disable-next-line max-len
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente.
      Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur,
      optio beatae officia possimus repudiandae. Quidem dolorem repellat 
      earum suscipit doloremque iusto obcaecati.
      Perspiciatis optio iusto dignissimos.`,
    // eslint-disable-next-line max-len
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente. Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur, optio beatae officia possimus repudiandae. Quidem dolorem repellat earum suscipit doloremque iusto obcaecati. Perspiciatis optio iusto dignissimos.',
    autor: 'Matvey',
  },
  {
    id: 2,
    // eslint-disable-next-line max-len
    title: 'Lorem ipsum dolor sit ame',
    // eslint-disable-next-line max-len
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facere atque fugit dicta placeat beatae odit voluptatem harum, soluta enim sapiente. Commodi cumque tempore inventore, id odio sit fugiat reprehenderit, corporis maxime tenetur, optio beatae officia possimus repudiandae. Quidem dolorem repellat earum suscipit doloremque iusto obcaecati. Perspiciatis optio iusto dignissimos.',
    autor: 'Not Matvey',
  },
]

export default defineComponent({
  name: 'ArticlesList',
  data: () => ({}),
  components: { UiButton, },
  props: {
    articles: {
      type: Array,
      default: (): articlesItem[] => articles,
    },
  },
  computed: {},
  methods: {},
  mounted () {},
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
