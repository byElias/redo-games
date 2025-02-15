// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
     MAILHOST: process.env.MAILHOST,
     MAILPORT: process.env.MAILPORT,
     MAILUSER: process.env.MAILUSER,
     MAILPASSWORD: process.env.MAILPASSWORD,
     CONTACTMAIL: process.env.CONTACTMAIL
  }
})