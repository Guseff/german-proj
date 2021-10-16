import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'Common/components/Input';
import { CheckButton } from 'Common/components/CheckButton';
import { rightAnswers5 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Task = (): JSX.Element => {
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
          Wessen Auto ist das? (dein Vater)
          <br />
          <Input
            id="s1"
            onChange={formik.handleChange}
            className={matches.s1}
            small
          />
        </li>
        <li>
          Wessen Lehrbuch ist das? (der Student)
          <br />
          <Input
            id="s2"
            onChange={formik.handleChange}
            className={matches.s2}
            small
          />
        </li>
        <li>
          Wessen Garage ist das? (die Nachbar)
          <br />
          <Input
            id="s3"
            onChange={formik.handleChange}
            className={matches.s3}
            small
          />
        </li>
        <li>
          Wessen Kleid ist das? (meine Schwester)
          <br />
          <Input
            id="s4"
            onChange={formik.handleChange}
            className={matches.s4}
            small
          />
        </li>
        <li>
          Wessen Schloss ist das? (der König)
          <br />
          <Input
            id="s5"
            onChange={formik.handleChange}
            className={matches.s5}
            small
          />
        </li>
      </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task;
