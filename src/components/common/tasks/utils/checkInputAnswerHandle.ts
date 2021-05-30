import {
  ETestResult,
  TTestQuestions,
  TTestAnswers,
  TTestResult,
} from '../types';

export const checkInputAnswerHandle = (
  test: TTestQuestions,
  answers: TTestAnswers
): TTestResult => {
  return Object.keys(test).reduce(
    (acc, key) => ({
      ...acc,
      [key]:
        !answers[key] || test[key] === '' || test[key] === '...'
          ? ETestResult.Panding
          : answers[key].test(test[key].toLowerCase().trim())
          ? ETestResult.Right
          : ETestResult.Wrong,
    }),
    {}
  );
};
