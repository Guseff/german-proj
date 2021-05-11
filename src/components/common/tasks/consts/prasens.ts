import { ETestResult } from '../types';

export const rightAnswers = {
  h1: /^h(oe|ö)re$/,
  h2: /^h(oe|ö)rst$/,
  h3: /^h(oe|ö)rt$/,
  h5: /^h(oe|ö)rt$/,
  h6: /^h(oe|ö)ren$/,
  k2: /^kochst$/,
  k3: /^kocht$/,
  k4: /^kochen$/,
  k5: /^kocht$/,
  k6: /^kochen$/,
  l1: /^l(ue|ü)ge$/,
  l2: /^l(ue|ü)gst$/,
  l4: /^l(ue|ü)gen$/,
  l5: /^l(ue|ü)gt$/,
  l6: /^l(ue|ü)gen$/,
  t1: /^trinke$/,
  t2: /^trinkst$/,
  t3: /^trinkt$/,
  t4: /^trinken$/,
  t5: /^trinkt$/,
  w1: /^wohne$/,
  w3: /^wohnt$/,
  w4: /^wohnen$/,
  w5: /^wohnt$/,
  w6: /^wohnen$/,
  z1: /^zeige$/,
  z2: /^zeigst$/,
  z3: /^zeigt$/,
  z4: /^zeigen$/,
  z6: /^zeigt$/,
};

export const initialValues = Object.keys(rightAnswers).reduce(
  (acc, key) => ({
    ...acc,
    [key]: ETestResult.Panding,
  }),
  {}
);
