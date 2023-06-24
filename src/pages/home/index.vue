<template>
  <section class="home">
    <ui-search-form
      class="home__search"
      :data="cities"
      :dataProperty="cityProperty"
      v-if="screen < 700"
    />

    <div class="home__wrapp">
      <div class="home__vacancy">
        <div class="home__subtitle">Новые вакансии</div>
        <ui-new-items :newItems="newVacancies" />
      </div>

      <ui-news :newsArr="newsArr" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiSearchForm from 'widgets/ui/UiSearchForm.vue'
import UiNews from 'widgets/ui/UiNews.vue'
import UiNewItems from 'widgets/ui/UiNewItems.vue'
import Cities from 'cities-info'

export default defineComponent({
  name: 'HomePage',
  components: {
    UiSearchForm,
    UiNews,
    UiNewItems,
  },
  data: () => ({
    newsArr: [],
    cities: Cities.getCity((element: any) => element, ['name_with_type', ]),
    cityProperty: 'name_with_type',
  }),
  computed: {
    screen () {
      return this.$store.getters.getScreenWidth
    },
    newVacancies () {
      return this.$store.getters.getVacancy
    },
  },
  methods: {},
  created () {
    window.addEventListener('resize', () => this.$store.commit('updateScreenWidth'))
  },
  mounted () { },
})
</script>

<style lang="scss">
@use '~shared/assets/styles/mixin.scss' as mixin;

.home {
  padding: 0 20px;
  @include mixin.adaptive(desktop) {
    padding: 0 50px;
  }
  &__search {
    margin: 0 auto;
    transform: translateY(-50%);
  }
  &__subtitle {
    font-weight: 600;
    font-size: 25px;
    color: var(--color-helper);
    margin-bottom: 10px;
    @include mixin.adaptive(tablet) {
      margin-bottom: 15px;
    }
  }
  &__wrapp {
    @include mixin.adaptive(tablet) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>
