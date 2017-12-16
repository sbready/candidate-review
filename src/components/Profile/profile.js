import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAllData } from './../../ducks/users'

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
                    <h2>name'</h2>
                    <h3>party affiliation</h3>
                    <h4>website</h4>
                </div>
                <div className='biography'>
                    <h4>bio</h4>
                </div>
                <div className='policy'>
                    <h4>policy</h4>
                </div>
                <div className='photos'>
                    <img src="" alt="Avatar"/>
                </div>
            </div>
        )
    }

}



function mapStateToProps(state) {
    return state
}
  
export default withRouter(connect(mapStateToProps, { fetchAllData })(Profile))