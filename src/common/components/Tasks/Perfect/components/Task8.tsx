import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'Common/components/Input';
import { CheckButton } from 'Common/components/CheckButton';
import { rightAnswers8 as rightAnswers } from '../consts/answers';
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
        Der Tag … von Anfang an … (schieflaufen). Der Wecker … kaputt … und Nina
        … das nicht rechtzeitig … (merken). Sie … (verschlafen)! Schnell … sie
        ihre Lieblingsjeans und ein T-Shirt … (anziehen). Doch sie … keine
        Socken … (finden) und nur die Zeit … (verlieren). Auf der Straße … sie …
        (feststellen), dass ihr Bus schon … (wegfahren). Hektisch … sie Nico …
        und er … sie … (anrufen, abholen). Im Zentrum der Stadt … sie aber eine
        halbe Stunde im Stau … (stehen). Der Unterricht … um halb zehn …
        (anfangen), aber sie … erst um 10 Uhr … (kommen). An der Uni … sie …
        (sehen): ihr Handy … zu Hause … (bleiben). Danach … sie sich zum Termin
        in dem Dekanat … (sich verspäten) und sich mit einer Freundin (sich
        streiten). Sie … nicht mal Kaffee … (trinken). Nach dem Unterricht … sie
        … (denken), dass ein neues Café um die Ecke … (sich öffnen) und …
        (bestimmen), dorthin zu gehen. Dort … sie wunderbaren Kaffee (probieren)
        und ein leckeres Brötchen (essen). Das … ihren Tag … (retten).
      </p>
      <p>
        Letztendlich … alles bestens (klappen). Sie … ihren Dozenten mit ihrem
        Zeitmanagement (beeindrucken), einen Tag ohne Handy (verbringen) und
        noch Spaß (haben). Was für einen Tag!
      </p>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task7;
