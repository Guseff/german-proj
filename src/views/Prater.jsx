import React from 'react'
import { Layout } from 'antd'
import { useTranslation } from 'react-i18next'
import schem from '../assets/images/sh5.jpg'
import PageTemplate from '../components/common/PageTemplate'

const { Content } = Layout

const Prater = () => {
  const { t } = useTranslation()
  const quattro = ' + ❑'
  return (
    <PageTemplate>
      <Content className="page-content">
        <h3 className="centered">{t('use')}</h3>
        <p>
          1.&nbsp;
          {`${t(
            'To talk about the past (usually - in the written language)'
          )};`}
        </p>
        <p>
          2.&nbsp;
          {`${t('Narrative form')};`}
        </p>
        <p>
          3.&nbsp;
          {`${t(
            'When events happen in the past simultaneously or immediately after each other'
          )};`}
        </p>
        <h3 className="centered">{t('howto')}</h3>
        <table className="page-content--table">
          <tbody>
            <tr>
              <td className="centered">
                {t('regular verbs')}
                <br />
                <img alt="" src={schem} className="prater-img" />
                <br />
                mach
                <del>en</del>
                {quattro}
              </td>
              <td className="centered">
                {t('irregular verbs')}
                <br />
                <br />
                (2. Form in der Tabelle)&nbsp;
                {quattro}
              </td>
            </tr>
          </tbody>
        </table>

        <h3 className="centered">{`${t('special')}:`}</h3>
        <p>
          1)&nbsp;
          {`${t('regular verbs')} ${t('that end with')} `}
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
        <p className="centered cursive">
          ret
          <u>t</u>
          en, re
          <u>d</u>
          en, zei
          <u>chn</u>
          en,&nbsp;ö
          <u>ffn</u>
          en, ei
          <u>gn</u>
          en,&nbsp;a
          <u>tm</u>
          en, wi
          <u>dm</u>
          en, or
          <u>dn</u>
          en
        </p>
        <p>
          2)&nbsp;
          {`${t('spec-1-1')} `}
          <u>s</u>
          &#44;&nbsp;
          <u>ss</u>
          &#44;&nbsp;
          <u>ß</u>
          &#44;&nbsp;
          <u>z</u>
          &#44;&nbsp;
          <u>t</u>
          &#44;&nbsp;
          <u>tz</u>
          &#44;&nbsp;
          {`${t('spec-2-2')} `}
          -t&nbsp;
          {`${t('spec-2-3')} `}
        </p>
        <p className="centered cursive">
          lö
          <u>s</u>
          en, ha
          <u>ss</u>
          en, grü
          <u>ß</u>
          en, tan
          <u>z</u>
          en, se
          <u>t</u>
          zen
        </p>
        <p>
          3)&nbsp;
          {`${t('spec-3-1')} `}
        </p>
        <p>
          au ➤ äu (saufen, laufen)&nbsp;
          <span className="strong">{`${t('except')}`}</span>
          :&nbsp;hauen, saugen, schnauben
        </p>
        <p>
          a ➤ ä (backen, blasen, braten)&nbsp;
          <span className="strong">{`${t('except')}`}</span>
          :&nbsp;mahlen, spalten, schaffen, (er)schallen
        </p>
        <p>
          e ➤ i (essen, geben, helfen)&nbsp;
          <span className="strong">{`${t('except')}`}</span>
          :&nbsp;bewegen, genesen, weben, gehen, heben, stehen + brennen,
          kennen, rennen, stecken, denken, nennen, senden, wenden
        </p>
        <p>
          <span className="strong">{`${t('but')}`}</span>
          :&nbsp;e ➤ ie (befehlen, empfehlen, geschehen, lesen, sehen, stehlen)
        </p>
        <table className="page-content--table">
          <tbody>
            <tr>
              <td>
                kommen –&nbsp;k
                <u>o</u>
                mmst/t
              </td>
              <td>
                nehmen – ni
                <u>mm</u>
                st/t
              </td>
              <td className="red">
                erlöschen – erl
                <u>i</u>
                schst/t
              </td>
            </tr>
            <tr>
              <td>
                stoßen – st
                <u>ö</u>
                ßt
              </td>
              <td>
                treten – tri
                <u>tt</u>
                st/_
              </td>
              <td> </td>
            </tr>
          </tbody>
        </table>
        <p>
          4)&nbsp;
          {`${t('spec-4-1')} `}
          -eln/-ern&nbsp;
          {`${t('spec-4-2')} `}
          -(e)le
        </p>
        <p className="centered cursive">sammle, bastle, bedau(e)re, ändere</p>
        <p>
          5)&nbsp;
          {`${t('remember')}!`}
        </p>
        <table className="page-content--table">
          <tbody>
            <tr>
              <td>können</td>
              <td>müssen</td>
              <td>sein</td>
              <td> </td>
            </tr>
            <tr>
              <td>mögen</td>
              <td>dürfen</td>
              <td>haben</td>
              <td>tun</td>
            </tr>
            <tr>
              <td>sollen</td>
              <td>wissen</td>
              <td>werden</td>
              <td> </td>
            </tr>
          </tbody>
        </table>
        <p>
          6)&nbsp;
          {`${t('prefixes')}`}
        </p>
        <table className="page-content--table">
          <tbody>
            <tr>
              <th>{`${t('inseparable')}`}</th>
              <th>{`${t('separable')}`}</th>
              <th>{`${t('mixed group')}`}</th>
            </tr>
            <tr>
              <td className="top-cell centered-cell">
                <span className="bold">
                  be- ge- er- ver- zer- ent- emp- miss-
                </span>
                <br />
                <br />
                <span>{`${t('spec-6-1')}`}</span>
                <br />
                <br />
                <span className="cursive">
                  Ich&nbsp;
                  <u>be</u>
                  komme eine Note. Er&nbsp;
                  <u>er</u>
                  zählt eine Geschichte. Wie&nbsp;
                  <u>ver</u>
                  stehen den Inhalt.
                </span>
              </td>
              <td className="top-cell centered-cell">
                <span className="bold">
                  ab- an- auf- aus- bei- hin- her- mit- nach- vor- zu- usw.
                </span>
                <br />
                <br />
                <span>{`${t('spec-6-2')}`}</span>
                <br />
                <span className="cursive">
                  <u>kennen</u>
                  lernen,&nbsp;
                  <u>spazieren</u>
                  gehen usw.
                </span>
                <br />
                <br />
                <span>{`${t('spec-6-3')}`}</span>
                <br />
                <span className="cursive">
                  Er&nbsp;
                  <u>kommt mit</u>
                  ;&nbsp;sie&nbsp;
                  <u>sehen</u>
                  &nbsp;gut&nbsp;
                  <u>aus</u>
                  .&nbsp;
                </span>
              </td>
              <td className="top-cell centered-cell">
                <span className="bold">durch- über- unter- um- wieder-</span>
                <br />
                <br />
                <span>{`${t('spec-6-4')}`}</span>
                <br />
                <span className="cursive">
                  Ich&nbsp;
                  <u>wiederhole</u>
                  &nbsp;den Stoff; Der Hund&nbsp;
                  <u>holt</u>
                  &nbsp;den Stock&nbsp;
                  <u>wieder</u>
                  .&nbsp;
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          7)&nbsp;
          {`${t('reflexiva')}`}
        </p>
      </Content>
    </PageTemplate>
  )
}

export default Prater
