// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },

  nitro: {
  preset: "cloudflare-pages",  // 或 "cloudflare"
  }, // cf适配

  modules: [
    '@nuxt/image',
    '@nuxtjs/stylelint-module',
    '@vueuse/nuxt',
    'vuetify-nuxt-module',
  ],

  vuetify: {
    moduleOptions: {
      ssrClientHints: {
        prefersColorScheme: true,
        prefersColorSchemeOptions: {
          cookieName: 'color-scheme',
          darkThemeName: 'dark',
          lightThemeName: 'light',
          useBrowserThemeOnly: true
        }
      }
    },
    vuetifyOptions: './vuetify.config.ts'
  },

  stylelint: {
    lintOnStart: false,
    chokidar: true
  },

  compatibilityDate: '2025-03-11'
})
