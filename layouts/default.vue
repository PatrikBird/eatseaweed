<script setup lang='ts'>
const localePath = useLocalePath()

const { locale, setLocale, setLocaleCookie } = useI18n()

async function onChange(e) {
  await setLocale(e.target.value)
  setLocaleCookie(e.target.value)
}
</script>

<template>
  <nav class="pb-5">
    <NuxtLink :to="localePath('/')">
      Home
    </NuxtLink>
    <NuxtLink :to="localePath('/about')">
      About
    </NuxtLink>
  </nav>
  <label for="sel">Language:</label>
  <select id="sel" v-model="locale" @change="onChange">
    <option value="en">
      English
    </option>
    <option value="de">
      Deutsch
    </option>
    <option value="ko">
      한국어
    </option>
  </select>

  <div class="pt-5">
    <p>Currently selected lang</p>
    <pre>locale: {{ locale }}</pre>
  </div>

  <div class="prose dark:prose-invert m-auto max-w-2xl px-4 py-10 sm:px-8 sm:pt-14">
    <p>Hello from Layout</p>
    <slot />
  </div>
</template>
