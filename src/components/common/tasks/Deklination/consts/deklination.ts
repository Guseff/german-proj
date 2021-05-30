import { ETestResult } from '../../types';

export const rightAnswers1 = {
  l1: /^der Lampe$/,
  l2: /^der Lampe$/,
  l3: /^die Lampe$/,
  u1: /^der Uhr$/,
  u2: /^der Uhr$/,
  u3: /^die Uhr$/,
  h1: /^des Handys$/,
  h2: /^dem Handy$/,
  h3: /^das Handy$/,
  lo1: /^des L(ö|oe)ffels$/,
  lo2: /^dem L(ö|oe)ffel$/,
  lo3: /^den L(ö|oe)ffel$/,
  le1: /^der Leute$/,
  le2: /^den Leuten$/,
  le3: /^die Leute$/,
  k1: /^der Kinder$/,
  k2: /^den Kindern$/,
  k3: /^die Kinder$/,
};

export const rightAnswers2 = {
  s1: /^eine Postkarte$/,
  s2: /^dem Chef$/,
  s3: /^der Eitrittskarte$/,
  s4: /^meines Bruders$/,
  s5: /^den G(ä|ae)sten$/,
};

export const rightAnswers3 = {
  s1: /^Haus$/,
  s2: /^Optimismus$/,
  s3: /^Besprechung$/,
  s4: /^Cafés$/,
  s5: /^Kosmos$/,
};

export const rightAnswers4 = {
  s1: /^Hauses$/,
  s2: /^Ergebnisses$/,
  s3: /^Cafés$/,
  s4: /^Kosmos$/,
  s5: /^Suffixes $/,
};

export const rightAnswers5 = {
  s1: /^des Vaters$/,
  s2: /^des Studenten$/,
  s3: /^der Nachbar$/,
  s4: /^meiner Schwester$/,
  s5: /^des K(ö|oe)nigs$/,
};





export const rightAnswers8 = {
  s1: /^Dekan$/,
  s2: /^Gast$/,
  s3: /^Planeten$/,
  s4: /^Herzen$/,
  s5: /^Eltern$/,
  s6: /^Buchstaben$/,
  s7: /^Professors$/,
  s8: /^Studenten$/,
  s9: /^Glauben$/,
  s10: /^Franzosen$/,
};

export const rightAnswers9 = {
  s1: /^Berlins$/,
  s2: /^der Elbe$/,
  s3: /^den Rhein$/,
  s4: /^Karls Auto$/,
  s5: /^Professor Kühns$/,
  s6: /^Friedrichs des Ersten$/,
  s7: /^Afrikas$/,
  s8: /^Herrn Gasanovs$/,
};

export const rightAnswers10 = {
    s1: /^Messenger$/,
    s2: /^Menschen$/,
    s3: /^Anfängen$/,
    s4: /^Internets$/,
    s5: /^F(ä|ae)llen$/,
    s6: /^Smartphones$/,
    s7: /^Messenger$/,
    s8: /^Funktionen$/,
    s9: /^Programme$/,
    s10: /^Messenger$/,
    s11: /^Smartphones$/,
    s12: /^M(ö|oe)glichkeit$/,
    s13: /^Familie$/,
    s14: /^Freunden$/,
    s15: /^Arbeitskollegen$/,
    s16: /^Sekunden$/,
    s17: /^Jahren$/,
    s18: /^Messenger$/,
    s19: /^Funktion$/,
    s20: /^Videotelefonie$/,
    s21: /^Sprachnachrichten$/,
    s22: /^Funktionen$/,
    s23: /^Nutzern$/,
    s24: /^New York$/,
    s25: /^Miami$/,
    s26: /^Nacht$/,
    s27: /^dem Flughafen$/,
    s28: /^den Flieger$/,
    s29: /^den großen Teich$/,
    s30: /^Europa$/,
    s31: /^dem Ende$/,
    s32: /^10 Minuten$/,
    s33: /^der Welt$/,
    s34: /^dem Flieger$/,
    s35: /^unsere Kamera$/,
    s36: /^die Stewardess$/,
    s37: /^dem Flieger$/,
    s38: /^den Kapitän$/,
    s39: /^einer (ä|ae)lteren Dame$/,
    s40: /^die Fotos$/,
    s41: /^bestimmten Produkten$/,
    s42: /^Umweltthemen$/,
    s43: /^dem Thema$/,
    s44: /^Fleischkonsum$/,
    s45: /^unseres Klimawandels$/,
    s46: /^der heutigen Zeit$/,
    s47: /^dem Nachdenken$/,
    s48: /^Vegetarier$/,
    s49: /^die absoluten (ö|oe)ko-Menschen$/,
    s50: /^den Kapit(ä|ae)n$/,
    s51: /^dem Kopf$/,

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
