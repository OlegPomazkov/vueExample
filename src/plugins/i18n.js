import Vue from "vue";
import VueI18n from "vue-i18n";
import enLocale from "element-ui/lib/locale/lang/en";
import ruLocale from "element-ui/lib/locale/lang/ru-RU";

Vue.use(VueI18n);

export default function(app) {
  const i18n = new VueI18n({
    locale: "ru",
    messages: {
      en: {
        test: "Testing",
        ...enLocale
      },
      ru: {
        test: "Проверка",
        ...ruLocale
      }
    },
    silentTranslationWarn: true
  });
  app.i18n = i18n;
}
