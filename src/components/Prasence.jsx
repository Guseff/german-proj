import React from 'react'
import { Layout } from 'antd'
import { useTranslation } from 'react-i18next'
import schem from '../assets/images/schem.jpg'

const { Content } = Layout

const Prasence = () => {
  const { t } = useTranslation()
  const quattro = ' + ❑'
  return (
    <Content className="page-content">
      <h3 className="centered">{t('use')}</h3>
      <p>{t('1')}</p>
      <p>{t('2')}</p>
      <p>{t('3')}</p>
      <p>{t('4')}</p>
      <h3 className="centered">{t('howto')}</h3>
      <p className="centered">
        <img alt="" src={schem} className="page-content--img" />
      </p>
      <p className="centered">
        mach
        <del>en</del>
        {quattro}
      </p>
      <table className="page-content--table">
        <tbody>
          <tr>
            <td className="low-cell bold-cell">ich</td>
            <td className="mid-cell">e</td>
            <td className="low-cell">wir</td>
            <td className="mid-cell">en</td>
            <td className="gap-cell" />
            <td>machen</td>
            <td>schenken</td>
          </tr>
          <tr>
            <td className="low-cell bold-cell">du</td>
            <td className="mid-cell">(e)st</td>
            <td className="low-cell">ihr</td>
            <td className="mid-cell">(e)t</td>
            <td className="gap-cell" />
            <td>schauen</td>
            <td>führen</td>
          </tr>
          <tr>
            <td className="low-cell bold-cell">er/sie/es</td>
            <td className="mid-cell">(e)t</td>
            <td className="low-cell">sie/Sie</td>
            <td className="mid-cell">en</td>
            <td className="gap-cell" />
            <td>leben</td>
            <td>wohnen</td>
          </tr>
        </tbody>
      </table>
      <h3 className="centered">{`${t('special')}:`}</h3>
      <p>
        1)&nbsp;
        {`${t('spec-1-1')} `}
        <u>d</u>
        &#44;&nbsp;
        <u>t</u>
        &#44;&nbsp;
        <u>chn</u>
        &#44;&nbsp;
        <u>ffn</u>
        &#44;&nbsp;
        <u>gn</u>
        &#44;&nbsp;
        <u>tm</u>
        &#44;&nbsp;
        <u>dm</u>
        &#44;&nbsp;
        <u>dn</u>
        &#44;&nbsp;
        {`${t('spec-1-2')} `}
        -est, -et&nbsp;
        {`${t('spec-1-3')} `}
      </p>
    </Content>
  )
}

export default Prasence
