import React, { useContext } from 'react';

import i18n from '../../../translation';
import { LangContext } from '../../../context';

import styles from './RightSider.css';
import RadioBtn from './components/RadioBtn';

const RightSider = () => {
  const { lang, changeLang } = useContext(LangContext);
  const setLangHandle = e => {
    changeLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <aside className={styles.wrapper}>
      <form className={styles.list} onChange={setLangHandle} value={lang}>
        <RadioBtn name="lang" lang="ru" value={lang} />
        <RadioBtn name="lang" lang="en" value={lang} />
        <RadioBtn name="lang" lang="de" value={lang} />
      </form>
    </aside>
  );
};

export default RightSider;
