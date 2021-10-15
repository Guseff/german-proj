import React from 'react';

import i18n from '../../../translation';
import { useLanguangesContext } from '../../../context';
import RadioBtn from './components/RadioBtn';

import styles from './RightSider.css';

const RightSider = (): JSX.Element => {
  const { lang, setLang } = useLanguangesContext();

  const setLangHandle = (e: React.ChangeEvent<HTMLFormElement>): void => {
    setLang(e.target.value);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    i18n.changeLanguage(e.target.value as string);
  };

  return (
    <aside className={styles.wrapper}>
      <form className={styles.list} onChange={setLangHandle}>
        <RadioBtn name="lang" lang="ru" value={lang} />
        <RadioBtn name="lang" lang="en" value={lang} />
        <RadioBtn name="lang" lang="de" value={lang} />
      </form>
    </aside>
  );
};

export default RightSider;
