import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

import MatAppBar from './../Material-UI/MatAppBar'
import StateSelector from './../Material-UI/StateSelector'

class FederalHouseofRepresentatives extends Component {

  constructor(props){
    super(props)

    this.state = {
      states: [],
      state: props.match.params,
      value: ''
    }

    this.handleChange=this.handleChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
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

  handleClick(e) {
    this.props.history.push(`/state/${this.state.state}/${e.target.name}`)    
  }

  render() {
    return (
      <div className="StateLandingChoice">
      {this.props.match.params.state}
      <br/>
        <MatAppBar/>
        <StateSelector/>
        <h2>Select a Candidate</h2>

      </div>
    );
  }
}

export default withRouter(FederalHouseofRepresentatives);