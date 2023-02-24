<template>
  <div class="ui-input">
    <input
      :type="inputType"
      :placeholder="placeholder"
      v-model="value"
      v-bind:value="value"
      @input="(event) => $emit('input', event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UiInput",
  data: () => ({}),
  components: {},
  props: {
    inputType: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    value: {
      type: [String, Number],
      default: "",
    },
  },
  computed: {},
  methods: {
  },
  mounted() {},
})
</script>