<template>
  <v-container id="bg" class="footer-container">
    <v-row class="footer-content">
      <v-col cols="12" sm="6" md="3" class="footer-col">
        <h1 class="logo text-h2 font-weight-bold text-center text-sm-left">DST</h1>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="footer-col">
        <h3 class="footer-title">達耀工程有限公司</h3>
        <p class="footer-text">
          成立於 2007 年，專業於水處理，<br>
          工程規劃設計、製造等，擁有豐<br>
          富的實績，已完成將近百件專案。
        </p>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="footer-col">
        <h3 class="footer-title">地址</h3>
        <p class="footer-text">桃園市平鎮區永德路18號</p>
      </v-col>
      <v-col cols="12" sm="6" md="3" class="footer-col">
        <h3 class="footer-title">聯絡資訊</h3>
        <p class="footer-text">TEL: 03-2840-0803</p>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
.footer-container {
  padding: 60px 0;
  color: rgb(255, 255, 255);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-col {
  margin-bottom: 30px;
}

.footer-title {
  color: rgb(255, 255, 255);
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-text {
  font-size: 1rem;
  line-height: 1.5;
}

.logo {
  color: rgb(255, 255, 255);
  font-size: 3rem;
  font-weight: bold;
}

@media (max-width: 600px) {
  .footer-container {
    padding: 30px 0;
  }

  .footer-col {
    text-align: center;
  }

  .logo {
    font-size: 2.5rem;
  }
}

@media (min-width: 601px) and (max-width: 960px) {
  .footer-col:nth-child(odd) {
    text-align: left;
  }

  .footer-col:nth-child(even) {
    text-align: right;
  }
}

@media (min-width: 961px) {
  .footer-col {
    text-align: left;
  }
}
.backimg{
  background-image: url('../assets/footerback.png') !important;
  background-size: cover;
  width: 100%;

}
</style>
