/* eslint-disable import/prefer-default-export */
import React from 'react';
import { LANGUAGES } from '../constants';

export const LangContext = React.createContext({
  lang: LANGUAGES.RU,
  changeLang: () => {},
});
