import React, { Component } from 'react';
import './App.css';
import Main from './Main'
import {Route, Switch, Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
