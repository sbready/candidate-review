import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return(
            <div>
                <div className='Infobox'>
                    <image></image>
                    <h2>{this.props.user.name_first}{this.props.user.name_last}</h2>
                    <h3>{this.props.user.party_affiliation}</h3>
                    <h4>{this.props.user.website}</h4>
                </div>
                <div className='biography'>
                    <h4>{this.props.user.biography}</h4>
                </div>
                <div className='policy'>
                    <h4>{this.props.user.policy}</h4>
                </div>
                <div className='photos'>
                    <image></image>
                </div>
            </div>
        )
    }

}


export default withRouter(Profile)