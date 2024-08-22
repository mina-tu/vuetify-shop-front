<template>
  <v-container fluid class="full-background">
    <v-card class="main-card">
      <v-row>
        <v-col cols="2" class="sidebar">
          <v-list class="nav-link">
            <v-list-item :prepend-avatar="avatar" :title="user.account"></v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-list class="nav-link">
            <v-list-item
              v-for="item in navItems" :key="item.to"
              :to="item.to" :title="item.text"
              :class="{ 'selected-item': $route.path === item.to }"
            ></v-list-item>
            <v-list-item @click="logout" title="登出" class="logout-item"></v-list-item> <!-- 登出按鈕 -->
          </v-list>
        </v-col>
        <v-col cols="10" class="main-content">
          <router-view></router-view>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script setup>
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const user = useUserStore()
const router = useRouter()

const navItems = [
  { to: '/admin/products', text: '業績管理' },
  { to: '/admin/serve', text: '服務內容管理' },
  { to: '/admin/contact', text: '表單管理' },
  { to: '/', text: '回首頁' }
]

// 替換為你的自訂圖片 URL
const avatar = 'https://i.imgur.com/PXCXn2u.png'

const logout = () => {
  user.logout() // 實際的登出邏輯，這可能會改變用戶狀態
  router.push('/') // 登出後重定向到首頁或其他頁面
}
</script>

<style scoped>
.full-background {
  display: flex;
  min-height: 100vh;
  background: url('@/assets/adminback2.png') center;
  align-items: center;
  justify-content: center;
}

.main-card {
  width: 90%;
  height: 86vh;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  padding: 2rem;
  background: url('@/assets/Abstract.jpg');
}

.sidebar {
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  flex-direction: column;
  padding: 0px !important;
}

.main-content {
  background-color: #ffffff;
  border-radius: 1rem;
}

.nav-link {
  background: #ffffff00;
}

.v-list-item.selected-item {
  background-color: #4865b6 !important;
  color: #ffffff !important;
  font-weight: bold;
}

.v-list-item {
  border-radius: 8px 0 0 8px !important;
  margin-bottom: 4px;
}
.v-list-item:hover {
  background-color: black !important;
  color: rgb(255, 255, 255) !important;
}

.logout-item {
  background-color: transparent !important;
  color: rgb(0, 13, 255) !important;
  font-weight: 900;
  margin-top: 27rem;
  cursor: pointer;
}
.logout-item:hover {
  background-color: black !important;
  color: rgb(255, 255, 255) !important;
  font-weight: 900;
  margin-top: 27rem;
  cursor: pointer;
}
</style>
