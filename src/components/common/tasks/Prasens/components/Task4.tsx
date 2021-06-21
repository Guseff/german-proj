import React, { useState } from 'react';
import { useFormik } from 'formik';

import Input from '../../../Input/Input';
import Button from '../../../Button/Button';
import { rightAnswers4 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Task4 = (): JSX.Element => {
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
          Man&nbsp;
          <Input
            id="s1"
            onChange={formik.handleChange}
            className={matches.s1}
            small
          />
          &nbsp;viel in der Schule. (lesen)
        </li>
        <li>
          Du&nbsp;
          <Input
            id="s2"
            onChange={formik.handleChange}
            className={matches.s2}
            small
          />
          &nbsp;nur Chips! (essen)
        </li>
        <li>
          <Input
            id="s3"
            onChange={formik.handleChange}
            className={matches.s3}
            small
          />
          &nbsp;du mir? Ich schaffe das alleine nicht (helfen)
        </li>
        <li>
          <Input
            id="s4"
            onChange={formik.handleChange}
            className={matches.s4}
            small
          />
          &nbsp;du das auch? (sehen)
        </li>
        <li>
          Ich fahre heute nach Hause. –&nbsp;
          <Input
            id="s5"
            onChange={formik.handleChange}
            className={matches.s5}
            small
          />
          &nbsp;du mit dem Auto? (fahren)
        </li>
        <li>
          Alles&nbsp;
          <Input
            id="s6"
            onChange={formik.handleChange}
            className={matches.s6}
            small
          />
          &nbsp;zu schnell in dieser Welt. (laufen)
        </li>
      </ol>
      <Button type="submit">Check</Button>
    </form>
  );
};

export default Task4;
