import React, { ReactNode, useState } from 'react';

import { LanguangesContext } from '../../context';
import { ELanguages } from '../../constants';

type TLanguageProvider = {
  children: ReactNode;
};

const LanguageProvider = ({ children }: TLanguageProvider): JSX.Element => {
  const [lang, setLang] = useState<string>(ELanguages.RU);

  return (
    <LanguangesContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguangesContext.Provider>
  );
};

export default LanguageProvider;
