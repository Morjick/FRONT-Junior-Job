<template>
  <div class="empty-layout">
    <div class="empty-layout-header">
      <img
        @click="pushToMainPage"
        src="~/shared/assets/images/arrow-back.png"
        alt=""
      />
      <!-- <span @click="pushToMainPage">Junior Job</span> -->
      <logotype />
    </div>
    <div class="empty-layout-body">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Logotype from 'widgets/global/Logotype.vue'

export default defineComponent({
  name: 'EmptyLayout',
  data: () => ({}),
  components: { Logotype, },
  props: {},
  computed: {},
  methods: {
    pushToMainPage () {
      this.$router.back()
    },
  },
  mounted () {},
})
</script>
