<template>
  <section>
    <worker-form
      v-if="formWatcher.form == 'worker' && formWatcher.methods == 'singup'"
    />
    <physical-form
      v-if="formWatcher.form == 'physical' && formWatcher.methods == 'singup'"
    />
    <legal-form
      v-if="formWatcher.form == 'legal' && formWatcher.methods == 'singup'"
    />

    <worker-login-form v-if="formWatcher.methods == 'singin'" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WorkerForm from 'widgets/pages/auth/workerForm.vue'
import WorkerLoginForm from 'widgets/pages/auth/workerLoginForm.vue'
import PhysicalForm from 'widgets/pages/auth/physicalForm.vue'
import UiButton from 'widgets/ui/UiButton.vue'
import LegalForm from 'widgets/pages/auth/legalForm.vue'

export default defineComponent({
  name: 'AuthPage',
  components: {
    UiButton,
    WorkerForm,
    WorkerLoginForm,
    PhysicalForm,
    LegalForm,
  },
  data: () => ({}),
  props: {},
  computed: {
    formWatcher () {
      const { form, methods, } = this.$router.currentRoute.value.query

      if (!form || !methods) {
        this.$router.push('/join')
      }

      return { form, methods, }
    },
  },
  methods: {},
  mounted () {},
})
</script>
