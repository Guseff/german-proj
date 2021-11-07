import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'Common/components/Input';
import { CheckButton } from 'Common/components/CheckButton';
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
      <p>
        Die Wörter hast du gut gediktiert&nbsp;
        <Input
          id="s1"
          onChange={formik.handleChange}
          className={matches.s1}
          small
        />
        &nbsp;, aber wer hat sie aufschrieben&nbsp;
        <Input
          id="s2"
          onChange={formik.handleChange}
          className={matches.s2}
          small
        />
        &nbsp;? Deine Schüler haben gar nicht zuhört&nbsp;
        <Input
          id="s3"
          onChange={formik.handleChange}
          className={matches.s3}
          small
        />
        &nbsp;. Viele sind von ferne hinfahren&nbsp;
        <Input
          id="s4"
          onChange={formik.handleChange}
          className={matches.s4}
          small
        />
        &nbsp;. Das lohnt sich aber nicht. Ich habe nicht dafür 5 Jahre gestudiert&nbsp;
        <Input
          id="s5"
          onChange={formik.handleChange}
          className={matches.s5}
          small
        />
        &nbsp;! Okay, reden wir über was anderes… Hat dir Uwe nicht geerzählt&nbsp;
        <Input
          id="s6"
          onChange={formik.handleChange}
          className={matches.s6}
          small
        />
        &nbsp;? Er hat begeschlossen&nbsp;
        <Input
          id="s7"
          onChange={formik.handleChange}
          className={matches.s7}
          small
        />
        &nbsp;, nach Berlin zu ziehen. Seltsam!
      </p>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task6;
