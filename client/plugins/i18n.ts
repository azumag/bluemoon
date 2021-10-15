import { jaMessages } from '@/i18n/ja/index';
import { enMessages } from '@/i18n/en/index';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'ja',
  fallbackLocale: 'ja',
  messages: {
    en: enMessages,
    ja: jaMessages,
  },
});

export default (app) => {
  app.use(i18n);
};
