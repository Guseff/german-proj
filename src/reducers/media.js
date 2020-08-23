import { TENSES, SET_TENSE, SET_ID } from '../constants'

const initialState = {
  tense: TENSES.PERFECT,
  id: 1,
}

const main = (state = initialState, action) => {
  switch (action.type) {
    case SET_TENSE:
      return { ...state, tense: action.payload }

    case SET_ID:
      return { ...state, id: action.payload }

    default:
      return state
  }
}

export default main
