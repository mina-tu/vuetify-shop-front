<template>
  <v-app>
    <router-view />
  </v-app>
  <Footer v-if="isShowPage" />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Footer from '@/components/footer.vue' // 引入 footer.vue

const route = useRoute()

const isShowPage = computed(() => !['/login', '/about'].includes(route.path))
</script>
