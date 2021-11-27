import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'Common/components/Input';
import { CheckButton } from 'Common/components/CheckButton';
import { rightAnswers8 as rightAnswers } from '../consts/answers';
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
      <ol>
        <li>
          Das Treffen mit dem Dekanen findet am Donnerstag statt.
          <br />
          <Input
            id="s1"
            onChange={formik.handleChange}
            className={matches.s1}
            small
          />
        </li>
        <li>
          Hast du auf den Gasten gewartet?
          <br />
          <Input
            id="s2"
            onChange={formik.handleChange}
            className={matches.s2}
            small
          />
        </li>
        <li>
          Wir beobachteten den roten Planet die ganze Nacht.
          <br />
          <Input
            id="s3"
            onChange={formik.handleChange}
            className={matches.s3}
            small
          />
        </li>
        <li>
          Im Herz des Landes liegt diesen Schloss.
          <br />
          <Input
            id="s4"
            onChange={formik.handleChange}
            className={matches.s4}
            small
          />
        </li>
        <li>
          Wir bleiben diese Woche bei unseren Elternn.
          <br />
          <Input
            id="s5"
            onChange={formik.handleChange}
            className={matches.s5}
            small
          />
        </li>
        <li>
          Die Rechtschreibung dieses Buchstabe finden alle Kinder schwer.
          <br />
          <Input
            id="s6"
            onChange={formik.handleChange}
            className={matches.s6}
            small
          />
        </li>
        <li>
          Er hat die Rede eines Professoren nicht ganz gehört.
          <br />
          <Input
            id="s7"
            onChange={formik.handleChange}
            className={matches.s7}
            small
          />
        </li>
        <li>
          Die Prüfung des Students ist um 9:00.
          <br />
          <Input
            id="s8"
            onChange={formik.handleChange}
            className={matches.s8}
            small
          />
        </li>
        <li>
          Mit solchem Glaube an sich kann man alles schaffen!
          <br />
          <Input
            id="s9"
            onChange={formik.handleChange}
            className={matches.s9}
            small
          />
        </li>
        <li>
          Ich konnte die Worte dieses Franzoses kaum verstehen.
          <br />
          <Input
            id="s10"
            onChange={formik.handleChange}
            className={matches.s10}
            small
          />
        </li>
      </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task;
