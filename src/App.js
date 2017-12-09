import React, { Component } from 'react';
import router from './router';
import axios from 'axios';

import MatAppBar from './components/Material-UI/MatAppBar'
// import UserVerticalLinearStepper from './components/Material-UI/UserVerticalLinearStepper'
// import Header from './components/Header/Header'

import './reset.css'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      states: [],
      value: ''
    }

    this.handleChange= this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/state_names').then(( states ) => {
      this.setState({
        states: states.data
      })
    })
  }

  handleChange(e) {
   this.props.history.push(`/state/${e.target.value}`)
  } 

  render() {
    return (
      <div className="App">
        <MatAppBar/>
        <select onChange={this.handleChange} value={this.props.value ? this.props.value : '0'}>
         <option value="0" disabled>Choose a State</option>
          {this.state.states.map((e, i) => {
            return <option>{e.state_name}</option>
          })}
        </select>

        <h4>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</h4>
      </div>
    );
  }
}

export default App;
