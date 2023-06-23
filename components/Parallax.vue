<script setup lang="ts">
import { useEventListener, useMouseInElement, watchDebounced } from '@vueuse/core'

const background = ref<HTMLElement | null>(null)
const middle = ref<HTMLElement | null>(null)
// const foreground = ref(null)

const { isOutside } = useMouseInElement(middle)

watchDebounced([isOutside], ([newIsOutside]) => {
  console.log(newIsOutside)
})

function handleScroll() {
  if (background.value) {
    const bgScrollRate = 0.3
    const mdScrollRate = 0.5
    // const fgScrollRate = 0.5
    const scrollY = window.scrollY

    background.value.style.transform = `translateY(${scrollY * bgScrollRate}px)`
    middle.value!.style.transform = `translateY(${scrollY * mdScrollRate}px)`
    // foreground.value.style.transform = `translateY(${scrollY * fgScrollRate}px)`
  }
}

onMounted(() => {
  useEventListener(window, 'scroll', handleScroll)
})
</script>

<template>
  <div class="relative h-screen w-full overflow-hidden">
    <div
      ref="background" class="absolute h-full w-full bg-cover"
      style="background-image: url('https://picsum.photos/800')"
    />
    <div
      ref="middle" class="absolute left-80 top-20 h-1/4 w-1/4 bg-cover bg-center"
      style="background-image: url('../assets/images/balloon.png')"
    />
    <!-- <div ref="foreground" class="absolute flex h-full w-full items-center justify-center">
      <p class="text-4xl text-black">
        Your Text Here
      </p>
    </div> -->
  </div>
</template>
