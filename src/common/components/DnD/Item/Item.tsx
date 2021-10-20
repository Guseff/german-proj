import React, { ReactNode } from 'react';
import cn from 'classnames';
import { Draggable } from 'react-beautiful-dnd';

import { ETestResult } from 'Common/components/Tasks/types';

import styles from './Item.css';

type TContainer = {
  word: {
    id: string;
    content: string;
  };
  index: number;
  testResult?: ETestResult;
};

const Item = ({testResult = ETestResult.Pending, word, index}: TContainer ): JSX.Element => (
  <Draggable draggableId={word.id} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className={cn(styles.item, styles[testResult])}
      >
        {word.content}
      </div>
    )}
  </Draggable>
);

export default Item;
