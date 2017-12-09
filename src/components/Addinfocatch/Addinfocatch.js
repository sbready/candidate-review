import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './../../ducks/users';
import '../Addinfocatch/Addinfocatch.css';
import MatAppBar from './../Material-UI/MatAppBar'
import UserVerticalStepper from './../Material-UI/UserVerticalStepper'

class Addinfocatch extends Component {

    

    componentDidMount() {
        this.props.getUser()
    }

    render() {
        return (
            <div>
                <MatAppBar/>
                <UserVerticalStepper user={this.props.user}/>
            </div> 
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.userData
    }
}

export default connect(mapStateToProps, { getUser })(Addinfocatch)