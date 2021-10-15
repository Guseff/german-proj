import { ETestResult, TTestAnswers, TTestResult } from '../types';

export const getAnswersInitialValues = (answers: TTestAnswers): TTestResult => {
  return Object.keys(answers).reduce(
    (acc, key) => ({
      ...acc,
      [key]: ETestResult.Pending,
    }),
    {}
  );
};
