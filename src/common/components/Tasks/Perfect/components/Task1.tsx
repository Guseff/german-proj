import React, { useState } from 'react';
import { useFormik } from 'formik';

import { CheckButton } from 'src/common/components/CheckButton';
import { rightAnswers1 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Test1 = (): JSX.Element => {
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
        gehen, machen, haben, werden, schwimmen, lesen, sein, sich kämen,
        aufwachen, können
      </p>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Test1;
