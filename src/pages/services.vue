<template>
  <!-- <PortfolioSpline /> -->
  <v-main class="backimg">
  <v-container style="margin-top: 2rem;">
    <v-row>
      <v-col cols="12" style="margin-top: 2rem;">
        <div class="text-left"
        style="line-height: 2;
        font-size: 40px;
        font-weight: bolder;">
          服務內容</div>
          <p style="font-size: 20px;color: blue;">主要業務為水處理系統規劃設計及施工</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="serve in services" :key="serve._id" cols="12" >
        <ServeCard id="card" v-bind="serve" />
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import ServeCard from '@/components/serveCard.vue'
import { definePage } from 'vue-router/auto'
// import PortfolioSpline from '@/components/PortfolioSpline.vue'

definePage({
  meta: {
    title: '服務內容',
    login: false,
    admin: false
  }
})
const { api } = useApi()
const createSnackbar = useSnackbar()

const page = ref(1)
const pages = ref(1)
const ITEMS_PER_PAGE = 20

const services = ref([])
const loadServices = async () => {
  try {
    const { data } = await api.get('/serve', {
      params: {
        itemsPerPage: ITEMS_PER_PAGE,
        page: page.value
      }
    })
    pages.value = Math.ceil(data.result.total / ITEMS_PER_PAGE)
    services.value.splice(0, services.value.length, ...data.result.data)
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
}
onMounted(loadServices)

</script>
<style scoped>
.backimg{
  background-image: url('../assets/backimg3.png');
  background-size: cover;
}
#card{
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5); /* 半透明白色背景 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
  border-radius: 10px; /* 圓角 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 陰影效果 */
}

</style>
