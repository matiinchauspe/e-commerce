import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Layout } from 'Components/Layout';
import {
  Home,
  Checkout,
  Payment,
  Success,
  NotFound,
  Information,
} from 'Containers';
import useInitialState from 'Hooks/useInitialState';
import AppContext from 'Context/AppContext';
import { GlobalStyle } from '../GlobalStyles';

const App = () => {
  const initialState = useInitialState();
  return (
    <>
      <GlobalStyle />
      <AppContext.Provider value={initialState}>
        <Router>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/checkout" component={Checkout} />
              <Route
                exact
                path="/checkout/information"
                component={Information}
              />
              <Route exact path="/checkout/payment" component={Payment} />
              <Route exact path="/checkout/success" component={Success} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </AppContext.Provider>
    </>
  );
};

export default App;
