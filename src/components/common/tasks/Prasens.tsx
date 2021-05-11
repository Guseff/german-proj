import { useFormik } from 'formik';
import React, { useState } from 'react';

import Table, { Cell, Row } from '../Table';
import Input from '../Table/components/Input/Input';
import { initialValues, rightAnswers } from './consts';
import {
  ETestResult,
  TTestQuestions,
  TTestAnswers,
  TTestResult,
} from './types';

const checkInputAnswerHandle = (
  test: TTestQuestions,
  answers: TTestAnswers
): TTestResult => {
  return Object.keys(test).reduce(
    (acc, key) => ({
      ...acc,
      [key]:
        test[key] === ''
          ? ETestResult.Panding
          : answers[key].test(test[key].trim())
          ? ETestResult.Right
          : ETestResult.Wrong,
    }),
    {}
  );
};

const PrasensTest = (): JSX.Element => {
  const [matches, setMatches] = useState<TTestResult>(initialValues);

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      setMatches(checkInputAnswerHandle(values, rightAnswers));
    },
  });

  return (
    <section>
      <h4>
        1) Bitte ergänzen Sie in den leeren Feldern die richtigen Verbformen.
        Die bereits eingetragenen Verbformen helfen Ihnen dabei:
      </h4>
      <form onSubmit={formik.handleSubmit}>
        <Table>
          <Row>
            <Cell>Infinitiv</Cell>
            <Cell leftBorder centered>
              ich
            </Cell>
            <Cell leftBorder centered>
              du
            </Cell>
            <Cell leftBorder centered>
              er/sie/es
            </Cell>
            <Cell leftBorder centered>
              wir
            </Cell>
            <Cell leftBorder centered>
              ihr
            </Cell>
            <Cell leftBorder centered>
              sie/Sie
            </Cell>
          </Row>
          <Row>
            <Cell>hören</Cell>
            <Cell leftBorder centered low>
              <Input
                id="h1"
                onChange={formik.handleChange}
                className={matches.h1}
              />
            </Cell>
            <Cell leftBorder centered low>
              <Input
                id="h2"
                onChange={formik.handleChange}
                className={matches.h2}
              />
            </Cell>
            <Cell leftBorder centered low>
              <Input
                id="h3"
                onChange={formik.handleChange}
                className={matches.h3}
              />
            </Cell>
            <Cell leftBorder centered low>
              hören
            </Cell>
            <Cell leftBorder centered low>
              <Input
                id="h5"
                onChange={formik.handleChange}
                className={matches.h5}
              />
            </Cell>
            <Cell leftBorder centered low>
              <Input
                id="h6"
                onChange={formik.handleChange}
                className={matches.h6}
              />
            </Cell>
          </Row>
          <Row>
            <Cell>kochen</Cell>
            <Cell leftBorder centered>
              koche
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="k2"
                onChange={formik.handleChange}
                className={matches.k2}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="k3"
                onChange={formik.handleChange}
                className={matches.k3}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="k4"
                onChange={formik.handleChange}
                className={matches.k4}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="k5"
                onChange={formik.handleChange}
                className={matches.k5}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="k6"
                onChange={formik.handleChange}
                className={matches.k6}
              />
            </Cell>
          </Row>
          <Row>
            <Cell>lügen</Cell>
            <Cell leftBorder centered>
              <Input
                id="l1"
                onChange={formik.handleChange}
                className={matches.l1}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="l2"
                onChange={formik.handleChange}
                className={matches.l2}
              />
            </Cell>
            <Cell leftBorder centered>
              lügt
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="l4"
                onChange={formik.handleChange}
                className={matches.l4}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="l5"
                onChange={formik.handleChange}
                className={matches.l5}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="l6"
                onChange={formik.handleChange}
                className={matches.l6}
              />
            </Cell>
          </Row>
          <Row>
            <Cell>trinken</Cell>
            <Cell leftBorder centered>
              <Input
                id="t1"
                onChange={formik.handleChange}
                className={matches.t1}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="t2"
                onChange={formik.handleChange}
                className={matches.t2}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="t3"
                onChange={formik.handleChange}
                className={matches.t3}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="t4"
                onChange={formik.handleChange}
                className={matches.t4}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="t5"
                onChange={formik.handleChange}
                className={matches.t5}
              />
            </Cell>
            <Cell leftBorder centered>
              trinken
            </Cell>
          </Row>
          <Row>
            <Cell>wohnen</Cell>
            <Cell leftBorder centered>
              <Input
                id="w1"
                onChange={formik.handleChange}
                className={matches.w1}
              />
            </Cell>
            <Cell leftBorder centered>
              wohnst
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="w3"
                onChange={formik.handleChange}
                className={matches.w3}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="w4"
                onChange={formik.handleChange}
                className={matches.w4}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="w5"
                onChange={formik.handleChange}
                className={matches.w5}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="w6"
                onChange={formik.handleChange}
                className={matches.w6}
              />
            </Cell>
          </Row>
          <Row>
            <Cell>zeigen</Cell>
            <Cell leftBorder centered>
              <Input
                id="z1"
                onChange={formik.handleChange}
                className={matches.z1}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="z2"
                onChange={formik.handleChange}
                className={matches.z2}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="z3"
                onChange={formik.handleChange}
                className={matches.z3}
              />
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="z4"
                onChange={formik.handleChange}
                className={matches.z4}
              />
            </Cell>
            <Cell leftBorder centered>
              zeigt
            </Cell>
            <Cell leftBorder centered>
              <Input
                id="z6"
                onChange={formik.handleChange}
                className={matches.z6}
              />
            </Cell>
          </Row>
        </Table>
        <button type="submit">Check</button>
      </form>
      <h4>2) Wählen Sie die richtige Variante:</h4>
      <table>
        <tbody>
          <Row>
            <Cell rowSpan={4}>
              1) Seinen Lehrer ... er nie, er macht alles allein.
            </Cell>
          </Row>
          <Row>
            <Cell>а) fragt</Cell>
            <Cell>b) frage</Cell>
            <Cell>c) fragen</Cell>
            <Cell>d) fragst</Cell>
          </Row>
          <Row>
            <Cell>
              2) Ihr ... das immer, aber ich kann das nie verstehen. Was
              bedeutet dieses Wort?
            </Cell>
          </Row>
          <Row>
            <Cell>а) wiederholen</Cell>
            <Cell>b) wiederholt</Cell>
            <Cell>c)wiederhole</Cell>
            <Cell>d) wiederholst</Cell>
          </Row>
          <Row>
            <Cell>3) Ich …… ihm, sogar wenn er lügt.</Cell>
          </Row>
          <Row>
            <Cell>а) glaube</Cell>
            <Cell>b) glauben</Cell>
            <Cell>c) glaubst</Cell>
            <Cell>d) glaubt</Cell>
          </Row>
          <Row>
            <Cell>4) Wann …….? – Nach der Uni</Cell>
          </Row>
          <Row>
            <Cell>а) kaufe du ein</Cell>
            <Cell>b) kaufst du ein</Cell>
            <Cell>c) kaufest du ein</Cell>
            <Cell>d) kauft du ein</Cell>
          </Row>
          <Row>
            <Cell>5) Mein Freund … in Argentina</Cell>
          </Row>
          <Row>
            <Cell>а) leben</Cell>
            <Cell>b) lebe</Cell>
            <Cell>c) lebt</Cell>
            <Cell>d) lebst</Cell>
          </Row>
        </tbody>
      </table>
      <h4>3) Wählen Sie die richtige Variante:</h4>
      <ol>
        <li>Warum redest/reds du so viel?</li>
        <li>Wie heißt/heißst du noch mal? Erika?</li>
        <li>Ich sammele/sammle Postkarten</li>
        <li>Er zeichnet/zeichnt gern Comics</li>
        <li>Wenn du so im Club tanzst/tanzt, ist es komisch</li>
        <li>Ich angle/angele nicht so gern, aber mein Bruder schon.</li>
      </ol>
      <h4>4) Setzen Sie die Verben in Klammern im Präsens ein:</h4>
      <ol>
        <li>Man … viel in der Schule. (lesen)</li>
        <li>Du … nur Chips! (essen)</li>
        <li>… du mir? Ich schaffe das alleine nicht (helfen)</li>
        <li>… du das auch? (sehen)</li>
        <li>Ich fahre heute nach Hause. – … du mit dem Auto? (fahren)</li>
        <li>Alles … zu schnell in dieser Welt. (laufen)</li>
      </ol>
      <h4>
        5) Korrigieren Sie die Fehler in den Sätzen. In jedem Satz gibt es
        jeweils 1 Fehler:
      </h4>
      <ol>
        <li>Wenn dich jemand rettst, sagt man „Danke“! (retten)</li>
        <li>In Europa regnt es meistens im Frühling (regnen)</li>
        <li>Du redst eigentlich viel zu oft darüber (reden)</li>
        <li>Öffnst du deinen Laden später heute? (öffnen)</li>
        <li>Das Kind atmt ruhig (atmen)</li>
      </ol>
      <h4>
        6) Übersetzen Sie ins Deutsche! Verwenden Sie die Verben aus den
        Klammern:
      </h4>
      <ol>
        <li>Ты всегда ешь так много овощей? (essen)</li>
        <li>Ты разрываешь мне душу, что дальше? Развод? (zerreißen)</li>
        <li>Ты просто читаешь твой доклад с листа? Не может быть! (ablesen)</li>
        <li>
          Ты часто здесь сидишь? Я ни разу не видела тебе на лекциях. (sitzen)
        </li>
        <li>Тебя зовут Андре, это твоё настоящее имя. (heißen)</li>
      </ol>
      <h4>7) Setzen Sie die eingeklammerten Verben im Präsens ein</h4>
      <p>
        Jeden Sommer … ich nach Deutschland (fahren). Das … mein Lieblingsland
        für Tourismus! (sein) Leider … ich kein Wort Deutsch (sprechen), aber …
        etwas verstehen (können). Deshalb… ich meistens mit den Leuten Englisch
        zu sprechen (versuchen). Ich … immer ein tolles Hotel und auch ein
        Restaurant (finden). Oft … ich Berlin (besuchen). Dort … mein guter
        Freund (wohnen). Er … bei einer IT-Firma und … sehr wenig Zeit
        (arbeiten, haben). Er … mich am Alexander Platz und wir … in ein Café
        (treffen, gehen). Er … immer am Fenster und … ein Stück Torte (sitzen,
        essen). Ich … eher schwarzen Kaffee und Kuchen (wählen). Der Ausblick …
        (sein) toll, doch es … zu viele Menschen (geben). Die Hauptstadt …
        jährlich Millionen Touristen (besuchen). Aber ich … Großstädte nicht
        besonders, deswegen … ich nach ein paar Tagen weiter (mögen, fahren).
        Die Fahrt … nur etwa 40 Minuten, mein Ziel … Potsdam (dauern, sein).
        Diese schöne kleine Stadt … nicht weit von Berlin und … so viel zu sehen
        (liegen, bieten)! Ich … früh und … durch den Park (aufstehen, spazieren
        gehen). Ich … danach das Schloss Sanssouci, … tolles Wetter und … mein
        Mittagessen (besichtigen, genießen, haben). Ich … in Potsdam bis Ende
        der Woche und … nach Berlin (bleiben, zurückkehren). Dort … mein Zug
        nach Hause (warten).
      </p>
      <p>
        Nächstes Jahr … ich nach München fahren, aber ich … mir das noch
        (wollen, überlegen). Dort … zu viele Touristen und die Stadt … sehr
        teuer (sein). Andererseits … mich die Sehenswürdigkeiten... (verlocken)
        Die Altstadt mit ihren bunten Märkten, die Museen und Bildergalerien...
        Vielleicht besser … ich am Meer und das was… (sich erholen) Oh Gott!
        Wieso … es so kompliziert (sein)? Ich … noch mal darüber … (nachdenken)
      </p>
    </section>
  );
};

export default PrasensTest;
