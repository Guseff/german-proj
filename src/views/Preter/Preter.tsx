import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import schem from '../../assets/images/sh5.jpg';
import PageTemplate from '../../common/components/PageTemplate';
import Table, { Row, Cell, HeaderCell } from '../../common/components/Table';

import styles from './Preter.css';

const Preter = (): JSX.Element => {
  const { t } = useTranslation();
  const quattro = ' + ❑';

  return (
    <PageTemplate>
      <h3 className={styles.centered}>{t('use')}</h3>
      <p className={styles.paragraph}>
        1.&nbsp;
        {`${t('preter.use.1')};`}
      </p>
      <p className={styles.paragraph}>
        2.&nbsp;
        {`${t('preter.use.2')};`}
      </p>
      <p className={styles.paragraph}>
        3.&nbsp;
        {`${t('preter.use.3')};`}
      </p>
      <h3 className={styles.centered}>{t('howto')}</h3>
      <Table>
        <Row>
          <Cell centered>
            {t('regular-verbs')}
            <br />
            <img alt="" src={schem as string} className={styles.img} />
            <br />
            mach
            <del>en</del>
            {quattro}
          </Cell>
          <Cell centered>
            {t('irregular-verbs')}
            <br />
            <br />
            (2. Form in der Tabelle)&nbsp;
            {quattro}
          </Cell>
        </Row>
      </Table>

      <h3 className={styles.centered}>{`${t('special')}:`}</h3>
      <p className={styles.paragraph}>
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
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
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
      <p className={styles.paragraph}>
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
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
        aßest, lasest, batest, fandest, glittest, schlossest, rissest,
        schmolzest, hieltest
      </p>
      <p className={styles.paragraph}>
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
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
        batet, ludet, littet, galtet, rittet, fandet, hieltet
      </p>
      <p className={styles.paragraph}>
        4)&nbsp;
        {`${t('preter.special.4.1')} `}
        -eln/-ern&nbsp;
        {`${t('preter.special.4.2')} `}
        -(e)le
      </p>
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
        aßen, wuschen, sahen
      </p>
      <p className={styles.paragraph}>
        5)&nbsp;
        {`${t('preter.special.5.1')} `}
      </p>
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
        bringen, nennen, denken, brennen, wissen, kennen + MODALE
      </p>
      <p className={styles.paragraph}>
        6)&nbsp;
        {`${t('preter.special.6.1')} `}
      </p>
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
        bewegen, schaffen, schleifen, senden, wiegen, wenden, hängen,
        erschrecken
      </p>
      <p className={styles.paragraph}>
        7)&nbsp;
        {`${t('remember')}!`}
      </p>
      <Table>
        <Row>
          <Cell>sein</Cell>
          <Cell>war</Cell>
        </Row>
        <Row>
          <Cell>haben</Cell>
          <Cell>hatte</Cell>
        </Row>
        <Row>
          <Cell>werden</Cell>
          <Cell>wurde</Cell>
        </Row>
        <Row>
          <Cell>tun</Cell>
          <Cell>tat</Cell>
        </Row>
      </Table>
      <p className={styles.paragraph}>
        8)&nbsp;
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
              zählte eine Geschichte. Wie&nbsp;
              <u>ver</u>
              standen den Inhalt.
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
              <u>kam mit</u>
              ;&nbsp;sie&nbsp;
              <u>sahen</u>
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
              <u>wiederholte</u>
              &nbsp;den Stoff; Der Hund&nbsp;
              <u>holte</u>
              &nbsp;den Stock&nbsp;
              <u>wieder</u>
              .&nbsp;
            </span>
          </Cell>
        </Row>
      </Table>
      <p className={styles.paragraph}>
        9)&nbsp;
        {`${t('reflexiva')}`}
      </p>
    </PageTemplate>
  );
};

export default Preter;
