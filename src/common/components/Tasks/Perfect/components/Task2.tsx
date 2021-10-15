import React, { useState } from 'react';
import { useFormik } from 'formik';

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
        <li>Der Witz, super toll, hat, geklappt.</li>
        <li>Habt, den Film, ihr, schon, gesehen, gestern.</li>
        <li>Wir, dir, geglaubt, haben, umsonst.</li>
        <li>über deine Lüge, meine Freundin, gesagt, hat, mir.</li>
        <li>Erika, selbst, das Bild, in der Schule, gemacht, hat.</li>
      </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task2;
