import React, { useState } from 'react';
import { useFormik } from 'formik';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

import { Item, Container } from 'Common/components/DnD';
import { CheckButton } from 'Common/components/CheckButton';
import { insertInArray, reorderArray } from 'Common/utils';
import { TDnDTestData } from 'Common/components/DnD/types';
import { checkOneTwoTask } from 'Common/components/DnD/utils/checkOneTwoTask';

import { ETestResult, TTestResult } from '../../types';

const initialData: TDnDTestData = {
  words: {
    w1: { id: 'w1', content: 'gehen' },
    w2: { id: 'w2', content: 'machen' },
    w3: { id: 'w3', content: 'haben' },
    w4: { id: 'w4', content: 'werden' },
    w5: { id: 'w5', content: 'schwimmen' },
    w6: { id: 'w6', content: 'lesen' },
    w7: { id: 'w7', content: 'sein' },
    w8: { id: 'w8', content: 'sich kämen' },
    w9: { id: 'w9', content: 'aufwachen' },
    w10: { id: 'w10', content: 'können' },
  },
  containers: {
    init: { id: 'init', title: '', wordIds: [ 'w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7', 'w8', 'w9', 'w10' ] },
    one: { id: 'one', title: 'Haben', wordIds: [] },
    two: { id: 'two', title: 'Sein', wordIds: [] },
  },
  answers: {
    one: ['w2', 'w3', 'w6', 'w8', 'w10'],
    two: ['w1', 'w4', 'w5', 'w7', 'w9'],
  },
}

const Test = (): JSX.Element => {
  const [matches, setMatches] = useState<TTestResult>({});
  const [data, setData] = useState<{ [key: string]: string[] }>({
    init: initialData.containers.init.wordIds,
    one: [],
    two: [],
  });

  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {
      setMatches(checkOneTwoTask({ one: data.one, two: data.two }, initialData.answers));
    },
  });

  const dragEndHandle = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    
    if (result.destination.droppableId === result.source.droppableId) {
      setData({
        ...data,
        [result.source.droppableId]: reorderArray(
          data[result.source.droppableId],
          result.source.index,
          result.destination.index,
        ),
      });

      return;
    }

    setMatches({
      ...matches,
      [result.draggableId]: ETestResult.Pending,
    });

    setData({
      ...data,
      [result.source.droppableId]: data[result.source.droppableId].filter(
        (item) => item !== result.draggableId,
      ),
      [result.destination.droppableId]: insertInArray(
        data[result.destination.droppableId],
        result.draggableId,
        result.destination.index,
      ),
    });
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <DragDropContext onDragEnd={dragEndHandle} >
        <Container id={initialData.containers.init.id}>
          {data.init.map((id) => initialData.words[id]).map((word, i) => (
            <Item word={word} key={word.id} index={i} />
          ))}
        </Container>
        <div style={{display: 'flex', marginBottom: '20px'}}>
          <Container
            id={initialData.containers.one.id}
            title={initialData.containers.one.title}
            half
          >
            {data.one.map((id) => initialData.words[id]).map((word, i) => (
              <Item word={word} key={word.id} index={i} testResult={matches[word.id]} />
            ))}
          </Container>
          <Container
            id={initialData.containers.two.id}
            title={initialData.containers.two.title}
            half
          >
            {data.two.map((id) => initialData.words[id]).map((word, i) => (
              <Item word={word} key={word.id} index={i} testResult={matches[word.id]} />
            ))}
          </Container>
        </div>
      </DragDropContext>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Test;
