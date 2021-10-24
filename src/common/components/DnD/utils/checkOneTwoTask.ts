import { ETestResult, TTestResult } from 'Common/components/Tasks/types';

type TOneTwoArg = {
  one: string[],
  two: string[],
};

export const checkOneTwoTask = (
  tests: TOneTwoArg,
  answers: TOneTwoArg,
): TTestResult => {
  const check = (arr: string[], sample: string[]): TTestResult => {
    return arr.reduce((acc: TTestResult, x) => {
      if (sample.includes(x)) {
        return {
          ...acc,
          [x]: ETestResult.Right,
        };
      }
      return {
        ...acc,
        [x]: ETestResult.Wrong,
      };
    }, {} as TTestResult);
  };

  return {
    ...check(tests.one, answers.one),
    ...check(tests.two, answers.two),
  };
};