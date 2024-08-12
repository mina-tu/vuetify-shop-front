<template>
  <v-card flat class="product-card">
    <v-img :src="image" height="290" cover class="product-image"></v-img>
    <div class="product-info">
      <v-card-title class="product-name">{{ name }}</v-card-title>
      <v-card-subtitle class="product-description">{{ description }}</v-card-subtitle>
      <v-btn @click="addCart" :loading="loading" class="more" >
        詳細內容
      </v-btn>
    </div>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

import { useRouter } from 'vue-router'

const props = defineProps(['_id', 'name', 'image', 'description'])

const router = useRouter()

const loading = ref(false)

const addCart = async () => {
  router.push('/products/' + props._id)
}
</script>

<style scoped>
.product-card {
  max-width: 280px;
  margin: auto;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  box-shadow: none;
  transition: all 0.3s ease;
}

.product-image {
  object-fit: cover;
  width: 100%;
  height: 290px;
  transition: transform 0.3s ease;
}

.product-info {
  padding: 18px 0;
}

.product-name {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.product-description {
  color: blue;
  font-size: 0.9rem;
  margin-bottom: 16px;
}

.more {
  width: 100%; /* 調整按鈕寬度以適應不同螢幕 */
  max-width: 100%; /* 設置按鈕的最大寬度 */
  height: 70%; /* 調整按鈕高度 */
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: absolute;
  top: 37%;
  left: 50%;
  transform: translate(-50%, 0%);
  color: rgb(255, 255, 255);
  z-index: 10;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  white-space: nowrap; /* 防止按鈕文字換行 */
  font-size: 1rem;
}

.product-card:hover .more {
  opacity: 1;
  transform: translate(-50%, -50%);
  background: linear-gradient(to bottom, rgba(0, 39, 131, 0.2), blue); /* 使用線性漸層 */
}

.product-card:hover .more {
  opacity: 1;
  z-index: 2; /* 讓按鈕顯示在色塊之上 */
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

</style>
