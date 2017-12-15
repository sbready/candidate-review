import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

import MatAppBar from './../Material-UI/MatAppBar'
import StateSelector from './../Material-UI/StateSelector'
import Candidatepop from './../Candidates/Candidatepop'

class FederalSenate extends Component {

  constructor(props){
    super(props)

    this.state = {
      states: [],
      state: props.match.params,
      value: '',
      popArray: []
    }

    this.handleChange=this.handleChange.bind(this)
  }

  componentDidMount() {
    axios.get('/api/state_names').then(( states ) => {
      this.setState({
        states: states.data
      })
    }), 

    axios.get('/api/find_candidate_pop').then( ( popArray ) => {
      this.setState({
        popArray: popArray.data
      })
    })
  }

  handleChange(e) {
    this.props.history.push(`/state/${e.target.value}`)
  }

  handleClick(e) {
    console.log("PATHNAME", e.target)
    this.props.history.push(`${this.props.location.pathname}/${e.target.name}`)    
  }

  render() {
    return (
      <div className="StateLandingChoice">
      {this.props.match.params.state}
      <br/>
        <MatAppBar/>
        <StateSelector/>
        <h2>Select a Candidate</h2>

        <div>
          {this.state.popArray.map( ( e, i ) => {
            return  <Candidatepop key={i} handleClick={this.handleClick}/>
          })}
        </div>


      </div>
    );
  }
}

export default withRouter(FederalSenate);
