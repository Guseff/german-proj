import React, { useState } from 'react';
import { useFormik } from 'formik';

import { rightAnswers2 as rightAnswers } from '../consts/answers';
import Select from '../../../Select/Select';
import CheckButton from '../../../CheckButton/CheckButton';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const optionsList = {
  s1: ['fragt', 'frage', 'fragen', 'fragst'],
  s2: ['wiederholen', 'wiederholt', 'wiederhole', 'wiederholst'],
  s3: ['glaube', 'glauben', 'glaubst', 'glaubt'],
  s4: ['kaufe du ein', 'kaufst du ein', 'kaufest du ein', 'kauft du ein'],
  s5: ['leben', 'lebe', 'lebt', 'lebst'],
};

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
          Seinen Lehrer&nbsp;
          <Select
            id="s1"
            onChange={formik.handleChange}
            options={optionsList.s1}
            className={matches.s1}
          />
          &nbsp;er nie, er macht alles allein.
        </li>
        <li>
          Ihr&nbsp;
          <Select
            id="s2"
            onChange={formik.handleChange}
            options={optionsList.s2}
            className={matches.s2}
          />
          &nbsp;das immer, aber ich kann das nie verstehen. Was bedeutet dieses
          Wort?
        </li>
        <li>
          Ich&nbsp;
          <Select
            id="s3"
            onChange={formik.handleChange}
            options={optionsList.s3}
            className={matches.s3}
          />
          &nbsp;ihm, sogar wenn er lügt.
        </li>
        <li>
          Wann&nbsp;
          <Select
            id="s4"
            onChange={formik.handleChange}
            options={optionsList.s4}
            className={matches.s4}
          />
          &nbsp;? – Nach der Uni
        </li>
        <li>
          Mein Freund&nbsp;
          <Select
            id="s5"
            onChange={formik.handleChange}
            options={optionsList.s5}
            className={matches.s5}
          />
          &nbsp;in Argentina
        </li>
      </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task2;
