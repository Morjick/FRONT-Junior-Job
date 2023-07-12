<template>
  <div class="search">
    <input
      type="text"
      class="search__input"
      placeholder="Поиск вакансий"
      @input="searchDelayHandler"
      v-model="title"
      @keyup.enter="search"
    />

    <div
      @click="search"
      class="search__link"
    >
      <img
        src="~/shared/assets/images/search.png"
        class="search__icon"
      />
      <use xlink:href="icons/symbol-defs.svg#icon-search"></use>
    </div>

    <ul class="search__autocomplete">
      <li
        v-for="(data, index) in visibleData"
        :key="index"
        class="search__autocomplete-item"
        @click="useAutocomplete"
      >
        {{ data }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiSearchForm',
  props: {
    data: {
      type: Array<any>,
      default: () => [],
    },
    dataProperty: {
      type: String,
      default: () => 'name',
    },
  },
  data: () => ({
    title: '' as string,
    visibleData: [] as Array<string>,
    debounceTimeount: null as any,
  }),
  methods: {
    search () {
      if (this.title) {
        this.$router.push(`/vacancy?title=${this.title}`)
        this.$emit('getRequest', this.title)
      }
    },
    useAutocomplete (event: any): void {
      this.title = event.target.innerText
      this.search()
    },
    searchDelayHandler () {
      if (this.debounceTimeount) {
        clearTimeout(this.debounceTimeount)
      }

      this.debounceTimeount = setTimeout(() => {
        this.$router.resolve(`/vacancy?title=${this.title}`)
      }, 500)
    },
    getTitle () {
      const { title, } = this.$route.query

      if (title && title.length) {
        this.title = String(title)
      }
    },
  },
  mounted () {
    this.getTitle()
  },
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

  position: relative;

  &__input {
    border-radius: 30px;
    min-width: 80%;
    height: 51px;
    display: block;
    font-weight: 300;
    font-size: 20px;
    color: var(--color-alternative);
  }

  &__icon {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  &__autocomplete {
    position: absolute;
    top: 100%;
    background: var(--color-font-alternative);
    width: 85%;
    border-radius: 0 0 10px 10px;

    &-item {
      padding: 10px;
      font-weight: 300;
      font-size: 15px;
      color: var(--color-main);
      cursor: pointer;

      &:hover {
        background: var(--color-primery);
      }
    }
  }
}

.search__icon {
  display: flex;
  width: 20px;
  height: 20px;
  cursor: pointer;
  pointer-events: all;
}
</style>
