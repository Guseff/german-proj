import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'Common/components/Input';
import { CheckButton } from 'Common/components/CheckButton';
import { rightAnswers2 as rightAnswers } from '../consts/answers';
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
        Die Wörter hast du gut gediktiert, aber wer hat sie aufschrieben? Deine
        Schüler haben gar nicht zuhört. Viele sind von ferne hinfahren. Das lohnt
        sich aber nicht. Ich habe nicht dafür 5 Jahre gestudiert! Okay, reden wir
        über was anderes… Hat dir Uwe nicht geerzählt? Er hat begeschlossen, nach
        Berlin zu ziehen. Seltsam!
      </p>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task6;
