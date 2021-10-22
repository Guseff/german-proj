import React, { ReactNode } from 'react';
import cn from 'classnames';
import { Droppable } from 'react-beautiful-dnd';

import { ETestResult } from 'Common/components/Tasks/types';

import styles from './Container.css';

type TContainer = {
  id: string;
  children: ReactNode;
  title?: string;
  testResult?: ETestResult;
  half?: boolean;
  transparent?: boolean;
};

const Container = ({
  id,
  children,
  title,
  testResult = ETestResult.Pending,
  half = false,
  transparent = false,
}: TContainer ): JSX.Element => (
  <Droppable droppableId={id} direction="horizontal">
    {(provided) => (
      <div 
        className={cn(styles.wrapper, {
          [styles.half]: half,
        })}
      >
        {title && <div className={styles.title}>{`${title}:`}</div>}
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={cn(styles.container, styles[testResult], {
            [styles.transparent]: transparent,
          })}
        >
          {children}
          {provided.placeholder}
        </div>
      </div>
    )}
  </Droppable>
);

export default Container;
