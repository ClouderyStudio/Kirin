import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration'

export default defineVuetifyConfiguration({
  theme: {
    defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#060F6B',
            secondary: '#060F6B',
          },
        },
        dark: {
          dark: true,
          colors: {
            primary: '#4d730f',
            secondary: '#4d730f',
          },
        },
      },
  },
})
