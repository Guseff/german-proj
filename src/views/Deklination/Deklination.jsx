import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import PageTemplate from '../../components/common/PageTemplate';
import Table, { Cell, Row } from '../../components/common/Table';

import styles from './Deklination.css';

const Deklination = () => {
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
          <Cell rowSpan="4" low bold>
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
          <Cell rowSpan="4" low bold>
            {t('deklination.s.2')}
          </Cell>
        </Row>
        <Row>
          <Cell low bold>
            G
          </Cell>
          <Cell middle>des Tisches</Cell>
          <Cell middle>des Zimmers</Cell>
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
          <Cell rowSpan="4" low bold centered>
            {t('deklination.n.2')}
          </Cell>
        </Row>
        <Row>
          <Cell low bold>
            G
          </Cell>
          <Cell middle>des Menschen</Cell>
          <Cell middle>des Jungeen</Cell>
          <Cell middle>des Aspiranten</Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            D
          </Cell>
          <Cell middle>dem Menschen</Cell>
          <Cell middle>dem Jungeen</Cell>
          <Cell middle>dem Aspiranten</Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            A
          </Cell>
          <Cell middle>den Menschen</Cell>
          <Cell middle>den Jungeen</Cell>
          <Cell middle>den Aspiranten</Cell>
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
          <Cell middle>des Namens</Cell>
          <Cell middle>des Herzens</Cell>
          <Cell low bold>
            {t('deklination.mix.3')}
          </Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            D
          </Cell>
          <Cell middle>dem Namen</Cell>
          <Cell middle>dem Herzen</Cell>
          <Cell low bold>
            {t('deklination.mix.4')}
          </Cell>
          <Cell gap />
        </Row>
        <Row>
          <Cell low bold>
            A
          </Cell>
          <Cell middle>den Namen</Cell>
          <Cell middle>das Herz</Cell>
          <Cell low bold>
            {t('deklination.mix.5')}
          </Cell>
          <Cell gap />
        </Row>
      </Table>
      <h3 className={styles.centered}>{t('deklination.name')}</h3>
      <Table>
        <Row>
          <Cell low bold centered>
            {t('deklination.name.1')}
          </Cell>
          <Cell low bold centered>
            {t('deklination.name.2')}
          </Cell>
        </Row>
      </Table>
      <p className={cn(styles.centered, styles.cursive)}>
        {t('deklination.name.3')}
      </p>
      <h3 className={styles.centered}>{t('deklination.pl.titel')}</h3>
      <p className={styles.centered}>{t('deklination.pl.1')}</p>
      <Table>
        <Row>
          <Cell low bold>
            N
          </Cell>
          <Cell middle>die Becher</Cell>
          <Cell middle>die Flagen</Cell>
          <Cell middle>die Fans</Cell>
          <Cell rowSpan="3" colSpan="3" low bold centered>
            {t('deklination.pl.2')}
          </Cell>
        </Row>
        <Row>
          <Cell low bold>
            G
          </Cell>
          <Cell middle>der Becher</Cell>
          <Cell middle>der Flagen</Cell>
          <Cell middle>der Fans</Cell>
        </Row>
        <Row>
          <Cell low bold>
            D
          </Cell>
          <Cell middle>den Bechern</Cell>
          <Cell middle>den Flagen</Cell>
          <Cell middle>den Fans</Cell>
          <Cell rowSpan="3" gap />
        </Row>
        <Row>
          <Cell low bold>
            N
          </Cell>
          <Cell middle>die Becher</Cell>
          <Cell middle>die Flagen</Cell>
          <Cell middle>die Fans</Cell>
          <Cell low centered>
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
