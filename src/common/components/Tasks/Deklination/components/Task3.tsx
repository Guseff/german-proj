import React, { useState } from 'react';
import { useFormik } from 'formik';

import { rightAnswers3 as rightAnswers } from '../consts/answers';
import Select from 'Common/components/Select';
import { CheckButton } from 'Common/components/CheckButton';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const optionsList = {
  s1: ['Hausn', 'Haus'],
  s2: ['Optimismus', 'Optimismusses'],
  s3: ['Besprechung', 'Besprechungs'],
  s4: ['Café', 'Cafés'],
  s5: ['Kosmos', 'Kosmosses'],
};

const Task3 = (): JSX.Element => {
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
          In dem alten&nbsp;
          <Select
            id="s1"
            options={optionsList.s1}
            onChange={formik.handleChange}
            className={matches.s1}
          />
          &nbsp;gibt es keine Fenster.
        </li>
        <li>
          Die Entscheidung war nur die Frage unseres&nbsp;
          <Select
            id="s2"
            options={optionsList.s2}
            onChange={formik.handleChange}
            className={matches.s2}
          />
          &nbsp;keine Hysterie mitgebracht.
        </li>
        <li>
          Das Ergebnis der&nbsp;
          <Select
            id="s3"
            options={optionsList.s3}
            onChange={formik.handleChange}
            className={matches.s3}
          />
          &nbsp;wurde spät bekannt gegeben.
        </li>
        <li>
          Die Einrichtung dieses&nbsp;
          <Select
            id="s4"
            options={optionsList.s4}
            onChange={formik.handleChange}
            className={matches.s4}
          />
          &nbsp;gefällt mir nicht.
        </li>
        <li>
          Im&nbsp;
          <Select
            id="s5"
            options={optionsList.s5}
            onChange={formik.handleChange}
            className={matches.s5}
          />
          &nbsp;gibt es Milliarde von Sternen.
        </li>
      </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task3;
