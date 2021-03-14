import React, { useContext } from 'react';
import { Layout, Radio } from 'antd';

import i18n from '../../translation';
import { LangContext } from '../../context/language';

const { Sider } = Layout;

const RightSider = () => {
  const { lang, changeLang } = useContext(LangContext);

  const setLangHandle = e => {
    changeLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <Sider theme="light">
      <Radio.Group
        className="lang-btn--wrap"
        onChange={setLangHandle}
        value={lang}
      >
        <Radio.Button className="lang-btn" value="ru">
          RU
        </Radio.Button>
        <Radio.Button className="lang-btn" value="en">
          EN
        </Radio.Button>
        <Radio.Button className="lang-btn" value="de">
          DE
        </Radio.Button>
      </Radio.Group>
    </Sider>
  );
};

export default RightSider;
