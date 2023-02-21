<template>
  <div class="empty-layout">
    <div class="empty-layout-header">
      <img @click="pushToMainPage" src="~/shared/assets/images/arrow-back.png" alt="">
      <span @click="pushToMainPage">Junior Job</span>
    </div>
    <div class="empty-layout-body">
    
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EmptyLayout',
  data: () => ({}),
  components: {},
  props: {},
  computed: {},
  methods: {
    pushToMainPage(){
      this.$router.push('/')
    }
  },
  mounted () {}
})
</script>
