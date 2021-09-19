import { TTestResult, TQuestions, ETestResult } from '../types';

export const getInitialValues = (
  tests: TQuestions,
): TTestResult => Object
  .keys(tests)
  .reduce((acc, key) => ({
    ...acc,
    [key]: ETestResult.Pending,
  }), {});
