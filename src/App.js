import React, { Component } from 'react';

import BuildBurger from './containers/BuildBurger';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
        <BuildBurger />
        </Layout>
      </div>
    );
  }
}

export default App;
