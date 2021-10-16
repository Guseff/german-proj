import React, { useState } from 'react';
import { useFormik } from 'formik';

import Select from 'Common/components/Select';
import { CheckButton } from 'Common/components/CheckButton';
import { rightAnswers4 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const optionsList = {
  s1: ['Hauses', 'Haus'],
  s2: ['Ergebnisses', 'Ergebnis'],
  s3: ['Cafésn', 'Cafés'],
  s4: ['Kosmos', 'Kosmosses'],
  s5: ['Suffixs', 'Suffixes'],
};

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
          Das Dach des historischen&nbsp;
          <Select
            id="s1"
            options={optionsList.s1}
            onChange={formik.handleChange}
            className={matches.s1}
          />
          &nbsp;war schon gefährlich.
        </li>
        <li>
          Seine Vorstellung des&nbsp;
          <Select
            id="s2"
            options={optionsList.s2}
            onChange={formik.handleChange}
            className={matches.s2}
          />
          &nbsp;war nicht vollständig.
        </li>
        <li>
          Das ist ein Stadtviertel mit teuren&nbsp;
          <Select
            id="s3"
            options={optionsList.s3}
            onChange={formik.handleChange}
            className={matches.s3}
          />
          &nbsp;.
        </li>
        <li>
          Die Erforschung des&nbsp;
          <Select
            id="s4"
            options={optionsList.s4}
            onChange={formik.handleChange}
            className={matches.s4}
          />
          &nbsp;ist vielversprechend.
        </li>
        <li>
          Die Rechtschreibung dieses&nbsp;
          <Select
            id="s5"
            options={optionsList.s5}
            onChange={formik.handleChange}
            className={matches.s5}
          />
          &nbsp;fällt den Schülern schwer.
        </li>
      </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task4;
