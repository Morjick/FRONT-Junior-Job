<template>
  <div
    :for="name"
    class="ui-checkbox"
  >
    <div
      class="ui-checkbox-button"
      @click="check"
    >
      <img
        src="~/shared/assets/images/check.png"
        alt=""
        v-if="checked"
      />
    </div>
    <input
      type="checkbox"
      :value="modelValue"
      v-model="checked"
      @input="onInput"
      @change="onChange"
      :id="name"
    />
    <p
      v-html="label"
      @click="check"
    ></p>
  </div>
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
      type: Boolean,
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
      this.$emit('update:modelValue', Boolean(event.target.checked))
    },
    onInput (event: any) {
      this.$emit('update:modelValue', Boolean(event.target.checked))
    },
    check () {
      this.checked = !this.checked
      this.$emit('update:modelValue', this.checked)
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
  width: 100%;

  .ui-checkbox-button {
    width: 25px;
    height: 25px;

    border: 1px solid var(--admin-color-primery);
    border-radius: 2px;
    cursor: pointer;

    img {
      width: 25px;
    }
  }

  input {
    display: none;
  }

  p {
    width: 100%;
    margin: 0 0 0 10px;
  }
}
</style>
