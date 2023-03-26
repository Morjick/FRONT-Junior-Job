<template>
  <div class="create-articles-page">
    <h1>Создание статьи</h1>
    <ui-input
      placeholder="Введите название статьи"
      v-model="title"
      style="margin: 10px 0"
      @overTime="checkUniqueTitle"
      :valid="validation.title"
    />
    <editor ref="editor" />
    <ui-checkbox
      v-model="show"
      name="isShow"
      label="Опубликовать новость"
      style="margin: 15px 0"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Editor from 'widgets/admin/Editor.vue'
import UiCheckbox from 'widgets/ui/UiCheckbox.vue'
import UiInput from 'widgets/ui/UiInput.vue'

export default defineComponent({
  name: 'CreateArticlesPage',
  data: () => ({
    editorData: '',
    title: '',
    show: '',

    validation: {
      title: true,
    },
  }),
  components: { editor: Editor, UiInput, UiCheckbox, },
  props: {},
  computed: {},
  methods: {
    emiterToEdit () {
      const editor: any = this.$refs.editor
      this.editorData = editor.emitText()
    },
    checkUniqueTitle () {},
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
