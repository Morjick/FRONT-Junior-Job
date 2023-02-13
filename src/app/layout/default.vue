<template>
  <div class="pages">
    <div class="pages-header">
      <div class="burger-menu"></div>
      <span class="page-logo">Junior Job</span>
    </div>
    <div class="pages-body">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
