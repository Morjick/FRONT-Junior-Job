<template>
  <div class="vacancy">
    <div
      v-for="item in vacancy"
      :key="item.id"
      class="vacancy-item"
      @click="pushToCavancyPage(item)"
    >
      <img
        :ref="(el: any) => getImage(item.avatar, el)"
        alt=""
        class="vacancy-item-avatar"
      >
      <p class="vacancy-item-title">{{ item.title }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vacancy } from 'app/store/modules/news.store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VacancyPage',
  data: () => ({
    vacancy: [] as Vacancy[],
    noImageUrl: require('shared/assets/images/no_image.jpg').default,
  }),
  components: {},
  props: {},
  computed: {},
  methods: {
    pushToCavancyPage (vacancy: Vacancy) {
      this.$router.push(`/vacancy/${vacancy.href}`)
    },
    async getVacancy () {
      try {
        const query = []

        if (this.$route.query.title) {
          query.push(`title=${this.$route.query.title}`)
        }

        const { data, } = await this.axios.get(`/vacancy/search?${query.join('&')}`)

        this.vacancy = data.vacancies
      } catch (e) {
        return e
      }
    },
    async getImage (image: string, el: any) {
      try {
        const isAvatar = await this.$store.dispatch('getImage', image)

        if (isAvatar.status !== 200) {
          el.setAttribute('src', this.noImageUrl)
          return null
        }

        const imageUrl = await this.$store.getters.defaultImageUrl

        el.setAttribute('src', imageUrl + image)
      } catch (e) {
        el.setAttribute('src', this.noImageUrl)
        return e
      }
    },
  },
  mounted () {
    this.getVacancy()
  },
})
</script>

<style lang="scss">
.vacancy {
  padding: 27px 32px;

  &-item {
    display: flex;

    margin-bottom: 24px;

    cursor: pointer;

    &-avatar {
      width: 75px;
      height: 75px;

      border-radius: 50%;
      margin-right: 10px;
    }

    &-title {
      color: var(--color-title);
      font-family: 'Marmelad';
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 30px;
    }
  }
}
</style>
