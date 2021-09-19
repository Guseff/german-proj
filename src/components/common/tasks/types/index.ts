export enum ETestResult {
  Pending = '',
  Right = 'green',
  Wrong = 'red',
}

export type TTestQuestions = {
  [index: string]: string;
};

export type TAnswers = {
  [index: string]: string;
};

export type TQuestion = {
  question?: string;
  answer?: RegExp;
  extQuestion?: string;
  extAnswer?: RegExp;
  options?: string[];
  extention?: string;
};

export type TQuestions = {
  [index: string]: TQuestion;
};

export type TTestAnswers = {
  [index: string]: RegExp;
};

export type TTestResult = {
  [index: string]: ETestResult;
};
