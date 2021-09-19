import { TQuestions } from "../../types";

export const rightAnswers1 = {
  h1: /^legte$/,
  h2: /^legtest$/,
  h3: /^legten$/,
  h5: /^legtet$/,
  h6: /^legten$/,
  k2: /^wohnte$/,
  k3: /^wohnte$/,
  k4: /^wohnten$/,
  k5: /^wohntet$/,
  k6: /^wohnten$/,
  l1: /^kochte$/,
  l2: /^kochtest$/,
  l4: /^kochte$/,
  l5: /^kochten$/,
  l6: /^kochtet$/,
  t1: /^holte$/,
  t2: /^holtest$/,
  t3: /^holte$/,
  t4: /^holtet$/,
  t5: /^holten$/,
  w1: /^k(ü|ue)ste$/,
  w3: /^k(ü|ue)stest$/,
  w4: /^k(ü|ue)ste$/,
  w5: /^k(ü|ue)sten$/,
  w6: /^k(ü|ue)sten$/,
  z1: /^fragtest$/,
  z2: /^fragte$/,
  z3: /^fragten$/,
  z4: /^fragtet$/,
  z6: /^fragte$/,
};

export const rightAnswers2 = {
  s1: /^rettete$/,
  s2: /^regnete$/,
  s3: /^redeten$/,
  s4: /^(ö|oe)ffnete$/,
  s5: /^atmete$/,
  s5a: /^aus$/,
};

export const rightAnswers3 = {
  s1: /^redete$/,
  s2: /^ordnete$/,
  s3: /^atmeten$/,
  s4: /^wusste$/,
  s5: /^zeichnetest$/,
  s6: /^brachtest$/,
};

export const preterTests4: TQuestions = {
  pt4t1: {
    question: 'Du',
    answer: /^a(ß|ss)est$/,
    extention: 'gestern fast nichts, war alles okay? (essen)',
  },
  pt4t2: {
    question: '',
    answer: /^fandet$/,
    extention: 'ihr den Brief also langweilig? (finden)',
  },
  pt4t3: {
    question: 'Früher',
    answer: /^sahen$/,
    extQuestion: 'wir uns die neuen Filme immer zusammen',
    extAnswer: /^an$/,
    extention: '. (sich ansehen)',
  },
  pt4t4: {
    question: 'Du',
    answer: /^sa(ß|ss)est$/,
    extention: 'in der Halle so stumm und traurig. Was ist los? (sitzen)',
  },
  pt4t5: {
    question: 'Ihr',
    answer: /^galtet$/,
    extention: 'als das schönste Paar in der Schule, warum seid ihr nicht mehr zusammen? (gelten)',
  },
};

export const preterTests5: TQuestions = {
  pt5t1: { question: 'давать', answer: /^gab$/ },
  pt5t2: { question: 'приказывать', answer: /^befahl$/ },
  pt5t3: { question: 'идти', answer: /^ging$/ },
  pt5t4: { question: 'ехать', answer: /^fuhr$/ },
  pt5t5: { question: 'побеждать', answer: /^gewann$/ },
  pt5t6: { question: 'звать/кричать', answer: /^rief$/ },
  pt5t7: { question: 'плавать', answer: /^schwamm$/ },
  pt5t8: { question: 'прыгать', answer: /^sprang$/ },
  pt5t9: { question: 'стоять', answer: /^stand$/ },
  pt5t10: { question: 'носить', answer: /^trug$/ },
};

export const rightAnswers6 = {
  s1: /^du trankst und trankst, ohne Ende$/,
  s2: /^gestern hatten wir alles. Heute - nichts.$/,
  s3: /^Ich war damals Lehrer$/,
  s4: /^Kinder, Ihr musstet früher kommen!$/,
  s5: /^sie gingen lange durch den Wald$/,
};

export const rightAnswers7 = {
  s1: /^hie(ß|ss)$/,
  s2: /^war$/,
  s3: /^wusste$/,
  s4: /^fuhr$/,
  s5: /^sa(ß|ss)$/,
  s6: /^winkten zu$/,
  s7: /^winkte$/,
  s8: /^l(ae|ä)chelte$/,
  s9: /^spazierte$/,
  s10: /^blieb stehen$/,
  s11: /^interessierte sich$/,
  s12: /^schneite$/,
  s13: /^glitzerten$/,
  s14: /^stie(ß|ss)en sich an$/,
  s15: /^fl(ü|ue)sterten$/,
  s16: /^ging weiter$/,
  s17: /^war$/,
  s18: /^liebte$/,
  s19: /^liebte$/,
};
