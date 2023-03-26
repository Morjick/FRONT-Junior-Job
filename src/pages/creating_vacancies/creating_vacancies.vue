<template>
    <div class="creating_vacancies">
      <div class="creating__title">Создание вакансии</div>
        <ui-select class="category" placehlod="Категрия "  />
        <ui-select class="time" placeholder="Время"/>
        <ui-input type="text"  placeholder="Место"/>
        <textarea  placeholder="Описание"></textarea>
        <ui-button text="Создать"/>
    </div>
  </template>
  
  <script lang="ts">
  
  
  import { defineComponent } from 'vue';
  import UiButton from 'widgets/ui/UiButton.vue';
  import UiInput from 'widgets/ui/UiInput.vue';
  import UiSelect from 'widgets/ui/UiSelect.vue';

  
  export default defineComponent({
    name: 'CreatingPage',
    data: () => ({}),
    components: {UiButton, UiInput, UiSelect},
    props: {},
    computed: {},
    methods: {},
    mounted () {}
  })
  </script>

  <style lang="scss">
   .creating__title {
      font-weight: 600;
      font-size: 25px;
      color: var(--color-font);
      margin-bottom: 15px;
      padding: 32px;
   }
  </style>