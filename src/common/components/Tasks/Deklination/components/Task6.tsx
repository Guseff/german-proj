import React, { useState } from 'react';
import { useFormik } from 'formik';

import { CheckButton } from 'Common/components/CheckButton';
import { CheckBoxWrapper } from 'Common/components/CheckBoxWrapper';
import { CheckBoxQuestion } from 'Common/components/CheckBoxQuestion';

import { ETestResult } from '../../types';

const list = {
  w1: { id: 'w1', content: 'der Frosch' },
  w2: { id: 'w2', content: 'der Belarusse' },
  w3: { id: 'w3', content: 'der Bruder' },
  w4: { id: 'w4', content: 'der Doktor' },
  w5: { id: 'w5', content: 'der Neffe' },
  w6: { id: 'w6', content: 'der Fuchs' },
  w7: { id: 'w7', content: 'der Polyglott' },
  w8: { id: 'w8', content: 'die Gans' },
  w9: { id: 'w9', content: 'der Bär' },
  w10: { id: 'w10', content: 'der Hügel' },
  w11: { id: 'w11', content: 'der Tor' },
  w12: { id: 'w12', content: 'der Leutnant' },
  w13: { id: 'w13', content: 'der Arzt' },
};

const answer = ['w1', 'w4'];

const Task = (): JSX.Element => {
  const [match, setMatch] = useState<ETestResult>(ETestResult.Pending);

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values: { [key: string]: string[] }) => {
      const temp = Object
        .entries(values)
        .filter((entry) => entry[1].length > 0)
        .map((entry) => entry[0]);

      setMatch(temp.sort().toString() === answer.toString() ? ETestResult.Right : ETestResult.Wrong);
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
