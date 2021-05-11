import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { ELanguages } from '../constants';
import en from './en.json';
import ru from './ru.json';
import de from './de.json';

export const resources = {
  en,
  ru,
  de,
} as const;

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n.use(initReactI18next).init({
  resources,
  lng: ELanguages.RU,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
