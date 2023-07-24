<template>
  <div class="jobs">
    <div class="jobs-title">Вакансии</div>

    <div class="jobs-body">
      <div
        class="jobs-item"
        v-for="item in vacancy"
        :key="item.id"
      >
        <div class="jobs-item-title">
          <p>{{ item.title }}</p>
          <img
            src="~/shared/assets/images/delete.png"
            alt=""
            @click="deleteVacancy(item)"
          >
        </div>
        <div class="jobs-item-footer">
          <span>Колличество отзывов: {{ item.response.length || 0 }}</span>
          <span>{{ item.createdAt }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { type Vacancy } from '../../../app/store/modules/news.store'

export default defineComponent({
  name: 'JobsPage',
  data: () => ({
    vacancy: [] as Vacancy[],
  }),
  components: {},
  props: {},
  computed: {},
  methods: {
    async getVacancy () {
      try {
        const { data, } = await this.axios.get('vacancy/get-many')

        this.vacancy = data.vacancy
      } catch (e) {
        return e
      }
    },
    async deleteVacancy (item: Vacancy) {
      await this.axios.delete(`vacancy/delete-vacancy/${item.id}`)

      this.getVacancy()
    },
  },
  mounted () {
    this.getVacancy()
  },
})
</script>

<style lang="scss">
.jobs {
  &-item {
    padding: 20px 0;
    border-bottom: 1px solid var(--color-alternative);

    &-title {
      display: flex;
      justify-content: space-between;

      p {
        font-size: 24px;
        font-weight: bold;
      }

      img {
        width: 30px;
        cursor: pointer;
        pointer-events: all;
        transition: all .2s;

        &:hover {
          transform: scale(1.2);
        }
      }
    }

    &-footer {
      display: flex;
      align-items: center;

      margin-top: 10px;

      span {
        margin-right: 50px;
      }
    }
  }
}
</style>
