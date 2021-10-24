import { ETestResult, TTestResult } from 'Common/components/Tasks/types';

export const checkReorderTask = (
  tests: { [key: string]: string[] },
  answers: { [key: string]: RegExp },
): TTestResult => {
  const check = (arr: string[], answer: RegExp): ETestResult => {
    return answer.test(arr.join(' ').toLowerCase()) ? ETestResult.Right : ETestResult.Wrong;
  };

  return Object.keys(tests).reduce(
    (acc, x) => ({
      ...acc,
      [x]: check(tests[x], answers[x]),
    }),
    {},
  );
};