import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import router from '../../router';

export default class Header extends Component {
    render(){
    return (
        <div className="header">
            <nav>
                <NavLink exact activeClassName='selected-link' to='/'>Home</NavLink>       
                <NavLink exact activeClassName='selected-link' to='/settings'>Settings</NavLink>       
                <NavLink exact activeClassName='selected-link' to='/candidate-signup'>Become a Candidate</NavLink>                     
            </nav>
            { router }
        </div>
        )
    }
}