<template>
  <section class="categories">
    <h2 class="categories__title">Категории</h2>

    <div
      class="categories__list"
      v-for="category in categories"
      :key="category.id"
    >
      <router-link :to="`/vacancy/${category.hash}?category=${category.id}`">
        <div class="categories__item category">
          <img
            :ref="(el: any) => getImageUrl(category.icon, el)"
            class="category__logo"
          >

          <h3 class="category__title">{{ category.title }}</h3>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script lang="ts">
import { CategoryI } from 'app/store/modules/news.store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CategoriesPage',
  components: {},
  data: () => ({
    defaultImageUrl: require('shared/assets/images/no_image.jpg').default,
  }),
  props: {},
  computed: {
    categories (): CategoryI[] {
      return this.$store.getters.getCategory
    },
  },
  methods: {
    async getImageUrl (image: string, el: any) {
      try {
        const imageUrl = `images/get-image/${image}`
        const response = await this.axios.get(imageUrl)

        if (response.status !== 200) {
          el.setAttribute('src', this.defaultImageUrl)
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
  box-shadow: var(--shadow);
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
