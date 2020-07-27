import 'antd/dist/antd.css'
import './assets/styles/index.css'

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { Layout } from 'antd'

import University from './components/Footer'
import Start from './components/Start'
import Media from './components/Media'
import NoMatch from './components/NoMatch'

const { Footer } = Layout

const App = () => {
  return (
    <Router>
      <Layout className="main-wrapper">
        <Layout className="page-wrapper">
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/media/:id" component={Media} />
            <Route path="/404" component={NoMatch} />
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </Layout>
        <Footer>
          <University />
        </Footer>
      </Layout>
    </Router>
  )
}

export default App
