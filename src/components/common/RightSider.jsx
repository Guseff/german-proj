import React from 'react'
import { Layout, Radio } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import { setLanguage } from '../../actions'
import i18n from '../../translation'

const { Sider } = Layout

const RightSider = () => {
  const dispatch = useDispatch()
  const lang = useSelector(store => store.settings.language)

  const setLangHandle = e => {
    dispatch(setLanguage(e.target.value))
    i18n.changeLanguage(e.target.value)
  }

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
  )
}

export default RightSider
