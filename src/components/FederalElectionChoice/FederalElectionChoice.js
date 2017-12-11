import React, { Component } from 'react';
// import router from './router';
import axios from 'axios';

// import MatAppBar from './components/Material-UI/MatAppBar'
// import MatCompleted from './components/Material-UI/MatCompleted'
// import Header from './components/Header/Header'

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
    this.props.history.push(`/state/${e.target.value}`)
   } 

  render() {
    return (
      <div className="StateLandingChoice">
      {this.props.match.params.state}
      <br/>
        {/* <MatAppBar/> */}
        <select onChange={this.handleChange} value={this.props.value ? this.props.value : '0'}>
          <option value="0" disabled>Choose a State</option>
          {this.state.states.map((e, i) => {
            return <option>{e.state_name}</option>
          })}
        </select>
        <h2>Select the type of federal election you want information about</h2>
        <button>Senate</button>
        <button>House of Representatives</button>
      </div>
    );
  }
}

export default FederalElectionChoice;