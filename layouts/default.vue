<script setup lang='ts'>
const { locale } = useI18n()
</script>

<template>
  <NavBar />

  <div class="prose dark:prose-invert m-auto max-w-2xl px-4 py-10 sm:px-8 sm:pt-14">
    <p>Currently selected lang</p>
    <pre>locale: {{ locale }}</pre>
    <slot />
  </div>
</template>
