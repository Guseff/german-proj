import React, { useState } from 'react';
import { useFormik } from 'formik';

import Input from '../../../Input/Input';
import Button from '../../../Button/Button';
import { rightAnswers2 as rightAnswers } from '../consts/prasens';
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
      <p>
        Wenn dich jemand rettst, sagt man „Danke“!&nbsp;
        <Input
          id="s1"
          onChange={formik.handleChange}
          className={matches.s1}
          small
        />
      </p>
      <p>
        In Europa regnt es meistens im Frühling.&nbsp;
        <Input
          id="s2"
          onChange={formik.handleChange}
          className={matches.s2}
          small
        />
      </p>
      <p>
        Du redst eigentlich viel zu oft darüber.&nbsp;
        <Input
          id="s3"
          onChange={formik.handleChange}
          className={matches.s3}
          small
        />
      </p>
      <p>
        Öffnst du deinen Laden später heute?&nbsp;
        <Input
          id="s4"
          onChange={formik.handleChange}
          className={matches.s4}
          small
        />
      </p>
      <p>
        Das Kind atmt ruhig.&nbsp;
        <Input
          id="s5"
          onChange={formik.handleChange}
          className={matches.s5}
          small
        />
      </p>
      <Button type="submit">Check</Button>
    </form>
  );
};

export default Task5;
