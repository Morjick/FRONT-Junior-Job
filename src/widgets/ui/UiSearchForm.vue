<template>
  <div class="search">
    <input type="text" class="search__input" placeholder="Поиск вакансий" v-model="inputValue" @keyup.enter="search">

    <div @click="search" class="search__link">
      <svg class="search__icon">
        <use xlink:href="icons/symbol-defs.svg#icon-search"></use>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiSearchForm',
  data: () => ({
    inputValue: null
  }),
  methods: {
    search() {
      if (this.inputValue) {
        this.$router.push('/search-result')
      }
    }
  }
})
</script>

<style lang="scss">
  .search {
    width: 310px;
    height: 51px;
    border: 2px solid var(--color-font-alternative);
    border-radius: 30px;
    background: var(--color-main);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
}

  .search__input {
    border-radius: 30px;
    min-width: 80%;
    height: 51px;
    display: block;
    font-weight: 300;
    font-size: 20px;
    color: var(--color-alternative);
}

  .search__icon {
    width: 18px;
    height: 18px;
    background: red;
    cursor: pointer;
}
</style>