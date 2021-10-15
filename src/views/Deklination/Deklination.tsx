import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import PageTemplate from 'Common/components/PageTemplate';
import Table, { Cell, Row } from '../../common/components/Table';

import styles from './Deklination.css';

const Deklination = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <PageTemplate>
      <h2 className={styles.centered}>{t('deklination.title')}</h2>
      <p className={styles.bold}>{t('deklination.gens.1')}</p>
      <p className={styles.bold}>{t('deklination.gens.2')}</p>
      <p className={styles.bold}>{t('deklination.gens.3')}</p>
      <h3 className={styles.centered}>{t('1.Feminine.title')}</h3>
      <p className={styles.centered}>{t('deklination.fem.1')}</p>
      <Table>
        <Row>
          <Cell low bold>
            N
          </Cell>
          <Cell middle>die Vase</Cell>
          <Cell low bold>
            {t('deklination.fem.2')}
          </Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            G
          </Cell>
          <Cell middle>der Vase</Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            D
          </Cell>
          <Cell middle>der Vase</Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            A
          </Cell>
          <Cell middle>die Vase</Cell>
          <Cell gap />
        </Row>
      </Table>
      <h3 className={styles.centered}>{t('2.S-declension.title')}</h3>
      <p className={styles.centered}>{t('deklination.s.1')}</p>
      <Table>
        <Row>
          <Cell low bold>
            N
          </Cell>
          <Cell middle>der Tisch</Cell>
          <Cell middle>das Zimmer</Cell>
          <Cell low bold>
            {t('deklination.s.2')}
          </Cell>
        </Row>
        <Row>
          <Cell low bold>
            G
          </Cell>
          <Cell middle>
            des Tisch
            <span className={styles.red}>es</span>
          </Cell>
          <Cell middle>
            des Zimmer
            <span className={styles.red}>s</span>
          </Cell>
          <Cell middle>{t('deklination.s.3')}</Cell>
        </Row>
        <Row>
          <Cell low bold>
            D
          </Cell>
          <Cell middle>dem Tisch</Cell>
          <Cell middle>dem Zimmer</Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            A
          </Cell>
          <Cell middle>den Tisch</Cell>
          <Cell middle>das Zimmer</Cell>
          <Cell gap />
        </Row>
      </Table>
      <h4>
        <u>{t('deklination.s.4')}</u>
      </h4>
      <p>{t('deklination.s.5')}</p>
      <p className={cn(styles.centered, styles.cursive)}>
        des Sitzes, des Tanzes, des Wunsches
      </p>
      <p>{t('deklination.s.6')}</p>
      <p className={cn(styles.centered, styles.cursive)}>
        des Modus, der Kosmos, des Mechanismus
      </p>
      <p />
      <h3 className={styles.centered}>{t('3.N-declension.title')}</h3>
      <p className={styles.centered}>{t('deklination.n.1')}</p>
      <Table>
        <Row>
          <Cell low bold>
            N
          </Cell>
          <Cell middle>der Mensch</Cell>
          <Cell middle>der Junge</Cell>
          <Cell middle>der Aspirant</Cell>
          <Cell gap />
          <Cell low bold centered>
            {t('deklination.n.2')}
          </Cell>
        </Row>
        <Row>
          <Cell low bold>
            G
          </Cell>
          <Cell middle>
            des Mensch
            <span className={styles.red}>en</span>
          </Cell>
          <Cell middle>
            des Junge
            <span className={styles.red}>n</span>
          </Cell>
          <Cell middle>
            des Aspirant
            <span className={styles.red}>en</span>
          </Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            D
          </Cell>
          <Cell middle>
            dem Mensch
            <span className={styles.red}>en</span>
          </Cell>
          <Cell middle>
            dem Junge
            <span className={styles.red}>n</span>
          </Cell>
          <Cell middle>
            dem Aspirant
            <span className={styles.red}>en</span>
          </Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            A
          </Cell>
          <Cell middle>
            den Mensch
            <span className={styles.red}>en</span>
          </Cell>
          <Cell middle>
            den Junge
            <span className={styles.red}>n</span>
          </Cell>
          <Cell middle>
            der Aspirant
            <span className={styles.red}>en</span>
          </Cell>
          <Cell gap />
        </Row>
      </Table>
      <h4 className={styles.centered}>
        <u>{t('deklination.n.5')}</u>
      </h4>
      <p>{t('deklination.n.6')}</p>
      <p className={cn(styles.centered, styles.cursive)}>
        der Löwe, der Zeuge, der Finne, der Schwede, der Pole, der Belarusse,
        der Grieche, der Ire, der Schotte, der Affe, der Hase, der Rabe, der
        Matrose, der Kollege, der Experte, der Heide, der Junge, der Kunde, der
        Neffe
      </p>
      <p>{t('deklination.n.7')}</p>
      <p className={cn(styles.red, styles.bold)}>{t('deklination.Leut')}</p>
      <p>{t('deklination.n.8')}</p>
      <p className={cn(styles.centered, styles.cursive)}>
        der Automat, der Brillant, der Diamant, der Foliant, der Koeffizient,
        der Komet, der Konsonant, der Paragraf, der Planet u.a.
      </p>
      <p>{t('deklination.n.9')}</p>
      <p className={cn(styles.centered, styles.cursive)}>
        der Bär. der Held, der Zar, der Narr, der Prinz, der Mensch, der Tor,
        der Graf
      </p>
      <p>+ der Tyrann, der Barbar, der Bauer, der Kamerad, der Vorfahr u.a.</p>
      <h3 className={styles.centered}>{t('4.declension.mix.title')}</h3>
      <p className={styles.centered}>{t('deklination.mix.1')}</p>
      <p className={styles.centered}>
        der Buchstabe, der Felse(n), der Frieden, der Funke, der Gedanke, der
        Glaube, der Haufen, der Name, der Samen, der Schaden, der Wille
      </p>
      <Table>
        <Row>
          <Cell low bold>
            N
          </Cell>
          <Cell middle>der Name</Cell>
          <Cell middle>das Herz</Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            G
          </Cell>
          <Cell middle>
            des Name
            <span className={styles.red}>ns</span>
          </Cell>
          <Cell middle>
            des Herz
            <span className={styles.red}>ens</span>
          </Cell>
          <Cell low bold>
            {t('deklination.mix.3')}
          </Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            D
          </Cell>
          <Cell middle>
            dem Name
            <span className={styles.red}>n</span>
          </Cell>
          <Cell middle>
            dem Herz
            <span className={styles.red}>en</span>
          </Cell>
          <Cell low bold>
            {t('deklination.mix.4')}
          </Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            A
          </Cell>
          <Cell middle>
            den Name
            <span className={styles.red}>n</span>
          </Cell>
          <Cell middle>
            das Herz
            <span className={styles.red}> !</span>
          </Cell>
          <Cell low bold>
            {t('deklination.mix.5')}
          </Cell>
          <Cell gap />
        </Row>
      </Table>
      <h3 className={styles.centered}>{t('deklination.name')}</h3>
      <Table>
        <Row>
          <Cell equal bold centered>
            {t('deklination.name.1')}
          </Cell>
          <Cell equal bold centered>
            {t('deklination.name.2')}
          </Cell>
        </Row>
        <Row>
          <Cell equal bold centered />
          <Cell equal cursive right>
            {t('deklination.name.3')}
            <br />
            {t('deklination.name.4')}
          </Cell>
        </Row>
        <Row>
          <Cell equal top>
            <span className={cn(styles.bold, styles.tabula)}>
              {t('deklination.name.5')}
              &nbsp;(F/M) =
            </span>
            <br />
            {t('deklination.name.6')}
            <br />
            <br />
            <span className={styles.tabula}>
              {`F - ${t('deklination.name.8')}`}
            </span>
            <br />
            <span className={styles.cursive}>
              <span className={styles.underline}>der</span>
              &nbsp;Donau
              <span className={styles.red}>_</span>
            </span>
            <br />
            <span className={styles.tabula}>
              {`M - ${t('deklination.name.9')}`}
            </span>
            <br />
            <span className={styles.cursive}>
              <span className={styles.underline}>des</span>
              &nbsp;Main(
              <span className={styles.red}>s</span>
              <span>),</span>
            </span>
            <span className={styles.cursive}>
              &nbsp;
              <span className={styles.underline}>des</span>
              &nbsp;Mississippi(s),
            </span>
            <span className={styles.cursive}>
              &nbsp;
              <span className={styles.underline}>des</span>
              &nbsp;Amazona
              <span className={styles.red}>s</span>
            </span>
            <br />
            <br />
            <span className={styles.tabula}>{t('deklination.name.12')}</span>
            <span>: </span>
            <br />
            <span className={styles.cursive}>
              <span className={styles.underline}>des</span>
              <span> Jemen(</span>
              <span className={styles.red}>s</span>
              <span>)</span>
            </span>
          </Cell>
          <Cell equal top>
            <span className={styles.tabula}>&lArr; </span>
            {t('deklination.name.7')}
            <br />
            <br />
            <br />
            <span className={cn(styles.bold, styles.tabula)}>
              {t('deklination.name.5')}
              &nbsp;(N) -
            </span>
            <br />
            {t('deklination.name.10')}
            <span className={styles.cursive}>
              <span>s, ss, z, sch </span>
              &rarr;
              <span> „von D“ </span>
            </span>
            {t('deklination.name.11')}
            <span> (&#8863;)</span>
            <br />
            <span className={cn(styles.cursive, styles.tabula)}>
              <span>Deutschland</span>
              <span className={styles.red}>s</span>
              <span>, </span>
            </span>
            <span className={styles.cursive}>
              <span>Berlin</span>
              <span className={styles.red}>s</span>
              <span>, </span>
            </span>
            <span className={styles.cursive}>
              <span>Bern</span>
              <span className={styles.red}>s</span>
              <span>, </span>
            </span>
            <span className={styles.cursive}>
              <span className={styles.red}>von </span>
              <span>Belaru</span>
              <span className={styles.underline}>s</span>
            </span>
            <br />
            <br />
            <span className={cn(styles.bold, styles.tabula)}>
              {t('deklination.name.13')}
            </span>
            <br />
            <span className={styles.tabula}>
              &bull;&nbsp;
              {t('deklination.name.14')}
            </span>
            <br />
            <span className={cn(styles.cursive, styles.tabula)}>
              <span>Karl</span>
              <span className={styles.red}>s</span>
              <span> Auto, </span>
              <span>Schiller</span>
              <span className={styles.red}>s</span>
              <span> Stück, </span>
              <span>Marku</span>
              <span className={styles.underline}>s</span>
              <span className={styles.red}>&rsquo;</span>
              <span> Hut = Hut </span>
              <span className={styles.red}>von </span>
              Markus
            </span>
            <br />
            <br />
            <span className={styles.tabula}>
              &bull;&nbsp;
              {t('deklination.name.15')}
            </span>
            <br />
            <span className={styles.cursive}>
              &rarr;
              <span> -s </span>
            </span>
            <span>{t('deklination.name.17')}</span>
            <br />
            <span className={cn(styles.cursive, styles.tabula)}>
              <span>Doktor</span>
              <span className={styles.red}>_</span>
              <span> Peter</span>
              <span className={styles.red}>s</span>
              <span> Ratschlag, </span>
            </span>
            <br />
            <span className={styles.cursive}>
              <span className={cn(styles.bold, styles.underline)}>
                {t('deklination.name.18')}
              </span>
              <span> Herr</span>
              <span className={styles.red}>n</span>
              <span> Kioschi</span>
              <span className={styles.red}>s</span>
              <span> Unterschrift (= </span>
              {t('deklination.name.19')}
              <span>), Angestellte</span>
              <span className={styles.red}>n</span>
              <span> Hell</span>
              <span className={styles.red}>s</span>
              <span> Büro (= </span>
              {t('deklination.name.20')}
              <span className={styles.sup}>{t('deklination.name.21')}</span>
              <span>)</span>
            </span>
            <br />
            <br />
            <span className={styles.tabula}>
              &bull;&nbsp;
              {t('deklination.name.22')}
            </span>
            <span> &rarr; </span>
            <span>{t('deklination.name.23')}</span>
            <br />
            <span className={cn(styles.cursive, styles.tabula)}>
              <span>Erfindung von Peter</span>
              <span className={styles.red}>_ dem </span>
              <span> Erste</span>
              <span className={styles.red}>n</span>
              <span>, Gesetz Karl</span>
              <span className={styles.red}>s des </span>
              <span>Dritte</span>
              <span className={styles.red}>n</span>
            </span>
            <br />
            <br />
          </Cell>
        </Row>
      </Table>
      <h3 className={styles.centered}>{t('deklination.pl.titel')}</h3>
      <p className={styles.centered}>{t('deklination.pl.1')}</p>
      <Table>
        <Row>
          <Cell low bold>
            N
          </Cell>
          <Cell low>die Becher</Cell>
          <Cell low>die Flagen</Cell>
          <Cell low>die Fans</Cell>
          <Cell bold centered>
            {t('deklination.pl.2')}
          </Cell>
        </Row>
        <Row>
          <Cell low bold>
            G
          </Cell>
          <Cell low>der Becher</Cell>
          <Cell low>der Flagen</Cell>
          <Cell low>der Fans</Cell>
        </Row>
        <Row>
          <Cell low bold>
            D
          </Cell>
          <Cell low>
            den Becher
            <span className={styles.red}>n</span>
          </Cell>
          <Cell low>
            den Flage
            <span className={styles.bold}>n</span>
          </Cell>
          <Cell low>
            den Fans
            <span className={styles.red}>_</span>
          </Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            N
          </Cell>
          <Cell low>die Becher</Cell>
          <Cell low>die Flagen</Cell>
          <Cell low>die Fans</Cell>
          <Cell centered>
            <span className={styles.cursive}>
              Fans, Autos, Wagen, Frauen, Visa
            </span>
          </Cell>
        </Row>
      </Table>
    </PageTemplate>
  );
};

export default Deklination;
