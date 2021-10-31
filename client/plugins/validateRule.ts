import { defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json';
import ja from '@vee-validate/i18n/dist/locale/ja.json';

export default () => {
  defineRule('required', required);
  defineRule('email', email);
  defineRule('min', min);
  configure({
    generateMessage: localize({
      en,
      ja,
    }),
  });
  setLocale('ja');
};
