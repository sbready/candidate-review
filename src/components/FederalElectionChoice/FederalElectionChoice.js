import React, { Component } from 'react';

import axios from 'axios';

import MatAppBar from './../Material-UI/MatAppBar'
import StateSelector from './../Material-UI/StateSelector'


class FederalElectionChoice extends Component {

  constructor(props){
    super(props)

    this.state = {
      states: [],
      state: props.match.params,
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
    this.props.history.push(`${this.props.location.pathname}/${e.target.name}`)
  }

  render() {
    return (
      <div className="StateLandingChoice">
      {this.props.match.params.state}
      <br/>
        <MatAppBar/>
        <StateSelector/>
        
        <h2>Select the type of federal election you want information about</h2>
        <button onClick={ e => this.handleClick( e )} name='Senate'>Senate</button>
        <button onClick={ e => this.handleClick( e )} name='House'>House of Representatives</button>
      </div>
    );
  }
}

export default FederalElectionChoice;