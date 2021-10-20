import React, { useState } from 'react';
import { useFormik } from 'formik';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import Item from 'Common/components/DnD/Item/Item';
import { CheckButton } from 'Common/components/CheckButton';

import { rightAnswers1 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

type TWord = {
  id: string;
  content: string;
};

type TData = {
  words: {
    [key: string]: TWord;
  };
  containers: {
    [key: string]: {
      id: string;
      title: string;
      wordIds: string[];
    };
  };
};

const initialData: TData = {
  words: {
    w1: {id: 'w1', content: 'gehen' },
    w2: {id: 'w2', content: 'machen' },
    w3: {id: 'w3', content: 'haben' },
    w4: {id: 'w4', content: 'werden' },
    w5: {id: 'w5', content: 'schwimmen' },
    w6: {id: 'w6', content: 'lesen' },
    w7: {id: 'w7', content: 'sein' },
    w8: {id: 'w8', content: 'sich kämen' },
    w9: {id: 'w9', content: 'aufwachen' },
    w10: {id: 'w10', content: 'können' },
  },
  containers: {
    init: { id: 'start', title: '', wordIds: [ 'w1', 'w2', 'w3', 'w4', 'w5', 'w6', 'w7', 'w8', 'w9', 'w10' ] },
    haben: { id: 'haben', title: 'haben', wordIds: [] },
    sein: { id: 'sein', title: 'sein', wordIds: [] },
  },
}

const Test = (): JSX.Element => {
  const [matches, setMatches] = useState<TTestResult>(initialValues);
  const data = {
    init: initialData.containers['init'].wordIds,
    haben: [],
    sein: [],
  } as { [key: string]: string[] };

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      setMatches(checkInputAnswerHandle(values, rightAnswers));
    },
  });

  const dragEndHandle = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    data[result.source.droppableId].splice(result.source.index, 1);
    data[result.destination.droppableId].splice(result.destination.index, 0, result.draggableId);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <DragDropContext onDragEnd={dragEndHandle} >
        <Droppable droppableId="init" direction="horizontal">
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              style={{ border: '1px solid gray', margin: '5px', padding: '2px 5px', minHeight: '38px' }}
            >
              {data.init.map((id) => initialData.words[id]).map((word, i) => (
                <Item word={word} key={word.id} index={i} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <div style={{display: 'flex', marginBottom: '20px'}}>
          <Droppable droppableId={initialData.containers.haben.id} direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{width: '50%', border: '1px solid gray', margin: '5px', padding: '2px 5px', minHeight: '38px'}}
              >
                {data.haben.map((id) => initialData.words[id]).map((word, i) => (
                  <Item word={word} key={word.id} index={i} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId={initialData.containers.sein.id} direction="horizontal">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{width: '50%', border: '1px solid gray', margin: '5px', padding: '2px 5px', minHeight: '38px'}}
              >
                {data.sein.map((id) => initialData.words[id]).map((word, i) => (
                  <Item word={word} key={word.id} index={i} />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Test;
