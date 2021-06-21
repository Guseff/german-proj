import { createContext, useContext } from 'react';
import { ELanguages } from '../constants';

export type TLanguageContext = {
  lang: string;
  setLang: (lang: string) => void;
};

export const LanguangesContext = createContext<TLanguageContext>({
  lang: ELanguages.RU,
  setLang: () => {},
});

export const useLanguangesContext = (): TLanguageContext =>
  useContext(LanguangesContext);
