import React, { Component } from 'react';
// import axios from 'axios';
import { withRouter } from 'react-router-dom'

import MatAppBar from './components/Material-UI/MatAppBar'
import StateSelector from './components/Material-UI/StateSelector'

import './reset.css'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      states: [],
      value: ''
    }
  }

  render() {
    return (
      <div className="App">
        <MatAppBar/>
        <StateSelector/>

        <h4>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h4>

      </div>
    );
  }
}

export default withRouter(App);
