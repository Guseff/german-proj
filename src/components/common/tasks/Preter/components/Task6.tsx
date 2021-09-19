import React, { useState } from 'react';
import { useFormik } from 'formik';

import Input from '../../../Input/Input';
import CheckButton from '../../../CheckButton/CheckButton';
import { rightAnswers2 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Task6 = (): JSX.Element => {
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
          Ты пил и пил, без конца (trinken)
          <br />
          <Input
            id="s1"
            onChange={formik.handleChange}
            className={matches.s1}
          />
        </li>
        <li>
          Вчера у нас было всё, сегодня – ничего (haben)
          <br />
          <Input
            id="s2"
            onChange={formik.handleChange}
            className={matches.s2}
          />
        </li>
        <li>
          Я был тогда учителем (sein)
          <br />
          <Input
            id="s3"
            onChange={formik.handleChange}
            className={matches.s3}
          />
        </li>
        <li>
          Дети, вы должны были прийти раньше (müssen)
          <br />
          <Input
            id="s4"
            onChange={formik.handleChange}
            className={matches.s4}
          />
        </li>
        <li>
          Они долго шли через лес (gehen)
          <br />
          <Input
            id="s5"
            onChange={formik.handleChange}
            className={matches.s5}
          />
        </li>
      </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task6;
