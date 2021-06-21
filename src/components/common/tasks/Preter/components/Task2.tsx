import React, { useState } from 'react';
import { useFormik } from 'formik';

import { rightAnswers2 as rightAnswers } from '../consts/answers';
import Input from '../../../Input/Input';
import Button from '../../../Button/Button';
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
          Er&nbsp;
          <Input
            id="s1"
            onChange={formik.handleChange}
            className={matches.s1}
            small
          />
          &nbsp;die Stadt, wie Batman. (retten)
        </li>
        <li>
          Er&nbsp;
          <Input
            id="s2"
            onChange={formik.handleChange}
            className={matches.s2}
            small
          />
          &nbsp;gestern den ganzen Tag. (regnen)
        </li>
        <li>
          Monika und Karl&nbsp;
          <Input
            id="s3"
            onChange={formik.handleChange}
            className={matches.s3}
            small
          />
          &nbsp;von ihm nur mit mir. (reden)
        </li>
        <li>
          Lila&nbsp;
          <Input
            id="s4"
            onChange={formik.handleChange}
            className={matches.s4}
            small
          />
          &nbsp;das Fenster. (öffnen)
        </li>
        <li>
          Stefan&nbsp;
          <Input
            id="s5"
            onChange={formik.handleChange}
            className={matches.s5}
            small
          />
          &nbsp;erleichtert&nbsp;
          <Input
            id="s5a"
            onChange={formik.handleChange}
            className={matches.s5a}
            small
          />
          &nbsp;. (ausatmen)
        </li>
      </ol>
      <Button type="submit">Check</Button>
    </form>
  );
};

export default Task2;
