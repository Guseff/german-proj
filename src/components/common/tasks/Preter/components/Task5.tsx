import React, { useState } from 'react';
import { Formik, useFormik } from 'formik';

import Input from '../../../Input/Input';
import CheckButton from '../../../CheckButton/CheckButton';
import { preterTests5 as tests } from '../consts/answers';
import { checkTasksHandle, getInitialValues } from '../../utils';
import { TTestResult } from '../../types';

const initialValues = getInitialValues(tests);

const Task5 = (): JSX.Element => {
  const [matches, setMatches] = useState<TTestResult>(initialValues);

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      setMatches(checkTasksHandle(tests, values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <ol>
      {Object.entries(tests).map((test, i) => (
        <li key={test[0]}>
          <span>{test[1].question}</span>&nbsp;
          <Input id={test[0]} onChange={formik.handleChange} className={matches[test[0]]} small />
          <br />
        </li>
      ))}
      </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task5;
