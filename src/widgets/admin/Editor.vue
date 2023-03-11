<template>
  <div class="editor">
    <ckeditor
      :editor="editor"
      :config="editorConfig"
      v-model="editorData"
      ref="editor"
    ></ckeditor>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default defineComponent({
  name: 'EditorComponent',
  data: () => ({
    editor: ClassicEditor,
    editorData: '',
    editorConfig: {
      // The configuration of the editor.
    },
  }),
  components: {},
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  computed: {},
  methods: {
    emitText () {
      const editor: any = this.$refs.editor

      this.$emit(editor.modelValue)

      return editor.modelValue
    },
  },
  mounted () {},
})
</script>

<style lang="scss">
.ck-content {
  min-height: 500px;
  height: 100%;
}
</style>
