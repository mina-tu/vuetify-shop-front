<template>
  <v-container id="containerbox" fluid>
    <v-row no-gutters align="center" justify="center" style="position: relative;">
      <v-col cols="1" class="text-center">
        <!-- 自定義的左箭頭 -->

        <v-btn icon class="custom-prev-btn">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

      </v-col>

      <v-col cols="10">
        <swiper
          :slides-per-view="4"
          :centered-slides="false"
          :space-between="10"
          :pagination="{ el: '.swiper-pagination', type: 'bullets', clickable: true }"
          :navigation="{ nextEl: '.custom-next-btn', prevEl: '.custom-prev-btn' }"
          :modules="modules"
          :breakpoints="breakpoints"
          class="mySwiper"
        >
          <swiper-slide v-for="product in products" :key="product._id">
            <ProductCard v-bind="product" />
          </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
      </v-col>

      <v-col cols="1" class="text-center">
        <!-- 自定義的右箭頭 -->

        <v-btn icon class="custom-next-btn">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'
import ProductCard from '@/components/productCard.vue'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'

const { api } = useApi()
const createSnackbar = useSnackbar()

const products = ref([])
const loadProducts = async () => {
  try {
    const { data } = await api.get('/product', {
      params: {
        itemsPerPage: 20,
        page: 1
      }
    })
    products.value.splice(0, products.value.length, ...data.result.data)
  } catch (error) {
    console.log(error)
    createSnackbar({
      text: error?.response?.data?.message || '發生錯誤',
      snackbarProps: {
        color: 'red'
      }
    })
  }
}
onMounted(loadProducts)

const modules = [Pagination, Navigation]

const breakpoints = {
  500: {
    slidesPerView: 1,
    spaceBetween: 30
  },
  900: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  1200: {
    slidesPerView: 4,
    spaceBetween: 30
  }
}
</script>

<style scoped>
.mySwiper {
  width: 100%;
  height: 100%;
  position: relative;
}

#containerbox {
  padding: 0;
}

.swiper-pagination {
  position: relative;
  text-align: right;
  top: 1rem;
}

.custom-prev-btn,
.custom-next-btn {
  width: 50px; /* 寬度 */
  height: 50px; /* 高度 */
  box-shadow: none; /* 陰影 */
  color: rgb(0, 0, 0);
}

@media (max-width: 900px) {
  .custom-prev-btn,
  .custom-next-btn {
    transform: translateY(-60%);
  }
}
</style>
