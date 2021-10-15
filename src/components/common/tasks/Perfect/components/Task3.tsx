import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'Common/Input';
import { CheckButton } from 'Common/CheckButton';
import { test3 as tests } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkTasksHandle, getInitialValues } from '../../utils';

const initialValues = getInitialValues(tests);

const Task3 = (): JSX.Element => {
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
      {Object.entries(tests).map((test) => (
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

export default Task3;
