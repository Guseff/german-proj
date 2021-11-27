import React from 'react';

import {
  Task1,
  Task2,
  Task3,
  Task4,
  Task5,
  Task6,
  Task7,
  Task8,
  Task9,
  Task10,
} from './components';

const Deklination = (): JSX.Element => {
  return (
    <section>
      <h4>1) Deklinieren Sie die folgenden Substantive:</h4>
      <Task1 />
      <h4>
        2) Setzen Sie die eingeklammerten Substantive in die richtige Form:
      </h4>
      <Task2 />
      <h4>3) Wählen Sie die richtige Variante:</h4>
      <Task3 />
      <h4>4) Wählen Sie die richtige Variante:</h4>
      <Task4 />
      <h4>
        5) Beantworten Sie die Fragen! Benutzen Sie die eingeklammerten Wörter:
      </h4>
      <Task5 />
      <h4>6) Welche Substantive gehören zur schwachen Deklination? </h4>
      <Task6 />
      <h4>7) Welche Substantive gehören zur gemischten Deklination? </h4>
      <Task7 />
      <h4>8) Korrigieren Sie die Fehler!</h4>
      <Task8 />
      <h4>9) Wählen Sie die richtige Variante!</h4>
      <Task9 />
      <h4>
        10) Sezen Sie die eingeklammerten Substantive in richtiger Form ein
      </h4>
      <Task10 />
    </section>
  );
};

export default Deklination;
