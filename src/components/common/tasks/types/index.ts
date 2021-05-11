export enum ETestResult {
  Panding = '',
  Right = 'green',
  Wrong = 'red',
}

export type TTestQuestions = {
  [index: string]: string;
};

export type TTestAnswers = {
  [index: string]: RegExp;
};

export type TTestResult = {
  [index: string]: ETestResult;
};
