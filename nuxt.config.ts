// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/critters',
    '@nuxtjs/html-validator',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  app: {
    head: {
      title: 'Eat Seaweed',
      meta: [
        { name: 'description', content: '' },
      ],
      // set lang attributes for fallback pages
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  htmlValidator: {
    logLevel: 'warning',
    failOnError: false,
    options: {
      rules: {
        'attribute-empty-style': 'off',
      },
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: true,
    },
    // strategy: 'prefix_and_default',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'de',
        name: 'Deutsch',
        file: 'de-DE.json',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en-GB.json',
      },
      {
        code: 'ko',
        name: '한국어',
        file: 'ko-KR.json',
      },
    ],
    defaultLocale: 'en',
    //   lazy: true,
  },
})
