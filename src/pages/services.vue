<template>
  <v-main class="backimg">
    <v-container style="margin-top: 90vh;">
      <!-- gsap---------------------------------------------------------------- -->
      <div class="ball1"></div>
      <div class="ball2"></div>
      <div class="ball3"></div>
      <div class="ball4"></div>
      <!-- gsap---------------------------------------------------------------- -->
      <v-row>
        <v-col cols="12" style="margin-top: 2rem;">
          <div class="text-left" style="line-height: 2; font-size: 40px; font-weight: bolder;">
            服務內容
          </div>
          <p style="font-size: 20px;color: blue;">
            主要業務為水處理系統規劃設計及施工
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="serve in services" :key="serve._id" cols="12">
          <ServeCard id="card" v-bind="serve" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import ServeCard from '@/components/serveCard.vue'
import { definePage } from 'vue-router/auto'
import AOS from 'aos'
import 'aos/dist/aos.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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

// 載入服務資料
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

// 初始化 GSAP 和 AOS
gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
  await loadServices()

  await nextTick() // 確保DOM渲染完成

  // 初始化 GSAP ScrollTrigger 動畫
  gsap.to('.ball1', {
    scrollTrigger: {
      trigger: '.ball1',
      start: 'top 102%', // 調整起始位置
      end: 'bottom 40%', // 調整結束位置
      scrub: 1
    },
    duration: 1,
    y: '-85vh', // 垂直由下往上移動
    ease: 'linear'
  })

  // 新增第二個球的動畫
  gsap.to('.ball2', {
    scrollTrigger: {
      trigger: '.ball2',
      start: 'top 102%', // 調整起始位置
      end: 'bottom 50%', // 調整結束位置
      scrub: 1
    },
    duration: 1,
    y: '-70vh', // 垂直由下往上移動
    ease: 'power2.in'
  })
  // 新增第三個球的動畫
  gsap.to('.ball3', {
    scrollTrigger: {
      trigger: '.ball2',
      start: 'top 90%', // 調整起始位置
      end: 'bottom -30%', // 調整結束位置
      scrub: 1
    },
    duration: 1.5,
    y: '-80vh', // 垂直由下往上移動
    ease: 'power1.out'
  })
  gsap.to('.ball4', {
    scrollTrigger: {
      trigger: '.ball1',
      start: 'top 90%', // 調整起始位置
      end: 'bottom 40%', // 調整結束位置
      scrub: 1
    },
    duration: 1,
    y: '-85vh', // 垂直由下往上移動
    ease: 'linear'
  })
  // 初始化 AOS 動畫
  AOS.init()
})
</script>

<style scoped>
.backimg {
  background-image: url('../assets/backserve.png');
  background-size: cover;
}

#card {
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5); /* 半透明白色背景 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
  border-radius: 10px; /* 圓角 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 陰影效果 */
}

.ball1 {
  width: 100px;
  height: 100px;
  background-image: url('@/assets/siliverball2.png');
  background-size: cover; /* 確保圖片覆蓋整個區域 */
  border-radius: 50%;
  position: relative;
  left: 0vw; /* 初始位置向左移動 */
}

.ball2 {
  width: 100px;
  height: 100px;
  background-image: url('@/assets/sliverball.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  position: relative;
  top:7vh;
  left: -10vw;
}
.ball3 {
  width: 200px;
  height: 200px;
  background-image: url('@/assets/siliverball2.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  position: relative;
  left: 65vw;
}
.ball4 {
  width: 70px;
  height: 70px;
  background-image: url('@/assets/sliverball.png');
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  position: relative;
  left: 45vw;
}
</style>
