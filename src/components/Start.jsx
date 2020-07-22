import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="start-page">
      <div className="start-page--university">
        Учреждение образования
        <br />
        “Брестский государственный университет имени А.С. Пушкина”
        <br />
        Кафедра немецкой филологии и лингводидактики
      </div>
      <div className="start-page--author">А.В. Гусева</div>
      <div className="start-page--intro">
        <div className="start-page--intro--title">НЕМЕЦКИЙ ЯЗЫК</div>
        <button type="button" className="start-page--intro--button">
          СТАРТ
        </button>
        <Link to="/44">404</Link>
        <div className="start-page--intro--description">
          Электронный интерактивный практикум
          <br />
          для студентов языковых специальностей
          <br />
          высших учебных заведений, изучающий немецкий язык как второй
          иностранный
        </div>
        <div className="start-page--intro--boss">
          Под редакцией кандидата педагогических наук, доцента
          <br />
          Е. Д. Осипова
        </div>
      </div>
    </div>
  )
}

export default Start
