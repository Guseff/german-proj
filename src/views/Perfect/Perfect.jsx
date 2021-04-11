import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import schem1 from '../../assets/images/perfi1.jpg';
import schem2 from '../../assets/images/perfi2.jpg';
import schem3 from '../../assets/images/perfi3.jpg';
import schem4 from '../../assets/images/perfi4.jpg';
import schem5 from '../../assets/images/habensein.png';
import PageTemplate from '../../components/common/PageTemplate';
import Table, { Cell, Row } from '../../components/common/Table';

import styles from './Perfect.css';

const Perfect = () => {
  const { t } = useTranslation();
  return (
    <PageTemplate>
      <h3 className={styles.centered}>{t('use')}</h3>
      <p className={styles.paragraph}>
        1.&nbsp;
        {`${t('perfect.use.1')};`}
      </p>
      <p className={styles.paragraph}>
        2.&nbsp;
        {`${t('perfect.use.2')};`}
      </p>
      <p className={styles.paragraph}>
        3.&nbsp;
        {`${t('perfect.use.3')};`}
      </p>
      <h3 className={styles.centered}>{t('howto')}</h3>
      <p className={styles.centered}>
        (haben/sein)
        <sup>Präsens</sup>
        &nbsp;+ Partizip II (=PII)
      </p>
      <p className={cn(styles.centered, styles.red)}>
        <strong>{`${t('perfect.howto.attn')}`}</strong>
        <br />
        <br />
        {`${t('perfect.howto.1')}`}
      </p>
      <h3 className={styles.centered}>{t('howto-part2')}</h3>
      <Table>
        <Row>
          <Cell centered>
            {t('regular-verbs')}
            <br />
            <img alt="" src={schem1} className={styles.img1} />
            <br />
            gemacht gemalt gesetzt
          </Cell>
          <Cell centered>
            {t('irregular-verbs')}
            <br />
            <strong>{t('perfect.howto.2')}</strong>
            <br />
            genommen gegessen gerufen
          </Cell>
        </Row>
      </Table>

      <h3 className={styles.centered}>{`${t('special')}:`}</h3>
      <p className={styles.paragraph}>
        1)&nbsp;
        {`${t('perfect.special.1.1')} `}
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
        {`${t('perfect.special.1.2')} `}
        -et
      </p>
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
        gezeichnet geredet geatmet gewidmet
      </p>
      <p className={styles.paragraph}>
        2)&nbsp;
        {`${t('perfect.special.2.1')} `}
        -t&nbsp;
        <br />
        <span className="red bold">{`${t('perfect.special.2.2')}!!`}</span>
      </p>
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
        gebrannt genannt gekannt gewusst gebracht +&nbsp;
        {t('modal')}
      </p>
      <p className={styles.paragraph}>
        3)&nbsp;
        {`${t('remember')}!`}
      </p>
      <Table>
        <Row>
          <Cell>sein</Cell>
          <Cell>gewesen</Cell>
        </Row>
        <Row>
          <Cell>haben</Cell>
          <Cell>gehabt</Cell>
        </Row>
        <Row>
          <Cell>werden</Cell>
          <Cell>geworden</Cell>
        </Row>
        <Row>
          <Cell>tun</Cell>
          <Cell>getan</Cell>
        </Row>
      </Table>
      <p className={cn(styles.bold)}>
        4)&nbsp;
        {t('perfect.special.4')}
      </p>
      <p className={styles.paragraph}>
        {t('perfect.special.4.1')}
        &nbsp;
        <u>-iren</u>
        &nbsp;
        {t('perfect.special.4.2')}
      </p>
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
        diktiert, studiert, markiert
      </p>
      <p className={styles.paragraph}>
        {t('verbs')}
        &nbsp;
        <u>{t('perfect.special.4.3')}</u>
        &nbsp;(be- ge- er- ver- zer- ent- emp- miss-)
      </p>
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
        bearbeitet, erzählt, zerstört, gebraucht
      </p>
      <p className={styles.paragraph}>
        {t('verbs')}
        &nbsp;
        <u>{t('perfect.special.4.4')}</u>
        ,&nbsp;
        {t('perfect.special.4.5')}
      </p>
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
        vorbereitet, abbestellt
      </p>
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
        <span className={styles.strong}>{t('but')}</span>
        :&nbsp;vor
        <sup>1</sup>
        her
        <sup>2</sup>
        <strong>ge</strong>
        sagt
      </p>
      <p className={styles.paragraph}>
        5)&nbsp;
        {`${t('perfect.special.5.1')}:`}
      </p>
      <p className={styles.centered}>
        <img alt="" src={schem2} className={styles.img2} />
      </p>
      <p className={cn(styles.paragraph, styles.centered, styles.cursive)}>
        auf
        <strong>ge</strong>
        wacht, an
        <strong>ge</strong>
        macht
      </p>
      <p className={styles.paragraph}>
        6)&nbsp;
        {`${t('perfect.special.6.1')}:`}
      </p>
      <Table>
        <Row>
          <Cell centered>
            {`${t('perfect.special.6.2')}:`}
            <br />
            <img alt="" src={schem3} className={styles.img3} />
            <br />
            <span className={styles.cursive}>
              statt
              <strong>ge</strong>
              funden, kennen
              <strong>ge</strong>
              lernt
            </span>
          </Cell>
          <Cell centered>
            {`${t('perfect.special.6.3')}:`}
            <br />
            <img alt="" src={schem4} className={styles.img3} />
            <br />
            <span className={styles.cursive}>
              <strong>ge</strong>
              kennzeichnet,&nbsp;
              <strong>ge</strong>
              währleistet
            </span>
          </Cell>
        </Row>
      </Table>
      <p className={styles.paragraph}>
        7)&nbsp;
        {`${t('reflexiva')}`}
      </p>

      <h4 className={styles.centered}>{t('perfect.special.8.1')}</h4>
      <Table>
        <Row>
          <Cell centered top big>
            {t('perfect.special.8.2')}
            &nbsp;
            <strong>haben</strong>
            <br />
            <br />
            {t('modal')}
            <br />
            {t('perfect.special.8.3')}
            <br />
            {t('perfect.special.8.4')}
            *&nbsp;(+
            <strong>loswerden</strong>
            )
            <br />
            <span className={styles.cursive}>
              anfangen enden aufhören beginnen klappen stattfinden einsetzen
              aussetzen
            </span>
          </Cell>
          <Cell centered top>
            {t('perfect.special.8.2')}
            &nbsp;
            <strong>sein</strong>
            <br />
            <br />
            {t('perfect.special.8.5')}
            <br />
            {`${t('perfect.special.8.6')}**`}
            <br />
            <span className={styles.cursive}>
              sein werden bleiben begegnen folgen erscheinen gedeihen passieren
              gelingen misslingen (miss)glücken vorkommen missraten auffallen
              entrinnen nachlaufen (aus)weichen einfallen
            </span>
          </Cell>
        </Row>
      </Table>
      <img alt="" src={schem5} className={styles.img4} />
      <p className={styles.paragraph}>
        {`* ${t('perfect.special.8.7')}?`}
        <br />
        <strong>{t('perfect.special.8.8')}</strong>
        <br />
        &#47;&#47;&nbsp;Duden Grammatik 2009
      </p>
      <p className={styles.paragraph}>{`** ${t('perfect.special.8.9')}`}</p>
    </PageTemplate>
  );
};

export default Perfect;
