import React, { useState } from 'react';
import { useFormik } from 'formik';

import Table, { Cell, Row } from '../../../Table';
import Input from '../../../Table/components/Input/Input';
import { initialValues, rightAnswers } from '../consts/prasens';
import {
  ETestResult,
  TTestQuestions,
  TTestAnswers,
  TTestResult,
} from '../../types';

const checkInputAnswerHandle = (
  test: TTestQuestions,
  answers: TTestAnswers
): TTestResult => {
  return Object.keys(test).reduce(
    (acc, key) => ({
      ...acc,
      [key]:
        test[key] === ''
          ? ETestResult.Panding
          : answers[key].test(test[key].trim())
          ? ETestResult.Right
          : ETestResult.Wrong,
    }),
    {}
  );
};

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
          <Cell>Infinitiv</Cell>
          <Cell leftBorder centered>
            ich
          </Cell>
          <Cell leftBorder centered>
            du
          </Cell>
          <Cell leftBorder centered>
            er/sie/es
          </Cell>
          <Cell leftBorder centered>
            wir
          </Cell>
          <Cell leftBorder centered>
            ihr
          </Cell>
          <Cell leftBorder centered>
            sie/Sie
          </Cell>
        </Row>
        <Row>
          <Cell>hören</Cell>
          <Cell leftBorder centered low>
            <Input
              id="h1"
              onChange={formik.handleChange}
              className={matches.h1}
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
              id="h3"
              onChange={formik.handleChange}
              className={matches.h3}
            />
          </Cell>
          <Cell leftBorder centered low>
            hören
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="h5"
              onChange={formik.handleChange}
              className={matches.h5}
            />
          </Cell>
          <Cell leftBorder centered low>
            <Input
              id="h6"
              onChange={formik.handleChange}
              className={matches.h6}
            />
          </Cell>
        </Row>
        <Row>
          <Cell>kochen</Cell>
          <Cell leftBorder centered>
            koche
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="k2"
              onChange={formik.handleChange}
              className={matches.k2}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="k3"
              onChange={formik.handleChange}
              className={matches.k3}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="k4"
              onChange={formik.handleChange}
              className={matches.k4}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="k5"
              onChange={formik.handleChange}
              className={matches.k5}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="k6"
              onChange={formik.handleChange}
              className={matches.k6}
            />
          </Cell>
        </Row>
        <Row>
          <Cell>lügen</Cell>
          <Cell leftBorder centered>
            <Input
              id="l1"
              onChange={formik.handleChange}
              className={matches.l1}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="l2"
              onChange={formik.handleChange}
              className={matches.l2}
            />
          </Cell>
          <Cell leftBorder centered>
            lügt
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="l4"
              onChange={formik.handleChange}
              className={matches.l4}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="l5"
              onChange={formik.handleChange}
              className={matches.l5}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="l6"
              onChange={formik.handleChange}
              className={matches.l6}
            />
          </Cell>
        </Row>
        <Row>
          <Cell>trinken</Cell>
          <Cell leftBorder centered>
            <Input
              id="t1"
              onChange={formik.handleChange}
              className={matches.t1}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="t2"
              onChange={formik.handleChange}
              className={matches.t2}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="t3"
              onChange={formik.handleChange}
              className={matches.t3}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="t4"
              onChange={formik.handleChange}
              className={matches.t4}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="t5"
              onChange={formik.handleChange}
              className={matches.t5}
            />
          </Cell>
          <Cell leftBorder centered>
            trinken
          </Cell>
        </Row>
        <Row>
          <Cell>wohnen</Cell>
          <Cell leftBorder centered>
            <Input
              id="w1"
              onChange={formik.handleChange}
              className={matches.w1}
            />
          </Cell>
          <Cell leftBorder centered>
            wohnst
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="w3"
              onChange={formik.handleChange}
              className={matches.w3}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="w4"
              onChange={formik.handleChange}
              className={matches.w4}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="w5"
              onChange={formik.handleChange}
              className={matches.w5}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="w6"
              onChange={formik.handleChange}
              className={matches.w6}
            />
          </Cell>
        </Row>
        <Row>
          <Cell>zeigen</Cell>
          <Cell leftBorder centered>
            <Input
              id="z1"
              onChange={formik.handleChange}
              className={matches.z1}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="z2"
              onChange={formik.handleChange}
              className={matches.z2}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="z3"
              onChange={formik.handleChange}
              className={matches.z3}
            />
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="z4"
              onChange={formik.handleChange}
              className={matches.z4}
            />
          </Cell>
          <Cell leftBorder centered>
            zeigt
          </Cell>
          <Cell leftBorder centered>
            <Input
              id="z6"
              onChange={formik.handleChange}
              className={matches.z6}
            />
          </Cell>
        </Row>
      </Table>
      <button type="submit">Check</button>
    </form>
  );
};

export default Test1;
