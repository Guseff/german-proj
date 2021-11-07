import React, { useState } from 'react';
import { useFormik } from 'formik';

import { CheckButton } from 'Common/components/CheckButton';
import { CheckBoxWrapper } from 'Common/components/CheckBoxWrapper';
import { CheckBoxQuestion } from 'Common/components/CheckBoxQuestion';

import { ETestResult } from '../../types';

const list = {
  w1: { id: 'w1', content: 'das Auto' },
  w2: { id: 'w2', content: 'der Buchstabe' },
  w3: { id: 'w3', content: 'der Garten' },
  w4: { id: 'w4', content: 'der Frieden' },
  w5: { id: 'w5', content: 'der Ritter' },
  w6: { id: 'w6', content: 'der Funke' },
  w7: { id: 'w7', content: 'der Gedanke' },
  w8: { id: 'w8', content: 'die Bude' },
  w9: { id: 'w9', content: 'der Glaube' },
  w10: { id: 'w10', content: 'der Samen' },
  w11: { id: 'w11', content: 'die Schadenfreude' },
  w12: { id: 'w12', content: 'der Willensstarke' },
};

const answer = ['w2', 'w4', 'w6', 'w7', 'w9', 'w10'];

const Task = (): JSX.Element => {
  const [match, setMatch] = useState<ETestResult>(ETestResult.Pending);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values: { [key: string]: string[] }) => {
      const temp = Object
        .entries(values)
        .filter((entry) => entry[1].length > 0)
        .map((entry) => entry[0]);
console.log(temp)
      setMatch(temp.sort().toString() === answer.sort().toString() ? ETestResult.Right : ETestResult.Wrong);
    },
  });

  const onChange = (e: React.ChangeEvent<any>) => {
    formik.handleChange(e);
    setMatch(ETestResult.Pending);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <CheckBoxWrapper testResult={match}>
        {Object.values(list).map((item) => (
          <CheckBoxQuestion key={item.id} id={item.id} onChange={onChange}>
            {item.content}
          </CheckBoxQuestion>
        ))}
      </CheckBoxWrapper>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task;
