<template>
  <div :class="'ui-button ' + classMod"
class="ui-button">{{ text }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiButton',
  data: () => ({}),
  components: {},
  props: {
    text: {
      type: String,
      default: 'Подтвердить',
    },
    mod: {
      type: String,
      default: 'primery',
    },
    handler: {
      type: Function,
      default: () => ({}),
    },
    classMod: {
      type: String,
      default: () => '',
    },
  },
  computed: {},
  methods: {},
  mounted () {},
})
</script>

<style lang="scss">
.ui-button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-main);
  background-color: var(--color-alternative);
  padding: 15px 35px;
  min-height: 60px;
  min-width: 274px;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  &_invisible {
    background: none;
    color: var(--color-alternative);
    font-size: 25px;
  }
}
</style>
