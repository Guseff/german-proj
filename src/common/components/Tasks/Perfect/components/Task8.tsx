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
          id="s3"
          onChange={formik.handleChange}
          className={matches.s3}
          small
        />
        &nbsp;das nicht rechtzeitig&nbsp;
        <Input
          id="s3a"
          onChange={formik.handleChange}
          className={matches.s3a}
          small
        />
        &nbsp;(merken). Sie&nbsp;
        <Input
          id="s4"
          onChange={formik.handleChange}
          className={matches.s4}
          small
        />
        &nbsp;(verschlafen)! Schnell&nbsp;
        <Input
          id="s5"
          onChange={formik.handleChange}
          className={matches.s5}
          small
        />
        &nbsp;sie ihre Lieblingsjeans und ein T-Shirt&nbsp;
        <Input
          id="s5a"
          onChange={formik.handleChange}
          className={matches.s5a}
          small
        />
        &nbsp;(anziehen). Doch sie&nbsp;
        <Input
          id="s6"
          onChange={formik.handleChange}
          className={matches.s6}
          small
        />
        &nbsp;keine Socken&nbsp;
        <Input
          id="s6a"
          onChange={formik.handleChange}
          className={matches.s6a}
          small
        />
        &nbsp;(finden) und nur die Zeit&nbsp;
        <Input
          id="s6az"
          onChange={formik.handleChange}
          className={matches.s6az}
          small
        />
        &nbsp;(verlieren). Auf der Straße&nbsp;
        <Input
          id="s7"
          onChange={formik.handleChange}
          className={matches.s7}
          small
        />
        &nbsp;sie&nbsp;
        <Input
          id="s7a"
          onChange={formik.handleChange}
          className={matches.s7a}
          small
        />
        &nbsp;(feststellen), dass ihr Bus schon&nbsp;
        <Input
          id="s8"
          onChange={formik.handleChange}
          className={matches.s8}
          small
        />
        &nbsp;(wegfahren). Hektisch&nbsp;
        <Input
          id="s9"
          onChange={formik.handleChange}
          className={matches.s9}
          small
        />
        &nbsp;sie Nico&nbsp;
        <Input
          id="s9a"
          onChange={formik.handleChange}
          className={matches.s9a}
          small
        />
        &nbsp;(anrufen) und er&nbsp;
        <Input
          id="s10"
          onChange={formik.handleChange}
          className={matches.s10}
          small
        />
        &nbsp;sie&nbsp;
        <Input
          id="s10a"
          onChange={formik.handleChange}
          className={matches.s10a}
          small
        />
        &nbsp;(abholen). Im Zentrum der Stadt&nbsp;
        <Input
          id="s11"
          onChange={formik.handleChange}
          className={matches.s11}
          small
        />
        &nbsp;sie aber eine halbe Stunde im Stau&nbsp;
        <Input
          id="s11a"
          onChange={formik.handleChange}
          className={matches.s11a}
          small
        />
        &nbsp;(stehen). Der Unterricht&nbsp;
        <Input
          id="s12"
          onChange={formik.handleChange}
          className={matches.s12}
          small
        />
        &nbsp;um halb zehn&nbsp;
        <Input
          id="s12a"
          onChange={formik.handleChange}
          className={matches.s12a}
          small
        />
        &nbsp;(anfangen), aber sie&nbsp;
        <Input
          id="s13"
          onChange={formik.handleChange}
          className={matches.s13}
          small
        />
        &nbsp;erst um 10 Uhr&nbsp;
        <Input
          id="s13a"
          onChange={formik.handleChange}
          className={matches.s13a}
          small
        />
        &nbsp;(kommen). An der Uni&nbsp;
        <Input
          id="s14"
          onChange={formik.handleChange}
          className={matches.s14}
          small
        />
        &nbsp;sie&nbsp;
        <Input
          id="s14a"
          onChange={formik.handleChange}
          className={matches.s14a}
          small
        />
        &nbsp;(sehen): ihr Handy&nbsp;
        <Input
          id="s15"
          onChange={formik.handleChange}
          className={matches.s15}
          small
        />
        &nbsp;zu Hause&nbsp;
        <Input
          id="s15a"
          onChange={formik.handleChange}
          className={matches.s15a}
          small
        />
        &nbsp;(bleiben). Danach&nbsp;
        <Input
          id="s16"
          onChange={formik.handleChange}
          className={matches.s16}
          small
        />
        &nbsp;sie sich zum Termin in dem Dekanat&nbsp;
        <Input
          id="s16a"
          onChange={formik.handleChange}
          className={matches.s16a}
          small
        />
        &nbsp;(sich verspäten) und sich mit einer Freundin&nbsp;
        <Input
          id="s16az"
          onChange={formik.handleChange}
          className={matches.s16az}
          small
        />
        &nbsp;(sich streiten). Sie&nbsp;
        <Input
          id="s17"
          onChange={formik.handleChange}
          className={matches.s17}
          small
        />
        &nbsp;nicht mal Kaffee&nbsp;
        <Input
          id="s17a"
          onChange={formik.handleChange}
          className={matches.s17a}
          small
        />
        &nbsp;(trinken). Nach dem Unterricht&nbsp;
        <Input
          id="s18"
          onChange={formik.handleChange}
          className={matches.s18}
          small
        />
        &nbsp;sie&nbsp;
        <Input
          id="s18a"
          onChange={formik.handleChange}
          className={matches.s18a}
          small
        />
        &nbsp;(denken), dass sich ein neues Café um die Ecke&nbsp;
        <Input
          id="s19"
          onChange={formik.handleChange}
          className={matches.s19}
          small
        />
        &nbsp;(sich öffnen), und&nbsp;
        <Input
          id="s20"
          onChange={formik.handleChange}
          className={matches.s20}
          small
        />
        &nbsp;(bestimmen), dorthin zu gehen. Dort&nbsp;
        <Input
          id="s21"
          onChange={formik.handleChange}
          className={matches.s21}
          small
        />
        &nbsp;sie wunderbaren Kaffee&nbsp;
        <Input
          id="s21a"
          onChange={formik.handleChange}
          className={matches.s21a}
          small
        />
        &nbsp;(probieren) und ein leckeres Brötchen&nbsp;
        <Input
          id="s21az"
          onChange={formik.handleChange}
          className={matches.s21az}
          small
        />
        &nbsp;(essen). Das&nbsp;
        <Input
          id="s22"
          onChange={formik.handleChange}
          className={matches.s22}
          small
        />
        &nbsp;ihren Tag&nbsp;
        <Input
          id="s22a"
          onChange={formik.handleChange}
          className={matches.s22a}
          small
        />
        &nbsp;(retten).
      </p>
      <p>
        Letztendlich&nbsp;
        <Input
          id="s23"
          onChange={formik.handleChange}
          className={matches.s23}
          small
        />
        &nbsp;alles bestens&nbsp;
        <Input
          id="s23a"
          onChange={formik.handleChange}
          className={matches.s23a}
          small
        />
        &nbsp;(klappen). Sie&nbsp;
        <Input
          id="s24"
          onChange={formik.handleChange}
          className={matches.s24}
          small
        />
        &nbsp;ihren Dozenten mit ihrem Zeitmanagement&nbsp;
        <Input
          id="s24a"
          onChange={formik.handleChange}
          className={matches.s24a}
          small
        />
        &nbsp;(beeindrucken), einen Tag ohne Handy&nbsp;
        <Input
          id="s25"
          onChange={formik.handleChange}
          className={matches.s25}
          small
        />
        &nbsp;(verbringen) und noch Spaß&nbsp;
        <Input
          id="s26"
          onChange={formik.handleChange}
          className={matches.s26}
          small
        />
        &nbsp;(haben). Was für einen Tag!
      </p>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task8;
