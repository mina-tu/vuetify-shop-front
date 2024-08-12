<template>
  <SplineScene />

  <v-container>
    <!-- 公司介紹 -->
    <v-row>
      <v-col cols="12">
        <div class="text-center" style="font-size: 58px; font-weight: bolder; line-height: 2;">
          達耀工程有限公司
        </div>
        <p style="line-height: 2;font-size: 17px;color: gray;">
          我們的經營理念是「完美的產品、完善的品質、完整的服務」，並以Total Solution為客戶提供全面的解決方案<br>
        </p>
      </v-col>
    </v-row>
  </v-container>
  <v-container fluid class="pa-0">
    <!-- 上方圖片 -->
    <v-row no-gutters>
      <v-img
        src="../assets/serve1.png"
        height="100%"
        width="100vw"
        class="d-flex"
      >
      </v-img>
    </v-row>

    <!-- 中間內容 -->
    <v-row class="mt-4" justify="center">
      <v-col cols="12" sm="3" style="padding: 2rem;">
        <div class="text-h4 font-weight-bold">水處理系統</div>
        <div class="text-h5 font-weight-bold" style="line-height: 2;">規劃設計及施工</div>
      </v-col>

      <v-col cols="12" sm="3" style="padding: 2rem; position: relative;">
        <div class="text-h5 font-weight-bold mb-4">主要業務</div>
        <ul class="pl-2 no-bullets">
          <li>原水處理系統</li>
          <li>純水及超純水系統</li>
          <li>特殊廢水回收系統</li>
          <li>製程液純化系統</li>
          <li>冷凝水回收系統</li>
          <li>冷卻水塔旁濾系統</li>
        </ul>
        <!-- 藍色色塊 -->
        <div style="background-color: #0000FF;
         width: 200px; height: 200px;
         position: absolute;
         top: -6rem;
         right: -28rem;"></div>
      </v-col>

      <v-col cols="12" sm="3" style="padding: 2rem; position: relative;">
        <div class="text-h5 font-weight-bold mb-4">次要業務</div>
        <ul class="pl-2 no-bullets">
          <li>機械安裝</li>
          <li>配管工程</li>
          <li>水處理耗材及藥劑銷售</li>
        </ul>
        <!-- 藍色色塊 -->
        <div style="background-color: #0000FF;
        width: 250px; height: 250px;
        position: absolute;
        top: -12rem;
        right: -15rem;"></div>
      </v-col>
    </v-row>

    <!-- 跑馬燈 -->
    <v-row class="mt-6">
      <MarqueeComponent />
    </v-row>
  </v-container>
  <section style="margin-bottom: 7rem;">
    <div id="portfolioTitle" >實績案例</div>
<portfolioCard />
</section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { definePage } from 'vue-router/auto'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import SplineScene from '@/components/SplineScene.vue'
import portfolioCard from '@/components/portfolioCard.vue'
import MarqueeComponent from '@/components/MarqueeComponent.vue'

definePage({
  meta: {
    title: '達耀工程有限公司',
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
.app-container {
  height: 100vh;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-position: center calc(50% - 50px);
}
#topimg {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
}

#topimg img {
  display: block;
  max-width: 100%;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
}
section {
  margin: 50px;
  height: 70vh;
  vertical-align: middle;
}
#info {
  background: #ffffff;
  padding: 1rem;
}
#infotitle {
  font-size: 21px;
  font-weight: 600;
  color: blue;
  margin: 1rem;
}
#infotext {
  font-size: 15px;
  color: rgb(40, 40, 40);
}

h1 {
  color: blue !important;
  line-height: 3;
}
p {
  text-align: center;
  font-size: 17px;
  font-weight: 450;
  margin: 1rem;
}
.ServiceContent {
  font-size: 15px;
  font-weight: 450;
  margin: 1rem;
  text-align: left;
}

.v-container {
  max-width: 100% !important;
}

.main-business,
.form-container {
  text-align: left;
}
.text-h2{
  font-family: 'Jost', sans-serif;
  font-weight: 900;
}
#portfolioTitle{
  color: rgb(0, 0, 0);
  font-size: 35px;
  font-weight: bolder;
  line-height: 5;
  text-align: center;
}
</style>
