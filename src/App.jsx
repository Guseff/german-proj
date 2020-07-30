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
import PageTemplate from './components/PageTemplate'

const { Footer } = Layout

const App = () => {
  return (
    <Layout className="main-wrapper">
      <Layout className="page-wrapper light">
        <Router>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/media/:id">
              <PageTemplate>
                <Media />
              </PageTemplate>
            </Route>
            <Route path="/404" component={NoMatch} />
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </Router>
      </Layout>
      <Footer className="light">
        <University />
      </Footer>
    </Layout>
  )
}

export default App
