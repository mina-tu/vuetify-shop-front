<template>
  <v-main class="backimg">
    <v-container>
      <!-- 頁首區域 -->
      <v-container>
        <section class="top-section">
          <div class="top-content">
            <h1 class="extra-light">
              We use innovative <br />
              technology to <br />
              sustain water <br />
              resources.
            </h1>
          </div>
        </section>

        <section class="header-section full-screen">
          <div class="header-content">
            <v-row>
              <v-col cols="12" md="6">
                <h1>達耀工程有限公司</h1>
              </v-col>
              <v-col cols="12" md="6">
                <p>
                  成立於 2007 年，專業於水處理工程規劃設計、製造等，擁有豐富的實績，已完成將近百件專案。實績包括台塑、中油、大連等知名企業。
                </p>
              </v-col>
            </v-row>
          </div>
        </section>
      </v-container>

      <!-- 產品介紹區域 -->
      <v-row>
        <v-col cols="12" class="text-center">
          <h2 style="font-size: 40px;color:gray;line-height: 5;">經營項目</h2>
        </v-col>
      </v-row>
      <section class="products-section" data-aos="fade-up">
        <v-row>
          <v-col cols="12" md="6">
            <div class="product-image">
              <v-img src="@/assets/sven-mieke.jpg" contain height="400"></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="product-info">
              <h1 class="product-infoh1">主要業務</h1>
              <p>
                水處理系統規劃設計及施工<br />
                原水處理系統規劃設計及施工<br />
                純水及超純水系統規劃設計及施工<br />
                特殊廢水回收系統規劃設計及施工<br />
                製程液純化系統規劃設計及施工<br />
                冷凝水回收系統規劃設計及施工<br />
                冷卻水塔旁濾系統規劃設計及施工
              </p>
            </div>
          </v-col>
        </v-row>
      </section>
      <section class="products-section" data-aos="fade-up">
        <v-row>
          <v-col cols="12" md="6">
            <div class="product-image">
              <v-img src="@/assets/christopher.jpg" contain height="400"></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div class="product-info">
              <h1 class="product-infoh1">次要業務</h1>
              <p>
                機械安裝<br />
                配管工程<br />
                水處理耗材<br />
                藥劑銷售
              </p>
            </div>
          </v-col>
        </v-row>
      </section>

      <!-- 公司概況區域 -->
      <v-container class="work-container">
        <section class="about-section1" data-aos="fade-up">
          <h2 class="about-sectionh2">業務概述</h2>
          <p>
            達耀工程有限公司，創立於2007年，以「積極、進取、創新、負責」之經營宗旨，服務客戶，提升競爭能力。<br />
            雖然是新的公司，但公司人員於水處理系統之設計、製作上已有二十幾年之經歷。<br />
            成立以來，經過多年的歷練，系統的不斷改善與創新及公司成員自身的努力下，一步一步建立企業並逐漸擴大經營領域。
          </p>
        </section>
        <section class="about-section2" data-aos="fade-up">
          <h2 class="about-sectionh2">未來展望</h2>
          <p>
            世界科技不斷進步，從早期傳統"CCR 逆向再生系統"，研發至最新的水處理之製程"Compack Bed 系統"，我們為此前進的腳步從不停歇，<br />
            使本公司的水處理系統獨樹一格。<br />
            未來的經營計畫中，將繼續朝向更全面、更多元、更專業的目標大步邁進。
          </p>
        </section>
        <section class="about-section3" data-aos="fade-up">
          <h2 class="about-sectionh2">經營理念</h2>
          <p>
            完美的產品、完善的品質、完整的服務，是我們一直堅持不變的經營理念態度，做到 Total Solution 更是我們對客戶的保證。
          </p>
        </section>
      </v-container>
    </v-container>
    <aboutFooter class="footer" />
  </v-main>
</template>

<script setup>
import { onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { definePage } from 'vue-router/auto'
import aboutFooter from '@/components/aboutFooter.vue'

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
.backimg {
  background-image: url('@/assets/back.png');
  background-size: cover;
  background-position: center;
}

.header-section {
  position: relative;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
  width: 100%;
  margin: 0;
}

.top-section {
  position: relative;
  height: 62vh;
  display: flex;
  align-items: center;
  justify-content: left;
  text-align: left;
  background: #ffffff00;
}

.top-content {
  color: rgb(0, 0, 0);
  max-width: 1200px;
  font-size: 50px;
  top: 10vh;
  padding: 0 2rem;
}

.extra-light {
  font-family: 'Jost', sans-serif;
  font-weight: 200; /* Extra Light */
}

.header-section {
  position: relative;
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('@/assets/back2-01.png') cover;
  background-size: cover;
  margin: 0;
  padding: 0;
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

@media (max-width: 768px) {
  .header-section {
    height: auto;
    min-height: 100vh;
  }

  .header-content {
    padding: 4rem 1rem;
  }

  .top-content {
    font-size: 2.5rem;
    padding: 0 1rem;
  }

  .product-infoh1 {
    font-size: 24px;
  }

  .product-info p {
    font-size: 16px;
  }

  .about-sectionh2 {
    font-size: 28px;
  }

  .about-section1,
  .about-section2,
  .about-section3 {
    padding: 1rem;
  }
}

.product-infoh1 {
  font-size: 30px;
  color: blue;
}

.product-info p {
  font-size: 16px;
}

.products-section {
  margin-top: 50px;
}

.product-image {
  padding: 20px;
}

.product-info {
  padding: 20px;
}

.about-sectionh2 {
  font-size: 25px;
  text-align: center;
  color: rgb(0, 21, 253);
  margin-bottom: 2rem;
}

.about-section1,
.about-section2,
.about-section3 {
  padding: 20px;
  margin: 20px 0;
  border-radius: 20px;
}

.work-container {
  padding: 0 8%;
}
</style>
