<template>
  <div class="error-layout">
    <div class="error-layout-header">
      <div class="empty-layout-header">
        <div @click="pushToMainPage"
class="empty-layout-header-part">
          <img src="~/shared/assets/images/arrow-back.png"
alt="" />
          <span>На главную</span>
        </div>
        <img @click="reload"
src="~/shared/assets/images/cached.png"
alt="" />
      </div>
    </div>
    <div class="error-layout-body">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorLayout',
  data: () => ({}),
  components: {},
  props: {},
  computed: {},
  methods: {
    pushToMainPage () {
      this.$router.push('/')
    },
    reload () {
      location.reload()
    },
  },
  mounted () {},
})
</script>
