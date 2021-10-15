import React from 'react';
import { Task1, Task2, Task3, Task4, Task5, Task6, Task7 } from './components';

const Prasens = (): JSX.Element => {
  return (
    <section>
      <h4>
        1) Bitte ergänzen Sie in den leeren Feldern die richtigen Verbformen.
        Die bereits eingetragenen Verbformen helfen Ihnen dabei:
      </h4>
      <Task1 />
      <h4>2) Wählen Sie die richtige Variante:</h4>
      <Task2 />
      <h4>3) Wählen Sie die richtige Variante:</h4>
      <Task3 />
      <h4>4) Setzen Sie die Verben in Klammern im Präsens ein:</h4>
      <Task4 />
      <h4>
        5) Korrigieren Sie die Fehler in den Sätzen. In jedem Satz gibt es
        jeweils 1 Fehler:
      </h4>
      <Task5 />
      <h4>
        6) Übersetzen Sie ins Deutsche! Verwenden Sie die Verben aus den
        Klammern:
      </h4>
      <Task6 />
      <h4>7) Setzen Sie die eingeklammerten Verben im Präsens ein</h4>
      <Task7 />
    </section>
  );
};

export default Prasens;
