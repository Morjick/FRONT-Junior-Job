<template>
  <div class="join_page">
    <h1 class="join_tittle">Junior Job</h1>
    <p class="join_p">Начни зарабатывать вместе с нами!</p>
    <ui-button @click="pushToAuthWorker" text="Я соискатель" />
    <ui-button text="Я работодатель" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import workerForm from "widgets/pages/auth/workerForm.vue";
import UiButton from 'widgets/ui/UiButton.vue'

export default defineComponent({
  name: "JoinPage",
  data: () => ({
    step: 1,
    status: null
  }),
  components: { UiButton },
  props: {},
  computed: {},
  methods: {
    pushToAuthWorker () {
      this.$router.push({ path: 'auth', params: { form: 'worker' } })
    }
  },
  mounted() {},
});

</script>
