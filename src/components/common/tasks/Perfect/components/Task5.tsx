import React, { useState } from 'react';
import { useFormik } from 'formik';

import Input from '../../../Input/Input';
import CheckButton from '../../../CheckButton/CheckButton';
import { rightAnswers5 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Task5 = (): JSX.Element => {
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
          Wir studieren zusammen Philosophie in Berlin (vor 5 Jahren)
          <br />
          <Input
            id="s1"
            onChange={formik.handleChange}
            className={matches.s1}
          />
        </li>
        <li>
          Eine peinliche Pause entsteht jedes Mal, wenn wir uns sehen (…, wenn
          wir uns im Korridor gesehen haben)
          <br />
          <Input
            id="s2"
            onChange={formik.handleChange}
            className={matches.s2}
          />
        </li>
        <li>
          Das Bild beeindruckt mich sehr (damals im Museum)
          <br />
          <Input
            id="s3"
            onChange={formik.handleChange}
            className={matches.s3}
          />
        </li>
        <li>
          Sie kommen um 20 Uhr an. (schon längst)
          <br />
          <Input
            id="s4"
            onChange={formik.handleChange}
            className={matches.s4}
          />
        </li>
        <li>
          Die Vorlesung findet im Raum 229 statt (am Donnerstag)
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

export default Task5;
