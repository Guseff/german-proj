import React, { useState } from 'react';
import { useFormik } from 'formik';

import { rightAnswers3 as rightAnswers } from '../consts/answers';
import Select from '../../../Select/Select';
import Button from '../../../Button/Button';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const optionsList = {
  s1: ['redetet', 'redete'],
  s2: ['ordnte', 'ordnete'],
  s3: ['atmeten', 'atmten'],
  s4: ['wusste', 'wisste'],
  s5: ['zeichnetest', 'zeichnetst'],
  s6: ['brachtest', 'bringtest'],
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
          Er&nbsp;
          <Select
            id="s1"
            onChange={formik.handleChange}
            options={optionsList.s1}
            className={matches.s1}
          />
          &nbsp;stundenlang über seine Erfahrung und konnte nicht aufhören.
        </li>
        <li>
          Damals&nbsp;
          <Select
            id="s2"
            onChange={formik.handleChange}
            options={optionsList.s2}
            className={matches.s2}
          />
          &nbsp;ich die Bücher immer, jetzt habe ich nicht genug Zeit.
        </li>
        <li>
          Die Menschen&nbsp;
          <Select
            id="s3"
            onChange={formik.handleChange}
            options={optionsList.s3}
            className={matches.s3}
          />
          &nbsp;ruhig und sahen zu.
        </li>
        <li>
          Ich&nbsp;
          <Select
            id="s4"
            onChange={formik.handleChange}
            options={optionsList.s4}
            className={matches.s4}
          />
          &nbsp;das! Wie kannst du nur so offenbar lügen?
        </li>
        <li>
          Früher&nbsp;
          <Select
            id="s5"
            onChange={formik.handleChange}
            options={optionsList.s5}
            className={matches.s5}
          />
          &nbsp;du gern, was ist passiert?
        </li>
        <li>
          Du&nbsp;
          <Select
            id="s6"
            onChange={formik.handleChange}
            options={optionsList.s6}
            className={matches.s6}
          />
          &nbsp;mir diese Nachricht in der Nacht, warum?
        </li>
      </ol>
      <Button type="submit">Check</Button>
    </form>
  );
};

export default Task3;
