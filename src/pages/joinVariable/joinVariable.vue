<template>
  <div class="join_page join-variable">
    <h1 class="join_tittle">Junior Job</h1>
    <p class="join_p">Начни зарабатывать вместе с нами!</p>
    <ui-button text="Войти" />
    <ui-button text="Зарегестрироваться" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UiButton from "widgets/ui/UiButton.vue";

export default defineComponent({
  name: "joinVariable",
  data: () => ({}),
  components: {UiButton},
  props: {},
  computed: {},
  methods: {},
  mounted() {},
});
</script>