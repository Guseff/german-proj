import React, { useState } from 'react';
import { useFormik } from 'formik';

import { rightAnswers2 as rightAnswers } from '../consts/prasens';
import Select from '../../../Select/Select';
import Button from '../../../Button/Button';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const optionsList = {
  s1: ['redest', 'reds'],
  s2: ['heißt', 'heißst'],
  s3: ['sammele', 'sammle'],
  s4: ['zeichnet', 'zeichnt'],
  s5: ['tanzst', 'tanzt'],
  s6: ['angle', 'angele'],
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
      <p>
        Warum&nbsp;
        <Select
          id="s1"
          onChange={formik.handleChange}
          options={optionsList.s1}
          className={matches.s1}
        />
        &nbsp;du so viel?
      </p>
      <p>
        Wie&nbsp;
        <Select
          id="s2"
          onChange={formik.handleChange}
          options={optionsList.s2}
          className={matches.s2}
        />
        &nbsp;du noch mal? Erika?
      </p>
      <p>
        Ich&nbsp;
        <Select
          id="s3"
          onChange={formik.handleChange}
          options={optionsList.s3}
          className={matches.s3}
        />
        &nbsp;Postkarten
      </p>
      <p>
        Er&nbsp;
        <Select
          id="s4"
          onChange={formik.handleChange}
          options={optionsList.s4}
          className={matches.s4}
        />
        &nbsp;gern Comics
      </p>
      <p>
        Wenn du so im Club&nbsp;
        <Select
          id="s5"
          onChange={formik.handleChange}
          options={optionsList.s5}
          className={matches.s5}
        />
        &nbsp;, ist es komisch
      </p>
      <p>
        Ich&nbsp;
        <Select
          id="s6"
          onChange={formik.handleChange}
          options={optionsList.s6}
          className={matches.s6}
        />
        &nbsp;nicht so gern, aber mein Bruder schon.
      </p>
      <Button type="submit">Check</Button>
    </form>
  );
};

export default Task3;
