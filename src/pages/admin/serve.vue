<template>
     <v-container style="margin-bottom: 10vh;">
       <v-row>
         <v-col cols="12">
          <v-col cols="12" class="d-flex justify-end">
           <v-btn  color="black" @click="openDialog(null)">新增服務</v-btn>
         </v-col>
           <v-data-table-server
             v-model:items-per-page="tableItemsPerPage"
             v-model:sort-by="tableSortBy"
             v-model:page="tablePage"
             :items="tableItems"
             :headers="tableHeaders"
             :loading="tableLoading"
             :items-length="tableItemsLength"
             :search="tableSearch"
             @update:items-per-page="tableLoadItems(false)"
             @update:sort-by="tableLoadItems(false)"
             @update:page="tableLoadItems(false)"
             hover
           >
             <template #top>
               <v-text-field
                 label="搜尋"
                 v-model="tableSearch"
                 append-icon="mdi-magnify"
                 @click-append="tableLoadItems(true)"
                 @keydown.enter="tableLoadItems(true)"
                 class="custom-search"
               ></v-text-field>
             </template>
             <template #[`item.image`]="{ value }">
               <v-img :src="value" height="55px"></v-img>
             </template>
             <template #[`item.sell`]="{ value }">
               <v-icon icon="mdi-check" v-if="value"></v-icon>
             </template>
             <template #[`item.action`]="{ item }" >
               <v-btn icon="mdi-pencil" variant="text" color="blue" @click="openDialog(item)"></v-btn>
             </template>
           </v-data-table-server>
         </v-col>
       </v-row>
     </v-container>
     <v-dialog v-model="dialog.open" persistent width="500">
       <v-form @submit.prevent="submit" :disabled="isSubmitting">
         <v-card>
           <v-card-title>{{ dialog.id ? '編輯' : '新增' }}</v-card-title>
           <v-card-text>
             <v-text-field
               label="名稱"
               v-model="name.value.value"
               :error-messages="name.errorMessage.value"
             ></v-text-field>
             <v-checkbox
               label="新增"
               v-model="sell.value.value"
               :error-messages="sell.errorMessage.value"
             ></v-checkbox>
             <v-textarea
               label="說明"
               v-model="description.value.value"
               :error-messages="description.errorMessage.value"
             ></v-textarea>
             <vue-file-agent
               v-model="fileRecords"
               v-model:raw-model-value="rawFileRecords"
               accept="image/jpeg,image/png"
               deletable
               max-size="1MB"
               help-text="選擇檔案或拖曳到這裡"
               :error-text="{ type: '檔案格式不支援', size: '檔案大小不能超過 1MB' }"
               ref="fileAgent"
             ></vue-file-agent>
           </v-card-text>
           <v-card-actions>
             <v-btn color="red" :loading="isSubmitting" @click="closeDialog">取消</v-btn>
             <v-btn color="green" type="submit" :loading="isSubmitting">送出</v-btn>
           </v-card-actions>
         </v-card>
       </v-form>
     </v-dialog>
   </template>

<script setup>
import { definePage } from 'vue-router/auto'
import { ref } from 'vue'
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

definePage({
  meta: {
    title: 'DST| 服務內容管理'
  }
})

const { apiAuth } = useApi()
const createSnackbar = useSnackbar()

const fileAgent = ref(null)

const dialog = ref({
  // 編輯對話框的狀態
  open: false,
  // 紀錄編輯中的 id，沒有就是新增，有就是編輯
  id: ''
})

const openDialog = (item) => {
  if (item) {
    dialog.value.id = item._id
    name.value.value = item.name
    description.value.value = item.description
    sell.value.value = item.sell
  } else {
    dialog.value.id = ''
  }
  dialog.value.open = true
}

const closeDialog = () => {
  dialog.value.open = false
  resetForm()
  fileAgent.value.deleteFileRecord()
}

const schema = yup.object({
  name: yup
    .string()
    .required('業主名稱必填'),
  description: yup
    .string()
    .required('說明必填'),
  sell: yup
    .boolean()
})
const { handleSubmit, isSubmitting, resetForm } = useForm({
  validationSchema: schema,
  initialValues: {
    name: '',
    description: '',
    sell: true
  }
})
const name = useField('name')
const description = useField('description')
const sell = useField('sell')

const fileRecords = ref([])
const rawFileRecords = ref([])

const submit = handleSubmit(async (values) => {
  if (fileRecords.value[0]?.error) return
  if (dialog.value.id.length === 0 && fileRecords.value.length < 1) return

  try {
    const fd = new FormData()
    // fd.append(key, value)
    fd.append('name', values.name)
    fd.append('description', values.description)
    fd.append('sell', values.sell)

    if (fileRecords.value.length > 0) {
      fd.append('image', fileRecords.value[0].file)
    }

    if (dialog.value.id === '') {
      await apiAuth.post('/serve', fd)
    } else {
      await apiAuth.patch('/serve/' + dialog.value.id, fd)
    }

    createSnackbar({
      text: dialog.value.id === '' ? '新增成功' : '編輯成功',
      snackbarProps: {
        color: 'blue'
      }
    })
    closeDialog()
    tableLoadItems(true)
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
})

const tableItemsPerPage = ref(10)
const tableSortBy = ref([
  { key: 'createdAt', order: 'desc' }
])
const tablePage = ref(1)
const tableItems = ref([])
const tableHeaders = [
  { title: '圖片', align: 'center', sortable: false, key: 'image' },
  { title: '業務', align: 'center', sortable: true, key: 'name' },
  { title: '新增', align: 'center', sortable: true, key: 'sell' },
  { title: '編輯', align: 'center', sortable: false, key: 'action' }
]
const tableLoading = ref(true)
const tableItemsLength = ref(0)
const tableSearch = ref('')
const tableLoadItems = async (reset) => {
  if (reset) tablePage.value = 1
  tableLoading.value = true
  try {
    const { data } = await apiAuth.get('/serve/all', {
      params: {
        page: tablePage.value,
        itemsPerPage: tableItemsPerPage.value,
        sortBy: tableSortBy.value[0]?.key || 'createdAt',
        sortOrder: tableSortBy.value[0]?.order || 'desc',
        search: tableSearch.value
      }
    })
    tableItems.value.splice(0, tableItems.value.length, ...data.result.data)
    tableItemsLength.value = data.result.total
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
  tableLoading.value = false
}
tableLoadItems()
</script>

   <route lang="yaml">
   meta:
     layout: admin
   </route>
<style scoped>
.v-table {
  overflow: hidden;
}

.custom-search {
  max-width: 300px;
}
</style>
