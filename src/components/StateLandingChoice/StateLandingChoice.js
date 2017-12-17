import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import './StateLandingChoice.css'
import MatAppBar from './../Material-UI/MatAppBar'
import StateSelector from './../Material-UI/StateSelector'


class StateLandingChoice extends Component {

  constructor(props){
    super(props)

    this.state = {
      states: [],
      state: props.match.params.state,
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
      this.props.history.push(`/state/${e.target.innerText}`)
  } 

  handleClick(e) {
      this.props.history.push(`/state/${this.state.state}/${e.target.name}`)
  }

  render() {
    return (
      <div className="StateLandingChoice">
      
        <MatAppBar/>
        <div className='state-landing-content'>
          <div className='StateLabel'>
            <h1>{this.props.match.params.state}</h1>
          </div>
          <div className='state-landing-selector'>
            <StateSelector/>
          </div>
          <div className='state-landing-prompt'>
            <h2>Select the type of election you want information about</h2>
          </div>
          <div className='state-landing-buttons'>
            <button onClick={ e => this.handleClick( e )} name='State_Election'>State Elections</button>
            <button onClick={ e => this.handleClick( e )} name='Federal_Election'>Federal Elections</button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(StateLandingChoice);