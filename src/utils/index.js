import { LANGUAGES } from '../constants'

const getInitialState = () => {
  return {
    settings: {
      language: LANGUAGES.EN,
    },
  }
}

export default getInitialState
