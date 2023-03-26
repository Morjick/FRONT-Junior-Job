<template>
  <div
    class="ui-input"
    :class="{
      error: !valid,
    }"
  >
    <input
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      @change="onChange"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const overTime: any = null

export default defineComponent({
  name: 'UiInput',
  data: () => ({
    overTime,
  }),
  components: {},
  props: {
    inputType: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: '',
    },
    modelValue: {
      type: String,
    },
    valid: {
      type: Boolean,
      default: true,
    },
  },
  computed: {},
  methods: {
    onChange (event: any) {
      this.$emit('update:modelValue', event.target.value)
    },
    onInput (event: any) {
      this.setOvertime()
      this.$emit('update:modelValue', event.target.value)
    },
    setOvertime () {
      if (this.overTime) {
        clearTimeout(this.overTime)
        this.overTime = null
      }

      this.overTime = setTimeout(() => {
        this.$emit('overTime')
      }, 1000)
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.ui-input {
  input {
    width: 100%;
    height: 100%;
  }
}
</style>
