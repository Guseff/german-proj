export enum ETestResult {
  Pending = '',
  Right = 'green',
  Wrong = 'red',
}

// remove after refactor
export type TTestQuestions = {
  [index: string]: string;
};

// remove after refactor
export type TTestAnswers = {
  [index: string]: RegExp;
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
  extension?: string;
};

export type TQuestions = {
  [index: string]: TQuestion;
};

export type TTestResult = {
  [index: string]: ETestResult;
};
