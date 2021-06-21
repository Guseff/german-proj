import React from 'react';
// import { useFormik } from 'formik';

// import Input from '../../../Input/Input';
import Button from '../../../Button/Button';
// import { rightAnswers2 as rightAnswers } from '../consts/answers';
// import { TTestResult } from '../../types';
// import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

// const initialValues = getAnswersInitialValues(rightAnswers);

const Task5 = (): JSX.Element => {
  // const [matches, setMatches] = useState<TTestResult>(initialValues);

  // const formik = useFormik({
  //   initialValues,
  // onSubmit: values => {
  // setMatches(checkInputAnswerHandle(values, rightAnswers));
  //   },
  // });

  return (
    <form>
      <Button type="submit">Check</Button>
    </form>
  );
};

export default Task5;
