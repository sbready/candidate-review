import React from 'react'
import axios from 'axios'

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Home from 'material-ui/svg-icons/action/home';
import Create from 'material-ui/svg-icons/content/create';
import Settings from 'material-ui/svg-icons/action/settings';
import Person from 'material-ui/svg-icons/social/person';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


export default class MenuList extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            userVerified: true
        }

        this.handleClickHome=this.handleClickHome.bind(this)
        this.handleClickVote=this.handleClickVote.bind(this)
        this.handleClickRegister=this.handleClickRegister.bind(this)
        this.handleClickBallot=this.handleClickBallot.bind(this)
        this.handleClickSettings=this.handleClickSettings.bind(this)
    }

    handleClickHome(e) {
        this.props.closeDrawer()
        // this.props.history.push(`/`)
    }

    handleClickRegister(e) {
        this.props.closeDrawer()
        // this.props.history.push(`/registercandidate`)
    }

    handleClickVote(e) {
        this.props.closeDrawer()
        axios.get('/auth/verify')
            .catch( err => {
                console.log(err)
                this.setState({
                    userVerified: false
                })
            })
        // this.props.history.push(`/registervoter`)
    }

    handleClickBallot(e) {
        this.props.closeDrawer()
        axios.get('/auth/verify')
        // this.props.history.push(`/myballot`)
    }

    handleClickSettings(e) {
        this.props.closeDrawer()
        axios.get('/auth/verify')
        // this.props.history.push(`/settings`)
    }

    render(){

        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleClose}
            />,
          ];

        return(

            <List>
                <ListItem primaryText='Home' leftIcon={<Home/>} onClick={this.handleClickHome}/>
                <ListItem primaryText='Become a Candidate' leftIcon={<Person/>} onClick={this.handleClickRegister}/>
            <Divider />
                <ListItem primaryText='Register to Vote' leftIcon={<Create/>} onClick={this.handleClickVote}/>
                <ListItem primaryText='My Ballot' leftIcon={<CheckBox/>} onClick={this.handleClickBallot}/>
                <ListItem primaryText='Settings' leftIcon={<Settings/>} onClick={this.handleClickSettings}/>
                <Dialog 
                    actions={ actions } 
                    open={!this.state.userVerified} 
                    title='Login Required'
                />

            </List>


        )
    }
}

