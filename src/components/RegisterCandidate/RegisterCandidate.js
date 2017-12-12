import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './../../ducks/users';
import '../RegisterCandidate/RegisterCandidate.css';
import MatAppBar from './../Material-UI/MatAppBar';
import CandidateVerticalStepper from './../Material-UI/CandidateVerticalStepper';


class RegisterCandidate extends Component {

    

    componentDidMount() {
        this.props.getUser()
    }

    render() {
        return (
            <div>
                <MatAppBar/>
                <CandidateVerticalStepper user={this.props.user}/>
            </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userData
    }
}

export default withRouter(connect(mapStateToProps, { getUser })(RegisterCandidate))