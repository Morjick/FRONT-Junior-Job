<template>
  <section class="new-items">
    <div
      href="#"
      class="item"
      v-for="item in (newItems as Vacancy[])"
      :key="item.id"
      @click="pushToCavancyPage(item)"
    >
      <img
        :ref="(el: any) => getImage(item.avatar, el)"
        alt=""
        class="item__img"
      />

      <div class="item__text">
        <div class="item__title">{{ item.title }}</div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Vacancy } from 'app/store/modules/news.store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiNewVacancies',
  props: {
    newItems: {
      type: Array,
      default: () => [] as Vacancy[],
    },
  },
  data: () => ({
    noImageUrl: require('shared/assets/images/no_image.jpg').default,
  }),
  computed: {
    deafultImageUrl () {
      return this.$store.getters.defaultImageUrl
    },
  },
  methods: {
    pushToCavancyPage (vacancy: Vacancy) {
      this.$router.push(`/vacancy/${vacancy.href}`)
    },
    async getImage (image: string, el: any) {
      try {
        const isAvatar = await this.$store.dispatch('getImage', image)

        if (isAvatar.status !== 200) {
          el?.setAttribute('src', this.noImageUrl)
          return null
        }

        const imageUrl = await this.$store.getters.defaultImageUrl

        el?.setAttribute('src', imageUrl + image)
      } catch (e) {
        el.setAttribute('src', this.noImageUrl)
        return e
      }
    },
  },
})
</script>

<style lang="scss">
.new-items {
  max-width: 500px;

  margin-bottom: 28px;
  cursor: pointer;

  &__title {
    font-weight: 600;
    font-size: 25px;
    color: var(--color-font);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 15px;
  }
  &__wrapp {
    margin: 0 auto;
  }
}

.item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-weight: 300;
  font-size: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  &__img {
    width: 50px;
    height: 50px;
    background: red;
    border-radius: 100%;
    margin-right: 10px;
  }
  &__title {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 5px;
    color: #000;
  }
  &__time {
    font-weight: 300;
    font-size: 15px;
    color: var(--color-font-alternative);
  }
  &__task {
    font-weight: 300;
    font-size: 15px;
    color: var(--color-font-alternative);
  }
}
</style>
