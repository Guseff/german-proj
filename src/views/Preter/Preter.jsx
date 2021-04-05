import React from 'react';
import { Layout } from 'antd';
import { useTranslation } from 'react-i18next';

import schem from '../../assets/images/sh5.jpg';
import PageTemplate from '../../components/common/PageTemplate';

const { Content } = Layout;

const Preter = () => {
  const { t } = useTranslation();
  const quattro = ' + ❑';

  return (
    <PageTemplate>
      <Content className="page-content">
        <h3 className="centered">{t('use')}</h3>
        <p>
          1.&nbsp;
          {`${t('preter.use.1')};`}
        </p>
        <p>
          2.&nbsp;
          {`${t('preter.use.2')};`}
        </p>
        <p>
          3.&nbsp;
          {`${t('preter.use.3')};`}
        </p>
        <h3 className="centered">{t('howto')}</h3>
        <table className="page-content--table">
          <tbody>
            <tr>
              <td className="centered">
                {t('regular-verbs')}
                <br />
                <img alt="" src={schem} className="preter-img" />
                <br />
                mach
                <del>en</del>
                {quattro}
              </td>
              <td className="centered">
                {t('irregular-verbs')}
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
          {`${t('preter.special.1.1')} `}
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
          {`${t('preter.special.1.2')} `}
          -ete-
        </p>
        <p className="centered cursive">
          ret
          <u>t</u>
          ete, re
          <u>d</u>
          ete, zei
          <u>chn</u>
          ete,&nbsp;ö
          <u>ffn</u>
          ete, ei
          <u>gn</u>
          ete,&nbsp;a
          <u>tm</u>
          ete, wi
          <u>dm</u>
          ete, or
          <u>dn</u>
          ete
        </p>
        <p>
          2)&nbsp;
          {`${t('preter.special.2.1')} `}
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
          {`${t('preter.special.2.2')} `}
          -est&nbsp;
          {`${t('preter.special.2.3')} `}
        </p>
        <p className="centered cursive">
          aßest, lasest, batest, fandest, glittest, schlossest, rissest,
          schmolzest, hieltest
        </p>
        <p>
          3)&nbsp;
          {`${t('preter.special.3.1')} `}
          <u>t</u>
          &#44;&nbsp;
          <u>d</u>
          &#44;&nbsp;
          <u>tt</u>
          &#44;&nbsp;
          {`${t('preter.special.3.2')} `}
          -et&nbsp;
          {`${t('preter.special.3.3')} `}
        </p>
        <p className="centered cursive">
          batet, ludet, littet, galtet, rittet, fandet, hieltet
        </p>
        <p>
          4)&nbsp;
          {`${t('preter.special.4.1')} `}
          -eln/-ern&nbsp;
          {`${t('preter.special.4.2')} `}
          -(e)le
        </p>
        <p className="centered cursive">aßen, wuschen, sahen</p>
        <p>
          5)&nbsp;
          {`${t('preter.special.5.1')} `}
        </p>
        <p className="centered cursive">
          bringen, nennen, denken, brennen, wissen, kennen + MODALE
        </p>
        <p>
          6)&nbsp;
          {`${t('preter.special.6.1')} `}
        </p>
        <p className="centered cursive">
          bewegen, schaffen, schleifen, senden, wiegen, wenden, hängen,
          erschrecken
        </p>
        <p>
          7)&nbsp;
          {`${t('remember')}!`}
        </p>
        <table className="page-content--table">
          <tbody>
            <tr>
              <td>sein</td>
              <td>war</td>
            </tr>
            <tr>
              <td>haben</td>
              <td>hatte</td>
            </tr>
            <tr>
              <td>werden</td>
              <td>wurde</td>
            </tr>
            <tr>
              <td>tun</td>
              <td>tat</td>
            </tr>
          </tbody>
        </table>
        <p>
          8)&nbsp;
          {`${t('prefixes-verbs')}`}
        </p>
        <table className="page-content--table">
          <tbody>
            <tr>
              <th>{`${t('inseparable')}`}</th>
              <th>{`${t('separable')}`}</th>
              <th>{`${t('mixed-group')}`}</th>
            </tr>
            <tr>
              <td className="top-cell centered-cell">
                <span className="bold">
                  be- ge- er- ver- zer- ent- emp- miss-
                </span>
                <br />
                <br />
                <span>{`${t('prasens.special.6.1')}`}</span>
                <br />
                <br />
                <span className="cursive">
                  Ich&nbsp;
                  <u>be</u>
                  komme eine Note. Er&nbsp;
                  <u>er</u>
                  zählte eine Geschichte. Wie&nbsp;
                  <u>ver</u>
                  standen den Inhalt.
                </span>
              </td>
              <td className="top-cell centered-cell">
                <span className="bold">
                  ab- an- auf- aus- bei- hin- her- mit- nach- vor- zu- usw.
                </span>
                <br />
                <br />
                <span>{`${t('prasens.special.6.2')}`}</span>
                <br />
                <span className="cursive">
                  <u>kennen</u>
                  lernen,&nbsp;
                  <u>spazieren</u>
                  gehen usw.
                </span>
                <br />
                <br />
                <span>{`${t('prasens.special.6.3')}`}</span>
                <br />
                <span className="cursive">
                  Er&nbsp;
                  <u>kam mit</u>
                  ;&nbsp;sie&nbsp;
                  <u>sahen</u>
                  &nbsp;gut&nbsp;
                  <u>aus</u>
                  .&nbsp;
                </span>
              </td>
              <td className="top-cell centered-cell">
                <span className="bold">durch- über- unter- um- wieder-</span>
                <br />
                <br />
                <span>{`${t('prasens.special.6.4')}`}</span>
                <br />
                <span className="cursive">
                  Ich&nbsp;
                  <u>wiederholte</u>
                  &nbsp;den Stoff; Der Hund&nbsp;
                  <u>holte</u>
                  &nbsp;den Stock&nbsp;
                  <u>wieder</u>
                  .&nbsp;
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          9)&nbsp;
          {`${t('reflexiva')}`}
        </p>
      </Content>
    </PageTemplate>
  );
};

export default Preter;
