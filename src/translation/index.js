import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { LANGUAGES } from '../constants'
import resources from './data.json'
// const resources = {
//   en: {
//     translation: {
//       '1': 'dod000o',
//     },
//   },
//   ru: {
//     translation: {
//       '1': 'додо',
//     },
//   },
// }

i18n.use(initReactI18next).init({
  resources,
  lng: LANGUAGES.RU,

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
