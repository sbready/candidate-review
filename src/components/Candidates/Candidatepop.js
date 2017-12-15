import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'

class Candidatepop extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        // this.handleClick=this.handleClick.bind(this)
    }

    handleClick() {
        // this.props.history.push(`/state/${this.state.state}/${e.target.name}`) 
    }

    render() {
        return (
            <button onClick={ e => this.props.handleClick( e )} name='Profile'>
               <div className="card">
                    <img src="" alt="Avatar" />
                    <div className="container">
                        <h4><b>{'e.name_first, e.name_last'}</b></h4> 
                        <p>{'e.partyaffiliation'}</p> 
                    </div>
                </div>
            </button>
        );
    }
}
  
function mapStateToProps(state) {
    return state
}
  
export default connect(mapStateToProps, {})(Candidatepop)


