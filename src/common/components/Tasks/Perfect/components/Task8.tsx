import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'Common/components/Input';
import { CheckButton } from 'Common/components/CheckButton';
import { rightAnswers8 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Task8 = (): JSX.Element => {
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
        Der Tag&nbsp;
        <Input
          id="s1"
          onChange={formik.handleChange}
          className={matches.s1}
          small
        />
        &nbsp;von Anfang an&nbsp;
        <Input
          id="s1a"
          onChange={formik.handleChange}
          className={matches.s1a}
          small
        />
        &nbsp;(schieflaufen). Der Wecker&nbsp;
        <Input
          id="s2"
          onChange={formik.handleChange}
          className={matches.s2}
          small
        />
        &nbsp;kaputt&nbsp;
        <Input
          id="s2a"
          onChange={formik.handleChange}
          className={matches.s2a}
          small
        />
        &nbsp;(gehen) und Nina&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;das nicht rechtzeitig&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(merken). Sie&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(verschlafen)! Schnell&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;sie ihre Lieblingsjeans und ein T-Shirt&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(anziehen). Doch sie&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;keine Socken&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(finden) und nur die Zeit&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(verlieren). Auf der Straße&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;sie&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(feststellen), dass ihr Bus schon&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(wegfahren). Hektisch&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;sie Nico&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(anrufen) und er&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;sie&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(abholen). Im Zentrum der Stadt&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;sie aber eine halbe Stunde im Stau&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(stehen). Der Unterricht&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;um halb zehn&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(anfangen), aber sie&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;erst um 10 Uhr&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(kommen). An der Uni&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;sie&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(sehen): ihr Handy&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;zu Hause&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(bleiben). Danach&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;sie sich zum Termin in dem Dekanat&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(sich verspäten) und sich mit einer Freundin&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(sich streiten). Sie&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;nicht mal Kaffee&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(trinken). Nach dem Unterricht&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;sie&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(denken), dass ein neues Café um die Ecke&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(sich öffnen), und&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(bestimmen), dorthin zu gehen. Dort&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;sie wunderbaren Kaffee&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(probieren) und ein leckeres Brötchen&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(essen). Das&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;ihren Tag&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(retten).
      </p>
      <p>
        Letztendlich&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;alles bestens&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(klappen). Sie&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;ihren Dozenten mit ihrem Zeitmanagement&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(beeindrucken), einen Tag ohne Handy&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(verbringen) und noch Spaß&nbsp;
        <Input
          id="s"
          onChange={formik.handleChange}
          className={matches.s}
          small
        />
        &nbsp;(haben). Was für einen Tag!
      </p>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task8;
