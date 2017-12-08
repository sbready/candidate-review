import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App'
import StateLandingChoice from './components/StateLandingChoice/StateLandingChoice'
import FederalElectionChoice from './components/FederalElectionChoice/FederalElectionChoice'
import StateElectionChoice from './components/StateElectionChoice/StateElectionChoice'
import RegisterVoter from './components/RegisterVoter/RegisterVoter'
import RegisterCandidate from './components/RegisterCandidate/RegisterCandidate'
import MyBallot from './components/MyBallot/MyBallot'
import Settings from './components/Settings/Settings'

export default class Router extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' component={ App } /> 
                <Route path='/registervoter' component={ RegisterVoter } /> 
                <Route path='/registercandidate' component={ RegisterCandidate } /> 
                <Route path='/myballot' component={ MyBallot } /> 
                <Route path='/settings' component={ Settings } /> 
                <Route path='/state/:state' component={ StateLandingChoice } />
                <Route path='/state/:state/:federalelection' component={ FederalElectionChoice } />
                <Route path='/state/:state/:stateelection' component={ StateElectionChoice } />
            </Switch>
        )
    }
}