export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'susanne-and-nigel-website-2022',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
  ],

  googleFonts: {
    families: {
      Macondo: true,
      'Princess+Sofia': true,
    },
    prefetch: true,
    preconnect: true,
  }, // googleFonts

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  i18n: {
    langDir: '~/locales/',
    locales: [
      {
        code: 'de',
        iso: 'de',
        name: 'Deutsch',
        file: 'de.json',
      },
      {
        code: 'en',
        iso: 'en',
        name: 'English',
        file: 'en.json',
      },
    ],

    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    vueI18n: {
      fallbackLocale: 'en',
      messages: {},

      // messages: {
      //   en: {
      //     welcome: 'Welcome',
      //     events: 'Events',
      //     locations: 'Locations',
      //     accommodation: 'Accommodation',
      //     fridayjune2022: 'Friday June 2022',
      //     wedding: 'Wedding',
      //     faq: 'FAQ',
      //   },
      //   fr: {
      //     welcome: 'Bienvenue',
      //     events: 'Les Events',
      //     locations: 'Les Locations',
      //     accomomdation: 'Le Accommodation',
      //     fridayjune2022: 'Vendredi Juin 2022',
      //     wedding: 'Marriage',
      //     faq: 'FAQ',
      //   },
      //   de: {
      //     welcome: 'Welkomm',
      //     events: 'Der Events',
      //     locations: 'Der Locations',
      //     accommodation: 'Das Accommodation',
      //     fridayjune2022: 'Freitag Juni 2022',
      //     wedding: 'Hochzeit',
      //     faq: 'FAQ',
      //   },
      // },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
