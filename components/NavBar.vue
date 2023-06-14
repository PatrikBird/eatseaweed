<script setup lang='ts'>
import { initFlowbite } from 'flowbite'

type LanguageKeys = 'en' | 'de' | 'ko'

onMounted(() => {
  initFlowbite()
})

const { showNavigation } = useShowControls()
const { locale, setLocale, setLocaleCookie } = useI18n()

async function onChange(locale: string) {
  await setLocale(locale)
  setLocaleCookie(locale)
  const dropdownToggle = document.querySelector('[data-dropdown-toggle="language-dropdown-menu"]')
  if (dropdownToggle)
    (dropdownToggle as HTMLElement).click()
}

const currentLanguage = computed(() => locale.value as LanguageKeys)
const languageMapping: Record<LanguageKeys, { flag: string; name: string; locale: string }> = {
  en: {
    flag: 'emojione:flag-for-united-kingdom',
    name: 'English',
    locale: 'en',
  },
  de: {
    flag: 'emojione:flag-for-germany',
    name: 'Deutsch',
    locale: 'de',
  },
  ko: {
    flag: 'emojione:flag-for-south-korea',
    name: '한국어',
    locale: 'ko',
  },
}
const flagIcon = computed(() => languageMapping[currentLanguage.value as LanguageKeys].flag)
const languageName = computed(() => languageMapping[currentLanguage.value as LanguageKeys].name)
</script>

<template>
  <nav
    class="fixed inset-x-0 top-0 flex h-16 bg-white transition-transform duration-700 dark:bg-gray-900"
    :class="!showNavigation && 'transform -translate-y-full'"
  >
    <div class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
      <a href="#" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-8" alt="Flowbite Logo">
        <span class="self-center whitespace-nowrap pr-9 text-2xl font-semibold dark:text-white">Eat Seaweed</span>
      </a>
      <div class="flex items-center md:order-2 md:pl-4">
        <button
          type="button"
          data-dropdown-toggle="language-dropdown-menu"
          class="inline-flex cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <Icon :name="flagIcon" class="mr-2 h-5 w-5" />
          {{ languageName }}
        </button>
        <!-- Dropdown -->
        <div id="language-dropdown-menu" class="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded-lg bg-white text-base shadow dark:bg-gray-700">
          <ul class="py-2 font-medium" role="none">
            <li v-for="lang in languageMapping" :key="lang.name">
              <button
                type="button"
                class="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
                @click="onChange(lang.locale)"
              >
                <Icon :name="lang.flag" class="mr-2 h-5 w-5" />
                {{ lang.name }}
              </button>
            </li>
          </ul>
        </div>
        <button
          data-collapse-toggle="mobile-menu-language-select"
          type="button"
          class="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="mobile-menu-language-select"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="currentColor" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
        </button>
      </div>
      <div
        id="mobile-menu-language-select"
        class="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
      >
        <ul class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
          <li>
            <NuxtLink
              to="/"
              class="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500" aria-current="page"
            >
              Home
            </NuxtLink>
          </li>
          <li>
            <a
              href="#"
              class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              class="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
