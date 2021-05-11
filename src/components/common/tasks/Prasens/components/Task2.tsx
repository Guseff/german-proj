import React from 'react';
// import { useFormik } from 'formik';

import Table, { Cell, Row } from '../../../Table';
// import Input from '../../../Table/components/Input/Input';

const Task2 = (): JSX.Element => {
  return (
    <Table>
      <Row>
        <Cell rowSpan={4}>
          1) Seinen Lehrer ... er nie, er macht alles allein.
        </Cell>
      </Row>
      <Row>
        <Cell>а) fragt</Cell>
        <Cell>b) frage</Cell>
        <Cell>c) fragen</Cell>
        <Cell>d) fragst</Cell>
      </Row>
      <Row>
        <Cell>
          2) Ihr ... das immer, aber ich kann das nie verstehen. Was bedeutet
          dieses Wort?
        </Cell>
      </Row>
      <Row>
        <Cell>а) wiederholen</Cell>
        <Cell>b) wiederholt</Cell>
        <Cell>c)wiederhole</Cell>
        <Cell>d) wiederholst</Cell>
      </Row>
      <Row>
        <Cell>3) Ich …… ihm, sogar wenn er lügt.</Cell>
      </Row>
      <Row>
        <Cell>а) glaube</Cell>
        <Cell>b) glauben</Cell>
        <Cell>c) glaubst</Cell>
        <Cell>d) glaubt</Cell>
      </Row>
      <Row>
        <Cell>4) Wann …….? – Nach der Uni</Cell>
      </Row>
      <Row>
        <Cell>а) kaufe du ein</Cell>
        <Cell>b) kaufst du ein</Cell>
        <Cell>c) kaufest du ein</Cell>
        <Cell>d) kauft du ein</Cell>
      </Row>
      <Row>
        <Cell>5) Mein Freund … in Argentina</Cell>
      </Row>
      <Row>
        <Cell>а) leben</Cell>
        <Cell>b) lebe</Cell>
        <Cell>c) lebt</Cell>
        <Cell>d) lebst</Cell>
      </Row>
    </Table>
  );
};

export default Task2;
