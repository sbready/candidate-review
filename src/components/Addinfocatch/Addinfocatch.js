import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from './../../ducks/users';
import MatDatePicker from '../Material-UI/MatDatePicker';
import '../Addinfocatch/Addinfocatch.css';

class Addinfocatch extends Component {

    componentDidMount() {
        this.props.getUser()
    }

    render() {
        const addinfo = (
                <div className='info-container'>
                    <p>First Name: {this.props.user.name_first}</p>
                    <p>Last Name: {this.props.user.name_last}</p>
                    <p>Email: {this.props.user.email}</p>
                    <p>Birthday: <MatDatePicker/></p>
                    <p>Gender: {this.props.user.gender}</p>
                    <p>Street Address: </p>
                    <p>Street Address 2: </p>
                    <p>City: </p>
                    <p>State: </p>
                    <p>Zip Code: </p>
                </div>
        )

        return (
            <div>
                { addinfo }
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