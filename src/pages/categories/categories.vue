<template>
  <section class="categories">
    <h2 class="categories__title">Категории</h2>

    <div
      class="categories__list"
      v-for="{id, title, icon, hash} in categories"
      :key="id"
    >
      <router-link :to="`/vacancy/${hash}?category=${id}`">
        <div class="categories__item category">
          <img
            :ref="(el: any) => getImageUrl(icon, el)"
            class="category__logo"
          >

          <h3 class="category__title">{{ title }}</h3>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Category } from 'pages/home/news.store'

export default defineComponent({
  name: 'CategoriesPage',
  components: {},
  data: () => ({
    defaultImageUrl: require('shared/assets/images/no_image.jpg').default,
  }),
  props: {},
  computed: {
    categories (): Category[] {
      return this.$store.getters.getCategory
    },
  },
  methods: {
    async getImageUrl (image: string, el: any) {
      try {
        const imageUrl = `http://junior-job.ru/api/images/get-image/${image}`
        const response = await this.axios.get(imageUrl)

        if (response.status !== 200) {
          throw response.status
        }

        el.setAttribute('src', imageUrl)
      } catch (error) {
        el.setAttribute('src', this.defaultImageUrl)
        throw error
      }
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.categories {
  padding: 20px 25px;
  &__title {
    color: var(--color-helper);
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(145px, 1fr));
    grid-gap: 20px;
    justify-items: center;
  }
}
.category {
  width: 145px;
  min-height: 145px;
  background-color: var(--admin-main--background-color);
  border-radius: 10px;
  box-shadow: 0px 4px 10px 0px rgba(44, 27, 71, 0.15);
  padding-top: 20px;
  cursor: pointer;
  &__logo {
    display: block;
    height: 58px;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  &__title {
    color: var(--color-font-alternative);
    text-align: center;
    font-size: 16px;
    line-height: 15px;
  }
}
</style>
