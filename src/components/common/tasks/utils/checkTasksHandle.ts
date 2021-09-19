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
  return Object.entries(tests).reduce(
    (acc, test) => {
      const res = !test[1] || answers[test[0]] === '' || answers[test[0]] === '...'
        ? ETestResult.Pending
        : test[1].answer?.test(answers[test[0]].toLowerCase().trim())
        ? ETestResult.Right
        : ETestResult.Wrong;

      if (test[1].extQuestion !== undefined) {
        const extRes = answers[`${test[0]}a`] === '' || answers[`${test[0]}a`] === '...'
          ? ETestResult.Pending
          : test[1].extAnswer?.test(answers[`${test[0]}a`].toLowerCase().trim())
          ? ETestResult.Right
          : ETestResult.Wrong;

        return {
          ...acc,
          [test[0]]: res,
          [`${test[0]}a`]: extRes,
        }
      }

      return {
        ...acc,
        [test[0]]: res,
      };
    },
    {}
  );
};
