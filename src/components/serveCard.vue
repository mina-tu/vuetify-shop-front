<template>
  <v-card flat class="card">
    <v-row no-gutters>
      <v-col :cols="12" :md="6">
        <div class="info">
          <v-card-title class="name">{{ name }}</v-card-title>
          <v-card-info class="description">{{ description }}</v-card-info>
        </div>
      </v-col>
      <v-col :cols="12" :md="6">
        <v-img :src="image" height="100%" cover class="image"></v-img>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps(['_id', 'name', 'image', 'description'])

const router = useRouter()

const loading = ref(false)

const addCart = async () => {
  router.push('/serve/' + props._id)
}
</script>

<style scoped>
.card {
  max-width: 100%;
  margin: 20px auto;
  position: relative;
  overflow: hidden;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.image {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: transform 0.3s ease;
}

.name {
  color: #4e4e4e;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
  text-align: left;
  padding-left: 0; /* 確保文字緊貼左邊 */
}

.description {
  color: #000000;
  font-size: 1rem;
  margin-bottom: 16px;
  text-align: left;
  letter-spacing: 0.5px;
  padding-left: 0; /* 確保文字緊貼左邊 */
}

.info {
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

@media (max-width: 600px) {
  .v-row {
    flex-direction: column-reverse; /* 圖片在上，文字在下 */
  }

  .image {
    border-radius: 10px 10px 0 0; /* 調整圓角 */
    height: auto; /* 讓圖片高度自適應內容 */
  }

  .info {
    padding: 10px; /* 調整文字區塊的內距 */
  }
}
</style>
