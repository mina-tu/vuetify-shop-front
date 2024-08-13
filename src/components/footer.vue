<template>
  <div style="border-top: 2px solid blue;padding: 2rem;"></div>
  <v-container id="bg" class="footer-container">
    <v-row class="footer-content">
      <v-col cols="12" md="3" class="footer-col">
        <h1 class="logo text-h2 font-weight-bold">DST</h1>
      </v-col>
      <v-col cols="12" md="3" class="footer-col">
        <h3 class="footer-title">達耀工程有限公司</h3>
        <p class="footer-text">
          成立於 2007 年，專業於水處理，<br>
          工程規劃設計、製造等，擁有豐<br>
          富的實績，已完成將近百件專案。
        </p>
      </v-col>
      <v-col cols="12" md="3" class="footer-col">
        <h3 class="footer-title">地址</h3>
        <p class="footer-text">桃園市平鎮區永德路18號</p>
      </v-col>
      <v-col cols="12" md="3" class="footer-col">
        <h3 class="footer-title">聯絡資訊</h3>
        <p class="footer-text">TEL: 03-2840-0803</p>
      </v-col>
    </v-row>
  </v-container>
 </template>

<script>
export default {
  name: 'FooterComponent',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    subscribe () {
    // Implement subscribe logic here
      console.log('Subscribing with email:', this.email)
    // You might want to call an API or dispatch a Vuex action here
    }
  }
}
</script>

 <style scoped>
.footer-container {
   margin-top: 10vh;
   margin-bottom: 10vh;
}
.footer-title {
   color: blue;
   font-size: 1.2rem;
   font-weight: bold;
   margin-bottom: 20px;
}
 </style>
