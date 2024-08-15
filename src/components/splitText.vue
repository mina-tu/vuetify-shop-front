<template>
     <div class="title-container">
       <h1 v-for="(line, index) in lines" :key="index" class="line" :ref="el => lineRefs[index] = el">
         {{ line }}
       </h1>
     </div>
   </template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const lines = [
  'We use innovative',
  'technology to ',
  'sustain water ',
  'resources.'
]
const lineRefs = ref([])

onMounted(() => {
  lineRefs.value.forEach((line, index) => {
    gsap.fromTo(line,
      { yPercent: 100, opacity: 0 }, // 從下方進入，透明度從0開始
      {
        yPercent: 0, // 到達原始位置
        opacity: 1, // 透明度變為1
        duration: 0.6,
        ease: 'power4.out', // 使用強烈的緩出效果
        scrollTrigger: {
          trigger: line,
          start: 'top 50%', // 觸發點設置
          end: 'top 0%',
          scrub: true,
          toggleActions: 'play none none reverse'
        }
      }
    )
  })
})
</script>

   <style scoped>
   .title-container {
     font-family: 'Jost', sans-serif;
     font-weight: 200;
     font-size: 4.5rem;
     line-height: 1;
     overflow: hidden;
     display: flex;
     flex-direction: column;
     align-items: center;
     margin-top: 6vh;
     color: rgb(0, 0, 0);
   }

   .line {
     opacity: 0;
     transform: translateY(10%);
     /* 初始狀態在下方 */
     font-weight: 200;
   }
   </style>
