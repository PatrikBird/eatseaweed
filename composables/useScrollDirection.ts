export function useScrollDirection() {
  const scrollY = ref(0)
  const scrollUp = ref(false)

  const updateScrollY = () => {
    const currentScrollY = window.scrollY
    scrollUp.value = currentScrollY < scrollY.value
    scrollY.value = currentScrollY
  }

  onMounted(() => {
    if (typeof window !== 'undefined')
      window.addEventListener('scroll', updateScrollY)
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined')
      window.removeEventListener('scroll', updateScrollY)
  })

  return { scrollUp }
}
