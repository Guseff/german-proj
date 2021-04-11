import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import LanguageProvider from './components/providers/LanguageProvider';
import Footer from './components/common/Footer';
import Start from './views/Start';
import Media from './views/Media';
import NoMatch from './views/NoMatch/NoMatch';
import Prasens from './views/Prasens/Prasens';
import Preter from './views/Preter/Preter';
import Perfect from './views/Perfect/Perfect';
import Deklination from './views/Deklination';
import Tests from './views/Tests/Tests';

import styles from './assets/styles/index.css';

const App = () => (
  <LanguageProvider>
    <main className={styles.mainWrapper}>
      <section className={styles.pageWrapper}>
        <Router>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/media/:tense/:id" component={Media} />
            <Route path="/media/:tense" component={Media} />
            <Route path="/tests/:tense" component={Tests} />
            <Route path="/prasens" component={Prasens} />
            <Route path="/preter" component={Preter} />
            <Route path="/perfect" component={Perfect} />
            <Route path="/deklination" component={Deklination} />
            <Route path="/404" component={NoMatch} />
            <Route path="*">
              <Redirect to="/404" />
            </Route>
          </Switch>
        </Router>
      </section>
      <Footer />
    </main>
  </LanguageProvider>
);

export default App;
