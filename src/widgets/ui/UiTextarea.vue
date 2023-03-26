<template>
  <div class="ui-textarea">
    <textarea
      :placeholder="placeholder"
      :value="modelValue"
      @input="onInput"
      @change="onChange"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const overTime: any = null

export default defineComponent({
  name: 'UiTextarea',
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
.ui-textarea {
  min-height: 250px;
  resize: none;
  border: 1px solid var(--color-border);
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 10px;
  color: var(--color-alternative);
}
</style>
