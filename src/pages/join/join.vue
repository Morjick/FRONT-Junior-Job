<template>
  <div class="join_page">
    <h1 class="join_tittle">Junior Job</h1>
    <p class="join_p">Начни зарабатывать вместе с нами!</p>
    <ui-button text="Я соискатель" />
    <ui-button text="Я работодатель" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UiButton from 'widgets/ui/UiButton.vue'

export default defineComponent({
  name: "JoinPage",
  data: () => ({}),
  components: { UiButton },
  props: {},
  computed: {},
  methods: {},
  mounted() {},
});

</script>
