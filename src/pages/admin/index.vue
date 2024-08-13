<template>
  <div class="bg"></div>
</template>

<script setup>
import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: '達耀工程有限公司 | 管理',
    login: true,
    admin: true,
    showNavbar: false // 隱藏導覽列
  }
})
</script>

<route lang="yaml">
meta:
  layout: admin
</route>

<style scoped>
.bg{
  background: url('@/assets/NoisyGlass.png') center center fixed;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
}
</style>
