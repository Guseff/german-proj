import {
  ETestResult,
  TAnswers,
  TQuestions,
  TTestResult,
} from '../types';

export const checkTasksHandle = (
  tests: TQuestions,
  answers: TAnswers,
): TTestResult => {
  console.log(answers);
  return Object.keys(tests).reduce(
    (acc, key) => {
      const res = !tests[key] || answers[key] === '' || answers[key] === '...'
      ? ETestResult.Pending
      : tests[key].answer?.test(answers[key].toLowerCase().trim())
      ? ETestResult.Right
      : ETestResult.Wrong;

      return {
        ...acc,
        [key]: res,
      };
    },
    {}
  );
};
