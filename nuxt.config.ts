// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/critters',
    '@nuxtjs/html-validator',
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
})
