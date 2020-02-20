import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import BuildBurger from './containers/BuildBurger/BuildBurger';
import Layout from './hoc/Layout/Layout';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Layout>
          <Switch>
            <Route exact path="/" component={BuildBurger} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
