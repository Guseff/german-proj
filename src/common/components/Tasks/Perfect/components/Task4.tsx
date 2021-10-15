import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'Common/components/Input';
import { CheckButton } from 'Common/components/CheckButton';
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
          Ich habe wieder alles&nbsp;
          <Input 
            id="s1"
            onChange={formik.handleChange}
            className={matches.s1}
            small
          />
          &nbsp;. Nichts zu danken! (retten)
        </li>
        <li>
          Es hat&nbsp;
          <Input 
            id="s2"
            onChange={formik.handleChange}
            className={matches.s2}
            small
          />
          &nbsp;, danach geschneit. Was für Winter! (regnen)
        </li>
        <li>
          Wir haben schon mit ihr&nbsp;
          <Input 
            id="s3"
            onChange={formik.handleChange}
            className={matches.s3}
            small
          />
          &nbsp;. (reden)
        </li>
        <li>
          Ich habe das Buch&nbsp;
          <Input 
            id="s4"
            onChange={formik.handleChange}
            className={matches.s4}
            small
          />
          &nbsp;, aber es war sinnlos. (öffnen)
        </li>
        <li>
          Du hast zu Laut&nbsp;
          <Input 
            id="s5"
            onChange={formik.handleChange}
            className={matches.s5}
            small
          />
          &nbsp;! Sie haben uns erwischt! (atmen)
        </li>
      </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task4;
