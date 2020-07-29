import { LANGUAGES } from '../constants'

const getInitialState = () => {
  return {
    settings: {
      language: LANGUAGES.RU,
    },
  }
}

export default getInitialState
