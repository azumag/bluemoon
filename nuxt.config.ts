import { defineNuxtConfig } from 'nuxt3';
export default defineNuxtConfig({
  ssr: false,
  rootDir: './client',
  modules: [
    '@nuxtjs/dotenv',
    {
      filename:
        process.env.NODE_ENV !== 'production'
          ? './config/.env.dev'
          : './config/.env.prod',
    },
  ],
});
