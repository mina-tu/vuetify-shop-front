<template>
  <PortfolioSpline />
  <v-main class="backimg">
  <v-container style="margin-top: 1rem;">
    <v-row>
      <v-col cols="12" style="margin-top: 2rem;">
        <div class="text-left"
        style="line-height: 2;
        font-size: 40px;
        font-weight: bolder;">
          實績案例</div>
      </v-col>
    </v-row>
    <v-row style="margin-bottom: 10rem;">
      <v-col v-for="product in products" :key="product._id" cols="12" sm="6" md="4" lg="3" >
        <ProductCard id="card" v-bind="product" />
      </v-col>
    </v-row>
  </v-container>
</v-main>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import ProductCard from '@/components/productCard.vue'
import { definePage } from 'vue-router/auto'
import PortfolioSpline from '@/components/PortfolioSpline.vue'

definePage({
  meta: {
    title: '實績案例',
    login: false,
    admin: false
  }
})
const { api } = useApi()
const createSnackbar = useSnackbar()

const page = ref(1)
const pages = ref(1)
const ITEMS_PER_PAGE = 20

const products = ref([])
const loadProducts = async () => {
  try {
    const { data } = await api.get('/product', {
      params: {
        itemsPerPage: ITEMS_PER_PAGE,
        page: page.value
      }
    })
    pages.value = Math.ceil(data.result.total / ITEMS_PER_PAGE)
    products.value.splice(0, products.value.length, ...data.result.data)
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
onMounted(loadProducts)

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
