<template>
  <v-main class="backimg">
      <!-- 頁首區域 -->
      <v-container>
        <section class="top-section">
  <div id="demo">
  <splitText />
  </div>
</section>

        <section class="header-section full-screen" >
          <div class="header-content">
            <v-row>
              <v-col cols="12" md="6" data-aos="fade-right">
                <h1>達耀工程有限公司</h1>
              </v-col>
              <v-col cols="12" md="6" data-aos="fade-left">
                <p>
                成立於 2007 年，專業於水處理工程規劃設計、製造等，擁有豐富的實績，已完成將近百件專案。實績包括台塑、中油、大連等知名企業
                </p>
              </v-col>
            </v-row>
          </div>
        </section>
      </v-container>

      <!-- 產品介紹區域 -->
  <v-container fluid class="business-items-container " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
    <div class="content-wrapper">
      <h1 class="title">Business items</h1>
      <div class="main-business" data-aos="fade-up">
        <h2 class="subtitle">主要業務</h2>
        <ul class="business-list">
          <li>水處理系統規劃設計及施工</li>
          <li>原水處理系統規劃設計及施工</li>
          <li>純水及超純水系統規劃設計及施工</li>
          <li>特殊廢水回收系統規劃設計及施工</li>
          <li>製程液純化系統規劃設計及施工</li>
          <li>冷凝水回收系統規劃設計及施工</li>
          <li>冷卻水塔旁濾系統規劃設計及施工</li>
        </ul>
      </div>
    </div>
  </v-container>
  <MarqueeServe />
  <v-container fluid class="business-items-container2 " data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" >
    <div class="main-business2" data-aos="fade-up" data-aos-delay="500">
        <h2 class="subtitle" >次要業務</h2>
        <ul class="business-list">
          <li>機械安裝</li>
          <li>配管工程</li>
          <li>水處理耗材</li>
          <li>藥劑銷售</li>
        </ul>
      </div>
  </v-container>
  <marqueeDST class="marqueelogo" />
      <!-- 公司概況區域 -->
      <v-container  class="work-container">
        <section class="about-section1" data-aos="fade-up">
          <div class="ball"></div>
          <h2 class="about-sectionh2">業務概述</h2>
          <p>
            達耀工程有限公司，創立於2007年，以「積極、進取、創新、負責」之經營宗旨，服務客戶，提升競爭能力。<br />
            雖然是新的公司，但公司人員於水處理系統之設計、製作上已有二十幾年之經歷。<br />
            成立以來，經過多年的歷練，系統的不斷改善與創新及公司成員自身的努力下，一步一步建立企業並逐漸擴大經營領域。
          </p>
        </section>
        <section class="about-section2" data-aos="fade-up">
          <div class="ball"></div>
          <h2 class="about-sectionh2">未來展望</h2>
          <p>
            世界科技不斷進步，從早期傳統"CCR 逆向再生系統"，研發至最新的水處理之製程"Compack Bed 系統"，我們為此前進的腳步從不停歇，<br />
            使本公司的水處理系統獨樹一格。<br />
            未來的經營計畫中，將繼續朝向更全面、更多元、更專業的目標大步邁進。
          </p>
        </section>
        <section class="about-section3" data-aos="fade-up">
          <div class="ball"></div>
          <h2 class="about-sectionh2">經營理念</h2>
          <p>
            完美的產品、完善的品質、完整的服務，是我們一直堅持不變的經營理念態度，做到 Total Solution 更是我們對客戶的保證。
          </p>
        </section>
      </v-container>
    <aboutFooter class="footer" />
  </v-main>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { definePage } from 'vue-router/auto'
import MarqueeServe from '@/components/MarqueeServe .vue'
import aboutFooter from '@/components/aboutFooter.vue'
import marqueeDST from '@/components/MarqueeDST .vue'
import 'animate.css'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import splitText from '@/components/splitText.vue'

definePage({
  meta: {
    title: '公司介紹',
    login: false,
    admin: false
  }
})

onMounted(() => {
  AOS.init()
})
</script>

<style scoped>
/* 頁首區域 */
.backimg {
  background-image: url('@/assets/back.png');
  background-size: cover;
  background-position: center;
}
#demo {
  padding: 50px;
  text-align: center;
}

.header-section {
  position: relative;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('@/assets/back2-01.png') cover;
  background-size: cover;
  margin: 0;
  padding: 0;
}
.top-section{
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: start;
}
.header-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.header-content {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1900px;
  padding: 0 2rem;
  text-align: left;
  color: #ffffff;
}

.header-content h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.header-content p {
  font-size: 1.2rem;
  line-height: 1.6;
}

/* 響應式設計 */
@media (max-width: 768px) {
  .header-section {
    height: auto;
    min-height: 100vh;
  }

  .header-content {
    padding: 4rem 1rem;
  }
}

/* 主要業務區域 */
.business-items-container {
  background-image: url('@/assets/sven-mieke.jpg');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  padding: 0;
  margin-top: 30vh;
}

.business-items-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 55%;
  right: 0;
  bottom: 0;
  width: 45%;
  background: linear-gradient(to bottom, rgba(0,0,0,0.1) 20%, rgba(0,0,255,0.9));
}

.content-wrapper {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.title {
  font-size: 12rem;
  font-weight: bold;
  color: #00ffff;
  margin-bottom: 40px;
}

.main-business {
  padding: 30px;
  border-radius: 10px;
  max-width: 500px;
  align-self: flex-end;
}

.subtitle {
  font-size: 3rem;
  color: white;
  margin-bottom: 20px;
}

.business-list {
  list-style-type: none;
  padding: 0;
}

.business-list li {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

/* 公司概況區域 */
.work-container {
  margin-bottom: 50vh;
}

.about-sectionh2 {
  font-size: 25px;
  text-align: left;
  color: rgb(0, 0, 0);
  margin-bottom: 2rem;
}

.about-section1,
.about-section2,
.about-section3 {
  padding: 20px;
  margin: 20px 0;
  border-radius: 20px;
}

.ball {
  width: 40px;
  height: 40px;
  background-color: #0800ff;
  border-radius: 50%;
  margin-bottom: 20px;
  margin-left: -2rem;
}

.business-items-container2 {
  background-image: url('@/assets/christopher1.png');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 150vh;
}

.main-business2 {
  padding: 30px;
  max-width: 500px;
  align-self: flex-end;
  margin-top: 70vh;
}

.marqueelogo {
  transform: rotate(90deg);
  position: relative;
  left: 70vh;
  top: 0;
}

/* 全局設定 */
.v-main {
  padding: 0 !important;
}

</style>
