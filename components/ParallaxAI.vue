<script setup>
import { onMounted, ref } from 'vue'

const background = ref(null)
const foreground = ref(null)

onMounted(() => {
  const handleScroll = () => {
    if (background.value) {
      const bgScrollRate = 0.5
      const fgScrollRate = 0.8
      const scrollY = window.scrollY

      background.value.style.transform = `translateY(${scrollY * bgScrollRate}px)`
      foreground.value.style.transform = `translateY(${scrollY * fgScrollRate}px)`
    }
  }

  window.addEventListener('scroll', handleScroll)

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<template>
  <div class="relative h-screen w-full">
    <div
      ref="background" class="absolute h-full w-full"
      style="background-image: url('https://picsum.photos/800'); background-size: cover;"
    />
    <div ref="foreground" class="absolute flex h-full w-full items-center justify-center">
      <p class="text-4xl text-white">
        Your Text Here
      </p>
    </div>
  </div>
</template>

<style scoped>
.absolute {
  top: 0;
  left: 0;
}
</style>
