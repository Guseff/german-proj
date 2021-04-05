import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import PageTemplate from '../../components/common/PageTemplate';

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
      <table className="page-content--table">
        <tbody>
          <tr>
            <td className="low-cell bold-cell">N</td>
            <td className="mid-cell">die Vase</td>
            <td rowSpan="4" className="low-cell bold-cell">
              {t('deklination.fem.2')}
            </td>
            <td className="gap-cell" />
          </tr>
          <tr>
            <td className="low-cell bold-cell">G</td>
            <td className="mid-cell">der Vase</td>
            <td className="gap-cell" />
          </tr>
          <tr>
            <td className="low-cell bold-cell">D</td>
            <td className="mid-cell">der Vase</td>
            <td className="gap-cell" />
          </tr>
          <tr>
            <td className="low-cell bold-cell">A</td>
            <td className="mid-cell">die Vase</td>
            <td className="gap-cell" />
          </tr>
        </tbody>
      </table>
      <h3 className={styles.centered}>{t('2.S-declension.title')}</h3>
      <p className={styles.centered}>{t('deklination.s.1')}</p>
      <table className="page-content--table">
        <tbody>
          <tr>
            <td className="low-cell bold-cell">N</td>
            <td className="mid-cell">der Tisch</td>
            <td className="mid-cell">das Zimmer</td>
            <td rowSpan="4" className="low-cell bold-cell">
              {t('deklination.s.2')}
            </td>
          </tr>
          <tr>
            <td className="low-cell bold-cell">G</td>
            <td className="mid-cell">des Tisches</td>
            <td className="mid-cell">des Zimmers</td>
            <td className="mid-cell">{t('deklination.s.3')}</td>
          </tr>
          <tr>
            <td className="low-cell bold-cell">D</td>
            <td className="mid-cell">dem Tisch</td>
            <td className="mid-cell">dem Zimmer</td>
            <td className="gap-cell" />
          </tr>
          <tr>
            <td className="low-cell bold-cell">A</td>
            <td className="mid-cell">den Tisch</td>
            <td className="mid-cell">das Zimmer</td>
            <td className="gap-cell" />
          </tr>
        </tbody>
      </table>
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
      <table className="page-content--table">
        <tbody>
          <tr>
            <td className="low-cell bold-cell">N</td>
            <td className="mid-cell">der Mensch</td>
            <td className="mid-cell">der Junge</td>
            <td className="mid-cell">der Aspirant</td>
            <td className="gap-cell" />
            <td rowSpan="4" className="low-cell bold-cell centered">
              {t('deklination.n.2')}
            </td>
          </tr>
          <tr>
            <td className="low-cell bold-cell">G</td>
            <td className="mid-cell">des Menschen</td>
            <td className="mid-cell">des Jungeen</td>
            <td className="mid-cell">des Aspiranten</td>
            <td className="gap-cell" />
          </tr>
          <tr>
            <td className="low-cell bold-cell">D</td>
            <td className="mid-cell">dem Menschen</td>
            <td className="mid-cell">dem Jungeen</td>
            <td className="mid-cell">dem Aspiranten</td>
            <td className="gap-cell" />
          </tr>
          <tr>
            <td className="low-cell bold-cell">A</td>
            <td className="mid-cell">den Menschen</td>
            <td className="mid-cell">den Jungeen</td>
            <td className="mid-cell">den Aspiranten</td>
            <td className="gap-cell" />
          </tr>
        </tbody>
      </table>
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
      <table className="page-content--table">
        <tbody>
          <tr>
            <td className="low-cell bold-cell">N</td>
            <td className="mid-cell">der Name</td>
            <td className="mid-cell">das Herz</td>
            <td className="gap-cell" />
          </tr>
          <tr>
            <td className="low-cell bold-cell">G</td>
            <td className="mid-cell">des Namens</td>
            <td className="mid-cell">des Herzens</td>
            <td className="low-cell bold-cell">{t('deklination.mix.3')}</td>
            <td className="gap-cell" />
          </tr>
          <tr>
            <td className="low-cell bold-cell">D</td>
            <td className="mid-cell">dem Namen</td>
            <td className="mid-cell">dem Herzen</td>
            <td className="low-cell bold-cell">{t('deklination.mix.4')}</td>
            <td className="gap-cell" />
          </tr>
          <tr>
            <td className="low-cell bold-cell">A</td>
            <td className="mid-cell">den Namen</td>
            <td className="mid-cell">das Herz</td>
            <td className="low-cell bold-cell">{t('deklination.mix.5')}</td>
            <td className="gap-cell" />
          </tr>
        </tbody>
      </table>
      <h3 className={styles.centered}>{t('deklination.name')}</h3>
      <table className="page-content--table">
        <tbody>
          <tr>
            <td className="low-cell bold-cell centered">
              {t('deklination.name.1')}
            </td>
            <td className="low-cell bold-cell centered">
              {t('deklination.name.2')}
            </td>
          </tr>
        </tbody>
      </table>
      <p className={cn(styles.centered, styles.cursive)}>
        {t('deklination.name.3')}
      </p>
      <h3 className={styles.centered}>{t('deklination.pl.titel')}</h3>
      <p className={styles.centered}>{t('deklination.pl.1')}</p>
      <table className="page-content--table">
        <tbody>
          <tr>
            <td className="low-cell bold-cell">N</td>
            <td className="mid-cell">die Becher</td>
            <td className="mid-cell">die Flagen</td>
            <td className="mid-cell">die Fans</td>
            <td rowSpan="3" colSpan="3" className="low-cell bold-cell centered">
              {t('deklination.pl.2')}
            </td>
          </tr>
          <tr>
            <td className="low-cell bold-cell">G</td>
            <td className="mid-cell">der Becher</td>
            <td className="mid-cell">der Flagen</td>
            <td className="mid-cell">der Fans</td>
          </tr>
          <tr>
            <td className="low-cell bold-cell">D</td>
            <td className="mid-cell">den Bechern</td>
            <td className="mid-cell">den Flagen</td>
            <td className="mid-cell">den Fans</td>
            <td rawspan="3" className="gap-cell" />
          </tr>
          <tr>
            <td className="low-cell bold-cell">N</td>
            <td className="mid-cell">die Becher</td>
            <td className="mid-cell">die Flagen</td>
            <td className="mid-cell">die Fans</td>
            <td className="low-cell cursive centered">
              Fans, Autos, Wagen, Frauen, Visa
            </td>
          </tr>
        </tbody>
      </table>
    </PageTemplate>
  );
};

export default Deklination;
