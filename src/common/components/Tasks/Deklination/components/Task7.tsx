import React, { useState } from 'react';
import { useFormik } from 'formik';

import { CheckButton } from 'Common/components/CheckButton';
import { rightAnswers2 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Task = (): JSX.Element => {
  const [matches, setMatches] = useState<TTestResult>(initialValues);

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      setMatches(checkInputAnswerHandle(values, rightAnswers));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task;
