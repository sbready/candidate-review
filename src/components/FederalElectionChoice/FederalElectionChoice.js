import React, { Component } from 'react';

import axios from 'axios';
import './../FederalElectionChoice/FederalElectionChoice.css'

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
      <div className="FederalElectionChoice">

        <MatAppBar/>

        <div className='federal-choice-content'>

          <div className='StateLabel'>
            <h1>{this.props.match.params.state}</h1>
          </div>

          <div className='state-selector'>
            <StateSelector />
          </div>

          <div className='federal-choice-prompt'>
            <h2>Select a Federal Election:</h2>
          </div>

          <div className='federal-landing-buttons'>

            <button className='button' onClick={ e => this.handleClick( e )} name='Senate'>Senate</button>
            <button className='button' onClick={ e => this.handleClick( e )} name='House'>House of Representatives</button>
          
          </div>

        </div>

      </div>
    );
  }
}

export default FederalElectionChoice;