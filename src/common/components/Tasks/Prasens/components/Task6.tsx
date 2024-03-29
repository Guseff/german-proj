import React, { useState } from 'react';
import { useFormik } from 'formik';

import Input from '../../../Input/Input';
import CheckButton from '../../../CheckButton/CheckButton';
import { rightAnswers6 as rightAnswers } from '../consts/answers';
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
          Ты всегда ешь так много овощей? (essen)
          <br />
          <Input
            id="s1"
            onChange={formik.handleChange}
            className={matches.s1}
          />
        </li>
        <li>
          Ты разрываешь мне душу, что дальше? Развод? (zerreißen)
          <br />
          <Input
            id="s2"
            onChange={formik.handleChange}
            className={matches.s2}
          />
        </li>
        <li>
          Ты просто читаешь твой доклад с листа? Не может быть! (ablesen)
          <br />
          <Input
            id="s3"
            onChange={formik.handleChange}
            className={matches.s3}
          />
        </li>
        <li>
          Ты часто здесь сидишь? Я ни разу не видела тебе на лекциях. (sitzen)
          <br />
          <Input
            id="s4"
            onChange={formik.handleChange}
            className={matches.s4}
          />
        </li>
        <li>
          Тебя зовут Андре, это твоё настоящее имя. (heißen)
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
