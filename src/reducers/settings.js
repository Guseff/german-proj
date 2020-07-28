import { SET_LANGUAGE, LANGUAGES } from '../constants'

const initialState = {
  language: LANGUAGES.EN,
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return { ...state, language: action.payload }

    default:
      return state
  }
}

export default settings
