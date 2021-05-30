import React, { useState } from 'react';
import { useFormik } from 'formik';

import Input from '../../../Input/Input';
import Button from '../../../Button/Button';
import { rightAnswers7 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Task7 = (): JSX.Element => {
  const [matches, setMatches] = useState<TTestResult>(initialValues);

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      setMatches(checkInputAnswerHandle(values, rightAnswers));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <p>
        Jeden Sommer&nbsp;
        <Input
          id="s1"
          onChange={formik.handleChange}
          className={matches.s1}
          small
        />
        &nbsp;ich nach Deutschland (fahren). Das&nbsp;
        <Input
          id="s2"
          onChange={formik.handleChange}
          className={matches.s2}
          small
        />
        &nbsp;mein Lieblingsland für Tourismus! (sein) Leider&nbsp;
        <Input
          id="s3"
          onChange={formik.handleChange}
          className={matches.s3}
          small
        />
        &nbsp;ich kein Wort Deutsch (sprechen), aber&nbsp;
        <Input
          id="s4"
          onChange={formik.handleChange}
          className={matches.s4}
          small
        />
        &nbsp; etwas verstehen (können). Deshalb&nbsp;
        <Input
          id="s5"
          onChange={formik.handleChange}
          className={matches.s5}
          small
        />
        &nbsp;ich meistens mit den Leuten Englisch zu sprechen (versuchen).
        Ich&nbsp;
        <Input
          id="s6"
          onChange={formik.handleChange}
          className={matches.s6}
          small
        />
        &nbsp;immer ein tolles Hotel und auch ein Restaurant (finden). Oft&nbsp;
        <Input
          id="s7"
          onChange={formik.handleChange}
          className={matches.s7}
          small
        />
        &nbsp;ich Berlin (besuchen). Dort&nbsp;
        <Input
          id="s71"
          onChange={formik.handleChange}
          className={matches.s71}
          small
        />
        &nbsp;mein guter Freund (wohnen). Er&nbsp;
        <Input
          id="s8"
          onChange={formik.handleChange}
          className={matches.s8}
          small
        />
        &nbsp;bei einer IT-Firma und&nbsp;
        <Input
          id="s9"
          onChange={formik.handleChange}
          className={matches.s9}
          small
        />
        &nbsp;sehr wenig Zeit (arbeiten, haben). Er&nbsp;
        <Input
          id="s10"
          onChange={formik.handleChange}
          className={matches.s10}
          small
        />
        &nbsp;mich am Alexander Platz und wir&nbsp;
        <Input
          id="s11"
          onChange={formik.handleChange}
          className={matches.s11}
          small
        />
        &nbsp;in ein Café (treffen, gehen). Er&nbsp;
        <Input
          id="s12"
          onChange={formik.handleChange}
          className={matches.s12}
          small
        />
        &nbsp;immer am Fenster und&nbsp;
        <Input
          id="s13"
          onChange={formik.handleChange}
          className={matches.s13}
          small
        />
        &nbsp;ein Stück Torte (sitzen, essen). Ich&nbsp;
        <Input
          id="s14"
          onChange={formik.handleChange}
          className={matches.s14}
          small
        />
        &nbsp;eher schwarzen Kaffee und Kuchen (wählen). Der Ausblick&nbsp;
        <Input
          id="s15"
          onChange={formik.handleChange}
          className={matches.s15}
          small
        />
        &nbsp; (sein) toll, doch es&nbsp;
        <Input
          id="s16"
          onChange={formik.handleChange}
          className={matches.s16}
          small
        />
        &nbsp;zu viele Menschen (geben). Die Hauptstadt&nbsp;
        <Input
          id="s17"
          onChange={formik.handleChange}
          className={matches.s17}
          small
        />
        &nbsp; jährlich Millionen Touristen (besuchen). Aber ich&nbsp;
        <Input
          id="s18"
          onChange={formik.handleChange}
          className={matches.s18}
          small
        />
        &nbsp;Großstädte nicht besonders, deswegen&nbsp;
        <Input
          id="s19"
          onChange={formik.handleChange}
          className={matches.s19}
          small
        />
        &nbsp;ich nach ein paar Tagen weiter (mögen, fahren). Die Fahrt&nbsp;
        <Input
          id="s20"
          onChange={formik.handleChange}
          className={matches.s20}
          small
        />
        &nbsp;nur etwa 40 Minuten, mein Ziel&nbsp;
        <Input
          id="s21"
          onChange={formik.handleChange}
          className={matches.s21}
          small
        />
        &nbsp;Potsdam (dauern, sein). Diese schöne kleine Stadt&nbsp;
        <Input
          id="s22"
          onChange={formik.handleChange}
          className={matches.s22}
          small
        />
        &nbsp;nicht weit von Berlin und&nbsp;
        <Input
          id="s23"
          onChange={formik.handleChange}
          className={matches.s23}
          small
        />
        &nbsp;so viel zu sehen (liegen, bieten)! Ich&nbsp;
        <Input
          id="s24"
          onChange={formik.handleChange}
          className={matches.s24}
          small
        />
        &nbsp;früh und&nbsp;
        <Input
          id="s25"
          onChange={formik.handleChange}
          className={matches.s25}
          small
        />
        &nbsp;durch den Park (aufstehen, spazieren gehen). Ich&nbsp;
        <Input
          id="s26"
          onChange={formik.handleChange}
          className={matches.s26}
          small
        />
        &nbsp;danach das Schloss Sanssouci,&nbsp;
        <Input
          id="s27"
          onChange={formik.handleChange}
          className={matches.s27}
          small
        />
        &nbsp;tolles Wetter und&nbsp;
        <Input
          id="s28"
          onChange={formik.handleChange}
          className={matches.s28}
          small
        />
        &nbsp;mein Mittagessen (besichtigen, genießen, haben). Ich&nbsp;
        <Input
          id="s29"
          onChange={formik.handleChange}
          className={matches.s29}
          small
        />
        &nbsp;in Potsdam bis Ende der Woche und&nbsp;
        <Input
          id="s30"
          onChange={formik.handleChange}
          className={matches.s30}
          small
        />
        &nbsp;nach Berlin (bleiben, zurückkehren). Dort&nbsp;
        <Input
          id="s31"
          onChange={formik.handleChange}
          className={matches.t1}
          small
        />
        &nbsp;mein Zug nach Hause (warten).
      </p>
      <p>
        Nächstes Jahr&nbsp;
        <Input
          id="t1"
          onChange={formik.handleChange}
          className={matches.t1}
          small
        />
        &nbsp;ich nach München fahren, aber ich&nbsp;
        <Input
          id="t2"
          onChange={formik.handleChange}
          className={matches.t2}
          small
        />
        &nbsp;mir das noch (wollen, überlegen). Dort&nbsp;
        <Input
          id="t3"
          onChange={formik.handleChange}
          className={matches.t3}
          small
        />
        &nbsp;zu viele Touristen und die Stadt&nbsp;
        <Input
          id="t4"
          onChange={formik.handleChange}
          className={matches.t4}
          small
        />
        &nbsp;sehr teuer (sein). Andererseits&nbsp;
        <Input
          id="t5"
          onChange={formik.handleChange}
          className={matches.t5}
          small
        />
        &nbsp;mich die Sehenswürdigkeiten ... (verlocken) Die Altstadt mit ihren
        bunten Märkten, die Museen und Bildergalerien. Vielleicht besser&nbsp;
        <Input
          id="t6"
          onChange={formik.handleChange}
          className={matches.t6}
          small
        />
        &nbsp;ich am Meer und das was (sich erholen) Oh Gott! Wieso&nbsp;
        <Input
          id="t7"
          onChange={formik.handleChange}
          className={matches.t7}
          small
        />
        &nbsp;es so kompliziert (sein)? Ich&nbsp;
        <Input
          id="t8"
          onChange={formik.handleChange}
          className={matches.t8}
          small
        />
        &nbsp;noch mal darüber (nachdenken)
      </p>
      <Button type="submit">Check</Button>
    </form>
  );
};

export default Task7;
