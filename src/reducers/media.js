import { TENSES, SET_TENSE } from '../constants'

const initialState = {
  tense: TENSES.PERFECT,
}

const main = (state = initialState, action) => {
  switch (action.type) {
    case SET_TENSE:
      return { ...state, tense: action.payload }

    default:
      return state
  }
}

export default main
