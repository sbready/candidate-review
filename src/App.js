import React, { Component } from 'react';
// import axios from 'axios';
import { withRouter } from 'react-router-dom'

import MatAppBar from './components/Material-UI/MatAppBar'
import StateSelector from './components/Material-UI/StateSelector'
// import whitehouse from './'

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

        <div className='homepage'>

          <div className='title'>
            <h1>The Candidate Review</h1>
          </div>

          <div className='state-selector'>
            <StateSelector />
          </div>

          <div className='homeText'>
            <h4>An enlightened citizenry is indispensable for the proper functioning of a republic. Self-government is not possible unless the citizens are educated sufficiently to enable them to exercise oversight. It is therefore imperative that the nation see to it that a suitable education be provided for all its citizens.<br/></h4>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(App);
