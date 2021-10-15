import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'Common/Input';
import { CheckButton } from 'src/components/components/CheckButton';
import { rightAnswers7 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Task7 = (): JSX.Element => {
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
          Ты съел суп? – Да, вчера. (essen)
          <br />
          <Input
            id="s1"
            onChange={formik.handleChange}
            className={matches.s1}
          />
        </li>
        <li>
          Я разорвала договор на мелкие кусочки. (zerreißen)
          <br />
          <Input
            id="s2"
            onChange={formik.handleChange}
            className={matches.s2}
          />
        </li>
        <li>
          Профессор зачитал свой доклад вслух. (vorlesen)
          <br />
          <Input
            id="s3"
            onChange={formik.handleChange}
            className={matches.s3}
          />
        </li>
        <li>
          Мы сидели за столом молча, в пустом доме (sitzen)
          <br />
          <Input
            id="s4"
            onChange={formik.handleChange}
            className={matches.s4}
          />
        </li>
        <li>
          Лара и Дэн улетели в Париж, даже не сказав «пока». (fliegen)
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

export default Task7;
