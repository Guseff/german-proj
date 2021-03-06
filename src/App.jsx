import 'antd/dist/antd.css'
import 'video-react/dist/video-react.css'
import './assets/styles/index.css'

import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Layout } from 'antd'

import Footer from './components/common/Footer'
import Start from './views/Start'
import Media from './views/Media'
import NoMatch from './views/NoMatch'
import Prasence from './views/Prasence'
import Prater from './views/Prater'
import Perfect from './views/Perfect'

const App = () => {
  return (
    <Layout className="main-wrapper">
      <Layout className="page-wrapper light">
        <Router>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/media/:tense/:id" component={Media} />
            <Route path="/media/:tense" component={Media} />
            <Route path="/prasence" component={Prasence} />
            <Route path="/prater" component={Prater} />
            <Route path="/perfect" component={Perfect} />
            <Route path="/404" component={NoMatch} />
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </Router>
      </Layout>
      <Layout.Footer className="light">
        <Footer />
      </Layout.Footer>
    </Layout>
  )
}

export default App
