import React, { useState } from 'react';
import { useFormik } from 'formik';

import { Input } from 'Common/components/Input';
import { CheckButton } from 'Common/components/CheckButton';
import { rightAnswers10 as rightAnswers } from '../consts/answers';
import { TTestResult } from '../../types';
import { checkInputAnswerHandle, getAnswersInitialValues } from '../../utils';

const initialValues = getAnswersInitialValues(rightAnswers);

const Task7 = (): JSX.Element => {
  const [matches, setMatches] = useState<TTestResult>(initialValues);

  const formik = useFormik({
    initialValues,
    onSubmit: values => {
      setMatches(checkInputAnswerHandle(values, rightAnswers));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <p>
        Die verschiedenen&nbsp;
        <Input
          id="s1"
          onChange={formik.handleChange}
          className={matches.s1}
          small
        />
        &nbsp;(Messenger, Pl) gehören heute schon zum Alltag vieler&nbsp;
        <Input
          id="s2"
          onChange={formik.handleChange}
          className={matches.s2}
          small
        />
        &nbsp;(Menschen) dazu. Seit den&nbsp;
        <Input
          id="s3"
          onChange={formik.handleChange}
          className={matches.s3}
          small
        />
        &nbsp;(Anfänge) des&nbsp;
        <Input
          id="s4"
          onChange={formik.handleChange}
          className={matches.s4}
          small
        />
        &nbsp;(Internet) werden diese genutzt und befinden sich in den
        meisten&nbsp;
        <Input
          id="s5"
          onChange={formik.handleChange}
          className={matches.s5}
          small
        />
        &nbsp;(Fälle) auf den eigenen&nbsp;
        <Input
          id="s6"
          onChange={formik.handleChange}
          className={matches.s6}
          small
        />
        &nbsp;(Smartphones). Neben bekannten&nbsp;
        <Input
          id="s7"
          onChange={formik.handleChange}
          className={matches.s7}
          small
        />
        &nbsp;(Messenger) wie beispielsweise WhatsApp und Facebook gibt es auch
        noch viele weitere, auf die man heute zurückgreifen kann und die
        zugleich verschiedene&nbsp;
        <Input
          id="s8"
          onChange={formik.handleChange}
          className={matches.s8}
          small
        />
        &nbsp;(Funktionen) und besondere&nbsp;
        <Input
          id="s9"
          onChange={formik.handleChange}
          className={matches.s9}
          small
        />
        &nbsp;(Programme) bieten können.
      </p>
      <p>
        Mittlerweile sieht man deutlich, dass die meisten&nbsp;
        <Input
          id="s10"
          onChange={formik.handleChange}
          className={matches.s10}
          small
        />
        &nbsp;(Messenger) besonders auf den&nbsp;
        <Input
          id="s11"
          onChange={formik.handleChange}
          className={matches.s11}
          small
        />
        &nbsp;(Smartphones) heute beliebt sind. Schließlich bieten diese eine
        sehr gute&nbsp;
        <Input
          id="s12"
          onChange={formik.handleChange}
          className={matches.s12}
          small
        />
        &nbsp;(Möglichkeit), um der&nbsp;
        <Input
          id="s13"
          onChange={formik.handleChange}
          className={matches.s13}
          small
        />
        &nbsp;(Familie),&nbsp;
        <Input
          id="s14"
          onChange={formik.handleChange}
          className={matches.s14}
          small
        />
        &nbsp;(Freunde), Bekannten und selbst&nbsp;
        <Input
          id="s15"
          onChange={formik.handleChange}
          className={matches.s15}
          small
        />
        &nbsp;(Arbeitskollegen) in wenigen&nbsp;
        <Input
          id="s16"
          onChange={formik.handleChange}
          className={matches.s16}
          small
        />
        &nbsp;(Sekunden) schreiben zu können. Bis zu 90 Prozent der Menschen
        zwischen 16 und 45&nbsp;
        <Input
          id="s17"
          onChange={formik.handleChange}
          className={matches.s17}
          small
        />
        &nbsp;(Jahre) nutzen heute Messenger, um zu kommunizieren. Menschen ab
        75 Jahre nutzen diese etwa nur zu 50 Prozent.
      </p>
      <p>
        Die absoluten Highlights bei den zahlreichen&nbsp;
        <Input
          id="s18"
          onChange={formik.handleChange}
          className={matches.s18}
          small
        />
        &nbsp;(Messenger) ist unter anderem die&nbsp;
        <Input
          id="s19"
          onChange={formik.handleChange}
          className={matches.s19}
          small
        />
        &nbsp;(Funktion) der&nbsp;
        <Input
          id="s20"
          onChange={formik.handleChange}
          className={matches.s20}
          small
        />
        &nbsp;(Videotelefonie), aber auch die Nutzung von&nbsp;
        <Input
          id="s21"
          onChange={formik.handleChange}
          className={matches.s21}
          small
        />
        &nbsp;(Sprachnachrichten). Durch diese&nbsp;
        <Input
          id="s22"
          onChange={formik.handleChange}
          className={matches.s22}
          small
        />
        &nbsp;(Funktionen) kann man sich noch schneller austauschen und das
        völlig kostenlos. Beliebt sind beide Varianten heute bei den&nbsp;
        <Input
          id="s23"
          onChange={formik.handleChange}
          className={matches.s23}
          small
        />
        &nbsp;(Nutzer). (Quelle: Das Wissensblog)
      </p>
      <p>Aus einem Reiseblog:</p>
      <p>
        Von&nbsp;
        <Input
          id="s24"
          onChange={formik.handleChange}
          className={matches.s24}
          small
        />
        &nbsp;(New York) ging es nach&nbsp;
        <Input
          id="s25"
          onChange={formik.handleChange}
          className={matches.s25}
          small
        />
        &nbsp;(Miami). Dort haben wir dann eine&nbsp;
        <Input
          id="s26"
          onChange={formik.handleChange}
          className={matches.s26}
          small
        />
        &nbsp;(Nacht) verbracht (also an&nbsp;
        <Input
          id="s27"
          onChange={formik.handleChange}
          className={matches.s27}
          small
        />
        &nbsp;(der Flughafen) natürlich), und stiegen in&nbsp;
        <Input
          id="s28"
          onChange={formik.handleChange}
          className={matches.s28}
          small
        />
        &nbsp;(der Flieger), der uns über&nbsp;
        <Input
          id="s29"
          onChange={formik.handleChange}
          className={matches.s29}
          small
        />
        &nbsp;(der große Teich) brachte. Woran wir merken, dass wir in&nbsp;
        <Input
          id="s30"
          onChange={formik.handleChange}
          className={matches.s30}
          small
        />
        &nbsp;(Europa) sind? Dass wir eine Stunde brauchten, um Internet zu
        finden und an&nbsp;
        <Input
          id="s31"
          onChange={formik.handleChange}
          className={matches.s31}
          small
        />
        &nbsp;(das Ende) 9 Pfund gezahlt haben, um online sein zu können.
        Internet ist trotzdem alle&nbsp;
        <Input
          id="s32"
          onChange={formik.handleChange}
          className={matches.s32}
          small
        />
        &nbsp;(10 Minuten) weg.
      </p>
      <p>
        Oh, oder dass man überall auf&nbsp;
        <Input
          id="s33"
          onChange={formik.handleChange}
          className={matches.s33}
          small
        />
        &nbsp;(die Welt) in&nbsp;
        <Input
          id="s34"
          onChange={formik.handleChange}
          className={matches.s34}
          small
        />
        &nbsp;(der Flieger) in&nbsp;
        <Input
          id="s35"
          onChange={formik.handleChange}
          className={matches.s35}
          small
        />
        &nbsp;(unsere Kamera) gelächelt hat, während&nbsp;
        <Input
          id="s36"
          onChange={formik.handleChange}
          className={matches.s36}
          small
        />
        &nbsp;(die Stewardess) bei Condor uns bat die Aufnahmen aus&nbsp;
        <Input
          id="s37"
          onChange={formik.handleChange}
          className={matches.s37}
          small
        />
        &nbsp;(der Flieger) zu löschen. „Sonst muss ich&nbsp;
        <Input
          id="s38"
          onChange={formik.handleChange}
          className={matches.s38}
          small
        />
        &nbsp;(der Kapitän) rufen!“, sagte sie noch, während sie sich das
        Handy&nbsp;
        <Input
          id="s39"
          onChange={formik.handleChange}
          className={matches.s39}
          small
        />
        &nbsp;(eine ältere Dame) schnappte und&nbsp;
        <Input
          id="s40"
          onChange={formik.handleChange}
          className={matches.s40}
          small
        />
        &nbsp;(die Fotos) dort gleich persönlich löschte. Unser Denken. Das hat
        sich verändert. In vielerlei Hinsicht. Zu&nbsp;
        <Input
          id="s41"
          onChange={formik.handleChange}
          className={matches.s41}
          small
        />
        &nbsp;(bestimmte Produkte), die wir sonst immer konsumiert haben.
        Zu&nbsp;
        <Input
          id="s42"
          onChange={formik.handleChange}
          className={matches.s42}
          small
        />
        &nbsp;(Umweltthemen), bei denen wir vorher oft die Augen verdreht haben.
      </p>
      <p>
        Sogar zu&nbsp;
        <Input
          id="s43"
          onChange={formik.handleChange}
          className={matches.s43}
          small
        />
        &nbsp;(das Thema)&nbsp;
        <Input
          id="s44"
          onChange={formik.handleChange}
          className={matches.s44}
          small
        />
        &nbsp;(Fleischkonsum). Eine harte Einsicht besonders für mich, als
        Fleischliebhaberin. Ich habe gelernt, dass dies der größte und
        schlimmste Faktor&nbsp;
        <Input
          id="s45"
          onChange={formik.handleChange}
          className={matches.s45}
          small
        />
        &nbsp;(unser Klimawandel)&nbsp;
        <Input
          id="s46"
          onChange={formik.handleChange}
          className={matches.s46}
          small
        />
        &nbsp;(die heutige Zeit) ist. Das bringt dich nun mal zu&nbsp;
        <Input
          id="s47"
          onChange={formik.handleChange}
          className={matches.s47}
          small
        />
        &nbsp;(das Nachdenken). Wir kommen nicht als&nbsp;
        <Input
          id="s48"
          onChange={formik.handleChange}
          className={matches.s48}
          small
        />
        &nbsp;(Vegetarier) zurück, nicht als&nbsp;
        <Input
          id="s49"
          onChange={formik.handleChange}
          className={matches.s49}
          small
        />
        &nbsp;(die absoluten Öko-Menschen) – aber als Menschen, die das Gefühl
        haben, die Zusammenhänge besser zu verstehen und bei denen gerade viel
        in&nbsp;
        <Input
          id="s50"
          onChange={formik.handleChange}
          className={matches.s50}
          small
        />
        &nbsp;(der Kopf) rattert. ( Quelle )
      </p>
      <CheckButton type="submit">Check</CheckButton>
    </form>
  );
};

export default Task7;
