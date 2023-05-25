<template>
  <div class="ui-select">
    <div
      class="ui-select-header"
      :class="{
        placehloder: !value || !value.length,
      }"
      @click="targetToSelect"
    >
      {{ value && value.length ? value : placehlod }}
      <img
        src="~/shared/assets/images/arrow_down.png"
        alt=""
        :class="{
          rotate: showBody,
        }"
      />
    </div>
    <ul
      v-if="!mulriselect"
      class="ui-select-body"
      :class="{
        show: showBody,
      }"
    >
      <li
        v-for="item in items as Item[]"
        :key="item.id"
        @click="selectItem(item)"
        class="ui-select-body-item"
      >
        {{ isStringObject ? item.value : item }}
      </li>
    </ul>
    <ul
      v-if="!mulriselect"
      class="ui-select-body"
      :class="{
        show: showBody,
      }"
    >
      <li
        v-for="item in items as Item[]"
        :key="item.id"
        class="ui-select-body-item"
        @click="addItem(item)"
      >
        <img
          v-if="result.findIndex(el => el.id === item.id) > 0"
          src="~/shared/assets/images/check.png"
          alt=""
        >
        <span>{{ isStringObject ? item.value : item }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface Item {
  id: number
  value: string
}

const items: Item[] = [
  { id: 1, value: 'Cat1', },
  { id: 2, value: 'Cat2', },
  { id: 3, value: 'Cat3', },
  { id: 4, value: 'Cat4', },
  { id: 5, value: 'Cat5', },
  { id: 6, value: 'Cat6', },
]

export default defineComponent({
  name: 'UiSelect',
  data: () => ({
    value: '',
    showBody: false,
    result: [] as Item[],
  }),
  components: {},
  props: {
    placehlod: {
      type: String,
      default: 'Введите данные',
    },
    items: {
      type: Array,
      default: items,
    },
    itemText: {
      type: String,
      default: 'value',
    },
    itemKey: {
      type: String,
      default: 'id',
    },
    mulriselect: {
      type: Boolean,
      default: false,
    },
    isStringObject: {
      type: Boolean,
      default: false,
    },
  },
  computed: {},
  methods: {
    targetToSelect () {
      this.showBody = !this.showBody

      if (!this.showBody && this.mulriselect) {
        this.$emit('select', this.result)
      }
    },
    selectItem (item: any) {
      this.showBody = false
      this.value = item[this.itemText]

      this.$emit('select', item)
    },
    addItem (item: Item) {
      const results = [...this.result, ]
      results.push(item)

      this.result = results
      const filterItems = this.items.filter((el: any) => {
        return el !== item
      })
      this.$emit('select', filterItems, item)
    },
    isCheck (item: Item) {
      const isCheck = this.result.findIndex(el => el.id === item.id)
      if (isCheck && isCheck > 0) {
        return true
      }

      return false
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.ui-select {
  min-width: 300px;
  height: 50px;

  position: relative;

  border: 1px solid var(--color-border);
  border-radius: 20px;
  transition: all 0.2s;
}

.ui-select-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 50px;

  padding: 0 10px;
  cursor: pointer;

  img {
    transition: all 0.2s;
  }

  img.rotate {
    transform: rotate(180deg);
  }
}

.placehloder {
  color: var(--color-alternative);
}

.ui-select.error {
  border: 1px solid red;
}

.ui-select.error input::placeholder {
  color: red;
}

.ui-select-body {
  position: absolute;
  top: calc(100% + 5px);

  width: 100%;
  border: 1px solid var(--color-alternative);
  border-radius: 10px;
  background: var(--color-main);
  overflow: hidden;

  z-index: 4;

  pointer-events: none;
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.2s;

  &.show {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0);
  }

  li {
    width: 100%;
    border-bottom: 1px solid var(--color-alternative);
    padding: 10px;
    transition: all 0.1s;
    cursor: pointer;

    &:hover {
      background: var(--color-placeholder);
    }
  }
}
</style>
