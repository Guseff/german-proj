import React, { useState } from 'react';
import { useFormik } from 'formik';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { reorderArray } from 'Common/utils';
import { CheckButton } from 'Common/components/CheckButton';
import { Item, Container } from 'Common/components/DnD';
import { TWord } from 'Common/components/DnD/types';
import { checkReorderTask } from 'Common/components/DnD/utils/checkReorderTask';

import { ETestResult, TTestResult } from '../../types';

export type TWordBase = {
  [key: string]: TWord;
};

export type TInitData = {
  initialOrder: {
    [x: string]: string[];
  };
  rightAnswers: {
    [x: string]: RegExp;
  };
};

const wordsBase: TWordBase = {
  w1: { id: 'w1', content: 'Der Witz' },
  w2: { id: 'w2', content: 'super toll' },
  w3: { id: 'w3', content: 'hat' },
  w4: { id: 'w4', content: 'geklappt' },
  v1: { id: 'v1', content: 'Wir' },
  v2: { id: 'v2', content: 'dir' },
  v3: { id: 'v3', content: 'geglaubt' },
  v4: { id: 'v4', content: 'haben' },
  v5: { id: 'v5', content: 'umsonst' },
  a1: { id: 'a1', content: 'über deine Lüge' },
  a2: { id: 'a2', content: 'meine Freundin' },
  a3: { id: 'a3', content: 'gesagt' },
  a4: { id: 'a4', content: 'hat' },
  a5: { id: 'a5', content: 'mir' },
  b1: { id: 'b1', content: 'Erika' },
  b2: { id: 'b2', content: 'selbst' },
  b3: { id: 'b3', content: 'das Bild' },
  b4: { id: 'b4', content: 'in der Schule' },
  b5: { id: 'b5', content: 'gemacht' },
  b6: { id: 'b6', content: 'hat' },
  c1: { id: 'c1', content: 'Habt' },
  c2: { id: 'c2', content: 'den Film' },
  c3: { id: 'c3', content: 'ihr' },
  c4: { id: 'c4', content: 'schon' },
  c5: { id: 'c5', content: 'gesehen' },
  c6: { id: 'c6', content: 'gestern' },
  c7: { id: 'c7', content: '?' },
};

const initialData: TInitData = {
  initialOrder: {
    s1: ['w1', 'w2', 'w3', 'w4'],
    s2: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'],
    s3: ['v1', 'v2', 'v3', 'v4', 'v5'],
    s4: ['a1', 'a2', 'a3', 'a4', 'a5'],
    s5: ['b1', 'b2', 'b3', 'b4', 'b5', 'b6'],
  },
  rightAnswers: {
    s1: /^der witz hat super toll geklappt$/,
    s2: /^(habt ihr den film gestern schon gesehen)|(habt ihr gestern den film schon gesehen)\?$/,
    s3: /^wir haben dir umsonst geglaubt$/,
    s4: /^(meine freundin hat mir (ü|ue)ber deine l(ü|ue)ge gesagt)|((ü|ue)ber deine l(ü|ue)ge hat mir meine freundin gesagt)$/,
    s5: /^(erika hat das bild selbst in der schule gemacht)|(das bild hat erika selbst in der schule gemacht)|(in der schule hat erika selbst das bild gemacht)$/,
  },
};

const Task = (): JSX.Element => {
  const [matches, setMatches] = useState<TTestResult>({});
  const [data, setData] = useState<{
      [key: string]: string[],
    }
  >(initialData.initialOrder);

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      setMatches(
        checkReorderTask(
          Object.keys(data).reduce((acc, key) => {
            console.log();
            return ({
              ...acc,
              [key]: data[key].map(id => wordsBase[id].content),
            });
          }, {}),
          initialData.rightAnswers,
        ),
      );
    },
  });

  const dragEndHandle = (result: DropResult) => {
    if (!result.destination || result.destination.droppableId !== result.source.droppableId) {
      return;
    }

    setData({
      ...data,
      [result.source.droppableId]: reorderArray(
        data[result.source.droppableId],
        result.source.index,
        result.destination.index,
      ),
    });

    setMatches({
      ...matches,
      [result.source.droppableId]: ETestResult.Pending,
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
        <ol>
          {Object.keys(data).map((key, i) =>(
          <li key={key}>
            <DragDropContext onDragEnd={dragEndHandle} >
              <Container id={key} transparent testResult={matches[key]}>
                {data[key].map(
                  (id, j) => (
                    <Item word={wordsBase[id]} key={`${wordsBase[id].id}${j}`} index={j} />
                  ),
                )}
              </Container>
            </DragDropContext>
          </li>
          ))}
        </ol>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task;
