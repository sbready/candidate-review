import React, { Component } from 'react';
import './../StateElectionChoice/StateElectionChoice.css'
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

        <MatAppBar />
      
        <div className='state-landing-content'>
        
          <div className='StateLabel'>
            <h1>{this.props.match.params.state}</h1>
          </div>

          <div className='state-landing-selector'>
            <StateSelector />
          </div>

          <div className='state-landing-prompt'>
            <h2>Select a State Election:</h2>
          </div>
          <div className='state-landing-buttons'>
            <button className='button' onClick={ e => this.handleClick( e )} name='Governor'>Governor</button>
            <button className='button' onClick={ e => this.handleClick( e )} name='State_Senate'>State Senate</button>
            <button className='button' onClick={ e => this.handleClick( e )} name='State_House'>State House of Representatives</button>
          </div>
      </div>
      </div>
    );
  }
}

export default StateElectionChoice;