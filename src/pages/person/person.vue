<template>
  <div class="person">
    <h1 class="person-title">{{ person.firstname }} {{ person.lastname }}</h1>

    <img
      :ref="(el: any) => getImage(person.avatar, el)"
      alt=""
      class="item__img"
    />

    <div class="person-info">
      <div
        class="person-info-item"
        v-if="person.email"
      ><span>Электронная почта:</span> {{ person.email }}</div>
      <div
        class="person-info-item"
        v-if="person.city"
      ><span>Город:</span> {{ person.city }}</div>
      <div
        class="person-info-item"
        v-if="person.age"
      ><span>Возвраст:</span> {{ person.age }}</div>
      <div
        class="person-info-item"
        v-if="person.implication"
      >
        Зарегистрирован как
        {{ person.implication === 'physical' ? 'физичекое' : 'юридическое' }}
        лицо
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { UserI } from 'app/store/modules/auth.store'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PersonPage',
  data: () => ({
    errorMessage: '',
    person: {} as UserI,
    noImageUrl: require('shared/assets/images/no_image.jpg').default,
  }),
  components: {},
  props: {},
  computed: {},
  methods: {
    async getPerson () {
      try {
        const { data, } = await this.axios.get(`auth/get-person/${this.$route.params.id}`)

        this.person = data.user
      } catch (e) {
        this.errorMessage = 'Не удалось получить пользователя, попробуйте позже'
      }
    },
    async getImage (image: string, el: any) {
      try {
        if (!image) {
          throw new Error()
        }
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
    this.getPerson()
  },
})
</script>

<style lang="scss">
.person {
  padding: 20px 40px;

  &-title {
    font-weight: bold;
    font-size: 32px;
  }

  &-info {
    margin-top: 20px;

    &-item {
      margin-bottom: 20px;

      span {
        font-weight: bold;
      }
    }
  }
}
</style>
