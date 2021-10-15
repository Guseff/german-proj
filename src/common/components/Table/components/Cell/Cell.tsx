import React, { ReactNode } from 'react';
import cn from 'classnames';

import styles from './Cell.css';

type TCellProps = {
  children?: ReactNode;
  rowSpan?: number;
  className?: string;
  low?: boolean;
  middle?: boolean;
  big?: boolean;
  gap?: boolean;
  equal?: boolean;
  bold?: boolean;
  top?: boolean;
  centered?: boolean;
  cursive?: boolean;
  right?: boolean;
  leftBorder?: boolean;
};

const Cell = ({
  children,
  className,
  rowSpan,
  low,
  middle,
  big,
  gap,
  equal,
  bold,
  top,
  centered,
  cursive,
  right,
  leftBorder,
}: TCellProps): JSX.Element => (
  <td
    rowSpan={rowSpan}
    className={cn(className, {
      [styles.lowCell]: low,
      [styles.midCell]: middle,
      [styles.bigCell]: big,
      [styles.gapCell]: gap,
      [styles.equCell]: equal,
      [styles.boldCell]: bold,
      [styles.topCell]: top,
      [styles.centeredCell]: centered,
      [styles.cursive]: cursive,
      [styles.right]: right,
      [styles.withLeftBorder]: leftBorder,
    })}
  >
    {children}
  </td>
);

export default Cell;
