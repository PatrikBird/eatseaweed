export function useShowControls() {
  const scrollY = ref(0)
  const showNavigation = ref(true)

  const toggleNavVisibility = () => {
    const currentScrollY = window.scrollY

    // Check if the difference between the current and last scroll position is at least 50px
    if (Math.abs(currentScrollY - scrollY.value) >= 50) {
      showNavigation.value = currentScrollY < scrollY.value || currentScrollY < 200 // always show on first 200px
      scrollY.value = currentScrollY
    }
  }

  onMounted(() => {
    if (typeof window !== 'undefined')
      window.addEventListener('scroll', toggleNavVisibility)
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined')
      window.removeEventListener('scroll', toggleNavVisibility)
  })

  return { showNavigation }
}
