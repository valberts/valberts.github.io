import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }

}
