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
    <v-row no-gutters>
      <!-- 動態圖片 -->
      <v-img
        :src="currentImage"
        height="300"
        class="white--text align-end"
        @mouseover="changeImage('serve2.png')"
        @mouseleave="changeImage('serve1.png')"
      >
        <v-row justify="center" align="end" class="fill-height pb-0">
          <v-col cols="auto">
            <div class="serve">SERVE</div>
          </v-col>
        </v-row>
      </v-img>
    </v-row>

    <v-row class="mt-8" justify="center">
      <v-col cols="12" sm="4" style="padding: 4rem;">
        <h2 class="text-h3 font-weight-bold">水處理系統</h2>
        <h3 class="text-h4 font-weight-bold" style="line-height: 2;">規劃設計及施工</h3>
      </v-col>

      <v-col cols="12" sm="4" style="padding: 4rem;">
        <div class="main-business">
          <h3 class="text-h6 font-weight-bold mb-4">主要業務</h3>
          <ul class="pl-4 no-bullets">
            <li>原水處理系統</li>
            <li>純水及超純水系統</li>
            <li>特殊廢水回收系統</li>
            <li>製程液純化系統</li>
            <li>冷凝水回收系統</li>
            <li>冷卻水塔旁濾系統</li>
          </ul>
        </div>
      </v-col>

      <v-col cols="12" sm="4" style="padding: 4rem;">
        <div class="main-business">
          <h3 class="text-h6 font-weight-bold mb-4">次要業務</h3>
          <ul class="pl-4 no-bullets">
            <li>機械安裝</li>
            <li>配管工程</li>
            <li>水處理耗材及藥劑銷售</li>
          </ul>
        </div>
      </v-col>
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

// 設置初始圖片
const currentImage = ref(new URL('../assets/serve1.png', import.meta.url).href)

// 設置更換圖片的函數
const changeImage = (imageName) => {
  currentImage.value = new URL(`../assets/${imageName}`, import.meta.url).href
}
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
.serve{
  font-weight: bolder;
  display: flex;
  color: rgb(255, 255, 255); /* 調整文字顏色為白色 */
  align-items: center;
  line-height: 0.8; /* 調整行高 */
  height: 100%; /* 讓文字佔滿容器的高度 */
  width: 100%; /* 讓文字佔滿容器的寬度 */
  font-size: clamp(1rem, 35vw, 385px); /* 字體大小在 2rem 到 70px 之間，根據視窗寬度調整 */
}
#portfolioTitle{
  color: rgb(0, 0, 0);
  font-size: 35px;
  font-weight: bolder;
  line-height: 5;
  text-align: center;
}
</style>
