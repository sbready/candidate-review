import React, { Component } from 'react';

import axios from 'axios';

import MatAppBar from './../Material-UI/MatAppBar'
import StateSelector from './../Material-UI/StateSelector'

class StateElectionChoice extends Component {

  constructor(props){
    super(props)

    this.state = {
      states: [],
      value: ''
    }

    this.handleChange=this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/state_names').then(( states ) => {
      this.setState({
        states: states.data
      })
    })
  }

  handleChange(e) {
    this.props.history.push(`/state/${e.target.innerText}`)
  } 

  handleClick(e) {
    this.props.history.push(`/state/${this.state.state}/${e.target.name}/${e.target.name}`)
  }

  render() {
      console.log(this.state)
    return (
      <div className="StateLandingChoice">
      {this.props.match.params.state}
      <br/>
        <MatAppBar/>
        <StateSelector/>

        <h2>Select the type of election you want information about</h2>
        <button onClick={ e => this.handleClick( e )} name='Governor'>Governor</button>
        <button onClick={ e => this.handleClick( e )} name='State_Senate'>State Senate</button>
        <button onClick={ e => this.handleClick( e )} name='State_House'>State House of Representatives</button>
      </div>
    );
  }
}

export default StateElectionChoice;