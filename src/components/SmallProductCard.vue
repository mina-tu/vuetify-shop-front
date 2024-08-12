<template>
  <v-card flat class="product-card">
    <v-img :src="image" height="70%" cover class="product-image"></v-img>
    <div class="product-info">
      <v-card-title class="product-name">{{ name }}</v-card-title>
      <v-card-subtitle class="product-description">{{ description }}</v-card-subtitle>
    </div>
    <v-btn @click="addCart" :loading="loading" class="more">
      詳細內容
    </v-btn>
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
  max-width: 350px;
  margin: auto;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  transition: transform 0.3s ease;
}

.product-info {
  text-align: left;
  position: relative;
}

.product-name {
  color: black;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.2px;
  margin-bottom: 2px;
}

.product-description {
  color: blue;
  font-size: 0.8rem;
  margin-bottom: 10px;
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

.product-card:hover .product-image {
  transform: scale(1.1);
}

.product-card:hover .product-info {
  background-color: rgb(255, 255, 255);
  z-index: 1;
}

@media (max-width: 600px) {
  .more {
    width: 90%; /* 更窄螢幕上的按鈕寬度 */
    max-width: 200px; /* 小螢幕上的最大寬度 */
  }

  .product-name {
    font-size: 2rem;
  }

  .product-description {
    font-size: 0.7rem;
  }
}
</style>
