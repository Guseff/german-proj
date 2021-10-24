import { ETestResult } from 'Common/components/Tasks/types';

export type TWord = {
  id: string;
  content: string;
  status?: ETestResult;
};

export type TContainer = {
  id: string;
  title: string;
  wordIds: string[];
}

export type TDnDTestData = {
  words: {
    [key: string]: TWord;
  };
  containers: {
    init: TContainer;
    one: TContainer;
    two: TContainer;
  };
  answers: {
    one: string[];
    two: string[];
  },
};
