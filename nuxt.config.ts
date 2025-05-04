// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: false
  },

  nitro: {
    output: {
      dir: '.output',    // 确保此路径与实际生成路径一致
      publicDir: 'dist'  // 如果需兼容默认路径，可将 publicDir 改为 'dist'
    }
  },

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
