import React from 'react';
import { connect } from 'react-redux'
import { fetchAllData } from './../../ducks/users'
import axios from 'axios'

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
        return (
            <button onClick={ e => this.props.handleClick( this.props.candidate_id )} name={this.props.candidate_id}>
               <div className="card">
                    <img src="" alt="Avatar" />
                    <div className="container">
                        <h4><b>{this.state.userInfo.name_first} {this.state.userInfo.name_last}</b></h4> 
                        <p>{this.state.userInfo.political_affiliation_id}</p> 
                    </div>
                </div>
            </button>
        );
    }
}
  
function mapStateToProps(state) {
    return state
}
  
export default connect(mapStateToProps, {fetchAllData})(Candidatepop)


