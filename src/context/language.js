import React from 'react'
import { LANGUAGES } from '../constants'

const LangContext = React.createContext({
  language: LANGUAGES.RU,
  changeLanguage: () => {},
})

export default LangContext
