import { SET_LANGUAGE, SET_SMTH } from '../constants'

export const setLanguage = lang => {
  return { type: SET_LANGUAGE, payload: lang }
}

export const setSmth = smth => {
  return { type: SET_SMTH, payload: smth }
}
