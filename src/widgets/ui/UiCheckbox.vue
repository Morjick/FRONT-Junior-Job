<template>
  <label :for="name"
class="ui-checkbox">
    <input
      type="checkbox"
      :value="modelValue"
      v-model="checked"
      @input="onInput"
      @change="onChange"
      :id="name"
    />
    <img src="~/shared/assets/images/approve.png"
alt=""
v-if="checked" />
    <p>{{ label }}</p>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UiCheckbox',
  data: () => ({
    checked: false,
  }),
  components: {},
  props: {
    modelValue: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {},
  methods: {
    onChange (event: any) {
      this.$emit('update:modelValue', event.target.checked)
    },
    onInput (event: any) {
      this.$emit('update:modelValue', event.target.checked)
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.ui-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  width: 25px;
  height: 25px;

  border: 1px solid var(--admin-color-primery);
  border-radius: 2px;
  cursor: pointer;

  img {
    width: 25px;
  }

  input {
    display: none;
  }

  p {
    width: 200px;
    position: absolute;
    left: 30px;
  }
}
</style>
