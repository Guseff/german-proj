import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { LANGUAGES } from '../constants'
import resources from './data.json'

i18n.use(initReactI18next).init({
  resources,
  lng: LANGUAGES.RU,

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
