import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Start.css';

const Start = () => (
  <article className={styles.main}>
    <div className={styles.university}>
      Учреждение образования
      <br />
      “Брестский государственный университет имени А.С. Пушкина”
      <br />
      Кафедра немецкой филологии и лингводидактики
    </div>
    <div className={styles.author}>А.В. Гусева</div>
    <div className={styles.title}>практическая грамматика</div>
    <div className={styles.intro}>
      <div justify="center" className={styles.introTitle}>
        НЕМЕЦКИЙ ЯЗЫК
      </div>
      <Link to="/prasens" className={styles.btn}>
        СТАРТ
      </Link>
      <div className={styles.introDescription}>
        Электронный интерактивный практикум
        <br />
        для студентов языковых специальностей
        <br />
        высших учебных заведений, изучающий немецкий язык как второй иностранный
      </div>
      <div className={styles.introBoss}>
        Под редакцией кандидата педагогических наук, доцента
        <br />
        Е. Д. Осипова
      </div>
    </div>
  </article>
);

export default Start;
