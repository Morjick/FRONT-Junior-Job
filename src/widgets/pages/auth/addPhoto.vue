<template>
  <div 
    @click="emitInputClick" 
    class="addPhoto"
    ref="addPhotoBlock"
  >
    <div id="addPhotoBlock" class="addPhoto-placeholder">
      <img v-if="!isImage" src="~/shared/assets/images/add_a_photo.png" alt="">
    </div>
    <p>{{ text }}</p>

    <input 
      ref="avatarInput" 
      type="file" 
      class="none-input"
      @change="setImage"
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AddPhoto',
  data: () => ({
    isImage: false,
    image: null
  }),
  components: {},
  props: {
    text: {
      type: String,
      default: 'Сделайте фото или добавьте его из галереи'
    }
  },
  computed: {},
  methods: {
    emitImage () {
      this.$emit('loadImage', this.image)
    },
    emitInputClick () {
      const avatar: any = this.$refs.avatarInput
      avatar.click()
    },
    setImage (event: any) {
      const container: any = document.getElementById('addPhotoBlock')
      const image = event.target.files[0]

      this.isImage = true

      const fileReader = new FileReader()

      fileReader.onload = () => {
        container.style["background-image"] = `url(${fileReader.result})`;
      }

      fileReader.readAsDataURL(image);
      
      this.emitImage()
    }
  },
  mounted () {}
})
</script>