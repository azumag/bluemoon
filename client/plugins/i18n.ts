import { jaMessages } from '../i18n/ja';
import { enMessages } from '../i18n/en';
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
