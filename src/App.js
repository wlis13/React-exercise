import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Search from './pages/Search';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/search" component={ Search } />
        <Route exact path="/" component={ Home } />
      </Switch>


    );
  }
}

export default App;
