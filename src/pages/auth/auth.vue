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
import WorkerFormI from 'widgets/pages/auth/workerForm.vue'
import WorkerLoginFormI from 'widgets/pages/auth/workerLoginForm.vue'
import PhysicalFormI from 'widgets/pages/auth/physicalForm.vue'
import LegalFormI from 'widgets/pages/auth/legalForm.vue'

const WorkerForm: any = WorkerFormI
const WorkerLoginForm: any = WorkerLoginFormI
const PhysicalForm: any = PhysicalFormI
const LegalForm: any = LegalFormI

export default defineComponent({
  name: 'AuthPage',
  components: {
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
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.$router.push('/join')
      }

      return { form, methods, }
    },
  },
  methods: {},
  mounted () {},
})
</script>
