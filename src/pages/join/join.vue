<template>
  <div class="join_page">
    <h1 class="join_tittle">Junior Job</h1>
    <p class="join_p">Начни зарабатывать вместе с нами!</p>
    <ui-button @click="pushToAuthWorker"
text="Я соискатель" />
    <ui-button @click="setRadio"
text="Я работодатель" />

    <label v-if="showRadio"
@click="pushToForm('physical')"
style="width: 276px; cursor: pointer;"
for="physyc">
      <input id="physyc"
name="form"
type="radio">
      <span>Физическое лицо</span>
    </label>

    <label v-if="showRadio"
@click="pushToForm('legal')"
style="width: 276px; cursor: pointer;"
for="legal">
      <input id="legal"
name="form"
type="radio">
      <span>Юридическое лицо</span>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import workerForm from 'widgets/pages/auth/workerForm.vue'
import UiButton from 'widgets/ui/UiButton.vue'

export default defineComponent({
  name: 'JoinPage',
  data: () => ({
    showRadio: false,
    status: null,
  }),
  components: { UiButton, },
  props: {},
  computed: {},
  methods: {
    pushToAuthWorker () {
      this.$router.push({ path: 'auth', query: { form: 'worker', methods: this.$router.currentRoute.value.query.methods, }, })
    },
    pushToForm (form: string) {
      this.$router.push({ path: 'auth', query: { form, methods: this.$router.currentRoute.value.query.methods, }, })
    },
    setRadio () {
      this.showRadio = true
    },
  },
  mounted () {},
})

</script>
