import React, { useState } from 'react';
import { useFormik } from 'formik';

import Select from 'Common/components/Select';
import { CheckButton } from 'Common/components/CheckButton';
import { rightAnswers9 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const optionsList = {
  s1: ['Berlins', 'des Berlins', 'von Berlins'],
  s2: ['der Elbe', 'des Elbes', 'von Elben'],
  s3: ['Rhein', 'die Rhein', 'den Rhein'],
  s4: ['Auto des Karls', 'Karls Auto', "Karl's Auto"],
  s5: ['Professors Kühns', 'Professors Kühn', 'Professor Kühns'],
  s6: [
    'Friedrich des Ersten',
    'Friedrichs des Ersten',
    'Friedrichs des Erstes',
  ],
  s7: ['Afrikas', 'vom Afrika', 'des Afrikas'],
  s8: ['Herr Gasanovs', 'Herrn Gasanovs', 'Herrn Gasanov'],
};

const Task9 = (): JSX.Element => {
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
          die Sehenswürdigkeiten&nbsp;
          <Select
            id="s1"
            options={optionsList.s1}
            onChange={formik.handleChange}
            className={matches.s1}
          />
        </li>
        <li>
          die Strömung&nbsp;
          <Select
            id="s2"
            options={optionsList.s2}
            onChange={formik.handleChange}
            className={matches.s2}
          />
        </li>
        <li>
          Der Zug fährt über&nbsp;
          <Select
            id="s3"
            options={optionsList.s3}
            onChange={formik.handleChange}
            className={matches.s3}
          />
        </li>
        <li>
          Das ist&nbsp;
          <Select
            id="s4"
            options={optionsList.s4}
            onChange={formik.handleChange}
            className={matches.s4}
          />
        </li>
        <li>
          Ich schreibe&nbsp;
          <Select
            id="s5"
            options={optionsList.s5}
            onChange={formik.handleChange}
            className={matches.s5}
          />
          &nbsp;Ratschlag auf.
        </li>
        <li>
          Das ist der Erlass&nbsp;
          <Select
            id="s6"
            options={optionsList.s6}
            onChange={formik.handleChange}
            className={matches.s6}
          />
        </li>
        <li>
          Die Landschaften&nbsp;
          <Select
            id="s7"
            options={optionsList.s7}
            onChange={formik.handleChange}
            className={matches.s7}
          />
          &nbsp;sind atemberaubend.
        </li>
        <li>
          Ich will&nbsp;
          <Select
            id="s8"
            options={optionsList.s8}
            onChange={formik.handleChange}
            className={matches.s8}
          />
          &nbsp;Zusage bekommen.
        </li>
      </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task9;
