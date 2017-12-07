import React from 'react'

import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Home from 'material-ui/svg-icons/action/home';
import Create from 'material-ui/svg-icons/content/create';
import Settings from 'material-ui/svg-icons/action/settings';
import Person from 'material-ui/svg-icons/social/person';
import CheckBox from 'material-ui/svg-icons/toggle/check-box';


export default class MenuList extends React.Component {

    render(){
        return(

            <List>
                <ListItem primaryText='Home' leftIcon={<Home/>} onClick={this.props.closeDrawer}/>
                <ListItem primaryText='Register to Vote' leftIcon={<Create/>} onClick={this.props.closeDrawer}/>
            <Divider />
                <ListItem primaryText='Become a Candidate' leftIcon={<Person/>} onClick={this.props.closeDrawer}/>
                <ListItem primaryText='My Ballot' leftIcon={<CheckBox/>} onClick={this.props.closeDrawer}/>
                <ListItem primaryText='Settings' leftIcon={<Settings/>} onClick={this.props.closeDrawer}/>
            </List>

        )
    }
}

