<template>
  <v-container fluid class="pa-0 marquee-container" @click="goToPortfolio">
    <div class="marquee">
      <span v-for="n in 2" :key="n" class="marquee-content">
        TRACK RECORD &nbsp;&nbsp;&nbsp; TRACK RECORD &nbsp;&nbsp;&nbsp; TRACK RECORD &nbsp;&nbsp;&nbsp;
        TRACK RECORD &nbsp;&nbsp;&nbsp; TRACK RECORD &nbsp;&nbsp;&nbsp; TRACK RECORD &nbsp;&nbsp;&nbsp;
      </span>
    </div>
  </v-container>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goToPortfolio = () => {
  router.push('/portfolio')
}
</script>

<style scoped>
.marquee-container {
  overflow: hidden;
  background-color: #ffffff;
  cursor: pointer;
  font-family: 'Jost', sans-serif;
  font-weight: 900; /* Extra Light */
}

.marquee {
  display: flex;
  width: 200%;
  overflow: hidden;
}

.marquee-content {
  display: flex;
  width: 100%;
  font-size: 3rem;
  font-weight: bold;
  color: blue;
  text-transform: uppercase;
  padding: 1rem 0;
  white-space: nowrap;
  animation: marquee 20s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee:hover .marquee-content {
  animation-play-state: paused;
}
</style>
