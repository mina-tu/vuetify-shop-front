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
          :slides-per-view="3"
          :centered-slides="false"
          :space-between="10"
          :pagination="{ el: '.swiper-pagination', type: 'bullets', clickable: true }"
          :navigation="{ nextEl: '.custom-next-btn', prevEl: '.custom-prev-btn' }"
          :modules="modules"
          :breakpoints="breakpoints"
          class="mySwiper"
        >
          <swiper-slide v-for="product in products" :key="product._id">
            <SmallProductCard v-bind="product" />
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
import SmallProductCard from '@/components/SmallProductCard.vue'
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
    slidesPerView: 2,
    spaceBetween: 30
  },
  1200: {
    slidesPerView: 3,
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
 margin-top: 6rem;
}

.custom-prev-btn,
.custom-next-btn {
  background-color: none; /* 背景色 */
  box-shadow: none; /* 陰影 */
  color: rgb(0, 0, 0);
  top:20vh;
}

/* 大於 1200px 的螢幕 */
@media (min-width: 1200px) {
  .custom-prev-btn,
  .custom-next-btn {
    top: 15vh;
  }

  .custom-prev-btn {
    left: 0px;
  }

  .custom-next-btn {
    right: 40vw;
  }
}

/* 大於 900px 且小於 1200px 的螢幕 */
@media (min-width: 900px) and (max-width: 1199px) {
  .custom-prev-btn,
  .custom-next-btn {
    top: 15vh;
  }

  .custom-prev-btn {
    left: 0px;
  }

  .custom-next-btn {
    right: 35vw;
  }
}

/* 小於 900px 的螢幕 */
@media (max-width: 899px) {
  .custom-prev-btn,
  .custom-next-btn {
    transform: translateY(-60%);
    top: 0;
  }

}
/* 小於 600px 的螢幕 */
@media (max-width: 599px) {
  .custom-prev-btn,
  .custom-next-btn {
    top: 0;
  }

}
</style>
