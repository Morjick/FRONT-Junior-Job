<template>
  <div
    class="create-articles-page"
  >
    <h1>Создание статьи</h1>
    <editor ref="editor"></editor>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Editor from 'widgets/admin/Editor.vue'

export default defineComponent({
  name: 'CreateArticlesPage',
  data: () => ({
    editorData: ''
  }),
  components: { Editor },
  props: {},
  computed: {},
  methods: {
    emiterToEdit() {
      const editor: any = this.$refs.editor
      this.editorData = editor.emitText()
    }
  },
  mounted () {},
})
</script>

<style lang="scss">
.create-articles-page {
  h1 {
    font-size: 30px;
    font-weight: bold;
    margin: 0 0 10px;
  }
}
</style>
