import { SET_LANGUAGE, SET_TENSE, SET_ID } from '../constants';

export const setLanguage = lang => {
  return { type: SET_LANGUAGE, payload: lang };
};

export const setTense = tense => {
  return { type: SET_TENSE, payload: tense };
};

export const setId = id => {
  return { type: SET_ID, payload: id };
};
