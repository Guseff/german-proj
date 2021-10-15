import { TTestResult, TQuestions, ETestResult } from '../types';

export const getInitialValues = (
  tests: TQuestions,
): TTestResult => Object
  .entries(tests)
  .reduce((acc, test) => {
    const res = {
      ...acc,
      [test[0]]: ETestResult.Pending,
    }

    if (test[1].extQuestion !== undefined) {
      return {
        ...res,
        [`${test[0]}a`]: ETestResult.Pending,
      }
    }
    return res;
  }, {});
