import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { LangContext } from '../../context';
import { LANGUAGES } from '../../constants';

const LanguageProvider = props => {
  const [lang, changeLang] = useState(LANGUAGES.RU);
  const { children } = props;

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
