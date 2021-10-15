import React, { useState } from 'react';
import { useFormik } from 'formik';

import Input from '../../../Input/Input';
import CheckButton from '../../../CheckButton/CheckButton';
import { preterTests4 as tests } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkTasksHandle, getInitialValues } from '../../utils';

const initialValues = getInitialValues(tests);

const Task4 = (): JSX.Element => {
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
            <span>{test[1].question}</span>
            &nbsp;
            <Input id={test[0]} onChange={formik.handleChange} className={matches[test[0]]} small />
            &nbsp;
            {test[1].extQuestion !== undefined
              ? <span>{test[1].extQuestion}&nbsp;</span>
              : null}
            {test[1].extAnswer !== undefined
              ? <Input id={`${test[0]}a`} onChange={formik.handleChange} className={matches[`${test[0]}a`]} small />
              : null}
            &nbsp;
            <span>{test[1].extension}</span>
          </li>
        ))}
      </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task4;
