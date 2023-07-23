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
    <input
      type="file"
      placeholder="Добавьте изображение"
      @input="setImage"
    >
    <ui-button
      text="Публиковать"
      style="max-width: 250px; margin-left: auto;"
      @click="createArticle"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Editor from 'widgets/admin/Editor.vue'
import UiCheckbox from 'widgets/ui/UiCheckbox.vue'
import UiInput from 'widgets/ui/UiInput.vue'
import UiButton from 'widgets/ui/UiButton.vue'

export default defineComponent({
  name: 'CreateArticlesPage',
  data: () => ({
    editorData: '',
    title: '',
    show: false,
    avatar: null,

    validation: {
      title: true,
    },
  }),
  components: { editor: Editor, UiInput, UiCheckbox, UiButton, },
  props: {},
  computed: {},
  methods: {
    emiterToEdit () {
      const editor: any = this.$refs.editor
      this.editorData = editor.emitText()
    },
    checkUniqueTitle () {},
    async setImage (event: any) {
      const image = event.target.files[0]

      if (!image) return null

      const formdata = new FormData()

      formdata.append('file', image)

      const { data, } = await this.axios.post('static/upload-image', formdata, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      this.avatar = data.image.name
    },
    async createArticle () {
      if (!this.title) return null
      this.emiterToEdit()

      const articles = await this.axios.post('articles/create', {
        title: this.title,
        body: this.editorData,
        show: this.show,
        avatar: this.avatar,
      })

      console.log(articles)
    },
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
