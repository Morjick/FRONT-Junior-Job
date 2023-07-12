<template>
  <section class="search-result">
    <ui-search-form
      class="search-result__search"
      v-if="screen < 700"
    />
    <ui-new-items :newItems="newVacancies" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UiSearchForm from 'widgets/ui/UiSearchForm.vue'
import UiNewItems from 'widgets/ui/UiNewItems.vue'

export default defineComponent({
  name: 'searchResultsPage',
  components: {
    UiSearchForm,
    UiNewItems,
  },
  data: () => ({
    newVacancies: [],
  }),
  computed: {
    screen () {
      return this.$store.getters.getScreenWidth
    },
  },
  methods: {},
  created () {
    window.addEventListener('resize', () => this.$store.commit('updateScreenWidth'))
  },
})
</script>

<style lang="scss">
@use '~shared/assets/styles/mixin.scss' as mixin;

.search-result {
  padding: 0 20px;
  @include mixin.adaptive(tablet) {
    padding: 10px 20px;
  }
  &__search {
    margin: 0 auto;
    transform: translateY(-50%);
  }
}
</style>
