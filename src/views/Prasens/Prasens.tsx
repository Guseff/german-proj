import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import schem from '../../assets/images/schem.jpg';
import PageTemplate from '../../components/common/PageTemplate';
import Table, { Row, Cell, HeaderCell } from '../../components/common/Table';

import styles from './Prasens.css';

const Prasens = (): JSX.Element => {
  const { t } = useTranslation();
  const quattro = ' + ❑';
  return (
    <PageTemplate>
      <h3 className={styles.centered}>{t('use')}</h3>
      <p className={styles.paragraph}>
        1.&nbsp;
        {`${t('prasens.use.1')};`}
      </p>
      <p className={styles.paragraph}>
        2.&nbsp;
        {`${t('prasens.use.2')};`}
      </p>
      <p className={styles.paragraph}>
        3.&nbsp;
        {`${t('prasens.use.3')};`}
      </p>
      <p className={styles.paragraph}>
        4.&nbsp;
        {`${t('prasens.use.4')};`}
      </p>
      <h3 className={styles.centered}>{t('howto')}</h3>
      <p className={styles.centered}>
        <img alt="" src={schem as string} className={styles.img} />
      </p>
      <p className={styles.centered}>
        mach
        <del>en</del>
        {quattro}
      </p>
      <Table>
        <Row>
          <Cell low bold>
            ich
          </Cell>
          <Cell middle>e</Cell>
          <Cell low bold>
            wir
          </Cell>
          <Cell middle>en</Cell>
          <Cell gap />
          <Cell>machen</Cell>
          <Cell>schenken</Cell>
        </Row>
        <Row>
          <Cell low bold>
            du
          </Cell>
          <Cell middle>(e)st</Cell>
          <Cell low bold>
            ihr
          </Cell>
          <Cell middle>(e)t</Cell>
          <Cell gap />
          <Cell>schauen</Cell>
          <Cell>führen</Cell>
        </Row>
        <Row>
          <Cell low bold>
            er/sie/es
          </Cell>
          <Cell middle>(e)t</Cell>
          <Cell low bold>
            sie/Sie
          </Cell>
          <Cell middle>en</Cell>
          <Cell gap />
          <Cell>leben</Cell>
          <Cell>wohnen</Cell>
        </Row>
      </Table>
      <h3 className={styles.centered}>{`${t('special')}:`}</h3>
      <p className={styles.paragraph}>
        1)&nbsp;
        {`${t('prasens.special.1.1')} ${t('prasens.special.1.2')} `}
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
        {`${t('prasens.special.1.3')} `}
        -est, -et&nbsp;
        {`${t('prasens.special.1.4')} `}
      </p>
      <p className={cn(styles.centered, styles.cursive)}>
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
      <p className={styles.paragraph}>
        2)&nbsp;
        {`${t('prasens.special.2.1')} ${t('prasens.special.2.2')} `}
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
        {`${t('prasens.special.2.3')} `}
        -t&nbsp;
        {`${t('prasens.special.2.4')} `}
      </p>
      <p className={cn(styles.centered, styles.cursive)}>
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
      <p className={styles.paragraph}>
        3)&nbsp;
        {`${t('prasens.special.3.1')} `}
      </p>
      <p className={styles.paragraph}>
        au ➤ äu (saufen, laufen)&nbsp;
        <span className={styles.strong}>{`${t('except')}`}</span>
        :&nbsp;hauen, saugen, schnauben
      </p>
      <p className={styles.paragraph}>
        a ➤ ä (backen, blasen, braten)&nbsp;
        <span className={styles.strong}>{`${t('except')}`}</span>
        :&nbsp;mahlen, spalten, schaffen, (er)schallen
      </p>
      <p className={styles.paragraph}>
        e ➤ i (essen, geben, helfen)&nbsp;
        <span className={styles.strong}>{`${t('except')}`}</span>
        :&nbsp;bewegen, genesen, weben, gehen, heben, stehen + brennen, kennen,
        rennen, stecken, denken, nennen, senden, wenden
      </p>
      <p className={styles.paragraph}>
        <span className={styles.strong}>{`${t('but')}`}</span>
        :&nbsp;e ➤ ie (befehlen, empfehlen, geschehen, lesen, sehen, stehlen)
      </p>
      <Table>
        <Row>
          <Cell>
            kommen –&nbsp;k
            <u>o</u>
            mmst/t
          </Cell>
          <Cell>
            nehmen – ni
            <u>mm</u>
            st/t
          </Cell>
          <Cell className={styles.red}>
            erlöschen – erl
            <u>i</u>
            schst/t
          </Cell>
        </Row>
        <Row>
          <Cell>
            stoßen – st
            <u>ö</u>
            ßt
          </Cell>
          <Cell>
            treten – tri
            <u>tt</u>
            st/_
          </Cell>
          <Cell> </Cell>
        </Row>
      </Table>
      <p className={styles.paragraph}>
        4)&nbsp;
        {`${t('prasens.special.4.1')} `}
        -eln/-ern&nbsp;
        {`${t('prasens.special.4.2')} `}
        -(e)le
      </p>
      <p className={cn(styles.centered, styles.cursive)}>
        sammle, bastle, bedau(e)re, ändere
      </p>
      <p className={styles.paragraph}>
        5)&nbsp;
        {`${t('remember')}!`}
      </p>
      <Table>
        <Row>
          <Cell>können</Cell>
          <Cell>müssen</Cell>
          <Cell>sein</Cell>
          <Cell> </Cell>
        </Row>
        <Row>
          <Cell>mögen</Cell>
          <Cell>dürfen</Cell>
          <Cell>haben</Cell>
          <Cell>tun</Cell>
        </Row>
        <Row>
          <Cell>sollen</Cell>
          <Cell>wissen</Cell>
          <Cell>werden</Cell>
          <Cell> </Cell>
        </Row>
      </Table>
      <p className={styles.paragraph}>
        6)&nbsp;
        {`${t('prefixes-verbs')}`}
      </p>
      <Table>
        <Row>
          <HeaderCell>{`${t('inseparable')}`}</HeaderCell>
          <HeaderCell>{`${t('separable')}`}</HeaderCell>
          <HeaderCell>{`${t('mixed-group')}`}</HeaderCell>
        </Row>
        <Row>
          <Cell top centered>
            <span className={styles.bold}>
              be- ge- er- ver- zer- ent- emp- miss-
            </span>
            <br />
            <br />
            <span>{`${t('prasens.special.6.1')}`}</span>
            <br />
            <br />
            <span className={styles.cursive}>
              Ich&nbsp;
              <u>be</u>
              komme eine Note. Er&nbsp;
              <u>er</u>
              zählt eine Geschichte. Wie&nbsp;
              <u>ver</u>
              stehen den Inhalt.
            </span>
          </Cell>
          <Cell top centered>
            <span className={styles.bold}>
              ab- an- auf- aus- bei- hin- her- mit- nach- vor- zu- usw.
            </span>
            <br />
            <br />
            <span>{`${t('prasens.special.6.2')}`}</span>
            <br />
            <span className={styles.cursive}>
              <u>kennen</u>
              lernen,&nbsp;
              <u>spazieren</u>
              gehen usw.
            </span>
            <br />
            <br />
            <span>{`${t('prasens.special.6.3')}`}</span>
            <br />
            <span className={styles.cursive}>
              Er&nbsp;
              <u>kommt mit</u>
              ;&nbsp;sie&nbsp;
              <u>sehen</u>
              &nbsp;gut&nbsp;
              <u>aus</u>
              .&nbsp;
            </span>
          </Cell>
          <Cell top centered>
            <span className={styles.bold}>durch- über- unter- um- wieder-</span>
            <br />
            <br />
            <span>{`${t('prasens.special.6.4')}`}</span>
            <br />
            <span className={styles.cursive}>
              Ich&nbsp;
              <u>wiederhole</u>
              &nbsp;den Stoff; Der Hund&nbsp;
              <u>holt</u>
              &nbsp;den Stock&nbsp;
              <u>wieder</u>
              .&nbsp;
            </span>
          </Cell>
        </Row>
      </Table>
      <p className={styles.paragraph}>
        7)&nbsp;
        {`${t('reflexiva')}`}
      </p>
    </PageTemplate>
  );
};

export default Prasens;
