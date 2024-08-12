<template>
  <div ref="splineContainer" class="spline-scene">
    <canvas ref="splineCanvas"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { Application } from '@splinetool/runtime'

export default {
  name: 'SplineScene',
  setup () {
    const splineContainer = ref(null)
    const splineCanvas = ref(null)

    onMounted(() => {
      if (splineContainer.value && splineCanvas.value) {
        try {
          const app = new Application(splineCanvas.value)
          app.load('https://prod.spline.design/WDunRlCHd2cvnU-V/scene.splinecode')
            .then(() => {
              console.log('Scene loaded successfully')
            })
            .catch((error) => {
              console.error('Error loading scene:', error)
            })
        } catch (error) {
          console.error('Error initializing Spline application:', error)
        }
      }
    })

    return {
      splineContainer,
      splineCanvas
    }
  }
}
</script>

<style>
.spline-scene {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -100px;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
