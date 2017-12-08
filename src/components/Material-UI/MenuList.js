import React from 'react'

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Home from 'material-ui/svg-icons/action/home';
import Create from 'material-ui/svg-icons/content/create';
import Settings from 'material-ui/svg-icons/action/settings';
import Person from 'material-ui/svg-icons/social/person';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';


export default class MenuList extends React.Component {

    constructor(props){
        super(props)

        this.state = {

        }

        this.handleClickHome=this.handleClickHome.bind(this)
        this.handleClickVote=this.handleClickVote.bind(this)
        this.handleClickRegister=this.handleClickRegister.bind(this)
        this.handleClickBallot=this.handleClickBallot.bind(this)
        this.handleClickSettings=this.handleClickSettings.bind(this)
    }

    handleClickHome(e) {
        this.props.closeDrawer
        this.props.history.push(`/`)
    }

    handleClickVote(e) {
        this.props.closeDrawer
        this.props.history.push(`/registervoter`)
    }

    handleClickRegister(e) {
        this.props.closeDrawer
        this.props.history.push(`/registercandidate`)
    }

    handleClickBallot(e) {
        this.props.closeDrawer
        this.props.history.push(`/myballot`)
    }

    handleClickSettings(e) {
        this.props.closeDrawer
        this.props.history.push(`/settings`)
    }

    render(){
        return(

            <List>
                <ListItem primaryText='Home' leftIcon={<Home/>} onClick={this.handleClickHome}/>
                <ListItem primaryText='Register to Vote' leftIcon={<Create/>} onClick={this.handleClickVote}/>
            <Divider />
                <ListItem primaryText='Become a Candidate' leftIcon={<Person/>} onClick={this.handleClickRegister}/>
                <ListItem primaryText='My Ballot' leftIcon={<CheckBox/>} onClick={this.handleClickBallot}/>
                <ListItem primaryText='Settings' leftIcon={<Settings/>} onClick={this.handleClickSettings}/>
            </List>

        )
    }
}

