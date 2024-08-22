<template>
  <v-container>
    <v-row>
        <v-data-table
          :headers="headers"
          :items="messages"
          item-key="id"
          :loading="loading"
          hover
        >
<template #[`item.date`]="{ item }">
<span>{{ new Date(item.date).toLocaleDateString() }}</span>
</template>
        </v-data-table>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { definePage } from 'vue-router/auto'
import { useApi } from '@/composables/axios'

definePage({
  meta: {
    title: 'DST| 留言管理'
  }
})

const messages = ref([])
const loading = ref(false)
const headers = [
  { text: '公司名稱', value: 'companyName' },
  { text: '公司統編', value: 'companyId' },
  { text: '聯絡人姓名', value: 'contactName' },
  { text: '聯絡人電話', value: 'contactPhone' },
  { text: '訊息', value: 'message' },
  { text: '日期', value: 'date' }
]

const { apiAuth } = useApi() // 假設你的 useApi 返回 apiAuth，用來處理已授權的請求

const fetchMessages = async () => {
  loading.value = true
  try {
    const response = await apiAuth.get('/contactMessage/all') // 使用正確的 API 路徑
    if (response.data.success) {
      messages.value = response.data.result
    } else {
      console.error('Failed to fetch messages:', response.data.message)
    }
  } catch (error) {
    console.error('Error fetching messages:', error.message)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchMessages()
})
</script>

<route lang="yaml">
meta:
  layout: admin
</route>

<style scoped>

.mb-4 {
  margin-bottom: 16px;
}
</style>
