import { LANGUAGES, TENSES } from '../constants'

const getInitialState = () => {
  return {
    settings: {
      language: LANGUAGES.RU,
    },
    media: {
      tense: TENSES.PRASENS,
      id: 1,
    },
  }
}

export default getInitialState
