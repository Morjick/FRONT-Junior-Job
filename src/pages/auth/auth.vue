<template>
  <section>
    <worker-form />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import WorkerForm from "widgets/pages/auth/workerForm.vue";
import UiButton from 'widgets/ui/UiButton.vue'

export default defineComponent({
  name: "AuthPage",
  components: { UiButton, WorkerForm },
  data: () => ({}),
  props: {},
  computed: {},
  methods: {},
  mounted() {},
});
</script>
