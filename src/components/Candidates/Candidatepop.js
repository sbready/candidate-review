import React from 'react';
import { connect } from 'react-redux'
import { fetchAllData } from './../../ducks/users'
import axios from 'axios'
import Avatar from 'material-ui/Avatar'
import Candidatepopstyle from './Candidatepopstyle.css'

class Candidatepop extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {}
        }

    }

    componentDidMount(){

        axios.get(`/api/fetch_all_data/${this.props.candidate_id}`).then(( userInfo ) => {
            this.setState({
              userInfo: userInfo.data[0]
            })
          }) 

    }

    render() {
        this.state.userInfo
        const style = {margin: 5};
        return (
            <div className='card' onClick={ e => this.props.handleClick( this.props.candidate_id )} name={this.props.candidate_id}>
                <div className='candidatepop-card-avatar'>
                    <Avatar src='imageurl' size={55} style={style}/>
                </div>
                <div className="candidatepop-container">
                    <h3><b>{this.state.userInfo.name_first} {this.state.userInfo.name_last}</b></h3> 
                    <p>{this.state.userInfo.political_affiliation_id}</p> 
                </div>
            </div>
        );
    }
}
  
function mapStateToProps(state) {
    return state
}
  
export default connect(mapStateToProps, {fetchAllData})(Candidatepop)


