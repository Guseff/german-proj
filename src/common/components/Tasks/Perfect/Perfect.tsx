import React from 'react';

import { Task1, Task2, Task3, Task4, Task5, Task6, Task7, Task8 } from './components';

const Perfect = (): JSX.Element => {
  return (
    <section>
      <h4>
        1) Welche der folgenden Verben benutzt man mit dem Hilfsverb „haben“ und
        welche mit dem Hilfsverb „sein“? Bilden Sie zwei Gruppen:
      </h4>
      <Task1 />
      <h4>
        2) Bilden Sie die Sätze aus den Wörtern. Achten Sie auf die richtige
        Reihenfolge:
      </h4>
      <Task2 />
      <h4>3) Bilden Sie das Partizip II der folgenden schwachen Verben:</h4>
      <Task3 />
      <h4>4) Setzen Sie die Verben in Klammern im Perfekt ein:</h4>
      <Task4 />
      <h4>
        5) Schreiben Sie die folgenden Sätze im Perfekt um. Benutzen Sie dabei
        Wörter in den Klammern.
      </h4>
      <Task5 />
      <h4>6) Korrigieren Sie die Fehler in Bildung der Partizipien II</h4>
      <Task6 />
      <h4>
        7) Übersetzen Sie ins Deutsche. Benutzen Sie dabei die Wörter aus den
        Klammern
      </h4>
      <Task7 />
      <h4>8) Sezen Sie die eingeklammerten Verben im Perfekt ein</h4>
      <Task8 />
    </section>
  );
};

export default Perfect;
