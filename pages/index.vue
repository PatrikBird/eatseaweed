<script setup lang="ts">
const { locale } = useI18n()
</script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="de">
          Deutsch
        </option>
        <option value="en">
          English
        </option>
        <option value="ko">
          한국어
        </option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>
</template>
