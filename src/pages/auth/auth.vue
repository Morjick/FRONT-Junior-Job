<template>
  <section>
    <div class="photo">
      <p class="text_photo">Cделайте фото или добавте его из галереи</p>
      <img src="~/shared/assets/images/add_a_photo.png" alt="">
    </div>
    <div class="resume">
      
    </div>
    <ui-button text="" />

  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UiButton from 'widgets/ui/UiButton.vue'

export default defineComponent({
  name: "AuthPage",
  components: { UiButton },
  data: () => ({}),
  props: {},
  computed: {},
  methods: {},
  mounted() {},
});
</script>
