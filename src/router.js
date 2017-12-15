import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import App from './App'
import StateLandingChoice from './components/StateLandingChoice/StateLandingChoice'
import FederalElectionChoice from './components/FederalElectionChoice/FederalElectionChoice'
import StateElectionChoice from './components/StateElectionChoice/StateElectionChoice'
import RegisterVoter from './components/RegisterVoter/RegisterVoter'
import RegisterCandidate from './components/RegisterCandidate/RegisterCandidate'
import MyBallot from './components/MyBallot/MyBallot'
import Settings from './components/Settings/Settings'
import Addinfocatch from './components/Addinfocatch/Addinfocatch'
import FederalSenate from './components/FederalSenate/FederalSenate'
import FederalHouseofRepresentatives from './components/FederalHouseofRepresentatives/FederalHouseofRepresentatives'
import Profile from './components/Profile/profile'

class Router extends Component {
    render(){
        return(
            <Switch>
                <Route exact path='/' component={ App } /> 
                <Route path='/addinfocatch' component={ Addinfocatch } />
                <Route path='/registervoter' component={ RegisterVoter } /> 
                <Route path='/registercandidate' component={ RegisterCandidate } /> 
                <Route path='/myballot' component={ MyBallot } /> 
                <Route path='/settings' component={ Settings } /> 
                <Route path='/state/:state/Federal_Election/Senate/:Profile' component={ Profile } />
                <Route path='/state/:state/Federal_Election/Senate' component={ FederalSenate } />
                <Route path='/state/:state/Federal_Election/House' component={ FederalHouseofRepresentatives } />
                <Route path='/state/:state/Federal_Election' component={ FederalElectionChoice } />
                <Route path='/state/:state/State_Election' component={ StateElectionChoice } />
                <Route path='/state/:state' component={ StateLandingChoice } />
            </Switch>
        )
    }
}

export default withRouter(Router)