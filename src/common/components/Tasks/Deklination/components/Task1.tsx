import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'Common/components/Input';
import { CheckButton } from 'Common/components/CheckButton';
import Table, { Cell, Row } from 'Common/components/Table';
import { rightAnswers1 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Test1 = (): JSX.Element => {
  const [matches, setMatches] = useState<TTestResult>(initialValues);

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      setMatches(checkInputAnswerHandle(values, rightAnswers));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Table>
        <Row>
          <Cell low centered>
            N
          </Cell>
          <Cell leftBorder centered>
            die Lampe
          </Cell>
          <Cell leftBorder centered>
            die Uhr
          </Cell>
          <Cell leftBorder centered>
            das Handy
          </Cell>
          <Cell leftBorder centered>
            der Löffel
          </Cell>
          <Cell leftBorder centered>
            die Leute
          </Cell>
          <Cell leftBorder centered>
            die Kinder
          </Cell>
        </Row>
        <Row>
          <Cell low centered>
            G
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="l1"
              onChange={formik.handleChange}
              className={matches.l1}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="u1"
              onChange={formik.handleChange}
              className={matches.u1}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="h1"
              onChange={formik.handleChange}
              className={matches.h1}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="lo1"
              onChange={formik.handleChange}
              className={matches.lo1}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="le1"
              onChange={formik.handleChange}
              className={matches.le1}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="k1"
              onChange={formik.handleChange}
              className={matches.k1}
            />
          </Cell>
        </Row>
        <Row>
          <Cell low centered>
            D
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="l2"
              onChange={formik.handleChange}
              className={matches.l2}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="u2"
              onChange={formik.handleChange}
              className={matches.u2}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="h2"
              onChange={formik.handleChange}
              className={matches.h2}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="lo2"
              onChange={formik.handleChange}
              className={matches.lo2}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="le2"
              onChange={formik.handleChange}
              className={matches.le2}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="k2"
              onChange={formik.handleChange}
              className={matches.k2}
            />
          </Cell>
        </Row>
        <Row>
          <Cell low centered>
            A
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="l3"
              onChange={formik.handleChange}
              className={matches.l3}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="u3"
              onChange={formik.handleChange}
              className={matches.u3}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="h3"
              onChange={formik.handleChange}
              className={matches.h3}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="lo3"
              onChange={formik.handleChange}
              className={matches.lo3}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="le3"
              onChange={formik.handleChange}
              className={matches.le3}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="k3"
              onChange={formik.handleChange}
              className={matches.k3}
            />
          </Cell>
        </Row>
      </Table>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Test1;
