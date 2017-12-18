import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchAllData } from './../../ducks/users'
import axios from 'axios'
import './profile.css'
import MatAppBar from './../Material-UI/MatAppBar'
import FontAwesome from 'react-fontawesome'
import Avatar from 'material-ui/Avatar'

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userInfo: {}
        }
    }

    componentDidMount() {
        axios.get(`/api/fetch_all_data/${this.props.match.params.Profile}`).then((userInfo) => {
            this.setState({
                userInfo: userInfo.data[0]
            })
        })

    }

    render() {
        console.log(this.state.userInfo)
        const style = { margin: 5 };
        return (
            <div className="profile-template">
                <MatAppBar />
                <div className='profile-background-image'>
                </div>
                <div className='profile-styled-contents'>
                    <div className='profile-avatar'>
                        <Avatar src='imageurl' size={100} style={style} />
                    </div>
                    <div className='profile-header'>
                        <div className="profile-candidate-info">
                            <h1>{this.state.userInfo.name_first} {this.state.userInfo.name_last}</h1>
                            <p>{this.state.userInfo.state_abbrev}-{this.state.userInfo.political_affiliation}</p>
                            <div className='profile-website'>
                                <a href={this.state.userInfo.website}>
                                    {this.state.userInfo.website}
                                </a>
                            </div>
                            <div className='profile-social-icons'>
                                <div>
                                    <a href={this.state.userInfo.facebook}>
                                        <FontAwesome
                                            className='fa-facebook-square'
                                            name='Facebook'
                                            size='1x'
                                        />
                                    </a>
                                </div>
                                <div className='profile-icon'>
                                    <a href={this.state.userInfo.twitter}>
                                        <FontAwesome
                                            className='fa-twitter'
                                            name='Twitter'
                                            size='1x'
                                        />
                                    </a>
                                </div>
                                <div>
                                    <a href={this.state.userInfo.instagram}>
                                        <FontAwesome
                                            className='fa fa-instagram'
                                            name='Instagram'
                                            size='1x'
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='profile-bio'>
                        <h2><b>Get to Know Me</b></h2>
                        <br />
                        <p>{this.state.userInfo.biography}</p>
                    </div>
                    <div className='profile-policy'>
                        <h2><b>Get to Know My Policies</b></h2>
                        <br />
                        <p>{this.state.userInfo.policy}</p>
                    </div>
                </div>
            </div>
        );
    }

}



function mapStateToProps(state) {
    return state
}

export default withRouter(connect(mapStateToProps, { fetchAllData })(Profile))
