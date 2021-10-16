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
      der Frosch, der Belarusse, der Bruder, der Doktor, der Neffe, der Fuchs,
      der Polyglott, die Gans, der Bär, der Hügel, der Tor, der Leutnant, der
      Arzt
      <h4>7) Welche Substantive gehören zur gemischten Deklination? </h4>
      das Auto, der Buchstabe, der Garten, der Frieden, der Ritter, der Funke,
      der Gedanke, die Bude, der Glaube, der Samen, die Schadenfreude, der
      Willensstarke
      <h4>8) Korrigieren Sie die Fehler!</h4>
      <ol>
        <li>Das Treffen mit dem Dekanen findet am Donnerstag statt.</li>
        <li>Hast du auf den Gasten gewartet?</li>
        <li>Wir beobachteten den roten Planet die ganze Nacht.</li>
        <li>Im Herz des Landes liegt diesen Schloss.</li>
        <li>Wir bleiben diese Woche bei unseren Elternn.</li>
        <li>Die Rechtschreibung dieses Buchstabe finden alle Kinder schwer.</li>
        <li>Er hat die Rede eines Professoren nicht ganz gehört.</li>
        <li>Die Prüfung des Students ist um 9:00.</li>
        <li>Mit solchem Glaube an sich kann man alles schaffen!</li>
        <li>Ich konnte die Worte dieses Franzoses kaum verstehen.</li>
      </ol>
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
