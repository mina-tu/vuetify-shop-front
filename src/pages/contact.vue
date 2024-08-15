<template>
    <div id="main">
    <v-container >
      <!-- 第一組 v-row，聯絡資訊在左邊，表單在右邊 -->
      <v-row class="full-width">
        <v-col cols="12" md="6">
            <h2 id="title">CONTACT US</h2>
            <div class="infotext">
            <b>達耀工程有限公司</b><br>
            TEL: 03-2840-0803<br>
            地址: 桃園市平鎮區承德路18號
          </div>
        </v-col>
        <v-col cols="12" md="6" class="container-background">
          <v-form>
            <v-text-field label="公司名稱" required></v-text-field>
            <v-text-field label="公司統編" required></v-text-field>
            <v-text-field label="聯絡人姓名" required></v-text-field>
            <v-text-field label="聯絡人電話" required></v-text-field>
            <v-textarea label="詢問內容" required></v-textarea>
            <div class="button-container">
              <button class="btn">送出</button>
            </div>
          </v-form>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <div id="map"></div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { definePage } from 'vue-router/auto'
definePage({
  meta: {
    title: '聯絡我們',
    login: false,
    admin: false
  }
})
</script>

<style scoped>
#main {

  background: url('@/assets/glasssphere.png');
  background-size: cover;
  height: 100vh;
  padding: 7vh;
}

/* 設置 v-row 充滿整個容器寬度 */
.full-width {
  width: 100%;
  display: flex;
}

.left-align {
  justify-content: flex-start; /* 將內容對齊到左邊 */
}

.right-align {
  justify-content: flex-end; /* 將內容對齊到右邊 */
}

.container-background {
  background-color: rgba(255, 255, 255, 0.5); /* 半透明白色背景 */
  backdrop-filter: blur(80px); /* 毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
  padding: 16px;
  border-radius: 10px; /* 圓角 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 陰影效果 */
  width: 45vw;
  height: 60vh;
  margin-top: 15vh;
}

#title {
  font-size: clamp(4rem, 5vw, 70px); /* 字體大小在 2rem 到 70px 之間，根據視窗寬度調整 */
  letter-spacing: 0.1em; /* 調整字母間距 */
  font-family: "Jost", sans-serif; /* 使用 Jost 字體 */
  line-height: 1.5;
  margin-top: 5vh;
}
.infotext{
  line-height: 2;
  font-size: 18px;
  padding-top: 2rem;
}

.btn {
  color: rgb(0, 0, 0);
  background: linear-gradient(to bottom,rgb(0, 70, 248),blue); /* 漸層顏色 */
  color: white !important;
  border-radius: 5px;
  display: inline-block; /* 使按鈕成為行內塊元素 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 陰影效果 */
  margin-left: auto; /* 自動分配左邊距離 */
  width: 70px;
  height: 30px;
  margin-top: 1rem;
}

.button-container {
  display: flex; /* 使用 flex 布局 */
  justify-content: flex-end; /* 將內容對齊到右邊 */
}
</style>
