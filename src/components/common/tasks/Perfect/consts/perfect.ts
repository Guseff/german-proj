import { ETestResult } from '../../types';

export const rightAnswers1 = {
  h1: /^legte$/,
  h2: /^legtest$/,
  h3: /^legten$/,
  h5: /^legtet$/,
  h6: /^legten$/,
  k2: /^wohnte$/,
  k3: /^wohnte$/,
  
};

export const rightAnswers2 = {
  s1: /^der Witz hat super toll geklappt$/,
  s2: /^(habt ihr den Film gestern schon gesehen?|habt ihr gestern den Film schon gesehen?)$/,
  s3: /^wir haben dir umsonst geglaubt$/,
  s4: /^(meine Freundin hat mir (ü|ue)ber deine L(ü|ue)ge gesagt|(ü|ue)ber deine L(ü|ue)ge hat mir meine Freundin gesagt)$/,
  s5: /^(Erika hat das Bild selbst in der Schule gamacht|Das Bild hat Erika selbst in der Schule gemacht|In der Schule hat Erika selbst das Bild gemacht)$/,
};

export const rightAnswers3 = {
    s1: /^gebremst$/,
    s2: /^gemalt$/,
    s3: /^geh(ö|oe)rt$/,
    s4: /^gebastelt$/,
    s5: /^gebellt$/,
    s6: /^gezeigt$/,
    s7: /^gepr(ü|ue)ft$/,
    s8: /^gekocht$/,
    s9: /^gelegt$/,
    s10: /^gemeint$/,
};

export const rightAnswers4 = {
  s1: /^gerettet$/,
  s2: /^geregnet$/,
  s3: /^geredet$/,
  s4: /^ge(ö|oe)ffnet$/,
  s5: /^geatmet$/,
};

export const rightAnswers5 = {
  s1: /^Wir haben vor 5 Jahren zusammen Philosophie in Berlin studiert$/,
  s2: /^eine peinliche Pause ist jedes Mal entstanden, wenn wir uns im Koridor gesehen haben$/,
  s3: /^Das Bild hat micht damals im Museum beeindruckt$/,
  s4: /^Sie sind schon längst angekommen$/,
  s5: /^Die Vorlesung hat am Donnerstag stattgefunden$/,
};

export const rightAnswers6 = {
  s1: /^diktiert$/,
  s2: /^aufgeschrieben$/,
  s3: /^zugeh(ö|oe)rt$/,
  s4: /^hingefahren$/,
  s5: /^studiert$/,
  s6: /^erz(ä|ae)hlt$/,
  s7: /^beschlossen$/,
};

export const rightAnswers7 = {
  s1: /^Hast du die Suppe gegessen? Ja, gestern$/,
  s2: /^Ich habe den Vertrag zerrissen$/,
  s3: /^Der Professor hat seinen Vortrag vorgelesen$/,
  s4: /^Wir haben schweigend am Tisch  gesessen, im leeren Haus$/,
  s5: /^Lara und Dan sind nach Paris geflogen, ohne Tsch(ü|ue)(ß|ss) zu sagen$/,
};

export const rightAnswers8 = {
    s1: /^ist schiefgelaufen$/,
    s2: /^hat gemerkt$/,
    s3: /^hat verschlafen$/,
    s4: /^hat angezogen$/,
    s5: /^hat gefunden$/,
    s6: /^verloren$/,
    s7: /^hat festgestellt$/,
    s8: /^weggefahren ist$/,
    s9: /^hat angerufen$/,
    s10: /^hat abgeholt$/,
    s11: /^haben gestanden$/,
    s12: /^hat angefangen$/,
    s13: /^ist gekommen$/,
    s14: /^hat gesehen$/,
    s15: /^hat versp(ae|ä)tet$/,
    s16: /^gestritten$/,
    s17: /^hat getrunken$/,
    s18: /^hat gedacht$/,
    s19: /^ge(oe|ö)ffnet hat$/,
    s20: /^hat bestimmt$/,
    s21: /^hat probiert$/,
    s22: /^gegessen$/,
    s23: /^hat gerettet$/,
    s24: /^hat geklappt$/,
    s25: /^hat beeindruckt$/,
    s26: /^verbracht$/,
    s27: /^gehabt$/,
};

export const initialValues1 = Object.keys(rightAnswers1).reduce(
  (acc, key) => ({
    ...acc,
    [key]: ETestResult.Panding,
  }),
  {}
);

export const initialValues2 = Object.keys(rightAnswers2).reduce(
  (acc, key) => ({
    ...acc,
    [key]: ETestResult.Panding,
  }),
  {}
);
