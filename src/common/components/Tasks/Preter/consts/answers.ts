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
  l3: /^kochte$/,
  l4: /^kochten$/,
  l5: /^kochtet$/,
  t1: /^holte$/,
  t2: /^holtest$/,
  t3: /^holte$/,
  t5: /^holtet$/,
  t6: /^holten$/,
  w1: /^k(ü|ue)sste$/,
  w2: /^k(ü|ue)sstest$/,
  w3: /^k(ü|ue)sste$/,
  w4: /^k(ü|ue)ssten$/,
  w6: /^k(ü|ue)ssten$/,
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

export const preterTests2: TQuestions = {
  pt2t1: {
    question: 'Er',
    answer: /^rettete$/,
    extension: 'die Stadt, wie Batman. (retten)',
  },
  pt2t2: {
    question: 'Er',
    answer: /^regnete$/,
    extension: 'gestern den ganzen Tag. (regnen)',
  },
  pt2t3: {
    question: 'Monika und Karl',
    answer: /^redeten$/,
    extension: 'von ihm nur mit mir. (reden)',
  },
  pt2t4: {
    question: 'Lila',
    answer: /^(ö|oe)ffnete$/,
    extension: 'das Fenster. (öffnen)',
  },
  pt2t5: {
    question: 'Stefan',
    answer: /^atmete$/,
    extQuestion: 'erleichtert',
    extAnswer: /^aus$/,
    extension: '. (ausatmen)',
  },
};

export const rightAnswers3 = {
  s1: /^redete$/,
  s2: /^ordnete$/,
  s3: /^atmeten$/,
  s4: /^wusste$/,
  s5: /^zeichnetest$/,
  s6: /^brachtest$/,
};

export const preterTests3: TQuestions = {
  pt3t1: {
    question: 'Er',
    answer: /^redete$/,
    options: ['redetet', 'redete'],
    extension: 'stundenlang über seine Erfahrung und konnte nicht aufhören.',
  },
  pt3t2: {
    question: 'Damals',
    answer: /^ordnete$/,
    options: ['ordnte', 'ordnete'],
    extension: 'ich die Bücher immer, jetzt habe ich nicht genug Zeit.',
  },
  pt3t3: {
    question: 'Die Menschen',
    answer: /^atmeten$/,
    options: ['atmeten', 'atmten'],
    extension: 'ruhig und sahen zu.',
  },
  pt3t4: {
    question: 'Ich',
    answer: /^wusste$/,
    options: ['wusste', 'wisste'],
    extension: 'das! Wie kannst du nur so offenbar lügen?',
  },
  pt3t5: {
    question: 'Früher',
    answer: /^zeichnetest$/,
    options: ['zeichnetest', 'zeichnetst'],
    extension: 'du gern, was ist passiert?',
  },
  pt3t6: {
    question: 'Du',
    answer: /^brachtest$/,
    options: ['brachtest', 'bringtest'],
    extension: 'mir diese Nachricht in der Nacht, warum?',
  },
};

export const preterTests4: TQuestions = {
  pt4t1: {
    question: 'Du',
    answer: /^a(ß|ss)est$/,
    extension: 'gestern fast nichts, war alles okay? (essen)',
  },
  pt4t2: {
    question: '',
    answer: /^fandet$/,
    extension: 'ihr den Brief also langweilig? (finden)',
  },
  pt4t3: {
    question: 'Früher',
    answer: /^sahen$/,
    extQuestion: 'wir uns die neuen Filme immer zusammen',
    extAnswer: /^an$/,
    extension: '. (sich ansehen)',
  },
  pt4t4: {
    question: 'Du',
    answer: /^sa(ß|ss)est$/,
    extension: 'in der Halle so stumm und traurig. Was ist los? (sitzen)',
  },
  pt4t5: {
    question: 'Ihr',
    answer: /^galtet$/,
    extension: 'als das schönste Paar in der Schule, warum seid ihr nicht mehr zusammen? (gelten)',
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

// ToDo Define answer object variant 
export const rightAnswers6 = {
  s1: /^du trankst und trankst, ohne ende.?$/,
  s2: /^gestern hatten wir alles. heute - nichts.?$/,
  s3: /^ich war damals lehrer.?$/,
  s4: /^kinder, ihr musstet fr(ü|ue)her kommen.?$/,
  s5: /^sie gingen lange durch den wald.?$/,
};

export const preterTests6: TQuestions = {
  pt6t1: {
    question: 'Ты пил и пил, без конца (trinken)',
    answer: /^du trankst und trankst, ohne Ende$/,
  },
  pt6t2: {
    question: 'Вчера у нас было всё, сегодня – ничего (haben)',
    answer: /^gestern hatten wir alles. Heute - nichts.$/,
  },
  pt6t3: {
    question: 'Я был тогда учителем (sein)',
    answer: /^Ich war damals Lehrer$/,
  },
  pt6t4: {
    question: 'Дети, вы должны были прийти раньше (müssen)',
    answer: /^Kinder, Ihr musstet früher kommen!$/,
  },
  pt6t5: {
    question: 'Они долго шли через лес (gehen)',
    answer: /^sie gingen lange durch den Wald$/,
  },
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
  s16: /^gingen weiter$/,
  s17: /^war$/,
  s18: /^liebte$/,
  s19: /^liebte$/,
};
