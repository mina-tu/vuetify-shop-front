<template>
     <div class="scroll-container">
       <div class="scroll-text" ref="scrollText">
         這是一段滾動的文字
       </div>
     </div>
   </template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const scrollText = ref(null)

onMounted(() => {
  gsap.to(scrollText.value, {
    xPercent: 100, // 滾動到左邊
    duration: 10, // 動畫持續時間
    ease: 'linear', // 線性動畫
    repeat: 1 // 無限循環
  })

  gsap.to(scrollText.value, {
    scale: 2, // 放大倍數
    scrollTrigger: {
      trigger: scrollText.value,
      start: 'top center', // 當滾動到文字的頂部到達視窗中心時觸發
      end: 'bottom center', // 當滾動到文字的底部到達視窗中心時結束
      scrub: true // 平滑過渡
    }
  })
})
</script>

   <style scoped>
   .scroll-container {
     overflow: hidden; /* 隱藏超出容器的部分 */
     width: 100%; /* 設置容器寬度 */
     height: 55vh; /* 設置容器高度 */
     display: flex;
     align-items: center;
     justify-content: center;
   }

   .scroll-text {
     font-size: 150px; /* 調整文字大小 */
     white-space: nowrap; /* 保持文字在一行內 */
     display: inline-block; /* 使元素與滾動動畫一起移動 */
     transform-origin: left center; /* 設置放大時的中心點 */
     font-family: 'jost', sans-serif; /* 使用 Jost 字體 */
     font-weight: 900;
   }
   </style>
