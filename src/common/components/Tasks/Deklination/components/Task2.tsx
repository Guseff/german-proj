import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'Common/components/Input';
import { CheckButton } from 'Common/components/CheckButton';
import { rightAnswers2 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Task2 = (): JSX.Element => {
  const [matches, setMatches] = useState<TTestResult>(initialValues);

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      setMatches(checkInputAnswerHandle(values, rightAnswers));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <ol>
        <li>
          Das kleine Mädchen malt&nbsp;
          <Input
            id="s1"
            onChange={formik.handleChange}
            className={matches.s1}
            small
          />
          &nbsp;(eine Postkarte) für Weihnachtsmann.
        </li>
        <li>
          Wir gratulieren&nbsp;
          <Input
            id="s2"
            onChange={formik.handleChange}
            className={matches.s2}
            small
          />
          &nbsp;(der Chef) zu seinem Geburtstag.
        </li>
        <li>
          Dank&nbsp;
          <Input
            id="s3"
            onChange={formik.handleChange}
            className={matches.s3}
            small
          />
          &nbsp;(die Eintrittskarte) darf ich jede Ausstellung besuchen.
        </li>
        <li>
          Die Frau&nbsp;
          <Input
            id="s4"
            onChange={formik.handleChange}
            className={matches.s4}
            small
          />
          &nbsp;(mein Bruder) arbeitet in diesem Büro.
        </li>
        <li>
          Er gibt&nbsp;
          <Input
            id="s5"
            onChange={formik.handleChange}
            className={matches.s5}
            small
          />
          &nbsp;(die Gäste) Zeit, einander kennenzulernen.
        </li>
      </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task2;
