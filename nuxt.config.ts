import { defineNuxtConfig } from 'nuxt3';
import { jaMessages } from './i18n/ja';
import { enMessages } from './i18n/en';

export default defineNuxtConfig({
  ssr: false,
  rootDir: './client',
  modules: ['nuxt-i18n'],
  i18n: {
    locales: ['en', 'ja'],
    defaultLocale: 'ja',
    vueI18n: {
      fallbackLocale: 'ja',
      messages: {
        en: enMessages,
        ja: jaMessages,
      },
    },
  },
});
