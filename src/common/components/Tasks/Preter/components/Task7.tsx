import React, { useState } from 'react';
import { useFormik } from 'formik';

import Input from '../../../Input/Input';
import CheckButton from '../../../CheckButton/CheckButton';
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
      <p>
        Der Monarch, … ,&nbsp;
        <Input
          id="s1"
          onChange={formik.handleChange}
          className={matches.s1}
          small
        />
        &nbsp;Friedrich August (heißen). Und er&nbsp;
        <Input
          id="s2"
          onChange={formik.handleChange}
          className={matches.s2}
          small
        />
        &nbsp;der letzte sächsische König (sein). Doch das&nbsp;
        <Input
          id="s3"
          onChange={formik.handleChange}
          className={matches.s3}
          small
        />
        &nbsp;er damals noch nicht (wissen). Manchmal&nbsp;
        <Input
          id="s4"
          onChange={formik.handleChange}
          className={matches.s4}
          small
        />
        &nbsp;er mit seinen Kindern durch die Residenzstadt (fahren). Neben dem
        Kutscher&nbsp;
        <Input
          id="s5"
          onChange={formik.handleChange}
          className={matches.s5}
          small
        />
        &nbsp;, mit verschränkten Armen und einem schillernden Federhut, der
        Leibjäger (sitzen). Und aus dem offenen Wagen&nbsp;
        <Input
          id="s6"
          onChange={formik.handleChange}
          className={matches.s6}
          small
        />
        &nbsp;die kleinen Prinzen und Prinzessinnen uns anderen Kindern&nbsp;
        <Input
          id="s6a"
          onChange={formik.handleChange}
          className={matches.s6a}
          small
        />
        &nbsp;(zuwinken). Der König&nbsp;
        <Input
          id="s7"
          onChange={formik.handleChange}
          className={matches.s7}
          small
        />
        &nbsp;auch (winken). Und er&nbsp;
        <Input
          id="s8"
          onChange={formik.handleChange}
          className={matches.s8}
          small
        />
        &nbsp;freundlich (lächeln). …
        <br />
        <br />
        Um die Weihnachtszeit&nbsp;
        <Input
          id="s9"
          onChange={formik.handleChange}
          className={matches.s9}
          small
        />
        &nbsp;er manchmal, ganz allein und mit hochgestelltem Mantelkragen, wie
        andere Offiziere auch, durch die abendlich funkelnde Prager Straße
        und&nbsp;
        <Input
          id="s10"
          onChange={formik.handleChange}
          className={matches.s10}
          small
        />
        &nbsp;nachdenklich vor den schimmernden Schaufenstern&nbsp;
        <Input
          id="s10a"
          onChange={formik.handleChange}
          className={matches.s10a}
          small
        />
        &nbsp;(spazieren, stehen
        bleiben). Für Kinderkleider und Spielwaren&nbsp;
        <Input
          id="s11"
          onChange={formik.handleChange}
          className={matches.s11}
          small
        />
        &nbsp;er&nbsp;
        <Input
          id="s11a"
          onChange={formik.handleChange}
          className={matches.s11a}
          small
        />
        &nbsp;am meisten (sich interessieren). Es&nbsp;
        <Input
          id="s12"
          onChange={formik.handleChange}
          className={matches.s12}
          small
        />
        &nbsp;(schneien). In den Läden&nbsp;
        <Input
          id="s13"
          onChange={formik.handleChange}
          className={matches.s13}
          small
        />
        &nbsp;die Christbäume (glitzern). Die Passanten&nbsp;
        <Input
          id="s14"
          onChange={formik.handleChange}
          className={matches.s14}
          small
        />
        &nbsp;(sich anstoßen),&nbsp;
        <Input
          id="s15"
          onChange={formik.handleChange}
          className={matches.s15}
          small
        />
        &nbsp;(flüstern): «Der König!» und&nbsp;
        <Input
          id="s16"
          onChange={formik.handleChange}
          className={matches.s16}
          small
        />
        &nbsp;eilig&nbsp;
        <Input
          id="s16a"
          onChange={formik.handleChange}
          className={matches.s16a}
          small
        />
        &nbsp;(weitergehen), um ihn nicht zu stören. Er&nbsp;
        <Input
          id="s17"
          onChange={formik.handleChange}
          className={matches.s17}
          small
        />
        &nbsp;einsam (sein). Er&nbsp;
        <Input
          id="s18"
          onChange={formik.handleChange}
          className={matches.s18}
          small
        />
        &nbsp;seine Kinder (lieben). Und deshalb&nbsp;
        <Input
          id="s19"
          onChange={formik.handleChange}
          className={matches.s19}
          small
        />
        &nbsp;ihn die Bevölkerung (lieben). …&nbsp;
      </p>
      <p>(Erich Kästner „Als ich ein kleiner Junge war“)</p>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task7;
