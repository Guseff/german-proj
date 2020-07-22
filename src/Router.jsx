import './assets/styles/index.css'
import 'bootstrap/dist/css/bootstrap.css'

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Footer from './components/Footer'
import Start from './components/Start'
import NoMatch from './components/NoMatch'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start />
        </Route>
        <Route path="/404">
          <NoMatch />
        </Route>
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
