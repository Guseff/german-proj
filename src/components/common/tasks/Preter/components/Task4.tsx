import React, { useState } from 'react';
import { useFormik } from 'formik';

import Input from '../../../Input/Input';
import Button from '../../../Button/Button';
import { rightAnswers4 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Task4 = (): JSX.Element => {
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
          Du&nbsp;
          <Input
            id="s1"
            onChange={formik.handleChange}
            className={matches.s1}
            small
          />
          &nbsp;gestern fast nichts, war alles okay? (essen)
        </li>
        <li>
          <Input
            id="s2"
            onChange={formik.handleChange}
            className={matches.s2}
            small
          />
          &nbsp;ihr den Brief also langweilig? (finden)
        </li>
        <li>
          Früher&nbsp;
          <Input
            id="s3"
            onChange={formik.handleChange}
            className={matches.s3}
            small
          />
          &nbsp;wir uns die neuen Filme immer zusammen&nbsp;
          <Input
            id="s3a"
            onChange={formik.handleChange}
            className={matches.s3a}
            small
          />
          &nbsp;. (sich ansehen)
        </li>
        <li>
          Du&nbsp;
          <Input
            id="s4"
            onChange={formik.handleChange}
            className={matches.s4}
            small
          />
          &nbsp;in der Halle so stumm und traurig. Was ist los? (sitzen)
        </li>
        <li>
          Ihr&nbsp;
          <Input
            id="s5"
            onChange={formik.handleChange}
            className={matches.s5}
            small
          />
          &nbsp;als das schönste Paar in der Schule, warum seid ihr nicht mehr
          zusammen? (gelten)
        </li>
      </ol>
      <Button type="submit">Check</Button>
    </form>
  );
};

export default Task4;
