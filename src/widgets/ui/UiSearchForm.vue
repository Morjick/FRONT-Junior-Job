<template>
  <div class="search">
    <input type="text" class="search__input" placeholder="Поиск вакансий">

    <a href="#" class="search__link">
      <svg class="search__icon">
        <use xlink:href="icons/symbol-defs.svg#icon-search"></use>
      </svg>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiSearchForm'
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
}
</style>