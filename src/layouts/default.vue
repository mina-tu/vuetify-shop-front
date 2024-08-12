<template>
  <!-- 導覽列 -->
  <v-app-bar class="navbar" elevation="0" flat :class="{ 'scrolled': isScrolled }">
    <v-container class="navbar">
      <v-row no-gutters align="center">
        <!-- 標題 -->
        <v-col cols="4">
          <v-btn to="/" :active="false" style="font-size: 30px;" class="nav-item">DST</v-btn>
        </v-col>
        <v-spacer />
        <v-col v-if="mobile" cols="auto">
          <!-- 手機版漢堡按鈕 -->
          <v-app-bar-nav-icon @click="drawer = true" class="nav-item"></v-app-bar-nav-icon>
        </v-col>
        <v-col v-else cols="auto">
          <v-row no-gutters>
            <!-- 電腦版選單 -->
            <template v-for="item in allNavItems" :key="item.to">
              <v-col cols="auto">
                <v-btn v-if="item.show" :prepend-icon="item.icon" :to="item.to" class="nav-item">
                  {{ item.text }}
                  <v-badge color="red" :content="user.cart" v-if="item.to === '/cart' && user.cart > 0" floating></v-badge>
                </v-btn>
              </v-col>
            </template>
            <v-col cols="auto" v-if="user.isLogin">
              <v-btn @click="logout" class="nav-item">登出</v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <!-- 手機版側欄，放在導覽列下方 -->
  <v-navigation-drawer v-if="mobile" v-model="drawer" app class="mobile-drawer">
    <v-list nav>
      <template v-for="item in allNavItems" :key="item.to">
        <v-list-item
          :prepend-icon="item.icon"
          :to="item.to"
          :title="item.text"
          v-if="item.show"
          class="nav-item"
        >
          <template #append>
            <v-badge color="error" :content="user.cart" v-if="item.to === '/cart' && user.cart > 0" inline></v-badge>
          </template>
        </v-list-item>
      </template>
      <v-list-item  v-if="user.isLogin" title="登出" @click="logout" class="nav-item"></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <!-- 主要內容 -->
  <v-main class="mainimg">
    <router-view></router-view>
  </v-main>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useDisplay } from 'vuetify'
import { useUserStore } from '@/stores/user'
import { useSnackbar } from 'vuetify-use-dialog'

const { mobile } = useDisplay()
const user = useUserStore()
const createSnackbar = useSnackbar()

const drawer = ref(false)

// 新的導覽列項目
const newNavItems = [
  { to: '/about', text: '公司介紹', show: true },
  { to: '/services', text: '服務內容', show: true },
  { to: '/portfolio', text: '實績案例', show: true },
  { to: '/contact', text: '聯絡我們', show: !user.isLogin }
]

// 原有的功能項目
const functionItems = computed(() => [
  // { to: '/register', icon: 'mdi-account-plus', show: !user.isLogin },
  { to: '/login', text: '登入', show: !user.isLogin },
  // { to: '/cart', text: '購物車', icon: 'mdi-cart', show: user.isLogin },
  // { to: '/orders', text: '訂單', icon: 'mdi-list-box', show: user.isAdmin },
  { to: '/admin', text: '管理', show: user.isLogin && user.isAdmin }
])

// 合併所有導覽項目
const allNavItems = computed(() => [...newNavItems, ...functionItems.value])

const logout = async () => {
  await user.logout()
  createSnackbar({
    text: '登出成功',
    snackbarProps: {
      color: 'green'
    }
  })
}
// 滑鼠滾動效果
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
.navbar {
  background-color: transparent !important;
  transition: background-color 0.3s, backdrop-filter 0.3s;
}

.navbar.scrolled {
  background-color: rgba(255, 255, 255, 0.1) !important;
  backdrop-filter: blur(20px);
}
.mobile-drawer {
  background-color: rgba(255, 255, 255) !important;
}
.nav-item {
  color: rgb(0, 0, 0) !important; /* 將字體顏色改為藍色 */
  .v-icon {
    color: rgb(0, 0, 0) !important; /* 將圖標顏色改為藍色 */
  }
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgb(21, 0, 255) !important; /* hover時背景顏色改為藍色 */
    color: white !important; /* hover時字體顏色改為白色 */
  }
}
.mainimg{
  margin-top: -65px;
}
</style>
