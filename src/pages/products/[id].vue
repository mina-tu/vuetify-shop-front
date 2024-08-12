<template>
  <v-container fluid style="margin-top: 3rem;">
    <v-row>
      <!-- 圖片在左 -->
      <v-col cols="12" md="6">
        <v-img :src="product.image" height="100vh" cover></v-img>
      </v-col>
      <!-- 文字在右 -->
      <v-col cols="12" md="6" sm="12" style="border-left: 2px solid blue;" class="right">
        <v-row>
          <v-col cols="12">
            <section class="section" style="margin-top: 5rem;">
              <div class="time">{{ product.year }}</div>
              <div class="title mb-5">{{ product.name }}</div>
              <div class="info">{{ product.description }}</div>
            </section>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <section class="section more" style="margin-top: 8vh;">
              <h3 style="font-size: 20px;margin-bottom: 2rem;">更多案例</h3>
              <SmallPortfolioCard />
            </section>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { definePage, useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router/auto'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import SmallPortfolioCard from '@/components/SmallPortfolioCard.vue'

definePage({
  meta: {
    title: 'DST | 實績案例',
    login: false,
    admin: false
  }
})

const { api } = useApi()
const route = useRoute()
// const router = useRouter()
const createSnackbar = useSnackbar()

const product = ref({
  _id: '',
  name: '',
  year: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
})

const load = async (id) => {
  try {
    const { data } = await api.get('/product/' + id)
    product.value = data.result
    document.title = '達耀工程有限公司 | ' + product.value.name
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

// 使用 onBeforeRouteUpdate 來處理路由更新
onBeforeRouteUpdate((to, from) => {
  // 檢查新舊路由的 id 是否不同
  if (to.params.id !== from.params.id) {
    load(to.params.id)
  }
})

// 初始加載
onMounted(() => {
  load(route.params.id)
})
</script>

<style scoped>

.time {
  font-size: 3rem; /* 調整字體大小以減少空間佔用 */
  font-weight: bolder;
}
.title {
  font-size: 40px; /* 調整字體大小以減少空間佔用 */
  font-weight: 900;
}
.info {
  font-size: 20px; /* 調整字體大小以減少空間佔用 */
  font-weight: bold;
  background-color: blue;
  color: white;
  border-radius: 2rem;
  padding: 7px;
  display: inline-block;
  letter-spacing: 3px; /* 調整字距來減少空間佔用 */
}
.right {
  min-height: calc(100vh - 100px); /* 確保右側內容區域的最小高度 */
  margin-bottom: 100px; /* 確保內容不會覆蓋 footer */
}

.section {
  margin-bottom: 2rem;
}

.more {
  margin-top: 8vh;
}
</style>
