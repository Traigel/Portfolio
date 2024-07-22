import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import {AllLocales, Locale, Namespace} from './types/enum/i18n';

import headerRU from './locales/ru/header.json';
import mainRU from './locales/ru/main.json';

import headerEN from './locales/en/header.json';
import mainEN from './locales/en/main.json';

const resources = {
  [Locale.RU]: {
    [Namespace.Header]: headerRU,
    [Namespace.Main]: mainRU
  },
  [Locale.EN]: {
    [Namespace.Header]: headerEN,
    [Namespace.Main]: mainEN
  }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources,
      supportedLngs: AllLocales,
      lng: Locale.RU,
      fallbackLng: Locale.RU,
      debug: true,
      interpolation: {
        escapeValue: false
      }
    });

export default i18n;