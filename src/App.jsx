import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout } from 'antd';

import LanguageProvider from './components/providers/LanguageProvider';
import Footer from './components/common/Footer';
import Start from './views/Start';
import Media from './views/Media';
import NoMatch from './views/NoMatch';
import Prasence from './views/Prasens';
import Prater from './views/Preter';
import Perfect from './views/Perfect';

const App = () => {
  return (
    <LanguageProvider>
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
    </LanguageProvider>
  );
};

export default App;
