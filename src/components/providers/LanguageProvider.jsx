import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LangContext } from '../../context';
import { LANGUAGES } from '../../constants';

const LanguageProvider = ({ children }) => {
  const [lang, changeLang] = useState(LANGUAGES.RU);

  return (
    <LangContext.Provider value={{ lang, changeLang }}>
      {children}
    </LangContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default LanguageProvider;
