<template>
  <v-container class=" ">
    <v-row>
      <v-col cols="12">
        <h1 class="text-center">管理</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-data-table
          :items="items"
          :headers="headers"
        >
          <template #[`item.cart`]="data">
            <ul>
              <li v-for="item in data.item.cart" :key="item._id">
                {{ item.p_id.name }} * {{ item.quantity }}
              </li>
            </ul>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>

</template>

<script setup>
import { definePage } from 'vue-router/auto'

definePage({
  meta: {
    title: '達耀工程有限公司 | 管理',
    login: true,
    admin: true
  }
})
</script>

<route lang="yaml">
meta:
  layout: admin
</route>
<style scoped>

</style>
